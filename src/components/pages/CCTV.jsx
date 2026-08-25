import React from 'react'
import { Helmet } from 'react-helmet-async'

const cctvData = [
  { name: 'Gerbang Utama Desa', status: 'Online', time: '13:50:20', ip: 'CAM-01' },
  { name: 'Jalan Poros Utama', status: 'Online', time: '13:50:20', ip: 'CAM-02' },
  { name: 'Lapangan & Balai Desa', status: 'Online', time: '13:50:20', ip: 'CAM-03' },
  { name: 'Sentra UMKM & Pasar', status: 'Online', time: '13:50:20', ip: 'CAM-04' },
  { name: 'Simpang Tiga Cikadu', status: 'Online', time: '13:50:20', ip: 'CAM-05' },
  { name: 'Kawasan PLTS Padamenak', status: 'Maintenance', time: '--:--:--', ip: 'CAM-06' }
]

const CCTV = () => {
  return (
    <section style={{
      padding: '80px 0',
      background: '#F8FAFC',
      minHeight: '100vh',
      color: '#334155'
    }}>
      <Helmet>
        <title>Monitoring CCTV Publik | Desa Padakembang</title>
        <meta name="description" content="Sistem monitoring pengawasan CCTV real-time di titik strategis dan fasilitas umum Desa Padakembang untuk menjaga keamanan bersama." />
        <meta name="keywords" content="CCTV Desa Padakembang, Monitoring Keamanan Desa, CCTV Real-time Desa" />
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
            Monitoring Keamanan
          </span>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            color: '#0F172A',
            marginBottom: '10px',
            letterSpacing: '-0.02em'
          }}>
            CCTV <span style={{ color: '#272FA2' }}>Pemantauan Publik</span>
          </h1>
          <p style={{
            fontSize: '1.05rem',
            color: '#64748B',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Sistem pengawasan titik strategis untuk menjaga ketertiban, keamanan, dan kelancaran mobilitas warga Desa Padakembang.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {cctvData.map((cam, index) => (
            <div key={index} style={{
              background: '#FFFFFF',
              borderRadius: '18px',
              overflow: 'hidden',
              border: '1px solid #E2E8F0',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)',
              transition: 'all 0.25s ease'
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
              {/* Screen Viewport */}
              <div style={{
                height: '190px',
                background: '#0B132B',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '14px',
                  right: '14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    color: cam.status === 'Online' ? '#53AA4B' : '#E11D48',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: cam.status === 'Online' ? '#53AA4B' : '#E11D48'
                    }}></span>
                    {cam.status === 'Online' ? 'LIVE' : 'MAINTENANCE'}
                  </span>
                  <span style={{
                    color: '#94A3B8',
                    fontFamily: 'monospace',
                    fontSize: '0.75rem'
                  }}>{cam.ip}</span>
                </div>

                <div style={{
                  color: '#475569',
                  fontSize: '0.82rem',
                  letterSpacing: '1px',
                  fontFamily: 'monospace'
                }}>
                  {cam.status === 'Online' ? 'FEED STREAM AKTIF' : 'SIGNAL LOSS'}
                </div>

                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '14px',
                  color: '#94A3B8',
                  fontFamily: 'monospace',
                  fontSize: '0.75rem'
                }}>
                  REC • {cam.time}
                </div>
              </div>

              {/* Card Footer */}
              <div style={{
                padding: '18px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.95rem' }}>{cam.name}</span>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  padding: '3px 10px',
                  borderRadius: '9999px',
                  background: cam.status === 'Online' ? 'rgba(83, 170, 75, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                  color: cam.status === 'Online' ? '#3F8638' : '#D97706',
                  border: cam.status === 'Online' ? '1px solid rgba(83, 170, 75, 0.25)' : '1px solid rgba(245, 158, 11, 0.25)'
                }}>{cam.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CCTV