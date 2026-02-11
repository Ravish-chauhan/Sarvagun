import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NextUIProvider } from "@nextui-org/react";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sarvagun Enterprises | Premium Medical Equipment & Hospital Supplies",
    template: "%s | Sarvagun Enterprises"
  },
  description: "Explore Sarvagun Enterprises for top-tier medical equipment, surgical instruments, hospital furniture, and diagnostic tools. Trusted by 500+ hospitals across India.",
  keywords: ["medical equipment", "surgical supplies", "hospital furniture", "diagnostic tools", "Sarvagun Enterprises", "medical consumables", "ICU equipment", "orthopedic implants"],
  authors: [{ name: "Sarvagun Enterprises" }],
  creator: "Sarvagun Enterprises",
  metadataBase: new URL('https://sarvagunenterprises.com'),
  icons: {
    icon: "/logo-use.svg",
    apple: "/logo-use.svg",
  },
  openGraph: {
    title: "Sarvagun Enterprises | Revolutionizing Healthcare Infrastructure",
    description: "Your one-stop solution for verified medical and surgical supplies. Equipping hospitals with excellence.",
    url: "https://sarvagunenterprises.com",
    siteName: "Sarvagun Enterprises",
    images: [
      {
        url: "/logo-use.svg",
        width: 800,
        height: 600,
        alt: "Sarvagun Enterprises Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarvagun Enterprises",
    description: "Premium medical equipment and hospital supplies.",
    images: ["/logo-use.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >

        <Header />
        <main>
          {children}
        </main>
        <Footer />

      </body>
    </html>
  );
}
