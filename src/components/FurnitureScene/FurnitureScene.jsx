import React, { Suspense } from 'react'
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  AccumulativeShadows,
  RandomizedLight,
  SpotLight,
  SpotLightShadows,
  Shadow,
  Plane
} from '@react-three/drei'
import AvaChair1 from './Geometries/AvaChair1'
import { DepthOfField, EffectComposer } from '@react-three/postprocessing'
import { Color } from 'three'

const FurnitureScene = () => {
  return (
    <Suspense fallback={null}>
      <Environment background={false} files={'../../images/bg.hdr'} />
      <PerspectiveCamera makeDefault fov={50} position={[-50, 120, -180]} />
      <AvaChair1 />
      {/* <Plane
        args={[2000, 2000]}
        rotation-x={-Math.PI / 2}
        color={new Color(255, 255, 255)}
      /> */}

      {/* <Shadow
        color="black"
        colorStop={0}
        opacity={0.3}
        scale={[180, 80, 0]}
        fog={true} // Reacts to fog (default=false)
        position-y={2}
      /> */}
      {/* <EffectComposer>
        <DepthOfField focusDistance={0.001} focalLength={0.7} bokehScale={5} />
      </EffectComposer> */}
      <OrbitControls
        maxPolarAngle={Math.PI * 0.5}
        target={[0, 20, 0]}
        // maxDistance={30}
        // minDistance={10}
        autoRotate
      />
    </Suspense>
  )
}

export default FurnitureScene
