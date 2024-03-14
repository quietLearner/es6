import generateJoke from "./generateJoke"; //webpack does not need .js, es6 does
import "./styles/main.scss";

import laughing from "./assets/laughing.svg";

import higherOrder from "./higher-order/higherOrder";

const laughImg = document.getElementById("laughImg");

laughImg.src = laughing;

const button = document.getElementById("jokeBtn");

button.addEventListener("click", generateJoke);

generateJoke(); // page load the first time, show a joke

//higher order demo
higherOrder();
