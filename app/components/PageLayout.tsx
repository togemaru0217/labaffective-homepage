"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Sidebar from "./Sidebar";
import { FaPlus } from "react-icons/fa";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isTopPage = pathname === "/";

  return (
    <>
      {isTopPage && (
        <>
          {/* トップページ一番上のセクション */}
          <div className="flex flex-col md:flex-row gap-4 max-w-7xl mx-auto px-4 mt-[-130px]">
            {/* ←ここでヘッダーとトップセクションの間をギュッと詰める */}

            {/* 左側：テキスト */}
            <div className="w-full md:w-1/2 bg-white flex justify-center items-center h-[670px]">
              <h1 className="text-4xl font-bold text-center leading-tight italic">
                WE DESIGN THE FUTURE.<br />AFFECTIVE FUTURE.
              </h1>
            </div>

            {/* 右側：サンプル画像 */}
            <div className="w-full md:w-1/2 flex items-center justify-center h-[670px]">
              <Image
                src="/サンプル画像.jpg"
                alt="サンプル画像"
                width={670}
                height={670}
                className="object-cover rounded"
              />
            </div>
          </div>
        </>
      )}

      {/* 本文＋サイドバー 共通レイアウト */}
      <main
        className={`flex flex-col-reverse md:flex-row max-w-7xl mx-auto px-4 ${
          isTopPage ? "mt-[-140px]" : "py-12"
        } gap-8`}
      >
        {/* 本文 */}
        <div className="w-full md:w-3/4">{children}</div>

        {/* サイドバー */}
        <div className="w-full md:w-1/4">
          <Sidebar />
        </div>
      </main>

      {/* トップページだけ本文下に3つのリンク画像 */}
      {isTopPage && (
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <LinkCard href="/research" title="研究内容" />
          <LinkCard href="/about" title="研究室紹介" />
          <LinkCard href="/contact" title="連絡先" />
        </div>
      )}
    </>
  );
}

// リンクカードコンポーネント
function LinkCard({ href, title }: { href: string; title: string }) {
  return (
    <a
      href={href}
      className="group relative block h-64 overflow-hidden rounded-lg shadow-lg"
    >
      <Image
        src="/サンプル画像.jpg"
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center transition group-hover:bg-black/10">
        <span className="text-white text-xl font-bold mb-2">{title}</span>
      </div>

      <FaPlus
        size={60}
        className="absolute bottom-4 right-4 text-white opacity-0 transform group-hover:opacity-60 group-hover:scale-125 group-hover:rotate-90 transition-all duration-500 ease-in-out"
      />
    </a>
  );
}

