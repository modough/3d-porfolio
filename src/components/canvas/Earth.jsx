/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Loader from "../Loader"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"


const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={2} />
      <primitive
        object={earth.scene}
        scale={.75}
        position={[0, -3.25, -1.5]}
        rotation={[-.01, -.2, -.1]}
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
      camera={{ position: [20, 3, 5], fov: 25 }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate
          enebleZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default EarthCanvas