import { Canvas, useFrame } from "@react-three/fiber";
import "./Section.css";
import { MeshDistortMaterial, Cloud, Sky, Sphere } from "@react-three/drei";
import { Suspense } from "react";

export default function Section() {
  return (
    <>
      <div className="sky">
        <Canvas>
          {/*An ambient light that creates a soft light against the object */}
          <ambientLight intensity={0.5} />
          {/*An directional light which aims form the given position */}
          <directionalLight position={[10, 10, 5]} intensity={1} />
          {/*An point light, basically the same as directional. This one points from under */}
          <pointLight position={[0, -10, 5]} intensity={1} />
          <Suspense fallback={null}>
            <Cloud position={[-4, -2, -25]} speed={0.2} opacity={1} />
            <Sphere visible position={[-2, 1, -1]} args={[1, 16, 100]}>
              <MeshDistortMaterial
                color="#0000FF"
                attach="material"
                distort={0.9} // Strength, 0 disables the effect (default=1)
                speed={1} // Speed (default=1)
                roughness={0}
              />
            </Sphere>
            <Cloud position={[2, 0, 2]} speed={0.2} opacity={0.1} />

            {/* This sphere has a distort material attached to it */}
            <Sphere visible position={[0, 0, 0]} args={[1, 16, 200]}>
              <MeshDistortMaterial
                color="#EA9300"
                attach="material"
                distort={-1} // Strength, 0 disables the effect (default=1)
                speed={2} // Speed (default=1)
                roughness={0}
              />
            </Sphere>
            <Cloud position={[4, -2, -5]} speed={0.2} opacity={0.5} />

            <Sphere visible position={[2, 1, 1]} args={[1, 16, 100]}>
              <MeshDistortMaterial
                color="#9F2B68"
                attach="material"
                distort={0.5} // Strength, 0 disables the effect (default=1)
                speed={2} // Speed (default=1)
                roughness={0}
              />
            </Sphere>
          </Suspense>

          <Sky
            azimuth={0.1}
            turbidity={10}
            rayleigh={0.5}
            inclination={0.6}
            distance={2000}
          />
        </Canvas>
      </div>
      <p className="overlay">Hi Sunny Day</p>
    </>
  );
}
