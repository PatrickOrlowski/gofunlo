import React from "react";
import { Product } from "@utils/models/product";
import { differenceInDays } from "date-fns";
import { MdLocationOn } from "react-icons/md";
import { MdCalendarMonth } from "react-icons/md";
import Link from "next/link";

const OffertListItem = ({ offer }: { offer: Product }) => {
	const {
		id,
		media,
		name,
		country_name,
		min_trip_start_date,
		max_trip_end_date,
		price_description,
		status,
	} = offer;

	return (
		<Link
			className="group flex flex-col gap-5 rounded-md p-4 shadow-lg"
			href={`/account/reservation/dedicated-offers/${id}`}
		>
			<div className="flex items-center justify-between">
				<div
					className={`rounded-md px-2 py-1 text-sm font-bold uppercase text-white ${
						status === "ACTIVE" ? "bg-green-500" : "bg-blue-500"
					}`}
				>
					{status}
				</div>
				<span className="font-medium text-red-600">Kolonie i obozy</span>
			</div>
			<h2 className="text-xl font-semibold text-gray-800">{name}</h2>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr,2fr]">
				<div className="overflow-hidden rounded-md">
					<img
						src={media && media[0]?.url ? media[0].url : "https://placehold.co/300x200"}
						alt="offert"
						className="h-48 w-full rounded-md object-cover transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105"
					/>
				</div>
				<div>
					<div className="flex items-center gap-2 text-gray-600">
						<MdLocationOn size={16} />
						<span>
							{offer.location.city}, {offer.location.province}, {country_name}
						</span>
					</div>
					{min_trip_start_date && max_trip_end_date && (
						<div className="flex items-center gap-2 text-gray-600">
							<MdCalendarMonth size={16} />
							<span>
								{new Date(min_trip_start_date || 0).toLocaleDateString()} -{" "}
								{new Date(max_trip_end_date || 0).toLocaleDateString()} (
								{differenceInDays(
									new Date(max_trip_end_date || 0),
									new Date(min_trip_start_date || 0),
								)}{" "}
								dni)
							</span>
						</div>
					)}
					<div className="font-medium text-gray-700">{price_description}</div>
				</div>
			</div>
		</Link>
	);
};

export default OffertListItem;
