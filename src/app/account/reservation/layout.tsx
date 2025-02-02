import React from "react";
import { ActiveLink } from "@ui/ActiveLink";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className={"flex flex-col gap-8"}>
			<ol
				className={
					"text-deep-blue-500 flex gap-5 text-lg leading-[29px] tracking-[0.01em] [&_li]:cursor-pointer"
				}
			>
				<li className={"duration-200 ease-in-out hover:underline"}>
					<ActiveLink href={"/account/reservation/my-reservations"} activeClass={"font-bold"}>
						Moje rezerwacje
					</ActiveLink>
				</li>
				<li className={"duration-200 ease-in-out hover:underline"}>
					<ActiveLink href={"/account/reservation/finished"} activeClass={"font-bold"}>
						Zakończone
					</ActiveLink>
				</li>
				<li className={"duration-200 ease-in-out hover:underline"}>
					<ActiveLink href={"/account/reservation/dedicated-offers"} activeClass={"font-bold"}>
						Dedykowane oferty
					</ActiveLink>
				</li>
			</ol>
			{children}
		</div>
	);
}
