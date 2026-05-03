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
  Star,
  Truck,
  Wallet,
} from "lucide-react";
import Link from "next/link";
export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="relative h-[70vh] w-full rounded-2xl overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519710164239-da123dc03ef4')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            𝚃𝚞𝚛𝚗𝚒𝚗𝚐 𝙼𝚘𝚖𝚎𝚗𝚝𝚜 𝙸𝚗𝚝𝚘 𝙼𝚎𝚖𝚘𝚛𝚒𝚎𝚜 ❤️
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl">
            𝐮𝐧𝐢𝐪𝐮𝐞, 𝐚𝐞𝐬𝐭𝐡𝐞𝐭𝐡𝐞𝐭𝐢𝐜 & 𝐚𝐟𝐟𝐨𝐫𝐝𝐚𝐛𝐥𝐞 𝐡𝐚𝐧𝐝 𝐜𝐫𝐚𝐟𝐭𝐞𝐝 𝐚𝐫𝐭𝐢𝐟𝐚𝐜𝐭𝐬 𝐟𝐨𝐫 𝐠𝐢𝐟𝐭𝐢𝐧𝐠
            & 𝐝𝐞𝐜𝐨𝐫𝐚𝐭𝐢𝐨𝐧
          </p>

          {/* CTA */}
          <Link
            href="/products"
            className="mt-6 inline-flex items-center gap-2 bg-pink-500 px-6 py-3 rounded-full text-white font-medium hover:bg-pink-600 transition shadow-md"
          >
            Shop Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      {/* Featured */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {/* View More Button */}
        <div className="flex justify-center mt-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition"
          >
            View More <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      {/* Why */}
      <section className="relative py-20 rounded-2xl overflow-hidden">
        {/* 🌸 Background Pattern */}
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1681400765806-e5319b334690?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0')",
          }}
        />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose Us 💖
          </h2>

          <p className="text-pink-500 mt-2 max-w-xl mx-auto">
            We create meaningful handcrafted products that bring beauty and
            happiness to your life.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            {/* 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="flex justify-center mb-4 text-pink-500">
                <Heart size={32} />
              </div>
              <h3 className="font-semibold text-lg">Handmade with Love</h3>
              <p className="text-gray-500 text-sm mt-2">
                Carefully crafted with passion and attention.
              </p>
            </div>

            {/* 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="flex justify-center mb-4 text-yellow-500">
                <Sparkles size={32} />
              </div>
              <h3 className="font-semibold text-lg">Unique Design</h3>
              <p className="text-gray-500 text-sm mt-2">
                Every item is special & one of a kind.
              </p>
            </div>

            {/* 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="flex justify-center mb-4 text-green-500">
                <BadgeCheck size={32} />
              </div>
              <h3 className="font-semibold text-lg">Trusted Quality</h3>
              <p className="text-gray-500 text-sm mt-2">
                High-quality materials & long-lasting finish.
              </p>
            </div>

            {/* 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="flex justify-center mb-4 text-blue-500">
                <Truck size={32} />
              </div>
              <h3 className="font-semibold text-lg">Fast Delivery</h3>
              <p className="text-gray-500 text-sm mt-2">
                Quick & reliable shipping across the country.
              </p>
            </div>

            {/* 5 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="flex justify-center mb-4 text-purple-500">
                <Gift size={32} />
              </div>
              <h3 className="font-semibold text-lg">Custom Orders</h3>
              <p className="text-gray-500 text-sm mt-2">
                Personalized designs made just for you.
              </p>
            </div>

            {/* 6 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="flex justify-center mb-4 text-orange-500">
                <Wallet size={32} />
              </div>
              <h3 className="font-semibold text-lg">Affordable Pricing</h3>
              <p className="text-gray-500 text-sm mt-2">
                Premium quality at budget-friendly prices.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="relative py-24 rounded-2xl overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1681400765806-e5319b334690?q=80&w=880&auto=format&fit=crop')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-fuchsia-800/40 backdrop-blur-[2px]" />

        {/* Glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-fuchsia-300/40 blur-3xl rounded-full" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4 text-white">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Turn Your Moments Into <br className="hidden md:block" />
            Beautiful Memories ✨
          </h2>

          {/* Subtext */}
          <p className="mt-5 text-lg text-gray-100 leading-relaxed">
            Handcrafted pieces designed with love — perfect for gifting,
            decoration, and making memories that last forever 💖
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-4 mt-10">
            {/* WhatsApp */}
            <a
              href="https://wa.me/8801308699488"
              target="_blank"
              className="inline-flex items-center gap-3 bg-green-500 px-8 py-4 rounded-full text-white text-lg font-semibold hover:bg-green-600 transition shadow-xl hover:scale-105"
            >
              <MessageCircle size={22} />
              Order on WhatsApp
            </a>

            {/* Email */}
            <a
              href="mailto:your@email.com"
              className="inline-flex items-center gap-2 text-sm text-gray-200 hover:text-white transition"
            >
              <Mail size={16} />
              Contact via Email
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-yellow-300">
            <span className="bg-white/10 px-3 py-1 rounded-full">
              ⚡ Fast Response
            </span>
            <span className="bg-white/10 px-3 py-1 rounded-full">
              🎁 Custom Orders
            </span>
            <span className="bg-white/10 px-3 py-1 rounded-full">
              ✔ Trusted Quality
            </span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-pink-50 rounded-2xl">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Customers Say 💬
          </h2>

          <p className="text-gray-500 mt-2 mb-10">
            Real feedback from happy customers
          </p>

          <TestimonialSlider />
        </div>
      </section>
    </div>
  );
}
