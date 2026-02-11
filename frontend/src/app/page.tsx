import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import ProductShowcaseSection from "@/components/ProductShowcaseSection";
import ShopPromoSection from "@/components/ShopPromoSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import AboutUsSection from "@/components/AboutUsSection";
import FeaturedProductsSection from "@/components/FeaturedProductsSection";
import StatsSection from "@/components/StatsSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import ParallaxSection from "@/components/ParallaxSection";
import BrandMarqueeSection from "@/components/BrandMarqueeSection";

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sarvagun Enterprises",
  "url": "https://sarvagunenterprises.com",
  "logo": "https://sarvagunenterprises.com/logo-use.svg",
  "description": "Wholesale supplier of premium medical equipment, surgical instruments, hospital furniture, and diagnostic tools. Trusted by 500+ hospitals across India.",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-9555088558",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-7355229509",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "H No.58-Kh-No-359/1 Ward-Bharwara, Malhaur, Mohalla-Nizampur",
    "addressLocality": "Lucknow",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "226028",
    "addressCountry": "IN"
  },
  "sameAs": []
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Sarvagun Enterprises",
  "image": "https://sarvagunenterprises.com/logo-use.svg",
  "url": "https://sarvagunenterprises.com",
  "telephone": "+91-9555088558",
  "email": "sales@sarvagunenterprises.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "H No.58-Kh-No-359/1 Ward-Bharwara, Malhaur, Mohalla-Nizampur",
    "addressLocality": "Lucknow",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "226028",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "areaServed": {
    "@type": "Country",
    "name": "India"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of medical products do you supply?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We supply a wide range of medical and surgical products, including consumables, surgical and OT supplies, injectables, hospital chemicals, orthopaedic instruments, and essential hospital equipment."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with hospitals, clinics, and distributors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We work with hospitals, clinics, diagnostic centers, medical stores, and healthcare distributors for wholesale and bulk supply requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What is your typical delivery timeline for bulk orders?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Delivery timelines depend on product availability and order size. Most bulk orders are processed and dispatched within a standard turnaround period after order confirmation."
      }
    },
    {
      "@type": "Question",
      "name": "Do you supply equipment for entire hospital setups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We support complete hospital and clinic setups by supplying products across multiple categories and assisting with requirement-based sourcing."
      }
    },
    {
      "@type": "Question",
      "name": "How can I enquire about a product or request a quotation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can enquire through our website, WhatsApp, or contact details provided. Our team will assist you with availability and pricing."
      }
    }
  ]
};

export default function Home() {
  return (
    <main>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HeroSection />
      <AboutUsSection />
      <BrandMarqueeSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <StatsSection />
      <HowWeWorkSection />
      <ProductShowcaseSection />
      {/* <ShopPromoSection /> */}
      <ParallaxSection />
      <TestimonialSection />
      <ContactSection />
      <FAQSection />
      {/* <WhyChooseUsSection /> */}
    </main>
  );
}
