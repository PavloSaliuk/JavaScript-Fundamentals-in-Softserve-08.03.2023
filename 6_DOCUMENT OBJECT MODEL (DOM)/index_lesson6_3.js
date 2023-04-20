// 3

const body = document.createElement("body");
const main = document.createElement("main");
main.classList.add("mainClass", "check", "item");
const div = document.createElement("div");
div.setAttribute("id", "myDiv");
const p = document.createElement("p");
p.textContent = "First paragparagraph";

document.documentElement.appendChild(body);
body.appendChild(main);
main.appendChild(div);
div.appendChild(p);