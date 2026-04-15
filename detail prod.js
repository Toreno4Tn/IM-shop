<script>
function showDetail(img, title, price) {
  // hide products
  document.querySelector(".products").style.display = "none";

  // show detail
  document.getElementById("productDetail").style.display = "block";

  // change content
  document.getElementById("detailImg").src = img;
  document.getElementById("detailTitle").innerText = title;
  document.getElementById("detailPrice").innerText = price;
}

function back() {
  document.querySelector(".products").style.display = "grid";
  document.getElementById("productDetail").style.display = "none";
}
</script>