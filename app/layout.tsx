import type {Metadata} from 'next';
import { Vazirmatn } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';

import 'primereact/resources/themes/lara-light-amber/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'katex/dist/katex.min.css';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const vazirmatn = Vazirmatn({ subsets: ['arabic', 'latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'DailyNotes - Developer Blog',
  description: 'Daily notes, articles, and ideas for developers.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${vazirmatn.className} bg-[#FAFAFA] dark:bg-[#0a0a0c] text-slate-800 dark:text-gray-200 transition-colors duration-300 min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          <main className="flex-grow flex flex-col">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
