/* JSda selectorlar va stillar bilan ishlash */

let byTag = document.getElementsByTagName("h1");

let byId = document.getElementById("idRaqam2");

let byClass = document.getElementsByClassName("classNomi");

let bySelector =  document.querySelector(".classNomi");

let bySelectorAll = document.querySelectorAll(".classNomi");

let byAll = document.getElementsByTagName("h1").namedItem("idRaqam2");

byAll.style.backgroundColor = "green";
byAll.style.color = "yellow";
byAll.style.width = "200px";
byAll.style.height = "200px";
byAll.style.lineHeight = "200px";
byAll.style.borderRadius = "50%";

console.log(byAll);






