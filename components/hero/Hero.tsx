import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="group relative h-[82vh] min-h-[560px] w-full overflow-hidden rounded-2xl sm:rounded-3xl">
      
      {/* Background Video */}
      <Image
        src="/image-3.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover md:hidden"
      />
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        preload="metadata"
        poster="/image-3.jpg"
        className="absolute inset-0 hidden h-full w-full scale-[1.02] object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-100 md:block"
      >
        <source src="/2.mp4" type="video/mp4" media="(min-width: 768px)" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/65" />

      {/* Soft Pink Glow */}
      <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400/10 blur-3xl sm:h-[450px] sm:w-[450px]" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center text-white sm:px-8">
        
        {/* Small Decorative Element */}
        <div className="mb-5 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white/90 shadow-lg backdrop-blur-md">
          <Sparkles size={14} className="text-pink-300" />
          <span>Handcrafted with Love</span>
          <Sparkles size={14} className="text-pink-300" />
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-3xl font-bold leading-[1.15] tracking-tight drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
          𝚃𝚞𝚛𝚗𝚒𝚗𝚐 𝙼𝚘𝚖𝚎𝚗𝚝𝚜 𝙸𝚗𝚝𝚘 𝙼𝚎𝚖𝚘𝚛𝚒𝚎𝚜 ❤️
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-2xl text-base leading-7 text-gray-200 drop-shadow-md sm:text-lg md:text-xl md:leading-8">
          𝐮𝐧𝐢𝐪𝐮𝐞, 𝐚𝐞𝐬𝐭𝐡𝐞𝐭𝐢𝐜 & 𝐚𝐟𝐟𝐨𝐫𝐝𝐚𝐛𝐥𝐞 𝐡𝐚𝐧𝐝 𝐜𝐫𝐚𝐟𝐭𝐞𝐝 𝐚𝐫𝐭𝐢𝐟𝐚𝐜𝐭𝐬 𝐟𝐨𝐫 𝐠𝐢𝐟𝐭𝐢𝐧𝐠
          <br className="hidden sm:block" />
          & 𝐝𝐞𝐜𝐨𝐫𝐚𝐭𝐢𝐨𝐧
        </p>

        {/* CTA */}
        <Link
          href="/products"
          className="group/btn mt-8 inline-flex items-center gap-2 rounded-full bg-pink-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-pink-900/30 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-600 hover:shadow-2xl hover:shadow-pink-500/30 sm:px-8 sm:py-4 sm:text-base"
        >
          Shop Now

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </Link>
      </div>

      {/* Bottom Soft Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
    </section>
  );
}