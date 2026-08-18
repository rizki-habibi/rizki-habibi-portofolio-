'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiAward, FiDownload, FiX, FiEye, FiFileText, FiExternalLink, FiCalendar, FiUser, FiShield, FiCloud, FiGlobe, FiCpu, FiDatabase, FiCode, FiTrendingUp, FiHeart } from 'react-icons/fi'
import { HiSparkles, HiLightningBolt, HiBadgeCheck, HiChip } from 'react-icons/hi'

// Sertifikat data dari folder yang ada - LENGKAP 75+ sertifikat
const certificates = [
  // ===== SERTIFIKAT GAMBAR / SEMINAR / WORKSHOP =====
  {
    id: 101,
    title: 'Sertifikat Seminar / Pelatihan 1',
    issuer: 'Penyelenggara Seminar',
    year: '2025',
    category: 'Seminar',
    file: '/sertifikat/image1.png',
    isImage: true,
  },
  {
    id: 102,
    title: 'Sertifikat Seminar / Pelatihan 2',
    issuer: 'Penyelenggara Seminar',
    year: '2025',
    category: 'Seminar',
    file: '/sertifikat/image2.png',
    isImage: true,
  },
  {
    id: 103,
    title: 'Sertifikat Seminar / Pelatihan 3',
    issuer: 'Penyelenggara Seminar',
    year: '2025',
    category: 'Seminar',
    file: '/sertifikat/image3.png',
    isImage: true,
  },
  {
    id: 104,
    title: 'Sertifikat Seminar / Pelatihan 4',
    issuer: 'Penyelenggara Seminar',
    year: '2025',
    category: 'Seminar',
    file: '/sertifikat/image4.png',
    isImage: true,
  },
  {
    id: 105,
    title: 'Sertifikat Seminar / Pelatihan 5',
    issuer: 'Penyelenggara Seminar',
    year: '2025',
    category: 'Seminar',
    file: '/sertifikat/image5.png',
    isImage: true,
  },
  {
    id: 106,
    title: 'Sertifikat Seminar / Pelatihan 6',
    issuer: 'Penyelenggara Seminar',
    year: '2025',
    category: 'Seminar',
    file: '/sertifikat/image6.png',
    isImage: true,
  },
  {
    id: 107,
    title: 'Sertifikat Seminar / Pelatihan 7',
    issuer: 'Penyelenggara Seminar',
    year: '2025',
    category: 'Seminar',
    file: '/sertifikat/image7.png',
    isImage: true,
  },
  {
    id: 108,
    title: 'Sertifikat Kegiatan / Workshop (6 Nov 2025) - Halaman 1',
    issuer: 'Penyelenggara Kegiatan',
    year: '2025',
    category: 'Seminar',
    file: '/sertifikat/img20251106_12115057.jpg',
    isImage: true,
  },
  {
    id: 109,
    title: 'Sertifikat Kegiatan / Workshop (6 Nov 2025) - Halaman 2',
    issuer: 'Penyelenggara Kegiatan',
    year: '2025',
    category: 'Seminar',
    file: '/sertifikat/img20251106_12115057_0001.jpg',
    isImage: true,
  },
  // ===== SERTIFIKAT PDF DIGITAL TALENT & LAINNYA =====
  {
    id: 1,
    title: 'AI Engineer For Milenial',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'AI & Data',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_AI Engineer For Milenial.pdf',
  },
  {
    id: 2,
    title: 'Junior Web Developer',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Web Development',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Junior Web Developer.pdf',
  },
  {
    id: 3,
    title: 'Introduction to Cyber Security and Career Awareness',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Cyber Security',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Introduction to Cyber Security and Career Awareness.pdf',
  },
  {
    id: 4,
    title: 'Introduction To Cloud Computing',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Cloud',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Introduction To Cloud Computing.pdf',
  },
  {
    id: 5,
    title: 'Ethical Hacker For Dummies',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Cyber Security',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Ethical Hacker For Dummies.pdf',
  },
  {
    id: 6,
    title: 'Dasar-Dasar Implementasi Kecerdasan Artifisial',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'AI & Data',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Dasar-Dasar Implementasi Kecerdasan Artifisial.pdf',
  },
  {
    id: 7,
    title: 'Digital Marketing - Membangun Strategi untuk Kesuksesan Bisnis Online',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Digital Marketing',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Digital Marketing _ Membangun Strategi untuk Kesuksesan Bisnis Online.pdf',
  },
  {
    id: 8,
    title: 'Generative AI untuk Pendidikan',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'AI & Data',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Generative AI untuk Pendidikan.pdf',
  },
  {
    id: 9,
    title: 'Pengenalan Data Science dan Pemanfaatannya di Berbagai Sektor',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'AI & Data',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Pengenalan Data Science dan Pemanfaatannya di Berbagai Sektor.pdf',
  },
  {
    id: 10,
    title: 'Pengenalan Internet of Things - Konsep, Teknologi, dan Aplikasinya',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'IoT',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Pengenalan Internet of Things_ Konsep, Teknologi, dan Aplikasinya.pdf',
  },
  {
    id: 11,
    title: 'Konsep Pemrograman',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Programming',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Konsep Pemrograman.pdf',
  },
  {
    id: 12,
    title: 'Computational Thinking (Jenjang SMA)',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Programming',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Computational Thinking _ Cara Berpikir Logis untuk Mengatasi Masalah (Jenjang SMA).pdf',
  },
  {
    id: 13,
    title: 'Membangun Lab Virtual & Dasar Linux',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Cyber Security',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Membangun Lab Virtual & Dasar Linux.pdf',
  },
  {
    id: 14,
    title: 'Menerapkan Rekayasa Prompt dengan Azure OpenAI Service',
    issuer: 'Microsoft Learn',
    year: '2025',
    category: 'AI & Data',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Menerapkan rekayasa prompt dengan Azure OpenAI Service.pdf',
  },
  {
    id: 15,
    title: 'Social Media Management untuk Brand Digital',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Digital Marketing',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Social Media Management untuk Brand Digital.pdf',
  },
  {
    id: 16,
    title: 'Copywriting AI Untuk Iklan Digital',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Digital Marketing',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Copywriting AI Untuk Iklan Digital.pdf',
  },
  {
    id: 17,
    title: 'Image Recognition dan Speech Recognition',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'AI & Data',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Image Recognition dan Speech Recognition Mengubah Interaksi Kita dengan Teknologi.pdf',
  },
  {
    id: 18,
    title: 'Dasar-dasar Keamanan AI',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'AI & Data',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Dasar-dasar Keamanan AI.pdf',
  },
  {
    id: 19,
    title: 'Wawasan Karir dalam Bidang Data Analytics',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'AI & Data',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Wawasan Karir dalam Bidang Data Analytics.pdf',
  },
  {
    id: 20,
    title: 'Memahami Aspek Pengembangan Produk AI',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'AI & Data',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Memahami Aspek Pengembangan Produk AI.pdf',
  },
  {
    id: 21,
    title: 'Menskalakan AI di Organisasi Anda',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'AI & Data',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Menskalakan AI di Organisasi Anda.pdf',
  },
  {
    id: 22,
    title: 'Aktualisasi Falsafah Torang Samua Basudara',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Soft Skills',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Aktualisasi Falsafah Torang Samua Basudara dalam Menjaga Kerukunan di Era Digital.pdf',
  },
  {
    id: 23,
    title: 'Ancaman Pembobolan Akun Pribadi dan Pencegahannya',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Cyber Security',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Ancaman Pembobolan Akun Pribadi dan Pencegahannya.pdf',
  },
  {
    id: 24,
    title: 'Branding Institusi Untuk Instansi Pemerintah',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Digital Marketing',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Branding Institusi Untuk Instansi Pemerintah.pdf',
  },
  {
    id: 25,
    title: 'Cara Mudah Menggunakan Aplikasi Perkantoran Online',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Soft Skills',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Cara Mudah Menggunakan Aplikasi Perkantoran Online.pdf',
  },
  {
    id: 26,
    title: 'Character Building Tangkal Bahaya Judi Online',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Soft Skills',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Character Building Tangkal Bahaya Judi Online.pdf',
  },
  {
    id: 27,
    title: 'Computational Thinking (Jenjang SD)',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Programming',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Computational Thinking _ Cara Berpikir Logis untuk Mengatasi Masalah (Jenjang SD).pdf',
  },
  {
    id: 28,
    title: 'Computational Thinking (Jenjang SMP)',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Programming',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Computational Thinking _ Cara Berpikir Logis untuk Mengatasi Masalah (Jenjang SMP).pdf',
  },
  {
    id: 29,
    title: 'Dampak Negatif Judi Online Bagi Masyarakat',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Soft Skills',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Dampak Negatif Judi Online Bagi Masyarakat.pdf',
  },
  {
    id: 30,
    title: 'Dampak Teknologi Digital bagi UMKM',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Digital Marketing',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Dampak Teknologi Digital bagi UMKM.pdf',
  },
  {
    id: 31,
    title: 'Digital Wellness',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Soft Skills',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Digital Wellness _ Mencapai keseimbangan hidup di era teknologi yang terus berkembang.pdf',
  },
  {
    id: 32,
    title: 'Etis Bermedia Sosial Berbasis Nilai Lokal',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Soft Skills',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Etis Bermedia Sosial Berbasis Nilai Lokal.pdf',
  },
  {
    id: 33,
    title: 'Fondasi Penulisan Berita',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Soft Skills',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Fondasi Penulisan Berita.pdf',
  },
  {
    id: 34,
    title: 'Jejak Digital - Warisan di Dunia Maya',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Cyber Security',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Jejak Digital_ Warisan yang Anda Tinggalkan di Dunia Maya.pdf',
  },
  {
    id: 35,
    title: 'Kenali Tanda-Tandanya dan Lindungi Data Pribadi',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Cyber Security',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Kenali Tanda-Tandanya dan Lindungi Data Pribadi (1).pdf',
  },
  {
    id: 36,
    title: 'Komunikasi Krisis Untuk ASN',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Soft Skills',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Komunikasi Krisis Untuk ASN.pdf',
  },
  {
    id: 37,
    title: 'Komunikasi Strategis Untuk ASN',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Soft Skills',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Komunikasi Strategis Untuk ASN.pdf',
  },
  {
    id: 38,
    title: 'Media Digital bagi Guru/Tenaga Kependidikan',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Soft Skills',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Media Digital bagi Guru_Tenaga Kependidikan.pdf',
  },
  {
    id: 39,
    title: 'Memahami Perbedaan Misinformasi, Disinformasi, dan Malinformasi',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Soft Skills',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Memahami Perbedaan Misinformasi, Disinformasi, dan Malinformasi.pdf',
  },
  {
    id: 40,
    title: 'Membangun Personal Branding di Media Sosial',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Digital Marketing',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Membangun Personal Branding di Media Sosial.pdf',
  },
  {
    id: 41,
    title: 'Mengamankan Diri dari Kejahatan Siber',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Cyber Security',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Mengamankan Diri dari Kejahatan Siber.pdf',
  },
  {
    id: 42,
    title: 'Menjadi Pengguna Media Sosial yang Bijak dan Kritis',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Soft Skills',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Menjadi Pengguna Media Sosial yang Bijak dan Kritis.pdf',
  },
  {
    id: 43,
    title: 'Mindset Digital - Pola Pikir Bertumbuh',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Soft Skills',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Mindset Digital 1_ Pola Pikir Bertumbuh (Growth Mindset).pdf',
  },
  {
    id: 44,
    title: 'Optimasi Instagram dengan Insight',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Digital Marketing',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Optimasi Instagram dengan Insight.pdf',
  },
  {
    id: 45,
    title: "Parent's Guide for Internet Safety",
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Cyber Security',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Parent\'s Guide for Internet Safety.pdf',
  },
  {
    id: 46,
    title: 'Pemanfaatan Aplikasi Chat Bagi Wirausahawan Pemula',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Digital Marketing',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Pemanfaatan Aplikasi Chat Bagi Wirausahawan Pemula.pdf',
  },
  {
    id: 47,
    title: 'Pemanfaatan Aplikasi Editing Video untuk Konten Produk',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Digital Marketing',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Pemanfaatan Aplikasi Editing Video untuk Konten Produk.pdf',
  },
  {
    id: 48,
    title: 'Pengantar Mindset Digital',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Soft Skills',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Pengantar Mindset Digital 1 _ Mengubah Masa Depan Anda Dengan Pola Pikir Digital.pdf',
  },
  {
    id: 49,
    title: 'Pengantar Sistem Pemerintahan Berbasis Elektronik (SPBE)',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Soft Skills',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Pengantar Sistem Pemerintahan Berbasis Elektronik (SPBE).pdf',
  },
  {
    id: 50,
    title: 'Pengenalan Hak Atas Kekayaan Intelektual (HAKI)',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Soft Skills',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Pengenalan Hak Atas Kekayaan Intelektual (HAKI) Dalam Perlindungan Karya dan Inovasi Digital.pdf',
  },
  {
    id: 51,
    title: 'Pengenalan Koding Visual untuk Anak',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Programming',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Pengenalan Koding Visual untuk Anak.pdf',
  },
  {
    id: 52,
    title: 'Pengenalan Kolaborasi Menggunakan Tools Cloud',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Cloud',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Pengenalan Kolaborasi Menggunakan Tools Gratis Penyimpanan berbasis Cloud.pdf',
  },
  {
    id: 53,
    title: 'Pengenalan Produk Digital dan Desain Grafis',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Digital Marketing',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Pengenalan Produk Digital dan Desain Grafis Bagi Angkatan Kerja Muda.pdf',
  },
  {
    id: 54,
    title: 'Pentingnya Izin Usaha Bagi UMKM',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Soft Skills',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Pentingnya izin Usaha Bagi UMKM.pdf',
  },
  {
    id: 55,
    title: 'Pentingnya Menjaga Keamanan Digital',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Cyber Security',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Pentingnya Menjaga Keamanan Digital_ Perlindungan Diri di Dunia Maya.pdf',
  },
  {
    id: 56,
    title: 'Peran ASN Dalam Membangun Citra Lembaga',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Soft Skills',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Peran ASN Dalam Membangun Citra Lembaga Melalui Konten Kreatif.pdf',
  },
  {
    id: 57,
    title: 'Pertahanan Digital 101 untuk Individu dan UMKM',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Cyber Security',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Pertahanan Digital 101 untuk Individu dan UMKM_ Melindungi Dunia Daring Anda.pdf',
  },
  {
    id: 58,
    title: 'Prinsip-Prinsip Video Content Creator',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Digital Marketing',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Prinsip Prinsip Video Content Creator.pdf',
  },
  {
    id: 59,
    title: 'Public Speaking bagi Penyandang Disabilitas Muda',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Soft Skills',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Public Speaking bagi Penyandang Disabilitas Muda.pdf',
  },
  {
    id: 60,
    title: 'Seberapa Aman Informasi Anda dari Ancaman Digital',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Cyber Security',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Seberapa Aman Informasi Anda dari Ancaman Digital.pdf',
  },
  {
    id: 61,
    title: 'Seberapa Penting Menjaga Data Pribadi',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Cyber Security',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Seberapa Penting Menjaga Data Pribadi dan Pelindungannya.pdf',
  },
  {
    id: 62,
    title: 'Seni Public Speaking Untuk Pemimpin Muda',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Soft Skills',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Seni Public Speaking Untuk Pemimpin Muda Berkarakter.pdf',
  },
  {
    id: 63,
    title: 'Smart Village - Panduan Membangun Ekonomi Kreatif Desa',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Soft Skills',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Smart Village_ Panduan Membangun Ekonomi Kreatif Desa.pdf',
  },
  {
    id: 64,
    title: 'Strategi Penggunaan CRM untuk UMKM',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Digital Marketing',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Strategi Penggunaan Customer Relationship Management untuk UMKM.pdf',
  },
  {
    id: 65,
    title: 'Tips Melindungi Diri Dari Phising dan Malware',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Cyber Security',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_Tips Melindungi Diri Dari Ancaman Phising dan Malware di Era Digital.pdf',
  },
  {
    id: 66,
    title: 'What is Business Pitching',
    issuer: 'Digital Talent Scholarship',
    year: '2025',
    category: 'Soft Skills',
    file: '/sertifikat/Sertifikat_RIZKI HABIBI_What is Business Pitching.pdf',
  },
]

