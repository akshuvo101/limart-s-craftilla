
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ShoppingCart,
  Menu,
  X,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { useCartStore } from "@/store/cart.store";
import CartDrawer from "../cart/CartDrawer";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const items = useCartStore((state) => state.items);

  // Total quantity of items in cart
  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* =========================================================
          NAVBAR
          IMPORTANT:
          Navbar stays in normal document flow.
          Hero will appear BELOW it.
      ========================================================= */}
      <nav
        className="
          sticky top-0 z-[1000]
          w-full
          border-b border-gray-200/70
          bg-white/90
          backdrop-blur-xl
          shadow-sm
        "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="
              h-[72px]
              flex
              items-center
              justify-between
            "
          >
            {/* =====================================================
                LOGO
            ===================================================== */}
            <Link
              href="/"
              className="
                group
                flex
                items-center
                gap-2.5
                sm:gap-3
                shrink-0
              "
              onClick={closeMobileMenu}
            >
              {/* Logo */}
              <div
                className="
                  relative
                  w-9 h-9
                  sm:w-10 sm:h-10

                  overflow-hidden
                  rounded-full

                  ring-2
                  ring-pink-100

                  shadow-sm

                  transition-all
                  duration-300

                  group-hover:ring-pink-300
                  group-hover:shadow-md
                  group-hover:scale-105

                  active:scale-95
                "
              >
                <Image
                  src="/logo-img.jpg"
                  alt="Limart's Craftilla Logo"
                  fill
                  priority
                  sizes="40px"
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Brand */}
              <div className="flex items-center gap-1.5 min-w-0">
                <span
                  className="
                    text-[15px]
                    sm:text-lg

                    font-extrabold
                    tracking-tight

                    bg-gradient-to-r
                    from-pink-600
                    via-rose-500
                    to-pink-500

                    bg-clip-text
                    text-transparent

                    transition-all
                    duration-300

                    truncate
                  "
                >
                  Limart's Craftilla
                </span>

                <Sparkles
                  size={14}
                  className="
                    hidden
                    sm:block

                    shrink-0

                    text-pink-400
                    opacity-70

                    transition-all
                    duration-300

                    group-hover:rotate-12
                    group-hover:scale-110
                  "
                />
              </div>
            </Link>

            {/* =====================================================
                DESKTOP MENU
                EXACTLY SAME AS ORIGINAL
            ===================================================== */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <Link
                href="/"
                className="hover:text-pink-500 transition"
              >
                Home
              </Link>

              <Link
                href="/products"
                className="hover:text-pink-500 transition"
              >
                Products
              </Link>

              <Link
                href="/about"
                className="hover:text-pink-500 transition"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="hover:text-pink-500 transition"
              >
                Contact
              </Link>
            </div>

            {/* =====================================================
                RIGHT SIDE
            ===================================================== */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* ===================================================
                  CART
                  Desktop appearance stays the same.
                  Mobile/tablet gets improved interaction.
              =================================================== */}
              <button
                type="button"
                aria-label="Open shopping cart"
                onClick={() => {
                  setCartOpen((prev) => !prev);
                  setMenuOpen(false);
                }}
                className="
                  relative

                  flex
                  items-center
                  justify-center

                  w-10 h-10
                  sm:w-11 sm:h-11

                  rounded-full

                  border
                  border-gray-200

                  bg-white
                  text-gray-700

                  shadow-sm

                  transition-all
                  duration-300

                  hover:border-pink-200
                  hover:bg-gray-100
                  hover:text-pink-600
                  hover:shadow-md

                  active:scale-90

                  touch-manipulation
                "
              >
                <ShoppingCart
                  className="
                    w-[18px]
                    h-[18px]
                    sm:w-5
                    sm:h-5

                    transition-transform
                    duration-300

                    active:scale-90
                  "
                  strokeWidth={1.8}
                />

                {/* Cart Badge */}
                {totalItems > 0 && (
                  <span
                    className="
                      absolute

                      -top-1
                      -right-1

                      min-w-[19px]
                      sm:min-w-[20px]

                      h-[19px]
                      sm:h-5

                      px-1

                      flex
                      items-center
                      justify-center

                      rounded-full

                      bg-gradient-to-r
                      from-pink-500
                      to-rose-500

                      text-white

                      text-[9px]
                      sm:text-[10px]

                      font-bold
                      leading-none

                      border-2
                      border-white

                      shadow-sm

                      transition-transform
                      duration-200
                    "
                  >
                    {totalItems > 99 ? "99+" : totalItems}
                  </span>
                )}
              </button>

              {/* ===================================================
                  MOBILE + TABLET MENU BUTTON

                  md:hidden means desktop is untouched.
              =================================================== */}
              <button
                type="button"
                aria-label={
                  menuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={menuOpen}
                onClick={() => {
                  setMenuOpen((prev) => !prev);
                  setCartOpen(false);
                }}
                className="
                  md:hidden

                  flex
                  items-center
                  justify-center

                  w-10 h-10
                  sm:w-11 sm:h-11

                  rounded-full

                  border
                  border-gray-200

                  bg-white

                  text-gray-700

                  shadow-sm

                  transition-all
                  duration-300

                  hover:border-pink-200
                  hover:bg-pink-50
                  hover:text-pink-600
                  hover:shadow-md

                  active:scale-90

                  touch-manipulation
                "
              >
                <span
                  className="
                    flex
                    items-center
                    justify-center
                    transition-transform
                    duration-300
                  "
                >
                  {menuOpen ? (
                    <X
                      size={20}
                      strokeWidth={2}
                    />
                  ) : (
                    <Menu
                      size={20}
                      strokeWidth={2}
                    />
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================
            MOBILE + TABLET FLOATING MENU

            IMPORTANT:
            This remains INSIDE navbar flow.
            It will push content down instead of covering Hero.
        ========================================================= */}
        <div
          className={`
            md:hidden

            overflow-hidden

            transition-all
            duration-300
            ease-out

            ${
              menuOpen
                ? "max-h-[420px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              px-3
              sm:px-5

              pb-3
              sm:pb-4
            "
          >
            <div
              className="
                relative
                overflow-hidden

                rounded-2xl
                sm:rounded-3xl

                border
                border-white/80

                bg-white/75

                backdrop-blur-2xl

                shadow-[0_12px_35px_rgba(0,0,0,0.10)]

                ring-1
                ring-black/[0.02]

                p-2
                sm:p-2.5
              "
            >
              {/* Subtle decorative glow */}
              <div
                className="
                  pointer-events-none

                  absolute
                  -top-16
                  -right-12

                  w-32
                  h-32

                  rounded-full

                  bg-pink-200/25

                  blur-3xl
                "
              />

              <div className="relative space-y-1">
                {/* =================================================
                    HOME
                ================================================= */}
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className="
                    group

                    flex
                    items-center
                    justify-between

                    min-h-[50px]
                    sm:min-h-[54px]

                    px-4
                    sm:px-5

                    rounded-xl
                    sm:rounded-2xl

                    text-sm
                    sm:text-[15px]

                    font-semibold

                    text-gray-700

                    transition-all
                    duration-200

                    hover:bg-pink-50
                    hover:text-pink-600

                    active:scale-[0.98]
                    active:bg-pink-100

                    touch-manipulation
                  "
                >
                  <span>Home</span>

                  <span
                    className="
                      flex
                      items-center
                      justify-center

                      w-7
                      h-7

                      rounded-full

                      bg-gray-50

                      text-gray-400

                      transition-all
                      duration-200

                      group-hover:bg-white
                      group-hover:text-pink-500
                      group-hover:translate-x-0.5
                    "
                  >
                    <ChevronRight size={15} />
                  </span>
                </Link>

                {/* =================================================
                    PRODUCTS
                ================================================= */}
                <Link
                  href="/products"
                  onClick={closeMobileMenu}
                  className="
                    group

                    flex
                    items-center
                    justify-between

                    min-h-[50px]
                    sm:min-h-[54px]

                    px-4
                    sm:px-5

                    rounded-xl
                    sm:rounded-2xl

                    text-sm
                    sm:text-[15px]

                    font-semibold

                    text-gray-700

                    transition-all
                    duration-200

                    hover:bg-pink-50
                    hover:text-pink-600

                    active:scale-[0.98]
                    active:bg-pink-100

                    touch-manipulation
                  "
                >
                  <span>Products</span>

                  <span
                    className="
                      flex
                      items-center
                      justify-center

                      w-7
                      h-7

                      rounded-full

                      bg-gray-50

                      text-gray-400

                      transition-all
                      duration-200

                      group-hover:bg-white
                      group-hover:text-pink-500
                      group-hover:translate-x-0.5
                    "
                  >
                    <ChevronRight size={15} />
                  </span>
                </Link>

                {/* =================================================
                    ABOUT
                ================================================= */}
                <Link
                  href="/about"
                  onClick={closeMobileMenu}
                  className="
                    group

                    flex
                    items-center
                    justify-between

                    min-h-[50px]
                    sm:min-h-[54px]

                    px-4
                    sm:px-5

                    rounded-xl
                    sm:rounded-2xl

                    text-sm
                    sm:text-[15px]

                    font-semibold

                    text-gray-700

                    transition-all
                    duration-200

                    hover:bg-pink-50
                    hover:text-pink-600

                    active:scale-[0.98]
                    active:bg-pink-100

                    touch-manipulation
                  "
                >
                  <span>About</span>

                  <span
                    className="
                      flex
                      items-center
                      justify-center

                      w-7
                      h-7

                      rounded-full

                      bg-gray-50

                      text-gray-400

                      transition-all
                      duration-200

                      group-hover:bg-white
                      group-hover:text-pink-500
                      group-hover:translate-x-0.5
                    "
                  >
                    <ChevronRight size={15} />
                  </span>
                </Link>

                {/* =================================================
                    CONTACT
                ================================================= */}
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="
                    group

                    flex
                    items-center
                    justify-between

                    min-h-[50px]
                    sm:min-h-[54px]

                    px-4
                    sm:px-5

                    rounded-xl
                    sm:rounded-2xl

                    text-sm
                    sm:text-[15px]

                    font-semibold

                    text-gray-700

                    transition-all
                    duration-200

                    hover:bg-pink-50
                    hover:text-pink-600

                    active:scale-[0.98]
                    active:bg-pink-100

                    touch-manipulation
                  "
                >
                  <span>Contact</span>

                  <span
                    className="
                      flex
                      items-center
                      justify-center

                      w-7
                      h-7

                      rounded-full

                      bg-gray-50

                      text-gray-400

                      transition-all
                      duration-200

                      group-hover:bg-white
                      group-hover:text-pink-500
                      group-hover:translate-x-0.5
                    "
                  >
                    <ChevronRight size={15} />
                  </span>
                </Link>
              </div>

              {/* =================================================
                  MOBILE FOOTER
              ================================================= */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-1.5

                  pt-2.5
                  sm:pt-3
                  pb-1

                  text-[10px]
                  sm:text-[11px]

                  font-medium
                  text-gray-400
                "
              >
                <Sparkles
                  size={10}
                  className="text-pink-400"
                />

                <span>Handmade with love</span>

                <Sparkles
                  size={10}
                  className="text-pink-400"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* =========================================================
          CART DRAWER
      ========================================================= */}
      <CartDrawer
        open={cartOpen}
        setOpen={setCartOpen}
      />
    </>
  );
};

export default Navbar;
