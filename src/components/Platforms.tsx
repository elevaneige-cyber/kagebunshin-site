"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const platforms = [
  { name: "YouTube", desc: "長尺動画 + Shorts", color: "bg-red-50 text-red-600 border-red-100 hover:bg-red-100" },
  { name: "Podcast", desc: "Spotify / Apple / stand.fm", color: "bg-purple-50 text-purple-600 border-purple-100 hover:bg-purple-100" },
  { name: "X (Twitter)", desc: "短文投稿 + Articles", color: "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100" },
  { name: "Instagram", desc: "Reels + カルーセル", color: "bg-pink-50 text-pink-600 border-pink-100 hover:bg-pink-100" },
  { name: "TikTok", desc: "ショート動画", color: "bg-cyan-50 text-cyan-600 border-cyan-100 hover:bg-cyan-100" },
  { name: "Facebook", desc: "経営者向け長文", color: "bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-100" },
  { name: "LinkedIn", desc: "ソートリーダーシップ", color: "bg-sky-50 text-sky-600 border-sky-100 hover:bg-sky-100" },
  { name: "note", desc: "SEO記事", color: "bg-green-50 text-green-600 border-green-100 hover:bg-green-100" },
  { name: "Threads", desc: "カジュアル発信", color: "bg-violet-50 text-violet-600 border-violet-100 hover:bg-violet-100" },
];

export default function Platforms() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-14 ${titleVisible ? "anim-show" : "anim-hidden"}`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            対応プラットフォーム
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            1回の収録から、9つのSNS全てに最適化されたコンテンツを展開します
          </p>
        </div>

        <div
          ref={gridRef}
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-3xl mx-auto stagger-children ${gridVisible ? "stagger-show" : ""}`}
        >
          {platforms.map((pf) => (
            <div
              key={pf.name}
              className={`rounded-xl border p-5 text-center transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default ${pf.color}`}
            >
              <div className="font-bold text-base">{pf.name}</div>
              <div className="text-xs mt-1 opacity-80">{pf.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
