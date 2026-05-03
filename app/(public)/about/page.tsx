"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Sparkles, Target, Eye } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900">

      <div className="max-w-6xl mx-auto px-4 py-24 space-y-32">

        {/* HERO */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Crafted with Love,
            <br />
            Designed by Memories ✨
          </h1>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Handmade creations that carry love, meaning, and timeless beauty.
          </p>
        </motion.section>

        {/* STORY */}
        <section className="grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src="/logo-img.jpg"
              alt="Crafting"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold">
              A Story Behind Every Creation
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Limart's Craftilla began with a simple idea — turning creativity into
              something meaningful. Every product is handcrafted with intention and care.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              We don’t just create products — we create memories, emotions, and
              timeless handmade experiences.
            </p>
          </motion.div>

        </section>

        {/* VALUES */}
        <section className="grid md:grid-cols-3 gap-10 text-center">

          {[ 
            { icon: Heart, title: "Made with Love" },
            { icon: Sparkles, title: "Unique Design" },
            { icon: Heart, title: "Premium Quality" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-3"
            >
              <item.icon className="mx-auto text-pink-500" size={32} />
              <h3 className="text-lg font-medium">{item.title}</h3>
            </motion.div>
          ))}

        </section>

        {/* MISSION */}
        <section className="grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <Target className="text-pink-500" />
              <h3 className="text-2xl font-semibold">Our Mission</h3>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              To create meaningful handmade pieces that connect emotions,
              beauty, and personal expression — making every moment special.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src="/mission-vision.jpg"
              alt="Mission"
              fill
              className="object-cover"
            />
          </motion.div>

        </section>

        {/* VISION */}
        <section className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src="/mission-vision.jpg"
              alt="Vision"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <Eye className="text-purple-500" />
              <h3 className="text-2xl font-semibold">Our Vision</h3>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              To build a globally trusted handmade brand that inspires creativity,
              individuality, and emotional storytelling through every product.
            </p>
          </motion.div>

        </section>

        {/* CTA */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-semibold">
            Discover the Beauty of Handmade 💖
          </h2>

          <a
            href="/products"
            className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Explore Collection
          </a>
        </motion.section>

      </div>
    </div>
  );
}