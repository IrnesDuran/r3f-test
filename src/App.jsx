import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Islands from './pages/Islands'

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/islands" element={<Islands />} />
  </Routes>
)

export default App
