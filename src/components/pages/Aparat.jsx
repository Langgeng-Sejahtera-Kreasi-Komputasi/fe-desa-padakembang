import React from 'react'
import { Helmet } from 'react-helmet-async'

const aparat = [
  {
    name: 'Jenal Muttaqin',
    jabatan: 'Kepala Desa',
    photo: '/Images/kepala-desa.jpg', 
  },
  {
    name: 'Dedi Mulyadi',
    jabatan: 'Sekretaris Desa',
    photo: '/Images/wakil-desa.jpg'
  },
  {
    name: 'Prabowo Subianto',
    jabatan: 'Kasi Pemerintahan',
    photo: '/Images/sekretaris.jpg'
  },
  {
    name: 'Teddy Indra',
    jabatan: 'Kaur Keuangan / Bendahara',
    photo: '/Images/bendahara.jpg'
  },
  {
    name: 'Agus Salim',
    jabatan: 'Kasi Kesejahteraan',
    photo: '/Images/kasi-pemerintahan.jpg'
  },
  {
    name: 'Suhendar',
    jabatan: 'Kasi Pelayanan',
    photo: '/Images/kasi-kesejahteraan.jpg'
  },
  {
    name: 'Anies Rasyid',
    jabatan: 'Kaur Perencanaan',
    photo: '/Images/staff.jpg'
  },
  {
    name: 'Ganjar Pranowo',
    jabatan: 'Kaur Umum & Tata Usaha',
    photo: '/Images/Staffdesa.jpg'
  }
]

const Aparat = () => {
  return (
    <section style={{
      padding: '80px 0',
      background: '#F8FAFC',
      minHeight: '100vh',
      color: '#334155'
    }} id="aparat">
      <Helmet>
        <title>Aparatur Pemerintah Desa | Desa Padakembang</title>
        <meta name="description" content="Struktur organisasi dan susunan pamong desa, perangkat desa, serta jajaran aparatur Pemerintah Desa Padakembang." />
        <meta name="keywords" content="Aparatur Desa Padakembang, Kepala Desa Padakembang, Pamong Desa Padakembang, Perangkat Desa" />
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
            Struktur Organisasi
          </span>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            color: '#0F172A',
            marginBottom: '10px',
            letterSpacing: '-0.02em'
          }}>
            Aparatur <span style={{ color: '#272FA2' }}>Pemerintah Desa</span>
          </h1>
          <p style={{
            fontSize: '1.05rem',
            color: '#64748B',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Pamong dan perangkat desa yang berdedikasi melayani seluruh kebutuhan masyarakat Desa Padakembang.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px'
        }}>
          {aparat.map((person, index) => (
            <div key={index} style={{
              textAlign: 'center',
              background: '#FFFFFF',
              padding: '32px 20px',
              borderRadius: '18px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)',
              transition: 'all 0.25s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = '#CDCEEA';
              e.currentTarget.style.boxShadow = '0 12px 28px -4px rgba(39, 47, 162, 0.08)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#E2E8F0';
              e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.04)';
            }}
            >
              <div style={{
                width: '88px',
                height: '88px',
                borderRadius: '50%',
                background: 'rgba(39, 47, 162, 0.08)',
                color: '#272FA2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.8rem',
                fontWeight: 700,
                margin: '0 auto 16px',
                border: '2px solid rgba(205, 206, 234, 0.8)'
              }}>
                {person.name.charAt(0)}
              </div>
              <h4 style={{ color: '#0F172A', marginBottom: '4px', fontSize: '1.1rem', fontWeight: 700 }}>
                {person.name}
              </h4>
              <p style={{
                color: '#64748B',
                fontWeight: 500,
                fontSize: '0.85rem'
              }}>
                {person.jabatan}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Aparat