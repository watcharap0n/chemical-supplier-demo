import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";
import type { Product } from "@/lib/data";
import { StockBadge } from "@/components/StockBadge";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
          <Image
            src={product.image}
            alt={`${product.name} packaging in warehouse stock`}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">{product.category}</p>
            <h3 className="mt-2 text-lg font-semibold leading-6 text-slate-950">
              <Link href={`/products/${product.slug}`} className="hover:text-blue-700">
                {product.name}
              </Link>
            </h3>
          </div>
          <StockBadge status={product.stockStatus} />
        </div>
        <dl className="mt-4 grid gap-2 text-sm text-slate-600">
          <div className="flex justify-between gap-4">
            <dt>CAS</dt>
            <dd className="font-medium text-slate-900">{product.cas}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>Packaging</dt>
            <dd className="text-right font-medium text-slate-900">{product.packaging[0]}</dd>
          </div>
        </dl>
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-600">
            <Package size={16} /> {product.leadTime}
          </span>
          <Link href={`/products/${product.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
            Details <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
