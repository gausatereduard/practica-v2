import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ReactNode } from "react";

export function TechSpecCard({ icon, title, children, additions }: { icon: ReactNode; title: string; children: ReactNode; additions?: ReactNode }) {
	return (
		<Card className={"relative z-10 shadow-none bg-background/50 backdrop-blur-md animate-[fadeIn_0.5s_ease-out_both]"} size="sm">
			<CardHeader>
				{icon}
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent className={"text-sm text-foreground"}>{children}</CardContent>
			{additions}
		</Card>
	);
}
