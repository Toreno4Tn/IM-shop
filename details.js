let cart = [];

function setCategory(type) {
  setActiveMenu(type);
  const productsGrid = document.getElementById("products-grid");

  if (type === "femme") {
    productsGrid.innerHTML = `
      <div class="product" onclick="openProduct(
'Jeans wide leg taille basse',
'175 DT',
'../img/00019666401-a4o.webp'
)">
  <img src="../img/00019180401-28-a1t.webp">
  <h3>Jeans wide leg taille basse</h3>
  <p>175 DT</p>
</div>

<div class="product" onclick="openProduct(
'Jeans wide leg',
'79 DT',
'../img/05004335811-a4o.webp'
)">
  <img src="../img/05004335811-28-p.webp">
  <h3>Jeans wide leg</h3>
  <p>79 DT</p>
</div>

<div class="product" onclick="openProduct(
'ROBE MIDI CAPE',
'149 DT',
'../img/01191777106-a4o.webp'
)">
  <img src="../img/01191777106-28-p.webp">
  <h3>ROBE MIDI CAPE</h3>
  <p>149 DT</p>
</div>

<div class="product" onclick="openProduct(
'T-shirt manches courtes imprime',
'69 DT',
'../img/01349443251-a4o.webp'
)">
  <img src="../img/01349443251-p.webp">
  <h3>T-shirt manches courtes imprime</h3>
  <p>69 DT</p>
</div>

<div class="product" onclick="openProduct(
'T-shirt a manches longues asymetrique',
'89 DT',
'../img/07545360462-a4o.webp'
)">
  <img src="../img/07545360462-p.webp">
  <h3>T-shirt a manches longues asymetrique</h3>
  <p>89 DT</p>
</div>

<div class="product" onclick="openProduct(
'Sac a franges',
'199 DT',
'../img/00496175717-a4o.webp'
)">
  <img src="../img/00496175717-p.webp">
  <h3>Sac a franges</h3>
  <p>199 DT</p>
</div>

<div class="product" onclick="openProduct(
'Baskets skate Miffy',
'199 DT',
'../img/11420664001-a4o.webp'
)">
  <img src="../img/11420664001-01-b1o.webp">
  <h3>Baskets skate Miffy</h3>
  <p>199 DT</p>
</div>

<div class="product" onclick="openProduct(
'Bonnet en maille',
'89 DT',
'../img/00731702712-a4o.webp'
)">
  <img src="../img/00731702712-p.webp">
  <h3>Bonnet en maille</h3>
  <p>89 DT</p>
</div>

      `;
  } else {
    productsGrid.innerHTML = `
      <div class="product" onclick="openProduct(
'Classic Rugby Polo - Navy',
'72 DT',
'../img/M-0125-KT-5638_NAVY2030.webp'
)">
  <img src="../img/M-0125-KT-5638_NAVY2030.webp">
  <h3>Classic Rugby Polo - Navy</h3>
  <p>72 DT</p>
	  
</div>

<div class="product" onclick="openProduct(
'Classic Sportcap - Beige',
'60 DT',
'../img/M-0125-HW-5670-ARC_Ivory_0207.webp'
)">
  <img src="../img/M-0125-HW-5670-ARC_Ivory_0207.webp">
  <h3>Classic Sportcap - Beige</h3>
  <p>60 DT</p>
</div>

<div class="product" onclick="openProduct(
'Classic Hoodie - Navy',
'175 DT',
'../img/M-0125-KT-5632_NAVY2103.webp'
)">
  <img src="../img/M-0125-KT-5632_NAVY2103.webp">
  <h3>Classic Hoodie - Navy</h3>
  <p>175 DT</p>
</div>

<div class="product" onclick="openProduct(
'Slides - Bone',
'40 DT',
'../img/OWL-SLIDES-bone_01.webp'
)">
  <img src="../img/OWL-SLIDES-bone_01.webp">
  <h3>Slides - Bone</h3>
  <p>40 DT</p>
</div>

<div class="product" onclick="openProduct(
'Muskoka Tee - Deep Olive',
'40 DT',
'../img/M-0425-KT-6069_DEEPOLIVE4351.jpg'
)">
  <img src="../img/M-0425-KT-6069_DEEPOLIVE4351.jpg">
  <h3>Muskoka Tee - Deep Olive</h3>
  <p>40 DT</p>
</div>

<div class="product" onclick="openProduct(
'Muskoka Sweatpant - Deep Olive',
'70 DT',
'../img/M-0425-KB-6068_DEEPOLIVE4499.jpg'
)">
  <img src="../img/M-0425-KB-6068_DEEPOLIVE4499.jpg">
  <h3>Muskoka Sweatpant - Deep Olive</h3>
  <p>70 DT</p>
</div>

<div class="product" onclick="openProduct(
'Batman x The Joker Split Varsity Jacket - Black',
'170 DT',
'../img/C-0126-OT-7371_BLACK8505.webp'
)">
  <img src="../img/C-0126-OT-7371_BLACK8505.webp">
  <h3>Batman x The Joker Split Varsity Jacket - Black</h3>
  <p>170 DT</p>
</div>

<div class="product" onclick="openProduct(
'1998 Kentucky Wildcats Warm Up Jacket - Royal Blue',
'90 DT',
'../img/C-0126-KT-7079_BLUE8057_d417d585-3522-49cf-802f-a5b36d7ebafa.webp'
)">
  <img src="../img/C-0126-KT-7079_BLUE8057_d417d585-3522-49cf-802f-a5b36d7ebafa.webp">
  <h3>1998 Kentucky Wildcats Warm Up Jacket - Royal Blue</h3>
  <p>90 DT</p>
</div>

      `;
  }
}

