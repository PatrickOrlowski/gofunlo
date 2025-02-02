import React from "react";

// This is a simple footer component that displays a list of links.
export const Footer = () => {
	return (
		<div className="sc-csCMJt jrgBIc">
			<div className="container relative mx-auto my-0 flex flex-col justify-around px-2 py-3 md:block md:py-8 xl:max-w-screen-xl">
				<div className="flex-row justify-between px-8 md:flex md:py-8 lg:px-24">
					<div>
						<div className="flex items-center justify-between pb-4 text-base font-bold">
							<a href="/pl/oferty">Oferta</a>
							<div
								className="md:hidden"
								style={{
									transform: "none",
								}}
							>
								<button
									className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
									tabIndex={0}
									type="button"
								>
									<svg
										className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
										focusable="false"
										aria-hidden="true"
										viewBox="0 0 24 24"
										data-testid="ExpandMoreIcon"
									>
										<path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
									</svg>
									<span className="MuiTouchRipple-root css-w0pj6f"></span>
								</button>
							</div>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="/pl/p/w-polsce">w Polsce</a>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="/pl/p/zima">Zima</a>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="/pl/p/lato">Lato</a>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="/pl/p/dzieci-10-13-lat">Dzieci 10-13 lat</a>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="/pl/p/obozy-wszystkie">Obozy Wszystkie</a>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="/pl/p/obozy-dla-dzieci-14-19-lat">Obozy dla Dzieci 14-19 lat</a>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="/pl/p/lato-2025">Lato 2025 </a>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="/pl/p/atrakcje">Atrakcje</a>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="/pl/p/warsztaty">Warsztaty</a>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="/pl/p/zima-2025">Zima 2025</a>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="/pl/p/noclegi-dla-grup">Noclegi dla Grup</a>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="/pl/p/kolonie-i-obozy">Kolonie i Obozy</a>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="/pl/p/polkolonie">Polkolonie</a>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="/pl/p/wycieczki-szkolne">Wycieczki Szkolne</a>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="/pl/katalogi">Katalogi</a>
						</div>
						<div className="h-[1px] bg-[#f6f6f6] md:hidden"></div>
					</div>
					<div>
						<div className="flex items-center justify-between pb-4 text-base font-bold">
							<span>Strefa organizatora</span>
							<div
								className="md:hidden"
								style={{
									transform: "none",
								}}
							>
								<button
									className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
									tabIndex={0}
									type="button"
								>
									<svg
										className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
										focusable="false"
										aria-hidden="true"
										viewBox="0 0 24 24"
										data-testid="ExpandMoreIcon"
									>
										<path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
									</svg>
									<span className="MuiTouchRipple-root css-w0pj6f"></span>
								</button>
							</div>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="https://admin.gofunlo.com/login" target="_blank" rel="noreffer">
								Panel organizatora
							</a>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="https://admin.gofunlo.com/rejestracja" target="_blank" rel="noreffer">
								Współpraca
							</a>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="/pl/regulamin">Regulamin</a>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="/pl/raport">Raport</a>
						</div>
						<div className="h-[1px] bg-[#f6f6f6] md:hidden"></div>
					</div>
					<div>
						<div className="flex items-center justify-between pb-4 text-base font-bold">
							<span>GoFunlo.com</span>
							<div
								className="md:hidden"
								style={{
									transform: "none",
								}}
							>
								<button
									className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
									tabIndex={0}
									type="button"
								>
									<svg
										className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
										focusable="false"
										aria-hidden="true"
										viewBox="0 0 24 24"
										data-testid="ExpandMoreIcon"
									>
										<path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
									</svg>
									<span className="MuiTouchRipple-root css-w0pj6f"></span>
								</button>
							</div>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="/pl/blog">Blog</a>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="/pl/jak-rezerwowac">Jak rezerwować?</a>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="/pl/kariera">Kariera</a>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="/pl/kontakt">Kontakt</a>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="/pl/oferty">Oferty</a>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="/pl/o-nas">O nas</a>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="/pl/polityka-prywatnosci">Polityka prywatności</a>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="/pl/projekty-ue">Projekty UE</a>
						</div>
						<div className="mb-3 ml-3 flex cursor-pointer flex-col text-sm md:ml-0">
							<a href="/pl/regulamin">Regulamin</a>
						</div>
						<div className="h-[1px] bg-[#f6f6f6] md:hidden"></div>
					</div>
					<div className="flex flex-col gap-10 py-4 md:py-0">
						<div>
							<div className="flex items-center justify-between pb-4 text-base font-bold">
								<span>Kontakt</span>
								<div
									className="hidden md:hidden"
									style={{
										transform: "none",
									}}
								>
									<button
										className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
										tabIndex={0}
										type="button"
									>
										<svg
											className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
											focusable="false"
											aria-hidden="true"
											viewBox="0 0 24 24"
											data-testid="ExpandMoreIcon"
										>
											<path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
										</svg>
										<span className="MuiTouchRipple-root css-w0pj6f"></span>
									</button>
								</div>
							</div>
							<div className="text-sm leading-loose">
								<p>EUROPE:</p>
								<p>Mente S.A.</p>
								<p>Plac Zwycięstwa 2</p>
								<p>90-312 Łódź</p>
								<p>NIP 7282875373</p>
								<p>contact@GoFunlo.com</p>
								<p>+48 786 823 320</p>
								<br />
								<p>USA:</p>
								<p>GOFUNLO INC</p>
								<p>1111B S Governors Ave STE 21795</p>
								<p>Dover, Delaware (DE) 19904</p>
								<p>United States of America</p>
								<p>contact@GoFunlo.com</p>
								<p>+17374000257</p>
							</div>
						</div>
						<div>
							<div className="flex items-center justify-between pb-4 text-base font-bold">
								<span>Social media</span>
								<div
									className="hidden md:hidden"
									style={{
										transform: "none",
									}}
								>
									<button
										className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
										tabIndex={0}
										type="button"
									>
										<svg
											className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
											focusable="false"
											aria-hidden="true"
											viewBox="0 0 24 24"
											data-testid="ExpandMoreIcon"
										>
											<path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
										</svg>
										<span className="MuiTouchRipple-root css-w0pj6f"></span>
									</button>
								</div>
							</div>
							<div className="flex">
								<a href="https://www.facebook.com/FajnyCzas/" target="_blank" rel="noreferrer">
									<img src="/svg/facebook-dark.svg" alt="" width="30px" height="30px" />
								</a>
								<a href="https://www.instagram.com/fajnyczas.pl" target="_blank" rel="noreferrer">
									<img src="/svg/instagram-dark.svg" alt="" width="30px" height="30px" />
								</a>
								<a href="https://www.tiktok.com/@fajnyczas_pl" target="_blank" rel="noreferrer">
									<img src="/svg/tiktok-dark.svg" alt="" width="30px" height="30px" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="mx-8 h-[1px] bg-[#f6f6f6] md:mx-2"></div>
			</div>
		</div>
	);
};
