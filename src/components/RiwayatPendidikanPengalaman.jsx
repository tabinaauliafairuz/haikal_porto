/**
 * Komponen: RiwayatPendidikanPengalaman.jsx
 * Fungsi: Menampilkan dua garis waktu (timeline) persis seperti versi asli:
 *         1. Riwayat Pendidikan (Mata kuliah unggulan, IPK, Kampus)
 *         2. Riwayat Pengalaman Kerja / Magang
 *         3. Riwayat Aktivitas Organisasi
 */
import React from "react";
import {
  riwayatPendidikan,
  riwayatMagang,
  riwayatOrganisasi
} from "../data/dataPortofolio";
import "../styles/riwayat-pendidikan-pengalaman.css";

export default function RiwayatPendidikanPengalaman() {
  return (
    <>
      <section id="education">
        <p className="section-label">? Perjalanan</p>
        <h2 className="section-title">Pendidikan & Pengalaman</h2>
        <div className="edu-exp-grid">
          {/* Kolom Kiri: Riwayat Pendidikan */}
          <div>
            <div className="timeline-col-header">
              <div className="timeline-col-icon">??</div>
              <div>
                <div className="timeline-col-title">Pendidikan</div>
                <div className="timeline-col-subtitle">Academic Background</div>
              </div>
            </div>

            {riwayatPendidikan.map((edu, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <div className="timeline-period">{edu.periode}</div>
                  <div className="timeline-inst">{edu.institusi}</div>
                  <div className="timeline-loc">{edu.jurusanDanLokasi}</div>
                  {edu.badgeNilai && (
                    <div className="timeline-ipk">? {edu.badgeNilai}</div>
                  )}
                  <div className="timeline-courses">
                    {edu.mataKuliah.map((mk, i) => (
                      <span className="timeline-course-tag" key={i}>{mk}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Kolom Kanan: Riwayat Magang */}
          <div>
            <div className="timeline-col-header">
              <div className="timeline-col-icon">??</div>
              <div>
                <div className="timeline-col-title">Pengalaman</div>
                <div className="timeline-col-subtitle">Work Experience</div>
              </div>
            </div>

            {riwayatMagang.map((magang, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <div className="timeline-period">{magang.periode}</div>
                  <div className="timeline-inst">{magang.perusahaan}</div>
                  <div className="timeline-loc">{magang.posisiDanLokasi}</div>
                  <ul className="timeline-bullet-list">
                    {magang.rincianTugas.map((tugas, i) => (
                      <li key={i}>{tugas}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bagian Riwayat Organisasi */}
      <section id="organisasi">
        <p className="section-label">? Organisasi</p>
        <h2 className="section-title">Pengalaman Organisasi</h2>
        <div>
          {riwayatOrganisasi.map((org, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-period">{org.periode}</div>
                <div className="timeline-inst">{org.namaOrganisasi}</div>
                <div className="timeline-loc">{org.jabatanDanLokasi}</div>
                <ul className="timeline-bullet-list">
                  {org.rincianPeran.map((peran, i) => (
                    <li key={i}>{peran}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
