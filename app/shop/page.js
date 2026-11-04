
"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import products from "../data/products.json";
import {
  Search,
  ShoppingBag,
  PawPrint,
  ArrowUpRight,
  SlidersHorizontal,
  MessageCircle,
  Heart,
  X,
  Sparkles,
  ShieldCheck,
  Truck,
} from "lucide-react";

const WHATSAPP_NUMBER = "+923014288772"; // Replace with actual business number

const categories = [
  "All Products",
  ...new Set(products.map((product) => product.category).filter(Boolean)),
];

function formatPrice(price) {
  return `Rs. ${Number(price || 0).toLocaleString("en-PK")}`;
}

function getWhatsAppLink(product) {
  const message = `Hello PetsFriendly! I would like to order:

Product: ${product.name}
Price: ${formatPrice(product.price)}

Please share more details about availability and delivery.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="group overflow-hidden rounded-[24px] border border-[#EEE8DE] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#E28220]/40 hover:shadow-[0_18px_45px_rgba(30,41,59,0.09)]">
      {/* Product Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F7F3EE]">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-[#C8BBA8]">
            <PawPrint size={48} />
          </div>
        )}

        {product.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-[#E28220] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
            Featured
          </span>
        )}

        <button
          type="button"
          onClick={() => setLiked(!liked)}
          aria-label={liked ? "Remove from favourites" : "Add to favourites"}
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur transition ${
            liked
              ? "text-red-500"
              : "text-[#1E293B] hover:text-red-500"
          }`}
        >
          <Heart size={18} fill={liked ? "currentColor" : "none"} />
        </button>

        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/40 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
          <a
            href={getWhatsAppLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#033C72] transition hover:bg-[#E28220] hover:text-white"
          >
            <MessageCircle size={17} />
            Order on WhatsApp
          </a>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-5">
        {product.category && (
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#E28220]">
            {product.category}
          </p>
        )}

        <h3 className="line-clamp-1 text-base font-bold text-[#1E293B] transition-colors group-hover:text-[#033C72]">
          {product.name}
        </h3>

        {product.description && (
          <p className="mt-2 line-clamp-2 min-h-[40px] text-xs leading-5 text-gray-500">
            {product.description}
          </p>
        )}

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#F0ECE5] pt-4">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
              Price
            </p>
            <p className="mt-1 text-lg font-extrabold text-[#033C72]">
              {formatPrice(product.price)}
            </p>
          </div>

          <a
            href={getWhatsAppLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Order ${product.name} on WhatsApp`}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7F3EE] text-[#033C72] transition hover:bg-[#E28220] hover:text-white"
          >
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Shop() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== "All Products") {
      result = result.filter(
        (product) => product.category === activeCategory
      );
    }

    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter((product) =>
        [
          product.name,
          product.category,
          product.description,
        ]
          .filter(Boolean)
          .some((value) => value.toLowerCase().includes(query))
      );
    }

    if (sortBy === "low-high") {
      result.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortBy === "high-low") {
      result.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      result.sort(
        (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
      );
    }

    return result;
  }, [search, activeCategory, sortBy]);

  return (
    <main className="min-h-screen bg-[#FFFCF7]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071B2D]">
        <div className="absolute inset-0 bg-[url('/imgs/cat_and_dog.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071B2D] via-[#071B2D]/90 to-[#071B2D]/50" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-orange-300">
              <Sparkles size={15} />
              THE PETSFRIENDLY COLLECTION
            </div>

            <h1 className="max-w-xl text-4xl font-extrabold leading-[1.15] tracking-tight text-white md:text-6xl">
              Everything Your
              <span className="block text-[#E28220]">
                Pet Deserves.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-8 text-gray-300 md:text-base">
              Explore quality pet food, accessories, health essentials,
              and everyday favourites — carefully selected for your
              beloved companions.
            </p>

            <a
              href="#products"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#E28220] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#033C72]"
            >
              Explore Products
              <ArrowUpRight size={18} />
            </a>

            <div className="mt-10 flex flex-wrap gap-7 border-t border-white/15 pt-7">
              <div>
                <p className="text-2xl font-extrabold text-white">
                  Quality
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  Selected Products
                </p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-white">
                  Easy
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  WhatsApp Ordering
                </p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-white">
                  Care
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  For Every Companion
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[40px] bg-[#E28220]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[24px]">
                <Image
                  src="/imgs/cat_and_dog.jpg"
                  alt="PetsFriendly pet care collection"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>

              <div className="flex items-center justify-between gap-3 p-4">
                <div>
                  <p className="font-bold text-white">
                    Made for Happy Pets
                  </p>
                  <p className="mt-1 text-xs text-gray-300">
                    Shop with care. Love without limits.
                  </p>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E28220] text-white">
                  <PawPrint size={23} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-b border-[#EEE8DE] bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-7 sm:grid-cols-3">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7F3EE] text-[#E28220]">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1E293B]">
                Carefully Selected
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                Quality-focused pet essentials
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7F3EE] text-[#E28220]">
              <MessageCircle size={22} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1E293B]">
                Direct WhatsApp Orders
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                Talk to us before ordering
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7F3EE] text-[#E28220]">
              <Truck size={22} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1E293B]">
                Delivery Information
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                Contact us for delivery options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E28220]">
              FIND THEIR FAVOURITES
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#033C72] md:text-4xl">
              Explore Our Shop
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500">
              From everyday nutrition to special treats, discover
              products made to keep your pets happy and healthy.
            </p>
          </div>

          <p className="text-sm font-medium text-gray-500">
            <span className="font-bold text-[#033C72]">
              {filteredProducts.length}
            </span>{" "}
            Products Available
          </p>
        </div>

        {/* Search and Sort */}
        <div className="mt-10 flex flex-col gap-4 lg:flex-row">
          <div className="relative flex-1">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search food, accessories, products..."
              className="w-full rounded-xl border border-[#EAE4DA] bg-white py-4 pl-12 pr-11 text-sm text-[#1E293B] outline-none transition placeholder:text-gray-400 focus:border-[#E28220] focus:ring-2 focus:ring-[#E28220]/10"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#033C72]"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <div className="relative lg:w-64">
            <SlidersHorizontal
              size={17}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#E28220]"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full appearance-none rounded-xl border border-[#EAE4DA] bg-white py-4 pl-11 pr-10 text-sm font-medium text-[#1E293B] outline-none focus:border-[#E28220]"
            >
              <option value="featured">Featured First</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-7 flex gap-2 overflow-x-auto pb-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full px-5 py-3 text-xs font-bold transition ${
                activeCategory === category
                  ? "bg-[#033C72] text-white shadow-md"
                  : "border border-[#EAE4DA] bg-white text-gray-600 hover:border-[#E28220] hover:text-[#E28220]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id || product.name} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-3xl border border-dashed border-[#DED5C8] bg-white px-6 py-20 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F7F3EE] text-[#E28220]">
              <Search size={28} />
            </div>
            <h3 className="mt-5 text-xl font-bold text-[#033C72]">
              No Products Found
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Try another search or select a different category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All Products");
              }}
              className="mt-6 rounded-xl bg-[#033C72] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#E28220]"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* BOTTOM CTA */}
      <section className="px-5 pb-20 md:px-6">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#071B2D] px-7 py-14 md:px-14 md:py-16">
          <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#E28220]/20 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
                NEED A LITTLE HELP?
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
                Not Sure What Your Pet Needs?
              </h2>
              <p className="mt-4 text-sm leading-7 text-gray-300">
                Talk to our team and get help choosing suitable
                products for your beloved companion.
              </p>
            </div>

            <Link
              href="/booking"
              className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#E28220] px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#033C72]"
            >
              Book a Vet
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
