"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product.types";
import {
  ArrowUpRight,
  Eye,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { useCartStore } from "@/store/cart.store";

type Props = {
  product: Product;
  priority?: boolean;
};

const ProductCard = ({ product, priority = false }: Props) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-pink-100/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-xl hover:shadow-pink-200/40">
      {/* Product Image */}
      <div className="relative h-56 overflow-hidden bg-pink-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Handmade Badge */}
        <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-pink-600 shadow-md backdrop-blur-sm">
          <Sparkles size={12} />
          Handmade
        </div>

        {/* Quick View */}
        <Link
          href={`/products/${product.slug}`}
          className="absolute bottom-3 left-1/2 flex min-h-11 -translate-x-1/2 translate-y-3 items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-4 py-2 text-xs font-semibold text-gray-800 opacity-0 shadow-lg transition-all duration-300 hover:bg-pink-500 hover:text-white group-hover:translate-y-0 group-hover:opacity-100"
        >
          <Eye size={14} />
          Quick View
        </Link>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-3 flex items-start justify-between gap-2">
          {/* Product Info */}
          <div className="min-w-0">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-pink-400">
              Handmade Item
            </p>

            <h3 className="truncate text-base font-bold text-gray-900 transition-colors duration-300 group-hover:text-pink-600">
              {product.name}
            </h3>
          </div>

          {/* Details Button */}
          <Link
            href={`/products/${product.slug}`}
            aria-label={`View ${product.name}`}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-50 text-pink-500 transition-all duration-300 hover:bg-pink-500 hover:text-white"
          >
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between gap-2 border-t border-gray-100 pt-3">
          {/* Price */}
          <div>
            <p className="mb-0.5 text-[10px] text-gray-400">
              Price
            </p>

            <p className="text-lg font-extrabold text-gray-900">
              <span className="mr-1 text-xs font-medium text-pink-500">
                ৳
              </span>
              {product.price}
            </p>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(product)}
            className="flex min-h-11 items-center gap-1.5 rounded-full bg-gray-900 px-3 py-2 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink-500 active:scale-95"
          >
            <ShoppingBag size={15} />
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;