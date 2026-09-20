/**
 * File: dataPortofolio.js
 * Fungsi: Pusat data untuk seluruh isi website portofolio.
 * Jika ingin mengubah teks, menambah sertifikat, atau menambah projek,
 * cukup edit data di file ini tanpa perlu merubah kode tampilan.
 */

// 1. DATA INFORMASI PRIBADI & PROFIL
export const dataPribadi = {
  namaLengkap: "Haikal Abdul Fattah Al Hamdi",
  jurusan: "Komputerisasi Akuntansi",
  ringkasanSingkat: "Mahasiswa D4 Komputerisasi Akuntansi dengan keahlian di bidang keuangan, perpajakan, dan pengembangan sistem berbasis teknologi.",
  deskripsiLengkap: "Saya mahasiswa semester 6 Politeknik Negeri Semarang dengan IPK 3.67. Memadukan keahlian Akuntansi Perpajakan dengan IT Development untuk membangun solusi keuangan berbasis teknologi yang relevan dan adaptif.",
  fotoProfil: "https://lh3.googleusercontent.com/d/1xqWwaD_OZ2QGgHu-H9c2TZQ2XE2nPGHH",
  email: "haikalabd565@gmail.com",
  telepon: "082289268050",
  whatsappUrl: "https://wa.me/6282289268050",
  linkedinUrl: "https://www.linkedin.com/in/haikal-63212b2a3",
  kampus: "Politeknik Negeri Semarang",
  lokasi: "Semarang, Jawa Tengah",
  programStudi: "D4 Komputerisasi Akuntansi",
  statistikAngka: [
    { label: "IPK", nilai: 3.67, adaKoma: true },
    { label: "Semester", nilai: 6 },
    { label: "Sertifikasi", nilai: 8 }
  ],
  keahlianAnimasiTeks: [
    "Perpajakan.",
    "Audit.",
    "Web Development.",
    "UI Design.",
    "Automation."
  ]
};

// 2. DAFTAR KEAHLIAN & PROGRESS BAR
export const daftarKeahlian = [
  { namaKeahlian: "Akuntansi", persentase: 90 },
  { namaKeahlian: "Perpajakan", persentase: 85 },
  { namaKeahlian: "Web Dev", persentase: 78 },
  { namaKeahlian: "UI Design", persentase: 72 },
  { namaKeahlian: "Audit", persentase: 80 },
  { namaKeahlian: "Azure AI", persentase: 65 }
];

// 3. RIWAYAT PENDIDIKAN
export const riwayatPendidikan = [
  {
    periode: "2023 - Sekarang | Semester 6",
    institusi: "Politeknik Negeri Semarang",
    jurusanDanLokasi: "D4 Komputerisasi Akuntansi | Semarang, Jawa Tengah",
    badgeNilai: "IPK 3,67",
    mataKuliah: [
      "Perancangan SIA",
      "Analisis SIA",
      "Audit",
      "Perpajakan",
      "Pemrograman Database",
      "Design Web",
      "Analisis Informasi Keuangan"
    ]
  }
];

// 4. PENGALAMAN KERJA / MAGANG
export const riwayatMagang = [
  {
    periode: "April 2024 - Sekarang",
    perusahaan: "Dapur Sehat SBS",
    posisiDanLokasi: "Magang | Tanjung Pinang, Kepulauan Riau",
    rincianTugas: [
      "Menyusun rekapitulasi gaji bulanan seluruh karyawan menggunakan spreadsheet.",
      "Pengecekan teliti data absensi, izin/sakit, potongan cashbon, dan kalkulasi biaya jabatan sebelum diserahkan ke owner."
    ]
  }
];

// 5. RIWAYAT ORGANISASI
export const riwayatOrganisasi = [
  {
    periode: "Mei 2023 - Mei 2025",
    namaOrganisasi: "Himpunan Mahasiswa Jurusan Akuntansi",
    jabatanDanLokasi: "Staff Departemen Perpustakaan | Semarang",
    rincianPeran: [
      "Bertugas sebagai Penanggung Jawab pada 5 Program Kerja selama 1 periode organisasi.",
      "Melaksanakan 22 Program Kerja dalam 1 periode kepengurusan.",
      "5 kali menjadi Master of Ceremony (MC) untuk berbagai kegiatan acara jurusan dengan peserta 200+ orang."
    ]
  },
  {
    periode: "Nov 2022 - Des 2022",
    namaOrganisasi: "Praktek Dakwah Pengenalan Masyarakat (PDPM 2023)",
    jabatanDanLokasi: "Sie Acara | Desa Jabranti, Kuningan, Jawa Barat",
    rincianPeran: [
      "Mengajar pelajaran di Sekolah Dasar dan mengaji di TPQ selama 14 hari.",
      "Melaksanakan kegiatan pembersihan desa dan pemberian santunan kepada masyarakat di Desa Jabranti."
    ]
  }
];

