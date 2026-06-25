import { cn } from "@/lib/utils";

export function AppContainer({ className, children }: Readonly<{ className?: string; children?: React.ReactNode }>) {
	return <div className={cn("w-full max-w-5xl mx-auto px-3", className)}>{children}</div>;
}
