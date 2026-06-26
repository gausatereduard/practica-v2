import { AppHeader } from "@/components/app-header";
import { BackgroundDecorations } from "@/components/background-decorations";
import { Footer } from "@/components/footer";

export default function Layout({ children }: Readonly<{ children?: React.ReactNode }>) {
	return (
		<>
			<AppHeader />
			<BackgroundDecorations />
			<main className={"flex-1"}>{children}</main>
			<Footer />
		</>
	);
}
