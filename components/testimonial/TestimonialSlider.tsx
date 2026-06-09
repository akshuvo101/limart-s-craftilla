"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/data/testimonials";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  const total = testimonials.length;

  // Responsive cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else if (window.innerWidth < 1280) {
        setVisibleCards(3);
      } else {
        setVisibleCards(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev < total - visibleCards ? prev + 1 : 0
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [visibleCards, total]);

  const nextSlide = () => {
    setIndex((prev) =>
      prev < total - visibleCards ? prev + 1 : 0
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev > 0 ? prev - 1 : Math.max(total - visibleCards, 0)
    );
  };

  return (
    <div className="relative w-full">

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-1 md:left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-1 md:right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slider */}
      <div className="overflow-hidden px-4 md:px-8">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${
              index * (100 / visibleCards)
            }%)`,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="px-3"
              style={{
                minWidth: `${100 / visibleCards}%`,
              }}
            >
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-full border border-pink-100">

                {/* Stars */}
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={15}
                      fill="currentColor"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-sm text-gray-600 leading-relaxed min-h-[90px]">
                  "{t.text}"
                </p>

                {/* User */}
                <div className="flex items-center gap-3 mt-5 pt-4 border-t">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />

                  <div className="text-left">
                    <p className="font-semibold text-sm text-gray-800">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {t.location}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({
          length: Math.max(total - visibleCards + 1, 1),
        }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === i
                ? "w-8 bg-pink-500"
                : "w-2.5 bg-pink-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}