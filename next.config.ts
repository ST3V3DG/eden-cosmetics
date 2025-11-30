import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
				pathname: "/photo-**",
			},
			{
				protocol: "https",
				hostname: "static.legitscript.com",
				port: "",
				pathname: "/seals/**",
			},
		],
	},
};

export default nextConfig;
