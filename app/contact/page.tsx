import Layout from "@/components/layout/Layout";
import Contact5 from "@/components/sections/Contact5";
import Contact4 from "@/components/sections/Contact4";
import Contact6 from "@/components/sections/Contact6";

export default function Contact() {
    return ( 
        <>
            <Layout headerStyle={1} footerStyle={1}>

                <Contact4/>
                <Contact6/>
                <Contact5/>

                <div className="contact-map w-100">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.332792000835!2d144.96011341744386!3d-37.805673299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sbd!4v1685027435635!5m2!1sen!2sbd" allowFullScreen loading="lazy" />
				</div>

            </Layout>

        </>
    )
}