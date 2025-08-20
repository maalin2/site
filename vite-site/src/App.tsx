import { Button } from "@/components/ui/button"
import earth from "@/assets/earth.gif"
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
						<NavigationMenuLink className="tracking-tight scroll-m-20 font-semibold text-lg" href="/">
							contact
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<div className="flex flex-col items-center justify-center">
			</div>
			<div>
				<div className="flex ">
					<div className="w-7/10 p-6 relative">
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
					</div>
					<div className="w-3/10 flex justify-center items-center">
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
