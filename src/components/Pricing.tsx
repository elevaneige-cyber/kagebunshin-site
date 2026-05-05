"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const plans = [
  {
    name: "Light",
    tagline: "まず試す",
    price: "30",
    salePrice: "15",
    recording: "月1回収録",
    posts: "月50本〜",
    features: [
      "全9プラットフォーム対応",
      "投稿前確認フロー",
      "月次レポート",
    ],
    recommended: false,
  },
  {
    name: "Standard",
    tagline: "全SNS制覇",
    price: "60",
    salePrice: "30",
    recording: "月2回収録",
    posts: "月100本〜",
    features: [
      "全9プラットフォーム対応",
      "投稿前確認フロー",
      "AI分析 + 改善提案",
      "週次レポート",
    ],
    recommended: true,
  },
  {
    name: "Premium",
    tagline: "フル支援",
    price: "100",
    salePrice: "50",
    recording: "月4回収録",
    posts: "月200本〜",
    features: [
      "Standard全機能",
      "専属ディレクター",
      "月1回戦略MTG",
    ],
    recommended: false,
  },
];

const options = [
  {
    name: "LINE導線設計",
    description: "全SNSからLINE登録に集約する導線を設計。投稿するたびに成果に繋がる仕組みを構築します。",
  },
  {
    name: "LP制作 + 広告運用支援",
    description: "SNSと連動したランディングページの制作と、広告運用のサポートを行います。",
  },
];

export default function Pricing() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);
  const { ref: optRef, isVisible: optVisible } = useScrollAnimation(0.1);

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-14 ${titleVisible ? "anim-show" : "anim-hidden"}`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            料金プラン
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            規模やご要望に合わせて、最適なプランをご提案します
          </p>

          {/* Launch campaign banner */}
          <div className="mt-8 inline-flex items-center gap-3 bg-red-50 border border-red-200 rounded-2xl px-6 py-4">
            <span className="text-xl">🎉</span>
            <div className="text-left">
              <p className="text-sm font-black text-red-600 tracking-wide">リリース記念キャンペーン</p>
              <p className="text-xs text-red-500 mt-0.5">
                先着<span className="font-bold text-base">5社</span>限定 ・ 通常価格より<span className="font-bold text-base">50%OFF</span>
              </p>
            </div>
          </div>
        </div>

        {/* Plans */}
        <div
          ref={cardsRef}
          className={`grid md:grid-cols-3 gap-6 max-w-5xl mx-auto stagger-children ${cardsVisible ? "stagger-show" : ""}`}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.recommended
                  ? "border-primary-300 bg-primary-50/50 shadow-lg"
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary-600 text-white text-xs font-bold">
                  RECOMMENDED
                </div>
              )}

              {/* Campaign badge */}
              <div className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-red-500 text-white text-xs font-bold">
                先着5社 半額
              </div>

              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{plan.tagline}</p>
                <div className="mt-4">
                  {/* Strikethrough regular price */}
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className="text-sm text-gray-400 line-through">{plan.price}万円〜</span>
                    <span className="text-xs text-gray-400">/ 月</span>
                  </div>
                  {/* Sale price */}
                  <div className="flex items-baseline justify-center gap-0.5">
                    <span className="text-4xl font-black text-red-600">{plan.salePrice}</span>
                    <span className="text-base text-gray-500">万円〜/月</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {plan.recording} / {plan.posts}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`block w-full text-center py-3 rounded-lg font-semibold text-sm transition-all ${
                  plan.recommended
                    ? "bg-primary-600 text-white hover:bg-primary-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                話を聞いてみる
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          ※ 料金の詳細は、ヒアリング後にお見積りをお出しします。キャンペーン価格は先着5社に達し次第終了します。
        </p>

        {/* Options */}
        <div
          ref={optRef}
          className={`mt-16 max-w-3xl mx-auto ${optVisible ? "anim-show" : "anim-hidden"}`}
        >
          <h3 className="text-lg font-bold text-gray-900 text-center mb-6">
            成果を加速するオプション
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {options.map((opt) => (
              <div
                key={opt.name}
                className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-6 hover:border-primary-300 hover:bg-primary-50/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span className="font-bold text-gray-900">{opt.name}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {opt.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            どのプランにも追加可能です。詳しくはご相談ください。
          </p>
        </div>
      </div>
    </section>
  );
}
