
import React from "react";
import Link from "next/link";

import {
  PawPrint,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Heart,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const WHATSAPP_NUMBER = "03014288772"; // Replace with actual number

export default function Footer() {
  const currentYear = 2027;

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://facebook.com/",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com/",
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      url: "https://tiktok.com/",
      label: "♪",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "https://youtube.com/",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Shop", href: "/shop" },
    { name: "Booking", href: "/booking" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
  ];

  const services = [
    "Deworming",
    "Vaccination",
    "Medical Care",
    "Home Services",
    "Surgery",
    "Pet Grooming",
  ];

  return (
    <footer className="bg-[#071B2D] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 md:pt-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E28220]">
                <PawPrint size={27} />
              </div>

              <span className="text-2xl font-extrabold">
                Pets<span className="text-[#E28220]">Friendly</span>
              </span>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/65">
              Your trusted destination for quality pet products and
              professional veterinary services. Because every pet
              deserves love, care, and happiness.
            </p>

            {/* Social Icons */}
            <div className="mt-7">
              <h4 className="mb-4 text-sm font-bold text-white">
                Follow Us
              </h4>

              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#E28220] hover:bg-[#E28220]"
                    >
                      {Icon ? (
                        <Icon size={20} />
                      ) : (
                        <span className="text-2xl font-bold">
                          {social.label}
                        </span>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-7 text-lg font-bold">
              Quick Links
              <span className="mt-3 block h-1 w-10 rounded-full bg-[#E28220]" />
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition hover:translate-x-1 hover:text-[#E28220]"
                  >
                    → {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-7 text-lg font-bold">
              Our Services
              <span className="mt-3 block h-1 w-10 rounded-full bg-[#E28220]" />
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-white/65 transition hover:translate-x-1 hover:text-[#E28220]"
                >
                  <Link href="/booking">→ {service}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-7 text-lg font-bold">
              Get In Touch
              <span className="mt-3 block h-1 w-10 rounded-full bg-[#E28220]" />
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 shrink-0 text-[#E28220]" size={20} />
                <p className="text-sm leading-6 text-white/65">
                  Lahore, Pakistan
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="shrink-0 text-[#E28220]" size={20} />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  className="text-sm text-white/65 transition hover:text-[#E28220]"
                >
                  Contact on WhatsApp
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="shrink-0 text-[#E28220]" size={20} />
                <a
                  href="mailto:info@petsfriendly.com"
                  className="break-all text-sm text-white/65 transition hover:text-[#E28220]"
                >
                  info@petsfriendly.com
                </a>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#E28220] px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#033C72]"
            >
              Contact Us
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-white/50">
            © {currentYear} PetsFriendly. All rights reserved.
          </p>

          <p className="flex items-center gap-1 text-sm text-white/50">
            Made with <Heart size={15} className="fill-[#E28220] text-[#E28220]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
