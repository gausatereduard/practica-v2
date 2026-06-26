import { AppContainer } from "@/components/app-container";
import { InfoItem } from "@/components/info-item";
import { SectionHeader } from "@/components/section-header";
import { TechSpecCard } from "@/components/tech-spec-card";
import { RiComputerLine, RiExternalLinkLine, RiGraduationCapLine, RiImageLine, RiMapPin5Line, RiPaletteLine, RiStarLine } from "@remixicon/react";
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
						<SectionHeader icon={<RiImageLine className={"size-4"} />}>Фото</SectionHeader>
						<div className={"grid grid-cols-2 lg:grid-cols-4 gap-4"}>
							<div className={"aspect-video bg-muted rounded-md animate-pulse"} />
							<div className={"aspect-video bg-muted rounded-md animate-pulse"} />
							<div className={"aspect-video bg-muted rounded-md animate-pulse"} />
							<div className={"aspect-video bg-muted rounded-md animate-pulse"} />
						</div>
					</section>
					<section>
						<SectionHeader icon={<RiMapPin5Line className={"size-4"} />}>Как найти?</SectionHeader>
						<div>
							<div className={"aspect-video max-h-60 w-full bg-muted rounded-md animate-pulse"}>SVG карта окружения</div>
						</div>
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
