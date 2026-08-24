'use client'

import { FiGithub, FiMail, FiHeart, FiLink } from 'react-icons/fi'
import { SiInstagram, SiLinkedin, SiWhatsapp } from 'react-icons/si'

const items = [
  { Icon: FiGithub, href: 'https://github.com/rizki-habibi', label: 'GitHub', warna: '#0a0a0a', ext: true },
  { Icon: SiInstagram, href: 'https://instagram.com/rizkihabibi', label: 'Instagram', warna: '#e1306c', ext: true },
  { Icon: SiLinkedin, href: 'https://linkedin.com/in/rizki-habibi', label: 'LinkedIn', warna: '#0a66c2', ext: true },
  { Icon: SiWhatsapp, href: 'https://wa.me/62882009725053', label: 'WhatsApp', warna: '#25d366', ext: true },
  { Icon: FiMail, href: 'mailto:rizkihub7@gmail.com', label: 'Email', warna: '#1a5cff', ext: true },
  { Icon: FiLink, href: 'https://berbagi-tautan-rizki.vercel.app', label: 'Linktree', warna: '#f59e0b', ext: true },
  { Icon: FiHeart, href: '#jasa-gratis', label: 'Jasa', warna: '#e63329', ext: false },
]

// ── Desktop: sidebar kiri ──────────────────────────────────────────────
function SidebarDesktop() {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-0.5">
      {items.map(({ Icon, href, label, warna, ext }) => {
        const inner = (
          <>
            <div
              className="flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
              style={{ width: 38, height: 38, background: warna, borderRadius: '0 6px 6px 0', border: `2px solid ${warna}`, borderLeft: 'none', boxShadow: '3px 3px 0 rgba(0,0,0,0.25)' }}
            >
              <Icon className="w-4 h-4 text-white" />
            </div>
            <div className="overflow-hidden max-w-0 group-hover:max-w-[110px] transition-all duration-200 ease-out">
              <div className="font-comic text-[10px] text-white tracking-widest whitespace-nowrap px-2.5 py-2.5"
                style={{ background: warna, borderRadius: '0 6px 6px 0', borderTop: `2px solid ${warna}`, borderRight: `2px solid ${warna}`, borderBottom: `2px solid ${warna}`, boxShadow: '3px 3px 0 rgba(0,0,0,0.25)', marginLeft: -2 }}>
                {label.toUpperCase()}
              </div>
            </div>
          </>
        )

        if (!ext) return (
          <a key={label} href={href} title={label} className="group flex items-center" style={{ textDecoration: 'none' }}>
            {inner}
          </a>
        )
        return (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label} className="group flex items-center" style={{ textDecoration: 'none' }}>
            {inner}
          </a>
        )
      })}
      <div className="ml-3 mt-1" style={{ width: 2, height: 20, background: 'repeating-linear-gradient(180deg,#0a0a0a 0,#0a0a0a 3px,transparent 3px,transparent 7px)', opacity: 0.15 }} />
    </div>
  )
}

// ── Mobile: bottom bar sosial ──────────────────────────────────────────
function BottomBarMobile() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden flex items-center justify-center gap-1 px-2 py-2"
      style={{ background: '#0a0a0a', borderTop: '2px solid #222' }}>
      {items.slice(0, 6).map(({ Icon, href, label, warna, ext }) => (<a
        key={label}
        href={href}
        target={ext ? '_blank' : undefined}
        rel={ext ? 'noopener noreferrer' : undefined}
        title={label}
        className="flex items-center justify-center rounded"
        style={{ width: 40, height: 40, background: warna + '22', border: `1.5px solid ${warna}44` }}
      >
        <Icon className="w-4 h-4" style={{ color: warna }} />
      </a>
      ))}
      {/* Tombol ke tujuan karir */}
      <a
        href="#tujuan-karir"
        className="flex items-center justify-center rounded font-bold text-sm"
        style={{ width: 40, height: 40, background: '#1a5cff22', border: '1.5px solid #1a5cff44', color: '#1a5cff' }}>
        🎯
      </a>
    </div>
  )
}

export default function SocialFloat() {
  return (
    <>
      <SidebarDesktop />
      <BottomBarMobile />
    </>
  )
}
