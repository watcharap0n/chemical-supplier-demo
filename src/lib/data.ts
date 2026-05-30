import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Factory,
  FlaskConical,
  PackageCheck,
  ShieldCheck,
  ShipWheel,
  Truck,
  Warehouse,
} from "lucide-react";

export type StockStatus = "In Stock" | "Low Stock" | "Limited Stock";

export type Product = {
  slug: string;
  name: string;
  category: string;
  cas: string;
  concentration?: string;
  summary: string;
  packaging: string[];
  applications: string[];
  stockStatus: StockStatus;
  leadTime: string;
  warehouseLocation: string;
  image: string;
};

export type SiteContact = {
  phone: string;
  email: string;
  line: string;
  lineUrl: string;
  facebook: string;
  facebookUrl: string;
  address: string;
  businessHours: string;
  mapQuery: string;
};

export type GalleryItem = {
  title: string;
  category: "Warehouse Photos" | "Product Photos" | "Delivery Photos" | "Inventory Showcase";
  caption: string;
  image: string;
};

export const site = {
  name: "BlueLine Industrial Chemicals",
  shortName: "BlueLine",
  tagline: "Industrial chemical supply, stocked and ready for bulk delivery.",
};

export const contact: SiteContact = {
  phone: "+1 (800) 555-0198",
  email: "sales@bluelinechem.com",
  line: "@bluelinechem",
  lineUrl: "https://line.me/R/ti/p/@bluelinechem",
  facebook: "BlueLine Industrial Chemicals",
  facebookUrl: "https://www.facebook.com/",
  address: "123 Industrial Way, Houston, TX 77001",
  businessHours: "Monday-Friday, 8:00 AM-6:00 PM",
  mapQuery: "123 Industrial Way Houston TX 77001",
};

export const productCategories = [
  {
    name: "Solvents",
    description: "Industrial grades for cleaning, blending, and manufacturing processes.",
    count: "18 SKUs",
    image: "/images/product-packaging.png",
  },
  {
    name: "Acids & Alkalis",
    description: "Bulk and packaged materials for process control and water treatment.",
    count: "22 SKUs",
    image: "/images/warehouse-inventory.png",
  },
  {
    name: "Industrial Salts",
    description: "Bagged and palletized inventory for production and maintenance teams.",
    count: "14 SKUs",
    image: "/images/product-packaging.png",
  },
  {
    name: "Cleaning Chemicals",
    description: "Degreasers, detergents, and plant hygiene products for industrial users.",
    count: "16 SKUs",
    image: "/images/delivery-loading.png",
  },
  {
    name: "Specialty Additives",
    description: "Process additives and support materials with documented availability.",
    count: "11 SKUs",
    image: "/images/facility-exterior.png",
  },
];

export const products: Product[] = [
  {
    slug: "isopropyl-alcohol-ipa",
    name: "Isopropyl Alcohol (IPA)",
    category: "Solvents",
    cas: "67-63-0",
    concentration: "99%",
    summary: "High-purity industrial solvent for cleaning, electronics, coatings, and process use.",
    packaging: ["200 L Drum", "20 L Pail", "IBC Tank 1000 L"],
    applications: ["Surface cleaning", "Coatings and inks", "Electronics cleaning", "Process solvent"],
    stockStatus: "In Stock",
    leadTime: "1-3 business days",
    warehouseLocation: "Aisle S-02",
    image: "/images/product-packaging.png",
  },
  {
    slug: "sodium-hydroxide-caustic-soda-32",
    name: "Sodium Hydroxide Caustic Soda 32%",
    category: "Acids & Alkalis",
    cas: "1310-73-2",
    concentration: "32%",
    summary: "Liquid caustic soda stocked for water treatment, pH adjustment, and industrial processing.",
    packaging: ["IBC Tank 1000 L", "200 L Drum", "30 L Pail"],
    applications: ["Water treatment", "pH adjustment", "Cleaning and degreasing", "Textile processing"],
    stockStatus: "In Stock",
    leadTime: "1-3 business days",
    warehouseLocation: "Bulk Zone B-04",
    image: "/images/warehouse-inventory.png",
  },
  {
    slug: "sodium-carbonate-light",
    name: "Sodium Carbonate Light",
    category: "Industrial Salts",
    cas: "497-19-8",
    summary: "Bagged soda ash for manufacturing, cleaning, and process neutralization.",
    packaging: ["25 kg Bag", "1000 kg Jumbo Bag", "Pallet 40 Bags"],
    applications: ["Glass production", "Detergents", "Water treatment", "pH buffering"],
    stockStatus: "In Stock",
    leadTime: "1-2 business days",
    warehouseLocation: "Rack P-11",
    image: "/images/product-packaging.png",
  },
  {
    slug: "hydrochloric-acid-33",
    name: "Hydrochloric Acid 33%",
    category: "Acids & Alkalis",
    cas: "7647-01-0",
    concentration: "33%",
    summary: "Industrial hydrochloric acid for pH control, cleaning, and production support.",
    packaging: ["200 L Drum", "30 L Carboy", "IBC Tank 1000 L"],
    applications: ["Metal cleaning", "pH reduction", "Scale removal", "Chemical processing"],
    stockStatus: "Low Stock",
    leadTime: "2-4 business days",
    warehouseLocation: "Corrosives Zone C-01",
    image: "/images/warehouse-inventory.png",
  },
  {
    slug: "calcium-chloride-flakes",
    name: "Calcium Chloride Flakes",
    category: "Industrial Salts",
    cas: "10043-52-4",
    summary: "Flaked calcium chloride for moisture control, dust suppression, and industrial use.",
    packaging: ["25 kg Bag", "1000 kg Jumbo Bag", "Pallet 40 Bags"],
    applications: ["Desiccant use", "Dust control", "Brine preparation", "Concrete acceleration"],
    stockStatus: "In Stock",
    leadTime: "1-3 business days",
    warehouseLocation: "Rack P-08",
    image: "/images/product-packaging.png",
  },
  {
    slug: "ethanol-industrial-grade",
    name: "Ethanol Industrial Grade",
    category: "Solvents",
    cas: "64-17-5",
    concentration: "95%",
    summary: "Industrial ethanol supplied for cleaning, extraction, and production environments.",
    packaging: ["200 L Drum", "20 L Pail", "IBC Tank 1000 L"],
    applications: ["Cleaning solvent", "Extraction", "Manufacturing", "Formulation"],
    stockStatus: "Limited Stock",
    leadTime: "2-5 business days",
    warehouseLocation: "Flammables Zone F-03",
    image: "/images/delivery-loading.png",
  },
  {
    slug: "citric-acid-monohydrate",
    name: "Citric Acid Monohydrate",
    category: "Specialty Additives",
    cas: "5949-29-1",
    summary: "Bagged citric acid for cleaning, buffering, and industrial formulation support.",
    packaging: ["25 kg Bag", "Pallet 40 Bags"],
    applications: ["Chelating agent", "Cleaning products", "pH adjustment", "Formulation"],
    stockStatus: "In Stock",
    leadTime: "1-3 business days",
    warehouseLocation: "Rack A-06",
    image: "/images/product-packaging.png",
  },
  {
    slug: "hydrogen-peroxide-50",
    name: "Hydrogen Peroxide 50%",
    category: "Cleaning Chemicals",
    cas: "7722-84-1",
    concentration: "50%",
    summary: "Oxidizing chemical supplied in controlled packaging for industrial cleaning and processing.",
    packaging: ["30 kg Carboy", "200 L Drum", "IBC Tank 1000 L"],
    applications: ["Oxidation", "Cleaning", "Water treatment", "Pulp and textile processing"],
    stockStatus: "In Stock",
    leadTime: "1-3 business days",
    warehouseLocation: "Oxidizers Zone O-02",
    image: "/images/warehouse-inventory.png",
  },
];

