"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/data/testimonials";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const visibleCards = 4;
  const total = testimonials.length;

  // 👉 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    if (index < total - visibleCards) {
      setIndex(index + 1);
    } else {
      setIndex(0); // loop back
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(total - visibleCards);
    }
  };

  return (
    <div className="relative w-full">

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
      >
        <ChevronLeft size={20} />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
      >
        <ChevronRight size={20} />
      </button>

      {/* SLIDER */}
      <div className="overflow-hidden px-8">
        <div
          className="flex gap-6 transition-transform duration-500"
          style={{
            transform: `translateX(-${index * 25}%)`, // 4 cards → 25%
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[25%]"
            >
              <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition h-full">

                {/* Stars */}
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  "{t.text}"
                </p>

                {/* User */}
                <div className="flex items-center gap-3 mt-4">
                  <img
                    src={t.image}
                    className="w-9 h-9 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.location}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}