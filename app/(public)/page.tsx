import Hero from "@/components/hero/Hero";
import ProductCard from "@/components/product/ProductCard";
import TestimonialSlider from "@/components/testimonial/TestimonialSlider";
import { getProducts } from "@/services/product.services";
import {
ArrowRight,
BadgeCheck,
Gift,
Heart,
Mail,
MessageCircle,
Sparkles,
Truck,
Wallet,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default async function HomePage() {
const products = await getProducts();

return ( <main className="min-h-screen">
{/* ================= HERO ================= */} <Hero />

  {/* ================= FEATURED PRODUCTS ================= */}
  <section className="relative overflow-hidden py-16 sm:py-20">
    {/* Decorative Background */}
    <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-200/20 blur-3xl" />

    <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 rounded-full bg-rose-200/20 blur-3xl" />

    {/* Professional Container */}
    <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-pink-500">
            <Sparkles size={14} />
            Handpicked for You
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Featured{" "}
            <span className="text-pink-500">Products</span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            Explore our most loved handmade creations, carefully crafted
            with creativity, passion, and attention to every detail.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start rounded-full border border-pink-100 bg-white px-4 py-2 text-sm text-gray-500 shadow-sm sm:self-auto">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-100 text-xs font-bold text-pink-600">
            {Math.min(products.length, 6)}
          </span>

          Featured items
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, 6).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            priority={product.id === products[0]?.id}
          />
        ))}
      </div>

      {/* View All */}
      <div className="mt-12 flex flex-col items-center justify-center gap-4">
        <p className="text-sm text-gray-500">
          Discover even more unique handmade creations
        </p>

        <Link
          href="/products"
          className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-gray-900/10 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-500 hover:shadow-pink-500/25 active:scale-95"
        >
          Explore All Products

          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  </section>

  {/* ================= WHY CHOOSE US ================= */}
  <section className="relative overflow-hidden py-16 sm:py-20">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <Image
        src="/image-3.jpg"
        alt=""
        fill
        sizes="100vw"
        quality={45}
        className="object-cover object-center"
      />
    </div>

    {/* Soft Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-pink-50/80 via-white/90 to-pink-50/70" />

    {/* Professional Container */}
    <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-pink-500 shadow-sm">
          <Heart size={14} />
          Why Choose Us
        </div>

        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Made with{" "}
          <span className="text-pink-500">Care & Love</span>
        </h2>

        <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
          We create meaningful handcrafted products that bring beauty,
          happiness, and a personal touch to every moment.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <WhyCard
          icon={<Heart size={25} />}
          title="Handmade with Love"
          description="Carefully crafted with passion and attention to every detail."
        />

        <WhyCard
          icon={<Sparkles size={25} />}
          title="Unique Design"
          description="Every item is thoughtfully created to feel special and personal."
        />

        <WhyCard
          icon={<BadgeCheck size={25} />}
          title="Trusted Quality"
          description="High-quality materials and a finish made to last."
        />

        <WhyCard
          icon={<Truck size={25} />}
          title="Fast Delivery"
          description="Quick and reliable delivery for a smooth shopping experience."
        />

        <WhyCard
          icon={<Gift size={25} />}
          title="Custom Orders"
          description="Personalized designs created especially for you."
        />

        <WhyCard
          icon={<Wallet size={25} />}
          title="Affordable Pricing"
          description="Beautiful handmade quality at budget-friendly prices."
        />
      </div>
    </div>
  </section>

  {/* ================= CTA ================= */}
  <section className="relative overflow-hidden py-20 sm:py-24">
    {/* Background Image */}
    <div className="absolute inset-0 opacity-30">
      <Image
        src="/image-3.jpg"
        alt=""
        fill
        sizes="100vw"
        quality={45}
        className="object-cover object-center"
      />
    </div>

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/90 via-pink-700/90 to-rose-600/90" />

    {/* Decorative Glow */}
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-300/20 blur-3xl" />

    {/* Professional Container */}
    <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center text-white">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] backdrop-blur-sm">
          <Sparkles size={14} />
          Made Just for You
        </div>

        <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Turn Your Moments Into
          <span className="block text-pink-200">
            Beautiful Memories
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-pink-50/90 sm:text-lg">
          Handcrafted pieces designed with love — perfect for gifting,
          decoration, and making memories that last forever.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="https://wa.me/8801923184970"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-pink-600 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-green-500 hover:text-white sm:px-8 sm:py-4 sm:text-base"
          >
            <MessageCircle size={20} />
            Order on WhatsApp

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <a
            href="mailto:your@email.com"
            className="inline-flex items-center gap-2 text-sm text-pink-100/80 transition hover:text-white"
          >
            <Mail size={16} />
            Contact via Email
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-7 flex flex-wrap justify-center gap-2 sm:gap-3">
          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-white/90 backdrop-blur-sm">
            ⚡ Fast Response
          </span>

          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-white/90 backdrop-blur-sm">
            🎁 Custom Orders
          </span>

          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-white/90 backdrop-blur-sm">
            ✓ Trusted Quality
          </span>
        </div>
      </div>
    </div>
  </section>

  {/* ================= TESTIMONIALS ================= */}
  <section className="bg-pink-50 py-16 sm:py-20">
    {/* Professional Container */}
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-pink-500 shadow-sm">
          <Heart size={14} />
          Customer Love
        </div>

        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          What Our Customers Say
        </h2>

        <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
          Real feedback from customers who love our handmade creations.
        </p>
      </div>

      <TestimonialSlider />
    </div>
  </section>
</main>

);
}

type WhyCardProps = {
icon: React.ReactNode;
title: string;
description: string;
};

const WhyCard = ({
icon,
title,
description,
}: WhyCardProps) => {
return ( <div className="group rounded-2xl border border-pink-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-xl hover:shadow-pink-100/50"> <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-50 text-pink-500 transition duration-300 group-hover:scale-110 group-hover:bg-pink-500 group-hover:text-white">
{icon} </div>
  <h3 className="text-lg font-bold text-gray-900">
    {title}
  </h3>

  <p className="mt-2 text-sm leading-6 text-gray-500">
    {description}
  </p>
</div>

);
};
