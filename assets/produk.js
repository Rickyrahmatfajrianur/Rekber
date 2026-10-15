/*
  DATA PRODUK TOKO RESMI
  ----------------------
  Edit daftar di bawah untuk menambah / mengubah / menghapus produk.
  - game      : nama game (dipakai juga untuk tombol filter)
  - judul     : judul singkat akun
  - tag       : poin-poin singkat (maks. 3–4 agar rapi)
  - harga     : angka tanpa titik, contoh 850000  (tampil otomatis jadi Rp850.000)
  - garansi   : contoh "7 hari"
  - foto      : (opsional) path gambar, contoh "/img/akun-1.jpg" — simpan file di folder /img
  - beli      : link tombol beli, contoh link WhatsApp resmi dengan pesan otomatis
  - terjual   : true jika sudah terjual (kartu tetap tampil dengan label TERJUAL)

  Hanya tampilkan akun yang game-nya mengizinkan pengalihan akun dan sudah lolos karantina.
*/
window.PRODUK_TOKO = [
  {
    game: "[Game A]",
    judul: "Akun [rank] · [jumlah] hero/skin",
    tag: ["Server [ID]", "Binding dilepas", "Email bisa diganti"],
    harga: 0,
    garansi: "7 hari",
    foto: "",
    beli: "[LINK_WHATSAPP_RESMI]",
    terjual: false
  },
  {
    game: "[Game B]",
    judul: "Akun level [XX] · [item unggulan]",
    tag: ["Server [ID]", "Riwayat pemilik tercatat"],
    harga: 0,
    garansi: "7 hari",
    foto: "",
    beli: "[LINK_WHATSAPP_RESMI]",
    terjual: false
  },
  {
    game: "[Game A]",
    judul: "Akun starter · [rank] · [jumlah] skin",
    tag: ["Server [ID]", "Binding dilepas"],
    harga: 0,
    garansi: "7 hari",
    foto: "",
    beli: "[LINK_WHATSAPP_RESMI]",
    terjual: false
  }
];
