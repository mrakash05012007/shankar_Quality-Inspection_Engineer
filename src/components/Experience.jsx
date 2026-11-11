import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, ChevronUp, Briefcase, Calendar, Building2 } from 'lucide-react'
import { experiences } from '../data/portfolioData'

function ExperienceCard({ exp, index, isInView }) {
  const [isExpanded, setIsExpanded] = useState(index === 0)
  const isCurrent = exp.type === 'current'

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-industrial-blue to-transparent last:hidden" />

      <div className="flex gap-4">
        {/* Timeline node */}
        <div className="flex-shrink-0 flex flex-col items-center">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md z-10 ${
              isCurrent
                ? 'bg-industrial-blue text-white'
                : 'bg-white border-2 border-industrial-blue text-industrial-blue'
            }`}
          >
            <Briefcase size={20} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 pb-8">
          <div
            className={`card overflow-hidden transition-all duration-300 ${
              isCurrent ? 'border-industrial-blue/30' : ''
            }`}
          >
            {/* Top accent */}
            {isCurrent && (
              <div className="h-1 bg-gradient-to-r from-industrial-blue to-safety-orange" />
            )}

            <div className="p-5">
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  {isCurrent && (
                    <span className="text-xs font-semibold bg-green-50 text-green-600 border border-green-200 rounded-full px-2 py-0.5 inline-flex items-center gap-1 mb-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      Current Role
                    </span>
                  )}
                  <h3 className="font-heading font-bold text-heading text-lg">
                    {exp.designation}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Building2 size={14} className="text-industrial-blue flex-shrink-0" />
                    <span className="text-industrial-blue font-semibold text-sm">
                      {exp.company}
                    </span>
                    {exp.division && (
                      <span className="text-body-text text-xs">· {exp.division}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 mt-1 text-body-text text-xs">
                    <Calendar size={12} />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex-shrink-0 p-1.5 rounded-lg hover:bg-bg-secondary transition-colors text-body-text"
                  aria-label={isExpanded ? 'Collapse' : 'Expand'}
                >
                  {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
              </div>

              {/* Responsibilities (expandable) */}
              <motion.div
                initial={false}
                animate={{
                  height: isExpanded ? 'auto' : 0,
                  opacity: isExpanded ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 border-t border-border-color pt-4">
                  <h4 className="text-xs font-semibold text-safety-orange uppercase tracking-wider mb-3">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-body-text">
                        <span className="w-1.5 h-1.5 rounded-full bg-industrial-blue mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-padding bg-bg-main relative overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="container-width relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="blue-badge mb-3 inline-block">Work History</span>
          <h2 className="section-heading">
            Professional{' '}
            <span className="text-industrial-blue">Experience</span>
          </h2>
          <div className="section-divider mx-auto" />
          <p className="section-subheading mx-auto text-center">
            Career journey in quality inspection, TPI and quality engineering
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto space-y-2">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Companies', value: '2', icon: Building2 },
            { label: 'Years Active', value: '2+', icon: Calendar },
            { label: 'TPI Projects', value: 'Multiple', icon: Briefcase },
            { label: 'Industries', value: 'Oil & Gas', icon: Building2 },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="card p-4 text-center">
              <div className="w-9 h-9 mx-auto mb-2 bg-industrial-blue/10 rounded-lg flex items-center justify-center">
                <Icon size={18} className="text-industrial-blue" />
              </div>
              <p className="font-heading font-bold text-heading text-xl">{value}</p>
              <p className="text-body-text text-xs mt-0.5">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

