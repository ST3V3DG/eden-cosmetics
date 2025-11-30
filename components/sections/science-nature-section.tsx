import { Atom, FlaskConical, Leaf, Rabbit, TreePine, Wheat } from "lucide-react";
import FeatureBadge from "@/components/features/feature-badge";
import { Button } from "@/components/ui/button";
import GradientButton from "@/components/ui/gradient-button";

export default function ScienceNatureSection() {
	const features = [
		{
			icon: Rabbit,
			label: (
				<>
					Cruelty
					<br />
					Free
				</>
			),
		},
		{
			icon: TreePine,
			label: (
				<>
					Eco
					<br />
					Friendly
				</>
			),
		},
		{
			icon: Leaf,
			label: (
				<>
					Paraben
					<br />
					Free
				</>
			),
		},
		{
			icon: FlaskConical,
			label: (
				<>
					Silicone
					<br />
					Free
				</>
			),
		},
		{
			icon: Atom,
			label: (
				<>
					Sulphate
					<br />
					Free
				</>
			),
		},
		{
			icon: Wheat,
			label: (
				<>
					Gluten
					<br />
					Free
				</>
			),
		},
	];

	return (
		<section className="bg-gray-50 py-28">
			<div className="max-w-5xl mx-auto px-6">
				<div className="space-y-12">
					{/* Heading and Buttons */}
					<div className="space-y-8">
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-900 text-center max-w-2xl mx-auto">
							Discover the harmony of science and nature.
						</h2>

						<div className="flex flex-wrap items-center justify-center gap-4">
							<Button size="lg" className="px-8">
								Get started
							</Button>
							<GradientButton>See if you're eligible</GradientButton>
						</div>
					</div>

					{/* Feature Badges */}
					<ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 list-none">
						{features.map((feature, index) => (
							<FeatureBadge key={index} icon={feature.icon} label={feature.label} />
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
