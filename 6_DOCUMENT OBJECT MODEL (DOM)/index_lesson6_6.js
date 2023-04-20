const colorButtonsConteiner = document.querySelector(".colors");
const sizeButtonsContainer = document.querySelector(".sizes");
const typeButtonsContainer = document.querySelector(".types");

const price = document.getElementById("outprice");

colorButtonsConteiner.addEventListener("click", changePrice);
sizeButtonsContainer.addEventListener("click", changePrice);
typeButtonsContainer.addEventListener("click", changePrice);

function changePrice(event) {
    let newPrice = 0;

    if (event.target.classList.contains("color")) {
        const activeColor = document.querySelector(".colors .active");
        activeColor.classList.remove("active");
        event.target.classList.add("active");
        newPrice += parseInt(event.target.getAttribute("data-price"), 10);
    }

    if (event.target.classList.contains("size")) {
        const activeSize = document.querySelector(".sizes .active");
        activeSize.classList.remove("active");
        event.target.classList.add("active");
        newPrice += parseInt(event.target.getAttribute("data-price"), 10);
    }

    if (event.target.classList.contains("type")) {
        const activeType = document.querySelector(".types .active");
        activeType.classList.remove("active");
        event.target.classList.add("active");
        newPrice += parseInt(event.target.getAttribute("data-price"), 10);
    }

    price.innerText = newPrice.toFixed(2);
}