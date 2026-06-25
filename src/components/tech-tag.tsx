import { cn } from "@/lib/utils";
import Image from "next/image";

export function TechTag({ src, alt, name, imgClass, comma = true }: { src: string; alt: string; name: string; imgClass?: string; comma?: boolean }) {
	return (
		<span className={"text-sm flex items-center gap-1 leading-0 group"}>
			<Image className={cn("block", imgClass ?? "size-3.5")} src={src} alt={alt} width={16} height={16} />
			{name}
			{comma && ","}
		</span>
	);
}
