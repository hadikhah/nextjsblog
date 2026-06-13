import { Twitter, Send } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-gray-800 mt-auto py-12 bg-white dark:bg-[#0a0a0c]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <Link href="/" className="flex items-center gap-2">
           <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-[#0a0a0c] font-black">
              DN
           </div>
           <span className="font-extrabold text-xl text-slate-900 dark:text-white">Daily<span className="text-amber-500">Notes</span></span>
        </Link>
        <p className="text-slate-500 dark:text-gray-500 text-sm font-medium text-center md:text-right">
          © ۱۴۰۵ شبکه محتوای DailyNotes. طراحی شده برای توسعه‌دهندگان.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-gray-800 flex items-center justify-center text-slate-500 dark:text-gray-400 hover:bg-amber-100 hover:text-amber-600 dark:hover:bg-gray-700 transition-colors">
            <Twitter size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-gray-800 flex items-center justify-center text-slate-500 dark:text-gray-400 hover:bg-amber-100 hover:text-amber-600 dark:hover:bg-gray-700 transition-colors">
            <Send size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
