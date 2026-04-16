"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const rows = [
  { item: "対応PF数", self: "1〜2個", multi: "3〜4個", agency: "2〜3個", ours: "9個" },
  { item: "月間投稿数", self: "数本", multi: "10〜20本", agency: "10〜20本", ours: "50本〜" },
  { item: "月額コスト", self: "人件費", multi: "100万円+", agency: "30〜50万円", ours: "15万円〜" },
  { item: "社長の時間", self: "10時間+/月", multi: "5時間+/月", agency: "3時間+/月", ours: "1〜2時間/月" },
  { item: "ブランド統一", self: "—", multi: "—", agency: "△", ours: "◎" },
  { item: "分析・改善", self: "—", multi: "バラバラ", agency: "△", ours: "AI横断分析" },
];

export default function Comparison() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: tableRef, isVisible: tableVisible } = useScrollAnimation(0.1);

  return (
    <section id="comparison" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-14 ${titleVisible ? "anim-show" : "anim-hidden"}`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            他社との違い
          </h2>
          <p className="mt-4 text-gray-500">
            SNS運用の新しい選択肢をご提案します
          </p>
        </div>

        <div
          ref={tableRef}
          className={`overflow-x-auto ${tableVisible ? "anim-show-scale" : "anim-hidden-scale"}`}
        >
          <table className="w-full max-w-4xl mx-auto text-sm">
            <thead>
              <tr>
                <th className="text-left p-4 bg-gray-100 rounded-tl-xl font-semibold text-gray-600">項目</th>
                <th className="p-4 bg-gray-100 text-center font-semibold text-gray-600">自社運用</th>
                <th className="p-4 bg-gray-100 text-center font-semibold text-gray-600">複数社に依頼</th>
                <th className="p-4 bg-gray-100 text-center font-semibold text-gray-600">1社代行</th>
                <th className="p-4 bg-primary-600 text-center font-bold text-white rounded-tr-xl">カゲブンシン</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.item} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-primary-50/30 transition-colors`}>
                  <td className="p-4 font-semibold text-gray-700 border-b border-gray-100">{row.item}</td>
                  <td className="p-4 text-center text-gray-500 border-b border-gray-100">{row.self}</td>
                  <td className="p-4 text-center text-gray-500 border-b border-gray-100">{row.multi}</td>
                  <td className="p-4 text-center text-gray-500 border-b border-gray-100">{row.agency}</td>
                  <td className="p-4 text-center font-bold text-primary-700 bg-primary-50 border-b border-primary-100">{row.ours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
