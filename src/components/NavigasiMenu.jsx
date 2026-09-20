import React from "react";
import { Moon, Sun } from "lucide-react";
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
          id="themeToggle"
          onClick={onUbahTema}
          aria-label="Toggle theme"
        >
          <span className="icon" id="themeIcon">
            {tema === "dark" ? <Moon size={15} /> : <Sun size={15} />}
          </span>
          <span id="themeLabel">
            {tema === "dark" ? "Terang" : "Gelap"}
          </span>
        </button>
      </div>
    </nav>
  );
}
