"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "単純接触効果で「指名」される",
    description:
      "人は繰り返し目にするものに好意を抱きます。9つのSNSで接触回数を最大化し、「あの会社、よく見るな」から「あの会社に相談しよう」へ。",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "「本気でやってる会社」の信頼感",
    description:
      "どのSNSを開いても、あなたの会社がいる。複数チャネルでの一貫した発信が、「この会社は本気だな」という印象を自然に作ります。",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "検索にも効く、SNS外への波及",
    description:
      "9つのプラットフォームからの被リンクとサイテーションで、Google検索での露出も向上。SNSだけで終わらない、複合的な集客効果。",
  },
];

export default function ValueProps() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);

  return (
    <section id="service" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-14 ${titleVisible ? "anim-show" : "anim-hidden"}`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            なぜ、全方位のSNS展開が効くのか
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            1つのSNSを頑張るのではなく、あらゆる場所にあなたの存在を置く
          </p>
        </div>

        <div
          ref={cardsRef}
          className={`grid md:grid-cols-3 gap-8 stagger-children ${cardsVisible ? "stagger-show" : ""}`}
        >
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-100 text-primary-600 mb-5 group-hover:scale-110 transition-transform duration-300">
                {v.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {v.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
