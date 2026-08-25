import React from 'react'
import { Helmet } from 'react-helmet-async'

const Statistik = () => {
  // Data untuk tren pertumbuhan
  const tahunData = [
    { tahun: '2022', kelahiran: 45, kematian: 28, total: 4450 },
    { tahun: '2023', kelahiran: 52, kematian: 25, total: 4680 },
    { tahun: '2024', kelahiran: 48, kematian: 30, total: 4890 },
    { tahun: '2025', kelahiran: 55, kematian: 22, total: 5070 },
    { tahun: '2026', kelahiran: 58, kematian: 26, total: 5234 }
  ]

  // Data Pendidikan
  const pendidikanData = [
    { label: 'D1-D3', jumlah: 30, persen: '19.0%', color: '#272FA2' },
    { label: 'SMA/SMK', jumlah: 28, persen: '17.7%', color: '#4338CA' },
    { label: 'SD/Sederajat', jumlah: 27, persen: '17.1%', color: '#53AA4B' },
    { label: 'S1/D4', jumlah: 24, persen: '15.2%', color: '#0284C7' },
    { label: 'SMP/Sederajat', jumlah: 24, persen: '15.2%', color: '#D97706' },
    { label: 'Tidak Sekolah', jumlah: 22, persen: '13.9%', color: '#64748B' }
  ]

  // Data Mata Pencaharian
  const pekerjaanData = [
    { label: 'Petani & Pekebun', jumlah: 45, persen: '28.5%', color: '#53AA4B' },
    { label: 'Pedagang / Wirausaha', jumlah: 32, persen: '20.2%', color: '#272FA2' },
    { label: 'Mengurus Rumah Tangga', jumlah: 28, persen: '17.7%', color: '#64748B' },
    { label: 'Pelajar & Mahasiswa', jumlah: 23, persen: '14.6%', color: '#0284C7' },
    { label: 'Karyawan Swasta', jumlah: 18, persen: '11.4%', color: '#4338CA' },
    { label: 'PNS & Pensiunan', jumlah: 12, persen: '7.6%', color: '#D97706' }
  ]

  // Data BPJS
  const bpjsData = [
    { label: 'Non-PBI (Mandiri)', jumlah: 87, persen: '55.1%', color: '#272FA2' },
    { label: 'PBI (Bantuan Pemerintah)', jumlah: 50, persen: '31.6%', color: '#53AA4B' },
    { label: 'Belum Terdaftar', jumlah: 21, persen: '13.3%', color: '#64748B' }
  ]

  // Data Administrasi
  const administrasiData = [
    { label: 'Kepemilikan KTP Elektronik', persen: '92%', jumlah: '4.815 Terbit', color: '#272FA2' },
    { label: 'Kartu Keluarga (KK)', persen: '96%', jumlah: '1.420 KK', color: '#53AA4B' },
    { label: 'Akta Kelahiran Anak', persen: '88%', jumlah: '1.180 Terdaftar', color: '#0284C7' }
  ]

  return (
    <section style={{
      padding: '80px 0',
      background: '#F8FAFC',
      minHeight: '100vh',
      color: '#334155'
    }}>
      <Helmet>
        <title>Data & Statistik Kependudukan | Desa Padakembang</title>
        <meta name="description" content="Dashboard statistik kependudukan Desa Padakembang: demografi penduduk, tingkat pendidikan, mata pencaharian, kepemilikan BPJS, dan tren kelahiran." />
        <meta name="keywords" content="Statistik Desa Padakembang, Demografi Padakembang, Data Penduduk Desa, Data BPJS Desa" />
      </Helmet>
      <div className="container">
        {/* Header */}
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
            Data Terbuka Desa
          </span>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            color: '#0F172A',
            marginBottom: '10px',
            letterSpacing: '-0.02em'
          }}>
            Statistik & <span style={{ color: '#272FA2' }}>Demografi Wilayah</span>
          </h1>
          <p style={{
            fontSize: '1.05rem',
            color: '#64748B',
            maxWidth: '650px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Ringkasan data agregat kependudukan, tingkat pendidikan, ketenagakerjaan, dan administrasi warga Desa Padakembang secara transparan.
          </p>
        </div>

        {/* Top 4 KPI Metrics */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          marginBottom: '36px'
        }}>
          <div style={{
            background: '#FFFFFF',
            padding: '24px',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Penduduk</div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#272FA2', margin: '4px 0', letterSpacing: '-0.02em' }}>5.234</div>
            <div style={{ fontSize: '0.82rem', color: '#53AA4B', fontWeight: 600 }}>↑ +3.2% thn ini</div>
          </div>

          <div style={{
            background: '#FFFFFF',
            padding: '24px',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Rasio Gender</div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0F172A', margin: '4px 0', letterSpacing: '-0.02em' }}>104.2</div>
            <div style={{ fontSize: '0.82rem', color: '#64748B' }}>51% L / 49% P</div>
          </div>

          <div style={{
            background: '#FFFFFF',
            padding: '24px',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Kepadatan</div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0F172A', margin: '4px 0', letterSpacing: '-0.02em' }}>2.060</div>
            <div style={{ fontSize: '0.82rem', color: '#64748B' }}>Jiwa / km²</div>
          </div>

          <div style={{
            background: '#FFFFFF',
            padding: '24px',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Kepala Keluarga</div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#53AA4B', margin: '4px 0', letterSpacing: '-0.02em' }}>1.420</div>
            <div style={{ fontSize: '0.82rem', color: '#64748B' }}>Kartu Keluarga Aktif</div>
          </div>
        </div>

        {/* Kelahiran vs Kematian Chart */}
        <div style={{
          background: '#FFFFFF',
          padding: '32px',
          borderRadius: '18px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)',
          marginBottom: '36px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', margin: '0 0 4px 0' }}>Laju Kelahiran & Kematian</h3>
              <p style={{ fontSize: '0.88rem', color: '#64748B', margin: 0 }}>Tren dinamika kependudukan alami 5 tahun terakhir (2022–2026)</p>
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#334155' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#272FA2', display: 'inline-block' }}></span>
                <span>Kelahiran</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#334155' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#E11D48', display: 'inline-block' }}></span>
                <span>Kematian</span>
              </div>
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
            height: '240px',
            padding: '0 16px',
            gap: '24px',
            borderBottom: '1px solid #E2E8F0'
          }}>
            {tahunData.map((item, index) => {
              const heightKelahiran = (item.kelahiran / 65) * 190
              const heightKematian = (item.kematian / 65) * 190

              return (
                <div key={index} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  flex: 1,
                  gap: '8px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: '8px',
                    height: '200px'
                  }}>
                    {/* Bar Kelahiran */}
                    <div style={{
                      height: `${heightKelahiran}px`,
                      width: '28px',
                      background: '#272FA2',
                      borderRadius: '6px 6px 0 0',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      paddingTop: '4px'
                    }}>
                      <span style={{ fontSize: '0.7rem', color: '#FFFFFF', fontWeight: 600 }}>{item.kelahiran}</span>
                    </div>
                    {/* Bar Kematian */}
                    <div style={{
                      height: `${heightKematian}px`,
                      width: '28px',
                      background: '#E11D48',
                      borderRadius: '6px 6px 0 0',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      paddingTop: '4px'
                    }}>
                      <span style={{ fontSize: '0.7rem', color: '#FFFFFF', fontWeight: 600 }}>{item.kematian}</span>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748B' }}>{item.tahun}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* 2-Column: Pendidikan & Mata Pencaharian */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px',
          marginBottom: '36px'
        }}>
          {/* Tingkat Pendidikan */}
          <div style={{
            background: '#FFFFFF',
            padding: '28px',
            borderRadius: '18px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)'
          }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '20px' }}>
              Tingkat Pendidikan
            </h3>
            {pendidikanData.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 0',
                borderBottom: index < pendidikanData.length - 1 ? '1px solid #F1F5F9' : 'none'
              }}>
                <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 500 }}>{item.label}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#64748B', fontSize: '0.85rem' }}>{item.jumlah} Jiwa</span>
                  <span style={{
                    background: 'rgba(39, 47, 162, 0.08)',
                    color: '#272FA2',
                    padding: '2px 10px',
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    fontWeight: 700
                  }}>
                    {item.persen}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mata Pencaharian */}
          <div style={{
            background: '#FFFFFF',
            padding: '28px',
            borderRadius: '18px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)'
          }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '20px' }}>
              Mata Pencaharian Utama
            </h3>
            {pekerjaanData.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 0',
                borderBottom: index < pekerjaanData.length - 1 ? '1px solid #F1F5F9' : 'none'
              }}>
                <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 500 }}>{item.label}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#64748B', fontSize: '0.85rem' }}>{item.jumlah} Jiwa</span>
                  <span style={{
                    background: 'rgba(83, 170, 75, 0.1)',
                    color: '#3F8638',
                    padding: '2px 10px',
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    fontWeight: 700
                  }}>
                    {item.persen}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column: BPJS & Administrasi */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px',
          marginBottom: '36px'
        }}>
          {/* BPJS */}
          <div style={{
            background: '#FFFFFF',
            padding: '28px',
            borderRadius: '18px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)'
          }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '20px' }}>
              Jaminan Kesehatan (BPJS)
            </h3>
            {bpjsData.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 0',
                borderBottom: index < bpjsData.length - 1 ? '1px solid #F1F5F9' : 'none'
              }}>
                <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 500 }}>{item.label}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#64748B', fontSize: '0.85rem' }}>{item.jumlah} Jiwa</span>
                  <span style={{
                    background: 'rgba(39, 47, 162, 0.08)',
                    color: '#272FA2',
                    padding: '2px 10px',
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    fontWeight: 700
                  }}>
                    {item.persen}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Administrasi */}
          <div style={{
            background: '#FFFFFF',
            padding: '28px',
            borderRadius: '18px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)'
          }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '20px' }}>
              Cakupan Dokumen Kependudukan
            </h3>
            {administrasiData.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 0',
                borderBottom: index < administrasiData.length - 1 ? '1px solid #F1F5F9' : 'none'
              }}>
                <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 500 }}>{item.label}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#64748B', fontSize: '0.85rem' }}>{item.jumlah}</span>
                  <span style={{
                    background: 'rgba(83, 170, 75, 0.1)',
                    color: '#3F8638',
                    padding: '2px 10px',
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    fontWeight: 700
                  }}>
                    {item.persen}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabel Rincian Data */}
        <div style={{
          background: '#FFFFFF',
          padding: '28px',
          borderRadius: '18px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)',
          overflowX: 'auto'
        }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '16px' }}>
            Rincian Pertumbuhan Penduduk Tahunan
          </h3>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            color: '#334155',
            fontSize: '0.92rem'
          }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #E2E8F0', background: '#F8FAFC' }}>
                <th style={{ padding: '12px 16px', textAlign: 'left', color: '#0F172A' }}>Tahun</th>
                <th style={{ padding: '12px 16px', textAlign: 'center', color: '#0F172A' }}>Kelahiran</th>
                <th style={{ padding: '12px 16px', textAlign: 'center', color: '#0F172A' }}>Kematian</th>
                <th style={{ padding: '12px 16px', textAlign: 'center', color: '#0F172A' }}>Total Penduduk</th>
                <th style={{ padding: '12px 16px', textAlign: 'center', color: '#0F172A' }}>Laju Pertumbuhan</th>
              </tr>
            </thead>
            <tbody>
              {tahunData.map((item, index) => {
                const growth = index > 0 ? ((item.total - tahunData[index-1].total) / tahunData[index-1].total * 100).toFixed(2) : '-'
                return (
                  <tr key={index} style={{
                    borderBottom: index < tahunData.length - 1 ? '1px solid #F1F5F9' : 'none'
                  }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: '#272FA2' }}>{item.tahun}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>{item.kelahiran}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>{item.kematian}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600 }}>{item.total.toLocaleString()}</td>
                    <td style={{
                      padding: '12px 16px',
                      textAlign: 'center',
                      color: growth !== '-' ? '#53AA4B' : '#64748B',
                      fontWeight: 600
                    }}>
                      {growth !== '-' ? `+${growth}%` : '-'}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Statistik