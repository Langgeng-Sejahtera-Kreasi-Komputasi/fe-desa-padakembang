import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const layananData = [
  { title: 'Surat Keterangan', desc: 'Surat domisili, izin usaha, kelahiran, dan keterangan umum', link: '/layanan/form', badge: 'Administrasi' },
  { title: 'Bantuan Sosial', desc: 'Pendaftaran dan pengecekan bansos BLT, PKH, dan bantuan pangan', link: '/layanan/form', badge: 'Kesejahteraan' },
  { title: 'Layanan Posyandu', desc: 'Jadwal kesehatan ibu, anak, lansia, dan balita terintegrasi', link: '/layanan/form', badge: 'Kesehatan' },
  { title: 'Pengaduan Warga', desc: 'Aspirasi dan laporan infrastruktur, lingkungan, dan pelayanan publik', link: '/layanan/form', badge: 'Responsif' },
  { title: 'Legalitas UMKM', desc: 'Fasilitasi Nomor Induk Berusaha (NIB) dan sertifikasi halal desa', link: '/layanan/form', badge: 'Ekonomi' },
  { title: 'Program Energi Mandiri', desc: 'Pendaftaran sambungan PLTS komunal dan instalasi biogas desa', link: '/layanan/form', badge: 'Energi Terbarukan' }
]

const Layanan = () => {
  return (
    <section style={{
      padding: '80px 0',
      background: '#F8FAFC',
      minHeight: '100vh',
      color: '#334155'
    }}>
      <Helmet>
        <title>Layanan Publik Digital | Desa Padakembang</title>
        <meta name="description" content="Akses layanan administrasi surat desa, pendaftaran bansos, jadwal posyandu, perizinan UMKM, dan pengaduan masyarakat secara online." />
        <meta name="keywords" content="Layanan Desa Padakembang, Surat Online Desa, Bantuan Sosial Desa, Pengaduan Warga Padakembang" />
      </Helmet>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(39, 47, 162, 0.08)',
            color: '#272FA2',
            fontSize: '0.82rem',
            fontWeight: 600,
            padding: '4px 14px',
            borderRadius: '9999px',
            marginBottom: '12px',
            border: '1px solid rgba(39, 47, 162, 0.2)'
          }}>
            Pelayanan Publik Terpadu
          </span>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            color: '#0F172A',
            marginBottom: '10px',
            letterSpacing: '-0.02em'
          }}>
            Portal <span style={{ color: '#272FA2' }}>Layanan Mandiri</span>
          </h1>
          <p style={{
            fontSize: '1.05rem',
            color: '#64748B',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Akses administrasi dan layanan publik Desa Padakembang secara praktis, cepat, dan transparan dari mana saja.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {layananData.map((item, i) => (
            <div key={i} style={{
              background: '#FFFFFF',
              borderRadius: '18px',
              padding: '32px 28px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)',
              transition: 'all 0.25s ease',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.borderColor = '#CDCEEA'
              e.currentTarget.style.boxShadow = '0 12px 28px -4px rgba(39, 47, 162, 0.08)'
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = '#E2E8F0'
              e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.04)'
            }}
            >
              <span style={{
                display: 'inline-block',
                background: 'rgba(39, 47, 162, 0.06)',
                color: '#272FA2',
                padding: '4px 12px',
                borderRadius: '9999px',
                fontWeight: 600,
                fontSize: '0.78rem',
                marginBottom: '16px',
                alignSelf: 'flex-start',
                border: '1px solid rgba(39, 47, 162, 0.15)'
              }}>
                {item.badge}
              </span>

              <h3 style={{
                color: '#0F172A',
                fontSize: '1.25rem',
                fontWeight: 700,
                marginBottom: '8px',
                letterSpacing: '-0.01em'
              }}>
                {item.title}
              </h3>

              <p style={{
                fontSize: '0.92rem',
                color: '#475569',
                lineHeight: 1.6,
                marginBottom: '24px',
                flex: 1
              }}>
                {item.desc}
              </p>

              <Link to={item.link} className="btn btn-primary" style={{
                textAlign: 'center',
                fontSize: '0.88rem',
                padding: '10px 20px'
              }}>
                Ajukan Sekarang →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Layanan