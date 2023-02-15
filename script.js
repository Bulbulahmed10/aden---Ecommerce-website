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

const cartSection = document.getElementById("cart-section");

document.getElementById("cart-btn").addEventListener("click", () => {
  document.body.style.overflowY = "hidden"
  cartSection.style.width = "100%";
  cartSection.style.visibility = "visible";
});

document.getElementById("remove-cart-section").addEventListener("click", () => {
  cartSection.style.visibility = "hidden";
  document.body.style.overflowY = "scroll"

});
