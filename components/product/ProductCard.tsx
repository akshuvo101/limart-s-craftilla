


"use client";

import Link from "next/link";
import { Product } from "@/types/product.types";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cart.store";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="group border rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition duration-300">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-300"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">

        {/* Name */}
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {product.name}
        </h3>

        {/* Price */}
        <p className="text-pink-500 font-bold text-lg">
          ৳ {product.price}
        </p>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2">

          {/* View Details */}
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-pink-500 transition"
          >
            Details <ArrowRight size={16} />
          </Link>

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 bg-pink-500 text-white px-3 py-1.5 rounded-full text-sm hover:bg-pink-600 transition"
          >
            <ShoppingCart size={16} />
            Add
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;