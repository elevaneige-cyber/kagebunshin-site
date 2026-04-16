"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation(0.1);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      await fetch("https://formsubmit.co/ajax/elevaneige@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      setSubmitted(true);
    } catch {
      // Fallback: submit normally
      form.submit();
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-gradient-to-br from-primary-950 via-primary-900 to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`max-w-2xl mx-auto text-center mb-12 ${titleVisible ? "anim-show" : "anim-hidden"}`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            まずは無料相談から
          </h2>
          <p className="mt-4 text-gray-300">
            御社のSNS活用状況をヒアリングし、最適なプランをご提案します。
            <br />
            お気軽にご相談ください。
          </p>
        </div>

        <div
          ref={formRef}
          className={`${formVisible ? "anim-show-scale" : "anim-hidden-scale"}`}
        >
          {submitted ? (
            <div className="max-w-lg mx-auto bg-white/10 backdrop-blur rounded-2xl p-10 text-center border border-white/20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-400 mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                送信ありがとうございます
              </h3>
              <p className="text-gray-300 text-sm">
                2営業日以内にご連絡いたします。
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto bg-white/10 backdrop-blur rounded-2xl p-8 sm:p-10 border border-white/20"
            >
              {/* FormSubmit config */}
              <input type="hidden" name="_subject" value="【カゲブンシン】新規お問い合わせ" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" className="hidden" />

              <div className="space-y-5">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-200 mb-1.5">
                    会社名
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="会社名"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    placeholder="株式会社〇〇"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-200 mb-1.5">
                    お名前
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="お名前"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    placeholder="山田 太郎"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-1.5">
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="メールアドレス"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    placeholder="info@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-200 mb-1.5">
                    電話番号（任意）
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="電話番号"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    placeholder="090-0000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-200 mb-1.5">
                    ご相談内容（任意）
                  </label>
                  <textarea
                    id="message"
                    name="ご相談内容"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all resize-none"
                    placeholder="現在のSNS活用状況や、お悩みなどをお聞かせください"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full py-4 rounded-xl bg-primary-500 text-white font-bold text-base hover:bg-primary-400 hover:scale-[1.02] transition-all shadow-lg shadow-primary-500/25 cursor-pointer"
              >
                まずは話を聞いてみる（無料）
              </button>

              <p className="mt-4 text-xs text-gray-400 text-center">
                2営業日以内にご連絡いたします。お急ぎの方はお電話でもどうぞ。
                <br />
                TEL: 050-3115-2337
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
