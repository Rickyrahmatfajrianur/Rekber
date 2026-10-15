# RekberHub — Website Statis v1

Website publik RekberHub (beranda, Toko Resmi, contoh tampilan transaksi).
HTML + CSS + JavaScript biasa, tanpa build. Mendukung mode terang/gelap dan tampilan HP/desktop.

## Isi folder

```
index.html              Beranda: hero, lacak, layanan, cara kerja, biaya + kalkulator, cek admin, FAQ
toko.html               Katalog Toko Resmi (data dari assets/produk.js)
contoh-transaksi.html   Contoh tampilan detail transaksi (tidak diindeks Google)
assets/style.css        Warna, font, layout
assets/app.js           Mode gelap, kalkulator biaya, filter toko, dialog
assets/produk.js        DATA PRODUK TOKO — edit di sini
favicon.svg             Ikon tab browser
vercel.json             URL bersih (/toko) + header keamanan
```

## 1. Isi placeholder dulu

Cari dan ganti teks berikut di semua file `.html` (Ctrl+Shift+H di VS Code):

| Placeholder | Ganti dengan |
|---|---|
| `[NOMOR WA RESMI]` | Nomor WhatsApp resmi, mis. `0812-xxxx-xxxx` |
| `[LINK_WHATSAPP_RESMI]` | `https://wa.me/62812xxxxxxx?text=Halo%20RekberHub` |
| `[DOMAIN RESMI]` | Domain kamu, mis. `rekberhub.id` |
| `[JAM OPERASIONAL]` | mis. `08.00–22.00` |
| `[LINK_LOGIN]` | Link login dashboard (sementara bisa `#`) |
| `[LINK_SYARAT_LAYANAN]`, `[LINK_KEBIJAKAN_PRIVASI]` | Link halaman legal (sementara bisa `#`) |
| `[7]`, `[3×24 jam]` | Masa garansi dan karantina yang kamu tetapkan |

Produk Toko diatur di `assets/produk.js`. Harga `0` tampil sebagai `Rp[HARGA]`. Foto taruh di folder `img/` lalu isi `foto: "/img/nama-file.jpg"`.

## 2. Coba di komputer

Buka folder ini di VS Code → klik kanan `index.html` → **Open with Live Server**.
(Karena memakai path `/assets/...`, membuka file langsung dengan klik dua kali tidak akan memuat CSS.)

## 3. Deploy ke Vercel (lewat GitHub)

1. Buat repo baru di GitHub, mis. `rekberhub-web`, lalu upload seluruh isi folder ini (bukan folder induknya).
2. Buka vercel.com → **Add New… → Project** → pilih repo `rekberhub-web`.
3. Framework Preset: **Other**. Build Command dan Output Directory dikosongkan.
4. Klik **Deploy**. Situs tampil di `rekberhub-web.vercel.app`.
5. Domain sendiri: Project → **Settings → Domains** → tambahkan domain, lalu ikuti instruksi DNS.

Setiap `git push` ke branch utama otomatis memperbarui website.

## Catatan

- Kalkulator biaya memakai tabel tarif usulan di blueprint. Ubah fungsi `hitungFee` di `assets/app.js` jika tarif berubah.
- Fitur lacak transaksi masih berupa pesan sementara sampai backend (Sprint 2) siap.
- Jangan menampilkan klaim "100% aman" atau testimoni yang belum nyata.