// 6. DAFTAR PROYEK / KARYA PORTFOLIO
export const daftarProyek = [
  {
    id: 0,
    nomorUrut: "01",
    judulProyek: "Website Development",
    kategoriTags: ["Frontend", "Backend", "Automation"],
    deskripsi: "Integrasi frontend & backend serta n8n automation untuk workflow bisnis yang efisien. Membangun antarmuka dashboard keuangan yang informatif, responsif, dan mudah digunakan.",
    daftarGambar: [
      "https://lh3.googleusercontent.com/d/16M9OiJVG7xQ22fbZ2zVbHo0XHvDXJdtF",
      "https://lh3.googleusercontent.com/d/1wF4M6HSk5NslSH8FD9t-7dPeL8OKXKn4",
      "https://lh3.googleusercontent.com/d/1Vsr7mWIY5xd0sSNBIM7Mxg4lG791sr8w",
      "https://lh3.googleusercontent.com/d/1uSq-7hqEeU-kYEC5VhZgWmRPh2UGlEjh",
      "https://lh3.googleusercontent.com/d/1AiH1wAI6gdAyBeIglBxZ7HuyQmLAMF8H",
      "https://lh3.googleusercontent.com/d/1plZg7_lntiP9n0QOjXluO6SdoTqLymFu"
    ],
    posisiTerbalik: false
  },
  {
    id: 1,
    nomorUrut: "02",
    judulProyek: "Audit Project - ATLAS",
    kategoriTags: ["Audit", "ATLAS", "Dokumentasi"],
    deskripsi: "Praktik audit menggunakan Tool ATLAS untuk dokumentasi standar profesional. Mencakup prosedur audit, pengendalian internal, dan penyusunan kertas kerja sesuai standar auditing.",
    daftarGambar: [
      "https://lh3.googleusercontent.com/d/1ruqmqz333-RnxpqsOfQY0h8gOJ6ImK6d",
      "https://lh3.googleusercontent.com/d/1g14GlhFCLeQehc7300DaocTLELjGskzl"
    ],
    posisiTerbalik: true
  },
  {
    id: 2,
    nomorUrut: "03",
    judulProyek: "Design System UI",
    kategoriTags: ["UI Design", "Design System", "Figma"],
    deskripsi: "Perancangan sistem antarmuka yang konsisten, scalable, dan reusable. Mencakup komponen library, typography system, color tokens, dan panduan penggunaan untuk tim pengembang.",
    daftarGambar: [
      "https://lh3.googleusercontent.com/d/1snvj5FQUZR5Q5Ebmhbkzut5mSJ_76JR7",
      "https://lh3.googleusercontent.com/d/1p9Ul9cjqcSSHlEWLMsu_gV_Z05-bnfNy"
    ],
    linkTautan: "https://drive.google.com/file/d/1WRcpjv2LKfDTO_YPfj5XuyU0-WX8rF8J/view?usp=sharing",
    teksLink: "Lihat Sertifikat",
    posisiTerbalik: false
  }
];

