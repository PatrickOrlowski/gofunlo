import React from "react";
import { BookingResponse } from "@utils/models/order";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "GoFunlo | My reservations",
};
const Page = async () => {
	const response = await fetch("http://localhost:3000/api/booking");
	const { data }: BookingResponse = await response.json();

	return (
		<div className="container mx-auto p-6">
			<div className="space-y-8">
				{data.map((order) => (
					<div
						key={order.id}
						className="hover:scale-102 rounded-lg bg-white p-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
					>
						<div className="mb-4 flex items-center justify-between">
							<h2 className="text-2xl font-semibold text-gray-900">{order.trip_data.name}</h2>
							<span className="rounded-full bg-blue-100 px-2 py-1 text-sm text-gray-500">
								{order.status}
							</span>
						</div>
						<div className="mb-4 space-y-2">
							<p className="text-gray-600">
								<span className="font-medium">Company:</span> {order.trip_data.company.name}
							</p>
							<p className="text-gray-600">
								<span className="font-medium">Price:</span>{" "}
								<span className="font-semibold text-green-600">{order.total_price} PLN</span>
							</p>
						</div>

						<div className="space-y-4">
							<h3 className="text-lg font-semibold text-gray-900">Participants:</h3>
							{order.participants.map((participant) => (
								<div
									key={participant.id}
									className="rounded-lg bg-gray-50 p-4 shadow-sm transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
								>
									<div className="flex items-center space-x-4">
										{/* Profil uczestnika */}
										<div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 text-xl font-semibold text-white">
											{participant.first_name.charAt(0)}
										</div>
										<div className="flex-grow">
											<p className="text-lg font-semibold text-gray-900">
												{participant.first_name} {participant.last_name}
											</p>
											<p className="text-sm text-gray-600">
												<i className="fas fa-map-marker-alt mr-1 text-blue-500"></i>{" "}
												{participant.city || "Not provided"}
											</p>
											<p className="text-sm text-gray-600">
												<i className="fas fa-calendar-alt mr-1 text-orange-500"></i>{" "}
												{new Date(participant.birth_date).toLocaleDateString()}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Page;
