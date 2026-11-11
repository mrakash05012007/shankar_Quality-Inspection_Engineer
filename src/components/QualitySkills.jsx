import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  AlertOctagon, BarChart3, RefreshCw, CheckSquare,
  Search, FileWarning, Box, Layers, PenTool, FileText
} from 'lucide-react'
import { qualityMethodologies, technicalSoftware } from '../data/portfolioData'

const iconMap = {
  AlertOctagon, BarChart3, RefreshCw, CheckSquare,
  Search, FileWarning, Box, Layers, PenTool, FileText,
  Tool: ({ size, ...props }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
}

function MethodologyCard({ item, index, isInView }) {
  const Icon = iconMap[item.icon] || CheckSquare
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group card p-5 hover:border-industrial-blue/30 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-10 h-10 bg-industrial-blue/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-industrial-blue transition-all duration-300">
        <Icon
          size={18}
          className="text-industrial-blue group-hover:text-white transition-colors duration-300"
        />
      </div>
      <h3 className="font-heading font-bold text-heading text-sm mb-1 group-hover:text-industrial-blue transition-colors">
        {item.name}
      </h3>
      <p className="text-body-text text-xs leading-relaxed">
        {item.fullName}
      </p>
    </motion.div>
  )
}

function SoftwareCard({ item, index, isInView }) {
  const Icon = iconMap[item.icon] || Box
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group card p-5 hover:border-safety-orange/30 hover:-translate-y-1 transition-all duration-300 text-center"
    >
      <div className="w-12 h-12 bg-soft-orange rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:bg-safety-orange transition-all duration-300">
        <Icon
          size={22}
          className="text-safety-orange group-hover:text-white transition-colors duration-300"
        />
      </div>
      <h3 className="font-heading font-bold text-heading text-sm mb-1">
        {item.name}
      </h3>
      <p className="text-body-text text-xs">{item.category}</p>
    </motion.div>
  )
}

export default function QualitySkills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section-padding bg-bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-40 pointer-events-none" />

      <div className="container-width relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="blue-badge mb-3 inline-block">Skills & Tools</span>
          <h2 className="section-heading">
            Quality Methodologies &{' '}
            <span className="text-industrial-blue">Technical Skills</span>
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        {/* Two columns: Methodologies + Software */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Quality Methodologies */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-bold text-heading text-xl mb-6 flex items-center gap-3"
            >
              <div className="w-1 h-6 bg-industrial-blue rounded-full" />
              Quality Methodologies
            </motion.h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {qualityMethodologies.map((item, index) => (
                <MethodologyCard
                  key={item.id}
                  item={item}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>

          {/* Technical Software */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-heading font-bold text-heading text-xl mb-6 flex items-center gap-3"
            >
              <div className="w-1 h-6 bg-safety-orange rounded-full" />
              Technical Software
            </motion.h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {technicalSoftware.map((item, index) => (
                <SoftwareCard
                  key={item.id}
                  item={item}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>

            {/* Additional note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-xl border border-border-color p-5"
            >
              <h4 className="font-heading font-semibold text-heading text-sm mb-2">
                Material Knowledge
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Carbon Steel (CS)',
                  'Stainless Steel (SS)',
                  'Duplex SS (DSS)',
                  'Incoloy',
                  'Alloy Steels',
                ].map((mat) => (
                  <span key={mat} className="text-xs bg-bg-secondary text-body-text border border-border-color rounded-full px-3 py-1">
                    {mat}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

