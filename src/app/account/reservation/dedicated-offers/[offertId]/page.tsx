import React, { Suspense } from "react";
import { Product } from "@utils/models/product";
import OffertCard from "@components/OffertCard";

const Loading = () => (
	<div className="flex h-full items-center justify-center">
		<span className="text-lg font-medium text-gray-500">Ładowanie...</span>
	</div>
);

const YourOffertPage = async ({ offertId }: { offertId: string }) => {
	const response = await fetch(`http://localhost:3000/api/products/${offertId}`);
	const offer: Product = await response.json();

	return <OffertCard offer={offer} />;
};

export async function generateMetadata({ params }: { params: { offertId: string } }) {
	const response = await fetch(`http://localhost:3000/api/products/${params.offertId}`);
	const offer: Product = await response.json();

	return {
		title: offer.name,
		description:
			"Odkryj szczegóły tej wyjątkowej oferty na GoFunlo. Zarezerwuj już teraz i ciesz się niezapomnianymi wrażeniami!",
		keywords: "GoFunlo, oferta, wycieczki, wakacje, rezerwacja",
		openGraph: {
			title: offer.name,
			description: "Zobacz szczegóły oferty na GoFunlo i zarezerwuj swoje wymarzone doświadczenie!",
			url: `https://www.gofunlo.com/pl/offers/${offer.id}`,
			images: [
				{
					url: offer?.media ? offer?.media[0]?.url : "https://www.gofunlo.com/pl/default-og-image.jpg",
					width: 800,
					height: 600,
					alt: offer.name,
				},
			],
		},
	};
}

const YourOffertPageWrapper = async ({
	params,
}: {
	params: {
		offertId: string;
	};
}) => {
	return (
		<div className={"flex w-full flex-col gap-8"}>
			<Suspense fallback={<Loading />}>
				<YourOffertPage offertId={params.offertId} />
			</Suspense>
		</div>
	);
};

export default YourOffertPageWrapper;