export const industries = [
  "Manufacturing",
  "Water Treatment",
  "Food Processing",
  "Textiles",
  "Metal Finishing",
  "Cleaning & Sanitation",
];

export const reasons: Array<{ title: string; text: string; icon: LucideIcon }> = [
  {
    title: "Stocked Inventory",
    text: "Core chemicals are kept in warehouse stock with clear packaging and availability records.",
    icon: PackageCheck,
  },
  {
    title: "Delivery Coordination",
    text: "Bulk and packaged orders are prepared for practical dispatch windows and site requirements.",
    icon: Truck,
  },
  {
    title: "Documented Products",
    text: "Product information, safety documentation, and packaging details stay tied to each quote.",
    icon: ClipboardCheck,
  },
  {
    title: "Industrial Handling",
    text: "Storage zones, pallet handling, and loading operations are built for B2B chemical supply.",
    icon: ShieldCheck,
  },
];

export const stats = [
  { value: "75+", label: "Stocked SKUs" },
  { value: "5", label: "Core Categories" },
  { value: "1-3 days", label: "Typical Lead Time" },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Bulk inventory aisle",
    category: "Warehouse Photos",
    caption: "Racked drums, totes, and palletized stock organized by product category.",
    image: "/images/warehouse-inventory.png",
  },
  {
    title: "Packaged chemical stock",
    category: "Product Photos",
    caption: "Bagged and drummed materials ready for quotation and dispatch.",
    image: "/images/product-packaging.png",
  },
  {
    title: "Loading dock dispatch",
    category: "Delivery Photos",
    caption: "Forklift-supported loading for pallet, drum, and IBC deliveries.",
    image: "/images/delivery-loading.png",
  },
  {
    title: "Warehouse facility",
    category: "Warehouse Photos",
    caption: "Practical storage and loading infrastructure for B2B supply.",
    image: "/images/facility-exterior.png",
  },
  {
    title: "IBC tank availability",
    category: "Inventory Showcase",
    caption: "Intermediate bulk containers staged for production customers.",
    image: "/images/warehouse-hero.png",
  },
  {
    title: "Palletized product line",
    category: "Inventory Showcase",
    caption: "Multiple packaging formats kept visible for inventory control.",
    image: "/images/product-packaging.png",
  },
];

export const operations = [
  { title: "Procurement request", text: "Share product, packaging, and quantity requirements.", icon: ShipWheel },
  { title: "Inventory check", text: "We confirm stock status, lead time, and documentation.", icon: Warehouse },
  { title: "Quotation", text: "Receive a practical B2B quotation for bulk or packaged supply.", icon: BadgeCheck },
  { title: "Dispatch", text: "Delivery is coordinated from warehouse to your receiving site.", icon: Truck },
];

export const businessInfo = [
  { title: "Industrial chemical distribution", icon: FlaskConical },
  { title: "Bulk and packaged inventory", icon: Warehouse },
  { title: "Factory and plant supply", icon: Factory },
  { title: "Warehouse-based operations", icon: Building2 },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
