import { useLoader } from '@react-three/fiber'
import { useEffect } from 'react'
import { DoubleSide } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Portal = () => {
  const portal = useLoader(GLTFLoader, 'models/portal.glb')
  const mask = useLoader(GLTFLoader, 'models/portal_mask.glb')

  useEffect(() => {
    if (!portal) return
    let mesh = portal.scene.children[0]
    mesh.material.envMapIntensity = 3.5

    let maskMesh = mask.scene.children[0]
    maskMesh.material.side = DoubleSide
  }, [portal, mask])

  return (
    <>
      <primitive object={portal.scene} />
      <primitive object={mask.scene} />
    </>
  )
}

export default Portal
