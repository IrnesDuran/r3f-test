import React from 'react'
import { Canvas } from '@react-three/fiber'
import './styles.css'
import SceneContainer from './components/SceneContainer/SceneContainer'

const App = () => (
  <Canvas camera={{ position: [0, 0, 2] }}>
    <SceneContainer />
  </Canvas>
)

export default App
