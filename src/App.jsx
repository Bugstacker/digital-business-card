import React from 'react'
import Info from './assets/Info'
import About from './assets/About'
import Interests from './assets/Interests'
import Footer from './assets/Footer'
import './index.css'

function App() {

  return (
    <div className='container'>
      <Info />
      <main>
        <About />
        <Interests />
      </main>
      <Footer />
    </div>
  )
}

export default App
