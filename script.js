if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register("./service-worker.js");
      console.log("PWA aktif");
    } catch (e) {
      console.log("Gagal:", e);
    }
  });
}if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register("./service-worker.js");
      console.log("SW aktif");
    } catch (err) {
      console.log("SW gagal:", err);
    }
  });
}
// DATA KERANJANG
let cart = [];

// FORMAT RUPIAH
function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

// TAMBAH MENU KE KERANJANG
function addToCart(nama, harga) {
  let item = cart.find(i => i.nama === nama);

  if (item) {
    item.qty += 1;
  } else {
    cart.push({ nama, harga, qty: 1 });
  }

  renderCart();
}

// TAMPILKAN KERANJANG
function renderCart() {
  let cartList = document.getElementById("cart");
  cartList.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    let subtotal = item.harga * item.qty;
    total += subtotal;

    cartList.innerHTML += `
      <div class="cart-item">
        <div>
          <b>${item.nama}</b><br>
          ${item.qty} x ${formatRupiah(item.harga)}
        </div>
        <div>
          ${formatRupiah(subtotal)}
          <button onclick="removeItem(${index})">❌</button>
        </div>
      </div>
    `;
  });

  document.getElementById("total").innerText = formatRupiah(total);
}

// HAPUS ITEM
function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

// RESET TRANSAKSI
function clearCart() {
  cart = [];
  renderCart();
}

// CHECKOUT (SIMULASI)
function checkout() {
  if (cart.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }

  alert("Transaksi berhasil!");
  clearCart();
}
