import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Rizki Habibi — Web Developer & AI Creator'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0a0a0a',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid dots background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle, #ffffff08 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Accent bar kiri */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '8px',
            height: '100%',
            background: 'linear-gradient(180deg, #1a5cff, #ffd700, #22c55e)',
          }}
        />

        {/* TOP — label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              background: '#1a5cff',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 900,
              padding: '6px 16px',
              letterSpacing: '4px',
              border: '2px solid #fff',
            }}
          >
            PORTOFOLIO
          </div>
          <div
            style={{
              background: '#ffd700',
              color: '#0a0a0a',
              fontSize: '14px',
              fontWeight: 900,
              padding: '6px 16px',
              letterSpacing: '4px',
            }}
          >
            WEB DEV · AI CREATOR
          </div>
        </div>

        {/* CENTER — nama besar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div
            style={{
              fontSize: '88px',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1,
              letterSpacing: '-2px',
            }}
          >
            Rizki Habibi
          </div>
          <div
            style={{
              fontSize: '24px',
              color: '#ffffff99',
              fontWeight: 700,
              letterSpacing: '2px',
            }}
          >
            Web Developer · AI Creator · Pengembang Camora AI · VTuber Indonesia
          </div>

          {/* Tag stack */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
            {['Next.js', 'TypeScript', 'Laravel', 'AI / ML', 'Camora AI'].map(tag => (
              <div
                key={tag}
                style={{
                  background: '#ffffff0f',
                  border: '1px solid #ffffff22',
                  color: '#ffffffcc',
                  fontSize: '14px',
                  fontWeight: 700,
                  padding: '4px 14px',
                  letterSpacing: '1px',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM — info + URL */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #ffffff15',
            paddingTop: '24px',
          }}
        >
          {/* Status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#22c55e',
              }}
            />
            <span style={{ color: '#22c55e', fontSize: '16px', fontWeight: 700 }}>
              OPEN FOR FREELANCE & KOLABORASI
            </span>
          </div>

          {/* URL */}
          <div
            style={{
              color: '#ffd700',
              fontSize: '18px',
              fontWeight: 900,
              letterSpacing: '1px',
            }}
          >
            rizki-habibi-portofolio.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
