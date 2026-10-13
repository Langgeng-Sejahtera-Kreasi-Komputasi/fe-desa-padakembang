import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={{
      background: '#0F172A',
      color: '#94A3B8',
      padding: '60px 0 32px',
      borderTop: '1px solid rgba(205, 206, 234, 0.15)'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        gap: '48px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
              Desa Digital <span style={{ color: '#CDCEEA' }}>Padakembang</span>
            </span>
          </div>
          <p style={{ marginBottom: '16px', color: '#94A3B8', fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '400px' }}>
            Kecamatan Padakembang, Kabupaten Tasikmalaya, Jawa Barat. Menuju kemandirian energi dan transformasi pelayanan digital.
          </p>
          <div style={{ fontSize: '0.88rem', color: '#CBD5E1', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <span>(0265) 123-4567</span>
            <span>desa@padakembang.id</span>
          </div>
        </div>

        <div>
          <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.02em' }}>
            Navigasi
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
            <Link to="/" style={{ color: '#94A3B8' }} onMouseOver={e => e.target.style.color = '#FFFFFF'} onMouseOut={e => e.target.style.color = '#94A3B8'}>Beranda</Link>
            <Link to="/energi" style={{ color: '#94A3B8' }} onMouseOver={e => e.target.style.color = '#FFFFFF'} onMouseOut={e => e.target.style.color = '#94A3B8'}>Program Energi</Link>
            <Link to="/berita" style={{ color: '#94A3B8' }} onMouseOver={e => e.target.style.color = '#FFFFFF'} onMouseOut={e => e.target.style.color = '#94A3B8'}>Berita & Informasi</Link>
            <Link to="/layanan" style={{ color: '#94A3B8' }} onMouseOver={e => e.target.style.color = '#FFFFFF'} onMouseOut={e => e.target.style.color = '#94A3B8'}>Layanan Publik</Link>
            <Link to="/peta" style={{ color: '#94A3B8' }} onMouseOver={e => e.target.style.color = '#FFFFFF'} onMouseOut={e => e.target.style.color = '#94A3B8'}>Peta Wilayah</Link>
          </div>
        </div>

        <div>
          <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.02em' }}>
            Layanan
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
            <Link to="/layanan/form" style={{ color: '#94A3B8' }} onMouseOver={e => e.target.style.color = '#FFFFFF'} onMouseOut={e => e.target.style.color = '#94A3B8'}>Surat Keterangan</Link>
            <Link to="/layanan/form" style={{ color: '#94A3B8' }} onMouseOver={e => e.target.style.color = '#FFFFFF'} onMouseOut={e => e.target.style.color = '#94A3B8'}>Bantuan Sosial</Link>
            <Link to="/layanan/form" style={{ color: '#94A3B8' }} onMouseOver={e => e.target.style.color = '#FFFFFF'} onMouseOut={e => e.target.style.color = '#94A3B8'}>Pengaduan Warga</Link>
            <Link to="/umkm" style={{ color: '#94A3B8' }} onMouseOver={e => e.target.style.color = '#FFFFFF'} onMouseOut={e => e.target.style.color = '#94A3B8'}>Pemberdayaan UMKM</Link>
          </div>
        </div>

        <div style={{
          gridColumn: '1 / -1',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.85rem',
          color: '#64748B'
        }}>
          <div>&copy; 2026 Pemerintah Desa Padakembang. Hak Cipta Dilindungi.</div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a 
              href="https://kawaldesa.smartsystem.id/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#64748B', textDecoration: 'none' }} 
              onMouseOver={e => e.target.style.color = '#CDCEEA'} 
              onMouseOut={e => e.target.style.color = '#64748B'}
            >
              Login Admin
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .container {
            grid-template-columns: 1fr !important;
            gap: 32px;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer