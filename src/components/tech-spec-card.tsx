import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ReactNode } from "react";

export function TechSpecCard({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
	return (
		<Card size="sm">
			<CardHeader>
				{icon}
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent className={"text-sm text-muted-foreground"}>{children}</CardContent>
		</Card>
	);
}
