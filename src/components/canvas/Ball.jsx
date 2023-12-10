/* eslint-disable react/no-unknown-property */
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";
import PropTypes from "prop-types";
import { Suspense } from "react";
import Loader from "../Loader";


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  return (
    <Float speed={1.75} rotationIntensity={1}>
      <ambientLight intensity={.25} />
      <directionalLight position={[0, 0, .05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
        />
      </mesh>
    </Float>
  )
}
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
Ball.propTypes = {
  imgUrl: PropTypes.string,

}
BallCanvas.propTypes = {
  icon: PropTypes.string,
}

export default BallCanvas