"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    q: "本当に月1〜2時間だけでいいんですか？",
    a: "はい。月1〜2回、30〜60分のオンライン収録を行うだけです。台本の準備も不要で、対談形式で自然にお話しいただくだけ。あとはすべて私たちが対応します。",
  },
  {
    q: "費用はいくらですか？",
    a: "企業様の状況やご要望に合わせてお見積りをご提案しています。まずは無料相談で現在のSNS活用状況をお聞かせください。最適なプランをご提示します。",
  },
  {
    q: "SNSをまったくやっていない状態からでも始められますか？",
    a: "もちろんです。アカウントの開設から初期設定、プロフィールの最適化まですべてサポートします。ゼロからでも安心してお任せください。",
  },
  {
    q: "投稿内容は自分で確認できますか？",
    a: "はい。投稿前に内容をご確認いただけるフローをご用意しています。もちろん「お任せ」も可能です。ご希望に合わせて柔軟に対応します。",
  },
  {
    q: "どんな業種でも対応できますか？",
    a: "経営者・中小企業であれば業種を問わず対応可能です。建設、士業、飲食、不動産、IT、美容など幅広い業種の実績があります。業種に合わせた最適な発信戦略をご提案します。",
  },
  {
    q: "契約期間の縛りはありますか？",
    a: "最低契約期間は3ヶ月です。SNSは効果が出るまでに一定期間が必要なため、この期間を設けています。3ヶ月以降は月単位でいつでも解約可能です。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: listRef, isVisible: listVisible } = useScrollAnimation(0.05);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-14 ${titleVisible ? "anim-show" : "anim-hidden"}`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            よくある質問
          </h2>
        </div>

        <div
          ref={listRef}
          className={`space-y-3 stagger-children ${listVisible ? "stagger-show" : ""}`}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <button
                className="w-full text-left p-5 flex items-start gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-sm font-bold text-primary-600 shrink-0 mt-0.5">Q.</span>
                <span className="text-sm font-semibold text-gray-900 flex-1">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 pl-14">
                    <div className="flex items-start gap-4">
                      <span className="text-sm font-bold text-accent-500 shrink-0">A.</span>
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
