'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';

export default function Sidebar() {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (keyword.trim() !== '') {
      router.push(`/searchresult?keyword=${encodeURIComponent(keyword)}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <aside className="p-4 bg-white/70 backdrop-blur-md rounded-xl shadow-md w-full sticky top-24">
      {/* 言語切り替えボタン */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-3">言語切り替え/Switch Language</h2>
        <div className="flex space-x-3">
          <button className="flex-1 p-2 rounded">
            <Image
              src="/日本国旗.jpg"
              alt="日本国旗"
              width={40}
              height={10}
              className="transition-transform duration-200 hover:scale-110 hover:brightness-110"
              priority
            />
          </button>
          <button className="flex-1 p-2 rounded">
            <Image
              src="/米国国旗.jpg"
              alt="米国国旗"
              width={40}
              height={10}
              className="transition-transform duration-200 hover:scale-110 hover:brightness-110"
              priority
            />
          </button>
        </div>
      </div>

      {/* サイト内検索 */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-3">サイト内検索</h2>
        <div className="flex space-x-2">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="検索..."
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSearch}
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <FaSearch size={20} />
          </button>
        </div>
      </div>

      {/* Instagram埋め込みエリア（仮） */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-3">Instagram</h2>
        <div className="bg-gray-100 h-48 rounded flex items-center justify-center text-gray-400">
          Instagram埋め込み予定
        </div>
      </div>

      {/* 最近の投稿 */}
      <div>
        <h2 className="text-lg font-bold mb-3">最近の投稿</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>
            <a href="/ja/blog/1" className="text-blue-500 hover:underline">
              ブログ記事タイトル1
            </a>
          </li>
          <li>
            <a href="/ja/blog/2" className="text-blue-500 hover:underline">
              ブログ記事タイトル2
            </a>
          </li>
          <li>
            <a href="/ja/blog/3" className="text-blue-500 hover:underline">
              ブログ記事タイトル3
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
