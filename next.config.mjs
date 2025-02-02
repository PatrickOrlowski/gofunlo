/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["www.gofunlo.com", "placehold.co"],
	},
	async redirects() {
		return [
			{
				source: "/account",
				destination: "/account/reservation/my-reservations",
				permanent: true,
			},
			{
				source: "/account/reservation",
				destination: "/account/reservation/my-reservations",
				permanent: true,
			},
			{
				source: "/",
				destination: "/account/reservation/my-reservations",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
