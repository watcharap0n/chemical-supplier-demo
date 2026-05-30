import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { businessInfo, operations, site } from "@/lib/data";

export const metadata = {
  title: "About Us | BlueLine Industrial Chemicals",
  description: "Company overview, mission, and business information for BlueLine Industrial Chemicals.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">About Us</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {site.name} is a placeholder industrial chemical distributor website built around real-world B2B supply priorities: inventory visibility, packaging clarity, documentation, and delivery coordination.
            </p>
            <Link href="/contact" className="mt-8 inline-flex h-12 w-fit items-center justify-center gap-2 rounded bg-blue-700 px-5 text-sm font-semibold text-white transition hover:bg-blue-800">
              Contact Sales <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded border border-slate-200 bg-slate-100 shadow-sm">
            <Image src="/images/facility-exterior.png" alt="Industrial chemical supplier warehouse exterior" fill className="object-cover" sizes="(min-width: 1024px) 55vw, 100vw" priority />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <SectionHeading title="Mission" description="Support industrial buyers with practical chemical supply that is easy to confirm, quote, and deliver." />
          <div className="grid gap-5 sm:grid-cols-2">
            {businessInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded border border-slate-200 bg-white p-6 shadow-sm">
                  <Icon className="text-blue-700" size={28} />
                  <h2 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="How We Work" description="A direct procurement flow for product requests, stock confirmation, quotation, and dispatch." align="center" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {operations.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="rounded border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <Icon className="text-blue-700" size={28} />
                    <span className="text-sm font-semibold text-slate-400">0{index + 1}</span>
                  </div>
                  <h2 className="mt-5 text-lg font-semibold text-slate-950">{step.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="relative min-h-[380px] overflow-hidden rounded border border-slate-800 bg-slate-900">
            <Image src="/images/warehouse-inventory.png" alt="Organized chemical warehouse inventory" fill className="object-cover" sizes="(min-width: 1024px) 55vw, 100vw" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Business Information</h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              This demo represents a warehouse-based chemical supplier with bulk and packaged inventory, practical logistics, and product documentation workflows. Replace these placeholder details with verified company records before going live.
            </p>
            <div className="mt-8 grid gap-4 text-sm font-medium text-slate-200">
              <div className="border-b border-slate-800 pb-4">Business Type: Industrial chemical distribution</div>
              <div className="border-b border-slate-800 pb-4">Supply Model: Stocked warehouse inventory and quotation</div>
              <div className="border-b border-slate-800 pb-4">Packaging: Bags, drums, pails, carboys, and IBC tanks</div>
              <div>Service Focus: B2B procurement and delivery coordination</div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
