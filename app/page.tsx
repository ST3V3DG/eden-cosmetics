import Footer from "@/components/footer";
import HeroSection from "@/components/hero/hero-section";
import Navbar from "@/components/navbar";
import FAQSection from "@/components/sections/faq-section";
import HealthGuideSection from "@/components/sections/health-guide-section";
import ProductCarouselSection from "@/components/sections/product-carousel-section";
import ProductsSection from "@/components/sections/products-section";
import ScienceNatureSection from "@/components/sections/science-nature-section";
import WeightLossSection from "@/components/sections/weight-loss-section";

export default function Home() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<ProductsSection />
			<WeightLossSection />
			<ProductCarouselSection />
			<ScienceNatureSection />
			<FAQSection />
			<HealthGuideSection />
			<Footer />
		</>
	);
}
