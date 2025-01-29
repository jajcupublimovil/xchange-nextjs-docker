import Marquee from "react-fast-marquee";


export default function LogoCloud2() {
	return (
		<>
			<div className="section-logo-cloud container-fluid bg-dark-0 py-86 border-top border-bottom">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="border-linear-dark-2 rounded-pill d-inline-block mb-3">
								<div className="text-white bg-dark-1 px-4 py-2 rounded-pill">Global Allies, Global Impact</div>
							</div>
							<h1 className="ds-xs-4 fw-regular m-0  opacity-50">Building strategic connections </h1>
							<h1 className="fs-1  m-0" data-aos="fade-zoom-in" data-aos-delay={200}>to amplify your reach.</h1>
						</div>
						<div className="col-lg-6">
							{/* Carausel Scroll */}
							<div className="carouselTicker carouselTicker-left position-relative z-1 mt-lg-0 mt-8">
								<ul className="carouselTicker__list">
									<Marquee>
										<li className="carouselTicker__item" style={{ width: "101px" }}>
											<img className="rounded-4" src="/assets/imgs/template/partner/broadsign-logo.png" alt="infinia" />
										</li>
										<li className="carouselTicker__item" style={{ width: "101px" }}>
											<img className="rounded-4" src="/assets/imgs/template/partner/google-maps.png" alt="infinia" />
										</li>
										<li className="carouselTicker__item" style={{ width: "101px" }}>
											<img className="rounded-4" src="/assets/imgs/template/partner/publitrackers.png" alt="infinia" />
										</li>
										<li className="carouselTicker__item" style={{ width: "101px" }}>
											<img className="rounded-4" src="/assets/imgs/template/partner/admobilize.png" alt="infinia" />
										</li>
										<li className="carouselTicker__item" style={{ width: "101px" }}>
											<img className="rounded-4" src="/assets/imgs/template/partner/broadsign-logo.png" alt="infinia" />
										</li>
										<li className="carouselTicker__item" style={{ width: "101px" }}>
											<img className="rounded-4" src="/assets/imgs/template/partner/google-maps.png" alt="infinia" />
										</li>
										<li className="carouselTicker__item" style={{ width: "101px" }}>
											<img className="rounded-4" src="/assets/imgs/template/partner/publitrackers.png" alt="infinia" />
										</li>
										<li className="carouselTicker__item" style={{ width: "101px" }}>
											<img className="rounded-4" src="/assets/imgs/template/partner/admobilize.png" alt="infinia" />
										</li>
									</Marquee>
								</ul>
							</div>
							<div className="carouselTicker carouselTicker-right mt-6 position-relative z-1">
								<ul className="carouselTicker__list">
									<Marquee direction="right">
										<li className="carouselTicker__item" style={{ width: "101px" }}>
											<img className="rounded-4" src="/assets/imgs/template/partner/broadsign-logo.png" alt="infinia" />
										</li>
										<li className="carouselTicker__item" style={{ width: "101px" }}>
											<img className="rounded-4" src="/assets/imgs/template/partner/google-maps.png" alt="infinia" />
										</li>
										<li className="carouselTicker__item" style={{ width: "101px" }}>
											<img className="rounded-4" src="/assets/imgs/template/partner/publitrackers.png" alt="infinia" />
										</li>
										<li className="carouselTicker__item" style={{ width: "101px" }}>
											<img className="rounded-4" src="/assets/imgs/template/partner/admobilize.png" alt="infinia" />
										</li>
										<li className="carouselTicker__item" style={{ width: "101px" }}>
											<img className="rounded-4" src="/assets/imgs/template/partner/broadsign-logo.png" alt="infinia" />
										</li>
										<li className="carouselTicker__item" style={{ width: "101px" }}>
											<img className="rounded-4" src="/assets/imgs/template/partner/google-maps.png" alt="infinia" />
										</li>
										<li className="carouselTicker__item" style={{ width: "101px" }}>
											<img className="rounded-4" src="/assets/imgs/template/partner/publitrackers.png" alt="infinia" />
										</li>
										<li className="carouselTicker__item" style={{ width: "101px" }}>
											<img className="rounded-4" src="/assets/imgs/template/partner/admobilize.png" alt="infinia" />
										</li>
									</Marquee>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
