export type Product = {
	id: string;
	handle: string;
	title: string;
	description: string;
	price: number;
	compareAtPrice?: number;
	currencyCode: string;
	images: string[];
	details?: string;
	sideEffects?: string;
	shipping?: string;
};

export const products: Product[] = [
	{
		id: "1",
		handle: "weight-loss-program",
		title: "Weight Loss Program",
		description: "Comprehensive weight loss solution with personalized support",
		price: 149,
		compareAtPrice: 199,
		currencyCode: "USD",
		images: [
			"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop",
			"https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=800&fit=crop",
		],
		details:
			"Our comprehensive weight loss program combines science-backed methods with personalized support to help you achieve your goals.\n\nIncludes monthly consultations, custom meal plans, and ongoing support from our team of experts.",
		sideEffects:
			"May cause temporary changes in appetite. Consult with your healthcare provider for potential side effects.",
		shipping: "Free standard shipping. Delivery in 3-5 business days.",
	},
	{
		id: "2",
		handle: "anti-aging-cleanser",
		title: "Anti-Aging Cleanser",
		description: "Gentle cleanser that helps reduce signs of aging",
		price: 49,
		compareAtPrice: 69,
		currencyCode: "USD",
		images: [
			"https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=800&fit=crop",
			"https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&h=800&fit=crop",
		],
		details:
			"Advanced anti-aging formula that gently cleanses while delivering powerful age-defying ingredients.\n\nHelps reduce fine lines, improve skin texture, and promote a youthful glow.",
		sideEffects: "For external use only. Discontinue use if irritation occurs.",
		shipping: "Standard shipping available. Delivery times may vary.",
	},
	{
		id: "3",
		handle: "hair-growth-serum",
		title: "Hair Growth Serum",
		description: "Promote healthy hair growth with our advanced formula",
		price: 89,
		compareAtPrice: 119,
		currencyCode: "USD",
		images: [
			"https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&h=800&fit=crop",
			"https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&h=800&fit=crop",
		],
		details:
			"Clinically proven hair growth serum that strengthens and nourishes hair follicles.\n\nResults visible in 8-12 weeks with consistent use. Safe for all hair types.",
		sideEffects: "May cause scalp sensitivity in rare cases. Perform patch test before use.",
		shipping: "Free standard shipping. Delivery in 3-5 business days.",
	},
	{
		id: "4",
		handle: "strength-supplement",
		title: "Strength Supplement",
		description: "Build muscle and increase strength naturally",
		price: 79,
		currencyCode: "USD",
		images: [
			"https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=800&h=800&fit=crop",
			"https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&h=800&fit=crop",
		],
		details:
			"Premium strength supplement formulated to support muscle growth and recovery.\n\nContains essential amino acids and natural ingredients to enhance your fitness journey.",
		sideEffects: "Consult with your healthcare provider before use, especially if you have any medical conditions.",
		shipping: "Standard shipping available. Delivery in 3-5 business days.",
	},
	{
		id: "5",
		handle: "mood-enhancer",
		title: "Mood Enhancer",
		description: "Natural mood support for daily wellness",
		price: 59,
		currencyCode: "USD",
		images: [
			"https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=800&fit=crop",
			"https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&h=800&fit=crop",
		],
		details:
			"Natural mood support supplement with carefully selected ingredients to promote emotional wellness.\n\nHelps maintain positive mood and supports stress management.",
		sideEffects: "Not a substitute for professional mental health care. Consult your healthcare provider.",
		shipping: "Free standard shipping. Delivery in 3-5 business days.",
	},
	{
		id: "6",
		handle: "nad-supplement",
		title: "NAD+ Supplement",
		description: "Boost cellular energy and healthy aging",
		price: 129,
		compareAtPrice: 159,
		currencyCode: "USD",
		images: [
			"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=800&fit=crop",
			"https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&h=800&fit=crop",
		],
		details:
			"Advanced NAD+ supplement to support cellular energy production and healthy aging.\n\nPromotes vitality, cognitive function, and overall wellness at the cellular level.",
		sideEffects: "May cause mild digestive changes initially. Consult with your healthcare provider.",
		shipping: "Free standard shipping. Delivery in 3-5 business days.",
	},
];

export const getProductByHandle = (handle: string): Product | undefined => {
	return products.find((p) => p.handle === handle);
};
