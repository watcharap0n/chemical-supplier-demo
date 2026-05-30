import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ClipboardList, Factory, MapPin, PackageCheck, ShieldCheck, Truck, Warehouse } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { industries, productCategories, products, reasons, site, stats } from "@/lib/data";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-16">
          <div className="flex flex-col justify-center">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Industrial Chemical Supplier With Warehouse Stock Ready
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {site.name} supplies bulk and packaged chemicals for factories, water treatment teams, and industrial buyers who need visible inventory, documentation, and coordinated delivery.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded bg-blue-700 px-5 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                <ClipboardList size={18} /> Request Quotation
              </Link>
              <Link
                href="/products"
                className="inline-flex h-12 items-center justify-center gap-2 rounded border border-slate-300 px-5 text-sm font-semibold text-slate-900 transition hover:border-blue-700 hover:text-blue-700"
              >
                View Products <ArrowRight size={18} />
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3 border-t border-slate-200 pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold text-blue-700">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded border border-slate-200 bg-slate-100 shadow-sm lg:min-h-[560px]">
            <Image
              src="/images/warehouse-hero.png"
              alt="Organized chemical warehouse with drums, IBC tanks, and pallet racking"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
            <div className="absolute bottom-5 left-5 right-5 grid gap-3 rounded bg-white/95 p-4 shadow-sm backdrop-blur sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <Warehouse className="text-blue-700" size={22} />
                <span className="text-sm font-semibold text-slate-900">Warehouse stock</span>
              </div>
              <div className="flex items-center gap-3">
                <PackageCheck className="text-blue-700" size={22} />
                <span className="text-sm font-semibold text-slate-900">Bulk packaging</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="text-blue-700" size={22} />
                <span className="text-sm font-semibold text-slate-900">Delivery ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Product Categories"
            description="Core industrial chemical categories organized for procurement teams, plant maintenance, and production operations."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {productCategories.map((category) => (
              <article key={category.name} className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm">
                <div className="relative aspect-[4/3] bg-slate-100">
                  <Image src={category.image} alt={`${category.name} inventory`} fill className="object-cover" sizes="(min-width: 1024px) 20vw, 50vw" />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-slate-950">{category.name}</h3>
                    <span className="text-xs font-semibold text-blue-700">{category.count}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading title="Featured Products" description="Frequently requested products with packaging and stock status surfaced before quotation." />
            <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
              Browse all products <ArrowRight size={17} />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="relative min-h-[420px] overflow-hidden rounded border border-slate-800 bg-slate-900">
            <Image src="/images/warehouse-inventory.png" alt="Chemical warehouse inventory rows" fill className="object-cover" sizes="(min-width: 1024px) 55vw, 100vw" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Warehouse Showcase</h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              Inventory is staged by product type, packaging, and handling requirement. The site design emphasizes real operations because buyers need stock confidence before purchase decisions.
            </p>
            <div className="mt-8 grid gap-4">
              {["Palletized 25 kg bags", "200 L drums and IBC tanks", "Loading dock delivery coordination"].map((item) => (
                <div key={item} className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <ShieldCheck className="text-blue-300" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Industries We Support" description="Supply coverage for teams that need practical procurement, storage, and delivery coordination." align="center" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry} className="flex items-center gap-3 rounded border border-slate-200 bg-white p-5 shadow-sm">
                <Factory className="text-blue-700" size={22} />
                <span className="font-semibold text-slate-900">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why Choose Us" description="Built around the realities of industrial buying: stock, documentation, packaging, and delivery operations." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <article key={reason.title} className="rounded border border-slate-200 bg-white p-6 shadow-sm">
                  <Icon className="text-blue-700" size={28} />
                  <h3 className="mt-5 text-lg font-semibold text-slate-950">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{reason.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <SectionHeading title="Real Delivery Operations" description="Practical loading, staging, and dispatch views are part of the buying experience." />
            <p className="mt-6 flex items-start gap-3 text-sm leading-6 text-slate-600">
              <MapPin className="mt-1 shrink-0 text-blue-700" size={18} />
              Placeholder facility: 123 Industrial Way, Houston, TX 77001
            </p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded border border-slate-200 bg-slate-100 shadow-sm">
            <Image src="/images/delivery-loading.png" alt="Chemical delivery loading dock with truck and forklift" fill className="object-cover" sizes="(min-width: 1024px) 60vw, 100vw" />
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
