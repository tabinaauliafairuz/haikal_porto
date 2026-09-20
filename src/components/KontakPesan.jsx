import React, { useState } from "react";
import { MessageCircle, Mail, Send, Check } from "lucide-react";
import { dataPribadi } from "../data/dataPortofolio";
import "../styles/contact.css";

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
          <div className="contact-card-value">Lihat Profil ?</div>
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
