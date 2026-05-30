import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone, Share2 } from "lucide-react";
import { contact, site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded bg-blue-600 text-sm font-bold">BL</span>
            <div>
              <p className="font-semibold">{site.name}</p>
              <p className="text-sm text-slate-400">Warehouse-based industrial chemical supply</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-300">
            Real products, documented packaging, and coordinated delivery for factories, maintenance teams, and industrial buyers.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Pages</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <Link href="/products" className="hover:text-white">Products</Link>
            <Link href="/gallery" className="hover:text-white">Gallery</Link>
            <Link href="/about" className="hover:text-white">About Us</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`} className="flex items-center gap-2 hover:text-white">
              <Phone size={16} /> {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-white">
              <Mail size={16} /> {contact.email}
            </a>
            <a href={contact.lineUrl} className="flex items-center gap-2 hover:text-white">
              <MessageCircle size={16} /> LINE {contact.line}
            </a>
            <a href={contact.facebookUrl} className="flex items-center gap-2 hover:text-white">
              <Share2 size={16} /> Facebook
            </a>
            <span className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" /> {contact.address}
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-5 text-center text-xs text-slate-500">
        Placeholder demo website. Replace product and business details before production use.
      </div>
    </footer>
  );
}
