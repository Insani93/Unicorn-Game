# 🦄 Unicorn Magic World — v2.0 Visual Update (Android / iPhone)

**Pembaruan v2.0:** Lulu kini memakai 6 aset PNG ekspresi yang mengikuti Visual Style Guide final, bukan gambar SVG sementara. Latar Rainbow Meadow dan ikon aplikasi juga diselaraskan. Keenam mini-misi tetap aktif.

**Status:** Prototipe permainan yang bisa dimainkan. **Gratis, tanpa iklan, tanpa akun, tanpa analytics.** Dirancang untuk anak usia sekitar 3 tahun, dengan pendampingan orang tua.

## Fitur yang sudah bekerja

- **Rainbow Meadow / Story Adventure:** enam mini-misi: Wake Up Little Stars, Rainbow Bridge, Cloud Basket, Apple Tree, Bouncy Hill, Kitty Cottage.
- **Free Play — Numbers:** seluruh angka **0–20** dapat dibuka; anak menyentuh dan menghitung bintang. Angka 0 diperkenalkan dengan keranjang kosong.
- **Free Play — Alphabet:** seluruh huruf **A–Z** tersedia dengan nama huruf, objek, suara, dan pilihan huruf sederhana.
- **English First + Indonesian Support:** instruksi berbahasa Inggris. Tombol **ID** untuk bantuan bahasa Indonesia (bisa dimatikan melalui Parent Corner).
- **Magic Collection:** menyimpan enam reward dan jumlah materi yang pernah dieksplorasi.
- **Six-world map:** Rainbow Meadow dapat dimainkan; lima dunia berikutnya ditandai "Coming soon", **belum diimplementasikan** dalam Story Adventure.
- **PWA:** tombol instalasi melalui Chrome/Safari jika website sudah dipublikasikan di HTTPS. Service worker menyimpan file game agar antarmuka dan permainan dapat dipakai offline setelah kontennya berhasil di-cache.

> Suara menggunakan Web Speech API bawaan browser. Suara Bahasa Inggris/Bahasa Indonesia dan ketersediaannya ketika offline bergantung pada bahasa/voice pack yang tersedia di HP. Tampilan game dapat berfungsi offline meskipun voice tertentu tidak tersedia. Musik/suara efek dibuat sederhana, tanpa aset audio berbayar.

## 🎯 Cara unggah ke GitHub menggunakan HP Samsung (tanpa PC)

### A. Download dan ekstrak ZIP
1. Download ZIP dari pesan ChatGPT.
2. Buka **My Files / File Saya** di Samsung → **Downloads / Unduhan**.
3. Ketuk file ZIP → **Extract / Ekstrak**. Masuk ke folder hasil ekstrak.
4. Pastikan terlihat file berikut pada **level yang sama**:
   - `index.html`
   - `manifest.webmanifest`
   - `sw.js`
   - `meadow.webp`
   - `icon-192.png`
   - `icon-512.png`
   - `lulu_happy.png`, `lulu_excited.png`, `lulu_curious.png`, `lulu_thinking.png`, `lulu_encouraging.png`, `lulu_celebrating.png`
   - `README.md` (opsional untuk situs, boleh ikut diunggah)

### B. Buat repository
5. Di Chrome pada Samsung buka https://github.com/signup dan buat akun gratis jika belum ada.
6. Setelah login, buka https://github.com/new . Bila tombol/menu tidak terlihat, gunakan menu **⋮ Chrome → Desktop site / Situs desktop**.
7. Isi **Repository name**: `unicorn-magic-world`.
8. Pilih **Public** (GitHub Pages gratis pada GitHub Free memerlukan repo publik).
9. Tekan **Create repository**. Tidak perlu menambahkan template atau framework.

### C. Upload file
10. Di halaman repository pilih **uploading an existing file** atau **Add file → Upload files**. Bila opsi tersembunyi, aktifkan **Situs desktop** di Chrome.
11. Pilih **choose your files** → **My Files / File Saya** → folder hasil ekstrak. Pilih semua file di atas. Jika pemilihan banyak file tidak tersedia, unggah satu per satu pada halaman upload yang sama.
12. **PENTING:** yang diunggah adalah file hasil ekstrak, **bukan hanya file ZIP**. `index.html` harus ada pada root/halaman utama repository, bukan di dalam subfolder.
13. Gulir ke bawah dan tekan **Commit changes**.

