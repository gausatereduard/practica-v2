import { AppContainer } from "@/components/app-container";
import { Button } from "@/components/ui/button";
import { RiArrowLeftLine } from "@remixicon/react";
import Link from "next/link";

export function AppHeader() {
	return (
		<header className={"py-1"}>
			<AppContainer>
				<div className={"flex items-center justify-between gap-5 py-2"}>
					<Button size={"icon-sm"} variant={"ghost"} asChild>
						<Link href={"/classrooms"}>
							<RiArrowLeftLine />
						</Link>
					</Button>
					<div className={"flex items-center justify-center gap-2"}>
						<img src={"https://placehold.co/20x24"} alt={"USM logo"} />
						<p className={"text-sm font-[550]"}>Universitatea de Stat</p>
					</div>
					<div className={"size-8"}></div>
				</div>
			</AppContainer>
		</header>
	);
}
