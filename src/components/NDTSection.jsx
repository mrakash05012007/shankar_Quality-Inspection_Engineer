import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Eye, Droplets, Activity, Radio, Search, Target, Award } from 'lucide-react'
import { ndtMethods, asntQualification } from '../data/portfolioData'

const iconMap = {
  Eye, Droplets, Activity, Radio, Search, Target,
  Magnet: ({ size, ...props }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 15h12v3a6 6 0 0 1-12 0v-3z"/>
      <path d="M6 6v9"/>
      <path d="M18 6v9"/>
      <path d="M6 6a6 6 0 0 1 12 0"/>
      <line x1="8" y1="6" x2="8" y2="2"/>
      <line x1="16" y1="6" x2="16" y2="2"/>
    </svg>
  ),
}

function NDTCard({ method, index, isInView }) {
  const Icon = iconMap[method.icon] || Eye
  const isBlue = method.color === '#164E78'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group card overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
    >
      {/* Top color accent */}
      <div
        className="h-1.5 w-full"
        style={{ background: `linear-gradient(90deg, ${method.color}, ${isBlue ? '#E58A32' : '#164E78'})` }}
      />

      <div className="p-5">
        {/* Icon + Code */}
        <div className="flex items-center justify-between mb-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `${method.color}15` }}
          >
            <Icon size={18} style={{ color: method.color }} />
          </div>
          <span
            className="text-xs font-bold tracking-wider px-2 py-1 rounded-md"
            style={{ background: `${method.color}15`, color: method.color }}
          >
            {method.code}
          </span>
        </div>

        {/* Name */}
        <h3 className="font-heading font-bold text-heading text-sm mb-2 group-hover:text-industrial-blue transition-colors">
          {method.name}
        </h3>

        {/* Description */}
        <p className="text-body-text text-xs leading-relaxed">
          {method.description}
        </p>

        {/* Inspection visual - subtle wave */}
        <div className="mt-4 h-6 relative overflow-hidden opacity-20">
          <svg viewBox="0 0 200 24" className="w-full" style={{ stroke: method.color }} fill="none" strokeWidth="1.5">
            <path d="M0 12 Q25 4 50 12 Q75 20 100 12 Q125 4 150 12 Q175 20 200 12" />
            <line x1="0" y1="12" x2="200" y2="12" strokeDasharray="2 4" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </motion.div>
  )
}

export default function NDTSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="ndt" className="section-padding bg-white relative overflow-hidden">
      {/* Blueprint background */}
      <div className="absolute inset-0 bg-blueprint opacity-40 pointer-events-none" />

      <div className="container-width relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="orange-badge mb-3 inline-block">NDT</span>
          <h2 className="section-heading">
            Non-Destructive Testing{' '}
            <span className="text-industrial-blue">Exposure</span>
          </h2>
          <div className="section-divider mx-auto" />
          <p className="section-subheading mx-auto text-center">
            Practical exposure to major NDT methods used in Oil & Gas and industrial fabrication inspection
          </p>
        </motion.div>

        {/* NDT Methods Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {ndtMethods.map((method, index) => (
            <NDTCard key={method.id} method={method} index={index} isInView={isInView} />
          ))}
        </div>

        {/* ASNT Qualification Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-industrial-blue text-white p-6 sm:p-8"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg viewBox="0 0 400 200" className="w-full h-full" fill="none">
              {[...Array(8)].map((_, i) => (
                <circle key={i} cx={i * 60} cy="100" r="80" stroke="white" strokeWidth="0.5" />
              ))}
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            {/* Award icon */}
            <div className="flex-shrink-0 w-16 h-16 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center">
              <Award size={28} className="text-safety-orange" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <span className="bg-safety-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                  QUALIFICATION
                </span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-2">
                {asntQualification.level}
              </h3>
              <p className="text-blue-200 text-sm mb-4">
                {asntQualification.note}
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {asntQualification.methods.map((method) => (
                  <span
                    key={method}
                    className="bg-white/15 border border-white/25 text-white font-semibold text-sm px-4 py-1.5 rounded-lg"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>

            {/* Important note */}
            <div className="flex-shrink-0 max-w-xs bg-white/10 border border-white/20 rounded-xl p-4 text-center md:text-left">
              <p className="text-blue-200 text-xs leading-relaxed">
                <strong className="text-white">Note:</strong> The NDT methods above represent professional exposure during quality inspection activities. ASNT Level II qualification is separately listed as a formal qualification.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

