"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCartStore } from "@/store/cart.store";
import CartDrawer from "../cart/CartDrawer";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const items = useCartStore((state) => state.items);

  // 👉 total items count (better UX)
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className="w-full border-b bg-white/90 backdrop-blur sticky top-0 z-[1000] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-img.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-lg font-bold text-pink-600">
              Limart's Craftilla
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="hover:text-pink-500 transition">
              Home
            </Link>
            <Link href="/products" className="hover:text-pink-500 transition">
              Products
            </Link>
            <Link href="/about" className="hover:text-pink-500 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-pink-500 transition">
              Contact
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* 🛒 Cart */}
            <button
              onClick={() => setCartOpen((prev) => !prev)} // ✅ toggle fix
              className="relative p-2 rounded-full hover:bg-gray-100 transition"
            >
              <ShoppingCart className="w-5 h-5" />

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-2 py-[2px] rounded-full">
                  {totalItems}
                </span>
              )}
            </button>

            {/* 📱 Mobile Menu */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-4 flex flex-col gap-3 border-t bg-white">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-500"
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-500"
            >
              Products
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-500"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-500"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* 🧾 Cart Drawer */}
      <CartDrawer open={cartOpen} setOpen={setCartOpen} />
    </>
  );
};

export default Navbar;