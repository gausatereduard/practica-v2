import { AppContainer } from "@/components/app-container";
import { Button } from "@/components/ui/button";
import { RiArrowLeftLine } from "@remixicon/react";
import Link from "next/link";
import Image from "next/image";

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
						<Image src={"/usm.png"} alt={"USM logo"} width={20} height={24} />
						<p className={"text-sm font-semibold"}>Universitatea de Stat</p>
					</div>
					<div className={"size-8"}></div>
				</div>
			</AppContainer>
		</header>
	);
}
