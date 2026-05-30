import Image from "next/image";
import { Mail, MapPin, MessageCircle, Phone, Share2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { contact } from "@/lib/data";

export const metadata = {
  title: "Contact | BlueLine Industrial Chemicals",
  description: "Contact BlueLine Industrial Chemicals by phone, email, LINE, Facebook, or quotation form.",
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`;

  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            title="Contact"
            description="Request quotation support, confirm stock availability, or send delivery requirements for bulk and packaged chemicals."
          />
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <aside className="space-y-6">
            <div className="rounded border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">Sales Office</h2>
              <div className="mt-6 grid gap-4 text-sm text-slate-700">
                <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`} className="flex items-center gap-3 font-medium hover:text-blue-700">
                  <Phone className="text-blue-700" size={20} /> {contact.phone}
                </a>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 font-medium hover:text-blue-700">
                  <Mail className="text-blue-700" size={20} /> {contact.email}
                </a>
                <a href={contact.lineUrl} className="flex items-center gap-3 font-medium hover:text-blue-700">
                  <MessageCircle className="text-blue-700" size={20} /> LINE {contact.line}
                </a>
                <a href={contact.facebookUrl} className="flex items-center gap-3 font-medium hover:text-blue-700">
                  <Share2 className="text-blue-700" size={20} /> {contact.facebook}
                </a>
                <p className="flex items-start gap-3 font-medium">
                  <MapPin className="mt-0.5 shrink-0 text-blue-700" size={20} /> {contact.address}
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] bg-slate-100">
                <Image src="/images/facility-exterior.png" alt="BlueLine placeholder industrial facility" fill className="object-cover" sizes="(min-width: 1024px) 35vw, 100vw" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-slate-950">Business Hours</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{contact.businessHours}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">Delivery coordination is confirmed during quotation based on product handling and destination requirements.</p>
              </div>
            </div>
          </aside>

          <div className="grid gap-8">
            <form className="rounded border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Request Quotation</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                This demo form is UI-only. Connect it to your CRM, email service, or backend before production use.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-slate-800">
                  Company
                  <input className="h-11 rounded border border-slate-300 px-3 text-sm font-medium outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100" placeholder="Company name" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-800">
                  Name
                  <input className="h-11 rounded border border-slate-300 px-3 text-sm font-medium outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100" placeholder="Contact person" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-800">
                  Email
                  <input type="email" className="h-11 rounded border border-slate-300 px-3 text-sm font-medium outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100" placeholder="name@company.com" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-800">
                  Phone
                  <input className="h-11 rounded border border-slate-300 px-3 text-sm font-medium outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100" placeholder="+1..." />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-800 sm:col-span-2">
                  Message
                  <textarea className="min-h-36 rounded border border-slate-300 px-3 py-3 text-sm font-medium outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100" placeholder="Product, quantity, packaging, and delivery requirements" />
                </label>
              </div>
              <button type="button" className="mt-6 inline-flex h-12 w-full items-center justify-center rounded bg-blue-700 px-5 text-sm font-semibold text-white transition hover:bg-blue-800 sm:w-auto">
                Send Request
              </button>
            </form>

            <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm">
              <iframe
                title="Google Map for BlueLine Industrial Chemicals placeholder address"
                src={mapSrc}
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
