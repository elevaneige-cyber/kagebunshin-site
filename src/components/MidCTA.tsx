import Link from "next/link";

export default function MidCTA({ text = "まずは話を聞いてみる" }: { text?: string }) {
  return (
    <div className="flex justify-center py-10">
      <Link
        href="#contact"
        className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary-600 text-white font-bold text-base hover:bg-primary-700 hover:scale-105 transition-all shadow-lg shadow-primary-600/25"
      >
        {text}
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Link>
    </div>
  );
}
