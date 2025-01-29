'use client'
import Link from "next/link"
import { useState } from 'react'

export default function Cta4() {

	const [isOpen, setOpen] = useState(false)

	return (
		<>
			<section className="section-cta-4 pt-110 pb-110 @@classList">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 text-center">
							<div className="text-center rounded-4 position-relative d-inline-flex">
								<div className="zoom-img rounded-4 position-relative z-1">
									<img className="rounded-4" src="/assets/imgs/cta-4/img-1.png" alt="infinia" />
									
								</div>
								<div className="position-absolute top-100 start-0 translate-middle z-0 pt-5">
									<img className="alltuchtopdown" src="/assets/imgs/cta-4/vector.svg" alt="infinia" />
								</div>
							</div>
						</div>
						<div className="col-lg-6 mt-lg-0 mt-8">
							<h6 className="text-primary">What We Do</h6>
							<h5 className="ds-5 my-3">Technology that Transforms <br/> Outdoor Advertising</h5>
							
							<p className="fs-5 text-500">At Xchange, we combine innovation and cutting-edge technology to take outdoor advertising to the next level. Thanks to our advanced programmatic solutions, you can manage your campaigns in real time, optimize targeting and accurately measure results.</p>
							<p className="fs-5 text-500">Our tech-driven approach allows you to reach key audiences with dynamic messaging that adapts to the needs of each market.</p>
							
							<div className="row mt-8">
								<div className="d-flex align-items-center">
									<Link href="#" className="btn btn-gradient">
										Schedule a Meeting
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
									<Link href="#" className="ms-5 text-decoration-underline fw-bold">How We Work</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			
		</>
	)
}
