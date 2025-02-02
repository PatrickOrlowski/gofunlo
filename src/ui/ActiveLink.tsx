"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const ActiveLink = ({
	href,
	children,
	activeClass = "bg-[#ECF5FF]",
}: {
	href: string;
	children: React.ReactNode;
	activeClass?: string;
}) => {
	const pathname = usePathname();
	const isActive = pathname?.startsWith(href);

	return (
		<Link href={href} passHref className={isActive ? `block h-full w-full ${activeClass}` : ""}>
			{children}
		</Link>
	);
};
