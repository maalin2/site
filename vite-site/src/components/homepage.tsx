import earth from "@/assets/earth.gif";
import resume from "@/assets/resume.pdf";
import wf from "@/assets/wf.png";
import cm from "@/assets/cm.png";
import {
	Card,
	CardContent, 
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
}
from "@/components/ui/navigation-menu";

export default function HomePage() {
	return (
		<div className="relative">
		<div className=" flex flex-col">
			<div className="bg-white fixed  w-full z-50 ">
			<NavigationMenu >
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink id="home" className="tracking-tight scroll-m-20 font-semibold text-xl" href="/">
							mohammed maalin
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink className="tracking-tight scroll-mt-20 font-semibold text-lg" href="#about">
							about
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink className="tracking-tight scroll-m-20 font-semibold text-lg" href="#projects">
							projects
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink className="tracking-tight scroll-m-20 font-semibold text-lg" href="#exp">
							experience
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink className="tracking-tight scroll-m-20 font-semibold text-lg" href={resume}>
							resume
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink className="tracking-tight scroll-m-20 font-semibold text-lg" href="#contact">
							contact
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			</div>
			<div className="flex flex-col items-center justify-center">
			<div>
				<div className="flex pt-7">
					<div className="w-6/10 p-6 relative">
						<h2 id="about" className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Hello!
    </h2>
	My name is Mohammed Maalin. I'm a senior at <span className="font-semibold text-red-600">The Ohio State University</span> studying Computer Science and Engineering, with a specialization in Artificial Intelligence. 
		
	<br/><br/>
	
	I've been programming since middle school, building small games and making websites, and have a lot of experience building full-stack apps and AI systems. When I'm not programming, I love watching films, listening to music, playing chess and reading about technology and business.
	<br/><br/>

	Interested in artifical intelligence, stablecoins, and venture capital.

	<br/><br/>

	<h2 id="exp" className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      experience
    </h2>
    <div className="space-y-4">
    	<div className="flex items-start space-x-4">
		<div className="w-2/10">
		      <img src={wf}/>
		</div>
		<div className="w-8/10">
		      <p>
			I recently finished a <span className="font-semibold">Software Engineering internship at Wells Fargo</span>, where I built internal AI agents to improve CI/CD processes, and worked on smart contracts as part of the Distributed Ledger Technology team.
		      </p>
		</div>
	</div>
    	<div className="flex items-start space-x-4">
		<div className="w-2/10">
		      <img src={cm}/>
		</div>
		<div className="w-8/10">
		      <p>
			Previously, I was at <span className="font-semibold">the College of Medicine at Ohio State as a Research Assistant</span> where I built ETL systems and web scrapers to improve survey outreach, and used statistical methods to analyze M1 medical textbooks.
		      </p>
		</div>
	</div>
	<br/>
    </div>
    	<h2 id="projects" className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      projects
    </h2>
    	<div>
	<p> Here are some of my favorite projects I've built. You can take a look at some of my other work on <a className="underline text-blue-500" href="https://www.github.com/maalin2">GitHub</a>.</p>
		<p>In the future as I build more projects you'll be able to find some devposts here.</p>
		<br/>
	</div>
        <div className="grid grid-cols-3 gap-4">
    	 <Card className="w-full max-w-sm">
	       <CardHeader>
			<CardTitle>
				Adobe Flash clone
			</CardTitle>

						</CardHeader>
						<CardContent>
							<div >
							<p>
								I started programming writing websites to host games and animations I'd create with Flash. 
							</p>
								<br/>
									
								<p>
								So recreating Flash as a webapp, using Next.js and HTML5 Canvas objects, was a really fun and rewarding experience.
									</p>

									<br/>
									You can try it out <a className="underline text-blue-500" href="https://flash-clone-3.vercel.app/">here</a>. 
							</div>
						</CardContent>
						</Card>
   	 <Card className="w-full max-w-sm">
	       <CardHeader>
			<CardTitle>
				Anki addon
			</CardTitle>

						</CardHeader>
						<CardContent>
							<p>
								For me, studying = doing Anki flashcards.
							</p>
							<br/>
							<p>
								So one of the easiest ways to make studying more efficient for me was to have automatic flashcard generation from class notes.
							</p>
							<br/>
							<p>
								So I built an Anki plugin that uses a microservice that calls the Gemini API, Pydantic for query validation and pymupdf for reading the notes.
							</p>
							<br/>
							<p>
								Take a look at the codebase <a className="underline text-blue-500" href="https://github.com/maalin2/anki">here</a>.
							</p>

						</CardContent>
						</Card>
   	 <Card className="w-full max-w-sm">
	       <CardHeader>
			<CardTitle>
				Gradient - <em>JPMC CodeForGood</em>
			</CardTitle>

						</CardHeader>
						<CardContent>
							<p>After learning about the difficulty new grade school teachers have in building lesson plans, I led a team of 6 in developing an all-in-one system for teachers to organize their teaching.</p>
						<br/>
							<p>First, we built a fullstack app with React, Gemini, and Express that allows teachers to not only generate grade and subject-specific lesson plans, but improve on existing plans with tailored feedback.
						</p>
						<br/>
						<p>
							Then, we stored these newly-generated plans stored on a MongoDB collection to create a forum where teachers can share knowledge and improve as a community.
						</p>
						</CardContent>
						</Card>
   	 <Card className="w-full max-w-sm">
	       <CardHeader>
			<CardTitle>
				Lymphedema Scanner <em>OSU-COM Appathon submission</em>
			</CardTitle>

						</CardHeader>
						<CardContent>
							<p>In freshman year, my team and I won a hackathon where we built a prototype iPhone app in just 2 weeks.</p>
							<br/>
							<p>We used a mesh and the Apple ARKit library to scan swelling in the face due to lymphedema, storing alll of the data and handling auth in Firebase.</p>
						</CardContent>
						</Card>
	
    </div>
    <br/>
 	<h2 id="contact" className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
	contact
    </h2>
    <p>
	You can email me at <code>hello @ [website]</code>.
	<br/>
	My linkedin is <a className="underline text-blue-500" href="https://www.linkedin.com/in/mmaalin">here</a>.

    </p>
   


				

</div>
					<div className="fixed right-0 top-20 w-4/10 h-auto z-40">
						<div className="flex justify-center">
							<img src={earth} />
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
		</div>
	)
}
