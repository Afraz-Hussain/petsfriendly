
"use client";

import React from "react";
import {
  Syringe,
  ShieldCheck,
  Stethoscope,
  House,
  Scissors,
  ArrowUpRight,
  Heart,
} from "lucide-react";

const WHATSAPP_NUMBER = "+923014288772"; 

const services = [
      {
    en: "Vaccination",
    ur: "ویکسینیشن",
    description: "Essential vaccines and preventive healthcare to keep your pets protected.",
    icon: Syringe,
    image:
      "https://cdn.vanchosun.com/news/File_images_board/2025/m1_1_1749843529.jpg",
  },
   {
    en: "Surgery",
    ur: "سرجری",
    description: "Veterinary surgical care with attention to your pet's safety and recovery.",
    icon: Scissors,
    image:
      "https://cdn.sanity.io/images/0vv8moc6/dvm360/c355f7b7e0870c7a74666e30260d9745b3b76079-5760x3840.jpg",
  },
  {
    en: "Deworming",
    ur: "ڈیورمنگ",
    description: "Protect your pets from harmful worms and parasites with proper deworming care.",
    icon: ShieldCheck,
    image:
      "https://images.petful.com/posts/puppy-deworming-schedule/featured.webp",
  },

  {
    en: "Medical Care",
    ur: "علاج معالجہ",
    description: "Professional checkups, diagnosis and treatment for your beloved pets.",
    icon: Stethoscope,
    image:
      "https://tvazteca.brightspotcdn.com/81/67/423ed988458595b98718769fd1a3/asi-puedes-vacunar-gratis-a-tus-mascotas-en-quintana-roo-recomendaciones-para-la-jornada-de-vacunacion-antirrabica.webp",
  },
  {
    en: "Home Services",
    ur: "ہوم سروسز",
    description: "Convenient veterinary assistance for your pets at your doorstep.",
    icon: House,
    image:
      "https://www.parkviewpetcenter.com/assets/images/parkview-home-visit-doha.webp",
  },
{
  en: "Pet Grooming",
  ur: "پالتو جانوروں کی صفائی اور آرائش",
  description:
    "Keep your pets clean, fresh, and looking their best with professional grooming, bathing, and hair trimming services.",
  icon: Scissors,
  image:
    "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=900",
},

];

export default function Services() {
  const handleBooking = (service) => {
    const message = `Hello PetsFriendly! I want to book ${service.en} service for my pet. Please share more details.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#F7F3EE] px-6 py-3 md:py-28">
      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E28220]/10 px-2 py-2 text-sm font-semibold text-[#E28220]">
            <Heart size={16} />
            Care That Your Pets Deserve
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-[#033C72] sm:text-4xl md:text-5xl">
            Our Veterinary Services
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg">
            From preventive healthcare to expert medical treatment,
            we are here to keep your beloved pets healthy and happy.
          </p>
        </div>

        {/* Image Service Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.en}
                className="group relative flex min-h-[390px] flex-col justify-end overflow-hidden rounded-3xl bg-gray-300 p-7 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  backgroundImage: `url("${service.image}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/95 via-[#071B2D]/45 to-black/10 transition-all duration-500 group-hover:from-[#071B2D]/95 group-hover:via-[#071B2D]/60" />

                {/* Image zoom layer */}
                <div
                  className="absolute inset-0 scale-100 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url("${service.image}")`,
                  }}
                />

                {/* Overlay on top of zoom image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/95 via-[#071B2D]/50 to-black/10" />

                {/* Content */}
                <div className="relative z-10">

                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-[#E28220] group-hover:border-[#E28220]">
                    <Icon size={27} />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {service.en}
                  </h3>

                  <p className="mt-1 text-lg font-semibold text-[#F5A64B]">
                    {service.ur}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-white/80">
                    {service.description}
                  </p>

                  <button
                    onClick={() => handleBooking(service)}
                    className="mt-6 inline-flex w-full items-center justify-between rounded-xl bg-white/15 px-5 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-[#E28220]"
                  >
                    Book This Service
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
      
{/* Why Choose PetsFriendly */}
<section className="relative mt-16 overflow-hidden rounded-[32px] bg-[#033C72] px-6 py-14 md:px-12 md:py-16">

  {/* Background decorations */}
  <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#E28220]/20 blur-3xl" />

  <div className="relative z-10">

    {/* Heading */}
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span className="inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-[#F5A64B]">
        The PetsFriendly Difference
      </span>

      <h2 className="mt-5 text-3xl font-extrabold text-white md:text-4xl">
        Why Choose PetsFriendly?
      </h2>

      <p className="mt-4 leading-7 text-white/70">
        Your pets deserve the best. We bring together quality products,
        professional care, and a friendly experience for every pet parent.
      </p>
    </div>

    {/* Three Points */}
    <div className="grid gap-6 md:grid-cols-3">

      {/* Point 1 */}
      <div className="group rounded-3xl border border-white/10 bg-white/[0.07] p-7 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/[0.12]">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E28220] text-white transition group-hover:scale-110">
          <Stethoscope size={30} />
        </div>

        <h3 className="mt-6 text-xl font-bold text-white">
          Professional Pet Care
        </h3>

        <p className="mt-3 text-sm leading-7 text-white/70">
          We focus on your pet's health and wellbeing with dedicated
          veterinary services and thoughtful care.
        </p>
      </div>

      {/* Point 2 */}
      <div className="group rounded-3xl border border-white/10 bg-white/[0.07] p-7 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/[0.12]">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E28220] text-white transition group-hover:scale-110">
          <ShieldCheck size={30} />
        </div>

        <h3 className="mt-6 text-xl font-bold text-white">
          Quality Pet Products
        </h3>

        <p className="mt-3 text-sm leading-7 text-white/70">
          Find carefully selected pet food, accessories, and everyday
          essentials to keep your furry friends happy.
        </p>
      </div>

      {/* Point 3 */}
      <div className="group rounded-3xl border border-white/10 bg-white/[0.07] p-7 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/[0.12]">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E28220] text-white transition group-hover:scale-110">
          <Heart size={30} />
        </div>

        <h3 className="mt-6 text-xl font-bold text-white">
          Care with Love
        </h3>

        <p className="mt-3 text-sm leading-7 text-white/70">
          Every pet is special to us. We aim to make pet care
          convenient, comfortable, and stress-free.
        </p>
      </div>

    </div>
  </div>
</section>

      </div>
    </section>
  );
}
