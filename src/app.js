/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Asignamos valores para modificar HTML (DOM)

  const card = document.querySelector(".main-card");
  const cardNumber = document.querySelector(".number");
  const cardIcon = document.querySelectorAll(".icons");
  const btnRandom = document.querySelector("#btn-random");
  const btnResize = document.querySelector("#btn-size");

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

    cardIcon.forEach(element => {
      element.innerHTML = suit;

      suit === "♦" || suit === "♥"
        ? (element.style.color = "red")
        : (element.style.color = "black");
    });
  };

  //Llamada a la función para generar primera carta aleatoria

  generateCard();

  // Añado función al botón para generar carta aleatoria al hacer click

  btnRandom.addEventListener("click", () => {
    generateCard();
  });
  // Creo función para que el usuario pueda modificar las medidas de la carta

  const cardResize = () => {
    const widthCard = parseInt(document.querySelector("#card-width").value);

    const heightCard = parseInt(document.querySelector("#card-height").value);
    if (
      !isNaN(widthCard) &&
      widthCard > 0 &&
      !isNaN(heightCard) &&
      heightCard > 0
    ) {
      card.style.width = widthCard + "px";
      card.style.height = heightCard + "px";
    }
  };
  // Agrego funcion al botón de redimensionar.
  btnResize.addEventListener("click", () => {
    cardResize();
  });
  //Agrego un timer que genere una nueva carta automaticamente cada 5 segundos (10 seg me parecia mucho)).

  const generatorTimer = () => window.setInterval(generateCard, 5000);
  generatorTimer();
};
