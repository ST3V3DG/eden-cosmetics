import GradientButton from "@/components/ui/gradient-button";

type CarouselProductCardProps = {
	title: string;
	price: string;
	priceLabel: string;
	backgroundImage: string;
	backgroundColor: string;
	textPosition?: "top" | "bottom";
	showOverlay?: boolean;
};

export default function CarouselProductCard({
	title,
	price,
	priceLabel,
	backgroundImage,
	backgroundColor,
	textPosition = "bottom",
	showOverlay = true,
}: CarouselProductCardProps) {
	return (
		<div className="relative h-128 sm:h-160 md:h-192 rounded-3xl overflow-hidden group">
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
				style={{ backgroundImage: `url(${backgroundImage})` }}
			/>

			{/* Overlay */}
			{showOverlay && <div className={`absolute inset-0 ${backgroundColor} opacity-20`} />}

			{/* Content */}
			<div
				className={`relative h-full flex flex-col ${
					textPosition === "top" ? "justify-start pt-8 md:pt-12" : "justify-end pb-8 md:pb-12"
				} px-6 md:px-10 text-white z-10`}
			>
				<div className="space-y-4 md:space-y-6">
					<div className="space-y-2">
						<p className="text-sm md:text-base font-medium opacity-90">{priceLabel}</p>
						<p className="text-3xl md:text-4xl lg:text-5xl font-bold">{price}</p>
					</div>

					<h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold max-w-md">{title}</h3>

					<GradientButton className="w-full md:w-auto px-8 py-3">Get Started</GradientButton>
				</div>
			</div>
		</div>
	);
}
