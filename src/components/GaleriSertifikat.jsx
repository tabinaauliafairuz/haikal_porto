/**
 * Komponen: GaleriSertifikat.jsx
 * Fungsi: Menampilkan galeri sertifikat persis seperti versi asli.
 */
import React, { useState } from "react";
import { daftarSertifikat } from "../data/dataPortofolio";
import ModalDetailSertifikat from "./ModalDetailSertifikat";
import "../styles/galeri-sertifikat.css";

export default function GaleriSertifikat() {
  const [selectedKey, setSelectedKey] = useState(null);

  const activeCert = selectedKey
    ? daftarSertifikat.find((c) => c.id === selectedKey)
    : null;

  return (
    <>
      <section id="certifications">
        <p className="section-label">? Pencapaian</p>
        <h2 className="section-title">Sertifikasi</h2>

        <div className="certs-gallery">
          {daftarSertifikat.map((cert) => (
            <div className="cert-gallery-card" key={cert.id}>
              <div className="cert-gallery-img-wrap">
                <img
                  src={cert.gambarPreview}
                  alt={cert.judul}
                  className="cert-gallery-img"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/800x560/161f30/2dd4bf?text=${encodeURIComponent(
                      cert.judul
                    )}`;
                  }}
                />
                <div className="cert-gallery-overlay">
                  <span className="cert-gallery-badge">{cert.labelBadge}</span>
                </div>
              </div>
              <div className="cert-gallery-body">
                <div className="cert-gallery-title">{cert.judul}</div>
                <div className="cert-gallery-issuer">{cert.penerbit}</div>
                <button
                  className="cert-detail-btn"
                  onClick={() => setSelectedKey(cert.id)}
                >
                  DETAIL
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ModalDetailSertifikat
        dataSertifikat={activeCert}
        onTutup={() => setSelectedKey(null)}
      />
    </>
  );
}
