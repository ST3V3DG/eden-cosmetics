import { Star } from "lucide-react";

type RatingBadgeProps = {
	rating: number;
	reviews: number;
};

export default function RatingBadge({ rating, reviews }: RatingBadgeProps) {
	return (
		<div className="inline-flex items-center gap-2 text-sm bg-white p-2 rounded-full shadow-[2px_4px_12px_rgba(0,0,0,0.08)]">
			<div className="flex items-center gap-1.5 font-medium">
				<div className="flex items-center justify-center size-6 rounded-full bg-emerald-500">
					<Star className="size-3.5 text-white fill-white" />
				</div>
				<span className="text-foreground">{rating} Average Rating</span>
			</div>
			<span className="text-muted-foreground">•</span>
			<span className="text-foreground font-medium">{reviews} Reviews</span>
		</div>
	);
}
