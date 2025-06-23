import { getPages } from "../data/pages"; // パスを修正
import { notFound } from "next/navigation";

// pages.tsで定義してる型を使う（仮にPage型って名前にする）
type Page = {
  slug: string;
  title: string;
};

type SearchResultProps = {
  searchParams: {
    keyword?: string;
  };
};

export default function SearchResultPage({ searchParams }: SearchResultProps) {
  const keyword = searchParams.keyword || "";

  const allPages: Page[] = getPages(); // 明示的に型をつける
  const matchedPages = allPages.filter((page: Page) =>
    page.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">検索結果</h1>

      {keyword ? (
        <>
          <p className="mb-4 text-gray-700">
            「<span className="font-semibold">{keyword}</span>」の検索結果：{matchedPages.length}件
          </p>

          {matchedPages.length > 0 ? (
            <ul className="space-y-4">
              {matchedPages.map((page: Page) => (
                <li key={page.slug}>
                  <a href={page.slug} className="text-blue-500 hover:underline">
                    {page.title}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">該当するページは見つかりませんでした。</p>
          )}
        </>
      ) : (
        <p className="text-gray-500">キーワードが入力されていません。</p>
      )}
    </div>
  );
}

