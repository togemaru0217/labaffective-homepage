// app/blog/page.tsx

import Image from "next/image";
import Link from "next/link";

// 仮データ
const dummyPosts = [
  {
    id: 1,
    title: "研究室での一日を紹介！",
    excerpt: "今回は梅室研究室での典型的な一日をご紹介します。朝のゼミから夕方のチーム活動まで…",
    date: "2025-04-20",
    thumbnailUrl: "/サンプル画像.jpg",
  },
  {
    id: 2,
    title: "International Day開催レポート",
    excerpt: "今年度初めてのInternational Dayを開催しました！プレゼン内容や料理の紹介など",
    date: "2025-03-15",
    thumbnailUrl: "/サンプル画像.jpg",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      <h1 className="text-3xl font-bold mb-8">ブログ一覧</h1>

      <div className="space-y-10">
        {dummyPosts.map((post) => (
          <div key={post.id} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <Image
                  src={post.thumbnailUrl}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                <h2 className="text-2xl font-semibold mt-1 mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                  記事を読む →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

