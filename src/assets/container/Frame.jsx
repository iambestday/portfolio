import { Canvas } from "@react-three/fiber";
import Models from "../components/Models";
import "./Frame.css";

function Frame() {
  return (
    <div className="logo">
      <div className="head-avatar">
        <Canvas
          camera={{
            fov: 30,
            aspect: 2,
            near: 0.1,
            far: 10,
            position: [1, 0, 1],
          }}
        >
          <ambientLight intensity={1} />
          <spotLight
            position={[20, 20, 25]}
            penumbra={1}
            angle={0.2}
            color="white"
            castShadow
            shadow-mapSize={[512, 512]}
          />

          <Models />
        </Canvas>
      </div>
      <div className="text-logo">
        <p className="name">B E R H O U Z </p>
        <hr className="horizontalLine" />
        <p className="description">A S G H A R I</p>
      </div>
    </div>
  );
}

export default Frame;
