import Image from "next/image";
import Link from "next/link";
import GradientButton from "@/components/ui/gradient-button";
import type { Product } from "@/data/products";

type ProductCardProps = {
	product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
	return (
		<div className="group">
			{/* Product Image with Shadow */}
			<div className="aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6">
				{product.images[0] ? (
					<Image
						src={product.images[0]}
						alt={product.title}
						className="size-full object-cover"
						height={400}
						width={400}
					/>
				) : (
					<div className="size-full bg-muted flex items-center justify-center">
						<span className="text-muted-foreground">No image</span>
					</div>
				)}
			</div>

			{/* Product Details - Centered */}
			<div className="text-center space-y-4">
				<div>
					<h3 className="text-2xl font-semibold text-foreground mb-2">{product.title}</h3>
					<p className="text-lg font-medium text-foreground">
						{product.currencyCode === "USD" ? "$" : product.currencyCode}
						{product.price.toFixed(2)} <span className="text-muted-foreground font-normal">per month</span>
					</p>
				</div>

				<GradientButton className="w-full">
					<Link className="size-full" href={`/product/${product.handle}`}>
						Get Started
					</Link>
				</GradientButton>
			</div>
		</div>
	);
}
