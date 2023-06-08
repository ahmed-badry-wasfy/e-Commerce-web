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

//
let container = document.querySelector(".table .container .box");

let count = 1;

function getDataFromLocal(allData = []) {
  let getDataFromLocalCusmer =
    JSON.parse(localStorage.getItem("masterpage")) || allData;

  let getProtact = getDataFromLocalCusmer.map((pro) => {
    return `<div class="tablebody">
            <img src="${pro.imges}" alt="">
            <p>${pro.title}</p>
            <p data-set="PRICE">$${pro.price}</p>
            <p data-set="PRICE">${pro.quint}</p>
            <div class="btnA">
                <p id="inercount">${count}</p>
            </div>
            <p  id="by">$${pro.price}</p>
            <button onclick="dlat(${pro.id})">X</button>
        </div>`;
  });
  container.innerHTML = getProtact;
}
getDataFromLocal();

function dlat(id) {
  if (localStorage.getItem("masterpage")) {
    let getItem = JSON.parse(localStorage.getItem("masterpage"));

    let filterers = getItem.filter((item) => item.id !== id);

    localStorage.setItem("masterpage", JSON.stringify(filterers));
    getDataFromLocal(filterers);
  }
}
