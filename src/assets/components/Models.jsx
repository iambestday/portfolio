import { useGLTF } from "@react-three/drei";
import { useRef ,Suspense} from 'react'
import { useFrame } from '@react-three/fiber'



function Models() {
  const model = useGLTF("../assets/models/head.glb");
  const group = useRef()
  useFrame(() => {
    group.current.rotation.y += Math.PI / 100
  }
  )
  return (
    <Suspense fallback={null}>
    <group ref={group} position={[0,0, 0]}>
          <primitive object={model.scene} />
        </group>
    </Suspense>
  );
}

export default Models;
