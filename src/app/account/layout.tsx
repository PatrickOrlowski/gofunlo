import AccountMenu from "@components/AccountMenu";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="m-auto grid min-h-screen w-[1280px] grid-rows-1 gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col items-center gap-8 sm:items-start">
				<h1 className="text-deep-blue-500 text-2xl font-bold leading-[29px] tracking-[0.01em] md:text-[40px] md:leading-[48px]">
					Moje konto
				</h1>
				<div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-[300px_auto]">
					<AccountMenu />
					{children}
				</div>
			</main>
		</div>
	);
}
