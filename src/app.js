/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  // definir variables/array

  const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

  const suits = ["♦", "♥", "♠", "♣"];

  // Creamos funcion Random (para números y palos)

  const generateRandom = arr => {
    let numberRandom = Math.floor(Math.random() * arr.length);

    return arr[numberRandom];
  };

  // console.log(generateRandom(numbers));

  //Asignamos valores para modificar HTML (DOM)

  const card = document.querySelector(".card");
  const cardNumber = document.querySelector(".number");
  const cardIcon = document.querySelector(".icons");

  cardNumber.innerHTML = generateRandom(numbers);
  cardIcon.innerHTML = generateRandom(suits);

  // Creamos temporizador ( Agrega un timer que genere una nueva carta automaticamente cada 10 segundos.)

  const generatorTimer = () => window.setInterval(generateRandom, 10000);

  // generatorTimer();
};
