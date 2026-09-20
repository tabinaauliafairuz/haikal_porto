/**
 * Komponen: ModalDetailSertifikat.jsx
 * Fungsi: Jendela pop-up detail sertifikat persis seperti versi asli.
 */
import React, { useEffect } from "react";
import "../styles/galeri-sertifikat.css";

export default function ModalDetailSertifikat({ dataSertifikat, onTutup }) {
  useEffect(() => {
    if (!dataSertifikat) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onTutup();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dataSertifikat, onTutup]);

  if (!dataSertifikat) return null;

  return (
    <div
      id="certModal"
      className="modal-backdrop open"
      onClick={(e) => {
        if (e.target.id === "certModal") onTutup();
      }}
    >
      <div className="modal-box">
        <button className="modal-close" onClick={onTutup}>?</button>
        <div className="modal-img-wrap">
          <img
            id="modalImg"
            src={dataSertifikat.gambarPreview}
            alt={dataSertifikat.judul}
            className="modal-img"
          />
        </div>
        <div className="modal-content">
          <div className="modal-badge" id="modalBadge">{dataSertifikat.labelBadge}</div>
          <h3 className="modal-title" id="modalTitle">{dataSertifikat.judul}</h3>
          <div className="modal-issuer" id="modalIssuer">{dataSertifikat.penerbit}</div>
          <p className="modal-desc" id="modalDesc">{dataSertifikat.deskripsi}</p>
          <a
            id="modalLink"
            href={dataSertifikat.linkGoogleDrive}
            target="_blank"
            rel="noreferrer"
            className="modal-link-btn"
          >
            Lihat Sertifikat Asli ?
          </a>
        </div>
      </div>
    </div>
  );
}
