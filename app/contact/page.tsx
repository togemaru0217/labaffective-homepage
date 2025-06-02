// app/contact/page.tsx
import GoogleMap from '../components/GoogleMap'; // ここパス合わせてね！

export default function ContactPage() {
  return (
    <>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">連絡先</h1>

        <p className="text-lg">
          研究室の所属、連絡先は以下の通りです。
        </p>

        {/* 住所・連絡先 */}
        <div className="space-y-2 text-lg">
          <p>所属:　東京科学大学（旧東京工業大学）工学院　経営工学系</p>
          <p>住所:　〒152-8550　東京都目黒区大岡山2-12-1-W9-67</p>
          <p>Email:　affective-laboratory@hf.me.titech.ac.jp</p>
          <p>電話: 　03-5734-2246</p>
        </div>

        {/* Google Map */}
        <GoogleMap />

        <h2 className="text-2xl font-bold mb-2">研究室を応援したい方へ</h2>
        <p className="text-lg">　研究室へのご寄付は、「東京科学大学基金」を通じで受け付けさせていただいております。
        下記「東京科学大学基金」のページにお進みください。</p>
        <div className="text-center">
          <a href="https://www.titech.ac.jp/giving/donation/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            東京科学大学基金
          </a>
        </div>
        <p className="text-lg">　その際、「寄附目的」欄で「その他」を選択し、「経営工学系の感情研究（梅室研究室支援）」とテキストに記入するのをどうかお忘れなく。</p>
      </div>
    </>
  );
}
