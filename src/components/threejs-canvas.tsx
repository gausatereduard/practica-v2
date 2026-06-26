"use client";

import type { ReactNode } from "react";
import { Canvas, type CanvasProps } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

interface ThreeCanvasProps extends Partial<CanvasProps> {
	children: ReactNode;
	className?: string;
}

export function ThreeCanvas({ children, className, ...canvasProps }: ThreeCanvasProps) {
	return (
		<div className={className ?? "my-6 h-[400px] w-full overflow-hidden rounded-lg border"}>
			<Canvas camera={{ position: [3, 3, 3], fov: 80 }} dpr={[1, 2]} gl={{ antialias: true }} {...canvasProps}>
				<ambientLight intensity={0.5} />
				<directionalLight position={[5, 5, 5]} intensity={0.8} />
				<directionalLight position={[-5, -5, -5]} intensity={0.3} />
				{children}
				<OrbitControls enableDamping />
			</Canvas>
		</div>
	);
}
