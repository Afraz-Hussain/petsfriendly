
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/imgs/cat_and_dog.jpg",
    alt: "A happy cat and dog sitting together",
    eyebrow: "WELCOME TO PETSFRIENDLY",
    title: "Everything your pet needs,",
    highlight: "all in one place",
    description:
      "Premium food, accessories, and expert vet care — delivered to your door or at our Lahore clinic. Because your pet deserves the best.",
    primaryButton: "Shop Now",
    primaryLink: "/shop",
    secondaryButton: "Book a Vet",
    secondaryLink: "/booking",
  },
  {
    image: "/imgs/petslahore.jpg",
    alt: "Healthy food and nutrition for pets",
    eyebrow: "NUTRITION & CARE",
    title: "Give your pets",
    highlight: "the nutrition they deserve",
    description:
      "Discover quality pet food, healthy treats, and everyday essentials for your furry companions.",
    primaryButton: "Explore Products",
    primaryLink: "/shop",
    secondaryButton: "Contact Us",
    secondaryLink: "/contact",
  },
  {
    image: "/imgs/buycat.jpg",
    alt: "Veterinarian taking care of a pet",
    eyebrow: "EXPERT VETERINARY CARE",
    title: "Their health is",
    highlight: "our priority",
    description:
      "Give your beloved pets the care and attention they deserve with professional veterinary services.",
    primaryButton: "Book a Vet",
    primaryLink: "/booking",
    secondaryButton: "Learn More",
    secondaryLink: "/about",
  },
];

const galleryItems = [
  {
    src: "/imgs/catsaccessories.jpg",
    alt: "Premium cat accessories and toys",
    label: "Accessories",
    href: "/shop?category=accessories",
  },
  {
    src: "/imgs/petslahore.jpg",
    alt: "Pets in Lahore — local community",
    label: "Our Community",
    href: "/about",
  },
  {
    src: "/imgs/parrots.jpg",
    alt: "Parrots and exotic birds",
    label: "Birds & Exotics",
    href: "/shop?category=birds",
  },
  {
    src: "/imgs/cat_and_dog.jpg",
    alt: "Cats and dogs",
    label: "Cats & Dogs",
    href: "/shop?category=cats-dogs",
  },
];

export default function HomeView() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const activeSlide = slides[currentSlide];

  return (
    <main id="main-content">

      {/* HERO IMAGE SLIDER */}
      <section
        aria-label="PetsFriendly featured offers"
        className="relative w-full overflow-hidden bg-[#1A2E1A]"
        style={{ minHeight: "clamp(480px, 72vh, 760px)" }}
      >
        {/* Background Image */}
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={currentSlide !== index}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}

        {/* Dark Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(26,46,26,0.88) 0%, rgba(26,46,26,0.70) 42%, rgba(26,46,26,0.18) 72%, rgba(26,46,26,0.04) 100%)",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 min-h-[480px] h-full flex items-center">
          <div
            key={currentSlide}
            className="max-w-[580px] py-20 lg:py-28 animate-[fadeIn_0.7s_ease-in-out]"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
              <span className="text-[#F5A84E] text-sm">✦</span>
              <span className="text-white/85 text-[12px] font-semibold tracking-wider">
                {activeSlide.eyebrow}
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-white font-bold leading-[1.1] tracking-tight mb-5"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}
            >
              {activeSlide.title}{" "}
              <span className="text-[#F5A84E]">
                {activeSlide.highlight}
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-white/75 leading-relaxed mb-8 max-w-[460px]"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}
            >
              {activeSlide.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href={activeSlide.primaryLink}
                className="inline-flex items-center justify-center rounded-full bg-[#E28220] px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg hover:bg-[#C96D12] hover:-translate-y-0.5 transition-all duration-200"
              >
                {activeSlide.primaryButton}
                <span className="ml-2">→</span>
              </Link>

              <Link
                href={activeSlide.secondaryLink}
                className="inline-flex items-center justify-center rounded-full border-2 border-white/60 px-7 py-3.5 text-[15px] font-semibold text-white hover:bg-white hover:text-[#1A2E1A] transition-all duration-200"
              >
                {activeSlide.secondaryButton}
              </Link>
            </div>

            {/* Trust Stats - First Slide */}
            {currentSlide === 0 && (
              <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/15">
                {[
                  { value: "500+", label: "Products in stock" },
                  { value: "Same day", label: "Vet consultations" },
                  { value: "Free", label: "Delivery over Rs. 2,000" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-0.5">
                    <span className="text-white font-bold text-[1.1rem]">
                      {stat.value}
                    </span>
                    <span className="text-white/55 text-[12px]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Previous / Next Buttons */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm hover:bg-[#E28220] hover:border-[#E28220] transition-all flex items-center justify-center"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm hover:bg-[#E28220] hover:border-[#E28220] transition-all flex items-center justify-center"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.eyebrow}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentSlide === index ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-9 bg-[#E28220]"
                  : "w-2.5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </section>

      {/* CATEGORY GALLERY */}
      <section
        aria-label="Shop by category"
        className="max-w-7xl mx-auto px-5 lg:px-8 py-14"
      >
        <h2
          className="text-[#1A2E1A] font-bold mb-2"
          style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)" }}
        >
          Shop by category
        </h2>

        <p className="text-[#5A6A5A] text-[15px] mb-8">
          Find exactly what your pet needs.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryItems.map((item, index) => (
            <Link
              key={`${item.label}-${index}`}
              href={item.href}
              className="group relative overflow-hidden rounded-2xl bg-[#EAE5DC]"
              style={{ aspectRatio: "3/4" }}
              aria-label={`Browse ${item.label}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(26,46,26,0.75) 0%, rgba(26,46,26,0.1) 55%, transparent 100%)",
                }}
              />

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="block text-white font-semibold text-[14.5px] mb-1">
                  {item.label}
                </span>

                <span className="inline-flex items-center gap-1 text-white/70 text-[12px] group-hover:text-[#F5A84E] transition-colors">
                  View all →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
