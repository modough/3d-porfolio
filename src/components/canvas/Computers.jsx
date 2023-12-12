/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import Loader from "../Loader";
import PropTypes from "prop-types";

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./gaming_setup/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={2} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 25 : 40}
        position={isMobile ? [0, -3.8, -1.8] : [2.5, -3.25, -2.5]}
        rotation={[0, 2, -0.01]}
      />
    </mesh>
  )
}
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:768px)');
    setIsMobile(mediaQuery.matches);
    const handlemediaQuery = (e) => {
      setIsMobile(e.matches);
    }
    mediaQuery.addEventListener('change', handlemediaQuery);
    return () => {
      mediaQuery.removeEventListener('change', handlemediaQuery);
    }
  }, [])
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 3}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}
Computers.propTypes = {
  isMobile: PropTypes.bool
}
export default ComputersCanvas