/**
 * Komponen: AnimasiBackgroundPartikel.jsx
 * Fungsi: Menjalankan animasi partikel interaktif dan garis penghubung pada canvas latar belakang.
 */
import React, { useEffect, useRef } from "react";

export default function AnimasiBackgroundPartikel({ tema }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animFrame;
    let particles = [];

    function ambilWarnaAksen() {
      return getComputedStyle(document.documentElement)
        .getPropertyValue("--particle")
        .trim();
    }

    function sesuaikanUkuranCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    class Partikel {
      constructor() {
        this.reset(true);
      }
      reset(awal) {
        this.x = Math.random() * canvas.width;
        this.y = awal ? Math.random() * canvas.height : canvas.height + 10;
        this.ukuran = Math.random() * 1.5 + 0.5;
        this.kecepatanX = (Math.random() - 0.5) * 0.4;
        this.kecepatanY = -(Math.random() * 0.5 + 0.2);
        this.transparansi = Math.random() * 0.6 + 0.1;
        this.usia = 0;
        this.usiaMaksimal = Math.random() * 200 + 100;
      }
      update() {
        this.x += this.kecepatanX;
        this.y += this.kecepatanY;
        this.usia++;
        if (this.usia > this.usiaMaksimal || this.y < -10) this.reset(false);
      }
      gambar() {
        ctx.save();
        ctx.globalAlpha =
          this.transparansi * Math.sin((this.usia / this.usiaMaksimal) * Math.PI);
        ctx.fillStyle = ambilWarnaAksen() || "rgba(45, 212, 191, 0.5)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.ukuran, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    function inisialisasi() {
      sesuaikanUkuranCanvas();
      particles = Array.from({ length: 70 }, () => new Partikel());
      animasikan();
    }

    function animasikan() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const warna = ambilWarnaAksen() || "rgba(45, 212, 191, 0.5)";

      particles.forEach((p) => {
        p.update();
        p.gambar();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const jarak = Math.sqrt(dx * dx + dy * dy);
          if (jarak < 100) {
            ctx.save();
            ctx.globalAlpha = (1 - jarak / 100) * 0.12;
            ctx.strokeStyle = warna;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      animFrame = requestAnimationFrame(animasikan);
    }

    inisialisasi();
    window.addEventListener("resize", sesuaikanUkuranCanvas);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", sesuaikanUkuranCanvas);
    };
  }, [tema]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.6
      }}
    />
  );
}
