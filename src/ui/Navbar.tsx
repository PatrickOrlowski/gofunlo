import React from "react";
import Image from "next/image";

// TODO: W PROPSACH POWINIEN PRZYJMOWAĆ OBIEKT Z NAZWAMI I LINKAMI DO POSZCZEGÓLNYCH KATEGORII - TUTAJ TYLKO MOCKUJE WYGLĄD
export const Navbar = () => {
	return (
		<nav className="relative shadow-sm">
			<div className="absolute left-0 right-0 top-0 hidden bg-[#F8F8FA] lg:flex">
				<div className="mx-auto flex h-[32px] w-full items-center gap-5 lg:container xl:max-w-screen-xl xl:gap-8">
					<ul className="mx-auto mt-1 flex w-full justify-end gap-5">
						<li>
							<a className="flex cursor-pointer items-center gap-3 text-xs" href="#">
								<span>+48 786 823 320</span>
							</a>
						</li>
						<li>
							<a className="flex cursor-pointer items-center text-xs hover:opacity-80" href="#">
								Pomoc i kontakt
							</a>
						</li>
						<li>
							<a className="flex cursor-pointer items-center text-xs hover:opacity-80" href="#">
								Katalogi
							</a>
						</li>
						<li>
							<a className="flex cursor-pointer items-center text-xs hover:opacity-80" href="#">
								Jak rezerwować?
							</a>
						</li>
						<li>
							<a className="flex cursor-pointer items-center text-xs hover:opacity-80" href="#">
								Dla firm
							</a>
						</li>
						<li>
							<a className="flex cursor-pointer items-center text-xs hover:opacity-80" href="#">
								Blog
							</a>
						</li>
					</ul>
				</div>
			</div>

			<header className="ant-layout-header sc-hLseeU hoApsB top-0 z-[140] w-full p-0 shadow-sm lg:top-8 lg:p-8 lg:pb-0">
				<div className="mx-auto flex w-full items-center gap-5 lg:container xl:max-w-screen-xl xl:gap-8">
					<div className="mt-3 hidden lg:block lg:hidden"></div>
					<div className="hidden flex-shrink-0 items-center lg:flex">
						<Image
							src="https://www.gofunlo.com/assets/logo/go-funlo-logo.svg"
							width={150}
							height={27}
							alt={"logo"}
						/>
					</div>
					<div className="hidden w-full lg:flex">
						<nav className="z-50 w-full">
							<ul className="flex flex-col items-start gap-4 px-4 lg:hidden">
								<li className="relative w-full border-t border-gray-200 last:border-none">
									<div className="flex items-center justify-between py-4">
										<button
											className="flex items-center border-none bg-transparent p-0 text-lg font-bold text-gray-800 hover:text-blue-500 focus:outline-none"
											aria-haspopup="true"
											aria-expanded="false"
										>
											Obozy
										</button>
										<button
											className="ml-4 flex items-center justify-center border-none bg-transparent p-0 focus:outline-none"
											aria-label="Toggle submenu"
										>
											<svg
												width="24"
												height="24"
												viewBox="0 0 17 17"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M7.7987 11.47H8.7987V8.70336H11.582V7.70336H8.7987V4.80336H7.7987V7.70336H4.91536V8.70336H7.7987V11.47ZM8.2487 14.8034C7.33759 14.8034 6.47648 14.6284 5.66536 14.2784C4.85425 13.9284 4.14592 13.4506 3.54036 12.845C2.93481 12.2395 2.45703 11.5311 2.10703 10.72C1.75703 9.90892 1.58203 9.04225 1.58203 8.12003C1.58203 7.20892 1.75703 6.34781 2.10703 5.5367C2.45703 4.72559 2.93481 4.02003 3.54036 3.42003C4.14592 2.82003 4.85425 2.34503 5.66536 1.99503C6.47648 1.64503 7.34314 1.47003 8.26536 1.47003C9.17648 1.47003 10.0376 1.64503 10.8487 1.99503C11.6598 2.34503 12.3654 2.82003 12.9654 3.42003C13.5654 4.02003 14.0404 4.72559 14.3904 5.5367C14.7404 6.34781 14.9154 7.21448 14.9154 8.1367C14.9154 9.04781 14.7404 9.90892 14.3904 10.72C14.0404 11.5311 13.5654 12.2395 12.9654 12.845C12.3654 13.4506 11.6598 13.9284 10.8487 14.2784C10.0376 14.6284 9.17092 14.8034 8.2487 14.8034ZM8.26536 13.8034C9.83203 13.8034 11.1654 13.2506 12.2654 12.145C13.3654 11.0395 13.9154 9.69781 13.9154 8.12003C13.9154 6.55337 13.3654 5.22003 12.2654 4.12003C11.1654 3.02003 9.82648 2.47003 8.2487 2.47003C6.68203 2.47003 5.34592 3.02003 4.24036 4.12003C3.13481 5.22003 2.58203 6.55892 2.58203 8.1367C2.58203 9.70336 3.13481 11.0395 4.24036 12.145C5.34592 13.2506 6.68759 13.8034 8.26536 13.8034Z"
													fill="currentColor"
												></path>
											</svg>
										</button>
									</div>
								</li>
								<li className="relative w-full border-t border-gray-200 last:border-none">
									<div className="flex items-center justify-between py-4">
										<button
											className="flex items-center border-none bg-transparent p-0 text-lg font-bold text-gray-800 hover:text-blue-500 focus:outline-none"
											aria-haspopup="true"
											aria-expanded="false"
										>
											Półkolonie
										</button>
										<button
											className="ml-4 flex items-center justify-center border-none bg-transparent p-0 focus:outline-none"
											aria-label="Toggle submenu"
										>
											<svg
												width="24"
												height="24"
												viewBox="0 0 17 17"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M7.7987 11.47H8.7987V8.70336H11.582V7.70336H8.7987V4.80336H7.7987V7.70336H4.91536V8.70336H7.7987V11.47ZM8.2487 14.8034C7.33759 14.8034 6.47648 14.6284 5.66536 14.2784C4.85425 13.9284 4.14592 13.4506 3.54036 12.845C2.93481 12.2395 2.45703 11.5311 2.10703 10.72C1.75703 9.90892 1.58203 9.04225 1.58203 8.12003C1.58203 7.20892 1.75703 6.34781 2.10703 5.5367C2.45703 4.72559 2.93481 4.02003 3.54036 3.42003C4.14592 2.82003 4.85425 2.34503 5.66536 1.99503C6.47648 1.64503 7.34314 1.47003 8.26536 1.47003C9.17648 1.47003 10.0376 1.64503 10.8487 1.99503C11.6598 2.34503 12.3654 2.82003 12.9654 3.42003C13.5654 4.02003 14.0404 4.72559 14.3904 5.5367C14.7404 6.34781 14.9154 7.21448 14.9154 8.1367C14.9154 9.04781 14.7404 9.90892 14.3904 10.72C14.0404 11.5311 13.5654 12.2395 12.9654 12.845C12.3654 13.4506 11.6598 13.9284 10.8487 14.2784C10.0376 14.6284 9.17092 14.8034 8.2487 14.8034ZM8.26536 13.8034C9.83203 13.8034 11.1654 13.2506 12.2654 12.145C13.3654 11.0395 13.9154 9.69781 13.9154 8.12003C13.9154 6.55337 13.3654 5.22003 12.2654 4.12003C11.1654 3.02003 9.82648 2.47003 8.2487 2.47003C6.68203 2.47003 5.34592 3.02003 4.24036 4.12003C3.13481 5.22003 2.58203 6.55892 2.58203 8.1367C2.58203 9.70336 3.13481 11.0395 4.24036 12.145C5.34592 13.2506 6.68759 13.8034 8.26536 13.8034Z"
													fill="currentColor"
												></path>
											</svg>
										</button>
									</div>
								</li>
								<li className="relative w-full border-t border-gray-200 last:border-none">
									<div className="flex items-center justify-between py-4">
										<button
											className="flex items-center border-none bg-transparent p-0 text-lg font-bold text-gray-800 hover:text-blue-500 focus:outline-none"
											aria-haspopup="true"
											aria-expanded="false"
										>
											Wycieczki szkolne
										</button>
										<button
											className="ml-4 flex items-center justify-center border-none bg-transparent p-0 focus:outline-none"
											aria-label="Toggle submenu"
										>
											<svg
												width="24"
												height="24"
												viewBox="0 0 17 17"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M7.7987 11.47H8.7987V8.70336H11.582V7.70336H8.7987V4.80336H7.7987V7.70336H4.91536V8.70336H7.7987V11.47ZM8.2487 14.8034C7.33759 14.8034 6.47648 14.6284 5.66536 14.2784C4.85425 13.9284 4.14592 13.4506 3.54036 12.845C2.93481 12.2395 2.45703 11.5311 2.10703 10.72C1.75703 9.90892 1.58203 9.04225 1.58203 8.12003C1.58203 7.20892 1.75703 6.34781 2.10703 5.5367C2.45703 4.72559 2.93481 4.02003 3.54036 3.42003C4.14592 2.82003 4.85425 2.34503 5.66536 1.99503C6.47648 1.64503 7.34314 1.47003 8.26536 1.47003C9.17648 1.47003 10.0376 1.64503 10.8487 1.99503C11.6598 2.34503 12.3654 2.82003 12.9654 3.42003C13.5654 4.02003 14.0404 4.72559 14.3904 5.5367C14.7404 6.34781 14.9154 7.21448 14.9154 8.1367C14.9154 9.04781 14.7404 9.90892 14.3904 10.72C14.0404 11.5311 13.5654 12.2395 12.9654 12.845C12.3654 13.4506 11.6598 13.9284 10.8487 14.2784C10.0376 14.6284 9.17092 14.8034 8.2487 14.8034ZM8.26536 13.8034C9.83203 13.8034 11.1654 13.2506 12.2654 12.145C13.3654 11.0395 13.9154 9.69781 13.9154 8.12003C13.9154 6.55337 13.3654 5.22003 12.2654 4.12003C11.1654 3.02003 9.82648 2.47003 8.2487 2.47003C6.68203 2.47003 5.34592 3.02003 4.24036 4.12003C3.13481 5.22003 2.58203 6.55892 2.58203 8.1367C2.58203 9.70336 3.13481 11.0395 4.24036 12.145C5.34592 13.2506 6.68759 13.8034 8.26536 13.8034Z"
													fill="currentColor"
												></path>
											</svg>
										</button>
									</div>
								</li>
								<li className="relative w-full border-t border-gray-200 last:border-none">
									<div className="flex items-center justify-between py-4">
										<a
											className="block text-lg font-bold text-gray-800 hover:text-blue-500"
											href="/pl/p/atrakcje"
										>
											Atrakcje
										</a>
									</div>
								</li>
								<li className="relative w-full border-t border-gray-200 last:border-none">
									<div className="flex items-center justify-between py-4">
										<button
											className="flex items-center border-none bg-transparent p-0 text-lg font-bold text-gray-800 hover:text-blue-500 focus:outline-none"
											aria-haspopup="true"
											aria-expanded="false"
										>
											Noclegi dla grup
										</button>
										<button
											className="ml-4 flex items-center justify-center border-none bg-transparent p-0 focus:outline-none"
											aria-label="Toggle submenu"
										>
											<svg
												width="24"
												height="24"
												viewBox="0 0 17 17"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M7.7987 11.47H8.7987V8.70336H11.582V7.70336H8.7987V4.80336H7.7987V7.70336H4.91536V8.70336H7.7987V11.47ZM8.2487 14.8034C7.33759 14.8034 6.47648 14.6284 5.66536 14.2784C4.85425 13.9284 4.14592 13.4506 3.54036 12.845C2.93481 12.2395 2.45703 11.5311 2.10703 10.72C1.75703 9.90892 1.58203 9.04225 1.58203 8.12003C1.58203 7.20892 1.75703 6.34781 2.10703 5.5367C2.45703 4.72559 2.93481 4.02003 3.54036 3.42003C4.14592 2.82003 4.85425 2.34503 5.66536 1.99503C6.47648 1.64503 7.34314 1.47003 8.26536 1.47003C9.17648 1.47003 10.0376 1.64503 10.8487 1.99503C11.6598 2.34503 12.3654 2.82003 12.9654 3.42003C13.5654 4.02003 14.0404 4.72559 14.3904 5.5367C14.7404 6.34781 14.9154 7.21448 14.9154 8.1367C14.9154 9.04781 14.7404 9.90892 14.3904 10.72C14.0404 11.5311 13.5654 12.2395 12.9654 12.845C12.3654 13.4506 11.6598 13.9284 10.8487 14.2784C10.0376 14.6284 9.17092 14.8034 8.2487 14.8034ZM8.26536 13.8034C9.83203 13.8034 11.1654 13.2506 12.2654 12.145C13.3654 11.0395 13.9154 9.69781 13.9154 8.12003C13.9154 6.55337 13.3654 5.22003 12.2654 4.12003C11.1654 3.02003 9.82648 2.47003 8.2487 2.47003C6.68203 2.47003 5.34592 3.02003 4.24036 4.12003C3.13481 5.22003 2.58203 6.55892 2.58203 8.1367C2.58203 9.70336 3.13481 11.0395 4.24036 12.145C5.34592 13.2506 6.68759 13.8034 8.26536 13.8034Z"
													fill="currentColor"
												></path>
											</svg>
										</button>
									</div>
								</li>
							</ul>
							<ul className="hidden items-center gap-6 lg:flex">
								<li className="group relative">
									<div className="flex items-center py-4 hover:text-blue-500">
										<a className="text-base font-medium text-gray-700 hover:text-blue-500" href="#">
											Obozy
										</a>
									</div>
									<div className="invisible absolute left-0 top-full z-50 border border-gray-200 bg-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
										<div className="flex">
											<div className="min-w-[200px] p-4">
												<ul className="space-y-2">
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Wszystkie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															LATO 2025
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															ZIMA 2025
														</a>
													</li>
													<li className="group relative">
														<span className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500">
															Dokąd
														</span>
													</li>
													<li className="group relative">
														<span className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500">
															Wiek
														</span>
													</li>
													<li className="group relative">
														<span className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500">
															Tematyczne
														</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</li>
								<li className="group relative">
									<div className="flex items-center py-4 hover:text-blue-500">
										<a className="text-base font-medium text-gray-700 hover:text-blue-500" href="#">
											Półkolonie
										</a>
									</div>
									<div className="invisible absolute left-0 top-full z-50 border border-gray-200 bg-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
										<div className="flex">
											<div className="min-w-[200px] p-4">
												<ul className="space-y-2">
													<li className="group relative">
														<span className="block p-2 text-sm font-semibold text-gray-600">
															Województwa
														</span>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Mazowieckie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Pomorskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="/pl/p/polkolonie-kujawsko-pomorskie"
														>
															Kujawsko-Pomorskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Wielkopolskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Dolnośląskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Lubuskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Śląskie
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</li>
								<li className="group relative">
									<div className="flex items-center py-4 hover:text-blue-500">
										<a className="text-base font-medium text-gray-700 hover:text-blue-500" href="#">
											Wycieczki szkolne
										</a>
									</div>
									<div className="invisible absolute left-0 top-full z-50 border border-gray-200 bg-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
										<div className="flex">
											<div className="min-w-[200px] p-4">
												<ul className="space-y-2">
													<li className="group relative">
														<span className="block p-2 text-sm font-semibold text-gray-600">
															Polska
														</span>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Góry
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Nad morze
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Dolnośląskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Kujawsko-Pomorskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Lubelskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Lubuskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Łódzkie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Małopolskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Mazowieckie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Opolskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Podkarpackie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Podlaskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Pomorskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Śląskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Świętokrzyskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Warmińsko-Mazurskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Wielkopolskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Zachodniopomorskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Za granicą
														</a>
													</li>
													<li className="group relative">
														<span className="block p-2 text-sm font-semibold text-gray-600">
															Według wieku
														</span>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Dla przedszkolaków
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Dla szkół
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Transport
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</li>
								<li className="group relative">
									<div className="flex items-center py-4 hover:text-blue-500">
										<a className="text-base font-medium text-gray-700 hover:text-blue-500" href="#">
											Atrakcje
										</a>
									</div>
								</li>
								<li className="group relative">
									<div className="flex items-center py-4 hover:text-blue-500">
										<a className="text-base font-medium text-gray-700 hover:text-blue-500" href="#">
											Noclegi dla grup
										</a>
									</div>
									<div className="invisible absolute left-0 top-full z-50 border border-gray-200 bg-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
										<div className="flex">
											<div className="min-w-[200px] p-4">
												<ul className="space-y-2">
													<li className="group relative">
														<span className="block p-2 text-sm font-semibold text-gray-600">
															Województwa
														</span>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Pomorskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Zachodniopomorskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Śląskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Dolnośląskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Małopolskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Opolskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Warmińsko-mazurskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Świętokrzyskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Podkarpackie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Łódzkie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Lubuskie
														</a>
													</li>
													<li className="group relative">
														<a
															className="block rounded p-2 text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-500"
															href="#"
														>
															Mazowieckie
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</li>
								<li className="ml-auto flex items-center gap-6">
									<div>
										<div className="flex cursor-pointer items-center" role="button" tabIndex={0}>
											<div className="h-8 w-8">
												<Image
													src="https://www.gofunlo.com/assets/langs/pl.png"
													width={"32"}
													height={"32"}
													className="h-full w-full"
													alt="pl"
												/>
											</div>
										</div>
									</div>
									<div>
										<div className="flex cursor-pointer items-center" role="button" tabIndex={0}>
											<b>ZŁ</b>
										</div>
									</div>
								</li>
							</ul>
						</nav>
					</div>
					<div className="ml-auto hidden items-center gap-1 lg:flex 2xl:gap-1">
						<div className="inline-block cursor-pointer gap-2 whitespace-nowrap">Zaloguj się</div>
					</div>
					<div className="false top-0 flex h-16 w-full justify-between bg-white shadow-md lg:hidden">
						<div className="ml-4 flex items-center">
							<div className="flex w-full items-center gap-6">
								<a className="flex-shrink-0" href="#">
									<img
										src="/assets/logo/go-funlo-logo.svg"
										alt=""
										width="150px"
										height="27px"
										className="cursor-pointer"
									/>
								</a>
							</div>
						</div>
						<div className="mr-3 flex flex-1 cursor-pointer items-center justify-end">
							<div className="mr-4 flex items-center gap-3">
								<div>
									<div className="flex cursor-pointer items-center" role="button" tabIndex={0}>
										<div className="h-8 w-8">
											<img
												src="/assets/langs/pl.png"
												width="32"
												height="32"
												className="h-full w-full"
												alt="pl"
											/>
										</div>
									</div>
								</div>
								<div>
									<div className="flex cursor-pointer items-center" role="button" tabIndex={0}>
										<b>ZŁ</b>
									</div>
								</div>
							</div>
							<a
								className="bg-fc-light-blue mr-3 hidden cursor-pointer whitespace-nowrap rounded p-2 text-xs font-bold text-white hover:text-white lg:block"
								href="#"
							>
								Zaloguj się
							</a>
							<div className="mr-5 flex h-8 w-8 flex-row items-center justify-center rounded-full border border-black text-lg font-bold text-black lg:hidden lg:h-[40px] lg:w-[40px]">
								<svg
									width="16"
									height="32"
									viewBox="0 0 32 32"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clipPath="url(#clip0_271_8578)">
										<path
											d="M16.1726 4.20572C17.1497 4.20572 18.1049 4.49548 18.9174 5.03836C19.7299 5.58124 20.3631 6.35285 20.7371 7.25563C21.111 8.1584 21.2088 9.15179 21.0182 10.1102C20.8276 11.0685 20.357 11.9489 19.6661 12.6398C18.9751 13.3308 18.0948 13.8013 17.1364 13.992C16.178 14.1826 15.1846 14.0847 14.2819 13.7108C13.3791 13.3369 12.6075 12.7036 12.0646 11.8911C11.5217 11.0787 11.232 10.1235 11.232 9.1463C11.232 7.83598 11.7525 6.57933 12.679 5.65279C13.6056 4.72625 14.8622 4.20572 16.1726 4.20572V4.20572ZM16.1726 2.22949C14.8045 2.22949 13.4672 2.63516 12.3298 3.39519C11.1923 4.15521 10.3058 5.23547 9.78225 6.49936C9.25873 7.76324 9.12176 9.15398 9.38865 10.4957C9.65553 11.8374 10.3143 13.0699 11.2816 14.0372C12.249 15.0046 13.4814 15.6633 14.8232 15.9302C16.1649 16.1971 17.5556 16.0601 18.8195 15.5366C20.0834 15.0131 21.1636 14.1265 21.9237 12.9891C22.6837 11.8516 23.0894 10.5143 23.0894 9.1463C23.0894 7.31185 22.3606 5.55253 21.0635 4.25538C19.7663 2.95823 18.007 2.22949 16.1726 2.22949V2.22949Z"
											fill="#111111"
										></path>
										<path
											d="M26.0537 29.8974H24.0775V24.9569C24.0775 24.308 23.9497 23.6656 23.7014 23.0662C23.4531 22.4668 23.0892 21.9221 22.6304 21.4633C22.1716 21.0046 21.627 20.6406 21.0276 20.3924C20.4282 20.1441 19.7857 20.0163 19.1369 20.0163H13.2082C11.8979 20.0163 10.6412 20.5368 9.71468 21.4633C8.78814 22.3899 8.26761 23.6465 8.26761 24.9569V29.8974H6.29138V24.9569C6.29138 23.1224 7.02012 21.3631 8.31727 20.0659C9.61442 18.7688 11.3737 18.04 13.2082 18.04H19.1369C20.9713 18.04 22.7307 18.7688 24.0278 20.0659C25.325 21.3631 26.0537 23.1224 26.0537 24.9569V29.8974Z"
											fill="#111111"
										></path>
									</g>
									<defs>
										<clipPath id="clip0_271_8578">
											<rect
												width="31.6197"
												height="31.6197"
												fill="white"
												transform="translate(0.362671 0.253906)"
											></rect>
										</clipPath>
									</defs>
								</svg>
							</div>
						</div>
						<div className="mr-5 flex items-center lg:hidden">
							<div className="cursor-pointer">
								<svg
									width="30"
									height="30"
									viewBox="0 0 30 30"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clipPath="url(#clip0_286_5182)">
										<path
											d="M26.3688 5.96484H4.61877V7.77734H26.3688V5.96484Z"
											fill="#363636"
										></path>
										<path
											d="M26.3688 22.2773H4.61877V24.0898H26.3688V22.2773Z"
											fill="#363636"
										></path>
										<path
											d="M26.3688 14.1211H4.61877V15.9336H26.3688V14.1211Z"
											fill="#363636"
										></path>
									</g>
									<defs>
										<clipPath id="clip0_286_5182">
											<rect
												width="29"
												height="29"
												fill="white"
												transform="translate(0.993774 0.527344)"
											></rect>
										</clipPath>
									</defs>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</header>
		</nav>
	);
};
