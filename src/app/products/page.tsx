import { ProductsExplorer } from "@/app/products/ProductsExplorer";
import { SectionHeading } from "@/components/SectionHeading";
import { products } from "@/lib/data";

export const metadata = {
  title: "Products | BlueLine Industrial Chemicals",
  description: "Search industrial chemicals by category, packaging, and stock status.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            title="Products"
            description="Search warehouse inventory by product name, CAS number, category, and stock status. Final availability is confirmed with every quotation."
          />
        </div>
      </section>
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductsExplorer products={products} />
        </div>
      </section>
    </>
  );
}
