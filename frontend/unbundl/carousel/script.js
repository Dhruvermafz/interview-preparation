document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from JSON file
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      const productContainers = document.querySelectorAll(".product-container");

      productContainers.forEach((productContainer) => {
        // Map through each product data and create product card
        const productCards = data.map((product) => {
          return `
            <div class="product-card">
              <div class="product-image">
                <span class="discount-tag">${product.discount}</span>
                <img src="${product.image}" class="product-thumb" alt="" />
                <button class="card-btn">add to wishlist</button>
              </div>
              <div class="product-info">
                <h2 class="product-brand">${product.brand}</h2>
                <p class="product-short-description">${product.short_description}</p>
                <span class="price">${product.price}</span><span class="actual-price">${product.actual_price}</span>
              </div>
            </div>
          `;
        });

        // Append product cards to product container
        productContainer.innerHTML = productCards.join("");
      });
    })
    .catch((error) => console.log("Error fetching products:", error));
});

// Carousel functionality
const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
