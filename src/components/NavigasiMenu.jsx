/**
 * Komponen: NavigasiMenu.jsx
 * Fungsi: Menu navigasi bagian atas (Logo, link menu per-bagian, dan tombol ganti mode Terang/Gelap).
 */
import React from "react";
import { Sun, Moon } from "lucide-react";
import "../styles/navigasi-menu.css";

export default function NavigasiMenu({ tema, onUbahTema }) {
  return (
    <nav>
      <a href="#hero" className="nav-logo">Haikal.</a>
      <div className="nav-right">
        <ul className="nav-links">
          <li><a href="#about">Tentang</a></li>
          <li><a href="#education">Perjalanan</a></li>
          <li><a href="#organisasi">Organisasi</a></li>
          <li><a href="#projects">Proyek</a></li>
          <li><a href="#certifications">Sertifikasi</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>
        <button
          className="theme-toggle"
          onClick={onUbahTema}
          aria-label="Toggle theme"
        >
          <span className="icon" style={{ display: "flex", alignItems: "center" }}>
            {tema === "dark" ? <Moon size={16} /> : <Sun size={16} />}
          </span>
          <span>{tema === "dark" ? "Terang" : "Gelap"}</span>
        </button>
      </div>
    </nav>
  );
}
