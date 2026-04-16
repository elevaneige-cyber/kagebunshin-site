"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    num: "01",
    title: "収録（月1〜2回）",
    description:
      "30〜60分、オンラインで対談形式の収録を行います。話すだけでOK。台本は不要です。",
  },
  {
    num: "02",
    title: "AIが分析・設計",
    description:
      "収録内容からAIが「刺さる一文」を抽出し、各SNSに最適なコンテンツを設計します。",
  },
  {
    num: "03",
    title: "9つのSNSに展開",
    description:
      "YouTube、Instagram、X、TikTok、Podcast、Facebook、LinkedIn、note、Threadsに最適化して配信。",
  },
  {
    num: "04",
    title: "月50本以上のコンテンツ",
    description:
      "最適なタイミングで自動投稿。毎月の分析レポートで改善サイクルを回します。",
  },
];

export default function Flow() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation(0.1);

  return (
    <section id="flow" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-14 ${titleVisible ? "anim-show" : "anim-hidden"}`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            ご利用の流れ
          </h2>
        </div>

        <div
          ref={stepsRef}
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto stagger-children ${stepsVisible ? "stagger-show" : ""}`}
        >
          {steps.map((step, i) => (
            <div key={step.num} className="relative group">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl font-bold text-primary-200 mb-3 group-hover:text-primary-400 transition-colors duration-300">
                  {step.num}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 text-primary-300 z-10">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
