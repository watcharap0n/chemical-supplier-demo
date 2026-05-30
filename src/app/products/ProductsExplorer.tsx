"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import type { Product, StockStatus } from "@/lib/data";

const allCategories = "All Categories";
const allStatuses = "All Stock";

export function ProductsExplorer({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(allCategories);
  const [status, setStatus] = useState<typeof allStatuses | StockStatus>(allStatuses);

  const categories = useMemo(() => [allCategories, ...Array.from(new Set(products.map((product) => product.category)))], [products]);
  const statuses = useMemo(() => [allStatuses, ...Array.from(new Set(products.map((product) => product.stockStatus)))], [products]);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesQuery =
        !normalizedQuery ||
        [product.name, product.category, product.cas, product.summary].some((value) => value.toLowerCase().includes(normalizedQuery));
      const matchesCategory = category === allCategories || product.category === category;
      const matchesStatus = status === allStatuses || product.stockStatus === status;
      return matchesQuery && matchesCategory && matchesStatus;
    });
  }, [category, products, query, status]);

  return (
    <div>
      <div className="rounded border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid gap-3 lg:grid-cols-[1.4fr_1fr_1fr]">
          <label className="relative block">
            <span className="sr-only">Search products</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search product, CAS, or application"
              className="h-12 w-full rounded border border-slate-300 bg-white pl-10 pr-3 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
            />
          </label>

          <label>
            <span className="sr-only">Filter by category</span>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="h-12 w-full rounded border border-slate-300 bg-white px-3 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>

          <label>
            <span className="sr-only">Filter by stock status</span>
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value as typeof allStatuses | StockStatus)}
              className="h-12 w-full rounded border border-slate-300 bg-white px-3 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
            >
              {statuses.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
        <p>
          Showing <span className="font-semibold text-slate-950">{filteredProducts.length}</span> products
        </p>
        <p className="hidden sm:block">Stock status is confirmed during quotation.</p>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
