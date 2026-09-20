/**
 * Komponen: GaleriProyek.jsx
 * Fungsi: Menampilkan carousel proyek persis seperti versi asli.
 */
import React, { useState, useRef } from "react";
import { daftarProyek } from "../data/dataPortofolio";
import "../styles/galeri-proyek.css";

function SliderGambarProyek({ proyek, id }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const total = proyek.daftarGambar.length;

  const carouselNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const carouselPrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) carouselNext();
      else carouselPrev();
    }
  };

  return (
    <div
      className="project-carousel"
      data-carousel={id}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {proyek.daftarGambar.map((url, i) => (
          <div className="carousel-slide" key={i}>
            <img src={url} alt={`${proyek.judulProyek} ${i + 1}`} />
          </div>
        ))}
      </div>

      <div className="carousel-overlay"></div>

      <button className="carousel-btn prev" onClick={carouselPrev}>‹</button>
      <button className="carousel-btn next" onClick={carouselNext}>›</button>

      <div className="carousel-dots" id={`dots-${id}`}>
        {proyek.daftarGambar.map((_, i) => (
          <div
            key={i}
            className={`carousel-dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

      <div className="carousel-counter" id={`counter-${id}`}>
        {current + 1} / {total}
      </div>
    </div>
  );
}

export default function GaleriProyek() {
  return (
    <section id="projects">
      <p className="section-label">? Karya</p>
      <h2 className="section-title">Proyek Pilihan</h2>

      <div className="projects-list">
        {daftarProyek.map((proyek) => (
          <div
            className={`project-showcase visible ${proyek.posisiTerbalik ? "reverse" : ""}`}
            key={proyek.id}
          >
            <SliderGambarProyek proyek={proyek} id={proyek.id} />

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
                  {proyek.teksLink || "Lihat Sertifikat ?"}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
