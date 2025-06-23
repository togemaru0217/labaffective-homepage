import type { Metadata } from "next";
import { Noto_Sans_JP } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import PageLayout from './components/PageLayout';
import Script from "next/script"; // ← 追加！
import "./globals.css";

export const metadata: Metadata = {
  title: "梅室研究室ホームページ:トップページ",
  description: "梅室研究室ホームページのトップページです。",
};

const noto = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <html lang="ja">
      <head>
        {/* Google MapsのScriptを読み込む */}
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&v=beta&libraries=maps,marker`}
          strategy="beforeInteractive"
        />
      </head>
      <body className={noto.className}>
        <Header />
        <PageLayout>
          {children}
        </PageLayout>
        <Footer />
      </body>
    </html>
  );
}




