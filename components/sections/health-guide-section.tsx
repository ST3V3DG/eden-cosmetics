import { Button } from "@/components/ui/button";
import GradientButton from "@/components/ui/gradient-button";
import HealthGuideCard from "./health-guide-card";

const treatments = [
	{
		image: "/images/product_9.jpg",
		description: "Explore personalized weight loss treatments, plans, and advice.",
		category: "Weight Loss",
		href: "#",
	},
	{
		image: "/images/product_10.jpg",
		description: "Boost cellular energy and learn about healthy aging treatments.",
		category: "Healthy Aging",
		href: "#",
	},
	{
		image: "/images/product_3.jpg",
		description: "Regrow your hair for a visibly thicker and fuller look.",
		category: "Hair Growth",
		href: "#",
	},
	{
		image: "/images/product_4.jpg",
		description: "Balance and restore your hormones for maximum vitality.",
		category: "Women's Hormones",
		href: "#",
	},
];

export default function HealthGuideSection() {
	return (
		<section className="py-28 bg-gray-50">
			<div className="max-w-5xl mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-900 mb-8 max-w-2xl mx-auto">
						Your guide to health and wellness starts here.
					</h2>
					<div className="flex items-center justify-center gap-4 flex-wrap">
						<Button size="lg" className="bg-zinc-900 hover:bg-zinc-800 text-white">
							Get started
						</Button>
						<GradientButton>See if you're eligible</GradientButton>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{treatments.map((treatment, index) => (
						<HealthGuideCard key={index} {...treatment} />
					))}
				</div>
			</div>
		</section>
	);
}
