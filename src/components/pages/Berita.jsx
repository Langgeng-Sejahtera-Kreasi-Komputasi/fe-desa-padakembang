// src/components/pages/Berita.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Berita = () => {
  const [selectedBerita, setSelectedBerita] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const beritaData = [
    { 
      id: 1, 
      category: 'Budaya',
      title: 'Festival Budaya Desa Padakembang', 
      date: '20 Juli 2026', 
      desc: 'Masyarakat meriahkan festival tahunan dengan berbagai pertunjukan seni, pagelaran wayang, dan bazar kuliner lokal.',
      fullContent: 'Festival Budaya Desa tahun ini berlangsung meriah dengan partisipasi seluruh warga desa. Acara dimulai dengan parade budaya yang menampilkan berbagai kesenian tradisional seperti tari jaipong, angklung, dan wayang kulit. Selain itu, terdapat pula bazar kuliner yang menyajikan berbagai makanan khas desa. Festival ini diadakan untuk melestarikan budaya dan mempererat tali silaturahmi antar warga desa.',
      photo: 'https://mmc.kalteng.go.id/files/berita/10072025094939_0.jpg'
    },
    { 
      id: 2, 
      category: 'Pertanian',
      title: 'Panen Raya Padi Organik', 
      date: '15 Juli 2026', 
      desc: 'Kelompok tani desa mencatatkan rekor panen raya dengan hasil melimpah berkat penerapan irigasi energi terbarukan.',
      fullContent: 'Panen raya padi tahun ini mencapai hasil yang sangat memuaskan. Dengan luas lahan 40 hektar, para petani berhasil memanen lebih dari 200 ton padi. Hal ini tidak terlepas dari dukungan pemerintah desa dalam penyediaan bibit unggul dan pupuk berkualitas. Panen raya dirayakan dengan tradisi "Mapag Sri" sebagai bentuk rasa syukur kepada Tuhan Yang Maha Esa.',
      photo: 'https://cdn.antaranews.com/cache/1200x800/2023/01/27/panen-raya.jpg.webp'
    },
    { 
      id: 3, 
      category: 'Infrastruktur',
      title: 'Pembangunan Jalan Poros Desa Tahap II', 
      date: '10 Juli 2026', 
      desc: 'Peningkatan konektivitas antar dusun melalui pengaspalan dan pemasangan 120 titik PJU bertenaga surya.',
      fullContent: 'Pembangunan jalan baru sepanjang 5 kilometer telah dimulai untuk menghubungkan desa dengan kecamatan. Proyek ini dibiayai oleh dana desa dan diharapkan selesai dalam waktu 3 bulan. Dengan adanya jalan baru ini, akses transportasi masyarakat akan semakin lancar dan memudahkan distribusi hasil pertanian ke pasar.',
      photo: 'https://binamarga.pu.go.id/balai-dki-jabar/uploads/images/451/pn640/sudah-memasuki-tahap-pengaspalan-pembangunan-jalan-baru-lingkar-utara-jatigede-selesai-bulan-depan.jpeg'
    },
  ];

  const handleBeritaClick = (berita) => {
    setSelectedBerita(berita);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setSelectedBerita(null), 300);
  };

  return (
    <>
      <Helmet>
        <title>Kabar & Warta Desa | Desa Padakembang</title>
        <meta name="description" content="Berita terkini, agenda kegiatan, pengumuman resmi, dan dokumentasi program pembangunan di Desa Padakembang." />
        <meta name="keywords" content="Berita Desa Padakembang, Warta Desa Padakembang, Informasi Publik Padakembang, Agenda Desa" />
      </Helmet>
      <style>{`
        .berita-section {
          padding: 80px 0;
          background: #F8FAFC;
          min-height: 100vh;
          color: #334155;
        }
        
        .section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
          color: #0F172A;
        }
        .section-subtitle {
          text-align: center;
          color: #64748B;
          font-size: 1.05rem;
          margin-bottom: 48px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .berita-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
        }

        .berita-card {
          background: #FFFFFF;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid #E2E8F0;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04);
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
        }
        .berita-card:hover {
          transform: translateY(-3px);
          border-color: #CDCEEA;
          box-shadow: 0 12px 28px -4px rgba(39, 47, 162, 0.08);
        }

        .berita-photo {
          width: 100%;
          height: 200px;
          background: #F1F5F9;
          position: relative;
          overflow: hidden;
        }
        .berita-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .berita-card:hover .berita-photo-img {
          transform: scale(1.03);
        }
        .berita-photo-fallback {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          font-size: 3rem;
          background: #F1F5F9;
          color: #94A3B8;
        }

        .berita-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .berita-category {
          display: inline-block;
          background: rgba(39, 47, 162, 0.08);
          color: #272FA2;
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 0.78rem;
          font-weight: 600;
          margin-bottom: 12px;
          align-self: flex-start;
          border: 1px solid rgba(39, 47, 162, 0.15);
        }

        .berita-card h3 {
          margin: 0 0 10px 0;
          font-size: 1.2rem;
          font-weight: 700;
          color: #0F172A;
          line-height: 1.35;
          letter-spacing: -0.01em;
        }
        .berita-date {
          font-size: 0.82rem;
          color: #94A3B8;
          margin-bottom: 12px;
          font-weight: 500;
        }
        .berita-card p {
          color: #475569;
          font-size: 0.92rem;
          line-height: 1.6;
          margin-bottom: 20px;
          flex: 1;
        }

        .berita-btn {
          padding: 8px 18px;
          background: transparent;
          border: 1px solid #E2E8F0;
          color: #272FA2;
          border-radius: 15px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.85rem;
          transition: all 0.2s ease;
          align-self: flex-start;
        }
        .berita-btn:hover {
          background: #272FA2;
          border-color: #272FA2;
          color: #FFFFFF;
        }

        /* Clean Modal */
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .modal-content {
          background: #FFFFFF;
          border-radius: 20px;
          max-width: 680px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          padding: 32px;
          position: relative;
          border: 1px solid #E2E8F0;
          box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.25);
          animation: slideUp 0.25s ease;
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .modal-close {
          position: absolute;
          top: 18px;
          right: 18px;
          background: #F1F5F9;
          border: none;
          color: #64748B;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-close:hover {
          background: #E2E8F0;
          color: #0F172A;
        }

        .modal-berita-photo {
          width: 100%;
          height: 260px;
          border-radius: 14px;
          overflow: hidden;
          margin-bottom: 20px;
        }
        .modal-berita-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .modal-berita-date {
          color: #64748B;
          font-size: 0.85rem;
          margin-bottom: 8px;
          font-weight: 500;
        }
        .modal-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: #0F172A;
          margin: 0 0 16px 0;
          line-height: 1.3;
          letter-spacing: -0.02em;
        }
        .modal-desc {
          color: #334155;
          line-height: 1.8;
          font-size: 0.98rem;
        }
        .modal-btn {
          margin-top: 24px;
          padding: 10px 24px;
          background: #272FA2;
          color: #FFFFFF;
          border: none;
          border-radius: 15px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .modal-btn:hover {
          background: #1C2278;
        }

        @media (max-width: 768px) {
          .berita-grid { grid-template-columns: 1fr; }
          .section-title { font-size: 2rem; }
          .modal-content { padding: 20px; }
          .modal-berita-photo { height: 180px; }
          .modal-title { font-size: 1.4rem; }
        }
      `}</style>

      {/* HALAMAN BERITA */}
      <section className="berita-section">
        <div className="container">
          <h2 className="section-title">Warta & Kabar Terkini</h2>
          <p className="section-subtitle">Informasi resmi seputar program, pembangunan, dan aktivitas warga Desa Padakembang</p>
          
          <div className="berita-grid">
            {beritaData.map((berita) => (
              <div key={berita.id} className="berita-card">
                {/* Gambar */}
                <div className="berita-photo">
                  <img 
                    src={berita.photo} 
                    alt={berita.title} 
                    className="berita-photo-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="berita-photo-fallback">📰</div>`;
                    }}
                  />
                </div>
                <div className="berita-body">
                  <span className="berita-category">{berita.category}</span>
                  <div className="berita-date">{berita.date}</div>
                  <h3>{berita.title}</h3>
                  <p>{berita.desc}</p>
                  <button 
                    className="berita-btn"
                    onClick={() => handleBeritaClick(berita)}
                  >
                    Baca Selengkapnya →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL DETAIL BERITA */}
      {showModal && selectedBerita && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>
            <div className="modal-body">
              <div className="modal-berita-photo">
                <img 
                  src={selectedBerita.photo} 
                  alt={selectedBerita.title} 
                  className="modal-berita-photo-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="berita-photo-fallback" style="border-radius:12px;font-size:3rem;height:100%;display:flex;align-items:center;justify-content:center;background:#F1F5F9;">📰</div>`;
                  }}
                />
              </div>
              <div className="modal-berita-date">{selectedBerita.date}</div>
              <h2 className="modal-title">{selectedBerita.title}</h2>
              <p className="modal-desc">{selectedBerita.fullContent}</p>
              <button 
                className="modal-btn"
                onClick={closeModal}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Berita;