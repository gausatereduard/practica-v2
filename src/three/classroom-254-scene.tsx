"use client";

import { useGLTF } from "@react-three/drei";

export function Classroom254Scene() {
	const { scene } = useGLTF("/models/254classroom.optimized.glb");
	return <primitive object={scene} />;
}
