// get Element from HTML
let openNav = document.getElementById("opennav");
let ulNav = document.getElementById("navul");
let shopingIcone = document.querySelector(".shopingicone");
let shopingCard = document.querySelector(".cardshope");
let shopingCardDiv = document.querySelector(".cardshope div");
let countAddToCard = document.querySelector(".number");
let parentProtact = document.querySelector(".protact .container .imgprotact");
let searchIcon = document.getElementById("searchIcon");
let searchInput = document.getElementById("search");
let iconeUser = document.querySelector(".fa-user");
let dashUser = document.querySelector(".user");
let welcome = document.querySelector(".user li p");

let userName = localStorage.getItem("name") || "user";
welcome.innerHTML = "welcome " + userName;
iconeUser.onclick = function () {
  dashUser.classList.toggle("showuser");
};

// open icone
function open() {
  // open nav bar
  openNav.onclick = function () {
    ulNav.classList.toggle("showtoggle");
  };
  // open icone shoping cart
  shopingIcone.onclick = function () {
    // searchInput.classList.toggle("none");
    countAddToCard.innerHTML === "0"
      ? console.log("")
      : shopingCard.classList.toggle("show");
  };
}
open();

// let getItemFromLo = JSON.parse(localStorage.getItem("fovret"));

let container = document.querySelector(".table .container .box");

function mapLocale() {
  let lo = JSON.parse(localStorage.getItem("fovret"));
  let localMapFovrets = lo.map((item) => {
    return `<div class="tablebody">
         <img src="${item.imges}" alt="">
        <p>${item.title}</p>
         <p data-set="PRICE">$${item.price}</p>
          <p id="by">$${item.price}</p>
         <button onclick="removeFrom(${item.id})">X</button>
</div>`;
  });
  container.innerHTML = localMapFovrets.join("");
}

mapLocale();

// remove frome page

function removeFrom(i) {
  if (localStorage.getItem("fovret")) {
    let loGet = JSON.parse(localStorage.getItem("fovret"));

    let filterss = loGet.filter((item) => item.id !== i);

    localStorage.setItem("fovret", JSON.stringify(filterss));

    console.log(filterss);

    mapLocale(filterss);
  }
}
