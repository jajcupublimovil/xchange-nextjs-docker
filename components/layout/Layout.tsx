'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import BackToTop from '../elements/BackToTop';
import Breadcrumb from './Breadcrumb';
import Footer1 from './footer/Footer1';
import Footer2 from './footer/Footer2';
import Footer3 from './footer/Footer3';
import Footer4 from './footer/Footer4';
import Header1 from "./header/Header1";
import Header2 from './header/Header2';
import Header3 from './header/Header3';
import Header4 from './header/Header4';
import Header5 from './header/Header5';

interface LayoutProps {
	headerStyle?: number;
	footerStyle?: number;
	children?: React.ReactNode;
	breadcrumbTitle?: string;
}

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }: LayoutProps) {
	const [scroll, setScroll] = useState<boolean>(false);
	const [isMobileMenu, setMobileMenu] = useState<boolean>(false);
	const [isSearch, setSearch] = useState<boolean>(false);
	const [isOffCanvas, setOffCanvas] = useState<boolean>(false);

	const handleMobileMenu = (): void => {
		setMobileMenu(!isMobileMenu);
		!isMobileMenu ? document.body.classList.add("mobile-menu-active") : document.body.classList.remove("mobile-menu-active");
	};

	const handleSearch = (): void => setSearch(!isSearch);
	const handleOffCanvas = (): void => setOffCanvas(!isOffCanvas);

	useEffect(() => {
		if (typeof window !== "undefined") {
			// WOW.js Import dinámico
			import("wowjs").then((module) => {
				const wow = new module.WOW({
					live: false,
				});
				wow.init();
			});

			// Inicializar AOS
			AOS.init();

			const handleScroll = (): void => {
				const scrollCheck: boolean = window.scrollY > 100;
				if (scrollCheck !== scroll) {
					setScroll(scrollCheck);
				}
			};

			document.addEventListener("scroll", handleScroll);

			return () => {
				document.removeEventListener("scroll", handleScroll);
			};
		}
	}, [scroll]);

	return (
		<>
			<div id="top" />
			{!headerStyle && <Header5 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />}
			{headerStyle === 1 && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />}
			{headerStyle === 2 && <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />}
			{headerStyle === 3 && <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />}
			{headerStyle === 4 && <Header4 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />}
			{headerStyle === 5 && <Header5 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />}

			<main>
				{breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
				{children}
			</main>

			{!footerStyle && <Footer1 />}
			{footerStyle === 1 && <Footer1 />}
			{footerStyle === 2 && <Footer2 />}
			{footerStyle === 3 && <Footer3 />}
			{footerStyle === 4 && <Footer4 />}

			<BackToTop target="#top" />
		</>
	);
}
