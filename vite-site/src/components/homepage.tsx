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

interface ProjectCardProps {
	title: string | React.ReactNode;
	description: string | React.ReactNode;
}

function ProjectCard({ title, description }: ProjectCardProps) {
	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent>
				{typeof description === 'string' ? <p>{description}</p> : description}
			</CardContent>
		</Card>
	);
}

interface ExperienceItemProps {
	image: string;
	description: string | React.ReactNode;
}

function ExperienceItem({ image, description }: ExperienceItemProps) {
	return (
		<div className="flex items-start space-x-4">
			<div className="w-3/20">
				<img src={image}/>
			</div>
			<div className="w-17/20">
				<p>{description}</p>
			</div>
		</div>
	);
}

function Navigation() {
	return (
		<div className="bg-white fixed w-full z-50">
			<NavigationMenu>
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
						<NavigationMenuLink className="tracking-tight scroll-m-20 font-semibold text-lg" href="#exp">
							experience
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink className="tracking-tight scroll-m-20 font-semibold text-lg" href="#projects">
							projects
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
	);
}

function About() {
	return (
		<>
			<h2 id="about" className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
				about
			</h2>
			Hello! I'm a senior at <span className="font-semibold text-red-600">The Ohio State University</span> studying Computer Science and Engineering, with a specialization in Artificial Intelligence.

			<br/><br/>

			I've been programming since middle school, building small games and making websites, and have a lot of experience building full-stack apps and AI systems. When I'm not building personal projects or studying, I love watching films, and playing chess.
			<br/><br/>
		</>
	);
}

function Experience() {
	return (
		<>
			<h2 id="exp" className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
				experience
			</h2>
			<div className="space-y-4">
				<ExperienceItem
					image={wf}
					description={<>In summer 2025, I was a <span className="font-semibold">Software Engineering intern at Wells Fargo</span>, where I built internal AI agents to improve CI/CD processes and make project manager's lives easier. I also worked on smart contracts as part of the Distributed Ledger Technology team.</>}
				/>
				<ExperienceItem
					image={cm}
					description={<>Before that, I was at <span className="font-semibold">the College of Medicine at Ohio State as a Research Assistant</span> where I built ETL systems and web scrapers to improve survey outreach, and used statistical methods to analyze M1 medical textbooks.</>}
				/>
				<br/>
			</div>
		</>
	);
}

function Projects() {
	return (
		<>
			<h2 id="projects" className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
				projects
			</h2>
			<div>
				<p> Here are some of my favorite projects I've built. You can take a look at some of my other work on <a className="underline text-blue-500" href="https://www.github.com/maalin2">GitHub</a>.</p>
				<p>In the future as I build more projects you'll be able to find some devposts here.</p>
				<br/>
			</div>
			<div className="grid grid-cols-3 gap-4">
				<ProjectCard
					title="Adobe Flash clone"
					description={<>I started coding making Flash games and animations. Recreating Flash as a webapp with Next.js and HTML5 Canvas was a rewarding full-circle moment. Try it out <a className="underline text-blue-500" href="/clone">here</a>.</>}
				/>
				<ProjectCard
					title="Anki addon"
					description={<>An Anki plugin that auto-generates flashcards from PDFs using the Gemini API. Built to make studying more efficient. Check out the code <a className="underline text-blue-500" href="https://github.com/maalin2/anki">here</a>.</>}
				/>
				<ProjectCard
					title={<>Gradient - <em>JPMC CodeForGood</em></>}
					description="Led a team of 6 to build an AI-powered lesson planning platform and a forum where teachers can share knowledge. Built with React, Gemini, Express, and MongoDB."
				/>
				<ProjectCard
					title="Lymphedema Scanner"
					description="Won a hackathon building a 95% accurate iPhone app that uses ARKit to scan facial swelling from lymphedema. Firebase for data storage and auth."
				/>
				<ProjectCard
					title={<>PropheSea - <em>HackPrinceton</em></>}
					description={<>3rd place. Built an agentic trading platform for Kalshi markets using Grok for real-time sentiment analysis. Achieved 82% accuracy on historical backtests over NOAA data. Check out the <a className="underline text-blue-500" href="https://devpost.com/software/prophesea">devpost</a>.</>}
				/>
			</div>
			<br/>
		</>
	);
}

function Contact() {
	return (
		<>
			<h2 id="contact" className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
				contact
			</h2>
			<p>
				You can email me at <code>hello @ [website]</code>.
				<br/>
				My linkedin is <a className="underline text-blue-500" href="https://www.linkedin.com/in/mmaalin">here</a>.
			</p>
		</>
	);
}

export default function HomePage() {
	return (
		<div className="relative flex flex-col">
			<Navigation />
			<div className="flex flex-col items-center justify-center">
				<div className="flex pt-7">
					<div className="w-6/10 p-6 relative">
						<About />
						<Experience />
						<Projects />
						<Contact />
					</div>
					<div className="fixed right-0 top-20 w-4/10 h-auto z-40">
						<div className="flex justify-center">
							<img src={earth} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
