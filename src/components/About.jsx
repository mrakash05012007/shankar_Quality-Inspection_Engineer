import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, MapPin, Mail, Award, Phone, Download } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const LinkedinIcon = ({ size = 15, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z"/>
  </svg>
)

const highlights = [
  'Third-Party Inspection (TPI) at vendor premises',
  'Welding, dimensional, material and coating inspection',
  'Quality documentation and data dossier preparation',
  'NDT monitoring and RT film interpretation',
  'NCR identification and corrective action follow-up',
  'FMEA, Six Sigma DMAIC and 7 QC Tools',
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Background blueprint accent */}
      <div className="absolute inset-0 bg-blueprint opacity-50 pointer-events-none" />

      <div className="container-width relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="blue-badge mb-3 inline-block">About Me</span>
          <h2 className="section-heading">
            Engineering Quality Through{' '}
            <span className="text-industrial-blue">Precision</span> and Inspection
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Profile Image + Badge */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Industrial frame */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-border-color shadow-xl bg-bg-secondary">
                {/* Corner marks */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-industrial-blue z-10" />
                <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-industrial-blue z-10" />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-safety-orange z-10" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-safety-orange z-10" />

                {/* Profile image */}
                <div className="aspect-[4/5] bg-bg-secondary overflow-hidden">
                  <img
                    src={personalInfo.profileImage}
                    alt="Shankar J – Inspection & Quality Engineer"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                </div>

                {/* Scan line overlay */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="scan-line" />
                </div>
              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-5 -right-5 bg-industrial-blue text-white rounded-2xl p-4 shadow-lg z-20"
              >
                <p className="font-heading text-3xl font-bold leading-none">2+</p>
                <p className="text-xs text-blue-200 mt-0.5 leading-tight">Years of<br />Experience</p>
              </motion.div>

              {/* ASNT badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -top-4 -left-4 bg-safety-orange text-white rounded-xl px-3 py-2 shadow-lg z-20"
              >
                <p className="text-xs font-bold leading-tight">ASNT</p>
                <p className="text-xs font-bold text-orange-100">LEVEL II</p>
              </motion.div>
            </div>

            {/* Contact info below image */}
            <div className="mt-8 space-y-2.5 max-w-sm mx-auto">
              <div className="flex items-center gap-3 text-body-text">
                <div className="w-8 h-8 bg-bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={15} className="text-industrial-blue" />
                </div>
                <span className="text-sm font-medium">{personalInfo.location}</span>
              </div>

              <div className="flex items-center gap-3 text-body-text">
                <div className="w-8 h-8 bg-bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={15} className="text-industrial-blue" />
                </div>
                <a href={`mailto:${personalInfo.email}`} className="text-sm hover:text-industrial-blue transition-colors font-medium truncate">
                  {personalInfo.email}
                </a>
              </div>

              {personalInfo.phone && (
                <div className="flex items-center gap-3 text-body-text">
                  <div className="w-8 h-8 bg-bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={15} className="text-industrial-blue" />
                  </div>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="text-sm hover:text-industrial-blue transition-colors font-medium">
                    {personalInfo.phone}
                  </a>
                </div>
              )}

              {personalInfo.linkedin && (
                <div className="flex items-center gap-3 text-body-text">
                  <div className="w-8 h-8 bg-bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <LinkedinIcon size={15} className="text-industrial-blue" />
                  </div>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-industrial-blue transition-colors font-medium">
                    LinkedIn Profile
                  </a>
                </div>
              )}

              <div className="pt-2">
                <a
                  href={personalInfo.resumeFile}
                  download="Shankar-J-Resume.pdf"
                  className="btn-secondary w-full justify-center text-sm py-2.5"
                >
                  <Download size={15} />
                  Download Complete Resume
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="font-heading text-2xl font-bold text-heading mb-4">
              Professional Summary
            </h3>
            <div className="section-divider" />

            <p className="text-body-text text-base leading-relaxed mb-6">
              {personalInfo.professionalSummary}
            </p>

            {/* Key Highlights */}
            <div className="bg-bg-secondary rounded-2xl p-6 mb-6">
              <h4 className="font-heading font-semibold text-heading mb-4 flex items-center gap-2">
                <Award size={18} className="text-safety-orange" />
                Professional Highlights
              </h4>
              <div className="space-y-3">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle
                      size={16}
                      className="text-industrial-blue mt-0.5 flex-shrink-0"
                    />
                    <span className="text-body-text text-sm leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Current Role */}
            <div className="border border-border-color rounded-xl p-4 flex gap-4 items-start">
              <div className="w-10 h-10 bg-industrial-blue rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-heading font-bold text-sm">IR</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs font-semibold text-safety-orange bg-soft-orange rounded-full px-2 py-0.5">
                    Current Role
                  </span>
                </div>
                <p className="font-heading font-semibold text-heading text-sm">Engineer</p>
                <p className="text-body-text text-xs">IRclass Systems and Solution Limited</p>
                <p className="text-body-text text-xs mt-0.5">October 2025 – Present</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

