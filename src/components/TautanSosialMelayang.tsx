'use client'

import { FiGithub, FiMail } from 'react-icons/fi'
import { SiInstagram, SiLinkedin, SiWhatsapp } from 'react-icons/si'

const socials = [
  { Icon: FiGithub, href: 'https://github.com/rizki-habibi', label: 'GitHub', warna: '#0a0a0a' },
  { Icon: SiInstagram, href: 'https://instagram.com/rizkihabibi', label: 'Instagram', warna: '#e1306c' },
  { Icon: SiLinkedin, href: 'https://linkedin.com/in/rizki-habibi', label: 'LinkedIn', warna: '#0a66c2' },
  { Icon: SiWhatsapp, href: 'https://wa.me/62882009725053', label: 'WhatsApp', warna: '#25d366' },
  { Icon: FiMail, href: 'mailto:rizkihub7@gmail.com', label: 'Email', warna: '#1a5cff' },
]

export default function SocialFloat() {
  return (
    // Desktop: sidebar kiri tengah — selalu terlihat, label muncul saat hover
    // Mobile: disembunyikan (sudah ada di navbar mobile)
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-0.5">
      {socials.map(({ Icon, href, label, warna }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={label}
          className="group flex items-center"
          style={{ textDecoration: 'none' }}
        >
          {/* Ikon — selalu terlihat */}
          <div
            className="flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
            style={{
              width: 40,
              height: 40,
              background: warna,
              borderRadius: '0 6px 6px 0',
              border: `2px solid ${warna}`,
              borderLeft: 'none',
              boxShadow: `3px 3px 0 rgba(0,0,0,0.3)`,
            }}
          >
            <Icon className="w-4 h-4 text-white" />
          </div>

          {/* Label — slide keluar saat hover */}
          <div
            className="overflow-hidden max-w-0 group-hover:max-w-[100px] transition-all duration-200 ease-out"
          >
            <div
              className="font-comic text-[10px] text-white tracking-widest whitespace-nowrap px-2.5 py-2.5"
              style={{
                background: warna,
                borderRadius: '0 6px 6px 0',
                borderTop: `2px solid ${warna}`,
                borderRight: `2px solid ${warna}`,
                borderBottom: `2px solid ${warna}`,
                boxShadow: `3px 3px 0 rgba(0,0,0,0.3)`,
                marginLeft: -2,
              }}
            >
              {label.toUpperCase()}
            </div>
          </div>
        </a>
      ))}

      {/* Garis dekoratif */}
      <div
        className="ml-3 mt-2"
        style={{
          width: 2,
          height: 24,
          background: 'repeating-linear-gradient(180deg,#0a0a0a 0,#0a0a0a 3px,transparent 3px,transparent 7px)',
          opacity: 0.2,
        }}
      />
    </div>
  )
}
