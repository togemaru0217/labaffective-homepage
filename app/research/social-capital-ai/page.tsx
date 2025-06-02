export default function ResearchSocialPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      {/* タイトル */}
      <h1 className="text-3xl font-bold text-center">
        ソーシャルキャピタルの理論構築とAIによる推進
      </h1>

      {/* 中央画像 */}
      <div className="flex justify-center">
        <img
          src="/サンプル画像.jpg" // 仮のパス。public/images/research/hai.jpg に画像を置く
          alt="ソーシャルキャピタルの理論構築とAIによる推進の研究画像"
          width={600}
          height={400}
          className="max-w-full h-auto rounded shadow"
        />
      </div>

      {/* 説明文 */}
      <div className="space-y-4 text-lg leading-relaxed">
        <p>
          　ソーシャルキャピタルは、個人やコミュニティの社会的ネットワークや関係性を指し、社会的な資源としての価値を持ちます。
          本研究では、AI技術を活用してソーシャルキャピタルの理論を構築し、その推進方法を探ります。
        </p>
        <p>
          　具体的には、ソーシャルキャピタルの測定方法や、AIを用いたネットワーク分析手法を開発し、実際のコミュニティにおける応用事例を通じて、その効果を検証します。
          また、AI技術がソーシャルキャピタルの形成や維持にどのように寄与するかを考察します。
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

