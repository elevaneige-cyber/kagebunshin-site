import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-8">
        {/* Watermark */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.07]"
          aria-hidden="true"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className="text-[6rem] sm:text-[9rem] lg:text-[12rem] font-black text-primary-600 whitespace-nowrap leading-[0.9] tracking-[0.15em]"
            >
              カゲブンシン
            </span>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <p className="hero-sub text-base sm:text-lg text-gray-500 mb-4">
            SNSが大事なのは分かっている。でも、手が回らない。
          </p>
          <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight">
            カゲブンシン
          </h1>
          <p className="hero-sub mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
            1回話すだけで、あなたの分身が
            <br />
            すべてのSNSに現れる。
          </p>

          {/* Hero image (transparent PNG) */}
          <div className="hero-image relative mt-8 flex justify-center">
            <Image
              src="/hero-image.png"
              alt="カゲブンシン — 分身が全方位に展開するイメージ"
              width={600}
              height={338}
              className="w-full max-w-md sm:max-w-lg relative z-10"
              priority
            />
          </div>

          {/* CTA buttons */}
          <div className="hero-cta mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary-600 text-white font-bold text-base hover:bg-primary-700 hover:scale-105 transition-all shadow-lg shadow-primary-600/25"
            >
              まずは話を聞いてみる
            </Link>
            <Link
              href="#service"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gray-100 text-gray-700 font-semibold text-base hover:bg-gray-200 hover:scale-105 transition-all"
            >
              サービスを見る
            </Link>
          </div>
          <p className="hero-cta mt-4 text-sm text-gray-400">
            株式会社エレヴァネージュ
          </p>
        </div>
      </div>
    </section>
  );
}
