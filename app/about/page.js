
import Image from "next/image";
import Link from "next/link";
import {
  PawPrint,
  Heart,
  Stethoscope,
  ShieldCheck,
  Syringe,
  Scissors,
  House,
  Microscope,
  ShoppingBag,
  Bird,
  CheckCircle2,
  ArrowUpRight,
  Award,
  Activity,
} from "lucide-react";

const services = [
  {
    title: "Medical Consultation",
    description:
      "Professional medical consultations and diagnostic testing to help assess your animal's health.",
    icon: Stethoscope,
  },
  {
    title: "Vaccination & Deworming",
    description:
      "Routine wellness care, vaccinations, and deworming to support your pet's health.",
    icon: Syringe,
  },
  {
    title: "Surgical Procedures",
    description:
      "Spaying, neutering, C-sections, and major or minor surgical procedures.",
    icon: Activity,
  },
  {
    title: "Pet Grooming",
    description:
      "Professional grooming services to help your pets stay clean, comfortable, and healthy.",
    icon: Scissors,
  },
  {
    title: "Home Visit Services",
    description:
      "Convenient veterinary home visits for pets who need care in a familiar environment.",
    icon: House,
  },
  {
    title: "Diagnostic Care",
    description:
      "Diagnostic testing and medical assessment to support informed veterinary care.",
    icon: Microscope,
  },
];

const productCategories = [
  {
    title: "Cats & Dogs",
    description: "Nutrition, accessories, toys, and everyday essentials.",
    image: "/imgs/cat_and_dog.jpg",
  },
  {
    title: "Birds & Exotics",
    description: "Bird feeds, specialized seeds, and exotic pet essentials.",
    image: "/imgs/parrots.jpg",
  },
  {
    title: "Farm Animals",
    description: "Animal nutrition, health supplements, and essential supplies.",
    image: "/imgs/petfood.jpg",
  },
];

