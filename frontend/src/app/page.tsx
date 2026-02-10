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

export default function Home() {
  return (
    <main>
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
