import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const programs = [
  {
    title: 'Panel Surya (PLTS)',
    desc: 'Pembangkit listrik tenaga surya dengan kapasitas 85 kWp yang melayani lebih dari 300 rumah tangga secara mandiri dan ramah lingkungan.',
    specs: ['Kapasitas: 85 kWp', 'Rumah Terlayani: 300+ KK', 'Penghematan: Rp 500.000/bln'],
    badge: 'Energi Terbarukan'
  },
  {
    title: 'Kincir Angin Mikro',
    desc: 'Pemanfaatan tenaga angin untuk pompa air irigasi lahan pertanian dan pasokan listrik mikro di kawasan persawahan desa.',
    specs: ['Jumlah: 10 Unit', 'Cakupan Irigasi: 50 Hektar', 'Penerima Manfaat: 100+ Petani'],
    badge: 'Ramah Lingkungan'
  },
  {
    title: 'Biogas Komunal',
    desc: 'Pengolahan limbah peternakan terintegrasi menjadi sumber gas alternatif untuk memasak dan penerangan rumah tangga.',
    specs: ['Rumah Tangga: 50+ KK', 'Kapasitas Reaktor: 200+ Ternak', 'Penghematan: Rp 200.000/bln'],
    badge: 'Ekonomi Sirkular'
  },
  {
    title: 'Efisiensi Energi Cerdas',
    desc: 'Program modernisasi lampu penerangan jalan umum LED hemat energi dan sistem monitoring konsumsi daya real-time.',
    specs: ['PJU LED: 1.000+ Titik', 'Edukasi Warga: Seluruh Dusun', 'Efisiensi Daya: 40%'],
    badge: 'Efisiensi Daya'
  }
]

const Energi = () => {
  return (
    <section style={{
      padding: '80px 0',
      background: '#F8FAFC',
      minHeight: '100vh',
      color: '#334155'
    }}>
      <Helmet>
        <title>Program Energi Mandiri | Desa Padakembang</title>
        <meta name="description" content="Inisiatif Energi Baru Terbarukan (EBT) Desa Padakembang: PLTS komunal 85 kWp, kincir angin irigasi, biogas limbah ternak, dan efisiensi energi cerdas." />
        <meta name="keywords" content="Desa Energi Mandiri, PLTS Desa Padakembang, EBT Desa, Biogas Desa, Kincir Angin Irigasi" />
      </Helmet>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(83, 170, 75, 0.12)',
            color: '#3F8638',
            fontSize: '0.82rem',
            fontWeight: 600,
            padding: '4px 14px',
            borderRadius: '9999px',
            marginBottom: '12px',
            border: '1px solid rgba(83, 170, 75, 0.3)'
          }}>
            Desa Energi Mandiri
          </span>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            color: '#0F172A',
            marginBottom: '10px',
            letterSpacing: '-0.02em'
          }}>
            Program <span style={{ color: '#272FA2' }}>Energi Terbarukan</span>
          </h1>
          <p style={{
            fontSize: '1.05rem',
            color: '#64748B',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Optimalisasi sumber daya alam terbarukan demi mewujudkan ketahanan dan kemandirian energi berbasis komunitas lokal.
          </p>
        </div>

        {/* Programs Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          {programs.map((program, index) => (
            <div key={index} style={{
              background: '#FFFFFF',
              padding: '32px 28px',
              borderRadius: '18px',
              border: '1px solid #E2E8F0',
              transition: 'all 0.25s ease',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)',
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
              <div style={{
                display: 'inline-block',
                background: 'rgba(83, 170, 75, 0.1)',
                color: '#3F8638',
                padding: '4px 12px',
                borderRadius: '9999px',
                fontWeight: 600,
                fontSize: '0.78rem',
                marginBottom: '16px',
                alignSelf: 'flex-start',
                border: '1px solid rgba(83, 170, 75, 0.25)'
              }}>
                {program.badge}
              </div>

              <h3 style={{
                color: '#0F172A',
                fontSize: '1.25rem',
                fontWeight: 700,
                marginBottom: '10px',
                letterSpacing: '-0.01em'
              }}>
                {program.title}
              </h3>

              <p style={{
                color: '#475569',
                fontSize: '0.92rem',
                lineHeight: 1.6,
                marginBottom: '20px',
                flex: 1
              }}>
                {program.desc}
              </p>
              
              <div style={{
                background: '#F8FAFC',
                padding: '14px 16px',
                borderRadius: '12px',
                border: '1px solid #F1F5F9',
                marginBottom: '20px'
              }}>
                {program.specs.map((spec, i) => (
                  <div key={i} style={{
                    color: '#334155',
                    fontSize: '0.85rem',
                    padding: '4px 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    borderBottom: i < program.specs.length - 1 ? '1px solid #E2E8F0' : 'none'
                  }}>
                    <span style={{ color: '#53AA4B', fontWeight: 'bold' }}>✓</span>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <Link to="/layanan/form" className="btn btn-primary" style={{
                width: '100%',
                fontSize: '0.88rem',
                padding: '10px'
              }}>
                Daftar Program Ini
              </Link>
            </div>
          ))}
        </div>

        {/* Clean Stats Overview */}
        <div style={{
          background: '#FFFFFF',
          padding: '40px 32px',
          borderRadius: '20px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#272FA2', letterSpacing: '-0.02em' }}>85 kWp</div>
            <div style={{ color: '#64748B', fontSize: '0.88rem', fontWeight: 500, marginTop: '4px' }}>PLTS Terpasang</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#53AA4B', letterSpacing: '-0.02em' }}>50+</div>
            <div style={{ color: '#64748B', fontSize: '0.88rem', fontWeight: 500, marginTop: '4px' }}>Unit Biogas Komunal</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#272FA2', letterSpacing: '-0.02em' }}>98%</div>
            <div style={{ color: '#64748B', fontSize: '0.88rem', fontWeight: 500, marginTop: '4px' }}>Elektrifikasi Mandiri</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#53AA4B', letterSpacing: '-0.02em' }}>Rp 500 Jt+</div>
            <div style={{ color: '#64748B', fontSize: '0.88rem', fontWeight: 500, marginTop: '4px' }}>Estimasi Hemat / Tahun</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Energi