// BNSP Professional Certificate Data
const bnspCertificate = {
  title: 'Sertifikat Kompetensi - Pengembang Web Pratama',
  subtitle: 'Junior Web Developer',
  certNumber: '62090 2513 3 0156814 2025',
  regNumber: 'TIK 1565 41503 2025',
  issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
  lsp: 'Lembaga Sertifikasi Profesi Teknologi Digital',
  area: 'Pengembangan Website / Web Development',
  validFor: '3 Tahun',
  date: '03 November 2025',
  location: 'Yogyakarta',
  competencyUnits: [
    { code: 'J.620100.005.02', title: 'Mengimplementasikan User Interface' },
    { code: 'J.620100.010.01', title: 'Menerapkan Perintah Eksekusi Bahasa Pemrograman Berbasis Text, Grafik, dan Multimedia' },
    { code: 'J.620100.015.01', title: 'Menyusun Fungsi, File atau Sumber Daya Pemrograman dalam Organisasi yang Rapih' },
    { code: 'J.620100.016.01', title: 'Menulis Kode dengan Prinsip Sesuai Guidelines dan Best Practices' },
    { code: 'J.620100.017.02', title: 'Mengimplementasikan Pemrograman Terstruktur' },
    { code: 'J.620100.019.02', title: 'Menggunakan Library atau Komponen Pre-Existing' },
  ],
}

