'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiDownload, FiExternalLink, FiEye, FiAward } from 'react-icons/fi'
import HeaderBab from '@/components/HeaderBab'

// ===== DATA SERTIFIKAT =====
const certificates = [
  // Seminar / Workshop (gambar)
  { id: 101, title: 'Sertifikat Seminar / Pelatihan 1', issuer: 'Penyelenggara Seminar', year: '2025', category: 'Seminar', file: '/sertifikat/image1.png', isImage: true },
  { id: 102, title: 'Sertifikat Seminar / Pelatihan 2', issuer: 'Penyelenggara Seminar', year: '2025', category: 'Seminar', file: '/sertifikat/image2.png', isImage: true },
  { id: 103, title: 'Sertifikat Seminar / Pelatihan 3', issuer: 'Penyelenggara Seminar', year: '2025', category: 'Seminar', file: '/sertifikat/image3.png', isImage: true },
  { id: 104, title: 'Sertifikat Seminar / Pelatihan 4', issuer: 'Penyelenggara Seminar', year: '2025', category: 'Seminar', file: '/sertifikat/image4.png', isImage: true },
  { id: 105, title: 'Sertifikat Seminar / Pelatihan 5', issuer: 'Penyelenggara Seminar', year: '2025', category: 'Seminar', file: '/sertifikat/image5.png', isImage: true },
  { id: 106, title: 'Sertifikat Seminar / Pelatihan 6', issuer: 'Penyelenggara Seminar', year: '2025', category: 'Seminar', file: '/sertifikat/image6.png', isImage: true },
  { id: 107, title: 'Sertifikat Seminar / Pelatihan 7', issuer: 'Penyelenggara Seminar', year: '2025', category: 'Seminar', file: '/sertifikat/image7.png', isImage: true },
  { id: 108, title: 'Sertifikat Workshop (6 Nov 2025) — Halaman 1', issuer: 'Penyelenggara Kegiatan', year: '2025', category: 'Seminar', file: '/sertifikat/img20251106_12115057.jpg', isImage: true },
  { id: 109, title: 'Sertifikat Workshop (6 Nov 2025) — Halaman 2', issuer: 'Penyelenggara Kegiatan', year: '2025', category: 'Seminar', file: '/sertifikat/img20251106_12115057_0001.jpg', isImage: true },
  // PDF Digital Talent & lainnya
  { id: 1, title: 'AI Engineer For Milenial', issuer: 'Digital Talent Scholarship', year: '2025', category: 'AI & Data', file: '/sertifikat/Sertifikat_RIZKI HABIBI_AI Engineer For Milenial.pdf' },
  { id: 2, title: 'Junior Web Developer', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Web Development', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Junior Web Developer.pdf' },
  { id: 3, title: 'Introduction to Cyber Security and Career Awareness', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Cyber Security', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Introduction to Cyber Security and Career Awareness.pdf' },
  { id: 4, title: 'Introduction To Cloud Computing', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Cloud', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Introduction To Cloud Computing.pdf' },
  { id: 5, title: 'Ethical Hacker For Dummies', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Cyber Security', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Ethical Hacker For Dummies.pdf' },
  { id: 6, title: 'Dasar-Dasar Implementasi Kecerdasan Artifisial', issuer: 'Digital Talent Scholarship', year: '2025', category: 'AI & Data', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Dasar-Dasar Implementasi Kecerdasan Artifisial.pdf' },
  { id: 7, title: 'Digital Marketing — Membangun Strategi untuk Kesuksesan Bisnis Online', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Digital Marketing', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Digital Marketing _ Membangun Strategi untuk Kesuksesan Bisnis Online.pdf' },
  { id: 8, title: 'Generative AI untuk Pendidikan', issuer: 'Digital Talent Scholarship', year: '2025', category: 'AI & Data', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Generative AI untuk Pendidikan.pdf' },
  { id: 9, title: 'Pengenalan Data Science dan Pemanfaatannya di Berbagai Sektor', issuer: 'Digital Talent Scholarship', year: '2025', category: 'AI & Data', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Pengenalan Data Science dan Pemanfaatannya di Berbagai Sektor.pdf' },
  { id: 10, title: 'Pengenalan Internet of Things — Konsep, Teknologi, dan Aplikasinya', issuer: 'Digital Talent Scholarship', year: '2025', category: 'IoT', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Pengenalan Internet of Things_ Konsep, Teknologi, dan Aplikasinya.pdf' },
  { id: 11, title: 'Konsep Pemrograman', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Programming', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Konsep Pemrograman.pdf' },
  { id: 12, title: 'Computational Thinking — Cara Berpikir Logis (Jenjang SMA)', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Programming', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Computational Thinking _ Cara Berpikir Logis untuk Mengatasi Masalah (Jenjang SMA).pdf' },
  { id: 13, title: 'Membangun Lab Virtual & Dasar Linux', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Cyber Security', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Membangun Lab Virtual & Dasar Linux.pdf' },
  { id: 14, title: 'Menerapkan Rekayasa Prompt dengan Azure OpenAI Service', issuer: 'Microsoft Learn', year: '2025', category: 'AI & Data', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Menerapkan rekayasa prompt dengan Azure OpenAI Service.pdf' },
  { id: 15, title: 'Social Media Management untuk Brand Digital', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Digital Marketing', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Social Media Management untuk Brand Digital.pdf' },
  { id: 16, title: 'Copywriting AI Untuk Iklan Digital', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Digital Marketing', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Copywriting AI Untuk Iklan Digital.pdf' },
  { id: 17, title: 'Image Recognition dan Speech Recognition', issuer: 'Digital Talent Scholarship', year: '2025', category: 'AI & Data', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Image Recognition dan Speech Recognition Mengubah Interaksi Kita dengan Teknologi.pdf' },
  { id: 18, title: 'Dasar-dasar Keamanan AI', issuer: 'Digital Talent Scholarship', year: '2025', category: 'AI & Data', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Dasar-dasar Keamanan AI.pdf' },
  { id: 19, title: 'Wawasan Karir dalam Bidang Data Analytics', issuer: 'Digital Talent Scholarship', year: '2025', category: 'AI & Data', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Wawasan Karir dalam Bidang Data Analytics.pdf' },
  { id: 20, title: 'Memahami Aspek Pengembangan Produk AI', issuer: 'Digital Talent Scholarship', year: '2025', category: 'AI & Data', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Memahami Aspek Pengembangan Produk AI.pdf' },
  { id: 21, title: 'Menskalakan AI di Organisasi Anda', issuer: 'Digital Talent Scholarship', year: '2025', category: 'AI & Data', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Menskalakan AI di Organisasi Anda.pdf' },
  { id: 22, title: 'Aktualisasi Falsafah Torang Samua Basudara', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Soft Skills', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Aktualisasi Falsafah Torang Samua Basudara dalam Menjaga Kerukunan di Era Digital.pdf' },
  { id: 23, title: 'Ancaman Pembobolan Akun Pribadi dan Pencegahannya', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Cyber Security', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Ancaman Pembobolan Akun Pribadi dan Pencegahannya.pdf' },
  { id: 24, title: 'Branding Institusi Untuk Instansi Pemerintah', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Digital Marketing', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Branding Institusi Untuk Instansi Pemerintah.pdf' },
  { id: 25, title: 'Cara Mudah Menggunakan Aplikasi Perkantoran Online', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Soft Skills', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Cara Mudah Menggunakan Aplikasi Perkantoran Online.pdf' },
  { id: 26, title: 'Character Building Tangkal Bahaya Judi Online', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Soft Skills', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Character Building Tangkal Bahaya Judi Online.pdf' },
  { id: 27, title: 'Computational Thinking — Cara Berpikir Logis (Jenjang SD)', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Programming', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Computational Thinking _ Cara Berpikir Logis untuk Mengatasi Masalah (Jenjang SD).pdf' },
  { id: 28, title: 'Computational Thinking — Cara Berpikir Logis (Jenjang SMP)', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Programming', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Computational Thinking _ Cara Berpikir Logis untuk Mengatasi Masalah (Jenjang SMP).pdf' },
  { id: 29, title: 'Dampak Negatif Judi Online Bagi Masyarakat', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Soft Skills', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Dampak Negatif Judi Online Bagi Masyarakat.pdf' },
  { id: 30, title: 'Dampak Teknologi Digital bagi UMKM', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Digital Marketing', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Dampak Teknologi Digital bagi UMKM.pdf' },
  { id: 31, title: 'Digital Wellness — Mencapai Keseimbangan Hidup di Era Teknologi', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Soft Skills', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Digital Wellness _ Mencapai keseimbangan hidup di era teknologi yang terus berkembang.pdf' },
  { id: 32, title: 'Etis Bermedia Sosial Berbasis Nilai Lokal', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Soft Skills', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Etis Bermedia Sosial Berbasis Nilai Lokal.pdf' },
  { id: 33, title: 'Fondasi Penulisan Berita', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Soft Skills', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Fondasi Penulisan Berita.pdf' },
  { id: 34, title: 'Jejak Digital — Warisan yang Anda Tinggalkan di Dunia Maya', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Cyber Security', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Jejak Digital_ Warisan yang Anda Tinggalkan di Dunia Maya.pdf' },
  { id: 35, title: 'Kenali Tanda-Tandanya dan Lindungi Data Pribadi', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Cyber Security', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Kenali Tanda-Tandanya dan Lindungi Data Pribadi (1).pdf' },
  { id: 36, title: 'Komunikasi Krisis Untuk ASN', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Soft Skills', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Komunikasi Krisis Untuk ASN.pdf' },
  { id: 37, title: 'Komunikasi Strategis Untuk ASN', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Soft Skills', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Komunikasi Strategis Untuk ASN.pdf' },
  { id: 38, title: 'Media Digital bagi Guru / Tenaga Kependidikan', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Soft Skills', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Media Digital bagi Guru_Tenaga Kependidikan.pdf' },
  { id: 39, title: 'Memahami Perbedaan Misinformasi, Disinformasi, dan Malinformasi', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Soft Skills', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Memahami Perbedaan Misinformasi, Disinformasi, dan Malinformasi.pdf' },
  { id: 40, title: 'Membangun Personal Branding di Media Sosial', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Digital Marketing', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Membangun Personal Branding di Media Sosial.pdf' },
  { id: 41, title: 'Mengamankan Diri dari Kejahatan Siber', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Cyber Security', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Mengamankan Diri dari Kejahatan Siber.pdf' },
  { id: 42, title: 'Menjadi Pengguna Media Sosial yang Bijak dan Kritis', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Soft Skills', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Menjadi Pengguna Media Sosial yang Bijak dan Kritis.pdf' },
  { id: 43, title: 'Mindset Digital — Pola Pikir Bertumbuh (Growth Mindset)', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Soft Skills', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Mindset Digital 1_ Pola Pikir Bertumbuh (Growth Mindset).pdf' },
  { id: 44, title: 'Optimasi Instagram dengan Insight', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Digital Marketing', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Optimasi Instagram dengan Insight.pdf' },
  { id: 45, title: "Parent's Guide for Internet Safety", issuer: 'Digital Talent Scholarship', year: '2025', category: 'Cyber Security', file: "/sertifikat/Sertifikat_RIZKI HABIBI_Parent's Guide for Internet Safety.pdf" },
  { id: 46, title: 'Pemanfaatan Aplikasi Chat Bagi Wirausahawan Pemula', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Digital Marketing', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Pemanfaatan Aplikasi Chat Bagi Wirausahawan Pemula.pdf' },
  { id: 47, title: 'Pemanfaatan Aplikasi Editing Video untuk Konten Produk', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Digital Marketing', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Pemanfaatan Aplikasi Editing Video untuk Konten Produk.pdf' },
  { id: 48, title: 'Pengantar Mindset Digital — Mengubah Masa Depan Dengan Pola Pikir Digital', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Soft Skills', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Pengantar Mindset Digital 1 _ Mengubah Masa Depan Anda Dengan Pola Pikir Digital.pdf' },
  { id: 49, title: 'Pengantar Sistem Pemerintahan Berbasis Elektronik (SPBE)', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Soft Skills', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Pengantar Sistem Pemerintahan Berbasis Elektronik (SPBE).pdf' },
  { id: 50, title: 'Pengenalan Hak Atas Kekayaan Intelektual (HAKI)', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Soft Skills', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Pengenalan Hak Atas Kekayaan Intelektual (HAKI) Dalam Perlindungan Karya dan Inovasi Digital.pdf' },
  { id: 51, title: 'Pengenalan Koding Visual untuk Anak', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Programming', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Pengenalan Koding Visual untuk Anak.pdf' },
  { id: 52, title: 'Pengenalan Kolaborasi Menggunakan Tools Cloud', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Cloud', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Pengenalan Kolaborasi Menggunakan Tools Gratis Penyimpanan berbasis Cloud.pdf' },
  { id: 53, title: 'Pengenalan Produk Digital dan Desain Grafis', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Digital Marketing', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Pengenalan Produk Digital dan Desain Grafis Bagi Angkatan Kerja Muda.pdf' },
  { id: 54, title: 'Pentingnya Izin Usaha Bagi UMKM', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Soft Skills', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Pentingnya izin Usaha Bagi UMKM.pdf' },
  { id: 55, title: 'Pentingnya Menjaga Keamanan Digital', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Cyber Security', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Pentingnya Menjaga Keamanan Digital_ Perlindungan Diri di Dunia Maya.pdf' },
  { id: 56, title: 'Peran ASN Dalam Membangun Citra Lembaga Melalui Konten Kreatif', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Soft Skills', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Peran ASN Dalam Membangun Citra Lembaga Melalui Konten Kreatif.pdf' },
  { id: 57, title: 'Pertahanan Digital 101 untuk Individu dan UMKM', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Cyber Security', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Pertahanan Digital 101 untuk Individu dan UMKM_ Melindungi Dunia Daring Anda.pdf' },
  { id: 58, title: 'Prinsip-Prinsip Video Content Creator', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Digital Marketing', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Prinsip Prinsip Video Content Creator.pdf' },
  { id: 59, title: 'Public Speaking bagi Penyandang Disabilitas Muda', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Soft Skills', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Public Speaking bagi Penyandang Disabilitas Muda.pdf' },
  { id: 60, title: 'Seberapa Aman Informasi Anda dari Ancaman Digital', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Cyber Security', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Seberapa Aman Informasi Anda dari Ancaman Digital.pdf' },
  { id: 61, title: 'Seberapa Penting Menjaga Data Pribadi dan Pelindungannya', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Cyber Security', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Seberapa Penting Menjaga Data Pribadi dan Pelindungannya.pdf' },
  { id: 62, title: 'Seni Public Speaking Untuk Pemimpin Muda Berkarakter', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Soft Skills', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Seni Public Speaking Untuk Pemimpin Muda Berkarakter.pdf' },
  { id: 63, title: 'Smart Village — Panduan Membangun Ekonomi Kreatif Desa', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Soft Skills', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Smart Village_ Panduan Membangun Ekonomi Kreatif Desa.pdf' },
  { id: 64, title: 'Strategi Penggunaan CRM untuk UMKM', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Digital Marketing', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Strategi Penggunaan Customer Relationship Management untuk UMKM.pdf' },
  { id: 65, title: 'Tips Melindungi Diri Dari Ancaman Phising dan Malware', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Cyber Security', file: '/sertifikat/Sertifikat_RIZKI HABIBI_Tips Melindungi Diri Dari Ancaman Phising dan Malware di Era Digital.pdf' },
  { id: 66, title: 'What is Business Pitching', issuer: 'Digital Talent Scholarship', year: '2025', category: 'Soft Skills', file: '/sertifikat/Sertifikat_RIZKI HABIBI_What is Business Pitching.pdf' },
]

const categories = ['Semua', 'Seminar', 'AI & Data', 'Web Development', 'Cyber Security', 'Cloud', 'Digital Marketing', 'Programming', 'IoT', 'Soft Skills']

const catColor: Record<string, { bg: string; border: string; text: string }> = {
  'Seminar': { bg: '#f5f0ff', border: '#8b5cf6', text: '#6d28d9' },
  'AI & Data': { bg: '#ede9fe', border: '#7c3aed', text: '#5b21b6' },
  'Web Development': { bg: '#f0fdf4', border: '#16a34a', text: '#15803d' },
  'Cyber Security': { bg: '#fff1f2', border: '#e11d48', text: '#be123c' },
  'Cloud': { bg: '#eff6ff', border: '#2563eb', text: '#1d4ed8' },
  'Digital Marketing': { bg: '#fff0f6', border: '#db2777', text: '#9d174d' },
  'Programming': { bg: '#fefce8', border: '#ca8a04', text: '#92400e' },
  'IoT': { bg: '#eef2ff', border: '#4f46e5', text: '#3730a3' },
  'Soft Skills': { bg: '#ecfdf5', border: '#059669', text: '#065f46' },
}

const catIcon: Record<string, string> = {
  'Seminar': '🎤', 'AI & Data': '🤖', 'Web Development': '💻',
  'Cyber Security': '🛡️', 'Cloud': '☁️', 'Digital Marketing': '📣',
  'Programming': '⌨️', 'IoT': '📡', 'Soft Skills': '🌱',
}

// BNSP data
const bnspData = {
  certNumber: '62090 2513 3 0156814 2025',
  regNumber: 'TIK 1565 41503 2025',
  title: 'Pengembang Web Pratama — Junior Web Developer',
  issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
  lsp: 'LSP Teknologi Digital',
  date: '03 November 2025',
  location: 'Yogyakarta',
  validFor: '3 Tahun',
  units: [
    { code: 'J.620100.005.02', title: 'Mengimplementasikan User Interface' },
    { code: 'J.620100.010.01', title: 'Menerapkan Perintah Eksekusi Bahasa Pemrograman' },
    { code: 'J.620100.015.01', title: 'Menyusun Fungsi & File Pemrograman Secara Rapi' },
    { code: 'J.620100.016.01', title: 'Menulis Kode Sesuai Guidelines & Best Practices' },
    { code: 'J.620100.017.02', title: 'Mengimplementasikan Pemrograman Terstruktur' },
    { code: 'J.620100.019.02', title: 'Menggunakan Library atau Komponen Pre-Existing' },
  ],
}

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [visibleCount, setVisibleCount] = useState(12)
  const [dipilih, setDipilih] = useState<typeof certificates[0] | null>(null)
  const [bnspOpen, setBnspOpen] = useState(false)

  const filtered = activeCategory === 'Semua'
    ? certificates
    : certificates.filter(c => c.category === activeCategory)
  const visible = filtered.slice(0, visibleCount)

  const counts: Record<string, number> = {}
  categories.forEach(c => {
    counts[c] = c === 'Semua' ? certificates.length : certificates.filter(x => x.category === c).length
  })

  const col = (cat: string) => catColor[cat] || { bg: '#f9f9f9', border: '#0a0a0a', text: '#0a0a0a' }

  return (
    <section id="certificates" className="py-20 px-4 relative" style={{ background: '#fafaf7' }}>
      <div className="halftone-bg" />
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Chapter Header */}
        <HeaderBab nomor="05" judul="POWER CARDS" warna="#f59e0b" subtitle="Sertifikat &amp; Pelatihan" />

        {/* BNSP Featured Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
          className="mb-12"
        >
          <div
            className="relative overflow-hidden cursor-pointer"
            style={{
              border: '4px solid #f59e0b',
              boxShadow: '7px 7px 0 #f59e0b',
              background: '#fff8e1',
            }}
            onClick={() => setBnspOpen(true)}
          >
            {/* Header strip */}
            <div className="flex items-center justify-between px-6 py-3" style={{ background: '#f59e0b', borderBottom: '3px solid #0a0a0a' }}>
              <span className="font-comic text-xl text-comic-black tracking-wide">🏆 SERTIFIKAT PROFESIONAL NASIONAL</span>
              <span className="font-bold text-xs text-comic-black/70 bg-white px-2 py-1 border border-comic-black">KLIK UNTUK DETAIL</span>
            </div>
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
              {/* Gold badge */}
              <div className="flex-shrink-0 flex flex-col items-center gap-2">
                <div
                  className="w-24 h-24 flex items-center justify-center font-comic text-center text-comic-black leading-tight text-sm"
                  style={{
                    background: '#ffd700',
                    border: '3px solid #0a0a0a',
                    boxShadow: '4px 4px 0 #0a0a0a',
                    clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)',
                  }}
                >
                  BNSP<br />✓
                </div>
                <span className="font-comic text-xs text-comic-black">VERIFIED</span>
              </div>
              <div>
                <h3 className="font-comic text-2xl text-comic-black mb-1">{bnspData.title}</h3>
                <p className="font-bold text-sm text-comic-black/70 mb-3">{bnspData.issuer} • {bnspData.lsp}</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: '📅 Tanggal', val: bnspData.date },
                    { label: '📍 Lokasi', val: bnspData.location },
                    { label: '⏳ Berlaku', val: bnspData.validFor },
                    { label: '🔢 No. Sertifikat', val: bnspData.certNumber },
                  ].map(item => (
                    <div key={item.label} className="px-3 py-1.5 text-xs border-2 border-comic-black bg-white font-bold">
                      <span className="text-comic-black/50">{item.label}:</span>{' '}
                      <span className="text-comic-black">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => { setActiveCategory(cat); setVisibleCount(12) }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="font-bold text-xs px-3 py-1.5 transition-all"
              style={{
                background: activeCategory === cat ? col(cat).border : 'white',
                color: activeCategory === cat ? 'white' : col(cat).text,
                border: `2px solid ${col(cat).border}`,
                boxShadow: activeCategory === cat ? `3px 3px 0 ${col(cat).border}` : '2px 2px 0 #ccc',
              }}
            >
              {catIcon[cat] || '📋'} {cat} <span className="opacity-70">({counts[cat]})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {visible.map((cert, i) => {
            const c = col(cert.category)
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                viewport={{ once: false, amount: 0.1 }}
                whileHover={{ y: -5, rotate: i % 2 === 0 ? -1 : 1 }}
                onClick={() => setDipilih(cert)}
                className="cursor-pointer overflow-hidden"
                style={{ border: `3px solid ${c.border}`, boxShadow: `4px 4px 0 ${c.border}`, background: c.bg }}
              >
                {/* Category bar */}
                <div className="px-2 py-1 font-comic text-[10px] text-white" style={{ background: c.border }}>
                  {catIcon[cert.category]} {cert.category}
                </div>
                {/* Content */}
                <div className="p-3">
                  <div className="font-bold text-xs text-comic-black leading-snug line-clamp-3 mb-2 min-h-[48px]">
                    {cert.title}
                  </div>
                  <div className="text-[10px] text-comic-black/50 font-bold truncate">{cert.issuer}</div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-comic text-xs" style={{ color: c.text }}>{cert.year}</span>
                    <FiEye className="w-3 h-3" style={{ color: c.text }} />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Load more */}
        {visibleCount < filtered.length && (
          <motion.div className="text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}>
            <button
              onClick={() => setVisibleCount(v => v + 12)}
              className="btn-comic"
            >
              LIHAT LEBIH BANYAK ({filtered.length - visibleCount} lagi)
            </button>
          </motion.div>
        )}
      </div>

      {/* Modal sertifikat */}
      <AnimatePresence>
        {dipilih && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.85)' }}
            onClick={() => setDipilih(null)}
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -2 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-white max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
              style={{ border: '4px solid #0a0a0a', boxShadow: '8px 8px 0 #0a0a0a' }}
              onClick={e => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-5 py-3" style={{ background: col(dipilih.category).border, borderBottom: '3px solid #0a0a0a' }}>
                <div>
                  <div className="font-comic text-white text-lg leading-tight">{dipilih.title}</div>
                  <div className="text-white/70 text-xs font-bold">{dipilih.issuer} • {dipilih.year}</div>
                </div>
                <div className="flex items-center gap-2">
                  <a href={dipilih.file} download className="p-1.5 bg-white/20 hover:bg-white/30 transition-colors" title="Download">
                    <FiDownload className="w-4 h-4 text-white" />
                  </a>
                  <a href={dipilih.file} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/20 hover:bg-white/30 transition-colors">
                    <FiExternalLink className="w-4 h-4 text-white" />
                  </a>
                  <button onClick={() => setDipilih(null)} className="p-1.5 bg-red-600 hover:bg-red-700 transition-colors">
                    <FiX className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
              {/* Preview */}
              <div className="flex-1 overflow-auto" style={{ minHeight: 300 }}>
                {(dipilih as any).isImage ? (
                  <div className="flex items-center justify-center p-4 bg-gray-50 min-h-full">
                    <img src={dipilih.file} alt={dipilih.title} className="max-w-full max-h-[70vh] object-contain" style={{ border: '2px solid #0a0a0a' }} />
                  </div>
                ) : (
                  <object data={`${dipilih.file}#toolbar=1&view=FitH`} type="application/pdf" className="w-full" style={{ height: '70vh' }}>
                    <iframe src={`${dipilih.file}#toolbar=1&view=FitH`} className="w-full border-0" style={{ height: '70vh' }} title={dipilih.title} />
                  </object>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal BNSP detail */}
      <AnimatePresence>
        {bnspOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.85)' }}
            onClick={() => setBnspOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, rotate: -1 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.85, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              style={{ border: '4px solid #f59e0b', boxShadow: '8px 8px 0 #f59e0b' }}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-3" style={{ background: '#f59e0b', borderBottom: '3px solid #0a0a0a' }}>
                <span className="font-comic text-xl text-comic-black">🏆 DETAIL SERTIFIKASI BNSP</span>
                <button onClick={() => setBnspOpen(false)} className="p-1.5 bg-red-600"><FiX className="w-4 h-4 text-white" /></button>
              </div>
              <div className="p-6 space-y-5">
                <div>
                  <h3 className="font-comic text-2xl text-comic-black mb-1">{bnspData.title}</h3>
                  <p className="text-sm text-comic-black/60 font-bold">{bnspData.issuer} — {bnspData.lsp}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    ['📅 Tanggal', bnspData.date],
                    ['📍 Lokasi', bnspData.location],
                    ['⏳ Berlaku', bnspData.validFor],
                    ['🔢 No. Sertifikat', bnspData.certNumber],
                    ['📋 No. Registrasi', bnspData.regNumber],
                  ].map(([k, v]) => (
                    <div key={k} className="p-3 border-2 border-comic-black bg-amber-50">
                      <div className="text-[10px] text-comic-black/50 font-bold uppercase">{k}</div>
                      <div className="text-sm font-bold text-comic-black">{v}</div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-comic text-lg text-comic-black mb-3">📚 UNIT KOMPETENSI</div>
                  <div className="space-y-2">
                    {bnspData.units.map((u, i) => (
                      <motion.div
                        key={u.code}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        className="flex gap-3 p-3 border-2 border-amber-300 bg-amber-50"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-amber-400 font-comic text-comic-black text-xs flex items-center justify-center">{i + 1}</div>
                        <div>
                          <div className="text-[10px] font-mono text-comic-black/50">{u.code}</div>
                          <div className="text-sm font-bold text-comic-black">{u.title}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a href="/sertifikat/bnsp-sertifikat.jpg" target="_blank" className="btn-comic text-xs justify-center">
                    <FiEye className="w-4 h-4" /> LIHAT SERTIFIKAT
                  </a>
                  <a href="/sertifikat/bnsp-kompetensi.jpg" target="_blank" className="btn-comic-outline text-xs justify-center">
                    <FiEye className="w-4 h-4" /> LIHAT KOMPETENSI
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
