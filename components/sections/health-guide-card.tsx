import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type HealthGuideCardProps = {
	image: string;
	description: string;
	category: string;
	href: string;
};

export default function HealthGuideCard({ image, description, category, href }: HealthGuideCardProps) {
	return (
		<div className="bg-white rounded-3xl shadow-[2px_4px_12px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col">
			<div className="overflow-hidden">
				<Image
					alt={category}
					className="w-full h-48 object-cover rounded-3xl"
					height={400}
					src={image}
					width={400}
				/>
			</div>
			<div className="flex flex-col gap-8 p-6 flex-1">
				<p className="text-zinc-900/80 font-medium">{description}</p>
				<Link
					href={href}
					className="flex items-center justify-between py-4 px-6 border-2 border-zinc-900/13 rounded-full hover:border-zinc-900/30 transition-colors mt-auto"
				>
					<span className="font-medium text-zinc-900">{category}</span>
					<ChevronRight className="size-4 text-zinc-900/70" />
				</Link>
			</div>
		</div>
	);
}
