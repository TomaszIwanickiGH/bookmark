import React from 'react'
import {
  Navbar,
  Header,
  Features,
  Browsers,
  FAQ,
  Newsletter,
  Footer,
} from './components'

const App = () => {
  return (
    <div style={{ fontFamily: 'var(--font-base)' }}>
      <Navbar />
      <Header />
      <Features />
      <Browsers />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
