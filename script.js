//! cart section open & close functionality

const cartSection = document.getElementById("cart-section");
document.getElementById("cart-btn").addEventListener("click", () => {
  document.body.style.overflowY = "hidden";
  cartSection.style.width = "100%";
  cartSection.style.visibility = "visible";
});

document.getElementById("remove-cart-section").addEventListener("click", () => {
  cartSection.style.visibility = "hidden";
  document.body.style.overflowY = "scroll";
});

const parentDiv = document.getElementsByClassName("product-list-side");

for (const item of parentDiv) {
  item.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      document
        .getElementById("cart-image-div")
        .appendChild(e.target.parentNode.previousSibling.previousSibling);
      document.getElementById("cart-product-item-name").innerText =
        e.target.parentNode.childNodes[3].innerText;
      document.getElementById("cart-item-price").innerText =
        e.target.parentNode.childNodes[7].children[0].childNodes[1].data;
      console.log(
        e.target.parentNode.childNodes[7].children[0].childNodes[1].data
      );
    }
  });
}

//! swiper js

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".blog-swiper", {
  slidesPerView: "2",
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
