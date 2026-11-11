import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { navLinks, personalInfo } from '../data/portfolioData'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Update active section
      const sections = navLinks.map(link => link.href.slice(1))
      const scrollPos = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setIsMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-border-color'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-2 group"
              aria-label="Go to home"
            >
              <div className="w-9 h-9 bg-industrial-blue rounded-lg flex items-center justify-center group-hover:bg-deep-blue transition-colors">
                <span className="text-white font-heading font-bold text-sm">SJ</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-heading font-bold text-heading text-sm leading-tight">SHANKAR J</p>
                <p className="text-body-text text-xs leading-tight">Inspection & Quality Engineer</p>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeSection === link.href.slice(1)
                      ? 'bg-industrial-blue text-white'
                      : 'text-body-text hover:text-industrial-blue hover:bg-bg-secondary'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.resumeFile}
                download="Shankar-J-Resume.pdf"
                className="hidden sm:flex items-center gap-1.5 bg-safety-orange text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download size={14} />
                Resume
              </a>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 rounded-lg text-heading hover:bg-bg-secondary transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-border-color shadow-lg lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeSection === link.href.slice(1)
                      ? 'bg-industrial-blue text-white'
                      : 'text-body-text hover:bg-bg-secondary hover:text-industrial-blue'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="border-t border-border-color mt-2 pt-3">
                <a
                  href={personalInfo.resumeFile}
                  download="Shankar-J-Resume.pdf"
                  className="flex items-center gap-2 bg-safety-orange text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-all"
                  onClick={() => setIsMobileOpen(false)}
                >
                  <Download size={15} />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

