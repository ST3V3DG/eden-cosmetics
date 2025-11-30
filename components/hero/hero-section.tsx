import { DollarSign, Syringe, Truck } from "lucide-react";
import FeatureItem from "./feature-item";
import ImageMarquee from "./image-marquee";
// import InfoCard from "./InfoCard";
import PricingCard from "./pricing-card";
import RatingBadge from "./rating-badge";

const column1Images = [
	"/images/product_1.jpg",
	"/images/product_7.jpg",
	"/images/product_5.jpg",
	"/images/product_6.jpg",
];
const column2Images = [
	"/images/product_4.jpg",
	"/images/product_3.jpg",
	"/images/product_8.jpg",
	"/images/product_2.jpg",
];

export default function HeroSection() {
	return (
		<section className="bg-background h-screen pt-16">
			<div className="max-w-5xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-16">
					{/* Left Column - Content */}
					<div className="flex flex-col">
						{/* Rating Badge */}
						<div className="pt-8 md:pt-12 lg:pt-0 mb-2">
							<RatingBadge rating={4.5} reviews={453} />
						</div>

						{/* Main Heading */}
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-2">
							Compounded Semaglutide for Weight Loss
						</h1>

						{/* Feature List */}
						<div className="space-y-1 border-b pb-8 border-border mb-2">
							<FeatureItem icon={Syringe} text="Ingredient as Wegovy® & Ozempic®" />
							<FeatureItem icon={DollarSign} text="No hidden fees" />
							<FeatureItem icon={Truck} text="Free shipping" />
						</div>

						{/* Pricing */}
						<PricingCard price={296} period="mo" description="No matter the dose" />

						{/* Info Card */}
						{/* <InfoCard
							image="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=100&h=100&fit=crop"
							title="Is This Right for You?"
							linkText="Find Out"
						/> */}
					</div>

					{/* Right Column - Image Marquee */}
					<div className="relative overflow-hidden">
						{/* Top fade gradient */}
						<div className="absolute -top-2 left-0 right-0 h-8 bg-linear-to-b from-background to-transparent pointer-events-none hidden md:block z-10" />
						<div className="grid md:grid-cols-2 gap-4">
							<ImageMarquee className="hidden md:block" images={column1Images} />
							<ImageMarquee images={column2Images} />
						</div>
						{/* Bottom fade gradient */}
						<div className="absolute -bottom-2 left-0 right-0 h-8 bg-linear-to-t from-background to-transparent pointer-events-none hidden md:block" />
					</div>
				</div>
			</div>
		</section>
	);
}
