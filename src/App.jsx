import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

// ==========================================
// HALAMAN PUBLIK
// ==========================================
import Beranda from './components/pages/Beranda'
import Profil from './components/pages/profil'
import Energi from './components/pages/Energi'
import Berita from './components/pages/Berita'
import UMKM from './components/pages/UMKM'
import Layanan from './components/pages/Layanan'
import LayananForm from './components/pages/LayananForm'
import Statistik from './components/pages/Statistik'
import Aparat from './components/pages/Aparat'
import PetaWilayah from './components/pages/petawilayah'
import CCTV from './components/pages/CCTV'

// ==========================================
// LOGIN & ADMIN
// ==========================================
import Login from './components/Login'
import AdminDashboard from './components/Admin/AdminDashboard'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const location = useLocation()

  // Login dan Admin tidak memakai Navbar/Footer
  const isLoginPage = location.pathname === '/login'
  const isAdminPage = location.pathname === '/admin/dashboard'

  const isPublicPage = !isLoginPage && !isAdminPage

  return (
    <div className="App">

      {/* ==========================================
          NAVBAR - HANYA HALAMAN PUBLIK
      ========================================== */}
      {isPublicPage && (
        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      )}

      <Routes>

        {/* ==========================================
            HALAMAN PUBLIK
        ========================================== */}

        <Route
          path="/"
          element={<Beranda />}
        />

        <Route
          path="/profile"
          element={<Profil />}
        />

        <Route
          path="/berita"
          element={<Berita />}
        />

        <Route
          path="/umkm"
          element={<UMKM />}
        />

        <Route
          path="/energi"
          element={<Energi />}
        />

        <Route
          path="/layanan"
          element={<Layanan />}
        />

        <Route
          path="/layanan/form"
          element={<LayananForm />}
        />

        <Route
          path="/statistik"
          element={<Statistik />}
        />

        <Route
          path="/aparat"
          element={<Aparat />}
        />

        <Route
          path="/peta"
          element={<PetaWilayah />}
        />

        <Route
          path="/cctv"
          element={<CCTV />}
        />

        {/* ==========================================
            LOGIN
            TANPA NAVBAR & FOOTER
        ========================================== */}

        <Route
          path="/login"
          element={<Login />}
        />

        {/* ==========================================
            ADMIN
            TANPA NAVBAR & FOOTER
        ========================================== */}

        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

      </Routes>

      {/* ==========================================
          FOOTER - HANYA HALAMAN PUBLIK
      ========================================== */}
      {isPublicPage && <Footer />}

    </div>
  )
}

export default App