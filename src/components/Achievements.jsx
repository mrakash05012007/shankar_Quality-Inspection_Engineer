import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Star, Building2, Calendar, Trophy } from 'lucide-react'
import { achievement } from '../data/portfolioData'

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" className="section-padding bg-bg-main relative overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      {/* Decorative accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-safety-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-width relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="orange-badge mb-3 inline-block">Achievement</span>
          <h2 className="section-heading">
            Professional{' '}
            <span className="text-industrial-blue">Recognition</span>
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        {/* Achievement Card */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl bg-white border border-border-color shadow-lg"
          >
            {/* Top gradient bar */}
            <div className="h-2 bg-gradient-to-r from-industrial-blue via-safety-orange to-industrial-blue" />

            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
              <svg viewBox="0 0 256 256" fill="none" className="w-full h-full text-industrial-blue">
                {[20,40,60,80,100].map(r => (
                  <circle key={r} cx="256" cy="0" r={r + 20} stroke="currentColor" strokeWidth="1" />
                ))}
              </svg>
            </div>

            <div className="p-8 relative z-10">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* Award icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-safety-orange to-orange-400 rounded-2xl flex items-center justify-center shadow-lg">
                    <Trophy size={36} className="text-white" />
                  </div>
                  {/* Stars */}
                  <div className="flex justify-center gap-0.5 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-safety-orange fill-safety-orange" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="inline-flex items-center gap-1.5 bg-soft-orange border border-orange-200 rounded-full px-3 py-1 mb-3">
                    <Award size={12} className="text-safety-orange" />
                    <span className="text-safety-orange text-xs font-bold">RECOGNITION</span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-heading mb-1">
                    {achievement.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <Building2 size={14} className="text-industrial-blue" />
                    <span className="text-industrial-blue font-semibold text-sm">
                      {achievement.issuer}
                    </span>
                  </div>

                  {/* Recognition text */}
                  <div className="bg-bg-secondary rounded-xl p-4 mb-4 border-l-4 border-safety-orange">
                    <p className="text-body-text text-sm leading-relaxed italic">
                      "{achievement.recognition}"
                    </p>
                  </div>

                  {/* Meta info */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-industrial-blue/10 rounded-lg flex items-center justify-center">
                        <Building2 size={13} className="text-industrial-blue" />
                      </div>
                      <div>
                        <p className="text-body-text text-xs">Project</p>
                        <p className="text-heading text-xs font-semibold">{achievement.project}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-safety-orange/10 rounded-lg flex items-center justify-center">
                        <Calendar size={13} className="text-safety-orange" />
                      </div>
                      <div>
                        <p className="text-body-text text-xs">Date</p>
                        <p className="text-heading text-xs font-semibold">{achievement.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom tag */}
            <div className="bg-bg-secondary px-8 py-3 border-t border-border-color flex items-center justify-between">
              <span className="text-body-text text-xs">
                BGR Energy Systems Ltd. — Oil & Gas Quality Recognition
              </span>
              <div className="flex gap-1">
                {['QC', 'TPI', 'OIL&GAS'].map(tag => (
                  <span key={tag} className="text-xs blue-badge">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

