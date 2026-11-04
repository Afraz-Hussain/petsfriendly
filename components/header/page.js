
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Shop", href: "/shop" },
   { name: "Eggs & Chicks", href: "/eggs" },
  { name: "Booking", href: "/booking" },

];

const WHATSAPP_NUMBER = "923001234567"; // Replace with your WhatsApp number

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello PetsFriendly! I would like to know more about your products."
  )}`;

  // Header shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu with Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_3px_20px_rgba(3,60,114,0.08)]"
            : "bg-white border-b border-[#F1EDE6]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="flex items-center justify-between h-[82px] gap-5">

            {/* Logo */}
            <Link
              href="/"
              aria-label="PetsFriendly Homepage"
              className="shrink-0 group"
            >
              <Image
                src="/imgs/logo1.png"
                alt="PetsFriendly - Pet and Veterinary Products"
                width={500}
                height={230}
                priority
                className="w-[135px] sm:w-[160px] h-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Main navigation"
              className="hidden md:flex items-center gap-1"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-3.5 py-2.5 text-[14px] font-semibold text-[#334155] rounded-full hover:text-[#E28220] hover:bg-[#FFF5E9] transition-all duration-300 group"
                >
                  {link.name}

                  <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#E28220] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">

              {/* WhatsApp Icon */}
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="flex items-center justify-center w-11 h-11 rounded-full text-[#64748B] border border-[#E2E8F0] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:scale-110 transition-all duration-300"
              >
                <WhatsAppIcon />
              </Link>

              {/* Shop Button */}
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E28220] px-6 py-3 text-[13.5px] font-semibold text-white shadow-[0_3px_12px_rgba(226,130,32,0.25)] hover:bg-[#033C72] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Shop Now
                <span>→</span>
              </Link>

            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2">

              {/* Mobile WhatsApp */}
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="flex items-center justify-center w-10 h-10 rounded-full text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
              >
                <WhatsAppIcon />
              </Link>

              {/* Hamburger Button */}
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-drawer"
                className="flex items-center justify-center w-10 h-10 rounded-full text-[#033C72] hover:bg-[#FFF5E9] transition-colors duration-300"
              >
                <HamburgerIcon />
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {menuOpen && (
        <div
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-[60] bg-[#033C72]/40 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Mobile Drawer */}
      <aside
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className={`fixed top-0 right-0 z-[70] h-full w-[300px] max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden flex flex-col ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-[#F1EDE6]">

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            aria-label="Go to homepage"
          >
            <Image
              src="/imgs/logo1.png"
              alt="PetsFriendly"
              width={300}
              height={140}
              className="w-[120px] h-auto object-contain"
            />
          </Link>

          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            className="flex items-center justify-center w-9 h-9 rounded-full text-[#033C72] hover:bg-[#FFF5E9] hover:text-[#E28220] transition-colors"
          >
            <CloseIcon />
          </button>

        </div>

        {/* Drawer Navigation */}
        <nav
          aria-label="Mobile navigation"
          className="flex-1 overflow-y-auto px-5 py-6"
        >
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-4 rounded-xl text-[15px] font-semibold text-[#334155] hover:text-[#E28220] hover:bg-[#FFF5E9] transition-all duration-300 group"
                >
                  <span className="w-2 h-2 rounded-full bg-[#E28220] opacity-60 group-hover:opacity-100 transition-opacity" />

                  {link.name}

                  <span className="ml-auto text-[#E28220] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile CTA Buttons */}
          <div className="mt-8 space-y-3">

            <Link
              href="/booking"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-full rounded-full border-[1.5px] border-[#033C72] px-5 py-3.5 text-[14px] font-semibold text-[#033C72] hover:bg-[#033C72] hover:text-white transition-all duration-300"
            >
              Book a Vet Consultation
            </Link>

            <Link
              href="/shop"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-full rounded-full bg-[#E28220] px-5 py-3.5 text-[14px] font-semibold text-white shadow-md hover:bg-[#033C72] transition-all duration-300"
            >
              Shop Now →
            </Link>

            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-full bg-[#25D366] px-5 py-3.5 text-[14px] font-semibold text-white hover:bg-[#1DA851] transition-all duration-300"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </Link>

          </div>
        </nav>

        {/* Drawer Footer */}
        <div className="px-6 py-5 border-t border-[#F1EDE6]">
          <p className="text-[12px] text-[#94A3B8] text-center">
            Caring for your pets, every day. 🐾
          </p>
        </div>

      </aside>
    </>
  );
}

/* WhatsApp Icon */
function WhatsAppIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5Z" />
      <path d="M9 9.5c.5 2 2 3.5 4 4l1.2-1.2 2 1c-.2 1.2-1 2-2.2 2-3.5-.3-6.8-3.6-7.1-7.1 0-1.2.8-2 2-2.2l1 2L9 9.5Z" />
    </svg>
  );
}

/* Hamburger Icon */
function HamburgerIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

/* Close Icon */
function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