### D. Publikasikan sebagai website gratis
14. Di repository masuk ke **Settings → Pages** (pada tampilan Samsung lebih mudah jika **Situs desktop** aktif).
15. Di **Build and deployment**, bagian **Source** pilih **Deploy from a branch**.
16. Pilih branch **main**, folder **/(root)**, kemudian **Save**.
17. GitHub akan menyediakan URL, biasanya `https://USERNAME.github.io/unicorn-magic-world/` (ganti USERNAME dengan username GitHub).
18. Buka URL HTTPS tersebut di Chrome untuk mencoba. Jika belum muncul, cek kembali **Settings → Pages** dan status deployment di **Actions**.

### E. Instal ikon di HP Samsung
19. Buka URL game **di Google Chrome**.
20. Ketuk menu **⋮** → cari **Install app**, **Add to Home screen**, atau **Install and create shortcut** (nama bervariasi sesuai Chrome/Samsung).
21. Konfirmasi pemasangan. Buka game dari ikon **Unicorn Magic** di layar utama.
22. Ketika online, buka game dan beberapa halaman terlebih dahulu, lalu coba **mode pesawat** untuk menguji konten offline. **Suara offline tergantung voice pack perangkat**.

## 🔊 Jika suara tidak keluar
- Pastikan HP tidak dalam mode senyap dan volume media terdengar.
- Pastikan di **Parent Corner** opsi **Voice and sound** aktif.
- Ketuk tombol **🔊** untuk memulai suara dari gestur pengguna. Di beberapa browser suara otomatis dibatasi.
- Di pengaturan Android, pastikan **Text-to-Speech** memiliki voice English terpasang. Suara bahasa Indonesia bisa berbeda.
- Dalam mode offline, voice TTS tertentu mungkin tidak bekerja meskipun gambar dan minigame tetap bisa digunakan.

## 🧭 Cara bermain
- **Play Adventure → Rainbow Meadow → Story Adventure** untuk enam misi.
- **Free Play → Magic Numbers** untuk angka 0 sampai 20.
- **Free Play → Magic Alphabet** untuk huruf A sampai Z.
- Tekan tombol **ID** bila anak membutuhkan bantuan dalam bahasa Indonesia.
- Tekan **⚙** pada halaman awal untuk Parent Corner; jawab pertanyaan orang tua yang ditampilkan.
- Progres disimpan **di browser HP tersebut saja**, tanpa pendaftaran.

## Catatan privasi & hak cipta
- Repository GitHub **Public** berarti kode dan gambar dapat dilihat publik; jangan unggah foto/nama/informasi pribadi anak.
- Game ini menggunakan **unicorn orisinal**, bukan karakter Peppa Pig resmi.
- Seluruh gambar di paket dibuat untuk proyek ini, tanpa memuat aset pihak ketiga.
- Game ini untuk belajar melalui bermain; bukan tes standar kemampuan anak.

## Susunan file

```
unicorn-magic-world/
├── index.html             # Seluruh gameplay, desain, dan skrip utama
├── meadow.webp           # Latar Rainbow Meadow
├── icon-192.png          # Ikon PWA
├── icon-512.png          # Ikon PWA
├── manifest.webmanifest  # Informasi instalasi aplikasi
├── sw.js                 # Cache untuk penggunaan offline
└── README.md             # Panduan ini
```

**Tidak perlu npm, Node.js, app builder, Android Studio, APK, atau komputer.**

## Updating v1 to v2
If a GitHub Pages repository for v1 already exists, upload all v2 extracted files with identical names and choose Commit changes, replacing existing versions. Keep files at root. Open GitHub Pages URL after deploy; if old visuals persist, close installed app and reopen/reload, or clear its site data (this can reset local progress).

The full set of future world graphics is not implemented yet; this visual update primarily replaces Lulu character assets and refreshes the visual shell.
