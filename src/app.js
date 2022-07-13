/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Asignamos valores para modificar HTML (DOM)

  const card = document.querySelector(".card");
  const cardNumber = document.querySelector(".number");
  const cardIcon = document.querySelector(".icons");
  const btnRandom = document.querySelector("#btn-random");

  //Creo variables para los iconos y números de las cartas
  const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

  const suits = ["♦", "♥", "♠", "♣"];

  // Creamos funcion generar los números y palos de forma aleatoria

  const generateRandom = arr => {
    let numberRandom = Math.floor(Math.random() * arr.length);

    return arr[numberRandom];
  };

  // Creo función que me genera carta aleatoriamente

  const generateCard = () => {
    cardNumber.innerHTML = generateRandom(numbers);
    let suit = generateRandom(suits);
    cardIcon.innerHTML = suit;
    if (suit === "♦" || suit === "♥") {
      cardIcon.style.color = "red";
    } else {
      cardIcon.style.color = "black";
    }
  };

  //Llamada a la función para generar primera carta aleatoria

  generateCard();

  // Añado función al botón para generar carta aleatoria al hacer click

  btnRandom.addEventListener("click", () => {
    generateCard();
  });

  //Agrego un timer que genere una nueva carta automaticamente cada 5 segundos (10 seg me parecia mucho)).

  const generatorTimer = () => window.setInterval(generateCard, 5000);
  generatorTimer();
};
