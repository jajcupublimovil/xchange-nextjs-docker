'use client'
import CountUp from 'react-countup'

export default function Cta8() {
	return (
		<>
			<section className="section-cta-8 bg-4">
				<div className="container-fluid position-relative section-padding">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-5">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Programmatic Analytics</span>
								</div>
								<h5 className="ds-5 mt-2">Measurable Results, Real Impact.</h5>
								<p>At Xchange, our priority is that every campaign has a tangible impact. We are committed to delivering measurable results that support your brand's success. Thanks to our integration of advanced technology and we analyze every interaction to optimize your advertising spend.</p>
								<div className="d-flex pt-3 align-items-center">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
										<div className="icon">
											<img src="/assets/imgs/icons/icon-1.png" alt="infinia" />
										</div>
									</div>
									<div className="ps-5">
										<h6>Accurate Analytics</h6>
										<p>We understand that every click, impression and conversion counts. Our detailed reports give you a clear view of the performance of your campaigns at any stage.</p>
									</div>
								</div>
								<div className="d-flex pt-3 align-items-center">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
										<div className="icon">
											<img src="/assets/imgs/icons/icon-2.svg" alt="infinia" />
										</div>
									</div>
									<div className="ps-5">
										<h6>Constant Optimization</h6>
										<p>We leave nothing to chance. We adjust strategies on the fly to ensure you always get maximum impact and ROI.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-6 offset-lg-1 text-center mt-lg-0 mt-8">
								<div className="position-relative z-1 d-inline-block mb-lg-0 mb-8">
									<img className="rounded-4 position-relative z-1" src="/assets/imgs/cta-5/img-1.png" alt="infinia" />
									<div className="alltuchtopdown tag-year position-absolute backdrop-filter bg-primary rounded-4 px-4 py-5 text-center z-1">
										<span className="h2 count fw-black my-0 lh-1 text-white text-nowrap"><span className="odometer" /> <CountUp end={98} enableScrollSpy={true} />+</span>
										<p className="text-white text-nowrap mb-0">Trackable metrics</p>
									</div>
									<div className="position-absolute tag-dots z-0 pt-5">
										<img className="alltuchtopdown" src="/assets/imgs/cta-4/vector.svg" alt="infinia" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
