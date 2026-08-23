'use client'

import { FiGithub, FiMail, FiHeart, FiLink } from 'react-icons/fi'
import { SiInstagram, SiLinkedin, SiWhatsapp } from 'react-icons/si'

// Panel kiri: sosial media + linktree + kerjasama + jasa gratis
const items = [
  // Separator: Sosial Media
  { type: 'divider', label: 'SOSIAL' },
  { type: 'link', Icon: FiGithub,    href: 'https://github.com/rizki-habibi',              label: 'GitHub',    warna: '#0a0a0a' },
  { type: 'link', Icon: SiInstagram, href: 'https://instagram.com/rizkihabibi',            label: 'Instagram', warna: '#e1306c' },
  { type: 'link', Icon: SiLinkedin,  href: 'https://linkedin.com/in/rizki-habibi',         label: 'LinkedIn',  warna: '#0a66c2' },
  { type: 'link', Icon: SiWhatsapp,  href: 'https://wa.me/62882009725053',                 label: 'WhatsApp',  warna: '#25d366' },
  { type: 'link', Icon: FiMail,      href: 'mailto:rizkihub7@gmail.com',                   label: 'Email',     warna: '#1a5cff' },
  // Separator: Link & Jasa
  { type: 'divider', label: 'LAINNYA' },
  { type: 'link', Icon: FiLink,      href: 'https://berbagi-tautan-rizki.vercel.app',      label: 'Linktree',  warna: '#f59e0b' },
  { type: 'action', Icon: FiHeart,   href: '#jasa-gratis',                                 label: 'Jasa',      warna: '#e63329' },
  { type: 'action', Icon: SiWhatsapp,href: 'https://wa.me/62882009725053?text=Halo%20Rizki%2C%20saya%20tertarik%20kerjasama!', label: 'Kerjasama', warna: '#8b5cf6' },
] as const

export default function SocialFloat() {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-0.5">
      {items.map((item, idx) => {
        // Divider
        if (item.type === 'divider') {
          return (
            <div
              key={`div-${idx}`}
              className="ml-1 my-0.5 flex items-center gap-1"
            >
              <div
                style={{
                  width: 32,
                  height: 1,
                  background: 'repeating-linear-gradient(90deg,#0a0a0a 0,#0a0a0a 4px,transparent 4px,transparent 8px)',
                  opacity: 0.2,
                }}
              />
              <span className="font-bold text-[7px] text-[#0a0a0a]/20 tracking-widest">{item.label}</span>
            </div>
          )
        }

        const { Icon, href, label, warna } = item as { type: string; Icon: React.ComponentType<{ className?: string }>; href: string; label: string; warna: string }
        const isScroll = href.startsWith('#')

        const inner = (
          <>
            {/* Ikon — selalu terlihat */}
            <div
              className="flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
              style={{
                width: 38,
                height: 38,
                background: warna,
                borderRadius: '0 6px 6px 0',
                border: `2px solid ${warna}`,
                borderLeft: 'none',
                boxShadow: '3px 3px 0 rgba(0,0,0,0.25)',
              }}
            >
              <Icon className="w-4 h-4 text-white" />
            </div>

            {/* Label — slide keluar saat hover */}
            <div className="overflow-hidden max-w-0 group-hover:max-w-[110px] transition-all duration-200 ease-out">
              <div
                className="font-comic text-[10px] text-white tracking-widest whitespace-nowrap px-2.5 py-2.5"
                style={{
                  background: warna,
                  borderRadius: '0 6px 6px 0',
                  borderTop: `2px solid ${warna}`,
                  borderRight: `2px solid ${warna}`,
                  borderBottom: `2px solid ${warna}`,
                  boxShadow: '3px 3px 0 rgba(0,0,0,0.25)',
                  marginLeft: -2,
                }}
              >
                {label.toUpperCase()}
              </div>
            </div>
          </>
        )

        if (isScroll) {
          return (
            <a
              key={label}
              href={href}
              title={label}
              className="group flex items-center"
              style={{ textDecoration: 'none' }}
            >
              {inner}
            </a>
          )
        }

        return (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            className="group flex items-center"
            style={{ textDecoration: 'none' }}
          >
            {inner}
          </a>
        )
      })}

      {/* Garis dekoratif bawah */}
      <div
        className="ml-3 mt-1"
        style={{
          width: 2,
          height: 20,
          background: 'repeating-linear-gradient(180deg,#0a0a0a 0,#0a0a0a 3px,transparent 3px,transparent 7px)',
          opacity: 0.15,
        }}
      />
    </div>
  )
}
