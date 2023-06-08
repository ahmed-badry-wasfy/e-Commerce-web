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

// show protact in  page And get Data from Data Js File
(masterPritactHtml = function (protactMaster) {
  // get protact from data
  let getProtact = protactMaster.map((pro) => {
    return ` <div class="conatntBox">
      <img src="${pro.imges}" alt="">
      <span id="addTocard">Add To Card</span>
      <div class="trag">
          <div class="seal">
        <p>${pro.title}</p>
${
  pro.isMe === "y"
    ? " <button class='uptat' onclick=uptat(" +
      pro.id +
      ")>Uptate</button>  <button class='delat' onclick=delat(" +
      pro.id +
      ")>delet</button>  "
    : ""
}
  
              <p>${pro.price}</p>
          </div
          <div class="like">
            <i id="shop" onclick="addProtact(${
              pro.id
            })" class="fa-solid fa-cart-shopping"></i>
            <i class="fa-regular fa-heart" onclick="fotrets(${pro.id})"></i>
            <i class="fa-solid fa-circle-info"onclick="fovret(${pro.id})"></i>
            </div>
      </div>
      </div>
`;
  });
  // Add protact to html
  parentProtact.innerHTML = getProtact.join("");
  // Add color to icon When Choses
  let shopcardicon = document.querySelectorAll("#shop");
  shopcardicon.forEach((icon) => {
    icon.addEventListener("click", function () {
      icon.style.color = "#337ab7";
    });
  });
})(JSON.parse(localStorage.getItem("master")) || protactMastere);

//  check if there Item In Local Stora Or Not And Add Or Not Add
let arrMasterPage;

function checkItemINlocalStor() {
  if (localStorage.getItem("masterpage")) {
    arrMasterPage = JSON.parse(localStorage.getItem("masterpage"));
    for (let i = 0; i < arrMasterPage.length; i++) {
      shopingCardDiv.innerHTML += `<div class="chose">
        <img src="${arrMasterPage[i].imges}" alt="">
        <div class="contant">
            <p>${arrMasterPage[i].title}</p>
            <p>${arrMasterPage[i].price}</p>
            <p>${arrMasterPage[i].quint}</p>
            <i id="remove"class="fa-solid fa-xmark"></i>
        </div>
      </div>`;
      countAddToCard.innerHTML = arrMasterPage.length;
    }
  } else {
    arrMasterPage = [];
  }
}
checkItemINlocalStor();

// add protact to card
// Add Protact To shope stor
function addProtact(id) {
  let protactMaster =
    JSON.parse(localStorage.getItem("master")) || protactMastere;
  let prodact = protactMaster.find((item) => item.id == id);
  let choseItems = arrMasterPage.some((i) => i.id === prodact.id);
  if (choseItems) {
    arrMasterPage = arrMasterPage.map((p) => {
      if (p.id === prodact.id) p.quint += 1;
      return p;
    });
  } else {
    arrMasterPage.push(prodact);
  }
  shopingCardDiv.innerHTML = "";
  arrMasterPage.forEach((item) => {
    shopingCardDiv.innerHTML += `<div class="chose">
      <img src="${item.imges}" alt="">
      <div class="contant">
          <p>${item.title}</p>
          <p>${item.price}</p>
          <p>${item.quint}</p>
          <i id="remove" class= "fa-solid fa-xmark" onclick="removeFromCratd(${item.id})"></i>
      </div>
    </div>`;
  });
  // Add Items to localStorage
  localStorage.setItem("masterpage", JSON.stringify(arrMasterPage));
  //   // nuber mach Items Chosess
  countAddToCard.innerHTML = arrMasterPage.length;
}

// remove form card protact تعديل
function removeFromCratd(id) {
  let locaLoage = JSON.parse(localStorage.getItem("masterpage"));
  let loc = locaLoage.find((i) => i.id == id);
  let items = locaLoage.filter((item) => item.id !== loc.id);
  localStorage.setItem("masterpage", JSON.stringify(items));
  let go = JSON.parse(localStorage.getItem("masterpage")).map((it) => {
    return `<div class="chose">
    <img src="${it.imges}" alt="">
    <div class="contant">
        <p>${it.title}</p>
        <p>${it.price}</p>
        <p>${it.quint}</p>
        <i id="remove" class= "fa-solid fa-xmark" onclick="removeFromCratd(${it.id})"></i>
    </div>
  </div>`;
  });
  shopingCardDiv.innerHTML = go;
  countAddToCard.innerHTML = --arrMasterPage.length;
}

// add fovret
let fovretArry = [];
function fovret(id) {
  let addToFovret = protactMastere.find((item) => item.id === id);

  fovretArry.push(addToFovret);
  localStorage.setItem("fovrets", JSON.stringify(fovretArry));

  window.location = "fovretpage.html";
}

///// Searsh Items With Title
let clickH = document.getElementById("searchIcon");
clickH.onclick = function () {
  let protactMaster =
    JSON.parse(localStorage.getItem("master")) || protactMastere;

  if (searchInput.value != "") {
    function searchByTitle(title, protactMaster) {
      let titleS = protactMaster.filter(
        (item) => item.title.indexOf(title) != -1
      );
      masterPritactHtml(titleS);
    }
    searchByTitle(searchInput.value.toUpperCase().trim(), protactMaster);
  }
  if (searchInput.value == "") {
    masterPritactHtml(protactMaster);
  }
  searchInput.classList.toggle("none");
};

// Addd items to fovrets card
let arryFovrts = [];
if (localStorage.getItem("fovret") != null) {
  arryFovrts = JSON.parse(localStorage.getItem("fovret"));
} else {
  arryFovrts = [];
}

function fotrets(item) {
  let pootactLoOrData =
    JSON.parse(localStorage.getItem("master")) || protactMastere;

  let itemFovret = pootactLoOrData.find((items) => items.id == item);
  arryFovrts.push(itemFovret);
  //  add arry to localStorage
  localStorage.setItem("fovret", JSON.stringify(arryFovrts));
}

// uptat data
function uptat(i) {
  localStorage.setItem("id", i);
  window.location = "updat.html";
}

// delat protact is me
function delat(e) {
  let remove = JSON.parse(localStorage.getItem("master"));
  let filets = remove.filter((item) => item.id !== e);
  localStorage.setItem("master", JSON.stringify(filets));
  masterPritactHtml(filets);

  let removeIsme = JSON.parse(localStorage.getItem("isme"));

  let filterIsme = removeIsme.filter((flit) => flit.id !== e);
  localStorage.setItem("isme", JSON.stringify(filterIsme));
}
