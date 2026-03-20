export function ReportSkeleton() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 animate-pulse">
      <div className="mb-8">
        <div className="h-3 w-20 bg-zinc-200 dark:bg-zinc-800 rounded mb-2" />
        <div className="h-6 w-64 bg-zinc-200 dark:bg-zinc-800 rounded mb-1" />
        <div className="h-3 w-24 bg-zinc-200 dark:bg-zinc-800 rounded" />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12 p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 rounded-xl">
        <div className="w-[180px] h-[180px] rounded-full bg-zinc-200 dark:bg-zinc-800" />
        <div className="flex-1 w-full space-y-3">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-4 h-4 bg-zinc-200 dark:bg-zinc-800 rounded" />
              <div className="h-3 w-16 bg-zinc-200 dark:bg-zinc-800 rounded" />
              <div className="flex-1 h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full" />
            </div>
          ))}
        </div>
      </div>
      <div className="mb-10">
        <div className="h-5 w-32 bg-zinc-200 dark:bg-zinc-800 rounded mb-4" />
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-12 bg-zinc-200 dark:bg-zinc-800 rounded-lg mb-2" />
        ))}
      </div>
      <div className="mb-10">
        <div className="h-5 w-28 bg-zinc-200 dark:bg-zinc-800 rounded mb-4" />
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-20 bg-zinc-200 dark:bg-zinc-800 rounded-lg mb-3" />
        ))}
      </div>
    </div>
  );
}
