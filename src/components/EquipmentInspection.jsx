import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { X, ShieldCheck } from 'lucide-react'
import { equipment } from '../data/portfolioData'

function EquipmentCard({ item, index, isInView, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      onClick={() => onClick(item)}
      className="group card overflow-hidden cursor-pointer hover:border-industrial-blue/40 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      {/* Real Equipment Image with hover zoom */}
      <div className="relative h-32 w-full overflow-hidden bg-bg-secondary">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
        <span className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm text-industrial-blue text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
          INSPECTION
        </span>
      </div>

      <div className="p-3.5 flex flex-col flex-grow justify-between">
        <h3 className="font-heading font-bold text-heading text-xs sm:text-sm text-center group-hover:text-industrial-blue transition-colors line-clamp-2">
          {item.name}
        </h3>

        <p className="text-body-text text-[11px] text-center mt-2 group-hover:text-safety-orange font-medium transition-colors">
          View Scope →
        </p>

        {/* Bottom accent line */}
        <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-industrial-blue to-safety-orange rounded-full transition-all duration-300 mt-2 mx-auto" />
      </div>
    </motion.div>
  )
}

function EquipmentModal({ item, onClose }) {
  if (!item) return null
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-heading/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 20 }}
          className="bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl border border-border-color"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Real image in modal header */}
          <div className="relative h-48 w-full overflow-hidden bg-bg-secondary">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white text-heading rounded-full shadow-md transition-all"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="absolute bottom-3 left-4 right-4">
              <span className="text-xs text-white font-bold bg-safety-orange rounded-full px-2.5 py-0.5 inline-block mb-1">
                Inspection Scope
              </span>
              <h3 className="font-heading font-bold text-white text-xl">{item.name}</h3>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3 text-industrial-blue">
              <ShieldCheck size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">Quality Inspection Relevance</span>
            </div>

            {/* Description */}
            <p className="text-body-text text-sm leading-relaxed mb-4">
              {item.description}
            </p>

            {/* Note */}
            <div className="p-3 bg-bg-secondary rounded-xl border border-border-color">
              <p className="text-xs text-body-text">
                <strong className="text-industrial-blue">Inspection Exposure:</strong> Covers stage-wise, incoming, in-process, pressure testing and pre-dispatch surveillance per applicable ASME, API and project specifications.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function EquipmentInspection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <section id="equipment" className="section-padding bg-bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="container-width relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="blue-badge mb-3 inline-block">Equipment Scope</span>
          <h2 className="section-heading">
            Inspection Across Critical{' '}
            <span className="text-industrial-blue">Industrial Equipment</span>
          </h2>
          <div className="section-divider mx-auto" />
          <p className="section-subheading mx-auto text-center">
            Click on any equipment card to explore its detailed inspection relevance, testing standards and stage-wise surveillance scope.
          </p>
        </motion.div>

        {/* Equipment Grid with Real Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {equipment.map((item, index) => (
            <EquipmentCard
              key={item.id}
              item={item}
              index={index}
              isInView={isInView}
              onClick={setSelectedItem}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <EquipmentModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  )
}
