import React from "react";
import { Product } from "@utils/models/product";

const OffertCard = ({ offer }: { offer: Product }) => {

	return (
		<div className="mx-auto max-w-4xl rounded-lg bg-white p-4 shadow-md sm:p-6">
			<div className="mb-6 text-center">
				<h1 className="text-2xl font-bold text-gray-800">{offer.name}</h1>
				<p className="text-sm text-gray-600">{offer.description}</p>
			</div>

			{/* Images */}
			<div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{offer.media?.map((image) => (
					<div key={image.id} className="overflow-hidden rounded-lg shadow-lg">
						<img src={image.url} alt={offer.name} className="h-auto w-full object-cover" />
					</div>
				))}
			</div>

			{/* Trip Information */}
			<div className="space-y-4">
				<div className="flex flex-col items-start justify-between sm:flex-row">
					<div className="flex-1">
						<h2 className="text-xl font-semibold text-gray-800">Location</h2>
						<p className="text-gray-600">
							{offer.location.city}, {offer.location.province}
						</p>
					</div>
					<div className="flex-1">
						<h2 className="text-xl font-semibold text-gray-800">Pick-up & Return</h2>
						<p className="text-gray-600">
							{offer.pickup_collection_place} on {offer.pickup_collection_date}
						</p>
						<p className="text-gray-600">
							{offer.pickup_return_place} on {offer.pickup_return_date}
						</p>
					</div>
				</div>

				<div className="flex flex-col items-start justify-between sm:flex-row">
					<div className="flex-1">
						<h2 className="text-xl font-semibold text-gray-800">Trip Type</h2>
						<p className="text-gray-600">{offer.type}</p>
					</div>
					<div className="flex-1">
						<h2 className="text-xl font-semibold text-gray-800">Min Age</h2>
						<p className="text-gray-600">{offer.min_age}</p>
					</div>
				</div>

				{/* Participation Details */}
				<div>
					<h2 className="text-xl font-semibold text-gray-800">Participation Info</h2>
					<p className="text-gray-600">{offer.participation_description}</p>
				</div>

				{/* Price */}
				<div>
					<h2 className="text-xl font-semibold text-gray-800">Price</h2>
					<p className="text-gray-600">{offer.price_description}</p>
				</div>
			</div>

			{/* Contact Info */}
			<div className="mt-6 text-center">
				<p className="text-gray-600">
					For more details, visit{" "}
					<a href={offer.company.fc_website_url} className="text-blue-500">
						company website
					</a>
				</p>
			</div>
		</div>
	);
};

export default OffertCard;
