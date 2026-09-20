/**
 * Komponen: BerandaHeader.jsx
 * Fungsi: Header halaman dengan urutan mobile yang rapi.
 */
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { dataPribadi } from "../data/dataPortofolio";
import "../styles/beranda-header.css";

export default function BerandaHeader() {
  const [teksKetik, setTeksKetik] = useState("");
  const [indexKalimat, setIndexKalimat] = useState(0);
  const [indexHuruf, setIndexHuruf] = useState(0);
  const [sedangMenghapus, setSedangMenghapus] = useState(false);
  const [posisiKursor, setPosisiKursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const daftarKalimat = dataPribadi.keahlianAnimasiTeks;
    const kalimatSaatIni = daftarKalimat[indexKalimat];
    let timer;

    if (!sedangMenghapus) {
      if (indexHuruf < kalimatSaatIni.length) {
        timer = setTimeout(() => {
          setTeksKetik(kalimatSaatIni.slice(0, indexHuruf + 1));
          setIndexHuruf((prev) => prev + 1);
        }, 100);
      } else {
        timer = setTimeout(() => {
          setSedangMenghapus(true);
        }, 1800);
      }
    } else {
      if (indexHuruf > 0) {
        timer = setTimeout(() => {
          setTeksKetik(kalimatSaatIni.slice(0, indexHuruf - 1));
          setIndexHuruf((prev) => prev - 1);
        }, 60);
      } else {
        setSedangMenghapus(false);
        setIndexKalimat((prev) => (prev + 1) % daftarKalimat.length);
      }
    }

    return () => clearTimeout(timer);
  }, [indexHuruf, sedangMenghapus, indexKalimat]);

  useEffect(() => {
    const handleGerakMouse = (e) => {
      const mx = (e.clientX / window.innerWidth - 0.5) * 12;
      const my = (e.clientY / window.innerHeight - 0.5) * 8;
      setPosisiKursor({ x: mx, y: my });
    };

    window.addEventListener("mousemove", handleGerakMouse);
    return () => window.removeEventListener("mousemove", handleGerakMouse);
  }, []);

  return (
    <>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <div id="hero">
        <div className="hero-text">
          <div className="hero-tag">? {dataPribadi.jurusan}</div>
          <h1 className="hero-name">
            Haikal Abdul<br />Fattah Al Hamdi
          </h1>
          <p className="hero-desc">
            {dataPribadi.ringkasanSingkat}{" "}
            <span>{teksKetik}</span>
            <span className="cursor-blink"></span>
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              Lihat Proyek <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-outline">Hubungi Saya</a>
          </div>
        </div>

        <div className="hero-img-wrap">
          <div className="hero-img-ring"></div>
          <div className="hero-img-bg"></div>
          <img
            src={dataPribadi.fotoProfil}
            alt={dataPribadi.namaLengkap}
            className="hero-img"
            style={{
              transform: `translate(${posisiKursor.x}px, ${posisiKursor.y}px)`
            }}
          />
        </div>

        <div className="scroll-hint">
          <p>Scroll</p>
          <span></span>
        </div>
      </div>
    </>
  );
}
