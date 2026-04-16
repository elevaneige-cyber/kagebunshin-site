"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2m0 2a2 2 0 100 4m0-4a2 2 0 110 4m10-4V2m0 2a2 2 0 100 4m0-4a2 2 0 110 4M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    value: "9つ",
    label: "対応SNSプラットフォーム",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    value: "月50本+",
    label: "コンテンツを自動展開",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    value: "月1〜2時間",
    label: "社長の作業時間",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    value: "全自動",
    label: "AI×人力で最適化展開",
  },
];

export default function StatsBadges() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div
        ref={ref}
        className={`grid grid-cols-2 lg:grid-cols-4 gap-4 stagger-children ${isVisible ? "stagger-show" : ""}`}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 p-5 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 text-primary-600 mb-3">
              {stat.icon}
            </div>
            <div className="text-xl sm:text-2xl font-bold text-primary-700">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
