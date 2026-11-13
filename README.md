# CAIS (Collaborative Academic Information System)

## 📖 Deskripsi Aplikasi
CAIS adalah aplikasi informasi akademik sederhana berbasis web yang dikembangkan secara kolaboratif sebagai proyek UTS Praktikum Collaborative Computing. Aplikasi ini memiliki halaman beranda, login, dashboard, dan modul data mahasiswa. Dibangun menggunakan HTML, CSS, dan JavaScript murni (tanpa framework) dengan sistem login sederhana berbasis `localStorage` (tanpa database).

## ✨ Fitur
1. **Beranda** — Halaman utama dengan judul dan navigasi ke seluruh halaman.
2. **Login** — Form login dengan validasi username & password (data hardcoded, sesi disimpan di `localStorage`).
3. **Dashboard** — Menampilkan ringkasan informasi akademik (total mahasiswa, mata kuliah aktif, dosen) dan menyapa user yang login.
4. **Data Mahasiswa** — Tabel data mahasiswa dengan minimal 3 data contoh.
5. **Proteksi Halaman** — Dashboard tidak bisa diakses jika user belum login.
6. **Logout** — Menghapus sesi login dan kembali ke halaman login.

## 👥 Anggota Tim dan Kontribusi

| Nama | NIM | Peran | Kontribusi |
|------|-----|-------|------------|
| Peba | [11523058] | Ketua Tim / Frontend Beranda & Modul Mahasiswa | Struktur halaman, `index.html`, `pages/mahasiswa.html`, integrasi navigasi, README |
| Sahlan | [11523021] | Frontend Login & Styling | `pages/login.html`, `css/style.css`, form validation styling |
| Rizky | [11523020] | Frontend Dashboard & JavaScript | `pages/dashboard.html`, `js/script.js`, sistem login `localStorage`, proteksi halaman |

**Tautan Kontribusi (Commit):**
- Peba: `https://github.com/[username]/[repo]/commits?author=[username-peba]`
- Sahlan: `https://github.com/[username]/[repo]/commits?author=[username-sahlan]`
- Rizky: `https://github.com/[username]/[repo]/commits?author=[username-rizky]`



## Langkah Menjalankan Prototype

### Opsi 1: Buka Langsung di Browser
1. Clone repository ini:
   git clone https://github.com/[username]/UTS-CAIS-Kelas-NamaKelompok.git
2. Masuk ke folder proyek:
   cd UTS-CAIS-Kelas-NamaKelompok
3. Buka file index.html di browser (double-click atau klik kanan lalu Open with Browser).

### Opsi 2: Menggunakan Live Server (VS Code)
1. Buka folder proyek di VS Code.
2. Install ekstensi Live Server (oleh Ritwick Dey).
3. Klik kanan pada index.html lalu pilih Open with Live Server.

### Opsi 3: Akses Online via GitHub Pages
Website sudah di-deploy menggunakan GitHub Pages. Akses di:
https://[username].github.io/UTS-CAIS-Kelas-NamaKelompok/

## Akun Demo untuk Login

| Username | Password   | Nama          |
|----------|------------|---------------|
| admin    | admin123   | Administrator |
| peba     | peba123    | Peba          |
| sahlan   | sahlan123  | Sahlan        |
| rizky    | rizky123   | Rizky         |

## Proses Kolaborasi Tim

1. Perencanaan — Tugas dibagi melalui GitHub Projects dengan kolom To Do, In Progress, Done.
2. Branching — Setiap anggota bekerja di branch fitur masing-masing (feature-login, feature-dashboard, feature-mahasiswa) untuk menghindari konflik di main.
3. Pull Request dan Code Review — Setiap branch di-merge ke main melalui Pull Request. Anggota lain memberikan minimal 2 komentar review terkait struktur kode, penamaan, dan keterbacaan.
4. Merge Conflict — Disimulasikan dengan dua anggota mengubah baris yang sama di README.md pada branch berbeda. Konflik diselesaikan dengan mempertahankan perubahan yang disepakati, menghapus penanda konflik, lalu commit.
5. Integrasi — Modul frontend diintegrasikan ke main dan diuji bersama untuk memastikan navigasi berjalan.

## Teknologi

- HTML5
- CSS3
- JavaScript (ES6)
- Git dan GitHub
- GitHub Pages (hosting)

## Bukti Kolaborasi

- URL Repository: https://github.com/[username]/UTS-CAIS-Kelas-NamaKelompok
- URL GitHub Pages: https://[username].github.io/UTS-CAIS-Kelas-NamaKelompok/
- URL Pull Request (sudah di-review dan merge): [tempel URL PR di sini]
- URL GitHub Projects: [tempel URL project board di sini]
- Bukti Merge Conflict: [tempel link screenshot atau path file bukti di repo]
