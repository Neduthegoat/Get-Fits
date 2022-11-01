//Search function
const searchInput = document.getElementById("search");
// let hey = document.getElementById("amount1").innerText;
// console.log(hey);
// $(document).ready(function () {
//   $(".next").click(function () {
//     console.log("clicked");
//   });
// });

products = [
  {
    name: "Treadmill",
    discountPrice: 50,
    originalPrice: 100,
    quantity: 10,
    image: "1.jpg",
    rating: 5,
  },
  {
    name: "Barbell Set",
    discountPrice: 50,
    originalPrice: 100,
    quantity: 10,
    image: "2.jpg",
    rating: 3,
  },
  {
    name: "Rowing machine",
    discountPrice: 50,
    originalPrice: 100,
    quantity: 10,
    image: "3.jpg",
    rating: 3,
  },
  {
    name: "Low-impact treadmills",
    discountPrice: 50,
    originalPrice: 100,
    quantity: 10,
    image: "4.jpg",
    rating: 3,
  },
  {
    name: "Ellipticals",
    discountPrice: 50,
    originalPrice: 100,
    quantity: 10,
    image: "5.jpg",
    rating: 3,
  },
  {
    name: "Resistance bands",
    discountPrice: 50,
    originalPrice: 100,
    quantity: 10,
    image: "6.jpg",
    rating: 3,
  },
  {
    name: "Training bench",
    discountPrice: 50,
    originalPrice: 100,
    quantity: 10,
    image: "7.jpg",
    rating: 3,
  },
  {
    name: "PRODUCT NINJA",
    discountPrice: 50,
    originalPrice: 100,
    quantity: 10,
    image: "8.jpg",
    rating: 3,
  },
];

console.log({ products });
productItem = document.getElementById("productTab");

displayProducts = (element) => {
  newDomElement = element
    .map((element) => {
      return `
          <div class="card">
            <div class="img">
                <a href="viewProduct.html"><img class="productImage" src="${
                  element.image
                }" alt=""></a>
            </div>
            <div class="card-detail">
                <h3 class="productName">${element.name}</h3>
                <div class="star">${getStars(element?.rating)} </div>
                <div class="star">$${element.discountPrice} - $${
        element.originalPrice
      }
            </div>
                <button class="productButton">Add to Cart</button>
            </div>
          </div>`;
    })
    .join("");
  productItem.innerHTML = newDomElement;
};

searchInput.addEventListener("input", (e) => {
  searchString = e.target.value;
  filteredCharacter = products.filter((character) => {
    return character.name.includes(searchString);
  });
  console.log({ filteredCharacter });
  //productItem.innerHTML = products.push(filteredCharacter);
  displayProducts(filteredCharacter);
});

//GENERATE INITIAL LIST
displayProducts(products);

function getStars(rating) {
  let stars = "";
  for (let i = 0; i < rating; i++) {
    stars += "⭐️";
  }
  return stars;
}

//INCREMENT AND REDUCE AMOUNT PER PRODUCT
// increase = document.getElementById("incr");
// redunce = document.getElementById("decr");

// increase.onclick() = (params) =>{
//   if (params >= 0) {
//     params += 1;
//   }
//   document.getElementById("params").innerText =
//     parseInt(document.getElementById("params").innerText) + 1;
//   console.log({ params });
// }

//FOR INCREASE
increment = (amount) => {
  amount = document.getElementById("amount").innerText;
  if (amount >= 0) {
    amount += 1;
  }
  result = document.getElementById("amount").innerText =
    parseInt(document.getElementById("amount").innerText) + 1;
  console.log({ result });
};

//FOR REDUCE
reduction = (amount) => {
  amount = document.getElementById("amount").innerText;
  if (amount > 0) {
    amount -= 1;
  }
  ReadableStreamDefaultReader = document.getElementById("amount").innerText =
    parseInt(document.getElementById("amount").innerText) - 1;
  console.log({ result });
};

//IMAGE CAROUSEL WITH JQUERY
// $(document).ready(function () {
//   $(".carouselActive").show();
//   $("#productImageSlider").hover(
//     function () {
//       $(".btn-carousel").show();
//     },
//     function () {
//       $(".btn-carousel").hide();
//     }
//   );
//   $(".btn-carousel").on("click", function () {
//     var id = $(this).attr("id");
//     var nav;
//     if (id == "previous") {
//       nav = $("img.carouselActive").prev("img");
//       if (nav.length == 0) nav = $("img").last();
//     } else if (id == "next") {
//       nav = $("img.carouselActive").next("img");
//       if (nav.length == 0) nav = $("img").first();
//     }
//     $("img.carouselActive").hide();
//     $("img.carouselActive").removeClass(".carouselActive");
//     nav.addClass(".carouselActive");
//     nav.fadeIn(1000);
//   });
// });

//TEST IF JQUERY WORKS
// $(document).ready(function () {
//   $(".next").click(function () {
//     console.log("clicked");
//   });
// });
