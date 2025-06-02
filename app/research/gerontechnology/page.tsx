export default function ResearchGerontechnologyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      {/* タイトル */}
      <h1 className="text-3xl font-bold text-center">
        高齢者と技術 (Gerontechnology)
      </h1>

      {/* 中央画像 */}
      <div className="flex justify-center">
        <img
          src="/サンプル画像.jpg" 
          alt="Gerontechnologyの研究画像"
          width={600}
          height={400}
          className="max-w-full h-auto rounded shadow"
        />
      </div>

      {/* 説明文 */}
      <div className="space-y-4 text-lg leading-relaxed">
        <p>
          　Gerontechnologyは、高齢者の生活を支える技術の研究分野です。
          私たちは、感情認識や自然な対話、信頼関係の構築などを通して、高齢者にとって心地よく役立つエージェントの実現を目指しています。
        </p>
        <p>
          　高齢者のニーズに応じた技術の開発や、社会的受容の側面も明らかにしていきます。
        </p>
      </div>

      {/* サブタイトル */}
      <h2 className="text-2xl font-semibold border-l-4 border-blue-400 pl-3">
        これまでの研究例
      </h2>

      {/* 研究タイトルリスト */}
      <ul className="list-disc list-inside space-y-2 text-base">
        <li>あいうえお</li>
        <li>あいうえお</li>
        <li>あいうえお</li>
      </ul>

      {/* 研究一覧に戻るリンク（右寄せ） */}
      <div className="flex justify-end">
        <a
          href="/research"
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          研究内容の一覧に戻る →
        </a>
      </div>
    </main>
  );
}

