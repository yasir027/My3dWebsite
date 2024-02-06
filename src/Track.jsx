import { ColliderBox } from "./ColliderBox";
import { Ramp } from "./Ramp";

export function Track() {
  return (
    <>
      <Ramp />
      <ColliderBox position={[1.75, 0, 0.5]} scale={[0.3, 1, 0.3]} />
      {/* Add more ColliderBox components here as needed */}
    </>
  );
}
