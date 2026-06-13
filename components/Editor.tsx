'use client';

import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
// @ts-ignore
import Code from '@calumk/editorjs-codecup';
import Quote from '@editorjs/quote';
import List from '@editorjs/list';
// @ts-ignore
import Checklist from '@editorjs/checklist';
// @ts-ignore
import Math from '@n0str/editorjs-math';

export default function Editor({ initialData, onChange }: { initialData?: any, onChange: (data: any) => void }) {
  const editorRef = useRef<EditorJS | null>(null);
  const onChangeRef = useRef(onChange);

  // Keep latest onChange without causing effect to re-run
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    if (!editorRef.current) {
      editorRef.current = new EditorJS({
        holder: 'editorjs-container',
        data: initialData || {
          blocks: [
            { type: 'header', data: { text: 'نوشته جدید', level: 2 } },
            { type: 'paragraph', data: { text: 'شروع به نوشتن کنید... (برای تست فرمول بنویسید: $$ f(n) = \\mathcal{O}(n \\log n) $$)' } }
          ]
        },
        placeholder: 'شروع به نوشتن کنید...',
        tools: {
          header: {
            class: Header as any, // Type coercion due to @editorjs typing mismatches
            config: { levels: [2, 3, 4], defaultLevel: 2 }
          },
          list: {
            class: List as any,
            inlineToolbar: true,
            config: { defaultStyle: 'unordered' }
          },
          checklist: {
            class: Checklist as any,
            inlineToolbar: true,
          },
          math: {
            class: Math as any,
            shortcut: 'CMD+M'
          },
          code: Code as any,
          quote: Quote as any,
        },
        i18n: {
          direction: 'rtl',
          messages: {
            ui: {
              blockTunes: {
                toggler: {
                  "Click to tune": "تنظیمات",
                  "or drag to move": "یا بکشید و جابه‌جا کنید"
                }
              },
              inlineToolbar: {
                converter: {
                  "Convert to": "تبدیل به"
                }
              },
              toolbar: {
                toolbox: {
                  Add: "افزودن بلاک"
                }
              }
            },
            toolNames: {
              "Text": "متن",
              "Heading": "عنوان",
              "List": "لیست",
              "Checklist": "چک‌لیست",
              "Math": "ریاضی / فرمول",
              "Quote": "نقل‌قول",
              "Code": "کد"
            },
            blockTunes: {
              "delete": {
                "Delete": "حذف"
              },
              "moveUp": {
                "Move up": "بالا"
              },
              "moveDown": {
                "Move down": "پایین"
              }
            }
          }
        },
        onChange: async (api) => {
          const data = await api.saver.save();
          onChangeRef.current(data);
        }
      });
    }

    return () => {
      if (editorRef.current && editorRef.current.destroy) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      id="editorjs-container" 
      className="prose prose-lg dark:prose-invert max-w-none w-full border-0 outline-none text-right" 
      dir="rtl" 
    />
  );
}
