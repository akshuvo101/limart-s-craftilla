"use client";

import { Product } from "@/types/product.types";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import { useCartStore } from "@/store/cart.store";

type Props = {
  product: Product;
  relatedProducts?: Product[];
};

const ProductDetails = ({
  product,
  relatedProducts = [],
}: Props) => {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [added, setAdded] = useState(false);

  const addToCart = useCartStore((state) => state.addToCart);

  const images =
    product.images?.length > 0
      ? product.images
      : [product.image];


  const handleAddToCart = () => {
    addToCart(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-white">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">

        {/* ================= BREADCRUMB ================= */}
        <Link
          href="/products"
          className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-pink-500"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition group-hover:-translate-x-1">
            <ArrowLeft size={16} />
          </span>

          Back to Collection
        </Link>

        {/* ================= MAIN PRODUCT ================= */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">

          {/* ===== IMAGE GALLERY ===== */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex flex-col gap-4 sm:flex-row">

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="order-2 flex gap-3 overflow-x-auto pb-1 sm:order-1 sm:w-20 sm:flex-col">
                  {images.map((img, index) => (
                    <button
                      key={`${img}-${index}`}
                      type="button"
                      aria-label={`View ${product.name} image ${index + 1}`}
                      onClick={() => setSelectedImage(img)}
                      className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-300 ${selectedImage === img
                        ? "border-pink-500 shadow-md shadow-pink-200"
                        : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} ${index + 1}`}
                        fill
                        sizes="64px"
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="group relative flex-1 overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-xl shadow-pink-100/40"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={selectedImage}
                    alt={product.name}
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Handmade Badge */}
                <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-pink-600 shadow-lg backdrop-blur-md">
                  <Sparkles size={14} />
                  Handmade with Love
                </div>
              </motion.div>
            </div>
          </div>

          {/* ===== PRODUCT INFO ===== */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-6"
          >
            {/* Category */}
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-pink-500">
              Handmade Collection
            </p>

            {/* Title */}
            <div>
              <h1 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
                {product.name}
              </h1>

              <div className="mt-4 flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      fill="currentColor"
                    />
                  ))}
                </div>

                <span className="text-sm font-medium text-gray-500">
                  4.9 · Loved by customers
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-end gap-2">
              <span className="text-3xl font-black text-gray-900">
                <span className="mr-1 text-xl font-semibold text-pink-500">
                  ৳
                </span>
                {product.price}
              </span>
            </div>

            {/* Stock */}
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-100 bg-pink-50 px-4 py-2 text-sm font-semibold text-pink-600">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-pink-500" />
              </span>

              In stock · Ready to order
            </div>

            {/* Description */}
            <div className="border-y border-gray-100 py-6">
              <p className="leading-7 text-gray-600">
                {product.description ||
                  "A carefully handcrafted product made with love, attention to detail, and premium materials."}
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <Feature
                icon={<Sparkles size={18} />}
                title="Handmade"
                text="Made with care"
              />

              <Feature
                icon={<Truck size={18} />}
                title="Delivery"
                text="Fast shipping"
              />

              <Feature
                icon={<ShieldCheck size={18} />}
                title="Trusted"
                text="Secure order"
              />

              <Feature
                icon={<PackageCheck size={18} />}
                title="Custom"
                text="Order available"
              />
            </div>

            {/* CTA */}
            <div className="space-y-3 border-t border-gray-100 pt-6">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  onClick={handleAddToCart}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gray-900 py-3.5 text-sm font-bold text-white shadow-lg shadow-gray-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink-500 hover:shadow-pink-500/25 active:scale-[0.98]"
                >
                  {added ? (
                    <>
                      <Check size={18} />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={18} />
                      Add to Cart
                    </>
                  )}
                </button>

                <Link
                  href="/checkout"
                  className="flex items-center justify-center gap-2 rounded-xl bg-pink-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink-600 active:scale-[0.98]"
                >
                  Buy Now
                  <ChevronRight size={17} />
                </Link>
              </div>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/8801923184970?text=${encodeURIComponent(
                  `Hello! I want to order ${product.name}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-green-200 bg-green-50 py-3 text-sm font-bold text-green-600 transition hover:bg-green-500 hover:text-white"
              >
                <MessageCircle size={18} />
                Order via WhatsApp
              </a>
            </div>

            {/* Trust Message */}
            <div className="flex items-center justify-center gap-2 pt-1 text-xs text-gray-400">
              <ShieldCheck size={15} />
              Secure order • Quality checked with care
            </div>
          </motion.div>
        </div>

        {/* ================= REVIEWS ================= */}
        <section className="mt-20 border-t border-pink-100 pt-12">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-pink-500">
                Customer Love
              </p>

              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                What customers are saying
              </h2>
            </div>

            <div className="hidden items-center gap-1 sm:flex">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={17}
                  className="text-yellow-400"
                  fill="currentColor"
                />
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                name: "Happy Customer",
                text: "Amazing quality! The product looks even better in person. Highly recommended.",
              },
              {
                name: "Verified Buyer",
                text: "Beautiful handmade work and great attention to detail. I absolutely love it!",
              },
              {
                name: "Satisfied Customer",
                text: "Excellent quality and lovely packaging. Definitely coming back for more.",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="rounded-2xl border border-pink-100 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-100/50"
              >
                <div className="mb-4 flex text-yellow-400">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={15}
                      fill="currentColor"
                    />
                  ))}
                </div>

                <p className="text-sm leading-6 text-gray-600">
                  "{review.text}"
                </p>

                <div className="mt-5 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 text-xs font-bold text-pink-600">
                    {review.name.charAt(0)}
                  </div>

                  <p className="text-sm font-semibold text-gray-800">
                    {review.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= RELATED PRODUCTS ================= */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 border-t border-pink-100 pt-12">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-pink-500">
                  Explore More
                </p>

                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  You may also like
                </h2>
              </div>

              <Link
                href="/products"
                className="hidden items-center gap-1 text-sm font-semibold text-pink-500 transition hover:text-pink-600 sm:flex"
              >
                View all
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.slice(0, 3).map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                />
              ))}
            </div>

            <Link
              href="/products"
              className="mt-8 flex items-center justify-center gap-2 rounded-xl border border-pink-200 py-3 text-sm font-bold text-pink-500 transition hover:bg-pink-500 hover:text-white sm:hidden"
            >
              View All Products
              <ArrowRight size={16} />
            </Link>
          </section>
        )}
      </div>
    </div>
  );
};

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

const Feature = ({
  icon,
  title,
  text,
}: FeatureProps) => {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3 transition hover:border-pink-100 hover:shadow-sm">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink-50 text-pink-500">
        {icon}
      </div>

      <div>
        <p className="text-sm font-bold text-gray-800">
          {title}
        </p>

        <p className="text-xs text-gray-400">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;