document.querySelector(".menuBarra").addEventListener("click", animacionMenu);

let barra1 = document.querySelector(".fila1");
let barra2 = document.querySelector(".fila2");
let barra3 = document.querySelector(".fila3");

function animacionMenu(){
    barra1.classList.toogle("fila1Animacion")
    barra3.classList.toogle("fila3Animacion")
    barra2.classList.toogle("fila2Animacion")
}