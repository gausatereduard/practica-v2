import { AppContainer } from "@/components/app-container";
import { InfoItem } from "@/components/info-item";
import { SectionHeader } from "@/components/section-header";
import { TechSpecCard } from "@/components/tech-spec-card";
import { RiDiscussLine, RiExternalLinkLine, RiGraduationCapLine, RiImageLine, RiMapPin5Line, RiProjectorLine, RiSofaLine, RiTeamLine } from "@remixicon/react";
import Link from "next/link";

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
							</TechSpecCard>
							<TechSpecCard icon={<RiSofaLine className={"size-5"} />} title={"Зона отдыха"}>
								Пуфики для обсуждений и неформальной работы
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
						<SectionHeader>О пространстве</SectionHeader>
						<div className={"grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x"}>
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
