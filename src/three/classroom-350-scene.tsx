"use client";

import { useGLTF } from "@react-three/drei";

export function Classroom350Scene() {
	const { scene } = useGLTF("/models/350classroom.optimized.glb");
	return <primitive object={scene} />;
}
