"use client";

export function OpenSpaceScene() {
	return (
		<group>
			<mesh position={[0, 0.15, -0.7]}>
				<boxGeometry args={[1, 0.5, 0.04]} />
				<meshStandardMaterial color="#eee" />
			</mesh>
			<mesh position={[-0.5, -0.28, 0.25]}>
				<sphereGeometry args={[0.16]} />
				<meshStandardMaterial color="#e67e22" />
			</mesh>
			<mesh position={[0, -0.28, 0.4]}>
				<sphereGeometry args={[0.16]} />
				<meshStandardMaterial color="#f39c12" />
			</mesh>
			<mesh position={[0.5, -0.28, 0.25]}>
				<sphereGeometry args={[0.16]} />
				<meshStandardMaterial color="#e67e22" />
			</mesh>
			<mesh position={[0, -0.35, -0.1]}>
				<cylinderGeometry args={[0.15, 0.18, 0.06]} />
				<meshStandardMaterial color="#8B4513" />
			</mesh>
			<mesh position={[0, -0.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
				<planeGeometry args={[9, 9]} />
			</mesh>
		</group>
	);
}
