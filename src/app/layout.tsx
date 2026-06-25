import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-sans",
	display: "swap",
	subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
	variable: "--font-mono",
	display: "swap",
	subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
	title: "Virtual University Tour",
	description:
		"A Next.js webapp for prospective students visiting an Open Day. Each classroom has a QR code; scanning opens a page with info about that room, including a 3D scene with equipment (PCs, monitors, desks, projectors) and a 2D floorplan. The site stays live afterward for general student use.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={cn("h-full antialiased font-sans", geistMono.variable, geistSans.variable)} suppressHydrationWarning>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
