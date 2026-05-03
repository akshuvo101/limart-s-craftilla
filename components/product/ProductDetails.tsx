"use client";

import { Product } from "@/types/product.types";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Sparkles,
  Star,
  ShoppingCart,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import { useCartStore } from "@/store/cart.store";

type Props = {
  product: Product;
  relatedProducts?: Product[];
};

const ProductDetails = ({ product, relatedProducts = [] }: Props) => {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [added, setAdded] = useState(false);

  const addToCart = useCartStore((state) => state.addToCart);

  // fallback images
  const images = product.images?.length ? product.images : [product.image];

  // 👉 ADD TO CART HANDLER
  const handleAddToCart = () => {
    addToCart(product);

    // feedback UI
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="bg-gradient-to-b from-pink-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-16">

        {/* BACK */}
        <Link
          href="/products"
          className="text-sm text-gray-500 hover:text-pink-500 transition"
        >
          ← Back to Products
        </Link>

        {/* ================= MAIN ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* ===== IMAGE GALLERY ===== */}
          <div className="space-y-4">

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
            >
              <img
                src={selectedImage}
                className="w-full h-[400px] md:h-[500px] object-cover transition duration-500 group-hover:scale-110"
              />
            </motion.div>

            <div className="flex gap-3">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                    selectedImage === img
                      ? "border-pink-500"
                      : "border-transparent"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ===== INFO ===== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-5"
          >
            <h1 className="text-3xl md:text-4xl font-bold">
              {product.name}
            </h1>

            <p className="text-2xl font-bold text-pink-500">
              ৳ {product.price}
            </p>

            {/* STOCK */}
            <p className="text-sm text-red-500 font-medium">
              🔥 Only 3 left in stock
            </p>

            <p className="text-gray-600">
              {product.description ||
                "Premium handcrafted product made with love."}
            </p>

            {/* HIGHLIGHTS */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <Sparkles size={16} /> Handmade
              </div>
              <div className="flex items-center gap-2">
                <Truck size={16} /> Fast Delivery
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} /> Trusted
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={16} /> Custom Order
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">

              {/* 🛒 ADD TO CART */}
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-3 rounded-full hover:bg-gray-800 transition shadow-md"
              >
                <ShoppingCart size={18} />
                Add to Cart
              </button>

              {/* ⚡ BUY NOW */}
              <Link
                href="/checkout"
                className="flex-1 text-center bg-pink-500 text-white py-3 rounded-full hover:bg-pink-600 transition shadow-md"
              >
                Buy Now
              </Link>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/8801308699488?text=I want to order ${product.name}`}
                target="_blank"
                className="flex-1 text-center bg-green-500 text-white py-3 rounded-full hover:bg-green-600 transition shadow-md"
              >
                WhatsApp
              </a>

            </div>

            {/* ✅ FEEDBACK */}
            {added && (
              <p className="text-green-600 text-sm font-medium animate-pulse">
                ✅ Added to cart successfully!
              </p>
            )}
          </motion.div>
        </div>

        {/* ================= REVIEWS ================= */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Customer Reviews ⭐</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-sm text-gray-600">
                  "Amazing quality! Totally worth it. Highly recommended."
                </p>

                <p className="text-xs mt-3 text-gray-400">
                  — Happy Customer
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= RELATED ================= */}
        {relatedProducts.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">You may also like 🛍️</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};

export default ProductDetails;