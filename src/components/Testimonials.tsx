"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Testimonials() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation(0.1);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-14 ${titleVisible ? "anim-show" : "anim-hidden"}`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            実際の運用イメージ
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            全SNSの投稿状況をダッシュボードで一目で確認。
            <br />
            何がいつ、どこに投稿されたかが一覧でわかります。
          </p>
        </div>

        {/* Dashboard screenshot */}
        <div
          ref={imageRef}
          className={`mb-16 ${imageVisible ? "anim-show-scale" : "anim-hidden-scale"}`}
        >
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <Image
              src="/dashboard-preview.png"
              alt="カゲブンシン コンテンツダッシュボード — 全SNSの投稿状況を一覧管理"
              width={1200}
              height={675}
              className="w-full"
            />
          </div>
          <p className="text-center text-sm text-gray-400 mt-4">
            ※ 実際のコンテンツダッシュボード画面（デモデータ）
          </p>
        </div>

        {/* Feature highlights */}
        <div
          ref={cardsRef}
          className={`grid md:grid-cols-3 gap-8 max-w-4xl mx-auto stagger-children ${cardsVisible ? "stagger-show" : ""}`}
        >
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">コンテンツカレンダー</h3>
            <p className="text-sm text-gray-500">
              全SNSの投稿スケジュールをカレンダー形式で把握。何がいつ配信されるか一目瞭然。
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">パフォーマンス分析</h3>
            <p className="text-sm text-gray-500">
              各プラットフォームのエンゲージメントをAIが横断分析。伸びているSNSが一目でわかる。
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">月次レポート</h3>
            <p className="text-sm text-gray-500">
              毎月のハイライトと改善提案をお届け。次のアクションが明確になる。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
