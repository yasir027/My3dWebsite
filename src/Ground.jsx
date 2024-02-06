import { usePlane } from "@react-three/cannon";

export function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeBufferGeometry args={[100, 100]} />
      <shadowMaterial transparent opacity={0.5} />
    </mesh>
  );
}
