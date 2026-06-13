import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { InlineMath, BlockMath } from 'react-katex';

export type EditorJSBlock = {
  id: string;
  type: string;
  data: any;
};

const renderTextWithMath = (text: string) => {
  if (!text) return null;
  // if it strictly starts and ends with $$
  if (text.trim().startsWith('$$') && text.trim().endsWith('$$')) {
    const mathStr = text.trim().slice(2, -2).replace(/<br>/g, '').replace(/&nbsp;/g, ' ');
    return <BlockMath math={mathStr} />;
  }

  // Split by $$ for inline or mixed usages
  const parts = text.split(/\$\$(.*?)\$\$/g);
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      const mathStr = part.replace(/<br>/g, '').replace(/&nbsp;/g, ' ');
      return <InlineMath key={i} math={mathStr} />;
    }
    return <span key={i} dangerouslySetInnerHTML={{ __html: part }} />;
  });
};

export default function BlockRenderer({ blocks }: { blocks: EditorJSBlock[] }) {
  if (!blocks || !Array.isArray(blocks)) return null;

  return (
    <div className="prose prose-lg dark:prose-invert prose-slate max-w-none text-slate-700 dark:text-gray-300 leading-loose">
      {blocks.map((block) => {
        switch (block.type) {
          case 'header':
          case 'heading':
            const H = `h${block.data.level || 2}` as any;
            return (
              <H key={block.id} className="font-bold text-slate-900 dark:text-white mt-12 mb-6" dangerouslySetInnerHTML={{ __html: block.data.text }} />
            );
          
          case 'paragraph':
            return (
              <div key={block.id} className="mb-6 whitespace-pre-wrap leading-loose">
                {renderTextWithMath(block.data.text)}
              </div>
            );
          
          case 'code':
            return (
              <div key={block.id} className="rounded-2xl overflow-hidden mb-8 shadow-sm border border-slate-200 dark:border-gray-800" dir="ltr">
                <div className="bg-slate-100 dark:bg-[#121217] px-4 py-2 border-b border-slate-200 dark:border-gray-800 flex justify-between items-center">
                  <span className="text-xs font-mono text-slate-500 dark:text-gray-400 capitalize">code</span>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400 opacity-80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-80" />
                  </div>
                </div>
                <SyntaxHighlighter
                  language={'javascript'}
                  style={vscDarkPlus}
                  customStyle={{ margin: 0, background: 'var(--tw-prose-pre-bg)', padding: '1.5rem', fontSize: '0.875rem' }}
                >
                  {block.data.code || ''}
                </SyntaxHighlighter>
              </div>
            );
          
          case 'quote':
            return (
              <blockquote key={block.id} className="border-r-4 border-amber-500 pr-6 py-2 my-8 bg-amber-50 dark:bg-amber-500/5 rounded-l-2xl">
                <p className="italic text-slate-700 dark:text-gray-300 text-lg m-0" dangerouslySetInnerHTML={{ __html: block.data.text }}></p>
                {block.data.caption && (
                  <footer className="text-sm text-slate-500 mt-2 font-medium" dangerouslySetInnerHTML={{ __html: `— ${block.data.caption}` }}></footer>
                )}
              </blockquote>
            );
          
          case 'list':
            const ListTag = block.data.style === 'ordered' ? 'ol' : 'ul';
            return (
              <ListTag key={block.id} className={`${block.data.style === 'ordered' ? 'list-decimal' : 'list-disc'} pl-4 pr-8 mb-6 ml-4 marker:text-slate-400 dark:marker:text-gray-500`}>
                {block.data.items.map((item: any, i: number) => {
                  const content = typeof item === 'string' ? item : (item.content || item.text || '');
                  return <li key={i} dangerouslySetInnerHTML={{ __html: content }} className="mb-2 leading-relaxed" />
                })}
              </ListTag>
            );

          case 'checklist':
            return (
              <ul key={block.id} className="mb-6 space-y-2 pr-0 list-none">
                {block.data.items.map((item: any, i: number) => {
                  const content = typeof item === 'string' ? item : (item.text || item.content || '');
                  const isChecked = item.checked === true;
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <input 
                        type="checkbox" 
                        className="mt-1.5 shrink-0 rounded border-slate-300 dark:border-gray-700 bg-slate-50 dark:bg-[#121217] text-amber-500 focus:ring-amber-500"
                        checked={isChecked} 
                        readOnly 
                      />
                      <span 
                        dangerouslySetInnerHTML={{ __html: content }} 
                        className={`${isChecked ? 'line-through text-slate-400 dark:text-gray-500' : 'text-slate-700 dark:text-gray-300'} leading-relaxed`} 
                      />
                    </li>
                  )
                })}
              </ul>
            );

          case 'math':
            return (
              <div key={block.id} className="my-8 flex justify-center text-xl overflow-x-auto text-slate-800 dark:text-gray-200">
                <BlockMath math={block.data.text || block.data.math || ''} />
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
