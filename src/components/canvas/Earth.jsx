/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Loader from "../Loader"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"



const Earth = () => {
  const earth = useGLTF('./game_ready/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="white" />
      <pointLight intensity={3} />
      <primitive
        object={earth.scene}
        scale={.60}
        position={[1, -1, -.1]}
        rotation={[-0.1, -1.5, 0.1]}
      />
    </mesh>

  )
}
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: .1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 4}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default EarthCanvas