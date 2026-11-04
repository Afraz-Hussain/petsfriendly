"use client";

import React, { useState } from "react";
import {
  CalendarDays,
  Clock,
  PawPrint,
  User,
  Stethoscope,
  MessageCircle,
  MapPin,
  Heart,
  CheckCircle2,
  ArrowRight,
  ClipboardList,
} from "lucide-react";

const WHATSAPP_NUMBER = "923014288772";

const services = [
  "Medical Consultation",
  "Vaccination",
  "Deworming",
  "Pet Grooming",
  "Surgery",
  "Home Visit",
  "Diagnostic Testing",
  "Other",
];

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    petName: "",
    petType: "Dog",
    service: "Medical Consultation",
    date: "",
    time: "",
    message: "",
  });

  const [error, setError] = useState("");

  const updateForm = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setError("");
  };

  const handleBooking = (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.petName.trim() ||
      !form.date ||
      !form.time
    ) {
      setError("Please complete all required fields before booking.");
      return;
    }

    // Format YYYY-MM-DD manually without using Date().
    const [year, month, day] = form.date.split("-");

    const formattedDate = `${Number(day)} ${
      months[Number(month) - 1]
    } ${year}`;

    const whatsappMessage = `
🐾 *NEW APPOINTMENT REQUEST*

Hello Dr. Attiq ur Rehman,

I would like to book a veterinary appointment.

👤 *Owner Details*
Name: ${form.name}
Phone: ${form.phone}

🐶 *Pet Details*
Pet Name: ${form.petName}
Pet Type: ${form.petType}

🩺 *Appointment Details*
Service: ${form.service}
Date: ${formattedDate}
Time: ${form.time}

📝 *Additional Information*
${form.message || "Not provided"}

Please confirm my appointment. Thank you!
    `;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full rounded-xl border border-[#E8E2D8] bg-[#FFFCF7] px-4 py-3.5 text-sm text-[#1E293B] outline-none transition placeholder:text-gray-400 focus:border-[#E28220] focus:ring-2 focus:ring-[#E28220]/10";

  const labelClass = "mb-2 block text-sm font-semibold text-[#1E293B]";

  return (
    <main className="min-h-screen bg-[#FFFCF7]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#071B2D] px-6 py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/imgs/cat_and_dog.jpg')] bg-cover bg-center opacity-20" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071B2D] via-[#071B2D]/90 to-[#071B2D]/60" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-orange-300">
              <CalendarDays size={16} />
              Easy Online Appointment Booking
            </span>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Book an Appointment
              <span className="block text-[#E28220]">
                for Your Pet
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-300 md:text-lg">
              Your pet deserves the best care. Schedule a visit with
              our veterinary doctor in just a few simple steps.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[#E28220]" size={18} />
                Easy Booking
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[#E28220]" size={18} />
                Direct WhatsApp Contact
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[#E28220]" size={18} />
                Professional Pet Care
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_360px]">

          {/* Booking Form */}
          <div className="rounded-3xl border border-[#EAE4DA] bg-white p-6 shadow-[0_12px_45px_rgba(30,41,59,0.06)] md:p-10">
            <div className="mb-9">
              <span className="text-sm font-bold uppercase tracking-widest text-[#E28220]">
                Appointment Form
              </span>

              <h2 className="mt-2 text-2xl font-bold text-[#033C72] md:text-3xl">
                Tell Us About Your Pet
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Fill in the details below to request your appointment.
              </p>
            </div>

            <form onSubmit={handleBooking} className="space-y-8">

              {/* Owner Details */}
              <div>
                <h3 className="mb-5 flex items-center gap-2 font-bold text-[#1E293B]">
                  <User className="text-[#E28220]" size={20} />
                  Owner Information
                </h3>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className={labelClass}>
                      Your Full Name *
                    </label>

                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => updateForm("name", e.target.value)}
                      placeholder="Enter your name"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      WhatsApp Number *
                    </label>

                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => updateForm("phone", e.target.value)}
                      placeholder="03XX XXXXXXX"
                      className={inputClass}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Pet Details */}
              <div>
                <h3 className="mb-5 flex items-center gap-2 font-bold text-[#1E293B]">
                  <PawPrint className="text-[#E28220]" size={20} />
                  Pet Information
                </h3>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className={labelClass}>
                      Pet Name *
                    </label>

                    <input
                      type="text"
                      value={form.petName}
                      onChange={(e) => updateForm("petName", e.target.value)}
                      placeholder="Your pet's name"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      Pet Type *
                    </label>

                    <select
                      value={form.petType}
                      onChange={(e) => updateForm("petType", e.target.value)}
                      className={inputClass}
                    >
                      <option>Dog</option>
                      <option>Cat</option>
                      <option>Bird</option>
                      <option>Rabbit</option>
                      <option>Farm Animal</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Veterinary Service */}
              <div>
                <h3 className="mb-5 flex items-center gap-2 font-bold text-[#1E293B]">
                  <Stethoscope className="text-[#E28220]" size={20} />
                  Select Veterinary Service
                </h3>

                <div>
                  <label className={labelClass}>
                    What service do you need? *
                  </label>

                  <select
                    value={form.service}
                    onChange={(e) => updateForm("service", e.target.value)}
                    className={inputClass}
                  >
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date and Time */}
              <div>
                <h3 className="mb-5 flex items-center gap-2 font-bold text-[#1E293B]">
                  <CalendarDays className="text-[#E28220]" size={20} />
                  Choose Date & Time
                </h3>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className={labelClass}>
                      Appointment Date *
                    </label>

                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => updateForm("date", e.target.value)}
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      Available Time Slots *
                    </label>

                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          type="button"
                          key={slot}
                          onClick={() => updateForm("time", slot)}
                          className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                            form.time === slot
                              ? "border-[#E28220] bg-[#E28220] text-white"
                              : "border-[#E8E2D8] bg-[#FFFCF7] text-[#1E293B] hover:border-[#E28220] hover:text-[#E28220]"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label className={labelClass}>
                  Additional Details (Optional)
                </label>

                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => updateForm("message", e.target.value)}
                  placeholder="Describe your pet's symptoms or any other information..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Error Message */}
              {error && (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                  {error}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#E28220] px-6 py-4 font-bold text-white shadow-lg shadow-orange-200/50 transition hover:-translate-y-0.5 hover:bg-[#cc7015]"
              >
                <MessageCircle size={20} />
                Book Appointment on WhatsApp
                <ArrowRight size={18} />
              </button>

              <p className="text-center text-xs leading-5 text-gray-400">
                Your appointment request will be sent directly to our
                veterinary team through WhatsApp. The team will contact
                you to confirm availability.
              </p>
            </form>
          </div>

          {/* Side Information */}
          <aside className="space-y-6">

            {/* Doctor Information */}
            <div className="overflow-hidden rounded-3xl bg-[#071B2D] p-7 text-white">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E28220]">
                <Stethoscope size={24} />
              </div>

              <p className="text-sm font-semibold text-orange-300">
                YOUR PET&apos;S HEALTH MATTERS
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Expert Veterinary Care
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-300">
                Book a consultation with Vet. Dr. Attiq ur Rehman
                (DVM) for your pet&apos;s health and well-being.
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <Heart className="shrink-0 text-[#E28220]" size={22} />

                <p className="text-sm text-gray-200">
                  Compassionate care for every animal.
                </p>
              </div>
            </div>

            {/* Booking Information */}
            <div className="rounded-3xl border border-[#EAE4DA] bg-white p-7">
              <h3 className="mb-5 text-lg font-bold text-[#033C72]">
                Booking Information
              </h3>

              <div className="space-y-5">
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#E28220]">
                    <Clock size={20} />
                  </div>

                  <div>
                    <p className="font-semibold text-[#1E293B]">
                      Flexible Scheduling
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Request a suitable appointment time.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#E28220]">
                    <MessageCircle size={20} />
                  </div>

                  <div>
                    <p className="font-semibold text-[#1E293B]">
                      WhatsApp Confirmation
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Our team will contact you to confirm.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#E28220]">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="font-semibold text-[#1E293B]">
                      Visit Our Clinic
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Contact us for clinic location and directions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Before Your Visit */}
            <div className="rounded-3xl border border-orange-100 bg-[#F7F3EE] p-7">
              <div className="flex items-center gap-3">
                <ClipboardList className="text-[#E28220]" size={23} />

                <h3 className="font-bold text-[#033C72]">
                  Before Your Visit
                </h3>
              </div>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-600">
                <li>
                  • Keep your pet&apos;s previous medical records ready.
                </li>

                <li>
                  • Mention any symptoms in the booking form.
                </li>

                <li>
                  • Wait for WhatsApp confirmation before visiting.
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}