import { AppContainer } from "@/components/app-container";
import { InfoItem } from "@/components/info-item";
import { SectionHeader } from "@/components/section-header";
import { TechSpecCard } from "@/components/tech-spec-card";
import { TechTag } from "@/components/tech-tag";
import { RiCodeLine, RiComputerLine, RiExternalLinkLine, RiGamepadLine, RiGlassesLine, RiGraduationCapLine, RiImageLine, RiMapPin5Line, RiStarLine } from "@remixicon/react";
import Link from "next/link";

export default function Page() {
	return (
		<>
			<AppContainer>
				<div className={"pt-5"}>
					<h1 className={"text-2xl font-semibold"}>Virtual Reality</h1>
					<p className={"text-xs text-muted-foreground mt-0.5"}>aud. 423</p>
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
						<div className={"grid grid-cols-1 sm:grid-cols-3 gap-4"}>
							<TechSpecCard icon={<RiGlassesLine className={"size-5"} />} title={"VR/AR очки"}>
								HTC Vive, Oculus Rift, Meta Quest 2, PlayStation 4 и другое
							</TechSpecCard>
							<TechSpecCard icon={<RiComputerLine className={"size-5"} />} title={"Рабочие станции"}>
								2 монитора · Intel i9 · 32GB RAM · RTX 2070 Super
							</TechSpecCard>
						</div>
					</section>
					<section>
						<SectionHeader icon={<RiImageLine className={"size-4"} />}>Фото</SectionHeader>
						<div className={"grid grid-cols-2 lg:grid-cols-4 gap-4"}>
							<div className={"aspect-video bg-muted rounded-md animate-pulse"} />
							<div className={"aspect-video bg-muted rounded-md animate-pulse"} />
							<div className={"aspect-video bg-muted rounded-md animate-pulse"} />
							<div className={"aspect-video bg-muted rounded-md animate-pulse"} />
						</div>
					</section>
					<section>
						<SectionHeader>О программе</SectionHeader>
						<div className={"grid grid-cols-1 sm:grid-cols-2 divide-y"}>
							<InfoItem icon={<RiGraduationCapLine className={"size-4"} />} title={"Специализации"} className={"sm:border-r"}>
								Design vizual și animație, Dezvoltare aplicații XR
							</InfoItem>
							<InfoItem icon={<RiGamepadLine className={"size-4"} />} title={"Игровые движки"} titleClass={"mb-2"}>
								<p className={"text-muted-foreground flex items-center flex-wrap gap-2"}>
									<TechTag src={"/unity.svg"} alt={"Unity icon"} name={"Unity"} imgClass={"size-3.5"} />
									<TechTag src={"/ue-icon.svg"} alt={"Unreal Engine icon"} name={"Unreal Engine"} imgClass={"size-4"} comma={false} />
								</p>
							</InfoItem>
							<InfoItem icon={<RiStarLine className={"size-4"} />} title={"Ключевые курсы"} className={"sm:border-r"}>
								3D-моделирование, VR/AR разработка, гейм-дизайн, шейдеры, виртуальное производство
							</InfoItem>
							<InfoItem icon={<RiCodeLine className={"size-4"} />} title={"Инструменты"} titleClass={"mb-2"}>
								<p className={"text-muted-foreground flex items-center flex-wrap gap-2"}>
									<TechTag src={"/blender.png"} alt={"Blender icon"} name={"Blender"} imgClass={"size-4"} />
									<TechTag src={"/autodesk-maya.png"} alt={"Autodesk Maya icon"} name={"Maya"} imgClass={"size-3.5"} />
									<TechTag src={"/steam.svg"} alt={"Steam icon"} name={"SteamVR"} imgClass={"size-3.5"} />
									<TechTag src={"/vuforia.svg"} alt={"Vuforia icon"} name={"Vuforia"} imgClass={"size-3.5"} />
									<TechTag src={"/adobe-suite.svg"} alt={"Adobe Suite icon"} name={"Adobe Suite"} imgClass={"size-3.5"} comma={false} />
								</p>
							</InfoItem>
						</div>
					</section>
				</div>
			</AppContainer>
		</>
	);
}
