'use client';

import { MOCK_AUTHOR, MOCK_POSTS } from '@/lib/data';
import { TabView, TabPanel } from 'primereact/tabview';
import { Github, Twitter, MapPin, Users, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className="w-full animate-in fade-in duration-700 ease-out">
      {/* Cover Image */}
      <div className="h-64 md:h-80 w-full relative">
        <img src={MOCK_AUTHOR.cover} alt="Cover" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Profile Header Setup */}
        <div className="relative -mt-20 mb-12 flex flex-col md:flex-row items-center md:items-end gap-6 text-center md:text-right">
          <div className="w-40 h-40 rounded-full border-4 border-[#FAFAFA] dark:border-[#0a0a0c] overflow-hidden bg-white shadow-xl">
            <img src={MOCK_AUTHOR.avatar} alt={MOCK_AUTHOR.name} className="w-full h-full object-cover" />
          </div>
          
          <div className="flex-1 pb-4">
            <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">{MOCK_AUTHOR.name}</h1>
            <p className="text-lg text-slate-600 dark:text-gray-300 font-medium mb-4">{MOCK_AUTHOR.role}</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium text-slate-500 dark:text-gray-400">
              <span className="flex items-center gap-1.5"><MapPin size={16}/> {MOCK_AUTHOR.location}</span>
              <span className="flex items-center gap-1.5"><Users size={16}/> {MOCK_AUTHOR.followers} دنبال‌کننده</span>
              <span className="flex items-center gap-1.5"><BookOpen size={16}/> {MOCK_AUTHOR.articlesCount} مقاله</span>
            </div>
          </div>

          <div className="pb-4 flex gap-3">
            <button className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm">
              دنبال کردن
            </button>
            <button className="p-2.5 bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-300 rounded-xl hover:text-amber-500 transition-colors">
              <Twitter size={20} />
            </button>
            <button className="p-2.5 bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-300 rounded-xl hover:text-amber-500 transition-colors">
              <Github size={20} />
            </button>
          </div>
        </div>

        {/* Tabbed Content using PrimeReact */}
        <div className="max-w-4xl mx-auto">
          <TabView className="blog-tabs">
            <TabPanel header="مقالات منتشر شده">
              <div className="py-6 space-y-8">
                {MOCK_POSTS.map((post) => (
                  <article key={post.id} className="flex flex-col md:flex-row gap-6 items-center bg-white dark:bg-[#121217] p-4 rounded-2xl border border-slate-100 dark:border-gray-800/80 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-full md:w-48 aspect-[4/3] rounded-xl overflow-hidden shrink-0">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        <Link href={`/post/${post.id}`} className="hover:text-amber-500 transition-colors">{post.title}</Link>
                      </h3>
                      <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </TabPanel>
            
            <TabPanel header="درباره نویسنده">
              <div className="py-8 prose prose-slate dark:prose-invert max-w-none">
                <h3 className="text-2xl font-bold mb-4">{MOCK_AUTHOR.name} کیست؟</h3>
                <p className="text-lg leading-loose text-slate-700 dark:text-gray-300">{MOCK_AUTHOR.bio}</p>
                <p className="text-lg leading-loose text-slate-700 dark:text-gray-300 mt-4">
                  من در زمینه ساخت راهکارهای مقیاس‌پذیر در محیط وب فعالیت می‌کنم. علاقه زیادی به معماری نرم‌افزار، سرورهای لینوکسی و جدیدترین متدهای توسعه رابط کاربری دارم. در اینجا تجربیات روزانه‌ام را با شما به اشتراک می‌گذارم.
                </p>
              </div>
            </TabPanel>
          </TabView>
        </div>

      </div>
    </div>
  );
}
