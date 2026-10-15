# Website Rekber + Marketplace Akun Game (mockup)

Website statis (HTML, CSS, JS biasa). Tidak perlu install apa pun.

## Isi folder
- `index.html` — landing page rekber
- `marketplace.html` — daftar akun game (filter game, cari, urutkan)
- `detail-akun.html` — detail akun (`detail-akun.html?id=1` s/d `?id=6`)
- `cek-status.html` — cek status transaksi rekber
- `style.css` — semua gaya tampilan (warna utama di bagian `:root`)
- `data.js` — data akun CONTOH; nanti diganti data dari database

## Pasang di GitHub Pages
1. Buat repository baru di GitHub (misal `rekber-web`).
2. Upload semua file di folder ini ke repository (Add file → Upload files).
3. Buka **Settings → Pages**, pada *Source* pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu Save.
4. Tunggu 1–2 menit, website tampil di `https://<username>.github.io/rekber-web/`.

## Atau pasang di Vercel
Import repository di vercel.com → Framework Preset: **Other** → Deploy.

## Catatan
- Teks dalam kurung siku seperti `[Nama Rekber]`, `[FEE %]`, `[NOMOR RESMI]` masih isian.
- Semua tombol (buat transaksi, konfirmasi, sengketa, cek admin) masih simulasi — belum tersambung ke database atau pembayaran.
