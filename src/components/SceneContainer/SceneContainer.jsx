import React, { Suspense } from 'react'
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Float
} from '@react-three/drei'
import FloatingIsland from '../Geometries/FloatingIsland'
import Rocks from '../Geometries/Rocks'
import Portal from '../Geometries/Portal'
import FloatingRocks from '../Geometries/FloatingRocks'
import Trees from '../Geometries/Tree'
import Words from '../Geometries/Words'
import Grass from '../Geometries/Grass'
import {
  BrightnessContrast,
  ChromaticAberration,
  DepthOfField,
  EffectComposer,
  GodRays,
  HueSaturation
} from '@react-three/postprocessing'
import { Color, CylinderGeometry, Mesh, MeshBasicMaterial } from 'three'
import SceneParticles from '../Geometries/SceneParticles'

let lightColor = new Color(1, 0.2, 0.1)
let mesh = new Mesh(
  new CylinderGeometry(0.3, 0.3, 0.2, 20),
  new MeshBasicMaterial({
    color: lightColor,
    transparent: true,
    opacity: 1
  })
)
mesh.rotation.x = Math.PI * 0.5
mesh.position.set(1.17, 10.7, -4.1)
mesh.scale.set(1.5, 1, 1)

const SceneContainer = () => {
  return (
    <Suspense fallback={null}>
      <Environment background={'only'} files={'../../images/bg.hdr'} />
      <Environment background={false} files={'../../images/envmap.hdr'} />
      <Float speed={1} rotationIntensity={0.35} floatIntensity={0.5}>
        <primitive object={mesh} />
        <spotLight
          penumbra={1}
          distance={500}
          angle={60.65}
          attenuation={1}
          anglePower={3}
          intensity={0.3}
          color={lightColor}
          position={[1.19, 10.85, -4.45]}
          target-position={[0, 0, -1]}
        />
        <FloatingIsland />
        <Rocks />
        <Portal />
        <Trees />
        <Words />
        <Grass />
      </Float>
      <FloatingRocks />
      <PerspectiveCamera makeDefault fov={50} position={[-1, 10.85, 20]} />
      <SceneParticles />
      <EffectComposer stencilBuffer={true}>
        <DepthOfField
          focusDistance={0.012}
          focalLength={0.015}
          bokehScale={7}
        />
        <HueSaturation hue={0} saturation={-0.15} />
        <BrightnessContrast brightness={0.0} contrast={0.035} />
        <ChromaticAberration
          radialModulation={true}
          offset={[0.00175, 0.00175]}
        />
        <GodRays
          sun={mesh}
          // blendFunction={BlendFunction.Screen}
          samples={40}
          density={0.97}
          decay={0.97}
          weight={0.6}
          exposure={0.3}
          clampMax={1}
          // width={Resizer.AUTO_SIZE}
          // height={Resizer.AUTO_SIZE}
          // kernelSize={KernelSize.SMALL}
          blur={true}
        />
      </EffectComposer>

      <OrbitControls
        maxPolarAngle={Math.PI * 0.5}
        target={[1, 4, 0]}
        maxDistance={30}
        minDistance={10}
      />
    </Suspense>
  )
}

export default SceneContainer
