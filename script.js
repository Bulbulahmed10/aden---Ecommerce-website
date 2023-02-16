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



//! add to cart section functionality

const parentDiv = document.getElementsByClassName("product-list-side");

for (const item of parentDiv) {
  item.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {

      //! fetch product image
      document
        .getElementById("cart-image-div")
        .appendChild(e.target.parentNode.previousSibling.previousSibling);


      //! fetch product name
      document.getElementById("cart-product-item-name").innerText =
        e.target.parentNode.childNodes[3].innerText;



      //! fetch product price
      const productPrice =
        e.target.parentNode.childNodes[7].children[0].childNodes[2].data;
      document.getElementById("cart-item-price").innerText = productPrice;


      //! input field
      const cartInputField = document.getElementById(
        "cart-product-countity-input"
      );
      let cartInputFirstValue = 1;
      cartInputField.value = cartInputFirstValue;



      //! subTotal & total fields

      const subTotalField = document.getElementById("product-subtotal");
      const cartTotalSubtotal = document.getElementById("cart-total-subtotal");
      const totalPriceTax = document.getElementById("total-price-tax");

      subTotalField.innerText = parseInt(productPrice) * cartInputFirstValue;
      console.log(cartTotalSubtotal.innerText);
      cartTotalSubtotal.innerText = parseInt(productPrice) * cartInputFirstValue;
      totalPriceTax.innerText = (parseInt(productPrice) * cartInputFirstValue * 0.1).toFixed(2);


      //! increment functionality
      const incrementButton = document.getElementById("incrementButton");

      incrementButton.addEventListener("click", () => {
        decrementButton.disabled = false;

        cartInputField.value++;
        let totalPrice = cartInputField.value * parseInt(productPrice);
        subTotalField.innerText = totalPrice;
        cartTotalSubtotal.innerText = totalPrice;

        totalPriceTax.innerText = (parseInt(cartTotalSubtotal.innerText) * 0.1).toFixed(2);
      });



      //! decrement functionality

      const decrementButton = document.getElementById("decrementButton");

      decrementButton.addEventListener("click", () => {
        if (cartInputField.value <= 1) {
          decrementButton.disabled = true;
        } else {
          cartInputField.value--;
          let totalPrice = cartInputField.value * parseInt(productPrice);
          subTotalField.innerText = totalPrice;
          cartTotalSubtotal.innerText = totalPrice;
          totalPriceTax.innerText = (parseInt(cartTotalSubtotal.innerText) * 0.1).toFixed(2);
        }
      });
    }
  });
}

//! swiper js functionality

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
