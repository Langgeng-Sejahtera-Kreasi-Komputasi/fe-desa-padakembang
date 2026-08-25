import React from 'react';
import { Helmet } from 'react-helmet-async';

const Profil = () => {
  return (
    <section style={{
      padding: '80px 0',
      background: '#F8FAFC',
      minHeight: '100vh',
      color: '#334155'
    }}>
      <Helmet>
        <title>Profil Desa | Desa Padakembang</title>
        <meta name="description" content="Profil lengkap Desa Padakembang, Kecamatan Padakembang, Kabupaten Tasikmalaya. Sejarah desa, visi & misi, batas wilayah, dan potensi ekonomi unggulan." />
        <meta name="keywords" content="Profil Desa Padakembang, Visi Misi Desa Padakembang, Sejarah Desa Padakembang, Potensi Desa Padakembang" />
      </Helmet>
      
      <style>{`
        .header-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
          color: #0F172A;
        }
        .header-subtitle {
          color: #64748B;
          text-align: center;
          font-size: 1.05rem;
          margin-bottom: 48px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .profil-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }

        .clean-profile-card {
          background: #FFFFFF;
          padding: 28px;
          border-radius: 16px;
          border: 1px solid #E2E8F0;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04);
          transition: all 0.25s ease;
          margin-bottom: 24px;
        }
        .clean-profile-card:hover {
          transform: translateY(-2px);
          border-color: #CDCEEA;
          box-shadow: 0 10px 25px -4px rgba(39, 47, 162, 0.06);
        }

        .card-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #272FA2;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 10px;
          letter-spacing: -0.01em;
          padding-bottom: 12px;
          border-bottom: 1px solid #F1F5F9;
        }

        .text-row {
          color: #475569;
          line-height: 1.7;
          margin-bottom: 8px;
          font-size: 0.92rem;
        }
        .text-row strong {
          color: #0F172A;
          font-weight: 600;
        }
        .text-detail {
          color: #94A3B8;
          font-size: 0.85rem;
        }

        .border-item {
          display: flex;
          gap: 12px;
          margin-bottom: 10px;
          border-bottom: 1px solid #F1F5F9;
          padding-bottom: 8px;
          font-size: 0.92rem;
        }
        .border-label {
          color: #272FA2;
          font-weight: 600;
          min-width: 65px;
        }
        .border-value {
          color: #475569;
        }

        .visi-box {
          margin-bottom: 20px;
        }
        .visi-box h4 {
          color: #0F172A;
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .misi-list {
          padding-left: 20px;
          color: #475569;
          line-height: 1.7;
          font-size: 0.92rem;
        }
        .misi-list li {
          margin-bottom: 6px;
        }

        .stat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 16px;
        }
        .stat-box {
          background: #F8FAFC;
          padding: 16px;
          border-radius: 12px;
          border-left: 3px solid #272FA2;
          border-top: 1px solid #E2E8F0;
          border-right: 1px solid #E2E8F0;
          border-bottom: 1px solid #E2E8F0;
        }
        .stat-value {
          display: block;
          font-size: 1.35rem;
          font-weight: 800;
          color: #272FA2;
          letter-spacing: -0.01em;
        }
        .stat-label {
          color: #64748B;
          font-size: 0.82rem;
          margin-top: 4px;
          font-weight: 500;
        }

        .tag-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 10px;
        }
        .tag {
          background: rgba(39, 47, 162, 0.06);
          color: #272FA2;
          padding: 5px 14px;
          border-radius: 15px;
          font-size: 0.82rem;
          font-weight: 500;
          border: 1px solid rgba(205, 206, 234, 0.6);
          transition: all 0.2s ease;
        }
        .tag:hover {
          background: #272FA2;
          color: #FFFFFF;
        }

        .sejarah-text {
          color: #475569;
          line-height: 1.7;
          margin-bottom: 12px;
          font-size: 0.92rem;
        }

        @media (max-width: 992px) {
          .profil-wrapper {
            grid-template-columns: 1fr;
          }
          .header-title {
            font-size: 2rem;
          }
        }
        @media (max-width: 480px) {
          .stat-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        
        {/* HEADER */}
        <h1 className="header-title">Profil Desa Padakembang</h1>
        <p className="header-subtitle">Mengenal lebih dekat potensi dan struktur wilayah Desa Energi Mandiri</p>

        {/* CONTENT WRAPPER */}
        <div className="profil-wrapper">
          
          {/* KOLOM KIRI */}
          <div className="profil-left">
            
            {/* Identitas Desa */}
            <div className="clean-profile-card">
              <h3 className="card-title">Identitas Wilayah</h3>
              <div className="text-row"><strong>Nama Desa:</strong> Padakembang</div>
              <div className="text-row"><strong>Kecamatan:</strong> Padakembang</div>
              <div className="text-row"><strong>Kabupaten:</strong> Tasikmalaya</div>
              <div className="text-row"><strong>Provinsi:</strong> Jawa Barat</div>
              <div className="text-row"><strong>Kode Pos:</strong> 46466</div>
              <div className="text-row"><strong>Kode Kemendagri:</strong> 32.06.29.2005</div>
            </div>

            {/* Luas Wilayah */}
            <div className="clean-profile-card">
              <h3 className="card-title">Luas & Potensi Wilayah</h3>
              <div className="text-row"><strong>Luas Area:</strong> 254 Hektar <span className="text-detail">(estimasi)</span></div>
              <div className="text-row"><strong>Penggunaan Lahan:</strong> Pertanian, Pemukiman, Hutan Desa</div>
              <div className="text-row"><strong>Potensi Alam:</strong> Biofarmaka (Mint & Rosella), Sumber Air Panas</div>
            </div>

            {/* Batas Wilayah */}
            <div className="clean-profile-card">
              <h3 className="card-title">Batas Wilayah Administratif</h3>
              <div className="border-item">
                <span className="border-label">Utara:</span>
                <span className="border-value">Desa Linggajati</span>
              </div>
              <div className="border-item">
                <span className="border-label">Timur:</span>
                <span className="border-value">Desa Mekarjaya</span>
              </div>
              <div className="border-item">
                <span className="border-label">Selatan:</span>
                <span className="border-value">Desa Cisaruni</span>
              </div>
              <div className="border-item">
                <span className="border-label">Barat:</span>
                <span className="border-value">Desa Mandalagiri</span>
              </div>
            </div>

          </div>

          {/* KOLOM KANAN */}
          <div className="profil-right">

            {/* Visi & Misi */}
            <div className="clean-profile-card">
              <h3 className="card-title">Visi & Misi Desa</h3>
              <div className="visi-box">
                <h4>Visi</h4>
                <p className="text-row" style={{ fontStyle: 'italic', color: '#272FA2', fontWeight: 500 }}>
                  "Terwujudnya Desa Padakembang yang Mandiri, Inovatif, dan Sejahtera Berbasis Potensi Lokal"
                </p>
              </div>
              <div className="visi-box">
                <h4>Misi</h4>
                <ol className="misi-list">
                  <li>Meningkatkan tata kelola pemerintahan desa yang transparan dan akuntabel.</li>
                  <li>Mengembangkan potensi pertanian dan biofarmaka secara berkelanjutan.</li>
                  <li>Mendorong pertumbuhan ekonomi kerakyatan melalui pengembangan UMKM.</li>
                  <li>Mewujudkan desa wisata yang berdaya saing dan mandiri energi.</li>
                  <li>Meningkatkan kualitas SDM melalui pendidikan dan pelatihan terpadu.</li>
                </ol>
              </div>
            </div>

            {/* Sejarah Singkat */}
            <div className="clean-profile-card">
              <h3 className="card-title">Sejarah Singkat</h3>
              <p className="sejarah-text">
                Desa Padakembang terletak di lereng Gunung Galunggung, Kabupaten Tasikmalaya. Dikenal dengan masyarakat yang gotong royong dan kepedulian tinggi terhadap kelestarian lingkungan serta kemandirian energi.
              </p>
              <p className="sejarah-text">
                Desa ini menjadi pelopor budidaya <strong>Mint</strong> dan <strong>Rosella</strong> serta pengelolaan energi baru terbarukan terpadu yang meningkatkan kesejahteraan warganya.
              </p>
            </div>

            {/* Potensi Ekonomi */}
            <div className="clean-profile-card">
              <h3 className="card-title">Potensi Ekonomi & UMKM</h3>
              <div className="stat-grid">
                <div className="stat-box">
                  <span className="stat-value">Rp 3.535.914</span>
                  <span className="stat-label">Pendapatan Biofarmaka / Periode</span>
                </div>
                <div className="stat-box" style={{ borderLeftColor: '#53AA4B' }}>
                  <span className="stat-value" style={{ color: '#53AA4B' }}>27,12%</span>
                  <span className="stat-label">Kontribusi Pendapatan Petani</span>
                </div>
              </div>
              
              <div style={{ marginTop: '20px' }}>
                <p className="text-row" style={{ fontWeight: 600, color: '#0F172A' }}>Sektor Unggulan:</p>
                <div className="tag-container">
                  <span className="tag">Wisata Air Panas</span>
                  <span className="tag">Wisata Religi</span>
                  <span className="tag">Kerajinan Bambu</span>
                  <span className="tag">Batik Tulis</span>
                  <span className="tag">Kopi Desa</span>
                  <span className="tag">Kripik Singkong</span>
                  <span className="tag">Madu Hutan</span>
                  <span className="tag">Tenun Ikat</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Profil;