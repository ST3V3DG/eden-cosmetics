import { Button } from "@/components/ui/button";

type PricingCardProps = {
	price: number;
	period: string;
	description: string;
};

export default function PricingCard({ price, period, description }: PricingCardProps) {
	return (
		<div className="flex items-center justify-between gap-4">
			<div>
				<div className="text-3xl font-bold text-foreground">
					${price}
					<span className="text-base font-normal">/{period}</span>
				</div>
				<p className="text-sm text-muted-foreground mt-0.5">*{description}</p>
			</div>
			<Button size="lg" className="px-10">
				Get Started
			</Button>
		</div>
	);
}
