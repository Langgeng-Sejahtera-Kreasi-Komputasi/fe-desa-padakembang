import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'

const LayananForm = () => {
  const [formData, setFormData] = useState({ 
    nama: '', 
    nik: '', 
    hp: '',
    kampung: '',
    rt: '',
    rw: '',
    layanan: '', 
    pesan: '',
    ktp: null,
    kk: null
  })
  const [feedback, setFeedback] = useState('')

  const kampungOptions = [
    "Sukamanah", "Cikadu", "Padamenak", 
    "Margaluyu", "Sukaraja", "Babakan", "Pangkalan"
  ]

  const handleChange = (e) => {
    const { id, value, type, files } = e.target
    setFormData({ 
      ...formData, 
      [id]: type === 'file' ? files[0] : value 
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { nama, layanan, hp, kampung } = formData

    if (!nama || !layanan || !hp || !kampung) {
      setFeedback('⚠️ Harap isi Nama, No. HP, Kampung, dan Jenis Layanan.')
      return
    }

    const antrian = 'PDK-' + Date.now().toString().slice(-6)
    setFeedback(`Permohonan Anda berhasil diajukan dengan Nomor Registrasi: ${antrian}. Petugas akan menghubungi Anda segera.`)
    
    setFormData({ 
      nama: '', nik: '', hp: '', kampung: '', rt: '', rw: '', 
      layanan: '', pesan: '', ktp: null, kk: null 
    })
    setTimeout(() => setFeedback(''), 8000)
  }

  return (
    <section style={{
      padding: '80px 0',
      background: '#F8FAFC',
      minHeight: '100vh',
      color: '#334155'
    }}>
      <Helmet>
        <title>Formulir Pengajuan Layanan | Desa Padakembang</title>
        <meta name="description" content="Formulir online permohonan surat keterangan desa, bantuan sosial, dan layanan administrasi mandiri warga Desa Padakembang." />
      </Helmet>
      <div className="container" style={{ maxWidth: '820px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
            Formulir Online
          </span>
          <h1 style={{
            fontSize: '2.4rem',
            fontWeight: 800,
            color: '#0F172A',
            marginBottom: '8px',
            letterSpacing: '-0.02em'
          }}>
            Pengajuan <span style={{ color: '#272FA2' }}>Layanan Mandiri</span>
          </h1>
          <p style={{
            fontSize: '1rem',
            color: '#64748B',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Lengkapi formulir di bawah ini dengan informasi yang valid agar proses verifikasi dan penerbitan dokumen berjalan lancar.
          </p>
        </div>

        {/* Card Formulir */}
        <div style={{
          background: '#FFFFFF',
          padding: '40px',
          borderRadius: '20px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)',
          textAlign: 'left'
        }}>
          <form onSubmit={handleSubmit}>
            
            {/* GRID LAYOUT: 2 Kolom */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '20px',
              marginBottom: '20px'
            }}>
              
              {/* Kolom Kiri */}
              <div>
                <div style={{ marginBottom: '16px' }}>
                  <label htmlFor="nama" style={labelStyle}>Nama Lengkap <span style={{ color: '#E11D48' }}>*</span></label>
                  <input
                    type="text" id="nama" value={formData.nama} onChange={handleChange}
                    placeholder="Contoh: Ahmad Fauzan"
                    style={inputStyle}
                    required
                  />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label htmlFor="nik" style={labelStyle}>Nomor Induk Kependudukan (NIK)</label>
                  <input
                    type="text" id="nik" value={formData.nik} onChange={handleChange}
                    placeholder="16 digit NIK sesuai KTP" maxLength="16"
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label htmlFor="hp" style={labelStyle}>Nomor WhatsApp / HP Aktif <span style={{ color: '#E11D48' }}>*</span></label>
                  <input
                    type="text" id="hp" value={formData.hp} onChange={handleChange}
                    placeholder="08xxxxxxxxxx"
                    style={inputStyle}
                    required
                  />
                </div>
              </div>

              {/* Kolom Kanan */}
              <div>
                <div style={{ marginBottom: '16px' }}>
                  <label htmlFor="kampung" style={labelStyle}>Kampung / Dusun <span style={{ color: '#E11D48' }}>*</span></label>
                  <select id="kampung" value={formData.kampung} onChange={handleChange} style={inputStyle} required>
                    <option value="">Pilih Dusun...</option>
                    {kampungOptions.map(k => <option key={k} value={k}>{k}</option>)}
                  </select>
                </div>

                <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ flex: 1 }}>
                    <label htmlFor="rt" style={labelStyle}>RT</label>
                    <input type="text" id="rt" value={formData.rt} onChange={handleChange} placeholder="001" style={inputStyle} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label htmlFor="rw" style={labelStyle}>RW</label>
                    <input type="text" id="rw" value={formData.rw} onChange={handleChange} placeholder="002" style={inputStyle} />
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label htmlFor="layanan" style={labelStyle}>Jenis Layanan <span style={{ color: '#E11D48' }}>*</span></label>
                  <select id="layanan" value={formData.layanan} onChange={handleChange} style={inputStyle} required>
                    <option value="">Pilih Jenis Layanan...</option>
                    <option value="surat">Surat Keterangan Administrasi</option>
                    <option value="bansos">Bantuan Sosial (Bansos)</option>
                    <option value="kesehatan">Posyandu & Kesehatan</option>
                    <option value="pengaduan">Pengaduan & Aspirasi</option>
                    <option value="umkm">Pendaftaran UMKM</option>
                    <option value="energi">Program Energi Mandiri</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Upload Berkas */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label htmlFor="ktp" style={labelStyle}>Foto KTP (Opsional)</label>
                <input type="file" id="ktp" onChange={handleChange} style={{
                  width: '100%', padding: '10px 14px', borderRadius: '12px', background: '#F8FAFC', color: '#475569', border: '1px dashed #CBD5E1', fontSize: '0.88rem'
                }} />
              </div>
              <div>
                <label htmlFor="kk" style={labelStyle}>Foto KK (Opsional)</label>
                <input type="file" id="kk" onChange={handleChange} style={{
                  width: '100%', padding: '10px 14px', borderRadius: '12px', background: '#F8FAFC', color: '#475569', border: '1px dashed #CBD5E1', fontSize: '0.88rem'
                }} />
              </div>
            </div>

            {/* Keterangan */}
            <div style={{ marginBottom: '28px' }}>
              <label htmlFor="pesan" style={labelStyle}>Keterangan / Keperluan Tambahan</label>
              <textarea
                id="pesan" value={formData.pesan} onChange={handleChange}
                placeholder="Tuliskan keterangan detail keperluan Anda..."
                style={{
                  ...inputStyle, minHeight: '90px', fontFamily: 'inherit', resize: 'vertical'
                }}
              ></textarea>
            </div>

            {/* Tombol Kirim */}
            <button type="submit" className="btn btn-primary" style={{
              width: '100%',
              padding: '14px',
              fontSize: '1rem',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer'
            }}>
              Kirim Permohonan Layanan →
            </button>
          </form>

          {/* Feedback Notifikasi */}
          {feedback && (
            <div style={{
              marginTop: '20px',
              padding: '16px 20px',
              borderRadius: '12px',
              fontWeight: 500,
              fontSize: '0.92rem',
              background: feedback.includes('⚠️') ? 'rgba(239, 68, 68, 0.08)' : 'rgba(83, 170, 75, 0.1)',
              border: feedback.includes('⚠️') ? '1px solid #FECDD3' : '1px solid rgba(83, 170, 75, 0.3)',
              color: feedback.includes('⚠️') ? '#BE123C' : '#166534',
              textAlign: 'center'
            }}>{feedback}</div>
          )}
        </div>
      </div>
    </section>
  )
}

const labelStyle = {
  display: 'block',
  fontWeight: 600,
  color: '#0F172A',
  marginBottom: '6px',
  fontSize: '0.88rem'
}

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  fontSize: '0.92rem',
  border: '1px solid #CBD5E1',
  borderRadius: '12px',
  background: '#FFFFFF',
  color: '#0F172A',
  transition: 'border-color 0.2s ease',
  outline: 'none'
}

export default LayananForm 