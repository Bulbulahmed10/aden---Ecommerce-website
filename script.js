//! cart section open & close functionality

const productArr = [];

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
      const imageSrc =
        e.target.parentNode.parentNode.children[0].getAttribute("src");
      //! fetch product name
      const productName = e.target.parentNode.childNodes[3].innerText;

      //! fetch product price
      const productPrice =
        e.target.parentNode.childNodes[7].children[0].childNodes[2].data;

      const product = {
        name: productName,
        price: productPrice,
        img: imageSrc,
        quantityNumber: 1,
      };

      productArr.push(product);

      let allProductPriceArr = [];

      for (const item of productArr) {
        allProductPriceArr.push(parseInt(item.price));
      }

      let cartTotalSubTotalPrice = document.getElementById(
        "cart-total-subtotal"
      );
      let cartTotalPriceTax = document.getElementById("total-price-tax");
      let finalTotalPrice = document.getElementById("finalTotalPrice");
      let totalProductPrice = 0;

      for (let i = 0; i < allProductPriceArr.length; i++) {
        let totalPrice = (totalProductPrice += allProductPriceArr[i]);
        cartTotalSubTotalPrice.innerText = totalPrice;

        cartTotalPriceTax.innerText = (totalPrice * 0.1).toFixed(2);
        finalTotalPrice.innerText =
          parseInt((totalPrice * 0.1).toFixed(2)) + totalPrice;
      }

      document.getElementById("total-cart-length").innerText =
        productArr.length;

      

      const container = document.getElementById("cart-container");
      container.innerHTML = "";

      for (const singleItem of productArr) {
        const newDiv = document.createElement("div");

        newDiv.innerHTML = ` <div class="cart-product-item">
          <div style="display: flex; align-items: center; gap: 10px">
            <p><i class="product-remove fa-solid fa-xmark"></i></p>
            <div id="cart-image-div">
            <img src="${singleItem.img}" alt="" /> 
            </div>
            <p id="cart-product-item-name" class="cart-product-name"> ${
              singleItem.name
            } </p>
          </div>

          <p style="color: red; font-size: 18px">
            $<span id="cart-item-price">${singleItem.price} </span>
          </p>
          <div>
            <button class="btn-plus-minus" onclick="decrement()" >-</button>
            <input
              id="cart-product-quantity-input"
              class="cart-product-input-number"
              type="number"
              min="1"
              value=${singleItem.quantityNumber}
            />
            <button class="btn-plus-minus" onclick="increment()"  >+</button>
          </div>
          <p style="color: red; font-size: 18px">
            $<span id="product-subtotal">${
              singleItem.price * singleItem.quantityNumber
            } </span>
          </p>
        </div>`;

        container.appendChild(newDiv);
      }
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
