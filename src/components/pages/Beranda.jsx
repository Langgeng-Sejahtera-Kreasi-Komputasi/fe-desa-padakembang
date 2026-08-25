import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  FaShieldAlt,
  FaLandmark,
  FaGraduationCap,
  FaHospital,
  FaMosque,
  FaStore,
  FaVideo,
  FaLightbulb,
  FaExpand
} from 'react-icons/fa'
import Hero from '../Hero'
import './Beranda.css'

const Beranda = () => {
  // Marker titik fasilitas yang sama persis dengan /peta (petawilayah)
  const previewMarkers = [
    // Sukamanah
    { id: 1, type: "pendidikan", icon: <FaGraduationCap />, x: 22, y: 27, label: "SDN Sukamanah" },
    { id: 2, type: "umum", icon: <FaLandmark />, x: 29, y: 29, label: "Balai Desa" },
    { id: 3, type: "ibadah", icon: <FaMosque />, x: 36, y: 24, label: "Masjid Al-Hikmah" },

    // Cikadu
    { id: 4, type: "kesehatan", icon: <FaHospital />, x: 17, y: 47, label: "Puskesmas Cikadu" },
    { id: 5, type: "umum", icon: <FaLandmark />, x: 21, y: 52, label: "Kantor Kecamatan" },
    { id: 6, type: "cctv", icon: <FaVideo />, x: 25, y: 50, label: "CCTV Jl. Raya" },
    { id: 7, type: "cctv", icon: <FaVideo />, x: 18, y: 59, label: "CCTV Simpang" },

    // Padamenak
    { id: 8, type: "umum", icon: <FaLandmark />, x: 42, y: 35, label: "GOR Padamenak" },
    { id: 9, type: "umum", icon: <FaLandmark />, x: 42, y: 55, label: "Pasar Desa" },
    { id: 10, type: "pendidikan", icon: <FaGraduationCap />, x: 48, y: 49, label: "SMPN 1 Padakembang" },
    { id: 11, type: "cctv", icon: <FaVideo />, x: 46, y: 60, label: "CCTV Pasar" },
    { id: 12, type: "ibadah", icon: <FaMosque />, x: 50, y: 66, label: "Masjid Agung" },

    // Margaluyu
    { id: 13, type: "umum", icon: <FaLandmark />, x: 60, y: 32, label: "Balai Pertemuan" },
    { id: 14, type: "kesehatan", icon: <FaHospital />, x: 66, y: 31, label: "Klinik Pratama" },
    { id: 15, type: "cctv", icon: <FaVideo />, x: 64, y: 38, label: "CCTV Perempatan" },
    { id: 16, type: "umkm", icon: <FaStore />, x: 74, y: 31, label: "Sentra Kerajinan" },

    // Sukaraja
    { id: 17, type: "ibadah", icon: <FaMosque />, x: 73, y: 45, label: "Musholla Nurul Iman" },
    { id: 18, type: "pendidikan", icon: <FaGraduationCap />, x: 76, y: 48, label: "MI Sukaraja" },
    { id: 19, type: "umum", icon: <FaLandmark />, x: 67, y: 53, label: "Lapangan Sepakbola" },
    { id: 20, type: "cctv", icon: <FaVideo />, x: 74, y: 54, label: "CCTV Lapangan" },

    // Babakan
    { id: 21, type: "umum", icon: <FaLandmark />, x: 30, y: 73, label: "Pos Ronda Babakan" },
    { id: 22, type: "ibadah", icon: <FaMosque />, x: 38, y: 75, label: "Masjid Babakan" },
    { id: 23, type: "kesehatan", icon: <FaHospital />, x: 26, y: 81, label: "Posyandu Mawar" },
    { id: 24, type: "pju", icon: <FaLightbulb />, x: 46, y: 79, label: "PJU Jl. Babakan" },

    // Pangkalan
    { id: 25, type: "umkm", icon: <FaStore />, x: 55, y: 68, label: "Koperasi Desa" },
    { id: 26, type: "pendidikan", icon: <FaGraduationCap />, x: 62, y: 70, label: "PAUD Melati" },
    { id: 27, type: "pju", icon: <FaLightbulb />, x: 72, y: 66, label: "PJU Jl. Pangkalan" }
  ]
  // Data dummy untuk berita
  const beritaList = [
    {
      id: 1,
      title: 'Desa Padakembang Resmi Menjadi Desa Energi Mandiri',
      date: '20 Agustus 2026',
      category: 'Energi',
      excerpt: 'Desa Padakembang kini resmi menyandang status sebagai Desa Energi Mandiri setelah berhasil mengelola potensi energi terbarukan secara optimal.'
    },
    {
      id: 2,
      title: 'Pelatihan UMKM Digital untuk 50 Pelaku Usaha',
      date: '18 Agustus 2026',
      category: 'UMKM',
      excerpt: 'Pemerintah desa mengadakan pelatihan pemasaran digital bagi 50 pelaku UMKM untuk meningkatkan penjualan produk lokal.'
    },
    {
      id: 3,
      title: 'Pembangunan Infrastruktur Jalan Desa Tahap II',
      date: '15 Agustus 2026',
      category: 'Infrastruktur',
      excerpt: 'Pembangunan jalan desa sepanjang 2,5 km memasuki tahap kedua dan ditargetkan selesai akhir tahun ini.'
    }
  ]

  // Data UMKM (6 UMKM dengan variasi)
  const umkmList = [
    {
      id: 1,
      name: 'Kerajinan Bambu',
      category: 'Kerajinan',
      owner: 'Bapak Suharto',
      location: 'Dusun 1',
      description: 'Produk kerajinan bambu berkualitas tinggi',
      icon: 'fa-tree'
    },
    {
      id: 2,
      name: 'Kopi Desa',
      category: 'Kuliner',
      owner: 'Ibu Siti',
      location: 'Dusun 2',
      description: 'Kopi dan makanan organik dari hasil pertanian lokal',
      icon: 'fa-mug-saucer'
    },
    {
      id: 3,
      name: 'Tenun Ikat',
      category: 'Fashion',
      owner: 'Ibu Ratna',
      location: 'Dusun 3',
      description: 'Batik khas dengan motif alam Padakembang',
      icon: 'fa-palette'
    },
    {
      id: 4,
      name: 'Batik Tulis',
      category: 'Peternakan',
      owner: 'Bapak Joko',
      location: 'Dusun 4',
      description: 'Ayam kampung organik bebas hormon',
      icon: 'fa-drumstick-bite'
    },
    {
      id: 5,
      name: 'Madu Hutan',
      category: 'Perkebunan',
      owner: 'Bapak Ahmad',
      location: 'Dusun 2',
      description: 'Madu murni dari hutan desa Padakembang',
      icon: 'fa-hexagon'
    },
    {
      id: 6,
      name: 'Keripik Singkong',
      category: 'Kuliner',
      owner: 'Ibu Dewi',
      location: 'Dusun 1',
      description: 'Keripik singkong dengan berbagai varian rasa',
      icon: 'fa-bowl-food'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Beranda | Portal Resmi Desa Padakembang</title>
        <meta name="description" content="Website Resmi Pemerintah Desa Padakembang, Kecamatan Padakembang, Kabupaten Tasikmalaya. Portal informasi publik, pemetaan wilayah, dan layanan digital desa." />
        <meta name="keywords" content="Desa Padakembang, Padakembang Tasikmalaya, Desa Mandiri Energi, Layanan Publik Desa, UMKM Padakembang, Peta Wilayah Desa" />
        <meta property="og:title" content="Desa Padakembang - Menuju Desa Mandiri Energi & Digital" />
        <meta property="og:description" content="Portal Resmi Desa Padakembang dengan layanan publik terpadu, pemetaan digital, dan keterbukaan informasi." />
      </Helmet>
      <Hero />
      {/* ========================================== */}
      {/* SECTION 2: CAPAIAN DESA */}
      {/* ========================================== */}
      <section className="achievement-section">
        <div className="container">
          <h3 className="section-title">
            Capaian <span className="highlight-text">Desa Padakembang</span>
          </h3>
          
          <div className="achievement-grid">
            <div className="achievement-card">
              <div className="achievement-number">501+</div>
              <div className="achievement-label">Penduduk</div>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">36+</div>
              <div className="achievement-label">UMKM Aktif</div>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">90%</div>
              <div className="achievement-label">Kebahagiaan Penduduk</div>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">90%</div>
              <div className="achievement-label">Kepuasan Warga</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 3: BERITA & INFORMASI */}
      {/* ========================================== */}
      <section className="news-section">
        <div className="container">
          <div className="section-header">
            <h3 className="section-title">
              <span className="highlight-text">Berita</span> & Informasi Terkini
            </h3>
            <Link to="/berita" className="view-all">Lihat Semua Berita →</Link>
          </div>

          <div className="news-grid">
            {beritaList.map((berita) => (
              <div className="news-card" key={berita.id}>
                <div className="news-category">{berita.category}</div>
                <h4 className="news-title">{berita.title}</h4>
                <p className="news-excerpt">{berita.excerpt}</p>
                <div className="news-footer">
                  <span className="news-date">
                    <i className="fas fa-calendar-alt"></i> {berita.date}
                  </span>
                  <Link to="/berita" className="news-readmore">
                    Baca →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 4: PETA WILAYAH DESA */}
      {/* ========================================== */}
      <section className="b-map-section" id="peta-desa">
        <div className="container">
          <div className="b-map-wrapper">
            
            {/* Kolom Kiri: Profil & Informasi Geografis */}
            <div className="b-map-info">

              <h3 className="b-map-title">
                Peta Wilayah <span className="highlight-text">Desa Padakembang</span>
              </h3>

              <p className="b-map-description">
                Desa Padakembang terletak di Kecamatan Padakembang, Kabupaten Tasikmalaya, 
                Provinsi Jawa Barat dengan luas wilayah sekitar <strong>520 hektar</strong> yang 
                terbagi menjadi wilayah administratif terintegrasi.
              </p>

              {/* Profil Data Geografis */}
              <div className="b-map-details">
                <div className="b-map-detail-item">
                  <div className="b-map-detail-icon">
                    <i className="fas fa-map-pin"></i>
                  </div>
                  <div className="b-map-detail-content">
                    <strong>Kecamatan</strong>
                    <span>Padakembang</span>
                  </div>
                </div>

                <div className="b-map-detail-item">
                  <div className="b-map-detail-icon">
                    <i className="fas fa-building-columns"></i>
                  </div>
                  <div className="b-map-detail-content">
                    <strong>Kabupaten</strong>
                    <span>Tasikmalaya</span>
                  </div>
                </div>

                <div className="b-map-detail-item">
                  <div className="b-map-detail-icon">
                    <i className="fas fa-earth-asia"></i>
                  </div>
                  <div className="b-map-detail-content">
                    <strong>Provinsi</strong>
                    <span>Jawa Barat</span>
                  </div>
                </div>

                <div className="b-map-detail-item">
                  <div className="b-map-detail-icon">
                    <i className="fas fa-chart-area"></i>
                  </div>
                  <div className="b-map-detail-content">
                    <strong>Luas Wilayah</strong>
                    <span>520 Ha</span>
                  </div>
                </div>
              </div>

              {/* Tombol Aksi */}
              <div className="b-map-cta-group">
                <Link to="/peta" className="b-btn-map">
                  <span>Lihat Peta Lengkap & Interaktif</span>
                  <i className="fas fa-arrow-right"></i>
                </Link>
                <div className="b-map-cta-note">
                  <FaShieldAlt style={{ color: '#10b981' }} />
                  <span>Terintegrasi 27 Titik Fasilitas & Pemantauan CCTV</span>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Tampilan Peta yang Sama dengan /peta */}
            <div className="b-map-display">
              <div className="b-map-canvas-container">

                {/* Header Map */}
                <div className="b-map-header">
                  <div className="b-map-header-left">
                    <span className="b-map-badge-tag"><FaShieldAlt /> Interaktif</span>
                    <span className="b-map-coord">7°08'27.12" S · 108°12'45.89" E</span>
                  </div>
                  <div className="b-map-header-right">
                    <Link to="/peta" className="b-map-action-btn" title="Buka Layar Penuh">
                      <FaExpand />
                    </Link>
                  </div>
                </div>

                {/* Compass */}
                <div className="b-compass">
                  <span className="b-compass-n">U</span>
                  <span className="b-compass-e">T</span>
                  <span className="b-compass-s">S</span>
                  <span className="b-compass-w">B</span>
                  <div className="b-compass-star">✦</div>
                </div>

                {/* Sungai / River */}
                <div className="b-river b-river-one"></div>
                <div className="b-river b-river-two"></div>

                {/* Batas Wilayah Desa */}
                <div className="b-desa-boundary"></div>

                {/* Desa Tetangga (Neighbor Labels) */}
                <span className="b-neighbor b-neighbor-top">Desa Sukamulya</span>
                <span className="b-neighbor b-neighbor-left">Desa Padawaras</span>
                <span className="b-neighbor b-neighbor-right">Desa Tanjungjaya</span>
                <span className="b-neighbor b-neighbor-bottom-left">Desa Cipatujah</span>
                <span className="b-neighbor b-neighbor-bottom">Desa Padamukti</span>
                <span className="b-neighbor b-neighbor-bottom-right">Desa Sukahurip</span>

                {/* Wilayah / Dusun (Polygonal Areas) */}
                <div className="b-village-area b-area-sukamanah"><span>Kp. Sukamanah</span></div>
                <div className="b-village-area b-area-margaluyu"><span>Kp. Margaluyu</span></div>
                <div className="b-village-area b-area-cikadu"><span>Kp. Cikadu</span></div>
                <div className="b-village-area b-area-padamenak"><span>Kp. Padamenak</span></div>
                <div className="b-village-area b-area-sukaraja"><span>Kp. Sukaraja</span></div>
                <div className="b-village-area b-area-babakan"><span>Kp. Babakan</span></div>
                <div className="b-village-area b-area-pangkalan"><span>Kp. Pangkalan</span></div>

                {/* Garis Jalan */}
                <div className="b-map-road b-map-road-1"></div>
                <div className="b-map-road b-map-road-2"></div>
                <div className="b-map-road b-map-road-3"></div>
                <div className="b-map-road b-map-road-4"></div>
                <div className="b-map-road b-map-road-5"></div>
                <div className="b-map-road b-map-road-6"></div>

                {/* Label Jalan */}
                <div className="b-road-pill b-road-pill-1"><span>Jl. Raya Padakembang</span></div>
                <div className="b-road-pill b-road-pill-2"><span>Jl. Pasar Lama</span></div>
                <div className="b-road-pill b-road-pill-3"><span>Jl. Kesehatan</span></div>
                <div className="b-road-pill b-road-pill-4"><span>Jl. Sukamanah</span></div>

                {/* Titik Lokasi Fasilitas / Markers */}
                {previewMarkers.map((marker) => (
                  <div
                    key={marker.id}
                    className={`b-map-pin-marker b-marker-${marker.type}`}
                    style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                    title={marker.label}
                  >
                    {marker.icon}
                    <span className="b-marker-popup">{marker.label}</span>
                  </div>
                ))}

                {/* Legenda Peta */}
                <div className="b-map-legend-card">
                  <h4>📋 Legenda</h4>
                  <div className="b-legend-row">
                    <span className="b-leg-line b-line-boundary"></span>
                    <span>Batas Wilayah</span>
                  </div>
                  <div className="b-legend-row">
                    <span className="b-leg-line b-line-main-road"></span>
                    <span>Jalan Utama</span>
                  </div>
                  <div className="b-legend-row">
                    <span className="b-leg-line b-line-small-road"></span>
                    <span>Jalan Desa</span>
                  </div>
                  <div className="b-legend-row">
                    <span className="b-leg-line b-line-river"></span>
                    <span>Sungai</span>
                  </div>
                </div>

                {/* Footer Statistik */}
                <div className="b-map-preview-footer">
                  <div><strong>6</strong><span>Wilayah</span></div>
                  <div><strong>08</strong><span>RW</span></div>
                  <div><strong>27</strong><span>Fasilitas</span></div>
                  <div><strong>12</strong><span>CCTV</span></div>
                  <div className="b-map-coords-info">
                    <span>PADAKEMBANG</span>
                    <small>TASIKMALAYA · JAWA BARAT</small>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 5: UMKM DESA (6 UMKM) */}
      {/* ========================================== */}
      <section className="umkm-section">
        <div className="container">
          <div className="section-header">
            <h3 className="section-title">
              <span className="highlight-text">UMKM</span> Desa Padakembang
            </h3>
            <Link to="/umkm" className="view-all">Lihat Semua UMKM →</Link>
          </div>

          <div className="umkm-grid">
            {umkmList.map((umkm) => (
              <Link
                to="/umkm"
                className="umkm-card"
                key={umkm.id}
              >
                <div className="umkm-icon">
                  <i className={`fas ${umkm.icon || 'fa-store'}`}></i>
                </div>

                <div className="umkm-info">
                  <h4 className="umkm-name">{umkm.name}</h4>

                  <span className="umkm-category">
                    {umkm.category}
                  </span>

                  <p className="umkm-description">
                    {umkm.description}
                  </p>

                  <div className="umkm-meta">
                    <span>
                      <i className="fas fa-user"></i> {umkm.owner}
                    </span>

                    <span>
                      <i className="fas fa-location-dot"></i> {umkm.location}
                    </span>
                  </div>
                </div>

                <div className="umkm-link">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Beranda