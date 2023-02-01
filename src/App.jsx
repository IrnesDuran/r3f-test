import React from 'react'
import { Canvas } from '@react-three/fiber'
import './styles.css'
import SceneContainer from './components/SceneContainer/SceneContainer'

const App = () => (
  <section>
    <nav>
      <a href="/html/">HTML</a> |<a href="/css/">CSS</a> |
      <a href="/js/">JavaScript</a> |<a href="/python/">Python</a>
    </nav>
    <section className="container">
      <Canvas>
        <SceneContainer />
      </Canvas>{' '}
      <div className="videoOverlay">
        <video src="/videos/ink.mp4" type="video/mp4" autoPlay muted loop />
      </div>
    </section>

    <section>
      Why do we use it? It is a long established fact that a reader will be
      distracted by the readable content of a page when looking at its layout.
      The point of using Lorem Ipsum is that it has a more-or-less normal
      distribution of letters, as opposed to using 'Content here, content here',
      making it look like readable English. Many desktop publishing packages and
      web page editors now use Lorem Ipsum as their default model text, and a
      search for 'lorem ipsum' will uncover many web sites still in their
      infancy. Various versions have evolved over the years, sometimes by
      accident, sometimes on purpose (injected humour and the like). Why do we
      use it? It is a long established fact that a reader will be distracted by
      the readable content of a page when looking at its layout. The point of
      using Lorem Ipsum is that it has a more-or-less normal distribution of
      letters, as opposed to using 'Content here, content here', making it look
      like readable English. Many desktop publishing packages and web page
      editors now use Lorem Ipsum as their default model text, and a search for
      'lorem ipsum' will uncover many web sites still in their infancy. Various
      versions have evolved over the years, sometimes by accident, sometimes on
      purpose (injected humour and the like). Why do we use it? It is a long
      established fact that a reader will be distracted by the readable content
      of a page when looking at its layout. The point of using Lorem Ipsum is
      that it has a more-or-less normal distribution of letters, as opposed to
      using 'Content here, content here', making it look like readable English.
      Many desktop publishing packages and web page editors now use Lorem Ipsum
      as their default model text, and a search for 'lorem ipsum' will uncover
      many web sites still in their infancy. Various versions have evolved over
      the years, sometimes by accident, sometimes on purpose (injected humour
      and the like). Why do we use it? It is a long established fact that a
      reader will be distracted by the readable content of a page when looking
      at its layout. The point of using Lorem Ipsum is that it has a
      more-or-less normal distribution of letters, as opposed to using 'Content
      here, content here', making it look like readable English. Many desktop
      publishing packages and web page editors now use Lorem Ipsum as their
      default model text, and a search for 'lorem ipsum' will uncover many web
      sites still in their infancy. Various versions have evolved over the
      years, sometimes by accident, sometimes on purpose (injected humour and
      the like). Why do we use it? It is a long established fact that a reader
      will be distracted by the readable content of a page when looking at its
      layout. The point of using Lorem Ipsum is that it has a more-or-less
      normal distribution of letters, as opposed to using 'Content here, content
      here', making it look like readable English. Many desktop publishing
      packages and web page editors now use Lorem Ipsum as their default model
      text, and a search for 'lorem ipsum' will uncover many web sites still in
      their infancy. Various versions have evolved over the years, sometimes by
      accident, sometimes on purpose (injected humour and the like).
    </section>
  </section>
)

export default App
