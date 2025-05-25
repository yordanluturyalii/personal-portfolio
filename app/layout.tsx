import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsSans = Poppins({
	variable: "--font-geist-sans",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Yordan Aserama Luturyali - Software Engineer",
	description:
		"Personal portfolio of Yordan Aserama Luturyali, a passionate Software Engineer with 2+ years of experience in web development.",
	keywords: [
		"Software Engineer",
		"Web Developer",
		"Laravel",
		"React",
		"Next.js",
		"Portfolio",
	],
	authors: [{ name: "Yordan Aserama Luturyali" }],
	openGraph: {
		title: "Yordan Aserama Luturyali - Software Engineer",
		description: "Personal portfolio of Yordan Aserama Luturyali",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppinsSans.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
