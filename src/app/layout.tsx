import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "カゲブンシン | SNS全方位展開サービス",
  description:
    "1回の収録で9つのSNSに全自動展開。月1〜2時間の収録だけで月50本以上のコンテンツが生まれる、経営者のためのSNS運用代行サービス。",
  openGraph: {
    title: "カゲブンシン | SNS全方位展開サービス",
    description:
      "1回の収録で9つのSNSに全自動展開。経営者の分身がSNSを動かす。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-gray-900 bg-white">
        {children}
      </body>
    </html>
  );
}
