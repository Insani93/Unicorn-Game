# Unicorn Magic World — iPad Natural Voice Fix v6.2.2

## Apa yang berubah?
- Suara cadangan eSpeak yang terdengar pecah/robotik **dihapus**. File `voice_fallback.mp3` tidak lagi dibutuhkan.
- iPad memakai **Text-to-Speech asli Safari** dan menyediakan pilihan bahasa Inggris melalui **Parent Corner → Voice Studio**. Orang tua dapat mendengarkan dan memilih karakter suara yang disukai.
- Default tersimpan dari v6.2.1 yang memilih `Offline voice` otomatis dikembalikan ke `system` tanpa menghapus progres angka/huruf.
- Musik dikurangi gangguannya: pada iPad musik berhenti selama suara belajar dan diputar kembali setelahnya bila tersedia.
- Audio dinyalakan melalui sentuhan tombol **Coba Suara Lulu** di awal game.
- Gameplay, kurikulum 0–20/A–Z, 47 misi, animasi G→g→Grapes, 6 musik world, dan desain tablet tetap dipertahankan.

## Update lewat GitHub (Samsung)
1. Ekstrak ZIP dan upload semua file baru ke root repository GitHub Pages seperti sebelumnya. Jangan upload ZIP-nya.
2. Commit ke branch yang dipakai GitHub Pages. File `voice_fallback.mp3` lama boleh dibiarkan di GitHub; kode baru **tidak memakainya**. Kalau ingin, hapus file itu nanti (bukan keharusan).
3. Di iPad buka alamat game langsung di Safari, refresh, lalu pilih **Coba Suara Lulu**.
4. Buka **Parent Corner → Voice Studio → Test Lulu**. Pilih suara English yang terdengar paling natural dan pilih **Use this voice**.
5. Bila suara belum terdengar, periksa suara bahasa Inggris di iPad **Settings → Accessibility → Spoken Content → Voices**. Unduh enhanced voice bila tersedia. Dukungan suara di Safari dapat berbeda dari Spoken Content.
6. Jangan hapus data situs jika ingin mempertahankan progres lokal. Untuk menguji versi terbaru, gunakan reload halaman Safari dan tutup-buka ikon Home Screen.

## Batasan
Ini memakai suara sintetis iPad, bukan rekaman manusia; kualitas tergantung voice yang tersedia. Pengujian lintas browser dilakukan secara simulasi Chromium, **bukan** perangkat iPad fisik. Jika Safari tetap tidak dapat berbicara, solusi kualitas paling konsisten berikutnya adalah voice-over manusia yang direkam dan dimasukkan sebagai file audio berlisensi.
