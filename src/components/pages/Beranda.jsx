import React from 'react'
import Hero from '../Hero'
import './Beranda.css'

const Beranda = () => {
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
      icon: 'fa-bamboo'
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
      icon: 'fa-jar-honey'
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
      <Hero />
      
      {/* ========================================== */}
      {/* SECTION 1: SELAMAT DATANG */}
      {/* ========================================== */}
      <section className="welcome-section">
        <div className="welcome-overlay"></div>
        <div className="container welcome-content">
          <h2 className="welcome-title">
            Selamat Datang di <span className="highlight-text">Desa Padakembang</span>
          </h2>
          <p className="welcome-subtitle">
            Desa Energi Mandiri yang mengelola potensi lokal untuk kemandirian energi 
            dan kesejahteraan masyarakat.
          </p>
          <div className="welcome-buttons">
            <a href="/energi" className="btn btn-primary">Lihat Program Energi</a>
            <a href="/layanan" className="btn btn-secondary">Layanan Digital</a>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: CAPAIAN DESA */}
      {/* ========================================== */}
      <section className="achievement-section">
        <div className="achievement-overlay"></div>
        <div className="container achievement-content">
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
            <a href="/berita" className="view-all">Lihat Semua Berita →</a>
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
                 <a href="/berita" className="news-readmore">
  Baca →
</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 4: PETA DESA */}
      {/* ========================================== */}
      <section className="map-section">
        <div className="container">
          <div className="map-wrapper">
            <div className="map-info">
              <h3 className="section-title">
                Peta <span className="highlight-text">Desa Padakembang</span>
              </h3>
              <p className="map-description">
                Desa Padakembang terletak di Kecamatan Padakembang, Kabupaten Tasikmalaya, 
                Provinsi Jawa Barat dengan luas wilayah sekitar 520 hektar.
              </p>
              <div className="map-details">
                <div className="map-detail-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <strong>Kecamatan</strong>
                    <span>Padakembang</span>
                  </div>
                </div>
                <div className="map-detail-item">
                  <i className="fas fa-city"></i>
                  <div>
                    <strong>Kabupaten</strong>
                    <span>Tasikmalaya</span>
                  </div>
                </div>
                <div className="map-detail-item">
                  <i className="fas fa-globe-asia"></i>
                  <div>
                    <strong>Provinsi</strong>
                    <span>Jawa Barat</span>
                  </div>
                </div>
                <div className="map-detail-item">
                  <i className="fas fa-expand-arrows-alt"></i>
                  <div>
                    <strong>Luas Wilayah</strong>
                    <span>520 Ha</span>
                  </div>
                </div>
              </div>
              <a href="/peta" className="btn btn-map">Lihat Peta Lengkap</a>
            </div>
          <div className="map-display">
  <div className="digital-map">

    {/* Header Map */}
    <div className="map-topbar">
      <span>📍 PETA DIGITAL</span>

      <div className="map-actions">
        <i className="fas fa-location-arrow"></i>
        <i className="fas fa-layer-group"></i>
        <i className="fas fa-expand"></i>
      </div>
    </div>

    {/* Area Peta */}
    <div className="map-area">

      {/* Wilayah */}
      <div className="zone zone-1"></div>
      <div className="zone zone-2"></div>
      <div className="zone zone-3"></div>
      <div className="zone zone-4"></div>
      <div className="zone zone-5"></div>
      <div className="zone zone-6"></div>

      {/* Titik Lokasi */}
      <div className="map-pin pin1">🏫</div>
      <div className="map-pin pin2">🏥</div>
      <div className="map-pin pin3">🕌</div>
      <div className="map-pin pin4">🏪</div>
      <div className="map-pin pin5">🎥</div>
      <div className="map-pin pin6">⚡</div>

      {/* Label Jalan */}
      <div className="road road1">Jl. Raya Padakembang</div>
      <div className="road road2">Jl. Sukamanah</div>
      <div className="road road3">Jl. Pasar Lama</div>

      {/* Garis Jalan */}
      <span className="line l1"></span>
      <span className="line l2"></span>
      <span className="line l3"></span>

      {/* Legenda */}
      <div className="legend-box">
        <h5>Legenda</h5>

        <p>🏫 Fasilitas Umum</p>
        <p>🏥 Kesehatan</p>
        <p>🕌 Tempat Ibadah</p>
        <p>🏪 UMKM</p>
        <p>🎥 CCTV</p>
        <p>⚡ Energi</p>
      </div>

    </div>

    {/* Statistik */}
    <div className="map-bottom">
      <div>
        <strong>6</strong>
        <span>Wilayah</span>
      </div>

      <div>
        <strong>27</strong>
        <span>Fasilitas</span>
      </div>

      <div>
        <strong>08</strong>
        <span>RW</span>
      </div>

      <div>
        <strong>12</strong>
        <span>CCTV</span>
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
            <a href="/umkm" className="view-all">Lihat Semua UMKM →</a>
          </div>

     <div className="umkm-grid">
  {umkmList.map((umkm) => (
    <a
      href="/umkm"
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
    </a>
  ))}
</div>
 </div>
</section>
    </>
  )
}

export default Beranda