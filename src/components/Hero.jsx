import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail, Shield, Award, MapPin } from 'lucide-react'
import { lazy, Suspense } from 'react'
import { personalInfo } from '../data/portfolioData'

const ThreeDScene = lazy(() => import('./ThreeDScene'))

// Floating info card component
function FloatingCard({ icon: Icon, label, value, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      className={`bg-white/90 backdrop-blur-sm border border-border-color rounded-xl px-3 py-2 shadow-md flex items-center gap-2 ${className}`}
    >
      <div className="w-7 h-7 bg-industrial-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon size={14} className="text-industrial-blue" />
      </div>
      <div>
        <p className="text-xs text-body-text leading-none">{label}</p>
        <p className="text-xs font-semibold text-heading leading-tight mt-0.5">{value}</p>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const handleScroll = (href) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-bg-main pt-16"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      {/* Blueprint accent top-left */}
      <div className="absolute top-0 left-0 w-72 h-72 opacity-5 pointer-events-none">
        <svg viewBox="0 0 288 288" className="w-full h-full text-industrial-blue" fill="none" stroke="currentColor">
          <circle cx="144" cy="144" r="130" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="144" cy="144" r="90" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="144" cy="144" r="50" strokeWidth="0.5" strokeDasharray="4 4" />
          <line x1="0" y1="144" x2="288" y2="144" strokeWidth="0.5" />
          <line x1="144" y1="0" x2="144" y2="288" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Orange accent bottom-right */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-safety-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-industrial-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] py-16">
          
          {/* Left: Text Content */}
          <div className="relative z-10">
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-heading leading-none mb-2"
            >
              SHANKAR J
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-2"
            >
              <span className="font-heading text-lg sm:text-xl font-semibold text-safety-orange tracking-widest uppercase">
                Inspection & Quality Engineer
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-0.5 w-8 bg-industrial-blue rounded-full" />
              <span className="text-body-text text-sm">
                Mechanical Engineer | Third-Party Inspection | Quality Assurance
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-heading text-3xl sm:text-4xl font-bold text-heading leading-tight mb-4"
            >
              Precision in Inspection.<br />
              <span className="text-industrial-blue">Confidence in Quality.</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-body-text text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
            >
              {personalInfo.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <button
                onClick={() => handleScroll('#expertise')}
                className="btn-primary text-sm sm:text-base"
              >
                Explore My Expertise
                <ArrowRight size={16} />
              </button>
              <a
                href={personalInfo.resumeFile}
                download="Shankar-J-Resume.pdf"
                className="btn-secondary text-sm sm:text-base"
              >
                <Download size={16} />
                Download Resume
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-orange text-sm sm:text-base"
              >
                <Mail size={16} />
                Contact Me
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { label: 'Years Experience', value: '2+' },
                { label: 'NDT Methods', value: '5+' },
                { label: 'Industry Standards', value: '10+' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-2xl font-bold text-industrial-blue">{stat.value}</p>
                  <p className="text-body-text text-xs">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[480px] lg:h-[600px] w-full"
          >
            {/* Industrial frame decoration */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              {/* Corner marks */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-industrial-blue/30 rounded-tl-sm" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-industrial-blue/30 rounded-tr-sm" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-industrial-blue/30 rounded-bl-sm" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-industrial-blue/30 rounded-br-sm" />

              {/* Technical measurement marks */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-0.5 bg-industrial-blue/20" />
                ))}
              </div>

              {/* 3D canvas */}
              <Suspense fallback={
                <div className="w-full h-full bg-bg-secondary rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-border-color border-t-industrial-blue rounded-full animate-spin mx-auto mb-3"></div>
                    <p className="text-body-text text-sm">Loading 3D Scene...</p>
                  </div>
                </div>
              }>
                <ThreeDScene />
              </Suspense>
            </div>

            {/* Floating info cards */}
            <FloatingCard
              icon={Shield}
              label="Qualification"
              value="ASNT Level II"
              className="absolute -left-4 top-1/4 z-20 shadow-lg"
            />
            <FloatingCard
              icon={Award}
              label="Certification"
              value="Appreciation Award"
              className="absolute -right-4 top-1/3 z-20 shadow-lg"
            />
            <FloatingCard
              icon={MapPin}
              label="Location"
              value="Thiruvallur, TN"
              className="absolute left-1/4 -bottom-4 z-20 shadow-lg"
            />

            {/* Label */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm border border-border-color rounded-full px-4 py-1.5 text-xs font-semibold text-industrial-blue z-20 whitespace-nowrap">
              ⟳ Interactive – Drag to Rotate
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-body-text"
      >
        <span className="text-xs font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-border-color rounded-full flex items-start justify-center pt-1"
        >
          <div className="w-1 h-2 bg-industrial-blue rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

