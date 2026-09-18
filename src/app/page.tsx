export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-zinc-50 px-6 py-24 font-sans dark:bg-black">
      <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
        ksi-entertainment
      </h1>
      <div className="flex w-full max-w-2xl flex-col gap-6 sm:flex-row">
        <a
          href="#"
          className="flex flex-1 flex-col gap-2 rounded-xl border border-black/[.08] bg-white p-8 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:bg-black dark:hover:bg-[#1a1a1a]"
        >
          <span className="text-xl font-semibold text-black dark:text-zinc-50">
            参戦記録
          </span>
          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            ライブの参戦記録を残してシェアする
          </span>
        </a>
        <a
          href="#"
          className="flex flex-1 flex-col gap-2 rounded-xl border border-black/[.08] bg-white p-8 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:bg-black dark:hover:bg-[#1a1a1a]"
        >
          <span className="text-xl font-semibold text-black dark:text-zinc-50">
            マッチング
          </span>
          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            趣味の合う人とマッチングする
          </span>
        </a>
      </div>
    </div>
  );
}
