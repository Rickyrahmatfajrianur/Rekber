// DATA CONTOH untuk mockup.
// Nanti bagian ini diganti dengan data dari database (misal tabel "akun" di Supabase).
var DATA_AKUN = [
  { id: 1, game: 'Mobile Legends', title: 'Akun Mythic Glory, 140 skin', spec: 'Server ID · Email bisa diganti · 98 hero', harga: 850000, seller: 'penjual_01', verified: true,
    detail: { 'Rank tertinggi': 'Mythic Glory', 'Jumlah hero': '98 hero', 'Jumlah skin': '140 skin', 'Server': 'Indonesia', 'Login': 'Moonton + email', 'Bisa ganti email': 'Ya' } },
  { id: 2, game: 'Honor of Kings', title: 'Akun Grandmaster, skin legend lengkap', spec: 'Global · Login Google · 72 hero', harga: 600000, seller: 'penjual_02', verified: true,
    detail: { 'Rank tertinggi': 'Grandmaster', 'Jumlah hero': '72 hero', 'Jumlah skin': '[JUMLAH] skin', 'Server': 'Global', 'Login': 'Google', 'Bisa ganti email': 'Ya' } },
  { id: 3, game: 'Free Fire', title: 'Akun Heroic, bundle langka', spec: 'Login Facebook · Pindah akses penuh', harga: 350000, seller: 'penjual_03', verified: false,
    detail: { 'Rank tertinggi': 'Heroic', 'Bundle': '[DAFTAR BUNDLE]', 'Server': 'Indonesia', 'Login': 'Facebook', 'Bisa ganti email': 'Ya' } },
  { id: 4, game: 'Mobile Legends', title: 'Akun Epic murah untuk mulai push', spec: 'Server ID · 45 hero · 30 skin', harga: 150000, seller: 'penjual_04', verified: true,
    detail: { 'Rank tertinggi': 'Epic', 'Jumlah hero': '45 hero', 'Jumlah skin': '30 skin', 'Server': 'Indonesia', 'Login': 'Moonton', 'Bisa ganti email': 'Ya' } },
  { id: 5, game: 'Genshin Impact', title: 'AR 58, banyak karakter bintang 5', spec: 'Asia · Email bisa diganti', harga: 1200000, seller: 'penjual_05', verified: true,
    detail: { 'Adventure Rank': 'AR 58', 'Karakter bintang 5': '[JUMLAH]', 'Server': 'Asia', 'Login': 'Email', 'Bisa ganti email': 'Ya' } },
  { id: 6, game: 'Honor of Kings', title: 'Akun Diamond, cocok untuk pemula', spec: 'Global · 40 hero', harga: 200000, seller: 'penjual_06', verified: false,
    detail: { 'Rank tertinggi': 'Diamond', 'Jumlah hero': '40 hero', 'Server': 'Global', 'Login': '[METODE LOGIN]', 'Bisa ganti email': '[YA/TIDAK]' } }
];

function rupiah(n) { return 'Rp ' + n.toLocaleString('id-ID'); }
function esc(s) {
  return String(s).replace(/[&<>"]/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
  });
}
