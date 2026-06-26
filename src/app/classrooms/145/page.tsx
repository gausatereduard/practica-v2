import { AppContainer } from "@/components/app-container";
import { InfoItem } from "@/components/info-item";
import { SectionHeader } from "@/components/section-header";
import { TechSpecCard } from "@/components/tech-spec-card";
import {
	RiCalendarEventLine,
	RiComputerLine,
	RiDiscussLine,
	RiExternalLinkLine,
	RiGraduationCapLine,
	RiImageLine,
	RiMapPin5Line,
	RiProjectorLine,
	RiSofaLine,
} from "@remixicon/react";
import Link from "next/link";

export default function Page() {
	return (
		<>
			<AppContainer>
				<div className={"pt-5"}>
					<h1 className={"text-2xl font-semibold"}>Innovation Lab</h1>
					<p className={"text-xs text-muted-foreground mt-0.5"}>aud. 145</p>
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
						<SectionHeader icon={<RiComputerLine className={"size-4"} />}>Оснащение</SectionHeader>
						<div className={"grid grid-cols-1 sm:grid-cols-3 gap-4"}>
							<TechSpecCard icon={<RiComputerLine className={"size-5"} />} title={"Моноблоки"}>
								All-in-one ПК для студентов
							</TechSpecCard>
							<TechSpecCard icon={<RiProjectorLine className={"size-5"} />} title={"Мультимедиа"}>
								Стенд для презентаций, большой экран, интерактивная доска
							</TechSpecCard>
							<TechSpecCard icon={<RiSofaLine className={"size-5"} />} title={"Зона отдыха"}>
								Пуфики для неформальной работы и обсуждений
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
							<InfoItem icon={<RiCalendarEventLine className={"size-4"} />} title={"События"}>
								Лекции,{" "}
								<Link href={"https://it.usm.md/events/90"} className={"text-sm underline decoration-dashed"} target={"_blank"}>
									хакатоны
								</Link>
								, командные проекты
							</InfoItem>
							<InfoItem icon={<RiDiscussLine className={"size-4"} />} title={"Формат"}>
								Многофункциональное пространство для учебы, работы и мероприятий
							</InfoItem>
						</div>
					</section>
				</div>
			</AppContainer>
		</>
	);
}
