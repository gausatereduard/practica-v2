import { AppContainer } from "@/components/app-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RiCodeLine, RiComputerLine, RiExternalLinkLine, RiGamepadLine, RiGlassesLine, RiGraduationCapLine, RiMapPin5Line, RiStarLine } from "@remixicon/react";
import Link from "next/link";
import Image from "next/image";

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
						<div className={"mb-4"}>
							<Label>
								<RiComputerLine className={"size-4"} />
								Оснащение
							</Label>
						</div>
						<div className={"grid grid-cols-1 sm:grid-cols-3 gap-4"}>
							<Card size="sm">
								<CardHeader>
									<RiGlassesLine className={"size-5"} />
									<CardTitle>VR/AR очки</CardTitle>
								</CardHeader>
								<CardContent className={"text-sm text-muted-foreground"}>HTC Vive, Oculus Rift, Meta Quest 2, PlayStation 4 и другое</CardContent>
							</Card>
							<Card size="sm">
								<CardHeader>
									<RiComputerLine className={"size-5"} />
									<CardTitle>Рабочие станции</CardTitle>
								</CardHeader>
								<CardContent className={"text-sm text-muted-foreground"}>2 монитора · Intel i9 · 32GB RAM · RTX 2070 Super</CardContent>
							</Card>
						</div>
					</section>
					<section>
						<div className={"mb-4"}>
							<Label>
								<RiMapPin5Line className={"size-4"} />
								Как найти?
							</Label>
						</div>
						<div>
							<div className={"aspect-video max-h-60 w-full bg-muted rounded-md animate-pulse"}>SVG карта окружения</div>
						</div>
					</section>
					<section>
						<div className={"mb-4"}>
							<Label>О программе</Label>
						</div>
						<div className={"grid grid-cols-1 sm:grid-cols-2 divide-y"}>
							<div className={"flex gap-3 bg-muted p-4 sm:border-r"}>
								<RiGraduationCapLine className={"size-4 mt-0.5 shrink-0 text-muted-foreground"} />
								<div>
									<p className={"font-medium"}>Специализации</p>
									<p className={"text-sm text-muted-foreground"}>Design vizual și animație, Dezvoltare aplicații XR</p>
								</div>
							</div>
							<div className={"flex gap-3 bg-muted p-4"}>
								<RiGamepadLine className={"size-4 mt-0.5 shrink-0 text-muted-foreground"} />
								<div>
									<p className={"font-medium mb-2"}>Игровые движки</p>
									<p className={"text-muted-foreground flex items-center flex-wrap gap-2"}>
										<span className={"text-sm flex items-center gap-1 leading-0"}>
											<Image className={"block size-3.5"} src={"/unity.svg"} alt={"Unity icon"} width={16} height={16} />
											Unity,
										</span>
										<span className={"text-sm flex items-center gap-1 leading-0"}>
											<Image className={"block size-4"} src={"/ue-icon.svg"} alt={"Unreal Engine icon"} width={16} height={16} />
											Unreal Engine
										</span>
									</p>
								</div>
							</div>
							<div className={"flex gap-3 bg-muted p-4"}>
								<RiStarLine className={"size-4 mt-0.5 shrink-0 text-muted-foreground"} />
								<div>
									<p className={"font-medium"}>Ключевые курсы</p>
									<p className={"text-sm text-muted-foreground"}>3D-моделирование, VR/AR разработка, гейм-дизайн, шейдеры, виртуальное производство</p>
								</div>
							</div>
							<div className={"flex gap-3 bg-muted p-4 sm:border-r"}>
								<RiCodeLine className={"size-4 mt-0.5 shrink-0 text-muted-foreground"} />
								<div>
									<p className={"font-medium mb-2"}>Инструменты</p>
									<p className={"text-muted-foreground flex items-center flex-wrap gap-2"}>
										<span className={"text-sm flex items-center gap-1 leading-0"}>
											<Image className={"block size-4"} src={"/blender.png"} alt={"Blender icon"} width={16} height={16} />
											Blender,
										</span>
										<span className={"text-sm flex items-center gap-1 leading-0"}>
											<Image className={"block size-3.5"} src={"/autodesk-maya.png"} alt={"Autodesk Maya icon"} width={16} height={16} />
											Maya,
										</span>
										<span className={"text-sm flex items-center gap-1 leading-0"}>
											<Image className={"block size-3.5"} src={"/steam.svg"} alt={"Steam icon"} width={16} height={16} />
											SteamVR,
										</span>
										<span className={"text-sm flex items-center gap-1 leading-0"}>
											<Image className={"block size-3.5"} src={"/vuforia.svg"} alt={"Vuforia icon"} width={16} height={16} />
											Vuforia,
										</span>
										<span className={"text-sm flex items-center gap-1 leading-0"}>
											<Image className={"block size-3.5"} src={"/adobe-suite.svg"} alt={"Adobe Suite icon"} width={16} height={16} />
											Adobe Suite
										</span>
									</p>
								</div>
							</div>
						</div>
					</section>
				</div>
			</AppContainer>
		</>
	);
}
