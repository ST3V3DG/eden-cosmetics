import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const switzer = localFont({
	src: "../public/fonts/Switzer-Regular.woff2",
});

export const metadata: Metadata = {
	title: "EDEN Cosmetics",
	description: "Medication Made Affordable Without The Insurance",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${switzer.className} antialiased`}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
