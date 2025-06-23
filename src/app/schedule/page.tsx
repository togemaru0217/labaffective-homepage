// app/schedule/page.tsx
import ScheduleTable from "../components/ScheduleTable";

export default function SchedulePage() {
  const b4Schedule = {
    Mon: {
      "5-6": "Research Group",
      "9-10": "All lab",
    },
    Fri: {
      "3-4": "Literacy",
    },
  };

  const m1Schedule = {
    Mon: {
      "7-8": "Research Group",
      "9-10": "All lab",
    },
    Thu: {
      "3-4": "M1",
    },
  };

  const m2Schedule = {
    Mon: {
      "5-6": "Research Group",
      "9-10": "All lab",
    },
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8 space-y-12">
      {/* スケジュール紹介 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">
          ゼミのスケジュールは以下のようになっています!
        </h2>
        <p className="text-base text-gray-700">
          ゼミのスケジュール（例）を下に載せます。人によってゼミのスケジュールは変わってくることもあるので、サンプルスケジュールになっています。
        </p>
        <div className="space-y-6">
          <div>
            <ScheduleTable label="B4" title="B4のスケジュール" schedule={b4Schedule} />
          </div>
          <div>
            <ScheduleTable label="M1" title="M1のスケジュール" schedule={m1Schedule} />
          </div>
          <div>
            <ScheduleTable label="M2" title="M2のスケジュール" schedule={m2Schedule} />
          </div>
        </div>
      </section>

      {/* ゼミの説明 */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">それぞれのゼミについての説明</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold text-[#0A83D4]">Literacyゼミ（前期のみ）:</h3>
            <p className="text-base text-gray-700">
              　Literacy Seminarは基本的にB4と新入生のM1が論文の読み方・探し方などの勉強をするためのゼミです。各自自分の興味のあるテーマを1つ決め、それに関する先行研究の論文を読んでまとめの文章を書きます。ここで身に着けた力は卒論・修論のときに多いに役に立ちます。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#0A83D4]">M1ゼミ:</h3>
            <p className="text-base text-gray-700">
            　Ｍ１ゼミは基本的に、Ｍ１で必修の輪講のためのゼミです。各自自分の興味のある論文を細かい所まで読み込み、発表します。後期は更に修論テーマ決めが始まるので、１週間で自分が調べたこと考えたことのアウトプットを出していき、それをもとに先生とディスカッションを行います。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#0A83D4]">Research Group ゼミ:</h3>
            <p className="text-base text-gray-700">
            　研究室のメンバー全員参加のゼミです。メンバーそれぞれが自分の興味に合う研究グループに入り、その中でグループのミッションを達成していきます。M2、B4は主にこのResearch Groupの中で卒論修論テーマを見つけます。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#0A83D4]">All lab ゼミ:</h3>
            <p className="text-base text-gray-700">
            　週１で研究室の全員が参加して行うゼミです。内容は週によってことなり、主に、卒論・修論の途中経過報告やインターナショナルday、OB・OGの講演会などがあります。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

