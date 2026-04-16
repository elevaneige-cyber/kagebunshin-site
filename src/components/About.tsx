"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className={`text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-14 ${titleVisible ? "anim-show" : "anim-hidden"}`}
        >
          運営者紹介
        </h2>

        <div
          ref={cardRef}
          className={`max-w-3xl mx-auto ${cardVisible ? "anim-show-scale" : "anim-hidden-scale"}`}
        >
          <div className="bg-gray-50 rounded-2xl p-8 sm:p-10 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary-200 flex items-center justify-center text-primary-700 font-bold text-xl">
                黒
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">黒木隆嗣</h3>
                <p className="text-sm text-gray-500">
                  株式会社エレヴァネージュ 代表取締役
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                ライブコマース事業と経営者マッチング事業を経営する中で、多くの経営者が「SNSの重要性は分かっているけど手が回らない」という悩みを抱えていることに気づきました。
              </p>
              <p>
                特に、目の前の事業がうまく回っている経営者ほど、SNSは「いつかやる」のまま後回しになりがちです。でも、始めるのが遅くなるほど、競合との差は開いていく。
              </p>
              <p>
                だからこそ、経営者の負担を限りなくゼロに近づけた「カゲブンシン」を作りました。月1〜2時間、話すだけ。あとはあなたの分身がSNSを動かします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
