import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Principles from './sections/Principles'
import Expertise from './sections/Expertise'
import WhatIf from './sections/WhatIf'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact';
import { SmoothScrollProvider } from './animations/SmoothScrollProvider'
import BackgroundController from './components/layout/BackgroundController'
function App() {
  return (
    <SmoothScrollProvider>
      <BackgroundController />
      <Header />
      <main>
        <Hero />
        <About />
        <Principles />
        <Expertise />
        <WhatIf />
        <FAQ />
        <Contact />
              </main>
      <Footer />
    </SmoothScrollProvider>
  )
}

export default App
