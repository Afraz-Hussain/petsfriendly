
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/page";
import Footer from "@/components/footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PetsFriendly | Pet & Veterinary Products",
  description: "Discover quality pet supplies and veterinary products at PetsFriendly.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header/>

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