const values = [
  {
    title: "Expert Veterinary Care",
    description:
      "Led by Vet. Dr. Attiq ur Rehman (DVM), with a focus on professional and compassionate animal care.",
    icon: Stethoscope,
  },
  {
    title: "Quality Products",
    description:
      "A carefully selected range of nutrition, accessories, feeds, and health supplements.",
    icon: ShieldCheck,
  },
  {
    title: "Everything Under One Roof",
    description:
      "Veterinary services and pet supplies together for a more convenient pet care experience.",
    icon: ShoppingBag,
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#FFFCF7]">

      {/* HERO SECTION */}
      <section className="relative flex min-h-[500px] items-center overflow-hidden bg-[#071B2D] md:min-h-[580px]">

        <Image
          src="/imgs/cat_and_dog.jpg"
          alt="Pets Friendly veterinary and pet care"
          fill
          priority
          className="object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071B2D] via-[#071B2D]/90 to-[#071B2D]/35" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
          <div className="max-w-3xl">

            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-[#F5A64B] backdrop-blur-sm">
              <PawPrint size={17} />
              Welcome to Pet's Friendly
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              More Than a Pet Shop,
              <span className="block text-[#E28220]">
                A Place for Better Pet Care.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Your trusted all-in-one destination for veterinary care,
              quality animal nutrition, and premium pet accessories.
              Because every animal deserves a healthier and happier life.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center gap-3 rounded-full bg-[#E28220] px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#033C72]"
              >
                Book a Service
                <ArrowUpRight size={19} />
              </Link>

              <Link
                href="/shop"
                className="inline-flex items-center gap-3 rounded-full border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#033C72]"
              >
                Explore Products
                <ShoppingBag size={19} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

          <div className="relative mx-auto w-full max-w-[550px]">
            <div className="absolute -bottom-5 -left-5 h-full w-full rounded-[32px] bg-[#E28220]/15" />

            <Image
              src="/imgs/docinfo.jpg"
              alt="Veterinary doctor at Pet's Friendly"
              width={600}
              height={600}
              className="relative z-10 h-[380px] w-full rounded-[32px] object-cover shadow-xl md:h-[490px]"
            />

            <div className="absolute -bottom-10  right-5 z-20 max-w-[260px] rounded-2xl bg-white p-5 shadow-xl sm:right-[-20px]">
              <div className="flex items-center gap-3 ">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E28220]/10 text-[#E28220] ">
                  <Award size={26} />
                </div>
                <div>
                  <p className="font-bold text-[#033C72]">
                    Expert Leadership
                  </p>
                  <p className="text-xs text-gray-500">
                    Vet. Dr. Attiq ur Rehman (DVM)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5 md:pt-0">
            <span className="inline-flex rounded-full bg-[#E28220]/10 px-5 py-2 text-sm font-bold text-[#E28220]">
              Who We Are
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#033C72] md:text-4xl">
              Your Trusted Partner in
              <span className="text-[#E28220]"> Animal Care</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Welcome to Pet's Friendly Shop & Veterinary Products, your
              trusted all-in-one destination for comprehensive pet care,
              high-quality animal nutrition, and premium accessories.
              Founded and led by Vet. Dr. Attiq ur Rehman (DVM), our mission
              is to ensure the health, happiness, and well-being of your
              beloved pets and livestock.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              We are a reliable online and walk-in store that bridges the
              gap between expert veterinary medical care and quality pet
              supplies. From premium nutritional food and engaging toys
              to specialized grooming products and health supplements,
              we offer products for cats, dogs, birds, and farm animals.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Veterinary services and pet supplies under one roof",
                "Products for pets, birds, and farm animals",
                "Care guided by veterinary expertise",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-[#E28220]"
                  />
                  <p className="text-sm font-medium leading-6 text-gray-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="bg-[#F7F3EE] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="rounded-full bg-[#E28220]/10 px-5 py-2 text-sm font-bold text-[#E28220]">
              Our Purpose
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-[#033C72] md:text-4xl">
              What Makes Pet's Friendly Different?
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              We bring veterinary expertise, carefully selected products,
              and compassionate service together to make animal care easier.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#033C72]/[0.07] text-[#033C72] transition group-hover:bg-[#E28220] group-hover:text-white">
                    <Icon size={30} />
                  </div>

                  <span className="mt-7 block text-sm font-bold text-[#E28220]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-[#033C72]">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VETERINARY SERVICES */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="rounded-full bg-[#E28220]/10 px-5 py-2 text-sm font-bold text-[#E28220]">
                Professional Care
              </span>

              <h2 className="mt-5 text-3xl font-extrabold text-[#033C72] md:text-4xl">
                Our Veterinary Services
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                We provide a range of clinical and wellness services to
                support your pet's health at every stage of life.
              </p>
            </div>

            <Link
              href="/booking"
              className="inline-flex items-center gap-2 font-bold text-[#E28220] transition hover:gap-4"
            >
              Book a Service
              <ArrowUpRight size={19} />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-[#033C72]/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#E28220]/50 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E28220]/10 text-[#E28220] transition group-hover:bg-[#E28220] group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#033C72]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {service.description}
                  </p>

                  <Link
                    href="/booking"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#E28220] transition hover:gap-3"
                  >
                    Learn More
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
     

      {/* FOUNDER MESSAGE */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 rounded-[32px] bg-[#033C72] p-8 md:grid-cols-[1fr_1.5fr] md:p-14">

          <div className="flex justify-center">
            <div className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-[#E28220] bg-white/10 text-white md:h-48 md:w-48">
              <PawPrint size={85} strokeWidth={1.3} />
            </div>
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#F5A64B]">
              A Commitment to Animal Welfare
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl">
              Care, Compassion & Expertise
            </h2>

            <p className="mt-5 text-base leading-8 text-white/75">
              Guided by Dr. Attiq ur Rehman's professional expertise
              and passion for animal welfare, we treat every animal
              with care, compassion, and precision. We are committed
              to supporting you throughout your pet parenting journey
              with reliable guidance, veterinary services, and quality
              products to help your animals thrive.
            </p>

            <p className="mt-6 font-bold text-[#F5A64B]">
              Vet. Dr. Attiq ur Rehman (DVM)
            </p>
            <p className="mt-1 text-sm text-white/60">
              Founder – Pet's Friendly Shop & Veterinary Products
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      
<section className="px-6 pb-20">
  <div
    className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-cover bg-center px-7 py-16 text-center md:px-16 md:py-24"
    style={{
      backgroundImage: "url('/imgs/dogs_banner1.jpg')",
    }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-[#071B2D]/80" />

    {/* Content */}
    <div className="relative z-10 mx-auto max-w-2xl">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E28220] text-white">
        <Heart size={30} />
      </div>

      <h2 className="mt-6 text-3xl font-extrabold text-white md:text-4xl">
        Your Pet Deserves the Best Care
      </h2>

      <p className="mt-5 leading-7 text-white/80">
        Whether you need veterinary assistance or quality
        products for your animals, Pet's Friendly is here
        to help you every step of the way.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[#E28220] px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#033C72]"
        >
          Contact Us
          <ArrowUpRight size={19} />
        </Link>

        <Link
          href="/shop"
          className="inline-flex items-center gap-2 rounded-full border border-white/50 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#033C72]"
        >
          Explore Shop
          <ShoppingBag size={19} />
        </Link>
      </div>
    </div>
  </div>
</section>


    </main>
  );
}
