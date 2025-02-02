import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@ui/Navbar";
import { Footer } from "@ui/Footer";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "GoFunlo",
	description:
		"GoFunlo.com to platforma internetowa łącząca rodziny z najlepszymi ofertami kolonii letnich, obozów zimowych oraz wycieczek szkolnych. Oferujemy różnorodne aktywności dla dzieci i młodzieży, ułatwiając odkrywanie, porównywanie i rezerwację niezapomnianych przeżyć. Dzięki szczegółowym opisom obiektów noclegowych i atrakcji w okolicy, planowanie wyjazdów staje się proste i przyjemne. Odwiedź GoFunlo.com i stwórz wspomnienia na całe życie!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Navbar />
				<div className={"hidden xl:block"}>{children}</div>
				<div className={"mx-auto block bg-red-100 p-4 text-center text-red-500 xl:hidden"}>
					Do not use this layout on mobile
				</div>
				<Footer />
			</body>
		</html>
	);
}
