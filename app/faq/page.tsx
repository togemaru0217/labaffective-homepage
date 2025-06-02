import FaqItem from "../components/FAQItem";

export default function FAQPage() {
  return (
    <main className="space-y-12 p-4 md:p-8">
      {/* ページタイトル & アンカーリンク */}
      <section className="space-y-2">
        <h1 className="text-3xl font-bold">よくある質問</h1>
        <p className="text-lg">クリックした質問項目にジャンプします。</p>
        <ul className="list-disc list-inside space-y-1 text-blue-700 underline">
          <li><a href="#research">研究についての質問</a></li>
          <li><a href="#lab">研究室についての質問</a></li>
          <li><a href="#others">その他の質問</a></li>
        </ul>
      </section>

      {/* 各セクション */}
      <section id="research" className="space-y-4">
        <h2 className="text-2xl font-bold">研究についての質問</h2>
        <FaqItem question="どの様な研究を行っていますか？" answer="ここに研究内容の回答が入ります。" />
        <FaqItem question="研究はどのように進めていくのですか？" answer="興味に応じて柔軟に選べます。" />
        <FaqItem question="研究テーマはどうやって決めるのですか？" answer="はい、可能です。" />
        <FaqItem question="卒業論文と修士論文の研究テーマは同じですか？" answer="はい、行っています。" />
        <FaqItem question="研究は個人でやりますか、チームでやりますか？" answer="研究ページをご覧ください。" />
      </section>

      <section id="lab" className="space-y-4">
        <h2 className="text-2xl font-bold">研究室についての質問</h2>
        <FaqItem question="研究室はどの様な環境ですか？" answer="週に1回です。" />
        <FaqItem question="コアタイムはありますか？" answer="◯月頃です。" />
        <FaqItem question="研究生活は忙しいですか？" answer="はい、大歓迎です。" />
        <FaqItem question="英語を使う機会はありますか？" answer="場合により可能です。" />
        <FaqItem question="どんな人が多いですか？" answer="特別なスキルは不要です。" />
        <FaqItem question="研究室の雰囲気はどんな感じですか？" answer="活発にあります。" />
      </section>

      <section id="others" className="space-y-4">
        <h2 className="text-2xl font-bold">その他の質問</h2>
        <FaqItem question="大学院から研究室に入ることはできますか？" answer="東京都〇〇区〇〇町です。" />
        <FaqItem question="院試の対策はどの様にすればよいですか？" answer="会議室、作業室、PCなどがあります。" />
        <FaqItem question="卒業後、どの様な分野に就職する人が多いですか？" answer="Contactページからご連絡ください。" />
      </section>
    </main>
  );
}

