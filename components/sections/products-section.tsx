import ProductCard from "@/components/products/product-card";
import { products } from "@/data/products";

export default function ProductsSection() {
	return (
		<section className="py-20 px-4 bg-background">
			<div className="max-w-5xl px-6 mx-auto">
				{/* Section Header */}
				<div className="text-center mb-16">
					<p className="text-sm text-muted-foreground uppercase tracking-wider mb-3">OUR MEDS</p>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground max-w-2xl mx-auto leading-tight">
						Medication Made Affordable Without The Insurance
					</h2>
				</div>

				{/* Products Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</section>
	);
}
