import { AppContainer } from "@/components/app-container";
import { InfoItem } from "@/components/info-item";
import { SectionHeader } from "@/components/section-header";
import { TechSpecCard } from "@/components/tech-spec-card";
import { ThreeCanvas } from "@/components/threejs-canvas";
import { RiBox3Line, RiDiscussLine, RiExternalLinkLine, RiGraduationCapLine, RiProjectorLine, RiSofaLine, RiTeamLine } from "@remixicon/react";
import Link from "next/link";
import Image from "next/image";
import { Classroom254Scene } from "@/three/classroom-254-scene";

export default function Page() {
	return (
		<>
			<AppContainer>
				<div className={"pt-5"}>
					<h1 className={"text-2xl font-semibold"}>Open-Space</h1>
					<p className={"text-xs text-muted-foreground mt-0.5"}>aud. 254</p>
					<div className={"flex flex-wrap gap-x-3 gap-y-1 mt-2"}>
						<Link className={"text-sm font-medium flex items-center gap-1"} href={"https://it.usm.md/specialties/informatica"} target={"_blank"}>
							Informatica
							<RiExternalLinkLine className={"size-3.5"} />
						</Link>
						<Link className={"text-sm font-medium flex items-center gap-1"} href={"https://it.usm.md/specialties/informatica-aplicata-licenta"} target={"_blank"}>
							Informatica Aplicata
							<RiExternalLinkLine className={"size-3.5"} />
						</Link>
						<Link className={"text-sm font-medium flex items-center gap-1"} href={"https://it.usm.md/specialties/designul-jocurilor"} target={"_blank"}>
							Designul Jocurilor
							<RiExternalLinkLine className={"size-3.5"} />
						</Link>
					</div>
				</div>
				<div className={"py-5 flex flex-col gap-8"}>
					<section>
						<SectionHeader icon={<RiTeamLine className={"size-4"} />}>Оснащение</SectionHeader>
						<div className={"grid grid-cols-1 sm:grid-cols-2 gap-4"}>
							<TechSpecCard icon={<RiProjectorLine className={"size-5"} />} title={"Мультимедиа"}>
								Интерактивная доска, проектор
								<Image className={"z-[-1] opacity-20 absolute top-0 -right-16"} src={"/projector.png"} alt={"headset"} width={300} height={300} />
							</TechSpecCard>
							<TechSpecCard icon={<RiSofaLine className={"size-5"} />} title={"Зона отдыха"}>
								Пуфики для обсуждений и неформальной работы
								<Image className={"z-[-1] opacity-20 absolute top-0 -right-16 hue-rotate-180"} src={"/puffic.png"} alt={"headset"} width={300} height={300} />
							</TechSpecCard>
						</div>
					</section>
					<section>
						<SectionHeader icon={<RiBox3Line className={"size-4"} />}>3D Тур</SectionHeader>
						<ThreeCanvas className={"h-[350px] w-full rounded-lg"} camera={{ position: [10, 4, 8], fov: 50 }}>
							<Classroom254Scene />
						</ThreeCanvas>
					</section>
					<section>
						<SectionHeader>О пространстве</SectionHeader>
						<div className={"grid grid-cols-1 sm:grid-cols-3 gap-4"}>
							<InfoItem icon={<RiGraduationCapLine className={"size-4"} />} title={"Программы"}>
								Informatica, Informatica Aplicata, Designul Jocurilor
							</InfoItem>
							<InfoItem icon={<RiTeamLine className={"size-4"} />} title={"Команды"}>
								Студенты собираются для командных проектов и пет-проектов
							</InfoItem>
							<InfoItem icon={<RiDiscussLine className={"size-4"} />} title={"Формат"}>
								Открытое пространство для обсуждений и коллаборации
							</InfoItem>
						</div>
					</section>
				</div>
			</AppContainer>
		</>
	);
}
