let formInput = document.querySelector(".form");
let inputName = document.getElementById("text");
let inputEmail = document.getElementById("email");
let inputPasswrod = document.getElementById("password");
let inputSubmet = document.getElementById("sub");

inputSubmet.onclick = creatData;

// push data to localst

// get Data from localStorage
let arryData;

if (localStorage.getItem("Data") != null) {
  arryData = JSON.parse(localStorage.getItem("Data"));
} else {
  arryData = [];
}

function creatData(e) {
  e.preventDefault();
  if (
    (inputName.value != "") &
    (inputEmail.value != "") &
    (inputPasswrod.value != "")
  ) {
    let youName = inputName.value;
    let youEmail = inputEmail.value;
    let youPassword = inputPasswrod.value;

    // arryData.push(objectData);
    // console.log(arryData);

    localStorage.setItem("name", youName);
    localStorage.setItem("pass", youPassword);
    localStorage.setItem("email", youEmail);

    // clead data from input
    inputName.value = "";
    inputEmail.value = "";
    inputPasswrod.value = "";

    setTimeout(() => {
      window.location = "file.html/login.html";
    }, 1000);
  }
}
