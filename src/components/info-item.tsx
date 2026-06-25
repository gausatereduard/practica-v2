import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function InfoItem({ icon, title, children, className, titleClass }: { icon: ReactNode; title: string; children: ReactNode; className?: string; titleClass?: string }) {
	return (
		<div className={cn("flex gap-3 bg-muted p-4", className)}>
			<div className={"size-4 mt-0.5 shrink-0 text-muted-foreground"}>{icon}</div>
			<div className={"min-w-0"}>
				<p className={cn("font-medium", titleClass)}>{title}</p>
				<div className={"text-sm text-muted-foreground"}>{children}</div>
			</div>
		</div>
	);
}
