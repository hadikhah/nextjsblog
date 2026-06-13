'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[#FAFAFA]/90 dark:bg-[#0a0a0c]/90 backdrop-blur-md border-b border-slate-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-[#0a0a0c] font-black text-xl shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              DN
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white hidden sm:block">
              Daily<span className="text-amber-500">Notes</span>
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-500 dark:text-gray-400">
              <Link href="/editor" className={`hover:text-amber-500 dark:hover:text-amber-400 transition-colors ${pathname === '/editor' ? 'text-amber-500 font-bold' : ''}`}>
                ویرایشگر مقاله
              </Link>
              <Link href="/profile/author-1" className={`hover:text-amber-500 dark:hover:text-amber-400 transition-colors ${pathname.startsWith('/profile') ? 'text-amber-500 font-bold' : ''}`}>
                پروفایل من
              </Link>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full text-slate-500 hover:bg-slate-200 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {mounted && (theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
