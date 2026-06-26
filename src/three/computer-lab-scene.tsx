"use client";

function Workstation({ position }: { position: [number, number, number] }) {
	return (
		<group position={position}>
			<mesh position={[0, -0.35, 0]}>
				<boxGeometry args={[0.5, 0.08, 0.4]} />
				<meshStandardMaterial color="#5a6a7a" />
			</mesh>
			<mesh position={[0, -0.1, -0.05]}>
				<boxGeometry args={[0.35, 0.3, 0.03]} />
				<meshStandardMaterial color="#1a2a3a" emissive="#3498db" emissiveIntensity={0.15} />
			</mesh>
			<mesh position={[0, -0.28, -0.05]}>
				<cylinderGeometry args={[0.02, 0.025, 0.1]} />
				<meshStandardMaterial color="#3d3d3d" />
			</mesh>
			<mesh position={[0, -0.3, 0.12]}>
				<boxGeometry args={[0.2, 0.02, 0.08]} />
				<meshStandardMaterial color="#2d2d2d" />
			</mesh>
		</group>
	);
}

export function ComputerLabScene() {
	return (
		<group>
			<Workstation position={[-0.75, -0.3, 0]} />
			<Workstation position={[0, -0.3, 0]} />
			<Workstation position={[0.75, -0.3, 0]} />
			<mesh position={[0, -0.75, 0]} rotation={[-Math.PI / 2, 0, 0]}>
				<planeGeometry args={[9, 9]} />
			</mesh>
		</group>
	);
}
