import React from "react";
import { VscAccount } from "react-icons/vsc";
import { BiMessage } from "react-icons/bi";
import { TbReorder } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import { ActiveLink } from "@ui/ActiveLink";

const AccountMenu = () => {
	return (
		<ol className="text-deep-blue-500 text-lg font-bold leading-[29px] tracking-[0.01em] [&_a]:rounded-md [&_li]:h-20 [&_li]:cursor-pointer [&_li]:rounded-md">
			<li className={"bg-transparent duration-200 ease-in-out hover:bg-[#ECF5FF]"}>
				<ActiveLink href={"/account/my-data"}>
					<div className={"flex h-20 items-center gap-3 px-3"}>
						<VscAccount size={30} /> Moje dane
					</div>
				</ActiveLink>
			</li>
			<li className={"duration-200 ease-in-out hover:bg-[#ECF5FF]"}>
				<ActiveLink href={"/account/messages"}>
					<div className={"flex h-20 items-center gap-3 px-3"}>
						<BiMessage size={30} /> Wiadomości
					</div>
				</ActiveLink>
			</li>
			<li className={"duration-200 ease-in-out hover:bg-[#ECF5FF]"}>
				<ActiveLink href={"/account/reservation"}>
					<div className={"flex h-20 items-center gap-3 px-3"}>
						<TbReorder size={30} /> Rezerwacje
					</div>
				</ActiveLink>
			</li>
			<li className={"duration-200 ease-in-out hover:bg-[#ECF5FF]"}>
				<div className={"flex h-20 items-center gap-3 px-3"}>
					<FiLogOut size={30} /> Wyloguj się
				</div>
			</li>
		</ol>
	);
};

export default AccountMenu;
