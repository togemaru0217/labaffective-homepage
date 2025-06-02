export default function ResearchHAIPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      {/* タイトル */}
      <h1 className="text-3xl font-bold text-center">
        人間とエージェントのインタラクション (HAI)
      </h1>

      {/* 中央画像 */}
      <div className="flex justify-center">
        <img
          src="/サンプル画像.jpg" // 仮のパス。public/images/research/hai.jpg に画像を置く
          alt="HAIの研究画像"
          width={600}
          height={400}
          className="max-w-full h-auto rounded shadow"
        />
      </div>

      {/* 説明文 */}
      <div className="space-y-4 text-lg leading-relaxed">
        <p>
          　HAI（Human-Agent Interaction）は、人間と人工エージェントとの関わりを探る研究分野です。
          私たちは、感情認識や自然な対話、信頼関係の構築などを通して、人間にとって心地よく役立つエージェントの実現を目指しています。
        </p>
        <p>
          　実験やインタビューを通じて、ユーザー体験や社会的受容の側面も明らかにしていきます。
        </p>
      </div>

      {/* サブタイトル */}
      <h2 className="text-2xl font-semibold border-l-4 border-blue-400 pl-3">
        これまでの研究例
      </h2>

      {/* 研究タイトルリスト */}
      <ul className="list-disc list-inside space-y-2 text-base">
        <li>感情に応じた応答を行う対話エージェントの開発</li>
        <li>人間とロボットの信頼形成に関する実験的研究</li>
        <li>非言語的フィードバックを用いた協調的な意思決定支援</li>
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