const categories = ['Semua', 'Seminar', 'AI & Data', 'Web Development', 'Cyber Security', 'Cloud', 'Digital Marketing', 'Programming', 'IoT', 'Soft Skills']

// Warna kategori
const categoryColors: Record<string, string> = {
  'Seminar': 'from-fuchsia-500 to-purple-600',
  'AI & Data': 'from-purple-500 to-blue-500',
  'Web Development': 'from-green-500 to-teal-500',
  'Cyber Security': 'from-red-500 to-orange-500',
  'Cloud': 'from-blue-500 to-cyan-500',
  'Digital Marketing': 'from-pink-500 to-rose-500',
  'Programming': 'from-yellow-500 to-amber-500',
  'IoT': 'from-indigo-500 to-violet-500',
  'Soft Skills': 'from-emerald-500 to-green-500',
}

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null)
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [visibleCount, setVisibleCount] = useState(12)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [bnspFlipped, setBnspFlipped] = useState(false)
  const [bnspGallery, setBnspGallery] = useState<string | null>(null)

  const bnspImages = [
    { src: '/sertifikat/bnsp-sertifikat.jpg', label: 'Sertifikat Kompetensi BNSP' },
    { src: '/sertifikat/bnsp-kompetensi.jpg', label: 'Surat Keterangan Kompetensi' },
  ]

  const filteredCerts = activeCategory === 'Semua'
    ? certificates
    : certificates.filter(cert => cert.category === activeCategory)

  const visibleCerts = filteredCerts.slice(0, visibleCount)

  // Hitung jumlah per kategori
  const categoryCounts = categories.reduce((acc, cat) => {
    if (cat === 'Semua') {
      acc[cat] = certificates.length
    } else {
      acc[cat] = certificates.filter(c => c.category === cat).length
    }
    return acc
  }, {} as Record<string, number>)

  return (
    <section id="certificates" className="py-20 px-4 bg-charcoal-950/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Sertifikat & Pelatihan</h2>
          <p className="text-soft-gray-400 max-w-2xl mx-auto">
            Koleksi sertifikat dari berbagai pelatihan dan kursus yang telah saya ikuti untuk mengembangkan keahlian.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-navy-600/20 rounded-full">
            <FiAward className="text-navy-400" />
            <span className="text-navy-300 font-medium">{certificates.length}+ Sertifikat & Seminar</span>
          </div>
        </motion.div>

        {/* === BNSP FEATURED CERTIFICATE === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
            <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2 whitespace-nowrap">
              <HiSparkles className="w-5 h-5" />
              Sertifikat Profesional
              <HiSparkles className="w-5 h-5" />
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
          </div>

          {/* 3D Flip Card */}
          <div
            className="bnsp-card-container mx-auto max-w-4xl cursor-pointer"
            style={{ perspective: '1200px' }}
            onClick={() => setBnspFlipped(!bnspFlipped)}
          >
            <motion.div
              className="relative w-full"
              animate={{ rotateY: bnspFlipped ? 180 : 0 }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 80, damping: 15 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* FRONT SIDE */}
              <div
                className="bnsp-card-front rounded-3xl overflow-hidden"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="relative p-1 rounded-3xl bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600">
                  <div className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-950 to-navy-950 rounded-[22px] p-6 md:p-10 overflow-hidden">
                    {/* Holographic shimmer overlay */}
                    <div className="absolute inset-0 bnsp-holographic opacity-30 pointer-events-none" />

                    {/* Corner decorations */}
                    <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-amber-500/40 rounded-tl-[22px]" />
                    <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-amber-500/40 rounded-tr-[22px]" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-amber-500/40 rounded-bl-[22px]" />
                    <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-amber-500/40 rounded-br-[22px]" />

                    {/* Top badge row */}
                    <div className="relative flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                          <FiShield className="w-5 h-5 text-charcoal-950" />
                        </div>
                        <div>
                          <div className="text-[10px] uppercase tracking-widest text-amber-400/80 font-semibold">Indonesian Professional</div>
                          <div className="text-[10px] uppercase tracking-widest text-amber-400/60">Certification Authority</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] uppercase tracking-widest text-amber-400/80 font-semibold">BNSP</div>
                        <div className="text-[10px] text-soft-gray-500">No. {bnspCertificate.certNumber}</div>
                      </div>
                    </div>

                    {/* Main Title */}
                    <div className="relative text-center mb-8">
                      <motion.div
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <div className="text-xs uppercase tracking-[0.3em] text-amber-400/60 mb-2">Sertifikat Kompetensi</div>
                        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent mb-1">
                          Certificate of Competence
                        </h3>
                      </motion.div>
                    </div>

                    {/* Certificate holder */}
                    <div className="relative text-center mb-8">
                      <div className="text-sm text-soft-gray-400 mb-2">Dengan ini menyatakan bahwa / <span className="italic">This is to certify that</span></div>
                      <h4 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-wide">Rizki Habibi</h4>
                      <div className="text-xs text-soft-gray-500">No. Reg. {bnspCertificate.regNumber}</div>
                    </div>

                    {/* Competency Info */}
                    <div className="relative grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-charcoal-800/50 rounded-xl p-4 border border-amber-500/10">
                        <div className="text-xs text-amber-400/70 uppercase tracking-wider mb-1">Bidang Kompetensi</div>
                        <div className="text-white font-semibold">{bnspCertificate.area}</div>
                      </div>
                      <div className="bg-charcoal-800/50 rounded-xl p-4 border border-amber-500/10">
                        <div className="text-xs text-amber-400/70 uppercase tracking-wider mb-1">Kualifikasi</div>
                        <div className="text-white font-semibold">{bnspCertificate.subtitle}</div>
                      </div>
                    </div>

                    {/* Bottom details */}
                    <div className="relative flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-amber-500/20">
                      <div className="flex items-center gap-2 text-soft-gray-400 text-sm">
                        <FiCalendar className="w-4 h-4 text-amber-400/70" />
                        <span>{bnspCertificate.location}, {bnspCertificate.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-soft-gray-400 text-sm">
                        <FiFileText className="w-4 h-4 text-amber-400/70" />
                        <span>Berlaku {bnspCertificate.validFor}</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-500/20 rounded-full">
                        <HiBadgeCheck className="w-4 h-4 text-amber-400" />
                        <span className="text-amber-300 text-xs font-semibold uppercase tracking-wider">Verified</span>
                      </div>
                    </div>

                    {/* Click hint */}
                    <div className="mt-4 text-center">
                      <span className="text-[11px] text-soft-gray-600 animate-pulse">Klik untuk melihat unit kompetensi →</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* BACK SIDE */}
              <div
                className="bnsp-card-back absolute inset-0 rounded-3xl overflow-hidden"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div className="relative p-1 rounded-3xl bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 h-full">
                  <div className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-950 to-navy-950 rounded-[22px] p-6 md:p-10 h-full overflow-hidden">
                    {/* Holographic shimmer overlay */}
                    <div className="absolute inset-0 bnsp-holographic opacity-20 pointer-events-none" />

                    <div className="relative">
                      <div className="text-center mb-6">
                        <div className="text-xs uppercase tracking-[0.3em] text-amber-400/60 mb-1">Daftar Unit Kompetensi</div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
                          List of Competency Units
                        </h3>
                      </div>

                      <div className="space-y-3">
                        {bnspCertificate.competencyUnits.map((unit, i) => (
                          <motion.div
                            key={unit.code}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex gap-4 p-3 bg-charcoal-800/50 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-colors"
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                              <span className="text-amber-400 text-sm font-bold">{i + 1}</span>
                            </div>
                            <div>
                              <div className="text-[10px] text-amber-400/60 font-mono">{unit.code}</div>
                              <div className="text-sm text-white">{unit.title}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-6 text-center flex items-center justify-center gap-4">
                        <div className="text-xs text-soft-gray-500">{bnspCertificate.lsp}</div>
                      </div>

                      {/* Click hint */}
                      <div className="mt-4 text-center">
                        <span className="text-[11px] text-soft-gray-600 animate-pulse">← Klik untuk kembali</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        {/* === END BNSP === */}

        {/* BNSP Scanned Certificate Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
          className="mb-16"
        >
          <h4 className="text-center text-sm font-semibold text-amber-400/80 uppercase tracking-wider mb-6">
            📄 Scan Dokumen Asli
          </h4>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {bnspImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.03 }}
                onClick={() => setBnspGallery(img.src)}
                className="group cursor-pointer rounded-2xl overflow-hidden border-2 border-amber-500/20 hover:border-amber-500/50 transition-all shadow-lg hover:shadow-amber-500/10"
              >
                <div className="relative aspect-[3/4] bg-charcoal-900">
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end justify-center pb-4">
                    <span className="flex items-center gap-2 text-white text-sm font-medium px-4 py-2 bg-amber-500/30 backdrop-blur-sm rounded-full">
                      <FiEye className="w-4 h-4" />
                      Lihat Full
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-charcoal-900 text-center">
                  <span className="text-xs text-soft-gray-400">{img.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* BNSP Image Lightbox */}
        <AnimatePresence>
          {bnspGallery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
              onClick={() => setBnspGallery(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setBnspGallery(null)}
                  className="absolute -top-12 right-0 p-2 rounded-lg bg-charcoal-800 hover:bg-red-600 transition-colors text-white"
                >
                  <FiX className="w-5 h-5" />
                </button>
                <img
                  src={bnspGallery}
                  alt="BNSP Certificate"
                  className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
                />
                {/* Navigation thumbnails */}
                <div className="flex justify-center gap-3 mt-4">
                  {bnspImages.map((img) => (
                    <button
                      key={img.src}
                      onClick={() => setBnspGallery(img.src)}
                      className={`w-16 h-20 rounded-lg overflow-hidden border-2 transition-all ${bnspGallery === img.src ? 'border-amber-400 shadow-lg shadow-amber-500/20' : 'border-charcoal-700 opacity-50 hover:opacity-80'
                        }`}
                    >
                      <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category)
                setVisibleCount(12)
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === category
                ? 'bg-navy-600 text-white'
                : 'bg-charcoal-800 text-soft-gray-400 hover:bg-charcoal-700 hover:text-white'
                }`}
            >
              {category}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeCategory === category
                ? 'bg-navy-500'
                : 'bg-charcoal-700'
                }`}>
                {categoryCounts[category]}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Certificates Grid - Improved Card Design */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {visibleCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.03, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedCert(cert)}
              className="group relative bg-gradient-to-br from-charcoal-800/80 to-charcoal-900/80 rounded-2xl overflow-hidden cursor-pointer border border-charcoal-700/50 hover:border-navy-500/50 shadow-lg hover:shadow-xl hover:shadow-navy-500/10 transition-all duration-300"
            >
              {/* Certificate Preview Thumbnail */}
              <div className={`h-36 bg-gradient-to-br ${categoryColors[cert.category] || 'from-navy-500 to-navy-700'} relative overflow-hidden`}>
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                </div>

                {/* Category Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg"
                  >
                    {cert.category === 'Seminar' && <FiAward className="w-10 h-10 text-white" />}
                    {cert.category === 'AI & Data' && <HiChip className="w-10 h-10 text-white" />}
                    {cert.category === 'Web Development' && <FiCode className="w-10 h-10 text-white" />}
                    {cert.category === 'Cyber Security' && <FiShield className="w-10 h-10 text-white" />}
                    {cert.category === 'Cloud' && <FiCloud className="w-10 h-10 text-white" />}
                    {cert.category === 'Digital Marketing' && <FiTrendingUp className="w-10 h-10 text-white" />}
                    {cert.category === 'IoT' && <FiCpu className="w-10 h-10 text-white" />}
                    {cert.category === 'Programming' && <HiLightningBolt className="w-10 h-10 text-white" />}
                    {cert.category === 'Soft Skills' && <FiHeart className="w-10 h-10 text-white" />}
                    {cert.category === 'Database' && <FiDatabase className="w-10 h-10 text-white" />}
                    {!['AI & Data', 'Web Development', 'Cyber Security', 'Cloud', 'Digital Marketing', 'IoT', 'Programming', 'Soft Skills', 'Database'].includes(cert.category) && <FiAward className="w-10 h-10 text-white" />}
                  </motion.div>
                </div>

                {/* View indicator on hover */}
                <div className="absolute inset-0 bg-navy-600/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="flex items-center gap-2 text-white font-medium px-4 py-2 bg-white/20 rounded-full">
                    <FiEye className="w-5 h-5" />
                    Lihat Sertifikat
                  </span>
                </div>

                {/* Year Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-xs text-white font-medium flex items-center gap-1.5 border border-white/20">
                  <FiCalendar className="w-3 h-3" />
                  {cert.year}
                </div>

                {/* Verified Badge */}
                <div className="absolute top-3 left-3">
                  <HiBadgeCheck className="w-6 h-6 text-white drop-shadow-lg" />
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-white text-sm mb-2 line-clamp-2 group-hover:text-navy-400 transition-colors min-h-[44px]">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 text-soft-gray-400 text-xs mb-3">
                  <FiUser className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">{cert.issuer}</span>
                </div>

                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-3 py-1.5 rounded-full bg-gradient-to-r ${categoryColors[cert.category] || 'from-navy-500 to-navy-700'} text-white font-medium shadow-sm`}>
                    {cert.category}
                  </span>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-8 h-8 rounded-full bg-charcoal-700/50 flex items-center justify-center text-soft-gray-400 group-hover:text-navy-400 group-hover:bg-navy-600/20 transition-all"
                  >
                    <FiExternalLink className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <div className={`h-1 bg-gradient-to-r ${categoryColors[cert.category] || 'from-navy-500 to-navy-700'}`} />
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < filteredCerts.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <button
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="btn-secondary"
            >
              Lihat Lebih Banyak ({filteredCerts.length - visibleCount} lainnya)
            </button>
          </motion.div>
        )}

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-charcoal-900 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b border-charcoal-800 bg-charcoal-900/95 backdrop-blur-sm">
                  <div className="flex-1 pr-4">
                    <h3 className="font-semibold text-white line-clamp-1">{selectedCert.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-soft-gray-400 text-sm">{selectedCert.issuer}</p>
                      <span className="text-soft-gray-600">•</span>
                      <span className="text-navy-400 text-sm">{selectedCert.year}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${categoryColors[selectedCert.category] || 'from-navy-500 to-navy-700'} text-white`}>
                        {selectedCert.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={selectedCert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 transition-colors"
                      title="Buka di tab baru"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={selectedCert.file}
                      download
                      className="p-2 rounded-lg bg-navy-600 hover:bg-navy-500 transition-colors"
                      title="Download"
                    >
                      <FiDownload className="w-5 h-5" />
                    </a>
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="p-2 rounded-lg bg-charcoal-800 hover:bg-red-600 transition-colors"
                      title="Tutup"
                    >
                      <FiX className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* PDF / Image Preview - Full Height */}
                <div className="h-[calc(90vh-80px)] bg-charcoal-950">
                  {(selectedCert as any).isImage ? (
                    <div className="w-full h-full flex items-center justify-center p-4 overflow-auto">
                      <img
                        src={selectedCert.file}
                        alt={selectedCert.title}
                        className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                      />
                    </div>
                  ) : (
                    <object
                      data={`${selectedCert.file}#toolbar=1&navpanes=0&scrollbar=0&view=FitH`}
                      type="application/pdf"
                      className="w-full h-full"
                    >
                      <iframe
                        src={`${selectedCert.file}#toolbar=1&navpanes=0&scrollbar=0&view=FitH`}
                        className="w-full h-full border-0"
                        title={selectedCert.title}
                      />
                    </object>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
