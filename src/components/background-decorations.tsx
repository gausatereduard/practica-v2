import Image from "next/image";

function PulsingWrapper({ children, duration }: { children: React.ReactNode; duration: number }) {
	return (
		<div className={"animate-pulse"} style={{ animationDuration: `${duration}s` }}>
			{children}
		</div>
	);
}

export function BackgroundDecorations() {
	return (
		<div className={"w-full opacity-30 fixed inset-0 pointer-events-none z-[-2] overflow-hidden"}>
			<PulsingWrapper duration={5}>
				<Image src={"/fluid-abstract-splash-2.png"} alt={""} width={320} height={320} className={"absolute left-20 top-10 w-80 opacity-15 blur-sm -rotate-6"} />
			</PulsingWrapper>
			<PulsingWrapper duration={4}>
				<Image src={"/glass-dollar-symbol.png"} alt={""} width={112} height={112} className={"absolute left-8 top-1/3 w-28 opacity-30"} />
			</PulsingWrapper>
			<PulsingWrapper duration={7}>
				<Image src={"/fluid-sphere.png"} alt={""} width={80} height={80} className={"absolute -left-4 bottom-[30%] w-20 opacity-25"} />
			</PulsingWrapper>
			<PulsingWrapper duration={6}>
				<Image src={"/glass-gift-box-1.png"} alt={""} width={128} height={128} className={"absolute left-4 bottom-12 w-32 opacity-20 blur-xs rotate-12"} />
			</PulsingWrapper>
			<PulsingWrapper duration={3}>
				<Image src={"/glass-shield.png"} alt={""} width={144} height={144} className={"absolute -right-8 top-14 w-36 opacity-25 rotate-6"} />
			</PulsingWrapper>
			<PulsingWrapper duration={8}>
				<Image src={"/glass-bitcoin-symbol.png"} alt={""} width={96} height={96} className={"absolute right-20 top-1/4 w-24 opacity-35"} />
			</PulsingWrapper>
			<PulsingWrapper duration={5}>
				<Image src={"/glass-pie-chart.png"} alt={""} width={80} height={80} className={"absolute -right-3 top-2/3 w-20 opacity-20 rotate-12"} />
			</PulsingWrapper>
			<PulsingWrapper duration={6}>
				<Image src={"/fluid-envelope.png"} alt={""} width={112} height={112} className={"absolute right-64 bottom-14 w-28 opacity-20 blur-xs -rotate-6"} />
			</PulsingWrapper>
			<PulsingWrapper duration={4}>
				<Image src={"/fluid-abstract-splash-2.png"} alt={""} width={160} height={160} className={"absolute -left-32 bottom-6 w-40 opacity-10 blur-md hidden sm:block"} />
			</PulsingWrapper>
		</div>
	);
}
