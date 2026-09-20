/**
 * Komponen: ModalDetailSertifikat.jsx
 * Fungsi: Jendela pop-up (dialog) yang menampilkan detail lengkap sertifikat,
 *         penjelasan kompetensi, badge lembaga, dan tombol tautan ke file asli Google Drive.
 */
import React, { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import "../styles/galeri-sertifikat.css";

export default function ModalDetailSertifikat({ dataSertifikat, onTutup }) {
  useEffect(() => {
    if (!dataSertifikat) return;

    const handleTombolEsc = (e) => {
      if (e.key === "Escape") onTutup();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleTombolEsc);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleTombolEsc);
    };
  }, [dataSertifikat, onTutup]);

  if (!dataSertifikat) return null;

  return (
    <div
      className="modal-backdrop open"
      onClick={(e) => {
        if (e.target.classList.contains("modal-backdrop")) onTutup();
      }}
    >
      <div className="modal-box">
        <button className="modal-close" onClick={onTutup} aria-label="Tutup jendela">
          <X size={18} />
        </button>
        <div className="modal-img-wrap">
          <img
            src={dataSertifikat.gambarPreview}
            alt={dataSertifikat.judul}
            className="modal-img"
          />
        </div>
        <div className="modal-content">
          <div className="modal-badge">{dataSertifikat.labelBadge}</div>
          <h3 className="modal-title">{dataSertifikat.judul}</h3>
          <div className="modal-issuer">{dataSertifikat.penerbit}</div>
          <p className="modal-desc">{dataSertifikat.deskripsi}</p>
          <a
            href={dataSertifikat.linkGoogleDrive}
            target="_blank"
            rel="noreferrer"
            className="modal-link-btn"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
          >
            Lihat Sertifikat Asli <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
