import cm from "@/assets/cm.png"
import wf from "@/assets/wf.png"

export function Experience() {
	return (
		<section>
			<h2 id="exp" className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
				experience
			</h2>
			<div className="space-y-4">
				<div className="flex items-start space-x-4">
					<div className="w-2/10">
						<img src={wf} />
					</div>
					<div className="w-8/10">
						<p>
							I'm an incoming <span className="font-semibold">Software Engineer at Wells Fargo</span>.
							Previously, I interned there building internal AI agents for platform engineering workflows and
							working on smart contracts with the Distributed Ledger Technology team.
						</p>
					</div>
				</div>
				<div className="flex items-start space-x-4">
					<div className="w-2/10">
						<img src={cm} />
					</div>
					<div className="w-8/10">
						<p>
							Previously, I was at{" "}
							<span className="font-semibold">the College of Medicine at Ohio State as a Research Assistant</span>{" "}
							where I built ETL systems and web scrapers for survey outreach, then used statistical methods to
							analyze M1 medical textbooks.
						</p>
					</div>
				</div>
				<br />
			</div>
		</section>
	)
}
