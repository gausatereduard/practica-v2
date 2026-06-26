"use client";

function AllInOne({ position }: { position: [number, number, number] }) {
	return (
		<group position={position}>
			<mesh position={[0, -0.18, 0]}>
				<boxGeometry args={[0.4, 0.08, 0.35]} />
				<meshStandardMaterial color="#ddd" />
			</mesh>
			<mesh position={[0, 0.08, 0]}>
				<boxGeometry args={[0.38, 0.4, 0.03]} />
				<meshStandardMaterial color="#222" emissive="#2ecc71" emissiveIntensity={0.1} />
			</mesh>
			<mesh position={[0, -0.14, 0]}>
				<cylinderGeometry args={[0.03, 0.04, 0.06]} />
				<meshStandardMaterial color="#aaa" />
			</mesh>
		</group>
	);
}

export function InnovationLabScene() {
	return (
		<group>
			<AllInOne position={[-0.45, -0.2, 0]} />
			<AllInOne position={[0.45, -0.2, 0]} />
			<mesh position={[0, 0.2, -0.7]}>
				<boxGeometry args={[1.2, 0.6, 0.04]} />
				<meshStandardMaterial color="#1a3a2a" emissive="#2ecc71" emissiveIntensity={0.08} />
			</mesh>
			<mesh position={[-0.45, -0.25, 0.45]}>
				<sphereGeometry args={[0.18]} />
				<meshStandardMaterial color="#27ae60" />
			</mesh>
			<mesh position={[0.45, -0.25, 0.45]}>
				<sphereGeometry args={[0.18]} />
				<meshStandardMaterial color="#2ecc71" />
			</mesh>
			<mesh position={[0, -0.38, 0]} rotation={[-Math.PI / 2, 0, 0]}>
				<planeGeometry args={[3, 2.5]} />
				<meshStandardMaterial color="#1a1a1a" />
			</mesh>
		</group>
	);
}
