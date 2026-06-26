import Link from "next/link";

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className={"py-8 text-center text-sm text-muted-foreground"}>
			<p>
				&copy; {year}{" "}
				<Link href={"https://it.usm.md"} target={"_blank"} className={"underline underline-offset-2 hover:text-foreground"}>
					it.usm.md
				</Link>
			</p>
		</footer>
	);
}
