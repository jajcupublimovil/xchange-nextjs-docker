
import Link from "next/link"

export default function Features2() {
	return (
		<>

			<section>
				<div className="container-fluid position-relative bg-primary-dark section-padding">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-4 col-md-6 mb-lg-0 mb-8 position-relative z-1">
								<img src="/assets/imgs/features-2/icon-1.svg" alt="infinia" className="hover-up" />
								<h2 className="text-white mt-3 mb-4 fw-medium hover-up">Unlock more revenue with the SSP built for <span className="fw-bold">OOH Advertising</span>.</h2>

								
								<p className="text-white mb-0 ms-0">Our SSP platform helps OOH media owners sell their inventory to programmatic media buyers around the world.</p>
										
							</div>
							<div className="col-lg-4 col-md-6 mb-lg-0 mb-8">
								<div className="position-relative d-inline-block z-2  hover-up">
									<img className="rounded-3 border border-3 border-white" src="/assets/imgs/features-2/img-1.png" alt="infinia" />
									{/*
									<div className="position-absolute bottom-0 start-0 end-0 mb-3 mx-3 backdrop-filter rounded-3 text-start p-3">
										<Link href="/ #" className="d-flex align-items-center bg-white-keep d-inline-flex rounded-pill px-2 py-1">											
											<span className="fs-7 fw-medium text-primary mx-2">Free Update</span>
										</Link>
										<h6 className="mt-3">
											Transform Your Business <br />
											Into Profession
										</h6>
										<p className="fs-7 text-700">Achieve Your a of Business</p>
									</div>
									*/}
								</div>
							</div>
							<div className="col-lg-4 mb-lg-0 mb-8">
								<div className="px-lg-8">
									<img src="/assets/imgs/features-2/icon-2.svg" alt="infinia" className="hover-up" />
									<div data-aos="fade-zoom-in" data-aos-delay={100}>
										<h5 className="text-white mt-3 mb-3">Sell more by selling programmatically</h5>
										<p className="text-white pb-3">We drive programmatic success for leading DOOH networks worldwide.	</p>
									</div>										
								</div>
							</div>
						</div>
					</div>
					<div className="position-absolute bg-rotate z-0">
						<img className="rotate-center" src="/assets/imgs/features-2/bg-img-favicon.png" alt="infinia" />
					</div>
					<div className="position-absolute top-0 end-0 z-1 p-8">
						<div className="bloom" />
					</div>
				</div>
			</section>

		</>
	)
}
