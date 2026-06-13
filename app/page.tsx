import Link from 'next/link';
import { Clock, ChevronRight } from 'lucide-react';
import { MOCK_POSTS, CATEGORY_STYLES } from '@/lib/data';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      {/* Minimal Header */}
      <header className="mb-20 text-center md:text-right">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight mb-6 tracking-tight">
          یادداشت‌های روزانه یک <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-amber-500 to-amber-300">توسعه‌دهنده.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl font-medium leading-relaxed">
          مجموعه‌ای از مقالات، ایده‌ها و تجربیات در حوزه‌های برنامه‌نویسی، تکنولوژی، مهندسی نرم‌افزار و هوش مصنوعی.
        </p>
      </header>

      <div className="max-w-4xl mx-auto w-full">
        {/* Top Widgets Section (Moved from sidebar) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Categories Widget */}
          <div className="bg-white dark:bg-[#121217] rounded-3xl p-6 border border-slate-100 dark:border-gray-800 shadow-sm flex flex-col justify-center">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6">دسته‌بندی‌های پرطرفدار</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.keys(CATEGORY_STYLES).map((cat) => (
                <Link href="#" key={cat} className="flex justify-between items-center p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-gray-800/50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${CATEGORY_STYLES[cat].bg}`}>
                      <div className={`w-2.5 h-2.5 rounded-full ${CATEGORY_STYLES[cat].dot}`} />
                    </div>
                    <span className="font-medium text-slate-700 dark:text-gray-300 group-hover:text-amber-500 transition-colors">{cat}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Widget */}
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>
            <h3 className="font-black text-xl text-[#0a0a0c] mb-2 relative z-10">خبرنامه DailyNotes</h3>
            <p className="text-amber-950 font-medium mb-5 relative z-10 opacity-90 text-sm leading-relaxed">
              جدیدترین مقالات را در ایمیل خود دریافت کنید.
            </p>
            <div className="p-fluid flex gap-2 relative z-10">
               <InputText placeholder="آدرس ایمیل..." className="p-3 text-sm rounded-xl border-0 shadow-inner bg-white/90 focus:bg-white text-slate-900 placeholder:text-slate-500" dir="ltr" />
               <Button label="عضویت" className="bg-[#0a0a0c] text-white hover:bg-slate-800 border-0 px-4 py-3 text-sm rounded-xl font-bold transition-colors" />
            </div>
          </div>
        </div>

        {/* Main Feed */}
        <div className="space-y-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-gray-800">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">آخرین نوشته‌ها</h2>
          </div>

          {MOCK_POSTS.map((post) => (
            <article 
              key={post.id} 
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center"
            >
              {/* Date Sidebar (Journal feel) */}
              <div className="md:col-span-3 hidden md:flex flex-col text-left border-l-2 border-slate-100 dark:border-gray-800/80 pl-6 py-2 group-hover:border-amber-500 transition-colors">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">
                  {post.date.split(' ')[0]}
                </span>
                <span className="text-sm font-medium text-slate-500 dark:text-gray-500">
                  {post.date.split(' ')[1]} {post.date.split(' ')[2]}
                </span>
              </div>

              {/* Content Area */}
              <div className="md:col-span-9 order-2 md:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-2 h-2 rounded-full ${CATEGORY_STYLES[post.category]?.dot || 'bg-gray-500'}`} />
                  <span className={`text-xs font-bold tracking-wider ${CATEGORY_STYLES[post.category]?.color || 'text-gray-500'}`}>
                    {post.category}
                  </span>
                  <span className="text-slate-400 dark:text-gray-600 text-xs flex items-center gap-1 md:hidden">
                     • {post.date}
                  </span>
                </div>
                
                <Link href={`/post/${post.id}`}>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-relaxed group-hover:text-amber-500 transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-slate-600 dark:text-gray-400 leading-loose mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm font-medium text-slate-500 dark:text-gray-500">
                  <Link href={`/post/${post.id}`} className="flex items-center gap-1.5 hover:text-amber-500 transition-colors text-amber-600 dark:text-amber-500">
                    ادامه مطلب <ChevronRight size={16} />
                  </Link>
                  <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-gray-800/50 px-3 py-1 rounded-full text-xs">
                    <Clock size={14} /> {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
