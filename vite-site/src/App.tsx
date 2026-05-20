import { About } from "@/components/About"
import { Contact } from "@/components/Contact"
import { Earth } from "@/components/Earth"
import { Experience } from "@/components/Experience"
import { NavBar } from "@/components/NavBar"
import { Projects } from "@/components/Projects"

const App = () => {
	return (
		<div className="relative">
			<div className="flex flex-col">
				<NavBar />
				<div className="flex flex-col items-center justify-center">
					<div>
						<div className="flex pt-7">
							<main className="w-6/10 p-6 relative">
								<About />
								<Experience />
								<Projects />
								<Contact />
							</main>
							<Earth />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
