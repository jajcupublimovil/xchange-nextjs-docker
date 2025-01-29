'use client'
import CountUp from 'react-countup'
export default function Contact4() {
    return (
        <>
            {/* Contact 4*/}
				<section className="section-contact-4 bg-4 section-padding">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="pe-lg-8 me-lg-auto mb-5 mb-lg-0">
									<h6 className="text-primary">Discover how the world can be your canvas.</h6>
									<h3 className="ds-3">Connect to the World Through DOOH and OOH.</h3>
									<p className="fs-5">With outdoor advertising campaigns spanning five continents, DOOH and OOH transform everyday spaces into global connection points.</p>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="rounded-4 border border-5 border-white zoom-img mb-5">
									<img className="rounded-4 w-100" src="/assets/imgs/contact-4/img-1.png" alt="infinia" />
								</div>
							</div>
							<div className="col-lg-4">
								<div className="rounded-4 border border-5 border-white zoom-img mb-5 mb-lg-0">
									<img className="rounded-4 w-100" src="/assets/imgs/contact-4/img-2.png" alt="infinia" />
								</div>
							</div>
							<div className="col-lg-4">
								<div className="h-100 bg-primary rounded-4 d-flex align-items-center justify-content-center border position-relative border-5 fix border-white py-5">
									<div className="position-relative z-1 fix">
										<div className="d-flex justify-content-center">
											<img src="/assets/imgs/hero-1/avatar-1.png" alt="infinia" />
											<img className="avt-hero" src="/assets/imgs/hero-1/avatar-2.png" alt="infinia" />
											<img className="avt-hero" src=" assets/imgs/hero-1/avatar-3.png" alt="infinia" />
										</div>
										<h1 className="count fw-black text-white my-0">+<span className="odometer" /><CountUp end={500} enableScrollSpy={true} />M</h1>
										<p className="fs-5 text-100-keep mb-0">Views of our ads / Month</p>
									</div>
									<img className="position-absolute top-50 start-50 translate-middle z-0" src="/assets/imgs/contact-4/img-bg-1.png" alt="infinia" />
								</div>
							</div>
							<div className="col-lg-4">
								<div className="rounded-4 border border-5 border-white zoom-img mt-5 mt-lg-0">
									<img className="rounded-4 w-100" src="/assets/imgs/contact-4/img-3.png" alt="infinia" />
								</div>
							</div>
						</div>
					</div>
				</section>
        </>
    )
}