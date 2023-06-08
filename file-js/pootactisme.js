let container = document.querySelector(".table .container .box");

let getLoacale = JSON.parse(localStorage.getItem("isme"));
function getprotactInPage() {
  let boxes = getLoacale.map((item) => {
    return `<div class="tablebody">
        <img src="${item.imges}" alt="">
        <p>${item.title}</p>
        <p data-set="PRICE">$${item.price}</p>
        <div class="btnA">
        </div>
    </div>`;
  });
  container.innerHTML = boxes.join("");
}
getprotactInPage();
