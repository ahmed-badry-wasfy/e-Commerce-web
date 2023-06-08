let form = document.querySelector(".form");
let btn = document.getElementById("btn");
let inTitle = document.getElementById("title");
let inprice = document.getElementById("price");
let indic = document.getElementById("dic");
let incle = document.getElementById("sel");
let imges = document.getElementById("imges");
let slelactSizeV;
// let masterDtat = JSON.parse(localStorage.getItem("master"));

// v to imgs
let live;

// sleact size
incle.onchange = selactSize;
function selactSize(e) {
  slelactSizeV = e.target.value;
}

btn.onclick = pushNewData;
imges.onchange = getImes;
let arryIsMe = [];

if (localStorage.getItem("isme") != null) {
  arryIsMe = JSON.parse(localStorage.getItem("isme"));
} else {
  arryIsMe = [];
}

// localStorage.setItem("master", JSON.stringify(protactMastere));
function pushNewData(e) {
  let mas = JSON.parse(localStorage.getItem("master")) || protactMastere;

  e.preventDefault();
  let titleIn = inTitle.value;
  let dicIn = indic.value;
  let inpriceIn = inprice.value;

  obj = {
    id: mas.length + 1,
    title: titleIn,
    price: inpriceIn,
    imges: live,
    isMe: "y",
  };
  mas.push(obj);
  arryIsMe.push(obj);
  // console.log(masterDtat);

  localStorage.setItem("master", JSON.stringify(mas));
  localStorage.setItem("isme", JSON.stringify(arryIsMe));

  inTitle.value = "";
  indic.value = "";
  inprice.value = "";
  window.location = "homeShope.html";
}

function getImes() {
  let file = this.files[0];
  console.log(file.type);
  live = URL.createObjectURL(file);
  reders(file);
}

function reders(file) {
  let reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = function () {
    live = reader.result;
  };
}
