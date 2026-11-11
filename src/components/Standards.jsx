import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen } from 'lucide-react'
import { standards } from '../data/portfolioData'

function StandardCard({ std, index, isInView, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/50 transition-colors group"
    >
      <div
        className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0 group-hover:scale-150 transition-transform"
        style={{ background: color }}
      />
      <div>
        <span
          className="font-heading font-bold text-xs"
          style={{ color }}
        >
          {std.code}
        </span>
        <p className="text-body-text text-xs leading-relaxed mt-0.5">{std.description}</p>
      </div>
    </motion.div>
  )
}

function StandardsGroup({ title, items, color, bgColor, isInView, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-2xl border border-border-color overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Header bar */}
      <div className="px-5 py-4 border-b border-border-color" style={{ background: bgColor }}>
        <h3
          className="font-heading font-bold text-base"
          style={{ color }}
        >
          {title}
        </h3>
      </div>

      {/* Standards list */}
      <div className="p-3 space-y-1">
        {items.map((std, index) => (
          <StandardCard
            key={std.code}
            std={std}
            index={index}
            isInView={isInView}
            color={color}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function Standards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="standards" className="section-padding bg-white relative overflow-hidden">
      {/* Blueprint-style decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-blueprint opacity-30" />
        {/* Decorative corner blueprint element */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
          <svg viewBox="0 0 384 384" fill="none" className="w-full h-full text-industrial-blue">
            {[0,40,80,120,160].map(r => (
              <circle key={r} cx="384" cy="0" r={r + 60} stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
            ))}
            <line x1="0" y1="0" x2="384" y2="384" strokeWidth="0.5" stroke="currentColor" />
            <line x1="192" y1="0" x2="384" y2="192" strokeWidth="0.5" stroke="currentColor" />
          </svg>
        </div>
      </div>

      <div className="container-width relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="blue-badge mb-3 inline-block">Standards & Codes</span>
          <h2 className="section-heading">
            Codes, Standards &{' '}
            <span className="text-industrial-blue">Technical Compliance</span>
          </h2>
          <div className="section-divider mx-auto" />
          <p className="section-subheading mx-auto text-center">
            Familiar with and working exposure to internationally recognised codes and standards used in Oil & Gas and industrial fabrication
          </p>

          {/* Disclaimer */}
          <div className="mt-4 inline-flex items-center gap-2 bg-soft-orange/60 border border-orange-200 rounded-full px-4 py-1.5">
            <BookOpen size={14} className="text-safety-orange" />
            <span className="text-safety-orange text-xs font-medium">
              Standards & codes exposure — not claiming certification in these standards
            </span>
          </div>
        </motion.div>

        {/* Standards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StandardsGroup
            title="ASME Codes"
            items={standards.asme}
            color="#164E78"
            bgColor="#EAF1F6"
            isInView={isInView}
            delay={0.2}
          />
          <StandardsGroup
            title="API Standards"
            items={standards.api}
            color="#E58A32"
            bgColor="#FFF3E5"
            isInView={isInView}
            delay={0.3}
          />
          <StandardsGroup
            title="Other Standards"
            items={standards.other}
            color="#164E78"
            bgColor="#EAF1F6"
            isInView={isInView}
            delay={0.4}
          />
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 relative overflow-hidden rounded-2xl bg-bg-secondary border border-border-color p-6"
        >
          <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-industrial-blue to-safety-orange rounded-r-2xl" />
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1">
              <h3 className="font-heading font-bold text-heading mb-1">
                Technical Compliance Focus
              </h3>
              <p className="text-body-text text-sm">
                Practical application of codes and standards during quality inspection at vendor premises, ensuring products meet project specifications and international quality requirements.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-end flex-shrink-0">
              {['ASME', 'API', 'ASTM', 'NACE', 'ISO'].map((std) => (
                <span key={std} className="blue-badge">
                  {std}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

