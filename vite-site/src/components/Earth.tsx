import earth from "@/assets/earth.gif"

export function Earth() {
	return (
		<aside className="fixed right-0 top-20 w-4/10 h-auto z-40">
			<div className="flex justify-center">
				<img src={earth} />
			</div>
		</aside>
	)
}
