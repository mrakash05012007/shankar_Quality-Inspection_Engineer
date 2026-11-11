import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Shield, CheckCircle, Layers, Zap, Ruler, Droplets,
  Settings, ClipboardCheck, Eye, TrendingUp, FileText, AlertTriangle
} from 'lucide-react'
import { expertise } from '../data/portfolioData'

const iconMap = {
  Shield, CheckCircle, Layers, Zap, Ruler, Droplets,
  Settings, ClipboardCheck, Eye, TrendingUp, FileText, AlertTriangle,
}

function ExpertiseCard({ item, index, isInView }) {
  const Icon = iconMap[item.icon] || Shield

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group card p-5 hover:border-industrial-blue/30 hover:-translate-y-1 cursor-default"
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className="w-10 h-10 bg-industrial-blue/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-industrial-blue group-hover:text-white transition-all duration-300">
          <Icon size={18} className="text-industrial-blue group-hover:text-white transition-colors duration-300" />
        </div>
        <div>
          <h3 className="font-heading font-semibold text-heading text-sm mb-1 group-hover:text-industrial-blue transition-colors">
            {item.title}
          </h3>
          <p className="text-body-text text-xs leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Expertise() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="expertise" className="section-padding bg-bg-main relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="container-width relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="blue-badge mb-3 inline-block">Core Expertise</span>
          <h2 className="section-heading">
            Areas of{' '}
            <span className="text-industrial-blue">Professional Expertise</span>
          </h2>
          <div className="section-divider mx-auto" />
          <p className="section-subheading mx-auto text-center">
            Specialized inspection capabilities across critical industrial and Oil & Gas domains
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {expertise.map((item, index) => (
            <ExpertiseCard
              key={item.id}
              item={item}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Bottom highlight band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 bg-industrial-blue rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <h3 className="font-heading text-white font-bold text-xl mb-1">
              Comprehensive TPI Services
            </h3>
            <p className="text-blue-200 text-sm">
              Independent third-party inspection at vendor premises for Oil & Gas, power and industrial projects
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            {['TPI', 'QA', 'QC', 'NDT'].map((tag) => (
              <div key={tag} className="bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 text-white text-sm font-semibold">
                {tag}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

