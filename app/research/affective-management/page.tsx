export default function ResearchAffectivePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      {/* タイトル */}
      <h1 className="text-3xl font-bold text-center">
        アフェクティブな経営
      </h1>

      {/* 中央画像 */}
      <div className="flex justify-center">
        <img
          src="/サンプル画像.jpg" 
          alt="アフェクティブな経営の研究画像"
          width={600}
          height={400}
          className="max-w-full h-auto rounded shadow"
        />
      </div>

      {/* 説明文 */}
      <div className="space-y-4 text-lg leading-relaxed">
        <p>
          　アフェクティブな経営は、感情や心理的要因が経営に与える影響を探る研究分野です。
          私たちは、感情認識や自然な対話、信頼関係の構築などを通して、人間にとって心地よく役立つエージェントの実現を目指しています。
        </p>
        <p>
          　経営における感情の役割や、組織内でのコミュニケーションの質を向上させる方法についても研究しています
        </p>
      </div>

      {/* サブタイトル */}
      <h2 className="text-2xl font-semibold border-l-4 border-blue-400 pl-3">
        これまでの研究例
      </h2>

      {/* 研究タイトルリスト */}
      <ul className="list-disc list-inside space-y-2 text-base">
        <li>あ</li>
        <li>あ</li>
        <li>あ</li>
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

