import { AppContainer } from "@/components/app-container";
import { Label } from "@/components/ui/label";
import { RiExternalLinkLine, RiMapPin5Line } from "@remixicon/react";
import Link from "next/link";

export default function Page() {
	return (
		<>
			<AppContainer>
				<div className={"pt-5"}>
					<h1 className={"text-2xl font-semibold"}>Virtual Reality</h1>
					<Link className={"text-sm font-medium flex items-center gap-2"} href={"https://it.usm.md/specialties/designul-jocurilor"} target={"_blank"}>
						Designul Jocurilor (I, II, III anul)
						<RiExternalLinkLine className={"size-4"} />
					</Link>
				</div>
				<div className={"py-5 flex flex-col gap-8"}>
					<section>
						<div className={"mb-2"}>
							<Label>
								<RiMapPin5Line className={"size-4"} />
								Как найти?
							</Label>
						</div>
						<div>
							<div className={"aspect-video max-h-60 w-full bg-muted rounded-md animate-pulse"}></div>
						</div>
					</section>
					<section>
						<div className={"mb-2"}>
							<Label>
								<RiMapPin5Line className={"size-4"} />
								Что тут есть?
							</Label>
						</div>
						<div>
							{/* TODO */}
							Список из оборудования в виде карточек: VR/AR-очки разных производителей HTC Vive, Oculus Rift, Meta Quest 2 12 компьютеров на i9, 32Gb RAM, RTX 2070 Super, каждый с
							2мя мониторами 2 проектора и интерактивная доска
						</div>
					</section>
					<section>
						<div className={"mb-2"}>
							<Label>
								<RiMapPin5Line className={"size-4"} />
								Для чего?
							</Label>
						</div>
						<div>
							{/* TODO */}
							Описание что в кабинете проходят пары на программе Designul Jocurilor на протяжении всех 3 лет обучения. Тут есть все для визуальной анимации, графического дизайна,
							создания и тестов XR приложений и/или игр. Осваиваются несколько игровых движков: Unity, Unreal Engine и многое другое (SteamVR, Blender, Maya, Vuforia). из
							официального источника:
							<code>Specializări: - Design vizual și animație - Dezvoltare de aplicații XR</code>
							<code>
								Principalele aspecte ale Dezvoltării de aplicații XR examinate în cursurile de specializare la facultate: Realitate virtuală și augmentată (ARKit, ARCore)
								Dezvoltarea jocurilor 3D pe platforma Unity (Unity, Blender) Dezvoltarea jocurilor pe platforma Unreal Engine (Unreal Engine, Maya) Dezvoltarea aplicațiilor de
								realitate virtuală pe platforma Unity (Unity, SteamVR) Dezvoltarea aplicațiilor de realitate augmentată cu Unity și Vuforia (Unity, Vuforia) Dezvoltarea proiectelor
								de realitate extinsă pe platforma Unreal Engine (Unreal Engine, ARKit & ARCore) Cursuri de formare a abilităților pentru specializare în Dezvoltare de aplicații XR:
								Grafică și animație 2D, Dezvoltarea jocurilor 2D pe platforma Unity, Fotogrametria și scanarea 3D, Inteligență artificială pentru jocurile video
							</code>
							<code>
								Principalele aspecte ale Designului vizual și animației examinate în cursurile de specializare la facultate: Artă digitală Modelare, texturare și animație 3D
								(Blender, Autodesk Maya) Dezvoltarea caracterului și a mediului înconjurător în motoarele de joc (Unity, Gaia Pro) Design-ul audio și efecte vizuale pentru
								dezvoltarea jocului (Adobe Audition, Houdini) Shader Graph în Unity (Unity) Producție virtuală 3D pentru realizarea de filme în timp real (Unreal Engine, Nvidia
								Omniverse) Montajul și imaginea video (Adobe Premiere Pro, DaVinci Resolve) Cursuri de formare a abilităților pentru specializare în Designul vizual și animație:
								Grafică și animație 2D, Dezvoltarea jocurilor 2D pe platforma Unity, Dezvoltarea jocurilor 3D pe platforma Unity, Fotogrametria și scanarea 3D
							</code>
						</div>
					</section>
				</div>
			</AppContainer>
		</>
	);
}
