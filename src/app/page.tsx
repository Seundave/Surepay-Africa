import Brands from "@/components/Brands";
import Choose from "@/components/Choose/Choose";
import Faq from "@/components/FAQ/faq";
import Features from "@/components/Features/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials/Testimonials";
import Work from "@/components/Work/Work";

export default function Home() {
  return (
    <div>
      <Hero />
      <Brands />
      <Features />
      <Work />
      <Choose />
      <Testimonials />
      <Faq />
    </div>
  );
}
