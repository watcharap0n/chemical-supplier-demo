import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, FileText, MessageCircle, Package, Share2, Truck } from "lucide-react";
import { StockBadge } from "@/components/StockBadge";
import { contact, getProductBySlug, products } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return {
    title: product ? `${product.name} | BlueLine Industrial Chemicals` : "Product | BlueLine Industrial Chemicals",
    description: product?.summary,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedImages = [product.image, "/images/product-packaging.png", "/images/warehouse-inventory.png"];

  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
            <ArrowLeft size={16} /> Back to Products
          </Link>
          <p className="mt-6 text-sm font-medium text-slate-500">Products / {product.category} / {product.name}</p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div>
            <div className="relative min-h-[420px] overflow-hidden rounded border border-slate-200 bg-slate-100 shadow-sm">
              <Image src={product.image} alt={`${product.name} warehouse packaging`} fill className="object-cover" sizes="(min-width: 1024px) 55vw, 100vw" priority />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {relatedImages.map((image, index) => (
                <div key={`${image}-${index}`} className="relative aspect-[4/3] overflow-hidden rounded border border-slate-200 bg-slate-100">
                  <Image src={image} alt={`${product.name} product view ${index + 1}`} fill className="object-cover" sizes="30vw" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">{product.category}</span>
              <StockBadge status={product.stockStatus} />
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{product.name}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">{product.summary}</p>

            <dl className="mt-8 grid gap-4 rounded border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex justify-between gap-5 border-b border-slate-100 pb-4">
                <dt className="text-sm font-medium text-slate-500">CAS Number</dt>
                <dd className="text-sm font-semibold text-slate-950">{product.cas}</dd>
              </div>
              {product.concentration ? (
                <div className="flex justify-between gap-5 border-b border-slate-100 pb-4">
                  <dt className="text-sm font-medium text-slate-500">Concentration</dt>
                  <dd className="text-sm font-semibold text-slate-950">{product.concentration}</dd>
                </div>
              ) : null}
              <div className="flex justify-between gap-5 border-b border-slate-100 pb-4">
                <dt className="text-sm font-medium text-slate-500">Warehouse Location</dt>
                <dd className="text-sm font-semibold text-slate-950">{product.warehouseLocation}</dd>
              </div>
              <div className="flex justify-between gap-5">
                <dt className="text-sm font-medium text-slate-500">Lead Time</dt>
                <dd className="text-sm font-semibold text-slate-950">{product.leadTime}</dd>
              </div>
            </dl>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded bg-blue-700 px-5 text-sm font-semibold text-white transition hover:bg-blue-800 sm:col-span-3"
              >
                <FileText size={18} /> Request Quotation
              </Link>
              <a
                href={contact.lineUrl}
                className="inline-flex h-11 items-center justify-center gap-2 rounded border border-slate-300 px-4 text-sm font-semibold text-slate-900 transition hover:border-blue-700 hover:text-blue-700"
              >
                <MessageCircle size={17} /> LINE
              </a>
              <a
                href={contact.facebookUrl}
                className="inline-flex h-11 items-center justify-center gap-2 rounded border border-slate-300 px-4 text-sm font-semibold text-slate-900 transition hover:border-blue-700 hover:text-blue-700"
              >
                <Share2 size={17} /> Facebook
              </a>
              <a
                href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded border border-slate-300 px-4 text-sm font-semibold text-slate-900 transition hover:border-blue-700 hover:text-blue-700"
              >
                Call Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="rounded border border-slate-200 bg-white p-6 shadow-sm">
            <Package className="text-blue-700" size={26} />
            <h2 className="mt-4 text-xl font-semibold text-slate-950">Packaging Sizes</h2>
            <ul className="mt-5 grid gap-3 text-sm text-slate-700">
              {product.packaging.map((item) => (
                <li key={item} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded border border-slate-200 bg-white p-6 shadow-sm">
            <Truck className="text-blue-700" size={26} />
            <h2 className="mt-4 text-xl font-semibold text-slate-950">Applications</h2>
            <ul className="mt-5 grid gap-3 text-sm text-slate-700">
              {product.applications.map((item) => (
                <li key={item} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded border border-slate-200 bg-white p-6 shadow-sm">
            <FileText className="text-blue-700" size={26} />
            <h2 className="mt-4 text-xl font-semibold text-slate-950">Safety & Documentation</h2>
            <p className="mt-5 text-sm leading-6 text-slate-700">
              Safety data sheets, packaging details, and handling notes are confirmed with each quotation. Placeholder content should be replaced with verified product documentation before production use.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
