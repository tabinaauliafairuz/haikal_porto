/**
 * Komponen Utama: App.jsx
 * Fungsi: Menggabungkan seluruh bagian/seksi halaman portofolio,
 *         serta mengatur tema utama (Dark / Light mode).
 */
import React, { useState, useEffect } from "react";
import "./styles/tema-dan-warna.css";
import "./styles/efek-animasi.css";
import AnimasiBackgroundPartikel from "./components/AnimasiBackgroundPartikel";
import NavigasiMenu from "./components/NavigasiMenu";
import BerandaHeader from "./components/BerandaHeader";
import TentangProfil from "./components/TentangProfil";
import RiwayatPendidikanPengalaman from "./components/RiwayatPendidikanPengalaman";
import GaleriProyek from "./components/GaleriProyek";
import GaleriSertifikat from "./components/GaleriSertifikat";
import KontakPesan from "./components/KontakPesan";
import FooterBawah from "./components/FooterBawah";

export default function App() {
  const [tema, setTema] = useState(() => {
    return localStorage.getItem("tema_portofolio") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", tema);
    localStorage.setItem("tema_portofolio", tema);
  }, [tema]);

  const handleUbahTema = () => {
    setTema((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <AnimasiBackgroundPartikel tema={tema} />
      <NavigasiMenu tema={tema} onUbahTema={handleUbahTema} />
      <main>
        <BerandaHeader />
        <TentangProfil />
        <RiwayatPendidikanPengalaman />
        <GaleriProyek />
        <GaleriSertifikat />
        <KontakPesan />
      </main>
      <FooterBawah />
    </>
  );
}
