import { ArrowRight } from "lucide-react";
import Image from "next/image";

type InfoCardProps = {
	image: string;
	title: string;
	linkText: string;
};

export default function InfoCard({ image, title, linkText }: InfoCardProps) {
	return (
		<div className="bg-card rounded-2xl p-4 flex items-center gap-4 shadow-[2px_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,0.12)] transition-shadow cursor-pointer">
			<div className="size-16 bg-muted rounded-xl shrink-0">
				<Image alt="" className="size-full object-cover rounded-xl" height={40} src={image} width={40} />
			</div>
			<div className="flex-1">
				<h3 className="text-foreground font-medium mb-1">{title}</h3>
				<div className="flex items-center gap-1 text-sm font-medium">
					<div className="size-5 rounded-full bg-foreground flex items-center justify-center">
						<ArrowRight className="size-3 text-background" />
					</div>
					<span>{linkText}</span>
				</div>
			</div>
		</div>
	);
}
