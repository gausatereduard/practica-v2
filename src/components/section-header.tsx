import { Label } from "@/components/ui/label";
import type { ReactNode } from "react";

export function SectionHeader({ icon, children }: { icon?: ReactNode; children: ReactNode }) {
	return (
		<div className={"mb-4"}>
			<Label>
				{icon}
				{children}
			</Label>
		</div>
	);
}
