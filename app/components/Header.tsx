'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

// アイコンたちをインポート
import { FaHome, FaFlask, FaUniversity, FaCalendarAlt, FaUserFriends, FaPenNib, FaQuestionCircle, FaEnvelope } from 'react-icons/fa';

const navItems = [
  { label: 'トップ', href: '/', icon: <FaHome /> },
  { label: '研究内容', href: '/research', icon: <FaFlask /> },
  { label: '研究室紹介', href: '/lab-introduce', icon: <FaUniversity /> },
  { label: 'スケジュール', href: '/schedule', icon: <FaCalendarAlt /> },
  { label: 'メンバー', href: '/members', icon: <FaUserFriends /> },
  { label: 'Blog', href: '/blog', icon: <FaPenNib /> },
  { label: 'FAQ', href: '/faq', icon: <FaQuestionCircle /> },
  { label: '連絡先', href: '/contact', icon: <FaEnvelope /> },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* ロゴ部分 */}
      <div className="bg-gradient-to-r from-white via-gray-50 to-white py-5 shadow-sm">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6">
          <Image
            src="/lab-logo.png"
            alt="Lab Logo"
            width={440}
            height={100}
            className="object-contain relative z-50"
            priority
          />
          <Image
            src="/科学大のロゴ.webp"
            alt="Kagakudai Logo"
            width={180}
            height={80}
            className="object-contain hidden md:block"
            priority
          />
        </div>
      </div>

      {/* ナビゲーション部分 */}
      <header className="w-full bg-white/80 backdrop-blur-sm">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between rounded-2xl shadow-md bg-gray-100">
          {/* ハンバーガーアイコン */}
          <div className="block md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isOpen ? <X size={30} color="#333" /> : <Menu size={30} color="#333" />}
            </button>
          </div>

          {/* PCナビゲーション */}
          <nav className="hidden md:flex justify-center flex-grow gap-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative flex items-center gap-2 text-gray-800 text-base font-semibold transition-colors duration-200
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300
                  ${pathname === item.href ? 'after:scale-x-100 after:bg-sky-400' : 'hover:after:scale-x-100 hover:after:bg-gray-400'}`}
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ダミースペース */}
          <div className="hidden md:block w-[30px]" />
        </div>

        {/* モバイルメニュー */}
        {isOpen && (
          <nav className="mt-4 flex flex-col items-center gap-4 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`w-full flex items-center justify-center gap-2 text-gray-700 text-center font-semibold py-3 border-t border-gray-300
                  ${pathname === item.href ? 'bg-sky-100' : 'hover:bg-gray-100'}`}
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}



