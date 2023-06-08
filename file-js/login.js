let inputName = document.getElementById("text");
let inputPasswrod = document.getElementById("password");
let inputSubmet = document.getElementById("sub");

// get data from localStorage

inputSubmet.onclick = checkData;

function checkData(e) {
  e.preventDefault();

  if (
    (inputName.value === localStorage.getItem("name")) &
    (inputPasswrod.value === localStorage.getItem("pass"))
  ) {
    setTimeout(() => {
      window.location = "homeShope.html";
    }, 1000);
  } else {
    alert("fols");
  }
}
