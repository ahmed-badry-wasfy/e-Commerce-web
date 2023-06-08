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
let containerDitles = document.querySelector(".datles .container");
let getItemFromeLocalFovret = JSON.parse(localStorage.getItem("fovrets"));

function showDitelas() {
  let localStorageGet = getItemFromeLocalFovret.map((item) => {
    containerDitles.innerHTML = ` <div class="boxDitales">
                
    <div class="boximgs">
        <img class="img" src="${item.imges}" alt="">
        <ul>
            <li><img src="${item.imgesOne}" alt=""></li>
            <li><img src="${item.imgesTwo}" alt=""></li>
            <li><img src="${item.imgesThree}" alt=""></li>
            </u>
    </div>
    <div class="containt">
        <h2>${item.title}</h2>
        <p>Nulla eget sem vitae eros pharetra viverra. <br> Nam vitae luctus ligula. Mauris consequat
            ornare
            feugiat.</p>
        <p>price:$ ${item.price}</p>
        <p>Size:${item.size}</p>
        <h3>For: ${item.for}</h3>
    </div>
</div>`;
  });
}
showDitelas();

let listImgs = document.querySelectorAll(".boxDitales .boximgs ul li img");
let mineImgs = document.querySelector(".boxDitales .boximgs img");

for (let i = 0; i < listImgs.length; i++) {
  listImgs[i].addEventListener("mouseover", function () {
    console.log(listImgs[i].src);
    mineImgs.src = listImgs[i].src;
  });
}
