import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	className?: string;
}

const GradientButton = ({ children, className, ...props }: GradientButtonProps) => {
	return (
		<div className="relative rounded-full p-[2px] bg-linear-to-r from-[#84a9fa] via-[#fb6fec] via-[#fba69e] via-[#fdd4a3] via-[#fb6fec] to-[#84a9fa] cursor-pointer transition-all duration-500 bg-size-[200%_100%] hover:bg-size-[200%_100%] hover:animate-gradient-shift">
			<button
				className={cn(
					"flex items-center gap-2 bg-background rounded-full px-8 py-3 text-sm font-bold w-full justify-center",
					className,
				)}
				{...props}
			>
				{children}
			</button>
		</div>
	);
};

export default GradientButton;
