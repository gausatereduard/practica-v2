"use client";

import { useGLTF } from "@react-three/drei";

export function Classroom423Scene() {
	const { scene } = useGLTF("/models/423classroom.optimized.glb");
	return <primitive object={scene} />;
}
