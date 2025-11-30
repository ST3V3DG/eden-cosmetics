"use client";

import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";

type ImageMarqueeProps = {
	images: string[];
	reverse?: boolean;
	offset?: number;
	className?: string;
};

export default function ImageMarquee({ images, reverse = false, className }: ImageMarqueeProps) {
	// Duplicate images for seamless loop
	const duplicatedImages = [...images, ...images];
	const isMobile = useIsMobile();

	return (
		<Marquee
			className={cn("max-h-[calc(100dvh-4rem)]", className)}
			pauseOnHover
			reverse={reverse}
			vertical={!isMobile}
		>
			{duplicatedImages.map((image, index) => (
				<Image
					alt={`Placeholder ${index}`}
					className="size-full object-cover rounded-lg"
					height={400}
					key={index}
					src={image}
					width={400}
				/>
			))}
		</Marquee>
	);
}
