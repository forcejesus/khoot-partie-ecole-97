
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

interface EnhancedSkeletonProps {
  className?: string
  variant?: "default" | "card" | "table" | "list"
  count?: number
}

function EnhancedSkeleton({
  className,
  variant = "default",
  count = 1,
  ...props
}: EnhancedSkeletonProps) {
  const skeletons = Array.from({ length: count }, (_, i) => i)

  if (variant === "card") {
    return (
      <div className="space-y-4">
        {skeletons.map((index) => (
          <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-start gap-4">
              <Skeleton className="h-12 w-12 rounded-lg" />
              <div className="flex-1 space-y-3">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-6 w-20 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (variant === "table") {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 dark:border-slate-700">
          <Skeleton className="h-6 w-1/4" />
        </div>
        <div className="divide-y divide-slate-200 dark:divide-slate-700">
          {skeletons.map((index) => (
            <div key={index} className="p-4 flex items-center gap-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-3 w-1/4" />
              </div>
              <Skeleton className="h-8 w-20 rounded-md" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (variant === "list") {
    return (
      <div className="space-y-3">
        {skeletons.map((index) => (
          <div key={index} className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-3 w-1/2" />
            </div>
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <Skeleton
      className={cn("animate-pulse rounded-md bg-slate-200 dark:bg-slate-700", className)}
      {...props}
    />
  )
}

export { EnhancedSkeleton }
