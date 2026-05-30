import Link from "next/link";
import { ClipboardList, Menu, Phone } from "lucide-react";
import { contact, site } from "@/lib/data";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <span className="flex h-10 w-10 items-center justify-center rounded bg-blue-700 text-sm font-bold text-white">
            BL
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-tight text-slate-950 sm:text-base">{site.shortName}</span>
            <span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-slate-500 sm:block">Industrial Chemicals</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-blue-700">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
            className="inline-flex h-10 items-center gap-2 rounded border border-slate-300 px-4 text-sm font-semibold text-slate-800 transition hover:border-blue-700 hover:text-blue-700"
          >
            <Phone size={16} />
            {contact.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center gap-2 rounded bg-blue-700 px-4 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            <ClipboardList size={16} />
            Request Quotation
          </Link>
        </div>

        <Link
          href="/contact"
          className="inline-flex h-10 w-10 items-center justify-center rounded border border-slate-300 text-slate-800 lg:hidden"
          aria-label="Open contact page"
        >
          <Menu size={20} />
        </Link>
      </div>
    </header>
  );
}
