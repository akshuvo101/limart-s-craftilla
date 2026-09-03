import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-gray-950 text-gray-300">

      {/* TOP */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-14 text-center sm:grid-cols-2 md:grid-cols-4 md:px-6 md:text-left">

        {/* Brand + Logo */}
        <div className="flex flex-col items-center space-y-4 md:items-start">

          <div className="rounded-full bg-white/5 p-1 shadow-lg ring-1 ring-white/10">
            <Image
              src="/logo-img.jpg"
              alt="Limart's Craftilla"
              width={120}
              height={40}
              className="w-auto rounded-full"
            />
          </div>

          <p className="max-w-xs text-sm leading-6 text-gray-400">
            Handmade crafts created with love 💖. Perfect for gifting and decoration.
          </p>

          {/* Trust badges */}
          <div className="flex gap-2 pt-1">
            <span className="rounded-full border border-pink-400/20 bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-300 transition-all duration-300 hover:border-pink-400/40 hover:bg-pink-500/20">
              Handmade
            </span>

            <span className="rounded-full border border-green-400/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-300 transition-all duration-300 hover:border-green-400/40 hover:bg-green-500/20">
              Trusted
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-sm font-semibold tracking-wide text-white">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/"
                className="inline-block text-gray-400 transition-all duration-200 hover:translate-x-1 hover:text-pink-400"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                className="inline-block text-gray-400 transition-all duration-200 hover:translate-x-1 hover:text-pink-400"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="inline-block text-gray-400 transition-all duration-200 hover:translate-x-1 hover:text-pink-400"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="inline-block text-gray-400 transition-all duration-200 hover:translate-x-1 hover:text-pink-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact + Location */}
        <div>
          <h3 className="mb-5 text-sm font-semibold tracking-wide text-white">
            Contact
          </h3>

          <ul className="space-y-4 text-sm">

            <li className="flex items-center justify-center gap-3 md:justify-start">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-pink-400 transition-all duration-300 hover:border-pink-400/30 hover:bg-pink-500/10">
                <Phone size={15} />
              </span>

              <span className="text-gray-400 transition-colors duration-200 hover:text-white">
                +8801923184970
              </span>
            </li>

            <li className="flex items-center justify-center gap-3 md:justify-start">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-pink-400 transition-all duration-300 hover:border-pink-400/30 hover:bg-pink-500/10">
                <Mail size={15} />
              </span>

              <span className="text-gray-400 transition-colors duration-200 hover:text-white">
                your@email.com
              </span>
            </li>

            {/* Google Map */}
            <li className="flex items-center justify-center gap-3 md:justify-start">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-pink-400 transition-all duration-300 hover:border-pink-400/30 hover:bg-pink-500/10">
                <MapPin size={15} />
              </span>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                View Location
              </a>
            </li>

          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h3 className="mb-5 text-sm font-semibold tracking-wide text-white">
            Stay Connected
          </h3>

          {/* Social */}
          <div className="mb-5 flex justify-center gap-3 md:justify-start">

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Limart's Craftilla on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/30 hover:bg-pink-500 hover:text-white hover:shadow-lg hover:shadow-pink-500/20"
            >
              <FaFacebook size={17} />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Limart's Craftilla on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/30 hover:bg-pink-500 hover:text-white hover:shadow-lg hover:shadow-pink-500/20"
            >
              <BsInstagram size={17} />
            </a>

          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-2">

            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>

            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-pink-400/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-pink-500/10"
            />

            <button type="button" className="min-h-11 w-full rounded-xl bg-pink-500 py-2.5 text-sm font-medium text-white shadow-md shadow-pink-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500/20">
              Subscribe
            </button>

          </div>

          {/* Payment */}
          <div className="mt-5 flex justify-center gap-2 md:justify-start">

            <span className="rounded-full border border-pink-400/20 bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-300">
              bKash
            </span>

            <span className="rounded-full border border-orange-400/20 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-300">
              Nagad
            </span>

          </div>
        </div>

      </div>

      {/* TRUST STRIP */}
      <div className="border-t border-white/10 bg-white/[0.02] py-6 text-center text-sm text-gray-400">
        <span className="transition-colors duration-200 hover:text-gray-200">
          🚚 Fast Delivery
        </span>

        <span className="mx-2 text-gray-700">|</span>

        <span className="transition-colors duration-200 hover:text-gray-200">
          🎁 Custom Orders
        </span>

        <span className="mx-2 text-gray-700">|</span>

        <span className="transition-colors duration-200 hover:text-gray-200">
          💯 Trusted Quality
        </span>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Limart's Craftilla. All rights reserved.
      </div>

    </footer>
  );
}