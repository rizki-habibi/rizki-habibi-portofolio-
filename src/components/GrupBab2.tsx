'use client'

import { motion } from 'framer-motion'
import HeaderBab from '@/components/HeaderBab'

function ambilNomor(chNum: string): string {
  const m = chNum.match(/\d+/)
  return m ? m[0] : chNum
}

function PanelKomik({ id, chNum, judul, warna, latarBelakang, children }: {
  id: string; chNum: string; judul: string; warna: string; latarBelakang: string; children: React.ReactNode
}) {
  return (
    <section id={id} className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden" style={{ background: latarBelakang }}>
      <div className="halftone-bg" />
      <div className="max-w-6xl mx-auto relative z-10">
        <HeaderBab nomor={ambilNomor(chNum)} judul={judul} warna={warna} />
        {children}
      </div>
    </section>
  )
}

function PanelGrid({ items, cols = 3 }: { items: { icon: string; title: string; text: string; color: string; bg: string }[]; cols?: number }) {
  const colClass = cols === 2 ? 'grid-cols-1 sm:grid-cols-2' : cols === 4 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2 md:grid-cols-3'
  return (
    <div className={`grid ${colClass} gap-4`}>
      {items.map((item, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: i * 0.07, type: 'spring', stiffness: 120 }}
          viewport={{ once: true, amount: 0.1 }}
          whileHover={{ y: -5, rotate: i % 2 === 0 ? -1 : 1 }}
          className="overflow-hidden"
          style={{ border: `3px solid ${item.color}`, boxShadow: `4px 4px 0 ${item.color}`, background: item.bg }}>
          <div className="p-4">
            <div className="text-3xl mb-2">{item.icon}</div>
            <div className="font-comic text-sm mb-1" style={{ color: item.color }}>{item.title}</div>
            <div className="text-xs text-comic-black font-bold leading-relaxed">{item.text}</div>
          </div>
          <div className="h-1.5" style={{ background: item.color }} />
        </motion.div>
      ))}
    </div>
  )
}

