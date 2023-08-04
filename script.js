const pages1 = document.getElementById("pages1");
const pages2 = document.getElementById("pages2");
const pages3 = document.getElementById("pages3");
const pages4 = document.getElementById("pages4");

pages1.addEventListener("click", function () {
    event.preventDefault();
    pages1.style.color = "black";
    pages2.style.color = "white";
    pages3.style.color = "white";
    pages4.style.color = "white";
})
pages2.addEventListener("click", function () {
    event.preventDefault();
    pages1.style.color = "white";
    pages2.style.color = "black";
    pages3.style.color = "white";
    pages4.style.color = "white";
})
pages3.addEventListener("click", function () {
    event.preventDefault();
    pages1.style.color = "white";
    pages2.style.color = "white";
    pages3.style.color = "black";
    pages4.style.color = "white";
})
pages4.addEventListener("click", function () {
    event.preventDefault();
    pages1.style.color = "white";
    pages2.style.color = "white";
    pages3.style.color = "white";
    pages4.style.color = "black";
})