/**
 * Komponen: GaleriSertifikat.jsx
 * Fungsi: Menampilkan grid kartu galeri seluruh sertifikasi yang dimiliki,
 *         serta mengontrol pembukaan modal popup detail sertifikat.
 */
import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { daftarSertifikat } from "../data/dataPortofolio";
import ModalDetailSertifikat from "./ModalDetailSertifikat";
import "../styles/galeri-sertifikat.css";

export default function GaleriSertifikat() {
  const [sertifikatDipilih, setSertifikatDipilih] = useState(null);

  return (
    <>
      <section id="certifications">
        <p className="section-label" style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
          <Sparkles size={13} /> Pencapaian
        </p>
        <h2 className="section-title">Sertifikasi</h2>

        <div className="certs-gallery">
          {daftarSertifikat.map((item) => (
            <div className="cert-gallery-card" key={item.id}>
              <div className="cert-gallery-img-wrap">
                <img
                  src={item.gambarPreview}
                  alt={item.judul}
                  className="cert-gallery-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/800x560/161f30/2dd4bf?text=${encodeURIComponent(
                      item.judul
                    )}`;
                  }}
                />
                <div className="cert-gallery-overlay">
                  <span className="cert-gallery-badge">{item.labelBadge}</span>
                </div>
              </div>
              <div className="cert-gallery-body">
                <div className="cert-gallery-title">{item.judul}</div>
                <div className="cert-gallery-issuer">{item.penerbit}</div>
                <button
                  className="cert-detail-btn"
                  onClick={() => setSertifikatDipilih(item)}
                >
                  DETAIL
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ModalDetailSertifikat
        dataSertifikat={sertifikatDipilih}
        onTutup={() => setSertifikatDipilih(null)}
      />
    </>
  );
}
