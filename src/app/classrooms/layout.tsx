import { AppHeader } from "@/components/app-header";
import { BackgroundDecorations } from "@/components/background-decorations";
import { Footer } from "@/components/footer";
import { GodRays, NeuroNoise } from "@paper-design/shaders-react";

export default function Layout({ children }: Readonly<{ children?: React.ReactNode }>) {
	return (
		<>
			{/*<NeuroNoise
				width={'100%'}
				height={'100%'}
				className={'fixed inset-0 top-0 opacity-10 z-[-1]'}
				colorFront="#ffffff"
				colorMid="#c365ec"
				colorBack="gray"
				brightness={0.05}
				contrast={0.3}
				speed={1}
			/>*/}

			<div className={"absolute top-0 left-0 w-full h-screen z-[-1] pointer-events-none select-none"}>
				<GodRays
					width={"100%"}
					height={"100%"}
					className={"absolute inset-0 top-0 opacity-10"}
					colors={["#a600ff6e", "#6200fff0", "#ffffff", "#33fff5"]}
					colorBack="#ffffff"
					colorBloom="#0000ff"
					bloom={0.4}
					intensity={0.8}
					density={0.3}
					spotty={0.3}
					midSize={0.2}
					midIntensity={0.4}
					speed={0.75}
					offsetY={-0.55}
				/>
				<div className={"absolute bg-linear-to-t from-background to-transparent bottom-0 left-0 w-full h-56"}></div>
			</div>
			<AppHeader />
			{/*<BackgroundDecorations />*/}
			<main className={"flex-1"}>{children}</main>
			<Footer />
		</>
	);
}
