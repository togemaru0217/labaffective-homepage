import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8">
      {/* 本文：タイトル */}
      <h1 className="text-4xl font-bold">私たち研究グループのミッションは、
      「感情経験の価値の重要性を世界に認識してもらうこと」です</h1>

      {/* 本文：文章 */}
      <p className="text-lg leading-relaxed">
      　梅室研究室は、東京科学大学 工学院 経営工学系に所属している研究室です。
       「人に感情を引き起こす力のある」「人の感情経験をよく考えた」という概念を私たちは"Affective"と呼んでいます。
        私達の研究室は、このAffectiveという概念を様々なレベルで考え、世の中の人々の感情経験を理解しつくり出すことで世の中を Affective にする事を目指しています。
      </p>

      {/* 本文：画像 */}
      <div >
        <Image
           src="/トップページ・画像.png"
           alt="サンプル画像"
           width={670}
           height={670}
           className="rounded-lg mx-auto"
        />
      </div>
    </div>
  );
}
