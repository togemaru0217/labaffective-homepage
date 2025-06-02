import ResearchCard from "../components/ResearchCard";

export default function HomePage() {
  const researchFields = [
    { title: "HAI:ヒューマンエージェントインタラクション", image: "/サンプル画像.jpg", link: "/research/hai" },
    { title: "Gerontechnology: 高齢者と技術", image: "/サンプル画像.jpg", link: "/research/gerontechnology" },
    { title: "ソーシャルキャピタル理論構築とAI推進", image: "/サンプル画像.jpg", link: "/research/social-capital-ai" },
    { title: "アフェクティブな経営", image: "/サンプル画像.jpg", link: "/research/affective-management" },
    { title: "感情コミュニケーション", image: "/サンプル画像.jpg", link: "/research/emotion-communication" }, 
    { title: "共同研究", image: "/サンプル画像.jpg", link: "/research/collaborative-research" },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* 本文：タイトル */}
      <h1 className="text-4xl font-bold">研究内容</h1>

      {/* 本文：文章 */}
      <p className="text-lg leading-relaxed">
      　梅室研究室では人間の感情に焦点を当て、様々な視点から研究を行っていますが、現在取り組んでいる研究は大きく分けて以下の6つに分類されます。
      </p>

      {/* カードリンクたち */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {researchFields.map((field) => (
          <ResearchCard
            key={field.title}
            title={field.title}
            image={field.image}
            link={field.link}
          />
        ))}
      </div>
    </div>
  );
}

