import type { LucideIcon } from "lucide-react";

type FeatureBadgeProps = {
	icon: LucideIcon;
	label: React.ReactNode;
};

export default function FeatureBadge({ icon: Icon, label }: FeatureBadgeProps) {
	return (
		<li className="bg-white items-center flex-col justify-center text-center flex rounded-2xl gap-4 p-8 shadow-[2px_4px_12px_rgba(0,0,0,0.08)]">
			<Icon className="size-20 text-zinc-900" strokeWidth={1.5} />
			<div className="text-zinc-900 font-medium">{label}</div>
		</li>
	);
}
