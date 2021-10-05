const game_states = {
    PLAYER_SELECTION: "playerSelection",
    SEED_INPUT: "seedInput",
    GAME_IN_PROGRESS: "gameInProgress",
    GAME_END: "gameEnded",
};

var game_state = game_states.PLAYER_SELECTION;

var playerSelectionDiv;
var player1Button;
var player2Button;

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

    player1Button.addEventListener("click", onPlayer1Click);
    player2Button.addEventListener("click", onPlayer2Click);
};

const onPlayer1Click = function () {
    hide(playerSelectionDiv);
    // TODO generate seed and show it
};

const onPlayer2Click = function () {
    hide(playerSelectionDiv);
    // TODO ask player to input seed from player 1
};
