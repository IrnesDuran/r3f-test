import { useFrame, useLoader } from '@react-three/fiber'
import { useEffect } from 'react'
import {
  AlwaysStencilFunc,
  DoubleSide,
  EquirectangularReflectionMapping,
  LinearEncoding,
  ReplaceStencilOp,
  Scene,
  TextureLoader,
  WebGLRenderTarget
} from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import FillQuad from './FillQuad'

const Portal = () => {
  const portal = useLoader(GLTFLoader, 'models/portal.glb')
  const mask = useLoader(GLTFLoader, 'models/portal_mask.glb')

  const scene = new Scene()
  scene.background = new TextureLoader().load(
    // thanks to https://www.creativeshrimp.com/midjourney-text-to-images.html
    '/images/galaxy.jpg',
    (texture) => {
      texture.encoding = LinearEncoding
      texture.mapping = EquirectangularReflectionMapping
    }
  )

  window.addEventListener('resize', () => {
    target.setSize(window.innerWidth, window.innerHeight)
  })

  const target = new WebGLRenderTarget(window.innerWidth, window.innerHeight)

  useEffect(() => {
    if (!portal) return
    let mesh = portal.scene.children[0]
    mesh.material.envMapIntensity = 3.5

    let maskMesh = mask.scene.children[0]
    maskMesh.material.side = DoubleSide
    // https://learnopengl.com/Advanced-OpenGL/Stencil-testing
    maskMesh.material.stencilFunc = AlwaysStencilFunc
    maskMesh.material.stencilWrite = true
    maskMesh.material.stencilRef = 1
    maskMesh.material.stencilZPass = ReplaceStencilOp
  }, [portal, mask])

  useFrame((state) => {
    state.gl.setRenderTarget(target)
    state.gl.render(scene, state.camera)
    state.gl.setRenderTarget(null)
  })

  return (
    <>
      <primitive object={portal.scene} />
      <primitive object={mask.scene} />
      <FillQuad map={target.texture} maskId={1} />
    </>
  )
}

export default Portal
