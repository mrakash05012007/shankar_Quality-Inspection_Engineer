import { Mail, Download, MapPin } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  const handleScroll = (href) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'NDT', href: '#ndt' },
    { label: 'Equipment', href: '#equipment' },
    { label: 'Standards', href: '#standards' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-deep-blue text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg viewBox="0 0 1440 400" className="w-full h-full" fill="none">
          {[...Array(10)].map((_, i) => (
            <line key={i} x1={i * 160} y1="0" x2={i * 160} y2="400" stroke="white" strokeWidth="0.5" />
          ))}
          {[...Array(6)].map((_, i) => (
            <line key={i} x1="0" y1={i * 80} x2="1440" y2={i * 80} stroke="white" strokeWidth="0.5" />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="py-12 grid md:grid-cols-3 gap-8 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-safety-orange rounded-xl flex items-center justify-center">
                <span className="text-white font-heading font-bold">SJ</span>
              </div>
              <div>
                <p className="font-heading font-bold text-white text-lg leading-none">SHANKAR J</p>
                <p className="text-blue-300 text-xs">Inspection & Quality Engineer</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm italic mb-4">
              "{personalInfo.footerTagline}"
            </p>
            <div className="space-y-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors text-sm"
              >
                <Mail size={14} />
                {personalInfo.email}
              </a>
              <div className="flex items-center gap-2 text-blue-300 text-sm">
                <MapPin size={14} />
                {personalInfo.location}, Tamil Nadu
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleScroll(link.href)}
                  className="text-left text-blue-300 hover:text-safety-orange text-sm transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Expertise Tags */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Core Expertise
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                'TPI', 'QA/QC', 'Welding Inspection', 'NDT', 'ASNT Level II',
                'API Standards', 'ASME Codes', 'Material Inspection',
                'Dimensional Inspection', 'Oil & Gas',
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-white/10 border border-white/15 text-blue-200 rounded-full px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Resume CTA */}
            <div className="mt-5">
              <a
                href={personalInfo.resumeFile}
                download="Shankar-J-Resume.pdf"
                className="inline-flex items-center gap-2 bg-safety-orange text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-all"
              >
                <Download size={14} />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-400 text-xs">
            © {new Date().getFullYear()} Shankar J. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-blue-400 text-xs">
            <span>Designed & Developed by</span>
            <span className="text-safety-orange font-semibold">Genze Technologies</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

