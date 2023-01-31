import React, { Suspense } from 'react'
import {
  OrbitControls,
  PerspectiveCamera,
  Environment
} from '@react-three/drei'
import FloatingIsland from '../Geometries/FloatingIsland'
import Rocks from '../Geometries/Rocks'
import Portal from '../Geometries/Portal'
import FloatingRocks from '../Geometries/FloatingRocks'

const SceneContainer = () => {
  return (
    <Suspense fallback={null}>
      <Environment background={'only'} files={'../../images/bg.hdr'} />
      <Environment background={false} files={'../../images/envmap.hdr'} />
      <FloatingIsland />
      <Rocks />
      <Portal />
      <FloatingRocks />
      <PerspectiveCamera
        makeDefault
        fov={50}
        position={[-1.75, 10.85, 20.35]}
      />
      <OrbitControls maxPolarAngle={Math.PI * 0.5} target={[1, 5, 0]} />
    </Suspense>
  )
}

export default SceneContainer
