import { ProjectCard } from "@/components/ProjectCard"

type Project = {
	title: string
	subtitle?: string
	paragraphs: string[]
	link?: {
		prefix: string
		text: string
		href: string
	}
}

const projects: Project[] = [
	{
		title: "SER competition",
		paragraphs: [
			"I built a speech emotion recognition model for a neural networks class competition using PyTorch, Torchaudio, NumPy, and mel spectrogram features.",
			"The dataset was small, so most of the work was getting the model to generalize. I used SpecAugment, switched LSTM layers to GRU layers, added dropout, and won 2nd place overall with 70% accuracy.",
		],
	},
	{
		title: "Goldfish",
		paragraphs: [
			"For my capstone, I worked on an AI memory system that could share context across different LLM providers.",
			"I integrated HippoRAG for knowledge-graph memory, used Convex for long-term memory and agent state, and built a streaming search pipeline with Exa MCP for real-time context.",
		],
	},
	{
		title: "PropheSea",
		paragraphs: [
			"After getting interested in prediction markets, I worked on an agentic trading platform for Kalshi markets.",
			"We used Grok search to gather real-time sentiment, processed implied volatility, and generated event-driven bet recommendations. We ran historical backtests over NOAA data, hit 82% accuracy, and won 2nd place.",
		],
		link: {
			prefix: "You can read about it",
			text: "here",
			href: "https://devpost.com/software/prophesea",
		},
	},
	{
		title: "Adobe Flash clone",
		paragraphs: [
			"I started programming writing websites to host games and animations I'd create with Flash.",
			"Recreating Flash as a web app with Next.js and the HTML5 Canvas API was a really fun and rewarding experience.",
		],
		link: {
			prefix: "You can try it out",
			text: "here",
			href: "https://flash-clone-3.vercel.app/",
		},
	},
	{
		title: "Anki addon",
		paragraphs: [
			"For me, studying = doing Anki flashcards.",
			"One of the easiest ways to make studying more efficient was automatic flashcard generation from class notes.",
			"I built an Anki plugin backed by a microservice that calls the Gemini API, uses Pydantic for query validation, and reads notes with PyMuPDF.",
		],
		link: {
			prefix: "Take a look at the codebase",
			text: "here",
			href: "https://github.com/maalin2/anki",
		},
	},
	{
		title: "Gradient",
		paragraphs: [
			"After learning how hard lesson planning can be for new grade school teachers, I led a team of 6 building an all-in-one planning tool.",
			"We built a full-stack app with React, Gemini, and Express that lets teachers generate grade- and subject-specific lesson plans, then improve existing plans with tailored feedback.",
			"We stored generated plans in MongoDB and used them to create a forum where teachers could share knowledge and improve as a community.",
		],
	},
	{
		title: "Lymphedema Scanner",
		paragraphs: [
			"In freshman year, my team and I won a hackathon where we built a prototype iPhone app in just 2 weeks.",
			"We used Apple ARKit to scan swelling in the face due to lymphedema, then stored scan data and handled auth in Firebase.",
		],
	},
]

export function Projects() {
	return (
		<section>
			<h2 id="projects" className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
				projects
			</h2>
			<div>
				<p>
					Here are some of my favorite projects I've built. You can take a look at some of my other work on{" "}
					<a className="underline text-blue-500" href="https://www.github.com/maalin2">
						GitHub
					</a>
					.
				</p>
				<p>I'll keep adding links to writeups and demos as they go live.</p>
				<br />
			</div>
			<div className="grid grid-cols-3 gap-4">
				{projects.map((project) => (
					<ProjectCard
						key={project.title}
						title={project.title}
						subtitle={project.subtitle}
						paragraphs={project.paragraphs}
						link={project.link}
					/>
				))}
			</div>
			<br />
		</section>
	)
}
