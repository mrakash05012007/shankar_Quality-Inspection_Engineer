import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import NDTSection from './components/NDTSection'
import EquipmentInspection from './components/EquipmentInspection'
import Standards from './components/Standards'
import Experience from './components/Experience'
import QualitySkills from './components/QualitySkills'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Brief loading delay for smooth entry
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-bg-main flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className="absolute inset-0 border-4 border-border-color rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-industrial-blue rounded-full animate-spin"></div>
          </div>
          <p className="font-heading font-bold text-industrial-blue text-lg">SHANKAR J</p>
          <p className="text-body-text text-sm mt-1">Loading Portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg-main">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <NDTSection />
        <EquipmentInspection />
        <Standards />
        <Experience />
        <QualitySkills />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