// Ch26
function Ch26() {
  return (
    <PanelKomik id="ch26" chNum="CHAPTER 26" judul="AI JOURNEY — PERJALANAN DENGAN AI" warna="#8b5cf6" latarBelakang="#f5f0ff">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">🤖 AI bukan ancaman — AI adalah teman kerja terbaik!</div>
          <div className="comic-panel p-5 mb-4">
            <div className="font-comic text-lg text-comic-black mb-3">🧠 BAGAIMANA SAYA MENGGUNAKAN AI</div>
            <div className="space-y-3">
              {[
                { use: 'ChatGPT & Gemini', desc: 'Asisten coding, debugging, dan brainstorming ide produk', icon: '💬', color: '#8b5cf6' },
                { use: 'Azure OpenAI', desc: 'Rekayasa prompt untuk sistem otomasi dan chatbot', icon: '☁️', color: '#0078d4' },
                { use: 'DeepSeek', desc: 'Eksplorasi model AI alternatif untuk riset dan eksperimen', icon: '🔍', color: '#22c55e' },
                { use: 'AI Image Tools', desc: 'Generate visual untuk konten digital dan presentasi', icon: '🎨', color: '#e63329' },
              ].map((u, i) => (
                <motion.div key={u.use} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                  className="flex gap-3 items-start p-3 bg-white" style={{ border: `2px solid ${u.color}`, boxShadow: `3px 3px 0 ${u.color}` }}>
                  <span className="text-2xl">{u.icon}</span>
                  <div>
                    <div className="font-bold text-xs text-comic-black">{u.use}</div>
                    <div className="text-[11px] text-comic-black/60">{u.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <PanelGrid items={[
            { icon: '⚡', title: '10x Lebih Cepat', text: 'AI membantu saya menyelesaikan task coding 10x lebih cepat dari biasanya.', color: '#8b5cf6', bg: '#f5f0ff' },
            { icon: '🐛', title: 'Debug Otomatis', text: 'AI mendeteksi bug dan menjelaskan penyebab error dengan detail.', color: '#1a5cff', bg: '#e8f0ff' },
            { icon: '📝', title: 'Dokumentasi', text: 'Generate dokumentasi kode secara otomatis tanpa manual.', color: '#22c55e', bg: '#f0fdf4' },
            { icon: '💡', title: 'Ide Produk', text: 'Brainstorming fitur dan solusi dengan AI sebagai sparring partner.', color: '#f59e0b', bg: '#fffbeb' },
          ]} cols={2} />
          <div className="comic-panel-dark p-4 mt-4 text-center">
            <div className="font-comic text-xl text-comic-yellow">&ldquo;AI tidak menggantikan developer — AI membuat developer yang mau belajar menjadi lebih kuat.&rdquo;</div>
          </div>
        </div>
      </div>
    </PanelKomik>
  )
}

// Ch27
function Ch27() {
  const techStack = [
    { name: 'Laravel', pct: 90, color: '#FF2D20', role: 'Backend Utama' },
    { name: 'Next.js', pct: 78, color: '#000', role: 'Frontend Modern' },
    { name: 'PHP', pct: 88, color: '#777BB4', role: 'Server-side' },
    { name: 'MySQL', pct: 82, color: '#4479A1', role: 'Database' },
    { name: 'Tailwind CSS', pct: 92, color: '#06B6D4', role: 'Styling' },
    { name: 'JavaScript', pct: 80, color: '#F7DF1E', role: 'Frontend Logic' },
    { name: 'TypeScript', pct: 72, color: '#3178C6', role: 'Type-safe Code' },
    { name: 'IoT/Arduino', pct: 75, color: '#00979D', role: 'Hardware' },
  ]
  return (
    <PanelKomik id="ch27" chNum="CHAPTER 27" judul="TECH STACK DEEP DIVE" warna="#1a5cff" latarBelakang="#e8f0ff">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble-right inline-block text-sm mb-4">💻 Setiap teknologi adalah tool — pilih yang tepat!</div>
          <div className="space-y-3">
            {techStack.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }} viewport={{ once: true }}>
                <div className="flex justify-between text-xs font-bold text-comic-black mb-1">
                  <span>{t.name} <span className="text-comic-black/40">— {t.role}</span></span>
                  <span style={{ color: t.color }}>{t.pct}%</span>
                </div>
                <div className="comic-progress">
                  <motion.div className="comic-progress-bar h-full"
                    initial={{ width: 0 }} whileInView={{ width: `${t.pct}%` }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.08 }} viewport={{ once: true }}
                    style={{ background: `repeating-linear-gradient(-45deg,${t.color} 0px,${t.color} 6px,${t.color}88 6px,${t.color}88 12px)` }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <PanelGrid items={[
            { icon: '🏗️', title: 'MVC Architecture', text: 'Memahami dan mengimplementasikan pola arsitektur MVC dengan benar.', color: '#1a5cff', bg: '#e8f0ff' },
            { icon: '🔌', title: 'RESTful API', text: 'Membangun dan mengonsumsi API dengan standar industri.', color: '#22c55e', bg: '#f0fdf4' },
            { icon: '🔒', title: 'Security First', text: 'Implementasi auth, validasi input, dan proteksi dari serangan umum.', color: '#e63329', bg: '#fef2f2' },
            { icon: '📦', title: 'Version Control', text: 'Git workflow yang rapi untuk kolaborasi tim.', color: '#f59e0b', bg: '#fffbeb' },
          ]} cols={2} />
          <div className="comic-panel-yellow p-4 mt-4">
            <div className="font-comic text-base text-comic-black text-center mb-2">🎯 PRINSIP CODING SAYA</div>
            <p className="text-xs text-comic-black text-center leading-relaxed">
              Kode yang bersih, terdokumentasi, dan scalable lebih berharga dari kode yang cepat tapi berantakan.
            </p>
          </div>
        </div>
      </div>
    </PanelKomik>
  )
}

// Ch28
function Ch28() {
  return (
    <PanelKomik id="ch28" chNum="CHAPTER 28" judul="OPEN SOURCE & KONTRIBUSI" warna="#22c55e" latarBelakang="#f0fdf4">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">🔓 Ilmu yang dibagikan adalah ilmu yang berlipat ganda!</div>
          <div className="comic-panel p-5 mb-4">
            <div className="font-comic text-lg text-comic-black mb-3">🌟 MENGAPA OPEN SOURCE?</div>
            <p className="text-sm text-comic-black leading-relaxed mb-3">
              Open source bukan tentang memberikan kode secara gratis — ini tentang membangun ekosistem
              di mana semua orang bisa belajar, berkontribusi, dan menciptakan sesuatu yang lebih besar dari kemampuan satu orang.
            </p>
            <div className="space-y-2">
              {[
                '📖 Belajar dari kode developer lain yang lebih berpengalaman',
                '🤝 Membangun reputasi di komunitas global',
                '💪 Latihan menulis kode yang bersih dan terdokumentasi',
                '🌍 Berkontribusi pada tools yang digunakan jutaan orang',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-xs font-bold text-comic-black">
                  <div className="w-1.5 h-1.5 mt-1.5 flex-shrink-0 bg-comic-blue" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="comic-panel-yellow p-4">
            <div className="font-comic text-base text-comic-black mb-2">📦 RENCANA OPEN SOURCE KVT</div>
            <div className="space-y-1">
              {['Template Website Desa (free)', 'QRIS Donasi Starter Kit', 'Laravel Starter Template', 'IoT Dashboard Boilerplate'].map((item, i) => (
                <div key={i} className="text-xs font-bold text-comic-black flex items-center gap-2">
                  <span className="text-comic-blue">→</span>{item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <PanelGrid items={[
            { icon: '⭐', title: 'GitHub Stars', text: 'Target memiliki repository yang di-star oleh komunitas developer Indonesia.', color: '#22c55e', bg: '#f0fdf4' },
            { icon: '🔀', title: 'Pull Requests', text: 'Aktif berkontribusi ke project open source yang digunakan.', color: '#1a5cff', bg: '#e8f0ff' },
            { icon: '📝', title: 'Dokumentasi', text: 'Menulis README dan dokumentasi yang detail untuk setiap project.', color: '#f59e0b', bg: '#fffbeb' },
            { icon: '🐛', title: 'Issue Tracker', text: 'Melaporkan dan membantu fix bug di project yang digunakan.', color: '#e63329', bg: '#fef2f2' },
          ]} cols={2} />
          <div className="comic-panel-dark p-4 mt-4">
            <div className="font-comic text-xl text-white text-center mb-2">🏆 GITHUB STATS</div>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { num: '5+', label: 'Repositories', color: '#22c55e' },
                { num: '3+', label: 'Years Active', color: '#1a5cff' },
                { num: '∞', label: 'Commits', color: '#f59e0b' },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-comic text-2xl" style={{ color: s.color }}>{s.num}</div>
                  <div className="text-[10px] text-white/60 font-bold">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PanelKomik>
  )
}

// Ch29
function Ch29() {
  return (
    <PanelKomik id="ch29" chNum="CHAPTER 29" judul="KEAMANAN SIBER — BELAJAR ETIKA & PERTAHANAN" warna="#e63329" latarBelakang="#fef2f2">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">🛡️ Keamanan digital adalah hak setiap orang!</div>
          <div className="comic-panel p-5 mb-4">
            <div className="font-comic text-lg text-comic-black mb-3">🔒 APA YANG SAYA PELAJARI</div>
            <div className="space-y-3">
              {[
                { topic: 'OWASP Top 10', desc: 'Memahami 10 kerentanan web paling umum dan cara mencegahnya', icon: '📋', color: '#e63329' },
                { topic: 'SQL Injection', desc: 'Teknik proteksi database dari serangan injeksi berbahaya', icon: '💉', color: '#1a5cff' },
                { topic: 'XSS & CSRF', desc: 'Proteksi form dan session dari serangan cross-site', icon: '🔐', color: '#22c55e' },
                { topic: 'Authentication Security', desc: 'Implementasi auth yang aman dengan JWT dan hash yang kuat', icon: '🔑', color: '#f59e0b' },
                { topic: 'Network Security', desc: 'Pemahaman dasar tentang firewall, VPN, dan protokol aman', icon: '📡', color: '#8b5cf6' },
              ].map((t, i) => (
                <motion.div key={t.topic} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.09 }} viewport={{ once: true }}
                  className="flex gap-3 p-3 bg-white" style={{ border: `2px solid ${t.color}`, boxShadow: `3px 3px 0 ${t.color}` }}>
                  <span className="text-xl">{t.icon}</span>
                  <div>
                    <div className="font-bold text-xs text-comic-black">{t.topic}</div>
                    <div className="text-[11px] text-comic-black/60">{t.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <PanelGrid items={[
            { icon: '🎓', title: 'Sertifikasi', text: 'Ethical Hacker For Dummies & Introduction to Cyber Security dari Digital Talent Scholarship.', color: '#e63329', bg: '#fef2f2' },
            { icon: '🧪', title: 'Lab Virtual', text: 'Praktik langsung di lab virtual Kali Linux untuk uji penetrasi dasar.', color: '#0a0a0a', bg: '#f0f0eb' },
            { icon: '🤝', title: 'Responsible Disclosure', text: 'Prinsip etika: temukan kerentanan, laporkan dengan bertanggung jawab.', color: '#22c55e', bg: '#f0fdf4' },
            { icon: '📱', title: 'Keamanan Pribadi', text: 'Edukasi masyarakat tentang perlindungan akun dan data pribadi digital.', color: '#1a5cff', bg: '#e8f0ff' },
          ]} cols={2} />
          <div className="comic-panel-yellow p-4 mt-4 text-center">
            <div className="font-comic text-base text-comic-black">&ldquo;Dengan ilmu keamanan siber, saya bisa bangun sistem yang lebih kokoh.&rdquo;</div>
          </div>
        </div>
      </div>
    </PanelKomik>
  )
}

// Ch30
function Ch30() {
  return (
    <PanelKomik id="ch30" chNum="CHAPTER 30" judul="CLOUD COMPUTING & DEVOPS" warna="#0078d4" latarBelakang="#e8f2ff">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">☁️ Masa depan infrastruktur ada di awan!</div>
          <div className="space-y-4">
            {[
              { svc: 'Vercel', use: 'Deploy Next.js apps dengan CD otomatis', icon: '▲', color: '#0a0a0a' },
              { svc: 'GitHub Actions', use: 'CI/CD pipeline untuk testing dan deployment', icon: '⚙️', color: '#22c55e' },
              { svc: 'Azure', use: 'Cloud services dan OpenAI integration', icon: '☁️', color: '#0078d4' },
              { svc: 'Laragon', use: 'Local development server yang efisien', icon: '🐘', color: '#f59e0b' },
              { svc: 'Firebase', use: 'Real-time database dan hosting untuk proyek kecil', icon: '🔥', color: '#e63329' },
            ].map((s, i) => (
              <motion.div key={s.svc} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="flex items-center gap-4 p-4 bg-white" style={{ border: `3px solid ${s.color}`, boxShadow: `4px 4px 0 ${s.color}` }}>
                <div className="w-10 h-10 flex items-center justify-center font-bold text-xl flex-shrink-0" style={{ background: s.color, color: 'white' }}>{s.icon}</div>
                <div>
                  <div className="font-comic text-base" style={{ color: s.color }}>{s.svc}</div>
                  <div className="text-xs text-comic-black/70">{s.use}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <PanelGrid items={[
            { icon: '🚀', title: 'Fast Deploy', text: 'Deploy aplikasi dalam hitungan menit, bukan jam.', color: '#0078d4', bg: '#e8f2ff' },
            { icon: '📊', title: 'Auto Scaling', text: 'Infrastruktur yang menyesuaikan beban secara otomatis.', color: '#22c55e', bg: '#f0fdf4' },
            { icon: '💰', title: 'Cost Efficient', text: 'Bayar sesuai pemakaian — tidak perlu server fisik mahal.', color: '#f59e0b', bg: '#fffbeb' },
            { icon: '🔄', title: 'CI/CD Pipeline', text: 'Otomasi testing dan deployment untuk kualitas kode terjaga.', color: '#e63329', bg: '#fef2f2' },
          ]} cols={2} />
          <div className="comic-panel-dark p-4 mt-4">
            <div className="font-comic text-xl text-white text-center mb-2">🎯 HOSTING SAAT INI</div>
            <div className="grid grid-cols-2 gap-2 text-center">
              {[
                { name: 'Portfolio', host: 'Vercel', color: '#0a0a0a' },
                { name: 'KVT.kom', host: 'Coming Soon', color: '#8b5cf6' },
                { name: 'API Services', host: 'Laravel', color: '#FF2D20' },
                { name: 'Dev Local', host: 'Laragon', color: '#f59e0b' },
              ].map(h => (
                <div key={h.name} className="p-2 bg-white/10 border border-white/20">
                  <div className="font-bold text-xs text-white">{h.name}</div>
                  <div className="font-comic text-xs" style={{ color: h.color }}>{h.host}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PanelKomik>
  )
}

// Ch31
function Ch31() {
  return (
    <PanelKomik id="ch31" chNum="CHAPTER 31" judul="DATABASE — SKILL & TOOLS YANG SAYA KUASAI" warna="#4479a1" latarBelakang="#eff6ff">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">🗄️ Data adalah aset terbesar era digital!</div>
          <div className="comic-panel p-5 mb-4">
            <div className="font-comic text-lg text-comic-black mb-3">📊 DATABASE YANG SAYA KUASAI</div>
            <div className="space-y-3">
              {[
                { db: 'MySQL', type: 'Relational', pct: 85, color: '#4479a1' },
                { db: 'PostgreSQL', type: 'Relational+', pct: 65, color: '#336791' },
                { db: 'Firebase', type: 'NoSQL Real-time', pct: 60, color: '#FFCA28' },
                { db: 'SQLite', type: 'Embedded', pct: 75, color: '#003B57' },
              ].map((d, i) => (
                <div key={d.db} className="mb-3">
                  <div className="flex justify-between text-xs font-bold text-comic-black mb-1">
                    <span>{d.db} <span className="text-comic-black/40">({d.type})</span></span>
                    <span style={{ color: d.color }}>{d.pct}%</span>
                  </div>
                  <div className="comic-progress">
                    <motion.div className="h-full" initial={{ width: 0 }} whileInView={{ width: `${d.pct}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }} viewport={{ once: true }}
                      style={{ background: d.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="comic-panel-yellow p-4">
            <div className="font-comic text-sm text-comic-black mb-2">🔧 TOOLS DATABASE</div>
            <div className="flex flex-wrap gap-2">
              {['PGAdmin 4', 'MySQL Workbench', 'phpMyAdmin', 'TablePlus', 'DBeaver'].map(t => (
                <span key={t} className="text-xs font-bold px-2 py-1 bg-white text-comic-black" style={{ border: '2px solid #4479a1' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <PanelGrid items={[
            { icon: '📐', title: 'Database Design', text: 'ERD, normalisasi, dan desain skema yang efisien untuk performa optimal.', color: '#4479a1', bg: '#eff6ff' },
            { icon: '⚡', title: 'Query Optimization', text: 'Index, join yang efisien, dan query yang cepat meski data jutaan baris.', color: '#22c55e', bg: '#f0fdf4' },
            { icon: '🔄', title: 'Migration & Seeder', text: 'Manajemen perubahan skema database dengan Laravel migration.', color: '#f59e0b', bg: '#fffbeb' },
            { icon: '💾', title: 'Backup Strategy', text: 'Otomasi backup berkala untuk keamanan data production.', color: '#e63329', bg: '#fef2f2' },
          ]} cols={2} />
        </div>
      </div>
    </PanelKomik>
  )
}

// Ch32
function Ch32() {
  return (
    <PanelKomik id="ch32" chNum="CHAPTER 32" judul="UI/UX DESIGN THINKING" warna="#ec4899" latarBelakang="#fdf2f8">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">🎨 Desain bukan tentang cantik — tentang fungsi!</div>
          <div className="space-y-4">
            {[
              { principle: 'User-Centered', desc: 'Setiap keputusan desain selalu dimulai dari kebutuhan pengguna nyata.', icon: '👤', color: '#ec4899' },
              { principle: 'Clarity First', desc: 'Antarmuka yang jelas mengalahkan antarmuka yang mewah tapi membingungkan.', icon: '✨', color: '#8b5cf6' },
              { principle: 'Accessibility', desc: 'Desain harus bisa digunakan oleh semua orang, termasuk penyandang disabilitas.', icon: '♿', color: '#22c55e' },
              { principle: 'Responsive Design', desc: 'Tampilan sempurna di semua ukuran layar — dari HP hingga monitor besar.', icon: '📱', color: '#1a5cff' },
              { principle: 'Consistent System', desc: 'Design system yang konsisten mempercepat pengembangan dan meningkatkan UX.', icon: '🔗', color: '#f59e0b' },
            ].map((p, i) => (
              <motion.div key={p.principle} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.09 }} viewport={{ once: true }}
                whileHover={{ x: 5 }}
                className="flex gap-3 p-3 bg-white" style={{ border: `2px solid ${p.color}`, boxShadow: `3px 3px 0 ${p.color}` }}>
                <span className="text-2xl flex-shrink-0">{p.icon}</span>
                <div>
                  <div className="font-bold text-sm text-comic-black">{p.principle}</div>
                  <div className="text-xs text-comic-black/60 mt-0.5">{p.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <PanelGrid items={[
            { icon: '✏️', title: 'Figma', text: 'Design tool utama untuk wireframe, prototype, dan design system.', color: '#ec4899', bg: '#fdf2f8' },
            { icon: '📐', title: 'Wireframing', text: 'Sketsa struktur halaman sebelum masuk ke coding.', color: '#8b5cf6', bg: '#f5f0ff' },
            { icon: '🎭', title: 'Prototyping', text: 'Prototype interaktif untuk uji usability sebelum develop.', color: '#1a5cff', bg: '#e8f0ff' },
            { icon: '🌈', title: 'Color Theory', text: 'Pemilihan palet warna yang harmonis dan konsisten di seluruh produk.', color: '#f59e0b', bg: '#fffbeb' },
          ]} cols={2} />
          <div className="comic-panel-dark p-4 mt-4 text-center">
            <div className="font-comic text-xl text-comic-yellow">&ldquo;Good design is invisible. Bad design is everywhere.&rdquo;</div>
          </div>
        </div>
      </div>
    </PanelKomik>
  )
}

// Ch33
function Ch33() {
  const topics = [
    { title: 'Large Language Models', desc: 'GPT, Gemini, Claude — cara kerjanya dan cara mengintegrasikannya ke aplikasi.', icon: '🧠', color: '#8b5cf6' },
    { title: 'Machine Learning Basics', desc: 'Supervised vs unsupervised learning, training data, dan evaluasi model.', icon: '📊', color: '#1a5cff' },
    { title: 'Computer Vision', desc: 'Image recognition, object detection untuk aplikasi monitoring dan keamanan.', icon: '👁️', color: '#22c55e' },
    { title: 'NLP (Natural Language)', desc: 'Pemrosesan bahasa alami untuk chatbot dan analisis sentimen.', icon: '💬', color: '#f59e0b' },
    { title: 'AI for Education', desc: 'Personalisasi pembelajaran dan assessment otomatis dengan AI.', icon: '🎓', color: '#ec4899' },
    { title: 'Generative AI', desc: 'Membuat konten, kode, dan desain dengan model generatif.', icon: '✨', color: '#e63329' },
  ]
  return (
    <PanelKomik id="ch33" chNum="CHAPTER 33" judul="MENDALAMI ARTIFICIAL INTELLIGENCE" warna="#8b5cf6" latarBelakang="#f5f0ff">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">🤖 AI adalah alat, bukan sihir — pelajari cara kerjanya!</div>
          <PanelGrid items={topics.map(t => ({ icon: t.icon, title: t.title, text: t.desc, color: t.color, bg: 'white' }))} cols={2} />
        </div>
        <div>
          <div className="comic-panel-dark p-6 mb-4">
            <div className="font-comic text-xl text-white mb-4">📚 SERTIFIKAT AI YANG DIRAIH</div>
            <div className="space-y-2">
              {[
                'AI Engineer For Milenial — DTS 2025',
                'Generative AI untuk Pendidikan — DTS 2025',
                'Dasar-Dasar Implementasi AI — DTS 2025',
                'Azure OpenAI Prompt Engineering — Microsoft',
                'Dasar-dasar Keamanan AI — DTS 2025',
                'Memahami Aspek Pengembangan Produk AI',
                'Menskalakan AI di Organisasi — DTS 2025',
                'Image Recognition & Speech Recognition',
              ].map((cert, i) => (
                <div key={cert} className="flex items-start gap-2 text-xs text-white font-bold">
                  <span className="text-comic-yellow flex-shrink-0">✓</span> {cert}
                </div>
              ))}
            </div>
          </div>
          <div className="comic-panel-yellow p-4 text-center">
            <div className="font-comic text-base text-comic-black">🎯 RENCANA INTEGRASI AI</div>
            <p className="text-xs text-comic-black/70 mt-2">Mengintegrasikan AI ke platform KVT.kom untuk personalisasi pembelajaran dan QRIS donasi untuk fraud detection.</p>
          </div>
        </div>
      </div>
    </PanelKomik>
  )
}

// Ch34
function Ch34() {
  return (
    <PanelKomik id="ch34" chNum="CHAPTER 34" judul="INTERNET OF THINGS — DUNIA FISIK DIGITAL" warna="#00979D" latarBelakang="#f0fffe">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">📡 Ketika dunia fisik dan digital menyatu!</div>
          <div className="comic-panel p-5 mb-4">
            <div className="font-comic text-lg text-comic-black mb-3">🔌 PERANGKAT YANG PERNAH SAYA GUNAKAN</div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { device: 'Arduino Uno', icon: '🎛️', color: '#00979D' },
                { device: 'ESP8266', icon: '📡', color: '#1a5cff' },
                { device: 'ESP32', icon: '💡', color: '#22c55e' },
                { device: 'DHT11/22', icon: '🌡️', color: '#f59e0b' },
                { device: 'Ultrasonic', icon: '📏', color: '#e63329' },
                { device: 'IR Sensor', icon: '👁️', color: '#8b5cf6' },
                { device: 'Servo Motor', icon: '⚙️', color: '#0891b2' },
                { device: 'LED Matrix', icon: '💫', color: '#ec4899' },
              ].map((d, i) => (
                <div key={d.device} className="flex items-center gap-2 p-2 bg-white" style={{ border: `2px solid ${d.color}` }}>
                  <span className="text-lg">{d.icon}</span>
                  <span className="text-xs font-bold text-comic-black">{d.device}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <PanelGrid items={[
            { icon: '🌡️', title: 'Sensor Suhu', text: 'Monitoring suhu dan kelembaban ruangan secara real-time via web dashboard.', color: '#00979D', bg: '#f0fffe' },
            { icon: '🔒', title: 'Smart Lock', text: 'Sistem kunci pintu digital berbasis RFID dan WiFi dengan notifikasi HP.', color: '#1a5cff', bg: '#e8f0ff' },
            { icon: '💧', title: 'Water Monitor', text: 'Deteksi kebocoran air dan monitoring kualitas air dengan sensor.', color: '#0891b2', bg: '#ecfeff' },
            { icon: '🌱', title: 'Plant Care', text: 'Sistem penyiraman tanaman otomatis berdasarkan kelembaban tanah.', color: '#22c55e', bg: '#f0fdf4' },
          ]} cols={2} />
          <div className="comic-panel-yellow p-4 mt-4 text-center">
            <div className="font-comic text-base text-comic-black">🏆 PROYEK IOT TERBAIK</div>
            <p className="text-xs text-comic-black/70 mt-1">Alat monitoring suhu ruangan dari komponen bekas ESP8266 + DHT22 + dashboard web Laravel — hemat 80% dari produk komersial!</p>
          </div>
        </div>
      </div>
    </PanelKomik>
  )
}

// Ch35
function Ch35() {
  return (
    <PanelKomik id="ch35" chNum="CHAPTER 35" judul="DIGITAL MARKETING & BRANDING" warna="#ec4899" latarBelakang="#fdf2f8">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="speech-bubble inline-block text-sm mb-4">📣 Produk bagus yang tidak dikenal = tidak ada!</div>
          <div className="space-y-3">
            {[
              { skill: 'Content Strategy', desc: 'Merencanakan konten yang relevan dan konsisten untuk brand digital', icon: '📋', color: '#ec4899' },
              { skill: 'Social Media Management', desc: 'Mengelola akun social media untuk engagement dan awareness', icon: '📱', color: '#1a5cff' },
              { skill: 'SEO Basics', desc: 'Optimasi website agar mudah ditemukan di mesin pencari', icon: '🔍', color: '#22c55e' },
              { skill: 'Copywriting AI', desc: 'Menulis konten persuasif dengan bantuan AI tools', icon: '✍️', color: '#f59e0b' },
              { skill: 'Visual Branding', desc: 'Desain identitas visual yang konsisten dan memorable', icon: '🎨', color: '#8b5cf6' },
            ].map((s, i) => (
              <motion.div key={s.skill} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.09 }} viewport={{ once: true }}
                className="flex gap-3 p-3 bg-white" style={{ border: `2px solid ${s.color}`, boxShadow: `3px 3px 0 ${s.color}` }}>
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <div className="font-bold text-xs text-comic-black">{s.skill}</div>
                  <div className="text-[11px] text-comic-black/60">{s.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <PanelGrid items={[
            { icon: '🌐', title: 'Personal Branding', text: 'Membangun identitas online yang kuat sebagai developer dan inovator.', color: '#ec4899', bg: '#fdf2f8' },
            { icon: '📊', title: 'Analytics', text: 'Menggunakan data untuk memahami audiens dan optimasi konten.', color: '#1a5cff', bg: '#e8f0ff' },
            { icon: '🎬', title: 'Video Content', text: 'Membuat konten video edukasi tentang teknologi dan coding.', color: '#e63329', bg: '#fef2f2' },
            { icon: '✍️', title: 'Blog & Writing', text: 'Dokumentasi proyek dan berbagi pengalaman melalui tulisan.', color: '#22c55e', bg: '#f0fdf4' },
          ]} cols={2} />
          <div className="comic-panel-dark p-4 mt-4 text-center">
            <div className="font-comic text-xl text-comic-yellow mb-2">📈 SERTIFIKAT MARKETING</div>
            <div className="text-xs text-white/70">15+ Sertifikat Digital Marketing dari Digital Talent Scholarship — Social Media, SEO, Content Strategy, CRM, dan lainnya.</div>
          </div>
        </div>
      </div>
    </PanelKomik>
  )
}

export default function ChaptersGroup2() {
  return (
    <>
      <div className="comic-divider" /><Ch26 />
      <div className="comic-divider" /><Ch27 />
      <div className="comic-divider" /><Ch28 />
      <div className="comic-divider" /><Ch29 />
      <div className="comic-divider" /><Ch30 />
      <div className="comic-divider" /><Ch31 />
      <div className="comic-divider" /><Ch32 />
      <div className="comic-divider" /><Ch33 />
      <div className="comic-divider" /><Ch34 />
      <div className="comic-divider" /><Ch35 />
    </>
  )
}
