import { AppContainer } from "@/components/app-container";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RiFlaskLine, RiTeamLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
	return (
		<>
			{/*<img src={"/tui.jpeg"} className={"w-auto h-auto absolute bottom-0 -left-40 z-[-1]"} />*/}
			{/*<img src={"/tui.jpeg"} className={"w-auto h-auto absolute bottom-0 -right-40 z-[-1]"} />*/}
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
							<Link href={"/classrooms/423"}>
								<Card className={"h-full bg-linear-to-b from-primary from-10% to-background"}>
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
							<Link href={"/classrooms/350"}>
								<Card className={"h-full bg-linear-to-b from-primary from-10% to-background"}>
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
							<Link href={"/classrooms/145"}>
								<Card className={"h-full bg-linear-to-b from-primary from-10% to-background"}>
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
							<Link href={"/classrooms/254"}>
								<Card className={"h-full bg-linear-to-b from-primary from-10% to-background"}>
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
						</div>
					</section>
				</div>
			</AppContainer>
		</>
	);
}
