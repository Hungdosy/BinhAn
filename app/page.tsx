import { Navigation } from "@/components/navigation";
import { HeroCarousel } from "@/components/hero-carousel";
import { About } from "@/components/about";
import { FeaturedProducts } from "@/components/featured-products";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-background">
      <Navigation />
      <HeroCarousel />
      <About />
      <FeaturedProducts />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
