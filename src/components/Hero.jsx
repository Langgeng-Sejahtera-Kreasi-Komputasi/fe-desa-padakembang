import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section style={{
      backgroundImage: 'url("/Images/images (8).jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      padding: '100px 0 80px',
      position: 'relative',
      overflow: 'hidden',
    }} id="tentang">
      
      {/* Sleek Gradient Overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.88) 0%, rgba(39, 47, 162, 0.75) 100%)',
        zIndex: 1
      }}></div>

      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '48px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        <div>

          <h1 style={{
            fontSize: '3.4rem',
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1.15,
            marginBottom: '18px',
            letterSpacing: '-0.03em'
          }}>
            Desa Energi Mandiri <br />
            <span style={{
              color: '#CDCEEA',
              fontWeight: 700
            }}>Padakembang</span>
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: 'rgba(241, 245, 249, 0.88)',
            marginBottom: '32px',
            maxWidth: '520px',
            lineHeight: 1.6,
            fontWeight: 400
          }}>
            Mewujudkan kemandirian energi dan pelayanan publik digital yang cepat, transparan, dan terintegrasi bagi seluruh warga.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/layanan" className="btn btn-primary" style={{
              backgroundColor: '#FFFFFF',
              color: '#272FA2',
              fontWeight: 700,
              padding: '13px 30px'
            }}>
              Jelajahi Layanan
            </Link>
            <Link to="/energi" className="btn" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(205, 206, 234, 0.35)',
              color: '#FFFFFF',
              fontWeight: 600,
              padding: '13px 26px'
            }}>
              Program Energi
            </Link>
          </div>
        </div>

        {/* Minimalist Stats Glass Box */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          padding: '32px 24px',
          borderRadius: '24px',
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(205, 206, 234, 0.25)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.02em'
            }}>501<span style={{ color: '#53AA4B' }}>+</span></div>
            <div style={{ fontSize: '0.82rem', color: '#CDCEEA', fontWeight: 500, marginTop: '2px' }}>Penduduk</div>
          </div>
          <div style={{ textAlign: 'center', borderLeft: '1px solid rgba(205, 206, 234, 0.15)', borderRight: '1px solid rgba(205, 206, 234, 0.15)' }}>
            <div style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.02em'
            }}>30<span style={{ color: '#53AA4B' }}>+</span></div>
            <div style={{ fontSize: '0.82rem', color: '#CDCEEA', fontWeight: 500, marginTop: '2px' }}>UMKM Aktif</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.02em'
            }}>98<span style={{ color: '#53AA4B' }}>%</span></div>
            <div style={{ fontSize: '0.82rem', color: '#CDCEEA', fontWeight: 500, marginTop: '2px' }}>Akses Energi</div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .container { grid-template-columns: 1fr !important; gap: 36px; }
        }
        @media (max-width: 768px) {
          h1 { font-size: 2.4rem !important; }
        }
        @media (max-width: 480px) {
          h1 { font-size: 2rem !important; }
        }
      `}</style>
    </section>
  )
}

export default Hero