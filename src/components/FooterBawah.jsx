/**
 * Komponen: FooterBawah.jsx
 * Fungsi: Menampilkan copyright dan catatan kaki di bagian paling bawah halaman.
 */
import React from "react";
import { Heart, Coffee } from "lucide-react";
import { dataPribadi } from "../data/dataPortofolio";
import "../styles/kontak-pesan.css";

export default function FooterBawah() {
  const tahunSaatIni = new Date().getFullYear();

  return (
    <footer>
      <p>(c) {tahunSaatIni} {dataPribadi.namaLengkap} | {dataPribadi.lokasi}</p>
      <p style={{
        marginTop: "0.5rem",
        fontSize: "0.78rem",
        opacity: 0.7,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.35rem"
      }}>
        <span>Dibangun dengan</span>
        <Heart size={13} fill="#ef4444" color="#ef4444" />
        <span>dan</span>
        <Coffee size={14} color="var(--gold)" />
      </p>
    </footer>
  );
}
