import { GalleryGrid } from "@/app/gallery/GalleryGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { galleryItems } from "@/lib/data";

export const metadata = {
  title: "Gallery | BlueLine Industrial Chemicals",
  description: "Warehouse, product, delivery, and inventory photos for an industrial chemical supplier.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            title="Gallery"
            description="Warehouse photos, product packaging, delivery operations, and inventory views that show practical chemical supply operations."
          />
        </div>
      </section>
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid items={galleryItems} />
        </div>
      </section>
    </>
  );
}
