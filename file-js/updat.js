let locale = JSON.parse(localStorage.getItem("id"));
let LOcaleMaster = JSON.parse(localStorage.getItem("master"));

let finde = LOcaleMaster.find((i) => i.id == locale);

let form = document.querySelector(".form");
let btn = document.getElementById("btn");
let inTitle = document.getElementById("title");
let inprice = document.getElementById("price");
let indic = document.getElementById("dic");
let incle = document.getElementById("sel");
let imges = document.getElementById("imges");
let live;

imges.onchange = getImes;

btn.onclick = uptatDataBtn;

function uptatData() {
  inTitle.value = finde.title;
  inprice.value = finde.price;
  indic.value = finde.price;
  // live = imges;
  live = finde.imges;

  console.log(finde);
}
uptatData();

function uptatDataBtn(e) {
  e.preventDefault();

  finde.title = inTitle.value;
  finde.price = inprice.value;
  finde.price = indic.value;
  finde.imges = live;
  localStorage.setItem("master", JSON.stringify(LOcaleMaster));
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
