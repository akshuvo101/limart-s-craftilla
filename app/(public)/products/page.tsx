import ProductList from "@/components/product/ProductList";
import { getProducts } from "@/services/product.services";
import {
  Package,
  Sparkles,
  Heart,
  Search,
} from "lucide-react";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-pink-50 via-white to-white">

      {/* ================= HERO ================= */}
      <section className="relative border-b border-pink-100 bg-gradient-to-br from-pink-100 via-pink-50 to-white">
        {/* Decorative Blur */}
        <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-300/20 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/2 rounded-full bg-rose-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center sm:py-20">

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-pink-500 shadow-sm backdrop-blur-sm">
            <Sparkles size={15} />
            Crafted with Love
          </div>

          {/* Title */}
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Our Handmade{" "}
            <span className="relative text-pink-500">
              Collection
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-pink-300/70" />
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
            Discover beautiful handcrafted products, thoughtfully made
            with love, creativity, and attention to every detail.
          </p>

          {/* Features */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-gray-600">
            <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
              <Sparkles size={15} className="text-pink-500" />
              Handmade
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
              <Heart size={15} className="text-pink-500" />
              Made with Love
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
              <Package size={15} className="text-pink-500" />
              Quality Checked
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">

        {/* Section Header */}
        <div className="mb-8 flex flex-col gap-4 border-b border-gray-100 pb-6 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-pink-500">
              Explore Products
            </p>

            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Find something you’ll love
            </h2>
          </div>

          {/* Product Count */}
          <div className="flex items-center gap-2 self-start rounded-full border border-pink-100 bg-white px-4 py-2 text-sm text-gray-500 shadow-sm sm:self-auto">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-100 text-xs font-bold text-pink-600">
              {products.length}
            </span>

            Products found
          </div>
        </div>

        {/* Product List */}
        <ProductList products={products} />

        {/* Bottom Message */}
        {products.length > 0 && (
          <div className="mt-14 flex flex-col items-center justify-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-500">
              <Heart size={20} fill="currentColor" />
            </div>

            <h3 className="text-lg font-bold text-gray-800">
              More beautiful creations are coming
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
              Follow our collection for new handmade products and unique
              designs created especially for you.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}