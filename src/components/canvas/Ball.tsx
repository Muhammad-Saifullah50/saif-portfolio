"use client"
import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'

type BallCanvasProps = { icon: {}}

const Ball = (props: any) => {
  const [decal] = useTexture([props.imgUrl.src])
  return (
    <Float
      speed={1.75}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <ambientLight intensity={0.75} />
      <directionalLight position={[0, 0, 0.1]} />
      <mesh
        castShadow
        receiveShadow
        scale={2.75}>
        <icosahedronGeometry
          args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }: BallCanvasProps) => {
  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
        />
        <Ball imgUrl={icon}/>
      </Suspense>

      <Preload all />
    </Canvas>
     )
}

export default BallCanvas