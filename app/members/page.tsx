// app/members/page.tsx
import MemberCard from "@/app/components/MemberCard";

const dummyMembers = {
  staff: [
    { name: "梅室教授", hobby: "読書", research: "HAI", image: "/サンプル画像.jpg" },
    { name: "事務員A", hobby: "映画鑑賞", research: "庶務", image: "/サンプル画像.jpg" },
  ],
  doctoral: [
    { name: "博士1", hobby: "料理", research: "感情推定", image: "/サンプル画像.jpg" },
    { name: "博士2", hobby: "読書", research: "Gerontechnology", image: "/サンプル画像.jpg" },
    { name: "博士3", hobby: "音楽", research: "AI支援", image: "/サンプル画像.jpg" },
  ],
  m2: [
    { name: "M2-1", hobby: "旅行", research: "感情認識", image: "/サンプル画像.jpg" },
    { name: "M2-2", hobby: "ゲーム", research: "ソーシャルキャピタル", image: "/サンプル画像.jpg" },
  ],
  m1: [
    { name: "M1-1", hobby: "読書", research: "アフェクティブ経営", image: "/サンプル画像.jpg" },
    { name: "M1-2", hobby: "バイク", research: "HAI", image: "/サンプル画像.jpg" },
    { name: "M1-3", hobby: "アニメ", research: "共同研究", image: "/サンプル画像.jpg" },
    { name: "M1-4", hobby: "スキー", research: "感情表現", image: "/サンプル画像.jpg" },
  ],
  b4: [
    { name: "B4-1", hobby: "音楽", research: "ロボット対話", image: "/サンプル画像.jpg" },
    { name: "B4-2", hobby: "散歩", research: "AI教育", image: "/サンプル画像.jpg" },
    { name: "B4-3", hobby: "カフェ巡り", research: "介護支援", image: "/サンプル画像.jpg" },
  ],
  exchange: [
    { name: "交換留学生", hobby: "日本文化", research: "多言語コミュニケーション", image: "/サンプル画像.jpg" },
  ],
  alumni: [
    "卒業生A", "卒業生B", "卒業生C", "卒業生D", "卒業生E"
  ]
};

export default function MembersPage() {
  return (
    <div className="px-4 py-8 space-y-12">
      {/* 教職員 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">教職員</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dummyMembers.staff.map((member) => (
            <MemberCard key={member.name} {...member} />
          ))}
        </div>
      </section>

      {/* 博士課程 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">博士課程のメンバー</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dummyMembers.doctoral.map((member) => (
            <MemberCard key={member.name} {...member} />
          ))}
        </div>
      </section>

      {/* M2 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">M2のメンバー</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dummyMembers.m2.map((member) => (
            <MemberCard key={member.name} {...member} />
          ))}
        </div>
      </section>

      {/* M1 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">M1のメンバー</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dummyMembers.m1.map((member) => (
            <MemberCard key={member.name} {...member} />
          ))}
        </div>
      </section>

      {/* B4 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">B4のメンバー</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dummyMembers.b4.map((member) => (
            <MemberCard key={member.name} {...member} />
          ))}
        </div>
      </section>

      {/* 交換留学生 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">交換留学生</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dummyMembers.exchange.map((member) => (
            <MemberCard key={member.name} {...member} />
          ))}
        </div>
      </section>

      {/* 過去のメンバー */}
      <section>
        <h2 className="text-2xl font-bold mb-2">過去のメンバー</h2>
        <ul className="list-disc list-inside text-sm text-gray-600">
          {dummyMembers.alumni.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}


