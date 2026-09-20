/**
 * Komponen: KontakPesan.jsx
 * Fungsi: Kontak persis seperti versi asli.
 */
import React, { useState } from "react";
import { dataPribadi } from "../data/dataPortofolio";
import "../styles/kontak-pesan.css";

export default function KontakPesan() {
  const [btnText, setBtnText] = useState("Kirim Pesan ?");
  const [btnStyle, setBtnStyle] = useState({});

  const handleKirimPesan = (e) => {
    e.preventDefault();
    setBtnText("? Pesan Terkirim!");
    setBtnStyle({ background: "#10b981" });

    setTimeout(() => {
      setBtnText("Kirim Pesan ?");
      setBtnStyle({});
      e.target.reset();
    }, 3000);
  };

  return (
    <section id="contact">
      <p className="section-label">? Kontak</p>
      <h2 className="section-title">Mari Terhubung</h2>
      <p className="contact-tagline">
        Ini adalah <em>ruang dokumentasi karya</em> dan pengembangan diri saya.<br />
        Untuk kolaborasi atau kebutuhan proyek, Anda dapat menghubungi saya<br />
        melalui salah satu kanal di bawah ini — saya selalu terbuka untuk peluang baru.
      </p>

      <div className="contact-cards">
        <a
          href={dataPribadi.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="contact-card-icon">??</div>
          <div className="contact-card-label">WhatsApp</div>
          <div className="contact-card-value">{dataPribadi.telepon}</div>
        </a>

        <a
          href={dataPribadi.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="contact-card-icon">??</div>
          <div className="contact-card-label">LinkedIn</div>
          <div className="contact-card-value">Lihat Profil ?</div>
        </a>

        <a href={`mailto:${dataPribadi.email}`} className="contact-card">
          <div className="contact-card-icon">??</div>
          <div className="contact-card-label">Email</div>
          <div className="contact-card-value">{dataPribadi.email}</div>
        </a>
      </div>

      <div className="contact-divider">atau kirim pesan langsung</div>

      <form
        id="contactForm"
        style={{ maxWidth: "500px", margin: "0 auto" }}
        onSubmit={handleKirimPesan}
      >
        <div style={{ display: "grid", gap: "1rem" }}>
          <input
            type="text"
            required
            placeholder="Nama Anda"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              color: "var(--text)",
              padding: "0.85rem 1.2rem",
              borderRadius: "0.6rem",
              fontFamily: "inherit",
              fontSize: "0.9rem",
              outline: "none",
              transition: "border-color 0.3s"
            }}
          />
          <input
            type="email"
            required
            placeholder="Email Anda"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              color: "var(--text)",
              padding: "0.85rem 1.2rem",
              borderRadius: "0.6rem",
              fontFamily: "inherit",
              fontSize: "0.9rem",
              outline: "none",
              transition: "border-color 0.3s"
            }}
          />
          <textarea
            required
            placeholder="Pesan Anda..."
            rows={4}
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              color: "var(--text)",
              padding: "0.85rem 1.2rem",
              borderRadius: "0.6rem",
              fontFamily: "inherit",
              fontSize: "0.9rem",
              outline: "none",
              resize: "vertical",
              transition: "border-color 0.3s"
            }}
          ></textarea>
          <button
            type="submit"
            className="btn-primary"
            style={{
              border: "none",
              cursor: "pointer",
              justifyContent: "center",
              fontFamily: "inherit",
              ...btnStyle
            }}
          >
            {btnText}
          </button>
        </div>
      </form>
    </section>
  );
}
