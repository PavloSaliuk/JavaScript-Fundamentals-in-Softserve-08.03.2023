// 1
// const newWindow = window.open("", "", "width=300, height=300")
// setTimeout(() => {
//     newWindow.resizeTo(500, 500);
// }, 2000);
// setTimeout(() => {
//     newWindow.moveTo(200, 200)
// }, 4000)
// setTimeout(() => {
//     newWindow.close()
// }, 6000)

// const newWindow = window.open("", "", "width=300, height=300")
// setTimeout(() => {
//     newWindow.resizeTo(500, 500);
//     setTimeout(() => {
//         newWindow.moveTo(200, 200);
//         setTimeout(() => {
//             newWindow.close();
//         }, 2000);
//     }, 2000);
// }, 2000);

// 2
// function changeCSS() {
//     const p = document.getElementById("text");
//     p.style.color = "orange";
//     p.style.fontSize = "20";
//     p.style.fontFamily = "Comic Sans MS";
// }
// const button = document.querySelector("button");
// button.addEventListener("click", changeCSS)

// 3
// const body = document.querySelector("body")
// const button1 = document.querySelector("#button1")
// const button2 = document.querySelector("#button2")
// const button3 = document.querySelector("#button3")
// const link = document.querySelector("#link")
// function changeBackgroundColor(color) {
//     document.body.style.background = color;
// }
// button1.addEventListener("click", () => {
//     changeBackgroundColor("blue");
// })
// button2.addEventListener("dblclick", () => {
//     changeBackgroundColor("pink");
// })
// button3.addEventListener("mousedown", () => {
//     changeBackgroundColor("brown");
// })
// button3.addEventListener("mouseup", () => {
//     changeBackgroundColor("white");
// })
// link.addEventListener("mouseenter", () => {
//     changeBackgroundColor("yellow");
// })
// link.addEventListener("mouseup", () => {
//     changeBackgroundColor("white");
// })



// 4
// const button = document.getElementById("myButton");
// const select = document.getElementById("select");

// button.addEventListener("click", function removeItem() {
//     select.options[select.selectedIndex].remove();
// });

// 5
// const button = document.getElementById("button")
// const textBelow = document.querySelector("div")
// button.addEventListener("click", () => {
//     textBelow.innerHTML += "I was pressed!<br>"
// })
// button.addEventListener("mouseover", () => {
//     textBelow.innerHTML += "Mouse on me!<br>"
// })
// button.addEventListener("mouseout", () => {
//     textBelow.innerHTML += "Mouse is not on me!<br>"
// })


// const button = document.getElementById("button")
// const textBelow = document.querySelector("div")
// button.addEventListener("click", () => setText("I was pressed!"));
// button.addEventListener("mouseover", () => setText("Mouse on me!"));
// button.addEventListener("mouseout", () => setText("Mouse is not on me!"));
// textBelow.addEventListener("click", clearFunc);
// function setText(text) {
//     textBelow.innerHTML += `${text}<br>`
// }


// 6

// const widthElement = document.createElement("span");
// widthElement.id = "width"
// widthElement.textContent = "Width: "
// const heigtElement = document.createElement("span");
// heigtElement.id = "height"
// heigtElement.textContent = "Height: "
// document.body.appendChild(widthElement);
// document.body.appendChild(heigtElement);

// window.onresize = function (event) {
//     document.getElementById("width").textContent = `Width: ${window.innerWidth}, `;
//     document.getElementById("height").textContent = `Height: ${window.innerHeight}`;
// };

// 7

// const citiesByCountry = {
//     germany: ["Berlin", "Amberg", "Frankfurt", "Aachen"],
//     usa: ["New York", "Washington", "Boston", "Chikago"],
//     ukraine: ["Kyiv", "Lviv", "Odessa", "Mariupol"]
// };
// const countrySelect = document.getElementById("country");
// const citySelect = document.getElementById("cities");
// const selected = document.getElementById("selected");

// countrySelect.addEventListener("change", updateCities)
// citySelect.addEventListener("change", () => {
//     selected.textContent = `${countrySelect.options[countrySelect.selectedIndex].text}, ${citySelect.options[citySelect.selectedIndex].text}`
// })

// function updateCities() {
//     const selectedCountry = countrySelect.options[countrySelect.selectedIndex].dataset.country;
//     const cities = citiesByCountry[selectedCountry];

//     citySelect.textContent = "";
//     for (let i = 0; i < cities.length; i++) {
//         const city = cities[i];
//         const option = document.createElement("option");
//         option.textContent = city;
//         option.value = city;
//         citySelect.appendChild(option);
//     }
//     selected.textContent = `${countrySelect.options[countrySelect.selectedIndex].text}, ${citySelect.options[citySelect.selectedIndex].text}`;
// }