// app/blog/[slug]/page.tsx

import { notFound } from "next/navigation";

// WordPressからデータを取得する（今は仮データ）
async function getPost(slug: string) {
  // ↓将来的に WordPress REST API に置き換え
  const dummyPosts = [
    {
      slug: "my-first-post",
      title: "研究室での一日を紹介！",
      date: "2025-04-20",
      content: "これは研究室での典型的な一日を紹介する記事です。朝はゼミ、昼はチーム活動…",
    },
  ];

  return dummyPosts.find((post) => post.slug === slug) || null;
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 space-y-6">
      <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div className="prose prose-lg">
        <p>{post.content}</p>
      </div>
    </main>
  );
}
