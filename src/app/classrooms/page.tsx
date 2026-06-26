import { AppContainer } from "@/components/app-container";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RiFlaskLine, RiTeamLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
	return (
		<>
			<AppContainer>
				<div className={"py-5 flex flex-col gap-8"}>
					<section>
						<div className={"mb-2"}>
							<Label>
								<RiFlaskLine className={"size-4"} />
								Лаборатории
							</Label>
						</div>
						<div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"}>
							<Link href={"/classrooms/423"} className={"animate-[fadeIn_0.5s_ease-out_both]"} style={{ animationDelay: "0.1s" }}>
								<Card className={"h-full bg-linear-to-b from-accent from-10% to-background"}>
									<CardContent>
										<div className={"aspect-square mx-auto"}>
											<Image className={"w-full h-full object-cover object-center"} src={"/octopus-vr.png"} alt={"Playful octopus in VR gaming world"} width={300} height={300} />
										</div>
									</CardContent>
									<CardHeader>
										<CardTitle className={"leading-tight"}>
											VR-Лаборатория <span className={"text-xs"}>aud.&nbsp;423</span>
										</CardTitle>
										<CardDescription>Designul Jocurilor</CardDescription>
									</CardHeader>
								</Card>
							</Link>
							<Link href={"/classrooms/350"} className={"animate-[fadeIn_0.5s_ease-out_both]"} style={{ animationDelay: "0.2s" }}>
								<Card className={"h-full bg-linear-to-b from-accent from-10% to-background"}>
									<CardContent>
										<div className={"aspect-square mx-auto"}>
											<Image
												className={"w-full h-full object-cover object-center"}
												src={"/octopus-working.png"}
												alt={"Cute octopus working in workspace"}
												width={300}
												height={300}
											/>
										</div>
									</CardContent>
									<CardHeader>
										<CardTitle className={"leading-tight"}>
											Компьютерная лаборатория <span className={"text-xs"}>aud.&nbsp;350</span>
										</CardTitle>
										<CardDescription>Designul Jocurilor</CardDescription>
									</CardHeader>
								</Card>
							</Link>
							<Link href={"/classrooms/145"} className={"animate-[fadeIn_0.5s_ease-out_both]"} style={{ animationDelay: "0.3s" }}>
								<Card className={"h-full bg-linear-to-b from-accent from-10% to-background"}>
									<CardContent>
										<div className={"aspect-square mx-auto"}>
											<Image className={"w-full h-full object-cover object-center"} src={"/octopus-classroom.png"} alt={"Octopus classroom"} width={300} height={300} />
										</div>
									</CardContent>
									<CardHeader>
										<CardTitle className={"leading-tight"}>
											Innovation Lab <span className={"text-xs"}>aud.&nbsp;145</span>
										</CardTitle>
										<CardDescription>Designul Jocurilor, Informatica, Informatica Aplicata</CardDescription>
									</CardHeader>
								</Card>
							</Link>
						</div>
					</section>
					<section>
						<div className={"mb-2"}>
							<Label>
								<RiTeamLine className={"size-4"} />
								Open-Space
							</Label>
						</div>
						<div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"}>
							<Link href={"/classrooms/254"} className={"animate-[fadeIn_0.5s_ease-out_both]"} style={{ animationDelay: "0.4s" }}>
								<Card className={"h-full bg-linear-to-b from-accent from-10% to-background"}>
									<CardContent>
										<div className={"aspect-square mx-auto"}>
											<Image className={"w-full h-full object-cover object-center"} src={"/octopus-openspace.png"} alt={"Octopus in openspace"} width={300} height={300} />
										</div>
									</CardContent>
									<CardHeader>
										<CardTitle className={"leading-tight"}>
											Open-Space <span className={"text-xs"}>aud.&nbsp;254</span>
										</CardTitle>
										<CardDescription>Designul Jocurilor, Informatica, Informatica Aplicata</CardDescription>
									</CardHeader>
								</Card>
							</Link>

							<Card className={"lg:col-span-2 h-full bg-background/70 animate-[fadeIn_0.5s_ease-out_both]"} style={{ animationDelay: "0.5s" }}>
								<CardHeader>
									<CardTitle className={"leading-tight"}>Поступление</CardTitle>
									<CardDescription>Подача документов и информация о департаменте</CardDescription>
								</CardHeader>
								<CardContent className={"flex flex-col gap-1.5"}>
									<p>
										Сайт факультета:{" "}
										<Link href={"https://it.usm.md"} target={"_blank"} className={"underline underline-offset-2 hover:text-foreground"}>
											it.usm.md
										</Link>
									</p>
									<p>
										Гос. портал для подачи документов:{" "}
										<Link href={"https://eadmitere.gov.md"} target={"_blank"} className={"underline underline-offset-2 hover:text-foreground"}>
											eadmitere.gov.md
										</Link>
									</p>
								</CardContent>
								<Image
									className={"z-[-1] opacity-10 absolute top-10 sm:opacity-20 sm:bottom-0 sm:top-auto -left-20"}
									src={"/octopus-walking.png"}
									alt={"Octopus Walking"}
									width={300}
									height={300}
								/>
							</Card>
						</div>
					</section>
				</div>
			</AppContainer>
		</>
	);
}
