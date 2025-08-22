import { Button } from "@/components/ui/button"
import earth from "@/assets/earth.gif"
import resume from "@/assets/resume.pdf"
import wf from "@/assets/wf.png"
import cm from "@/assets/cm.png"
import {
	Card,
	CardAction, 
	CardContent, 
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
}
from "@/components/ui/navigation-menu"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
					//<ListItem href="" title="">Mohammed Maalin</ListItem>

function App() {
	return (
		<div className="flex flex-col">
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink className="tracking-tight scroll-m-20 font-semibold text-xl" href="/">
							mohammed maalin
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink className="tracking-tight scroll-m-20 font-semibold text-lg" href="/">
							about
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink className="tracking-tight scroll-m-20 font-semibold text-lg" href="/">
							projects
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink className="tracking-tight scroll-m-20 font-semibold text-lg" href="/">
							experience
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink className="tracking-tight scroll-m-20 font-semibold text-lg" href={resume}>
							resume
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink className="tracking-tight scroll-m-20 font-semibold text-lg" href="/">
							contact
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<div className="flex flex-col items-center justify-center">
			</div>
			<div>
				<div className="flex">
					<div className="w-6/10 p-6 relative">
						<h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Hello!
    </h2>
    <p>
	My name is Mohammed Maalin. I'm a senior at <span className="font-semibold text-red-600">The Ohio State University</span> studying Computer Science and Engineering, with a specialization in Artificial Intelligence. 
		
	<br/><br/>
	
	I've been programming since middle school, building small games and making websites, and have a lot of experience building full-stack apps and AI systems. When I'm not programming, I love watching films, listening to music, playing chess and reading about technology and business.
    </p>
	<br/>
	<h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      experience
    </h2>
    <div className="space-y-4">
    	<div className="flex items-start space-x-4">
		<div className="w-3/10">
		      <img src={wf}/>
		</div>
		<div className="w-7/10">
		      <p>
			I recently finished a <span className="font-semibold">Software Engineering internship at Wells Fargo</span>, where I built internal AI agents to improve CI/CD processes, and worked on smart contracts as part of the Distributed Ledger Technology team.
		      </p>
		</div>
	</div>
    	<div className="flex items-start space-x-4">
		<div className="w-3/10">
		      <img src={cm}/>
		</div>
		<div className="w-7/10">
		      <p>
			Previously, I was at <span className="font-semibold">the College of Medicine at Ohio State as a Research Assistant</span> where I built ETL systems and web scrapers to improve survey outreach.
		      </p>
		</div>
	</div>
    </div>
    	<h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      projects
    </h2>
        <div className="grid grid-cols-3 gap-4">
    	 <Card className="w-full max-w-sm">
	       <CardHeader>
			<CardTitle>
				hello!
			</CardTitle>

						</CardHeader>
						<CardContent>
							hi
						</CardContent>
						</Card>
   	 <Card className="w-full max-w-sm">
	       <CardHeader>
			<CardTitle>
				hello!
			</CardTitle>

						</CardHeader>
						<CardContent>
							hi
						</CardContent>
						</Card>
   	 <Card className="w-full max-w-sm">
	       <CardHeader>
			<CardTitle>
				hello!
			</CardTitle>

						</CardHeader>
						<CardContent>
							hi
						</CardContent>
						</Card>
   	 <Card className="w-full max-w-sm">
	       <CardHeader>
			<CardTitle>
				hello!
			</CardTitle>

						</CardHeader>
						<CardContent>
							hi
						</CardContent>
						</Card>
	
y
    </div>
    <br/>
 	<h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
	contact
    </h2>
    <p>
	You can email me at <code>hello @ [website]</code>.
	<br/>
	My linkedin is <a className="underline text-blue-500" href="https://www.linkedin.com/in/mmaalin">here</a>.

    </p>
   


				

</div>
					<div className="w-4/10 flex justify-center items-center">
						<img
							src={earth}
						/>
					</div>
				</div>
			</div>
		</div>
	)



}

export default App
