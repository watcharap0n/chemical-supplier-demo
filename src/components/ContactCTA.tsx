import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { contact } from "@/lib/data";

export function ContactCTA() {
  return (
    <section className="bg-blue-700">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 text-white sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Need stock confirmed for your next order?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100">
            Send product, packaging, quantity, and delivery requirements. Our team will confirm availability and quote details.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded bg-white px-5 text-sm font-semibold text-blue-800 transition hover:bg-blue-50"
          >
            Request Quotation <ArrowRight size={17} />
          </Link>
          <a
            href={contact.lineUrl}
            className="inline-flex h-12 items-center justify-center gap-2 rounded border border-blue-200 px-5 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            <MessageCircle size={17} /> Contact via LINE
          </a>
        </div>
      </div>
    </section>
  );
}
