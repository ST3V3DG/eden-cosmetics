import { Calendar, CheckCircle, Pill } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import GradientButton from "@/components/ui/gradient-button";

export default function WeightLossSection() {
	const features = [
		{
			icon: Calendar,
			text: "Same-day doctor visits and prescriptions",
		},
		{
			icon: Pill,
			text: "Access Ozempic®, Wegovy®, Zepound®, and other GLP-1s",
		},
		{
			icon: CheckCircle,
			text: "FSA & HSA eligible with all plans",
		},
	];

	return (
		<section className="bg-gray-50 py-16 md:py-20">
			<div className="max-w-5xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left Column - Content */}
					<div className="space-y-8">
						{/* Heading */}
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
							Lose weight with a plan made just for you.
						</h2>

						{/* Feature List */}
						<ul className="space-y-3">
							{features.map((feature, index) => (
								<li key={index} className="flex items-center gap-3 text-zinc-900/80 font-medium">
									<feature.icon className="size-4 shrink-0 text-zinc-900/80" />
									<span>{feature.text}</span>
								</li>
							))}
						</ul>

						{/* Buttons */}
						<div className="flex flex-wrap items-center gap-4">
							<Button size="default" className="hidden md:inline-flex">
								Get started
							</Button>
							<GradientButton>See if you're eligible</GradientButton>
						</div>

						{/* Disclaimer */}
						<p className="text-sm text-muted-foreground">
							*Members reported an average weight loss of 29.3 lbs in the first six months based on self
							reported data from 111 members while on GLP-1 injections, combined with diet and exercise.
						</p>
					</div>

					{/* Right Column - Image */}
					<div className="relative">
						<Image
							alt="Fitness and strength training"
							className="w-full h-auto object-contain rounded-2xl"
							height={400}
							src={"/images/gym.jpg"}
							width={400}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
