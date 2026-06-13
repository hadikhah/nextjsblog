export const CATEGORY_STYLES: Record<string, {color: string, bg: string, dot: string}> = {
  "برنامه‌نویسی": { color: "text-blue-500", bg: "bg-blue-500/10", dot: "bg-blue-500" }, 
  "تکنولوژی": { color: "text-orange-500", bg: "bg-orange-500/10", dot: "bg-orange-500" }, 
  "مهندسی": { color: "text-green-500", bg: "bg-green-500/10", dot: "bg-green-500" }, 
  "هوش مصنوعی": { color: "text-purple-500", bg: "bg-purple-500/10", dot: "bg-purple-500" }, 
};

export const MOCK_POSTS = [
  {
    id: 1,
    title: "آینده هوش مصنوعی و تاثیر آن بر توسعه‌دهندگان",
    excerpt: "بررسی عمیق مدل‌های زبانی جدید و اینکه چگونه ابزارهایی مانند Copilot و ChatGPT در حال تغییر دادن روند کاری برنامه‌نویسان هستند. آیا باید نگران جایگاه شغلی خود باشیم یا این ابزارها صرفا یک دستیار هوشمند هستند؟",
    category: "هوش مصنوعی",
    readTime: "۶ دقیقه مطالعه",
    date: "۲۲ خرداد ۱۴۰۵",
    author: "علی رضایی",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "بررسی ویژگی‌های جدید لاراول ۱۳ در کنار Nuxt 3",
    excerpt: "در نسخه جدید لاراول چه می‌گذرد؟ نگاهی به بهبودهای چشمگیر در مسیردهی، منابع API و نحوه اتصال بی‌نقص آن به فرانت‌اند با استفاده از Nuxt 3.",
    category: "برنامه‌نویسی",
    readTime: "۵ دقیقه مطالعه",
    date: "۲۰ خرداد ۱۴۰۵",
    author: "سارا احمدی",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "مهاجرت به معماری ARM؛ پایان عصر X86؟",
    excerpt: "مهاجرت شرکت‌های بزرگ به سمت معماری ARM و تاثیر آن بر مصرف انرژی و قدرت پردازشی لپ‌تاپ‌ها و سرورها.",
    category: "تکنولوژی",
    readTime: "۸ دقیقه مطالعه",
    date: "۱۸ خرداد ۱۴۰۵",
    author: "محمد کریمی",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "طراحی سیستم‌های توزیع‌شده با مقیاس‌پذیری بالا",
    excerpt: "چگونه پروژه‌های یکپارچه (Monolithic) را به میکروسرویس تبدیل کنیم؟ چالش‌ها و راهکارهای مهندسی نرم‌افزار در سیستم‌های کلان.",
    category: "مهندسی",
    readTime: "۱۰ دقیقه مطالعه",
    date: "۱۵ خرداد ۱۴۰۵",
    author: "امیرحسین موسوی",
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=1200&q=80",
  }
];

export const MOCK_AUTHOR = {
  id: "author-1",
  name: "علی رضایی",
  role: "توسعه‌دهنده فول‌استک و محقق هوش مصنوعی",
  bio: "علاقه‌مند به یادگیری تکنولوژی‌های جدید و به اشتراک‌گذاری دانش با دیگران. در حال حاضر بر روی پروژه‌های متن‌باز کار می‌کنم.",
  avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=256&q=80",
  cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  followers: 1240,
  articlesCount: 45,
  location: "تهران، ایران",
  socials: {
    github: "alirezaie",
    twitter: "ali_codes"
  }
};
