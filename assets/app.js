// RekberHub — interaksi situs (tanpa backend)
(function () {
  'use strict';
  var root = document.documentElement;
  var THEME_KEY = 'rh-theme';

  function rupiah(n) {
    return 'Rp' + Math.round(n).toLocaleString('id-ID');
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // Tarif usulan blueprint — ubah di sini bila tarif berubah
  function hitungFee(harga) {
    if (harga < 100000) return 5000;
    if (harga < 500000) return 10000;
    if (harga < 1000000) return 15000;
    if (harga < 5000000) return Math.round(harga * 0.02);
    return Math.round(harga * 0.015);
  }

  function isDark() {
    var t = root.getAttribute('data-theme');
    if (t) return t === 'dark';
    return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  function initTheme() {
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var next = isDark() ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
      });
    });
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  function initLacak() {
    var form = document.querySelector('[data-lacak]');
    if (!form) return;
    var input = form.querySelector('input');
    var msg = form.querySelector('.form-msg');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var id = input.value.trim().toUpperCase();
      input.value = id;
      if (!/^RKB-[A-Z0-9]{2,}(-[A-Z0-9]{2,})*$/.test(id)) {
        msg.textContent = 'Format ID tidak valid. Contoh: RKB-7Q4M-X2';
        msg.classList.add('err');
        return;
      }
      msg.classList.remove('err');
      msg.textContent = 'Pelacakan online akan aktif setelah sistem transaksi diluncurkan. Sementara itu, tanyakan status lewat WhatsApp resmi.';
    });
  }

  function initCalc() {
    var form = document.querySelector('[data-calc]');
    if (!form) return;
    var harga = form.querySelector('#calc-harga');
    var oleh = form.querySelector('#calc-oleh');
    var out = {
      fee: form.querySelector('[data-out="fee"]'),
      bayar: form.querySelector('[data-out="bayar"]'),
      terima: form.querySelector('[data-out="terima"]')
    };
    function update() {
      var digits = harga.value.replace(/\D/g, '');
      var v = digits ? parseInt(digits, 10) : 0;
      if (!v) { out.fee.textContent = out.bayar.textContent = out.terima.textContent = '—'; return; }
      var fee = hitungFee(v);
      var bagianPembeli = oleh.value === 'pembeli' ? fee : oleh.value === 'bagi' ? Math.ceil(fee / 2) : 0;
      var bagianPenjual = fee - bagianPembeli;
      out.fee.textContent = rupiah(fee);
      out.bayar.textContent = rupiah(v + bagianPembeli);
      out.terima.textContent = rupiah(v - bagianPenjual);
    }
    harga.addEventListener('input', function () {
      var digits = harga.value.replace(/\D/g, '').slice(0, 12);
      harga.value = digits ? parseInt(digits, 10).toLocaleString('id-ID') : '';
      update();
    });
    oleh.addEventListener('change', update);
    form.addEventListener('submit', function (e) { e.preventDefault(); });
    update();
  }

  function initToko() {
    var grid = document.querySelector('[data-products]');
    if (!grid) return;
    var chipsEl = document.querySelector('[data-chips]');
    var countEl = document.querySelector('[data-count]');
    var data = Array.isArray(window.PRODUK_TOKO) ? window.PRODUK_TOKO : [];
    var games = ['Semua'];
    data.forEach(function (p) { if (games.indexOf(p.game) === -1) games.push(p.game); });
    var active = 'Semua';

    function card(p) {
      var media = p.foto
        ? '<img src="' + esc(p.foto) + '" alt="Foto akun ' + esc(p.judul) + '" loading="lazy">'
        : '<span class="ph-label">[Foto bukti akun]</span>';
      var sold = p.terjual ? '<span class="sold">TERJUAL</span>' : '';
      var tags = (p.tag || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
      var price = p.harga ? rupiah(p.harga) : 'Rp[HARGA]';
      var btn = p.terjual
        ? '<span class="btn btn-ghost btn-sm" aria-disabled="true">Terjual</span>'
        : '<a class="btn btn-primary btn-sm" href="' + esc(p.beli || '#') + '" target="_blank" rel="noopener">Tanya / Beli</a>';
      return '<article class="product">' +
        '<div class="product-media">' + media + '<span class="official">TOKO RESMI</span>' + sold + '</div>' +
        '<div class="product-body">' +
          '<span class="product-game">' + esc(p.game) + '</span>' +
          '<h2>' + esc(p.judul) + '</h2>' +
          '<ul class="tags">' + tags + '</ul>' +
          '<div class="product-foot"><div><span class="price">' + price + '</span>' +
          '<span class="warranty">Garansi ' + esc(p.garansi || '-') + '</span></div>' + btn + '</div>' +
        '</div></article>';
    }

    function render() {
      var list = data.filter(function (p) { return active === 'Semua' || p.game === active; });
      grid.innerHTML = list.length
        ? list.map(card).join('')
        : '<div class="empty">Belum ada akun tersedia. Cek lagi nanti atau hubungi WhatsApp resmi.</div>';
      var avail = list.filter(function (p) { return !p.terjual; }).length;
      if (countEl) countEl.textContent = avail + ' akun tersedia';
      if (chipsEl) {
        chipsEl.querySelectorAll('.chip').forEach(function (c) {
          c.setAttribute('aria-pressed', c.getAttribute('data-game') === active ? 'true' : 'false');
        });
      }
    }

    if (chipsEl) {
      chipsEl.innerHTML = games.map(function (g) {
        return '<button type="button" class="chip" data-game="' + esc(g) + '" aria-pressed="false">' + esc(g) + '</button>';
      }).join('');
      chipsEl.addEventListener('click', function (e) {
        var b = e.target.closest('.chip');
        if (!b) return;
        active = b.getAttribute('data-game');
        render();
      });
    }
    render();
  }

  function initConfirm() {
    var opener = document.querySelector('[data-open-confirm]');
    var dlg = document.querySelector('dialog[data-confirm]');
    if (!opener || !dlg) return;
    opener.addEventListener('click', function () {
      if (typeof dlg.showModal === 'function') dlg.showModal();
      else dlg.setAttribute('open', '');
    });
    dlg.querySelectorAll('[data-close]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (typeof dlg.close === 'function') dlg.close();
        else dlg.removeAttribute('open');
      });
    });
  }

  function start() {
    initTheme(); initLacak(); initCalc(); initToko(); initConfirm();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
