import type { StockStatus } from "@/lib/data";

const statusClass: Record<StockStatus, string> = {
  "In Stock": "border-emerald-200 bg-emerald-50 text-emerald-700",
  "Low Stock": "border-amber-200 bg-amber-50 text-amber-700",
  "Limited Stock": "border-sky-200 bg-sky-50 text-sky-700",
};

export function StockBadge({ status }: { status: StockStatus }) {
  return (
    <span className={`inline-flex items-center rounded border px-2.5 py-1 text-xs font-semibold ${statusClass[status]}`}>
      {status}
    </span>
  );
}
