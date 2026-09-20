/**
 * Komponen: GaleriProyek.jsx
 * Fungsi: Menampilkan daftar proyek pilihan beserta carousel slider gambar (dengan tombol prev/next,
 *         titik indikator/dots, dan gesture swipe layar sentuh).
 */
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { daftarProyek } from "../data/dataPortofolio";
import "../styles/galeri-proyek.css";

function SliderGambarProyek({ proyek }) {
  const [indexGambarAktif, setIndexGambarAktif] = useState(0);
  const sentuhanAwalX = useRef(0);
  const totalGambar = proyek.daftarGambar.length;

  const geserSelanjutnya = () => {
    setIndexGambarAktif((prev) => (prev + 1) % totalGambar);
  };

  const geserSebelumnya = () => {
    setIndexGambarAktif((prev) => (prev - 1 + totalGambar) % totalGambar);
  };

  const mulaiSentuh = (e) => {
    sentuhanAwalX.current = e.touches[0].clientX;
  };

  const selesaiSentuh = (e) => {
    const selisih = sentuhanAwalX.current - e.changedTouches[0].clientX;
    if (Math.abs(selisih) > 40) {
      if (selisih > 0) geserSelanjutnya();
      else geserSebelumnya();
    }
  };

  return (
    <div
      className="project-carousel"
      onTouchStart={mulaiSentuh}
      onTouchEnd={selesaiSentuh}
    >
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${indexGambarAktif * 100}%)` }}
      >
        {proyek.daftarGambar.map((urlGambar, i) => (
          <div className="carousel-slide" key={i}>
            <img src={urlGambar} alt={`${proyek.judulProyek} - Slide ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      <div className="carousel-overlay"></div>

      <button className="carousel-btn prev" onClick={geserSebelumnya} aria-label="Gambar sebelumnya">
        <ChevronLeft size={20} />
      </button>
      <button className="carousel-btn next" onClick={geserSelanjutnya} aria-label="Gambar berikutnya">
        <ChevronRight size={20} />
      </button>

      <div className="carousel-dots">
        {proyek.daftarGambar.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === indexGambarAktif ? "active" : ""}`}
            onClick={() => setIndexGambarAktif(i)}
            aria-label={`Lihat gambar ke-${i + 1}`}
          />
        ))}
      </div>

      <div className="carousel-counter">
        {indexGambarAktif + 1} / {totalGambar}
      </div>
    </div>
  );
}

export default function GaleriProyek() {
  return (
    <section id="projects">
      <p className="section-label">• Karya</p>
      <h2 className="section-title">Proyek Pilihan</h2>

      <div className="projects-list">
        {daftarProyek.map((proyek) => (
          <div
            className={`project-showcase visible ${proyek.posisiTerbalik ? "reverse" : ""}`}
            key={proyek.id}
          >
            <SliderGambarProyek proyek={proyek} />

            <div className="project-info">
              <div className="project-num">{proyek.nomorUrut}</div>
              <div className="project-tag-row">
                {proyek.kategoriTags.map((tag, i) => (
                  <span className="project-tag" key={i}>{tag}</span>
                ))}
              </div>
              <div className="project-showcase-title">{proyek.judulProyek}</div>
              <div className="project-divider"></div>
              <p className="project-showcase-desc">{proyek.deskripsi}</p>
              {proyek.linkTautan && (
                <a
                  href={proyek.linkTautan}
                  target="_blank"
                  rel="noreferrer"
                  className="project-showcase-link"
                >
                  <span>{proyek.teksLink || "Lihat Projek"}</span>
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
