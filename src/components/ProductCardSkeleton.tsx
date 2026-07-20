export default function ProductCardSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border p-4">
      <div className="h-64 w-full rounded-lg bg-gray-200"></div>

      <div className="mt-4 h-5 w-3/4 rounded bg-gray-200"></div>

      <div className="mt-3 h-4 w-1/2 rounded bg-gray-200"></div>

      <div className="mt-5 h-10 w-full rounded-lg bg-gray-200"></div>
    </div>
  );
}