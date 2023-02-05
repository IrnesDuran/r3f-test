import React from 'react'

import { Canvas } from '@react-three/fiber'
import './styles.css'
import FurnitureScene from '../components/FurnitureScene/FurnitureScene'

const Home = () => {
  return (
    <section className="furniture">
      Test
      <Canvas>
        <FurnitureScene />
      </Canvas>
    </section>
  )
}

export default Home
