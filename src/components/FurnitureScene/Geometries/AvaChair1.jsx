import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { Color, TextureLoader } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useEffect, useMemo } from 'react'
import { useControls } from 'leva'

const AvaChair1 = () => {
  // const mtl = useLoader(
  //   MTLLoader,
  //   process.env.PUBLIC_URL +
  //     'models/furniture/AvaChair1/Ava-chair_56x52x76_0FE Upholstered.mtl'
  // )
  // const obj = useLoader(
  //   OBJLoader,
  //   process.env.PUBLIC_URL +
  //     'models/furniture/AvaChair1/Ava-chair_56x52x76_0FE Upholstered.obj'
  // )
  const [colorMap] = useLoader(TextureLoader, [
    process.env.PUBLIC_URL + 'models/furniture/AvaChair1/MLF02_D.jpg'
  ])

  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL +
      'models/furniture/avaChair1/Ava-bench_120x53x77,5_182 Upholstered.glb'
  )

  const gltf2 = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL +
      'models/furniture/avaChair1/Ava-chair_56x52x76_1CA.glb'
  )

  const options = useMemo(() => {
    return {
      // x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      // y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      // z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      // visible: true,
      // color: { value: 'lime' },
      Model: {
        options: {
          Chair: gltf2,
          'Chair 2': gltf
        }
      }
    }
  }, [])

  const model = useControls('Testing toggle', options)

  useEffect(() => {
    let mesh = model.Model.scene.children.map((item) => {
      item.material.envMapIntensity = 15
      // // item.material.color = new Color(0.04, 0.06, 0.1)
      item.material = item.material
      // item.geometry.computeFlatVertexNormals = true
      item.material.needsUpdated = true
      // item.geometry.computeVertexNormals()
      // item.geometry.mergeVertices()
    })

    // model.Model.scene.traverse((node) => {
    //   if (node.isMesh) {
    //     node.material.smoothShading = true
    //   }
    // })
    // mesh.geometry.mergeVertices()
    // gltf2.scene.children[18].material = gltf2.scene.children[18].material
    // gltf2.scene.children[18].material.needsUpdate = true
  }, [gltf, gltf2, model])
  // const materials = useLoader(
  //   MTLLoader,
  //   process.env.PUBLIC_URL +
  //     'models/furniture/AvaChair1/Ava-chair_56x52x76_0FE Upholstered.mtl'
  // )
  // const object = useLoader(
  //   OBJLoader,
  //   process.env.PUBLIC_URL +
  //     'models/furniture/AvaChair1/Ava-chair_56x52x76_0FE Upholstered.obj',
  //   (loader) => {
  //     loader.setMaterials(materials)
  //   }
  // )

  console.log(model.Model.scene)

  return <primitive object={model.Model.scene} />
}

export default AvaChair1
