import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Islands from './pages/Islands'

const App = () => {
  console.log(process.env.PUBLIC_URL)

  return (
    <>
      <nav>
        <NavLink to={'/'}>Home</NavLink>{' '}
        <NavLink to={'/islands'}>Threejs Islands</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/islands" element={<Islands />} />
      </Routes>
    </>
  )
}

export default App
