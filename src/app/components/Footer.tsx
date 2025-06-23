'use client';

import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white/80 backdrop-blur-sm mt-12">
      <div className="max-w-screen-xl mx-auto px-6 py-6 flex items-center justify-between rounded-2xl shadow-md bg-gray-100">
        {/* 左側：コピーライト */}
        <div className="text-gray-700 text-sm font-semibold">&copy; 2025 梅室研究室</div>

        {/* 右側：ページトップへ */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-gray-700 text-sm font-semibold transition-colors duration-200 hover:text-sky-400"
        >
          <ArrowUp size={20} />
          <span>ページトップへ</span>
        </button>
      </div>
    </footer>
  );
}
