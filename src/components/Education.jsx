import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, BookOpen } from 'lucide-react'
import { education } from '../data/portfolioData'

const iconMap = { GraduationCap, Award, BookOpen }

const educationColors = {
  degree: { bg: '#164E78', light: '#EAF1F6', accent: '#164E78' },
  diploma: { bg: '#E58A32', light: '#FFF3E5', accent: '#E58A32' },
  school: { bg: '#164E78', light: '#EAF1F6', accent: '#164E78' },
}

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none" />

      <div className="container-width relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="blue-badge mb-3 inline-block">Education</span>
          <h2 className="section-heading">
            Academic{' '}
            <span className="text-industrial-blue">Background</span>
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => {
            const Icon = iconMap[edu.icon] || GraduationCap
            const colors = educationColors[edu.type]

            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                {/* Vertical line */}
                {index < education.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-border-color to-transparent" />
                )}

                {/* Icon node */}
                <div className="flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md text-white z-10 relative"
                    style={{ background: colors.bg }}
                  >
                    <Icon size={20} />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 card overflow-hidden hover:shadow-md transition-shadow">
                  {/* Accent bar */}
                  <div className="h-1" style={{ background: `linear-gradient(90deg, ${colors.accent}, transparent)` }} />

                  <div className="p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-heading font-bold text-heading text-base">
                          {edu.degree}
                        </h3>
                        <p className="text-body-text text-sm mt-0.5">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="text-right">
                        <span
                          className="text-xs font-bold px-2.5 py-1 rounded-lg inline-block"
                          style={{ background: colors.light, color: colors.accent }}
                        >
                          {edu.year}
                        </span>
                        <p
                          className="text-sm font-bold mt-1"
                          style={{ color: colors.accent }}
                        >
                          {edu.score}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Key achievement note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 max-w-3xl mx-auto text-center bg-bg-secondary rounded-2xl p-6 border border-border-color"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Award size={18} className="text-safety-orange" />
            <span className="font-heading font-semibold text-heading text-sm">
              Academic Highlight
            </span>
          </div>
          <p className="text-body-text text-sm">
            Scored <strong className="text-safety-orange">97%</strong> in Diploma – Mechanical Engineering and graduated with{' '}
            <strong className="text-industrial-blue">CGPA 7.62</strong> from College of Engineering Guindy, Anna University — one of India's premier engineering institutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

