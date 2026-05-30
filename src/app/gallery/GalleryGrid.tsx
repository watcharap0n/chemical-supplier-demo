"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/lib/data";

const all = "All";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [activeCategory, setActiveCategory] = useState(all);
  const categories = useMemo(() => [all, ...Array.from(new Set(items.map((item) => item.category)))], [items]);
  const visibleItems = activeCategory === all ? items : items.filter((item) => item.category === activeCategory);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`h-10 shrink-0 rounded border px-4 text-sm font-semibold transition ${
              activeCategory === category
                ? "border-blue-700 bg-blue-700 text-white"
                : "border-slate-300 bg-white text-slate-700 hover:border-blue-700 hover:text-blue-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item) => (
          <article key={`${item.category}-${item.title}`} className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[4/3] bg-slate-100">
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">{item.category}</p>
              <h2 className="mt-2 text-lg font-semibold text-slate-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
