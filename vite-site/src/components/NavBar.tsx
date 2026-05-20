import resume from "@/assets/resume.pdf"
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu"

const navItems = [
	{ label: "about", href: "#about" },
	{ label: "projects", href: "#projects" },
	{ label: "experience", href: "#exp" },
	{ label: "resume", href: resume },
	{ label: "contact", href: "#contact" },
]

export function NavBar() {
	return (
		<header className="bg-white fixed w-full z-50">
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink id="home" className="tracking-tight scroll-m-20 font-semibold text-xl" href="/">
							mohammed maalin
						</NavigationMenuLink>
					</NavigationMenuItem>
					{navItems.map((item) => (
						<NavigationMenuItem key={item.href}>
							<NavigationMenuLink className="tracking-tight scroll-m-20 font-semibold text-lg" href={item.href}>
								{item.label}
							</NavigationMenuLink>
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	)
}