function openProduct(name, price, image) {
  document.getElementById("modal-title").innerText = name;
  document.getElementById("modal-price").innerText = price;
  document.getElementById("modal-img").src = image;
  document.getElementById("product-modal").classList.remove("hidden");
}

function addToBag() {
    const title = document.getElementById('modal-title').innerText;
    const priceText = document.getElementById('modal-price').innerText;
    const img = document.getElementById('modal-img').src;
    const price = parseInt(priceText.replace(' DT', ''));

    cart.push({ title, price, img });

    const lastItemContainer = document.getElementById('last-added-item');
    lastItemContainer.innerHTML = `
        <img src="${img}" style="width: 80px; height: auto;">
        <div>
            <h4 style="margin:0; font-size:14px;">${title}</h4>
            <p style="font-weight:bold; margin:5px 0;">${price}.00 DT</p>
        </div>
    `;

    updateCartCount();
    document.getElementById('side-cart-count').innerText = cart.length;
    closeProduct();
    toggleSideCart();
}

// Baki el-fonctions (toggleCart, renderCart, etc.) khalihom kima homa...
// Ma tensech t-update "updateCartCount" dima
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

function toggleSideCart() {
    document.getElementById('side-cart').classList.toggle('hidden');
}

function closeProduct() {
    document.getElementById('product-modal').classList.add('hidden');
}

function toggleCart() {
    document.getElementById('cart-modal').classList.toggle('hidden');
    renderCart();
}

function renderCart() {
    const list = document.getElementById('cart-items-list');
    const totalEl = document.getElementById('cart-total');
    list.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        list.innerHTML += `
            <div class="cart-item" style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
                <img src="${item.img}" width="50">
                <div style="flex:1;">
                    <h4 style="margin:0; font-size:12px;">${item.title}</h4>
                    <span>${item.price} DT</span>
                </div>
                <button onclick="removeFromCart(${index})" style="color:red; border:none; background:none; cursor:pointer;"><i class="fa fa-trash"></i></button>
            </div>`;
    });
    totalEl.innerText = total + " DT";
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
    updateCartCount();
}

function showCheckoutForm() {
    if(cart.length === 0) return alert("Panier vide!");
    document.getElementById('checkout-form').classList.remove('hidden');
    document.getElementById('cart-summary').classList.add('hidden');
}

function setActiveMenu(type) {
    document.getElementById("homme").classList.toggle("active", type === "homme");
    document.getElementById("femme").classList.toggle("active", type === "femme");
}
function confirmOrder() {
    const name = document.getElementById('cust-name').value;
    const phone = document.getElementById('cust-phone').value;
    const address = document.getElementById('cust-address').value;

    // 1. Verif elli l-ma3loumet mawjouda
    if (!name || !phone || !address) {
        alert("Aman kammal l-ma3loumet l-kol (Ism, Tel, w Adresse)!");
        return;
    }

    // 2. Alert mta3 nja7 l-amliya
    alert(`Thnx ${name}! For Your Shoping , We will call you on ${phone} When The delivery reaches The state , we hope you will return again ❤️.`);

    // 3. Fassa5 l-panier (Reset)
    cart = [];
    updateCartCount();
    
    // 4. Sakker el-modals w raja3 l-vibe l-aslou
    document.getElementById('checkout-form').classList.add('hidden');
    document.getElementById('cart-summary').classList.remove('hidden');
    toggleCart(); 

    // (Optional) Fassa5 l-input fields bech l-marra l-jaya yabda ndhif
    document.getElementById('cust-name').value = '';
    document.getElementById('cust-phone').value = '';
    document.getElementById('cust-address').value = '';
}
// Hadhi t7ot-ha f ekher el-fichier details.js
// Bech awel ma t-loader el-page, i7otlek les produits Homme
setCategory('homme');