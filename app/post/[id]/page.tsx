import { MOCK_POSTS, CATEGORY_STYLES, MOCK_AUTHOR } from '@/lib/data';
import { Clock, Bookmark, Share2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import BlockRenderer, { EditorJSBlock } from '@/components/BlockRenderer';

export type { EditorJSBlock };

const dummyBlocks: EditorJSBlock[] = [
  { id: '1', type: 'header', data: { text: 'چگونه معماری مناسب را انتخاب کنیم؟', level: 2 } },
  { id: '2', type: 'paragraph', data: { text: 'استفاده از بلاک‌های JSON به جای HTML خام به ما اجازه می‌دهد تا کنترل کاملی روی نحوه رندر شدن داده‌ها در فرانت‌اند داشته باشیم.' } },
  { id: '3', type: 'code', data: { code: 'const fetchPost = async () => {\n  const res = await api.get("/post/1");\n  return res.data.blocks;\n};' } },
  { id: '4', type: 'quote', data: { text: 'آینده به کسانی تعلق دارد که نه تنها کد می‌نویسند، بلکه می‌دانند چگونه با هوش مصنوعی برای تولید کدهای بهتر همکاری کنند.', caption: 'علی رضایی' } },
  { id: '5', type: 'paragraph', data: { text: 'در ادامه یک نمونه از فرمول‌های مورد استفاده برای محاسبه پیچیدگی زمانی آورده شده است:' } },
  { id: '6', type: 'paragraph', data: { text: '$$ f(n) = \\mathcal{O}(n \\log n) $$' } },
];

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const post = MOCK_POSTS.find(p => p.id === parseInt(resolvedParams.id)) || MOCK_POSTS[0];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out w-full">
      <Link 
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
      >
        <ArrowRight size={16} /> بازگشت به لیست
      </Link>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <span className={`px-3 py-1 rounded-lg text-xs font-bold ${CATEGORY_STYLES[post.category]?.bg || 'bg-gray-100'} ${CATEGORY_STYLES[post.category]?.color || 'text-gray-500'}`}>
            {post.category}
          </span>
          <span className="text-slate-500 dark:text-gray-500 text-sm font-medium">{post.date}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-gray-700" />
          <span className="text-slate-500 dark:text-gray-500 text-sm font-medium flex items-center gap-1">
            <Clock size={14}/> {post.readTime}
          </span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.4] mb-8 lg:leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center justify-between border-y border-slate-100 dark:border-gray-800 py-4">
          <Link href={`/profile/${MOCK_AUTHOR.id}`} className="flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-transparent group-hover:border-amber-500 transition-colors">
              <img src={MOCK_AUTHOR.avatar} alt={MOCK_AUTHOR.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">{MOCK_AUTHOR.name}</div>
              <div className="text-xs text-slate-500 dark:text-gray-400 font-medium">نویسنده ارشد DailyNotes</div>
            </div>
          </Link>
          <div className="flex gap-2 text-slate-400 dark:text-gray-500">
            <button className="p-2 hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-500/10 rounded-full transition-colors"><Bookmark size={20} /></button>
            <button className="p-2 hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-500/10 rounded-full transition-colors"><Share2 size={20} /></button>
          </div>
        </div>
      </header>

      <div className="aspect-[16/9] w-full rounded-3xl overflow-hidden mb-12 bg-slate-100 dark:bg-gray-800 shadow-sm">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
      </div>

      <div className="mb-12">
        <p className="text-xl leading-loose font-medium text-slate-800 dark:text-gray-200 mb-8 border-l-4 border-slate-300 dark:border-gray-700 pl-6">
          {post.excerpt}
        </p>
      </div>

      <BlockRenderer blocks={dummyBlocks} />

      <div className="mt-16 pt-8 border-t border-slate-100 dark:border-gray-800 flex flex-wrap gap-2">
        {['توسعه وب', 'لاراول', 'برنامه‌نویسی فرانت‌اند', 'تکنولوژی‌های نو'].map((tag, i) => (
          <span key={i} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-gray-800/80 text-sm text-slate-600 dark:text-gray-400 font-medium hover:bg-amber-100 hover:text-amber-700 dark:hover:bg-amber-900/30 dark:hover:text-amber-400 cursor-pointer transition-colors">
            # {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
