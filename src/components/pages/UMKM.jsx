// src/components/pages/UMKM.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const UMKM = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const umkmData = [
    { 
      id: 1, 
      name: 'Kerajinan Bambu', 
      desc: 'Anyaman bambu berkualitas tinggi dengan motif tradisional buatan pengrajin lokal.', 
      photo: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1637804174/ulnpzfptenxaix6h2wnq.jpg',
      detail: 'Kerajinan bambu ini dibuat oleh pengrajin lokal dengan teknik turun-temurun. Setiap produk memiliki kualitas terbaik dan desain yang ramah lingkungan.',
      price: 'Rp 50.000 - Rp 200.000',
      category: 'Kerajinan'
    },
    { 
      id: 2, 
      name: 'Kopi Arabika Desa', 
      desc: 'Kopi arabika asli pegunungan dengan cita rasa khas dan proses pengolahan organik.', 
      photo: 'https://desamerdeka.id/wp-content/uploads/2024/08/kopi-kljpg-20210706080837.webp',
      detail: 'Kopi arabika ditanam di dataran tinggi lereng Galunggung dengan proses pengolahan alami tanpa bahan kimia, menghasilkan rasa yang nikmat dan beraroma harum.',
      price: 'Rp 35.000 - Rp 85.000',
      category: 'Minuman'
    },
    { 
      id: 3, 
      name: 'Batik Tulis Khas', 
      desc: 'Batik tulis motif alam Padakembang menggunakan pewarna alami tumbuhan lokal.', 
      photo: 'https://www.rukita.co/stories/wp-content/uploads/2022/05/cara-membedakan-batik-tulis-dan-batik-print.jpeg',
      detail: 'Batik tulis dibuat manual oleh perajin berpengalaman dengan filosofi kearifan lokal dan motif flora fauna khas Tasikmalaya.',
      price: 'Rp 150.000 - Rp 500.000',
      category: 'Pakaian'
    },
    { 
      id: 4, 
      name: 'Madu Hutan Alami', 
      desc: 'Madu murni tanpa campuran yang dipanen langsung dari hutan lindung desa.', 
      photo: 'https://asset.kompas.com/crops/uatp9R4X9gxvQitaVPQfvJqNhzE=/65x38:945x625/750x500/data/photo/2018/10/16/3894874319.jpg',
      detail: 'Madu hutan murni diambil dari lebah hutan liar, kaya antioksidan dan memiliki khasiat tinggi untuk kesehatan tubuh.',
      price: 'Rp 75.000 - Rp 150.000',
      category: 'Makanan Sehat'
    },
    { 
      id: 5, 
      name: 'Keripik Singkong Renyah', 
      desc: 'Keripik singkong gurih dengan resep bumbu rempah pilihan khas desa.', 
      photo: 'https://kehamilansehat.com/wp-content/uploads/2025/09/Kalori-Keripik-Singkong_-Apakah-Aman-Dikonsumsi-untuk-Ibu-Hamil.png',
      detail: 'Keripik singkong diproduksi higienis dari hasil kebun petani desa tanpa bahan pengawet.',
      price: 'Rp 15.000 - Rp 30.000',
      category: 'Kuliner'
    },
    { 
      id: 6, 
      name: 'Tenun Ikat Tradisional', 
      desc: 'Kain tenun tradisional handmade dengan ketelitian tenun berkualitas tinggi.', 
      photo: 'https://asset.kompas.com/crops/8RBHzapUGJ1f3jk0JicWj7Zzto4=/0x0:1000x667/750x500/data/photo/2018/05/30/822670728.jpg',
      detail: 'Tenun ikat dibuat secara tradisional menggunakan alat tenun bukan mesin (ATBM) dengan motif geometris eksklusif.',
      price: 'Rp 250.000 - Rp 1.000.000',
      category: 'Pakaian'
    },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setSelectedProduct(null), 300);
  };

  const handleWhatsApp = (product) => {
    const message = `Halo, saya tertarik dengan produk ${product.name} dari Desa Padakembang. Apakah masih tersedia?`;
    const url = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Katalog UMKM & Produk Lokal | Desa Padakembang</title>
        <meta name="description" content="Jelajahi produk unggulan UMKM Desa Padakembang: kerajinan bambu, kopi arabika pegunungan, batik tulis alami, madu hutan, dan kuliner khas." />
        <meta name="keywords" content="UMKM Desa Padakembang, Produk Unggulan Padakembang, Kopi Padakembang, Kerajinan Bambu Tasikmalaya, Batik Padakembang" />
      </Helmet>
      <style>{`
        .umkm-page-section {
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

        .umkm-product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 28px;
        }

        .umkm-product-card {
          background: #FFFFFF;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid #E2E8F0;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04);
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }
        .umkm-product-card:hover {
          transform: translateY(-3px);
          border-color: #CDCEEA;
          box-shadow: 0 12px 28px -4px rgba(39, 47, 162, 0.08);
        }

        .umkm-product-photo {
          width: 100%;
          height: 200px;
          background: #F1F5F9;
          position: relative;
          overflow: hidden;
        }
        .umkm-product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .umkm-product-card:hover .umkm-product-img {
          transform: scale(1.03);
        }
        .umkm-product-fallback {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          font-size: 3rem;
          background: #F1F5F9;
          color: #94A3B8;
        }

        .umkm-product-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .umkm-badge-tag {
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

        .umkm-product-card h3 {
          margin: 0 0 8px 0;
          font-size: 1.2rem;
          font-weight: 700;
          color: #0F172A;
          letter-spacing: -0.01em;
        }
        .umkm-product-card p {
          color: #475569;
          font-size: 0.92rem;
          line-height: 1.6;
          margin-bottom: 20px;
          flex: 1;
        }

        .umkm-product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
          border-top: 1px solid #F1F5F9;
        }

        .umkm-price-hint {
          font-weight: 700;
          color: #272FA2;
          font-size: 0.95rem;
        }

        .umkm-view-btn {
          color: #272FA2;
          font-weight: 600;
          font-size: 0.88rem;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        /* Modal Details */
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
          max-width: 580px;
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

        .modal-umkm-photo {
          width: 100%;
          height: 240px;
          border-radius: 14px;
          overflow: hidden;
          margin-bottom: 20px;
        }
        .modal-umkm-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .modal-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #0F172A;
          margin: 0 0 6px 0;
          letter-spacing: -0.02em;
        }
        .modal-desc {
          color: #475569;
          line-height: 1.7;
          font-size: 0.95rem;
          margin: 14px 0 20px;
        }
        .modal-price-box {
          background: #F8FAFC;
          padding: 14px 18px;
          border-radius: 12px;
          border: 1px solid #E2E8F0;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .price-label {
          color: #64748B;
          font-size: 0.88rem;
          font-weight: 500;
        }
        .price-value {
          color: #272FA2;
          font-size: 1.15rem;
          font-weight: 800;
        }

        .modal-actions {
          display: flex;
          gap: 12px;
        }
        .modal-btn-wa {
          background: #53AA4B;
          color: #FFFFFF;
          padding: 12px 24px;
          border-radius: 15px;
          font-weight: 600;
          font-size: 0.92rem;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          flex: 1;
        }
        .modal-btn-wa:hover {
          background: #3F8638;
        }

        .modal-btn-close {
          background: #F1F5F9;
          color: #475569;
          padding: 12px 20px;
          border-radius: 15px;
          font-weight: 600;
          font-size: 0.92rem;
          border: 1px solid #E2E8F0;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .modal-btn-close:hover {
          background: #E2E8F0;
        }

        @media (max-width: 768px) {
          .umkm-product-grid { grid-template-columns: 1fr; }
          .section-title { font-size: 2rem; }
          .modal-content { padding: 20px; }
          .modal-actions { flex-direction: column; }
        }
      `}</style>

      {/* HALAMAN UMKM */}
      <section className="umkm-page-section">
        <div className="container">
          <h2 className="section-title">Produk & Sentra UMKM</h2>
          <p className="section-subtitle">Dukung produk lokal unggulan hasil karya warga dan kelompok usaha Desa Padakembang</p>
          
          <div className="umkm-product-grid">
            {umkmData.map((umkm) => (
              <div 
                key={umkm.id} 
                className="umkm-product-card"
                onClick={() => handleProductClick(umkm)}
              >
                <div className="umkm-product-photo">
                  <img 
                    src={umkm.photo} 
                    alt={umkm.name} 
                    className="umkm-product-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="umkm-product-fallback">📦</div>`;
                    }}
                  />
                </div>
                <div className="umkm-product-body">
                  <span className="umkm-badge-tag">{umkm.category}</span>
                  <h3>{umkm.name}</h3>
                  <p>{umkm.desc}</p>
                  <div className="umkm-product-footer">
                    <span className="umkm-price-hint">{umkm.price}</span>
                    <span className="umkm-view-btn">Lihat Detail →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL DETAIL PRODUK */}
      {showModal && selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>
            <div className="modal-body">
              <div className="modal-umkm-photo">
                <img 
                  src={selectedProduct.photo} 
                  alt={selectedProduct.name} 
                  className="modal-umkm-photo-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="umkm-product-fallback" style="border-radius:12px;font-size:3rem;height:100%;display:flex;align-items:center;justify-content:center;background:#F1F5F9;">📦</div>`;
                  }}
                />
              </div>
              <span className="umkm-badge-tag">{selectedProduct.category}</span>
              <h2 className="modal-title">{selectedProduct.name}</h2>
              <p className="modal-desc">{selectedProduct.detail}</p>
              
              <div className="modal-price-box">
                <span className="price-label">Kisaran Harga:</span>
                <span className="price-value">{selectedProduct.price}</span>
              </div>

              <div className="modal-actions">
                <button 
                  className="modal-btn-wa"
                  onClick={() => handleWhatsApp(selectedProduct)}
                >
                  Hubungi Penjual via WhatsApp
                </button>
                <button 
                  className="modal-btn-close"
                  onClick={closeModal}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UMKM;