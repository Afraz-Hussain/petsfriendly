import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ContactCTA() {
  return (
    <section className="bg-[#FFFCF7] py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2 md:gap-16">

        {/* Doctor Image */}
        <div className="relative">
          {/* پیچھے والی اورنج لیئر یہاں سے ہٹا دی گئی ہے */}
          <Image
            src="/imgs/docinfo.jpg"
            alt="PetsFriendly veterinarian"
            width={600}
            height={500}
            className="relative z-10 h-auto max-h-[350px] w-full rounded-3xl object-contain shadow-lg md:max-h-[460px]"
          />
        </div>

        {/* About Content */}
        <div className="space-y-6">
          <span className="inline-block rounded-full bg-[#E28220]/10 px-4 py-2 text-sm font-semibold text-[#E28220]">
            About PetsFriendly
          </span>

          <h2 className="text-3xl font-bold leading-tight text-[#033C72] md:text-4xl">
            Caring for Your Pets Like Family
          </h2>

          <p className="text-base leading-8 text-gray-600">
            At PetsFriendly, we believe every pet deserves love, care, and
            attention. Our experienced veterinarian is dedicated to helping
            pets live healthier and happier lives through professional care
            and guidance.
          </p>

          <p className="text-base leading-8 text-gray-600">
            From quality pet food and everyday essentials to carefully selected
            accessories, we bring together trusted products to support your
            pet&apos;s health, comfort, and happiness. Your pet&apos;s wellbeing is
            always our priority.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full bg-[#E28220] px-7 py-3.5 font-semibold text-white transition hover:bg-[#c96f13]"
          >
            Learn More About Us
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
