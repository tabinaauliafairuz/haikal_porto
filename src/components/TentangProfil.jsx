/**
 * Komponen: TentangProfil.jsx
 * Fungsi: Menampilkan ringkasan profil pribadi, hitungan angka statistik (IPK, Semester, Sertifikasi),
 *         indikator keahlian (Akuntansi, Pajak, Web Dev, dll), dan info kontak cepat.
 */
import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, Landmark, MapPin, GraduationCap, Sparkles } from "lucide-react";
import { dataPribadi, daftarKeahlian } from "../data/dataPortofolio";
import "../styles/tentang-profil.css";

export default function TentangProfil() {
  const refBagian = useRef(null);
  const [sudahAnimasi, setSudahAnimasi] = useState(false);
  const [hitunganAngka, setHitunganAngka] = useState(dataPribadi.statistikAngka.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !sudahAnimasi) {
          setSudahAnimasi(true);

          dataPribadi.statistikAngka.forEach((stat, index) => {
            const target = stat.nilai;
            let saatIni = 0;
            const langkah = target / 50;
            const timer = setInterval(() => {
              saatIni = Math.min(saatIni + langkah, target);
              setHitunganAngka((prev) => {
                const baru = [...prev];
                baru[index] = saatIni;
                return baru;
              });
              if (saatIni >= target) clearInterval(timer);
            }, 20);
          });
        }
      },
      { threshold: 0.25 }
    );

    if (refBagian.current) observer.observe(refBagian.current);
    return () => observer.disconnect();
  }, [sudahAnimasi]);

  return (
    <section id="about" ref={refBagian}>
      <p className="section-label" style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
        <Sparkles size={13} /> Tentang Saya
      </p>
      <h2 className="section-title">Profil & Informasi</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>{dataPribadi.deskripsiLengkap}</p>

          <div className="stats-row">
            {dataPribadi.statistikAngka.map((stat, i) => (
              <div className="stat" key={stat.label}>
                <span className="stat-num">
                  {stat.adaKoma ? hitunganAngka[i].toFixed(2) : Math.floor(hitunganAngka[i])}
                </span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2rem" }}>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                marginBottom: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase"
              }}
            >
              Keahlian Utama
            </p>
            <div className="skills-grid">
              {daftarKeahlian.map((keahlian) => (
                <div className="skill-chip" key={keahlian.namaKeahlian}>
                  <div className="skill-name">{keahlian.namaKeahlian}</div>
                  <div className="skill-bar">
                    <div
                      className="skill-fill"
                      style={{ width: sudahAnimasi ? `${keahlian.persentase}%` : "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-info">
          <div className="info-row">
            <span className="info-icon" style={{ display: "flex", alignItems: "center" }}>
              <Mail size={18} />
            </span>
            <span>{dataPribadi.email}</span>
          </div>
          <div className="info-row">
            <span className="info-icon" style={{ display: "flex", alignItems: "center" }}>
              <Phone size={18} />
            </span>
            <span>{dataPribadi.telepon}</span>
          </div>
          <div className="info-row">
            <span className="info-icon" style={{ display: "flex", alignItems: "center" }}>
              <Landmark size={18} />
            </span>
            <span>{dataPribadi.kampus}</span>
          </div>
          <div className="info-row">
            <span className="info-icon" style={{ display: "flex", alignItems: "center" }}>
              <MapPin size={18} />
            </span>
            <span>{dataPribadi.lokasi}</span>
          </div>
          <div className="info-row">
            <span className="info-icon" style={{ display: "flex", alignItems: "center" }}>
              <GraduationCap size={18} />
            </span>
            <span>{dataPribadi.programStudi}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
