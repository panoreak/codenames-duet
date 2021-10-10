import { RandomNumberGenerator } from "./randomNumberGenerator.js";
import { CardState, Card } from "./Card.js";

const game_states = {
    PLAYER_SELECTION: "playerSelection",
    SEED_INPUT: "seedInput",
    GAME_IN_PROGRESS: "gameInProgress",
    GAME_END: "gameEnded",
};
var game_state = game_states.PLAYER_SELECTION;
const randomNumberGenerator = new RandomNumberGenerator();

var playerSelectionDiv;
var player1Button;
var player2Button;
var player1SeedInputDiv;
var player2SeedInputDiv;
var seedSpan;
var seedInput;
var seedSubmit;

const show = function (element) {
    element.classList.remove("hidden");
};

const hide = function (element) {
    element.classList.add("hidden");
};

window.onload = function () {
    playerSelectionDiv = document.getElementById("playerSelection");
    player1Button = document.getElementById("player1Button");
    player2Button = document.getElementById("player2Button");
    player1SeedInputDiv = document.getElementById("player1SeedInput");
    player2SeedInputDiv = document.getElementById("player2SeedInput");
    seedSpan = document.getElementById("seed");
    seedInput = document.getElementById("seedInput");
    seedSubmit = document.getElementById("seedSubmit");

    player1Button.addEventListener("click", onPlayer1Click);
    player2Button.addEventListener("click", onPlayer2Click);
    seedInput.addEventListener("keypress", validateSeedInput);
    seedSubmit.addEventListener("click", onSeedSubmit);
};

const onPlayer1Click = function () {
    randomNumberGenerator.initializeSeed();

    seedSpan.innerHTML = randomNumberGenerator.getSeed();

    hide(playerSelectionDiv);
    show(player1SeedInputDiv);
    game_state = game_states.SEED_INPUT;
};

const onPlayer2Click = function () {
    hide(playerSelectionDiv);
    show(player2SeedInputDiv);
    game_state = game_states.SEED_INPUT;
};

const onSeedSubmit = function () {
    randomNumberGenerator.setSeed(seed);
};

function validateSeedInput(e) {
    //TODO make sure input is an integer
}