// 7. DAFTAR SERTIFIKASI
export const daftarSertifikat = [
  {
    id: "azure",
    judul: "Azure AI Fundamentals",
    penerbit: "Microsoft | 2024",
    labelBadge: "Microsoft",
    deskripsi: "Memahami konsep dasar AI - mencakup Machine Learning, Computer Vision, dan Natural Language Processing (NLP) pada ekosistem Microsoft Azure. Sertifikasi ini membuktikan kemampuan dalam mengidentifikasi dan mendeskripsikan beban kerja AI serta mempertimbangkan implikasi AI yang bertanggung jawab.",
    gambarPreview: "https://lh3.googleusercontent.com/d/1G9IOYEzVURTRzzcGX18VJFKMZCDwWpgY",
    linkGoogleDrive: "https://drive.google.com/file/d/1G9IOYEzVURTRzzcGX18VJFKMZCDwWpgY/view?usp=drive_link"
  },
  {
    id: "cftr",
    judul: "Certified Fundamental Tax Reporting",
    penerbit: "P4MI | 2024",
    labelBadge: "P4MI",
    deskripsi: "Kompeten dalam pelaporan pajak berbasis sistem digital - mencakup e-Bupot PPh 21 & Unifikasi, e-Faktur Adaptasi Coretax, serta Bukti Potong & SPT Masa sesuai standar kompetensi nasional yang diakui P4MI.",
    gambarPreview: "https://lh3.googleusercontent.com/d/16u0nGnqCPV3x9YR5i8JxLHWr7QH9JpFl",
    linkGoogleDrive: "https://drive.google.com/file/d/16u0nGnqCPV3x9YR5i8JxLHWr7QH9JpFl/view?usp=drive_link"
  },
  {
    id: "brevet",
    judul: "Brevet Pajak A & B",
    penerbit: "Smartcounting Academy | 2024",
    labelBadge: "Smartcounting Academy",
    deskripsi: "Lulus dengan rata-rata nilai 83 (A). Program Brevet Pajak A & B mencakup materi PPh Orang Pribadi, PPh Badan, PPN & PPnBM, serta tata cara pelaporan SPT secara komprehensif sesuai regulasi perpajakan Indonesia.",
    gambarPreview: "https://lh3.googleusercontent.com/d/1HG3WU16JIu5QVC5GmcsuseMzXjLjpcVC",
    linkGoogleDrive: "https://drive.google.com/file/d/1HG3WU16JIu5QVC5GmcsuseMzXjLjpcVC/view?usp=drive_link"
  },
  {
    id: "aiProductivityApi",
    judul: "AI Productivity and AI API Integration for Developers",
    penerbit: "Hacktiv8 with Google.org",
    labelBadge: "Hacktiv8",
    deskripsi: "Sertifikat pelatihan mengenai pemanfaatan AI untuk meningkatkan produktivitas serta integrasi AI API dalam pengembangan aplikasi.",
    gambarPreview: "https://lh3.googleusercontent.com/d/1HjzOI_n458i-LWacXtTK8AmbfcS7mAEi",
    linkGoogleDrive: "https://drive.google.com/file/d/14x811HvlBfFlmbaIglhoYFxrnS0LzXWL/view?usp=sharing"
  },
  {
    id: "aiIgnition",
    judul: "AI Ignition Indonesia",
    penerbit: "Sertifikat AI",
    labelBadge: "Kumpul.id",
    deskripsi: "Sertifikat program AI Ignition Indonesia.",
    gambarPreview: "https://lh3.googleusercontent.com/d/122n2vHTb_sM33fFKxB-PKgPD_Ga0SzOu",
    linkGoogleDrive: "https://drive.google.com/file/d/1ktjMjq5BAyA_s8zWTX4yRRHIU29hh92a/view?usp=sharing"
  },
  {
    id: "belajarDasarAi",
    judul: "Belajar Dasar AI",
    penerbit: "Dicoding",
    labelBadge: "Dicoding",
    deskripsi: "Sertifikat pembelajaran dasar Artificial Intelligence.",
    gambarPreview: "https://lh3.googleusercontent.com/d/1AnKz2LMiIySsszsZY6CxONErsQcMhNQf",
    linkGoogleDrive: "https://drive.google.com/file/d/1Y0bgW7nBNLiFJ0f_3WZRI2IFUz7pfZDA/view?usp=sharing"
  },
  {
    id: "aiPraktis",
    judul: "AI Praktis untuk Produktivitas",
    penerbit: "Dicoding",
    labelBadge: "Dicoding",
    deskripsi: "Sertifikat pembelajaran mengenai pemanfaatan Artificial Intelligence secara praktis untuk produktivitas.",
    gambarPreview: "https://lh3.googleusercontent.com/d/1xVgLPAH_jxBhYJBI8WtrAd3re1Btx88E",
    linkGoogleDrive: "https://drive.google.com/file/d/197kQ-DFI_cPlnxYbdWX1KQKT0ejciZ2V/view?usp=sharing"
  },
  {
    id: "generativeAi",
    judul: "Penggunaan Generative AI",
    penerbit: "Dicoding",
    labelBadge: "Dicoding",
    deskripsi: "Sertifikat pembelajaran mengenai penggunaan Generative AI.",
    gambarPreview: "https://lh3.googleusercontent.com/d/19kHFqBrU8_pH5h6C27ZQ29TW66sAyxXs",
    linkGoogleDrive: "https://drive.google.com/file/d/1Exr72VoxwyCEc-CWY8DjC2Z88ptySnuJ/view?usp=sharing"
  }
];
