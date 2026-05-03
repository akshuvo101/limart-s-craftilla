import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">

      {/* TOP */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">

        {/* Brand + Logo */}
        <div className="space-y-3 flex flex-col items-center md:items-start">
          
          <Image
            src="/logo-img.jpg"   // 👉 public/logo.png
            alt="Limart's Craftilla"
            width={120}
            height={40}
            className="w-auto rounded-full"
          />

          <p className="text-sm text-gray-400">
            Handmade crafts created with love 💖. Perfect for gifting and decoration.
          </p>

          {/* Trust badges */}
          <div className="flex gap-3 pt-2">
            <span className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
              Handmade
            </span>
            <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
              Trusted
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact + Location */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>

          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={16} /> +8801308699488
            </li>

            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={16} /> your@email.com
            </li>

            {/* Google Map */}
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin size={16} />
              <a
                href="https://maps.google.com"
                target="_blank"
                className="hover:text-white"
              >
                View Location
              </a>
            </li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-3">Stay Connected</h3>

          {/* Social */}
          <div className="flex justify-center md:justify-start gap-4 mb-4">
            <a className="bg-gray-800 p-2 rounded-full hover:bg-pink-500 transition">
              <FaFacebook size={18} />
            </a>

            <a className="bg-gray-800 p-2 rounded-full hover:bg-pink-500 transition">
              <BsInstagram size={18} />
            </a>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-md text-sm bg-gray-800 border border-gray-700 focus:outline-none"
            />

            <button className="bg-pink-500 py-2 rounded-md text-white text-sm hover:bg-pink-600 transition">
              Subscribe
            </button>
          </div>

          {/* Payment */}
          <div className="flex justify-center md:justify-start gap-3 mt-4">
            <span className="bg-pink-600 text-white text-xs px-3 py-1 rounded-full">
              bKash
            </span>
            <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
              Nagad
            </span>
          </div>
        </div>

      </div>

      {/* TRUST STRIP */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-400">
        🚚 Fast Delivery | 🎁 Custom Orders | 💯 Trusted Quality
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 text-center text-sm py-4 text-gray-500">
        © {new Date().getFullYear()} Limart's Craftilla. All rights reserved.
      </div>

    </footer>
  );
}