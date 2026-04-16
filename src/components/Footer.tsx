import Link from "next/link";

const footerNav = [
  { label: "ホーム", href: "#" },
  { label: "サービス", href: "#service" },
  { label: "導入の流れ", href: "#flow" },
  { label: "他社比較", href: "#comparison" },
  { label: "運用イメージ", href: "#testimonials" },
  { label: "料金", href: "#pricing" },
  { label: "よくある質問", href: "#faq" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2">カゲブンシン</h3>
            <p className="text-sm leading-relaxed">
              1回の収録で9つのSNSに全自動展開。
              <br />
              経営者のためのSNS全方位展開サービス。
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">メニュー</h4>
            <nav className="flex flex-col gap-2">
              {footerNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company info */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">運営情報</h4>
            <dl className="space-y-2 text-sm">
              <div>
                <dt className="text-gray-500">運営会社</dt>
                <dd>株式会社エレヴァネージュ</dd>
              </div>
              <div>
                <dt className="text-gray-500">所在地</dt>
                <dd>大阪市北区梅田</dd>
              </div>
              <div>
                <dt className="text-gray-500">メール</dt>
                <dd>
                  <a
                    href="mailto:elevaneige@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    elevaneige@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-gray-500">電話</dt>
                <dd>050-3115-2337</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} カゲブンシン by 株式会社エレヴァネージュ. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
