import type { ReactNode } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type ProjectCardProps = {
	title: string
	subtitle?: string
	children?: ReactNode
	paragraphs?: string[]
	link?: {
		href: string
		text: string
		prefix: string
	}
}

export function ProjectCard({ title, subtitle, children, paragraphs, link }: ProjectCardProps) {
	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>
					{title}
					{subtitle ? (
						<>
							{" "}
							{subtitle}
						</>
					) : null}
				</CardTitle>
			</CardHeader>
			<CardContent>
				{paragraphs?.map((paragraph) => (
					<p key={paragraph}>
						{paragraph}
						<br />
						<br />
					</p>
				))}
				{link ? (
					<p>
						{link.prefix}{" "}
						<a className="underline text-blue-500" href={link.href}>
							{link.text}
						</a>
						.
					</p>
				) : null}
				{children}
			</CardContent>
		</Card>
	)
}
