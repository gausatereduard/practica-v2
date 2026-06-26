import { AppContainer } from "@/components/app-container";
import { InfoItem } from "@/components/info-item";
import { SectionHeader } from "@/components/section-header";
import { TechSpecCard } from "@/components/tech-spec-card";
import { ThreeCanvas } from "@/components/threejs-canvas";
import { ComputerLabScene } from "@/three/computer-lab-scene";
import { RiBox3Line, RiComputerLine, RiExternalLinkLine, RiGraduationCapLine, RiStarLine } from "@remixicon/react";
import Link from "next/link";

export default function Page() {
	return (
		<>
			<AppContainer>
				<div className={"pt-5"}>
					<h1 className={"text-2xl font-semibold"}>Компьютерная лаборатория</h1>
					<p className={"text-xs text-muted-foreground mt-0.5"}>aud. 350</p>
					<div className={"flex flex-wrap gap-x-3 gap-y-1 mt-2"}>
						<Link className={"text-sm font-medium flex items-center gap-1"} href={"https://it.usm.md/specialties/designul-jocurilor"} target={"_blank"}>
							Designul Jocurilor
							<RiExternalLinkLine className={"size-3.5"} />
						</Link>
					</div>
				</div>
				<div className={"py-5 flex flex-col gap-8"}>
					<section>
						<SectionHeader icon={<RiComputerLine className={"size-4"} />}>Оснащение</SectionHeader>
						<div className={"grid grid-cols-1 sm:grid-cols-2 gap-4"}>
							<TechSpecCard icon={<RiComputerLine className={"size-5"} />} title={"Рабочие станции"}>
								Intel i7 · 32GB RAM · RTX 3070 Super
							</TechSpecCard>
						</div>
					</section>
					<section>
						<SectionHeader icon={<RiBox3Line className={"size-4"} />}>3D Тур</SectionHeader>
						<ThreeCanvas className={"h-[350px] w-full rounded-lg"}>
							<ComputerLabScene />
						</ThreeCanvas>
					</section>
					<section>
						<SectionHeader>О программе</SectionHeader>
						<div className={"grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x"}>
							<InfoItem icon={<RiGraduationCapLine className={"size-4"} />} title={"Направления"}>
								Гейм-дизайн, Визуальный дизайн, 3D-моделирование
							</InfoItem>
							<InfoItem icon={<RiStarLine className={"size-4"} />} title={"Специализация"}>
								Designul Jocurilor — полный цикл разработки игр
							</InfoItem>
						</div>
					</section>
				</div>
			</AppContainer>
		</>
	);
}
