'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Check, Eye, Code } from 'lucide-react';
import BlockRenderer from '@/components/BlockRenderer';

const Editor = dynamic(() => import('@/components/Editor'), { ssr: false });

export default function EditorPage() {
  const [data, setData] = useState<any>({ blocks: [] });
  const [viewMode, setViewMode] = useState<'both' | 'edit' | 'preview'>('edit');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full animate-in fade-in duration-500">
      
      {/* Toolbar */}
      <div className="bg-white dark:bg-[#121217] border border-slate-200 dark:border-gray-800 rounded-2xl p-4 mb-8 flex justify-between items-center shadow-sm sticky top-24 z-40">
        <div className="flex gap-2 text-sm font-bold items-center px-4">
          <span className="text-slate-900 dark:text-white">ویرایشگر مقاله</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex bg-slate-100 dark:bg-gray-800 p-1 rounded-xl">
            <button onClick={() => setViewMode('edit')} className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${viewMode === 'edit' ? 'bg-white dark:bg-gray-600 shadow-sm' : 'text-slate-500'}`}><Code size={16}/> ویرایش</button>
            <button onClick={() => setViewMode('both')} className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors hidden lg:block ${viewMode === 'both' ? 'bg-white dark:bg-gray-600 shadow-sm' : 'text-slate-500'}`}>دوپنجره</button>
            <button onClick={() => setViewMode('preview')} className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${viewMode === 'preview' ? 'bg-white dark:bg-gray-600 shadow-sm' : 'text-slate-500'}`}><Eye size={16}/> نمایش</button>
          </div>
          <button className="bg-amber-500 hover:bg-amber-600 text-[#0a0a0c] px-6 py-2 rounded-xl font-bold flex items-center gap-2 transition-colors">
            <Check size={18} /> انتشار
          </button>
        </div>
      </div>

      <div className={`grid grid-cols-1 ${viewMode === 'both' ? 'lg:grid-cols-2 gap-12' : ''}`}>
        
        {/* EDITOR AREA */}
        {(viewMode === 'edit' || viewMode === 'both') && (
          <div className="p-4 md:p-8 bg-transparent">
            {/* The Editor operates purely inline, borderless, conforming to background */}
            <Editor onChange={(newData) => setData(newData)} />
          </div>
        )}

        {/* PREVIEW AREA */}
        {(viewMode === 'preview' || viewMode === 'both') && (
          <div className="bg-transparent lg:bg-slate-50 lg:dark:bg-[#121217]/50 lg:p-8 lg:rounded-3xl lg:border lg:border-slate-200 lg:dark:border-gray-800 h-fit sticky top-48">
            <div className="flex items-center justify-between mb-8 border-b border-slate-200 dark:border-gray-800 pb-4">
               <span className="text-amber-500 font-bold bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-full text-xs">نمایش زنده</span>
               <div className="text-xs text-slate-400 font-mono bg-slate-100 dark:bg-gray-800 px-2 py-1 rounded">API Size: {JSON.stringify(data).length}b</div>
            </div>
            {!data?.blocks?.length ? (
              <div className="text-center text-slate-400 py-20 italic">مقاله‌ای وجود ندارد. شروع به نوشتن کنید.</div>
            ) : (
              <BlockRenderer blocks={data.blocks} />
            )}
          </div>
        )}

      </div>
    </div>
  );
}
