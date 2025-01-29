import Link from "next/link";

export function Cta12() {
    return (
        <>
                <section className="section-cta-12 bg-3 position-relative section-padding fix">
					<div className="container">
						<div className="row">
							<div className="col-lg-5">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Our History</span>
								</div>
								<h5 className="ds-5 my-3">A Journey of <br className="d-none d-md-inline" />
									Innovation and Growth</h5>
								<p className="fs-5 text-500 mb-8">Connecting brands with key audiences through creative and technological solutions in outdoor advertising.</p>
								<div className="d-flex align-items-center mt-5">
									<Link href="#" className="btn btn-gradient">
										Contact Us
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
									<Link href="#" className="ms-5 fw-bold">How We Work</Link>
								</div>
							</div>
							<div className="col-lg-6 offset-lg-1 mt-lg-0 mt-8">
								<p className="fs-5 text-900 mb-5">
                                    At Xchange, we believe the world is a canvas full of possibilities for brands. Founded by outdoor and digital advertising experts, <span className="fw-bold"> our mission </span>is to reinvent the way brands connect with their audiences. With a global presence and a special focus on vibrant markets like Latin America, we use cutting-edge technology and creativity to deliver campaigns that are not only seen, but felt.
                                </p>
								<p className="fs-5 text-900 mb-5">
                                    From iconic billboards to innovative programmatic solutions, we help our clients maximize their reach in strategic spaces around the world. With a passionate team and a commitment to excellence, we transform ideas into memorable campaigns that generate measurable results and lasting impact. Welcome to Xchange, where every space is an opportunity to shine.
                                </p>
								<div className="d-flex">
									<img className="rounded-circle border border-5 border-primary-light" style={{ width: "70px", height: "70px" }} src="https://media.licdn.com/dms/image/v2/D4E03AQEbUz8PDHOvtQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714224664437?e=1738195200&v=beta&t=Qa2IzS1bPgwOB4wSGGdNt27sPc-2POYqVv-4bZGsW5s" alt="" />
									<div className="ms-2">
										<img className="filter-invert" src="/assets/imgs/cta-12/name.svg" alt="" />
										<h6 className="mt-1 mb-0">Eduardo Escalante <span className="text-500 fs-6">, Principal Manager</span></h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
        </>
    )
}