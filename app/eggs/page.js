
"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import eggs from "../data/eggs.json";
import {
  Egg,
  Bird,
  MessageCircle,
  Search,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const WHATSAPP_NUMBER = "923001234567"; // Replace with actual number

function ProductCard({ product }) {
  const whatsappMessage = `Assalam o Alaikum! I want to order ${product.name}. Price: Rs. ${product.price} (${product.unit}). Please share availability.`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <article className="group overflow-hidden rounded-2xl border border-[#eee8df] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden bg-[#F7F3EE]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-[#033C72] shadow">
          {product.category}
        </span>
      </div>

      <div className="p-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#E28220]">
          {product.type}
        </p>

        <h3 className="text-xl font-bold text-[#1E293B]">
          {product.name}
        </h3>

        <p className="mt-2 min-h-12 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs text-gray-400">Price</p>
            <p className="text-2xl font-extrabold text-[#033C72]">
              Rs. {product.price.toLocaleString("en-PK")}
            </p>
            <p className="text-xs text-gray-400">{product.unit}</p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-[#E28220] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#c96e12]"
          >
            <MessageCircle size={17} />
            Order
          </a>
        </div>
      </div>
    </article>
  );
}

export default function EggsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return eggs.filter((product) => {
      const matchesCategory =
        activeCategory === "All" ||
        product.category === activeCategory;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="min-h-screen bg-[#FFFCF7]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071B2D] px-5 py-20 text-white sm:py-28">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#E28220]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-orange-300">
              <Egg size={16} />
              Fresh Poultry Products
            </span>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
              Fresh Eggs & Healthy
              <span className="block text-[#E28220]">
                Poultry Chicks
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
              Explore quality hen eggs, duck eggs, turkey eggs and
              healthy poultry chicks at Pets Friendly Shop.
            </p>

            <a
              href="#products"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#E28220] px-7 py-4 font-bold text-white transition hover:bg-orange-600"
            >
              Explore Products
              <ArrowRight size={19} />
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-5 py-8 sm:grid-cols-3">
        {[
          "Quality Poultry Products",
          "Multiple Poultry Varieties",
          "Easy WhatsApp Ordering",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center justify-center gap-3 rounded-xl bg-white p-5 shadow-sm"
          >
            <CheckCircle2 className="text-[#E28220]" size={21} />
            <span className="font-semibold text-[#1E293B]">{item}</span>
          </div>
        ))}
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-2 font-bold uppercase tracking-widest text-[#E28220]">
              Our Collection
            </p>
            <h2 className="text-3xl font-extrabold text-[#033C72] sm:text-4xl">
              Eggs & Chicks
            </h2>
            <p className="mt-3 text-gray-500">
              Choose your preferred poultry products.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 md:w-72">
            <Search size={19} className="text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-3">
          {["All", "Eggs", "Chicks"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-3 text-sm font-bold transition ${
                activeCategory === category
                  ? "bg-[#033C72] text-white"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-[#033C72]"
              }`}
            >
              {category === "Chicks" && (
                <Bird size={15} className="mr-2 inline" />
              )}
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white py-16 text-center">
            <Egg size={40} className="mx-auto text-gray-300" />
            <h3 className="mt-4 text-xl font-bold text-gray-700">
              No products found
            </h3>
            <p className="mt-2 text-gray-500">
              Try another search or category.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
