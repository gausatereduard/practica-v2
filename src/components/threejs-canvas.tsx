"use client";

import type { ReactNode } from "react";
import * as THREE from "three";
import { Canvas, type CanvasProps, useThree } from "@react-three/fiber";
import { Grid, OrbitControls, useTexture } from "@react-three/drei";

interface ThreeCanvasProps extends Partial<CanvasProps> {
	children: ReactNode;
	className?: string;
}

function Skybox() {
	const { scene } = useThree();
	const texture = useTexture("/sky_98_2k.png");
	texture.mapping = THREE.EquirectangularReflectionMapping;
	scene.background = texture;
	return null;
}

export function ThreeCanvas({ children, className, ...canvasProps }: ThreeCanvasProps) {
	return (
		<div className={`${className ?? "my-6 h-[400px] w-full overflow-hidden border"} rounded-md overflow-clip bg-background/50 backdrop-blur-md animate-[fadeIn_0.6s_ease-out]`}>
			<Canvas camera={{ position: [2, 1, 3], fov: 40 }} dpr={[1, 2]} gl={{ antialias: true }} {...canvasProps}>
				<Skybox />
				<ambientLight intensity={2} />
				<directionalLight position={[2, 1, 3]} intensity={0.8} />
				<directionalLight position={[-5, -5, -5]} intensity={0.3} />
				{children}
				<Grid />
				<OrbitControls enableDamping />
			</Canvas>
		</div>
	);
}
