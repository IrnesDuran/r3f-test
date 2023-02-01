import React from 'react'

import { Canvas } from '@react-three/fiber'
import './styles.css'
import SceneContainer from '../components/SceneContainer/SceneContainer'

const Islands = () => {
  return (
    <section className="container">
      <Canvas>
        <SceneContainer />
      </Canvas>{' '}
      <div className="videoOverlay">
        <video src="/videos/ink.mp4" type="video/mp4" autoPlay muted loop />
      </div>
    </section>
  )
}

export default Islands
