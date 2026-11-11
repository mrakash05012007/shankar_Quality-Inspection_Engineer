import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Download, MapPin, MessageSquare, Phone } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const LinkedinIcon = ({ size = 18, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z"/>
  </svg>
)

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-main to-transparent pointer-events-none" />

      <div className="container-width relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="blue-badge mb-3 inline-block">Get In Touch</span>
          <h2 className="section-heading">
            Let's Connect for Quality &{' '}
            <span className="text-industrial-blue">Inspection Opportunities</span>
          </h2>
          <div className="section-divider mx-auto" />
          <p className="section-subheading mx-auto text-center">
            Available for Third-Party Inspection, Quality Engineering and Oil & Gas inspection opportunities
          </p>
        </motion.div>

        {/* Contact Card */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card overflow-hidden shadow-lg"
          >
            {/* Header */}
            <div className="bg-industrial-blue p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 400 200" className="w-full h-full" fill="none">
                  {[...Array(6)].map((_, i) => (
                    <circle key={i} cx={i * 80} cy="100" r="80" stroke="white" strokeWidth="0.5" />
                  ))}
                </svg>
              </div>
              <div className="relative z-10">
                {/* Photo in contact card */}
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-3 border-white/60 shadow-md bg-white">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="font-heading font-bold text-white text-2xl">{personalInfo.name}</h3>
                <p className="text-blue-200 text-sm mt-1">{personalInfo.title}</p>
                <p className="text-blue-300 text-xs mt-0.5">{personalInfo.subtitle}</p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="p-8">
              <div className="space-y-3.5 mb-8">
                {/* Email */}
                <div className="flex items-center gap-4 p-3.5 bg-bg-secondary rounded-xl group hover:bg-industrial-blue/5 transition-colors">
                  <div className="w-10 h-10 bg-industrial-blue/10 rounded-xl flex items-center justify-center group-hover:bg-industrial-blue transition-colors">
                    <Mail size={18} className="text-industrial-blue group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-body-text text-xs mb-0.5">Email Address</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-semibold text-heading text-sm hover:text-industrial-blue transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                {personalInfo.phone && (
                  <div className="flex items-center gap-4 p-3.5 bg-bg-secondary rounded-xl group hover:bg-industrial-blue/5 transition-colors">
                    <div className="w-10 h-10 bg-industrial-blue/10 rounded-xl flex items-center justify-center group-hover:bg-industrial-blue transition-colors">
                      <Phone size={18} className="text-industrial-blue group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-body-text text-xs mb-0.5">Phone</p>
                      <a
                        href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                        className="font-semibold text-heading text-sm hover:text-industrial-blue transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                )}

                {/* LinkedIn */}
                {personalInfo.linkedin && (
                  <div className="flex items-center gap-4 p-3.5 bg-bg-secondary rounded-xl group hover:bg-industrial-blue/5 transition-colors">
                    <div className="w-10 h-10 bg-industrial-blue/10 rounded-xl flex items-center justify-center group-hover:bg-industrial-blue transition-colors text-industrial-blue group-hover:text-white">
                      <LinkedinIcon size={18} />
                    </div>
                    <div>
                      <p className="text-body-text text-xs mb-0.5">LinkedIn Profile</p>
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-heading text-sm hover:text-industrial-blue transition-colors"
                      >
                        linkedin.com/in/shankar-j
                      </a>
                    </div>
                  </div>
                )}

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 bg-bg-secondary rounded-xl">
                  <div className="w-10 h-10 bg-industrial-blue/10 rounded-xl flex items-center justify-center">
                    <MapPin size={18} className="text-industrial-blue" />
                  </div>
                  <div>
                    <p className="text-body-text text-xs mb-0.5">Location</p>
                    <p className="font-semibold text-heading text-sm">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn-primary flex-1 justify-center"
                >
                  <MessageSquare size={16} />
                  Send Email
                </a>
                <a
                  href={personalInfo.resumeFile}
                  download="Shankar-J-Resume.pdf"
                  className="btn-secondary flex-1 justify-center"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>

              {/* Notice */}
              <p className="text-center text-body-text text-xs mt-6">
                Available for TPI, QA/QC and Oil & Gas inspection engagements.
                Response within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Open for opportunities card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 bg-soft-orange border border-orange-200 rounded-2xl p-5 flex items-center gap-4"
          >
            <div className="w-3 h-3 bg-safety-orange rounded-full animate-pulse flex-shrink-0" />
            <div>
              <p className="font-heading font-semibold text-heading text-sm">
                Open to Opportunities
              </p>
              <p className="text-body-text text-xs mt-0.5">
                Actively exploring Third-Party Inspection and Quality Engineering roles in Oil & Gas and industrial sectors
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

