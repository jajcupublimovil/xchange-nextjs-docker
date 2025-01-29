import Layout from "@/components/layout/Layout"
import Services3 from "@/components/sections/Services3"
import Contact4 from "@/components/sections/Contact4"
import Cta4 from "@/components/sections/Cta4"
import Cta8 from "@/components/sections/Cta8"
import Project2 from "@/components/sections/Project2"

export default function Marketers() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				
                <Services3/>
				<Contact4/>
				<Cta4/>
				<Cta8/>
				<Project2/>

			</Layout>
		</>
	)
}