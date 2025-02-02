import React, { Suspense } from "react";
import OffertListItem from "@components/OffertListItem";
import { ProductsResponse } from "@utils/models/product";

const Loading = () => (
	<div className="flex h-full items-center justify-center">
		<span className="text-lg font-medium text-gray-500">Ładowanie...</span>
	</div>
);

const OffertPage = async () => {
	const response = await fetch("http://localhost:3000/api/products");
	const { data }: ProductsResponse = await response.json();

	return (
		<div className={"flex flex-col"}>
			{data?.map((product) => <OffertListItem key={product.id} offer={product} />).reverse() ||
				"Brak ofert"}
		</div>
	);
};

const OffertPageWrapper = () => {
	return (
		<div className={"flex w-full flex-col gap-8"}>
			<Suspense fallback={<Loading />}>
				<OffertPage />
			</Suspense>
		</div>
	);
};

export default OffertPageWrapper;
