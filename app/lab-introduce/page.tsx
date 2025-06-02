"use client";

import Image from "next/image";
import Link from "next/link";
import LabPieCharts from "../components/LabPieCharts";

export default function LabIntroducePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-20">
      {/* 研究室のメンバー構成 */}
      <section>
        <h2 className="text-2xl font-bold mb-2">多様なメンバーがそろっています</h2>
        <p className="mb-4">　梅室研究室には多彩なメンバーが揃っています！修士で外部から入ってくる学生もいます。いろんな人を歓迎します。</p>
        <div className="text-right mb-4">
          <Link href="/members" className="text-blue-600 underline">→メンバー紹介</Link>
        </div>
        <LabPieCharts />
        <p className="mt-3">（2025年、前期）</p>
      </section>

      {/* 研究室の部屋の紹介 */}
      <section>
        <h2 className="text-2xl font-bold mb-2">研究室の様子</h2>
        <p className="mb-6">　研究室に所属すると、学生生活の多くを研究室で過ごすことになります。梅室研究室の様子を紹介します。</p>

        <div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">学生室</h3>
            <p className="mb-2">　学生が日々の作業やディスカッションを行うスペースです。研究室に所属すると学生室に一人一人PCと机が与えられ、自分の研究の拠点ができます。24時間365日いつでもアクセスできます。</p>
            <Image src="/サンプル画像.jpg" alt="学生室" width={400} height={300} className="rounded-lg mx-auto" />
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">ゼミ室</h3>
            <p className="mb-2">　ゼミ室では主にゼミやミーティングを行います。専門書も多数収蔵されています。</p>
            <Image src="/サンプル画像.jpg" alt="ゼミ室" width={400} height={300} className="rounded-lg mx-auto" />
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">実験室</h3>
            <p className="mb-2">　実験室では主に実験やパーティーを行います。ゲーム機器やソファー、ピアノやギターと言った楽器も充実しており、学生がくつろげるスペースにもなっています。</p>
            <Image src="/サンプル画像.jpg" alt="実験室" width={400} height={300} className="rounded-lg mx-auto" />
          </div>
        </div>
      </section>

      {/* 研究生活の紹介 */}
      <section>
        <h2 className="text-2xl font-bold mb-2">研究室での生活はどんな感じ？</h2>
        <p className="mb-4">　LiteracyゼミやALL lab、Research Group Meeting等々ゼミを活発に行うのが梅室研究室の特徴です。ただコアタイムは特になく、ゼミ以外の時間帯は各々自由に学生生活を送っています。またレクリエーションが多く学年関係なく仲の良い研究室だと思います!!</p>
        <div className="text-right">
          <Link href="/schedule" className="text-blue-600 underline">スケジュールページへ</Link>
        </div>
      </section>

      {/* 研究室のレクリエーション */}
      <section>
        <h2 className="text-2xl font-bold mb-4">色々な楽しいイベントがあります</h2>

        <div>
          <div className="mt-8">
            <div className="flex items-center gap-2 justify-center">
              <Image src="/地球のアイコン.png" alt="globe" width={24} height={24} />
              <h3 className="text-xl font-semibold">International Day（年2～4回）</h3>
              <Image src="/地球のアイコン.png" alt="globe" width={24} height={24} />
            </div>
            <p className="mt-2 mb-2">　留学生の出身国に付いて他の担当のメンバーが調べてプレゼンし、終わったらその国のご飯を食べる日です。</p>
            <div className="space-y-4">
              <Image src="/サンプル画像.jpg" alt="International Day 1" width={400} height={300} className="rounded-lg mx-auto" />
              <Image src="/サンプル画像.jpg" alt="International Day 2" width={400} height={300} className="rounded-lg mx-auto" />
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-2 justify-center">
              <Image src="/ゲームのアイコン.png" alt="ゲーム" width={24} height={24} />
              <h3 className="text-xl font-semibold">チーム活動</h3>
              <Image src="/テニスのアイコン.png" alt="テニス" width={24} height={24} />
            </div>
            <p className="mt-2 mb-2">　研究とは全く関係ないことを自主的に行います!自分のやりたいことを提案し、参加者が集まればチーム活動として成立します。活動も多岐に渡り、バンド結成・ロボットで遊ぶ・マイクラで遊ぶ・ドライブを楽しむ・VRゲームを開発・鍋を囲む・スポーツを楽しむなどなど、人さえ集まれば何でもOKです!</p>
            <div className="space-y-4">
              <Image src="/サンプル画像.jpg" alt="Team Activity 1" width={400} height={300} className="rounded-lg mx-auto" />
              <Image src="/サンプル画像.jpg" alt="Team Activity 2" width={400} height={300} className="rounded-lg mx-auto" />
            </div>
          </div>

          <p className="mt-4">その他にも様々なレクリエーションを行っています。興味のある方はブログをぜひご覧ください!</p>
          <div className="text-right mt-2">
            <Link href="/blog" className="text-blue-600 underline">ブログページへ</Link>
          </div>
        </div>
      </section>

      {/* 研究室を一言で表すと？ */}
      <section>
        <h2 className="text-2xl font-bold mb-2">うめけんってどんなところ？</h2>
        <p className="mb-4">　とにかく自由でアットホーム！！！
        研究室のメンバーに聞いて見たら次のような意見が出てきました♪</p>
        <ul className="list-disc list-inside space-y-1">
          <li>多様性と協調性が共存する場所</li>
          <li>自由な発想が歓迎される環境</li>
          <li>みんなが助け合うあたたかい雰囲気</li>
          <li>グローバルな視点が身につく</li>
          <li>自分らしく研究ができる場所</li>
        </ul>
      </section>
    </main>
  );
}


