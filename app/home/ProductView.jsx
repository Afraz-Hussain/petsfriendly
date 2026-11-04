"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import products from "../data/products.json";

const WHATSAPP_NUMBER = "+923014288772";

function buildWhatsappUrl(product, qty) {
  const total = Number(product.price) * qty;
  const text = `Hi! I'd like to order the following:\n\n🛍 *${product.name}*\n📦 Quantity: ${qty}\n💰 Price per item: Rs. ${Number(product.price).toLocaleString("en-PK")}\n🧾 Total: Rs. ${total.toLocaleString("en-PK")}\n\nIs this available?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/* ─── Product Detail Modal ───────────────────────────────────────────────── */
function ProductModal({ product, onClose }) {
  const [qty, setQty] = useState(1);
  const overlayRef = useRef(null);
  const modalRef = useRef(null);
  const closeRef = useRef(null);

  const total = Number(product.price) * qty;

  /* Body scroll lock */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  /* Escape key */
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  /* Focus trap */
  useEffect(() => {
    const el = modalRef.current;
    if (!el) return;
    const focusable = el.querySelectorAll(
      "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const trap = (e) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
      }
    };
    el.addEventListener("keydown", trap);
    closeRef.current?.focus();
    return () => el.removeEventListener("keydown", trap);
  }, []);

  const dec = () => setQty((q) => Math.max(1, q - 1));
  const inc = () => setQty((q) => Math.min(99, q + 1));

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Order ${product.name}`}
      className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center px-0 sm:px-4"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#1A2E1A]/50 backdrop-blur-sm modal-backdrop"
      />

      {/* Panel */}
      <div
        ref={modalRef}
       className="modal-panel relative z-10 w-full max-w-5xl overflow-hidden rounded-t-[28px] bg-white sm:rounded-[28px] shadow-[0_24px_80px_rgba(26,46,26,0.25)]"
      >
        {/* Close button */}
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close product details"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#1A2E1A] shadow-sm backdrop-blur-sm transition-colors hover:bg-[#F7F3EE] focus-visible:outline-2 focus-visible:outline-[#E28220]"
        >
          <CloseIcon />
        </button>

        <div className="flex flex-col sm:flex-row max-h-[92svh] sm:max-h-[600px] overflow-y-auto sm:overflow-hidden">

          {/* Left: Image */}
          <div className="relative h-54 w-full shrink-0 bg-[#F7F3EE] sm:h-auto sm:w-[44%]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, 44vw"
              className="object-cover"
              priority
            />
            {product.category && (
              <span className="absolute left-4 bottom-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#1A2E1A] backdrop-blur-sm shadow-sm">
                {product.category}
              </span>
            )}
          </div>

          {/* Right: Details */}
          <div className="flex flex-1 flex-col gap-5 overflow-y-auto p-6 sm:p-8">

            <div>
              <h2 className="text-xl font-extrabold leading-snug text-[#1A2E1A] sm:text-2xl">
                {product.name}
              </h2>
              <p className="mt-1 text-[13px] font-medium text-[#E28220]">PetsFriendly</p>
            </div>

            <hr className="border-[#EAE5DC]" />

            <p className="text-[14px] leading-[1.75] text-[#4A5A4A]">
              {product.description || "A premium product for your pet."}
            </p>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-[#1A2E1A]">
                Rs. {Number(product.price).toLocaleString("en-PK")}
              </span>
              <span className="text-[13px] text-[#8A9A8A]">per item</span>
            </div>

            {/* Quantity stepper */}
            <div className="flex items-center gap-4">
              <span className="text-[13px] font-semibold text-[#1A2E1A]">Quantity</span>
              <div className="flex items-center overflow-hidden rounded-full border-[1.5px] border-[#EAE5DC] bg-[#F7F3EE]">
                <button
                  onClick={dec}
                  disabled={qty <= 1}
                  aria-label="Decrease quantity"
                  className="flex h-10 w-10 items-center justify-center text-[#1A2E1A] transition-colors hover:bg-[#EAE5DC] disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-[#E28220]"
                >
                  <MinusIcon />
                </button>
                <span
                  aria-live="polite"
                  aria-label={`${qty} items`}
                  className="min-w-[2.5rem] text-center text-[15px] font-bold text-[#1A2E1A]"
                >
                  {qty}
                </span>
                <button
                  onClick={inc}
                  disabled={qty >= 99}
                  aria-label="Increase quantity"
                  className="flex h-10 w-10 items-center justify-center text-[#1A2E1A] transition-colors hover:bg-[#EAE5DC] disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-[#E28220]"
                >
                  <PlusIcon />
                </button>
              </div>
            </div>

            {/* Live total */}
            {qty > 1 && (
              <div className="rounded-xl bg-[#F7F3EE] px-4 py-3">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-[#5A6A5A]">
                    {qty} × Rs. {Number(product.price).toLocaleString("en-PK")}
                  </span>
                  <span className="text-[15px] font-extrabold text-[#1A2E1A]">
                    Rs. {total.toLocaleString("en-PK")}
                  </span>
                </div>
              </div>
            )}

            {/* WhatsApp CTA */}
            <Link
              href={buildWhatsappUrl(product, qty)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] py-4 text-[15px] font-bold text-white shadow-[0_4px_16px_rgba(37,211,102,0.35)] transition-all duration-200 hover:bg-[#1DA851] hover:shadow-[0_6px_20px_rgba(37,211,102,0.45)] hover:-translate-y-px active:translate-y-0 focus-visible:outline-2 focus-visible:outline-[#1DA851]"
            >
              <WhatsAppIcon />
              Order {qty > 1 ? `${qty} items` : "now"} on WhatsApp
            </Link>

            <p className="text-center text-[11.5px] text-[#9AAA9A]">
              You&apos;ll be redirected to WhatsApp to confirm your order.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes backdropIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes panelUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .modal-backdrop { animation: backdropIn 0.2s ease both; }
        .modal-panel    { animation: panelUp 0.28s cubic-bezier(0.16,1,0.3,1) both; }
      `}</style>
    </div>
  );
}

/* ─── Product Card ───────────────────────────────────────────────────────── */
function ProductCard({ product, onOpen }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-[#EDE6DA] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E28220]/40 hover:shadow-[0_16px_40px_rgba(26,46,26,0.10)]">

      <button
        onClick={() => onOpen(product)}
        aria-label={`View details for ${product.name}`}
        className="relative block w-full cursor-pointer overflow-hidden bg-[#F3EDE3] focus-visible:outline-2 focus-visible:outline-[#E28220]"
        style={{ aspectRatio: "4/3" }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#1A2E1A]/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-full bg-white px-4 py-2 text-[13px] font-bold text-[#1A2E1A] shadow-md">
            Quick view
          </span>
        </div>

        {product.category && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10.5px] font-semibold text-[#1A2E1A] backdrop-blur-sm">
            {product.category}
          </span>
        )}
      </button>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-2 min-h-[2.8rem] text-[15px] font-bold leading-snug text-[#1A2E1A] transition-colors group-hover:text-[#E28220]">
          {product.name}
        </h3>

        <p className="mt-2 line-clamp-2 text-[12.5px] leading-relaxed text-[#7A8A7A]">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-[#F0EBE3] pt-4">
          <p className="text-[19px] font-extrabold text-[#1A2E1A]">
            Rs. {Number(product.price).toLocaleString("en-PK")}
          </p>

          <button
            onClick={() => onOpen(product)}
            className="flex items-center gap-1.5 rounded-full bg-[#E28220] px-4 py-2 text-[12.5px] font-bold text-white shadow-[0_2px_10px_rgba(226,130,32,0.3)] transition-all duration-200 hover:bg-[#C96D12] focus-visible:outline-2 focus-visible:outline-[#E28220]"
          >
            Order
          </button>
        </div>
      </div>
    </article>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */
export default function ProductView() {
  const [activeProduct, setActiveProduct] = useState(null);
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);
  const openModal = useCallback((product) => setActiveProduct(product), []);
  const closeModal = useCallback(() => setActiveProduct(null), []);

  return (
    <>
      <section
        aria-labelledby="featured-heading"
        className="relative overflow-hidden bg-[#F8F6F1] py-20 sm:py-20 lg:py-18"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-[13px] font-semibold text-[#E28220]">Handpicked for your pets</p>
              <h2
                id="featured-heading"
                className="text-3xl font-extrabold leading-tight text-[#1A2E1A] sm:text-4xl"
              >
                Featured products
              </h2>
            </div>
            <Link
              href="/shop"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border-[1.5px] border-[#1A2E1A] px-6 py-2.5 text-[13.5px] font-semibold text-[#1A2E1A] transition-all duration-200 hover:bg-[#1A2E1A] hover:text-white self-start sm:self-auto"
            >
              View all
              <ChevronRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onOpen={openModal} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[#EAE2D6] bg-white py-16 text-center">
              <p className="text-[15px] text-[#8A9A8A]">No featured products right now.</p>
              <Link href="/shop" className="mt-4 inline-block text-[13px] font-semibold text-[#E28220] underline underline-offset-2">
                Browse all products
              </Link>
            </div>
          )}

         

        </div>
      </section>

      {activeProduct && (
        <ProductModal product={activeProduct} onClose={closeModal} />
      )}
    </>
  );
}

/* ─── Icons ──────────────────────────────────────────────────────────────── */
function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.87 11.87 0 0 0 12.07 0C5.48 0 .12 5.36.12 11.95c0 2.1.55 4.16 1.59 5.98L0 24l6.24-1.64a11.9 11.9 0 0 0 5.82 1.48h.01c6.59 0 11.95-5.36 11.95-11.95a11.87 11.87 0 0 0-3.5-8.41ZM12.07 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.7.97.99-3.61-.24-.37a9.88 9.88 0 0 1-1.52-5.25c0-5.45 4.44-9.89 9.9-9.89a9.83 9.83 0 0 1 7 2.9 9.83 9.83 0 0 1 2.9 7c0 5.45-4.44 9.89-9.9 9.89Zm5.43-7.4c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.46-.89-.8-1.49-1.78-1.66-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.24-.25-.59-.5-.51-.68-.52h-.58c-.2 0-.53.08-.81.38-.28.3-1.06 1.03-1.06 2.52s1.08 2.92 1.23 3.12c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.18-1.42-.08-.13-.28-.2-.58-.35Z" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="7" x2="11" y2="7" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      <line x1="7" y1="3" x2="7" y2="11" />
      <line x1="3" y1="7" x2="11" y2="7" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="2" y1="2" x2="14" y2="14" />
      <line x1="14" y1="2" x2="2" y2="14" />
    </svg>
  );
}

function ChevronRight({ className = "" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M5 3l4 4-4 4" />
    </svg>
  );
}