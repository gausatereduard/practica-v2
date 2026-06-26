"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh, MeshStandardMaterial } from "three";

const CYAN = "#16c79a";
const NAVY = "#1a1a2e";
const DARK = "#16213e";
const WHITE = "#e8e8e8";
const DARK_GRAY = "#2d2d2d";

function Monitor({ position }: { position: [number, number, number] }) {
	const glowRef = useRef<Mesh>(null);

	useFrame(({ clock }) => {
		if (glowRef.current) {
			const material = glowRef.current.material as MeshStandardMaterial;
			material.emissiveIntensity = 0.3 + Math.sin(clock.getElapsedTime() * 0.5) * 0.15;
		}
	});

	return (
		<group position={position}>
			<mesh ref={glowRef} position={[0, 0, 0]}>
				<boxGeometry args={[0.5, 0.45, 0.03]} />
				<meshStandardMaterial color={DARK} emissive={CYAN} emissiveIntensity={0.3} />
			</mesh>
			<mesh position={[0, -0.3, 0]}>
				<cylinderGeometry args={[0.02, 0.03, 0.12]} />
				<meshStandardMaterial color={DARK_GRAY} />
			</mesh>
		</group>
	);
}

export function VrLabScene() {
	return (
		<group>
			<mesh position={[0, -0.4, 0]}>
				<boxGeometry args={[2.2, 0.08, 1]} />
				<meshStandardMaterial color="#3d3d3d" />
			</mesh>
			<Monitor position={[-0.35, -0.1, -0.2]} />
			<Monitor position={[0.35, -0.1, -0.2]} />
			<mesh position={[-0.35, -0.22, 0.15]}>
				<boxGeometry args={[0.3, 0.18, 0.22]} />
				<meshStandardMaterial color={NAVY} />
			</mesh>
			<mesh position={[0, -0.23, 0.2]}>
				<boxGeometry args={[0.25, 0.15, 0.2]} />
				<meshStandardMaterial color={WHITE} />
			</mesh>
			<mesh position={[0.35, -0.24, 0.15]}>
				<boxGeometry args={[0.22, 0.13, 0.18]} />
				<meshStandardMaterial color={DARK_GRAY} />
			</mesh>
			<mesh position={[0, -0.44, 0]} rotation={[-Math.PI / 2, 0, 0]}>
				<planeGeometry args={[9, 9]} />
			</mesh>
		</group>
	);
}
