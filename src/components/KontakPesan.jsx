/**
 * Komponen: KontakPesan.jsx
 * Fungsi: Menampilkan kartu saluran komunikasi (WhatsApp, LinkedIn, Email)
 *         serta form pengiriman pesan langsung dengan feedback visual.
 */
import React, { useState } from "react";
import { MessageCircle, Mail, Sparkles, Send, Check } from "lucide-react";
import { dataPribadi } from "../data/dataPortofolio";
import "../styles/kontak-pesan.css";

// SVG Khusus LinkedIn
function LinkedinIcon({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function KontakPesan() {
  const [sudahTerkirim, setSudahTerkirim] = useState(false);

  const handleKirimPesan = (e) => {
    e.preventDefault();
    setSudahTerkirim(true);

    setTimeout(() => {
      setSudahTerkirim(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <section id="contact">
      <p className="section-label" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.3rem" }}>
        <Sparkles size={13} /> Kontak
      </p>
      <h2 className="section-title">Mari Terhubung</h2>
      <p className="contact-tagline">
        Ini adalah <em>ruang dokumentasi karya</em> dan pengembangan diri saya.<br />
        Untuk kolaborasi atau kebutuhan proyek, Anda dapat menghubungi saya<br />
        melalui salah satu kanal di bawah ini - saya selalu terbuka untuk peluang baru.
      </p>

      <div className="contact-cards">
        <a
          href={dataPribadi.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="contact-card-icon" style={{ color: "var(--accent)" }}>
            <MessageCircle size={32} />
          </div>
          <div className="contact-card-label">WhatsApp</div>
          <div className="contact-card-value">{dataPribadi.telepon}</div>
        </a>

        <a
          href={dataPribadi.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="contact-card-icon" style={{ color: "var(--accent)" }}>
            <LinkedinIcon size={32} />
          </div>
          <div className="contact-card-label">LinkedIn</div>
          <div className="contact-card-value">Lihat Profil</div>
        </a>

        <a href={`mailto:${dataPribadi.email}`} className="contact-card">
          <div className="contact-card-icon" style={{ color: "var(--accent)" }}>
            <Mail size={32} />
          </div>
          <div className="contact-card-label">Email</div>
          <div className="contact-card-value">{dataPribadi.email}</div>
        </a>
      </div>

      <div className="contact-divider">atau kirim pesan langsung</div>

      <form className="contact-form" onSubmit={handleKirimPesan}>
        <div className="form-group">
          <input
            type="text"
            required
            placeholder="Nama Anda"
            className="form-input"
          />
          <input
            type="email"
            required
            placeholder="Email Anda"
            className="form-input"
          />
          <textarea
            required
            placeholder="Pesan Anda..."
            rows={4}
            className="form-textarea"
          ></textarea>
          <button
            type="submit"
            className="btn-primary"
            style={{
              justifyContent: "center",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              background: sudahTerkirim ? "#10b981" : "var(--accent)"
            }}
          >
            {sudahTerkirim ? (
              <>
                <Check size={16} /> Pesan Terkirim!
              </>
            ) : (
              <>
                <Send size={16} /> Kirim Pesan
              </>
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
