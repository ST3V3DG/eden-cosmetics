import type { LucideIcon } from "lucide-react";

type FeatureItemProps = {
	icon: LucideIcon;
	text: string;
};

export default function FeatureItem({ icon: Icon, text }: FeatureItemProps) {
	return (
		<div className="flex items-center gap-3">
			<Icon className="sike-5 text-zinc-900/80 shrink-0" />
			<span className="text-zinc-900/80 font-medium">{text}</span>
		</div>
	);
}
