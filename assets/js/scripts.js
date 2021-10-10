const game_states = {
    PLAYER_SELECTION: "playerSelection",
    SEED_INPUT: "seedInput",
    GAME_IN_PROGRESS: "gameInProgress",
    GAME_END: "gameEnded",
};
var game_state = game_states.PLAYER_SELECTION;
var ranNum;
var ranSeed;

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

    for (var a=0; a<10; a++) {
        updateRandomNum();
        console.log(ranNum);
    }

};

const onPlayer1Click = function () {
    hide(playerSelectionDiv);
    ranSeed = Math.floor(Math.random()*(10**15));
    // TODO generate seed and show it
};

const onPlayer2Click = function () {
    hide(playerSelectionDiv);
    ranSeed = Math.floor(Math.random()*(10**15));
    // TODO ask player to input seed from player 1
};

const updateRandomNum = function() {
    // Random number gen mulberry32 function
    if (!ranNum) {strt = ranSeed} else {strt = ranSeed * ranNum}
    var t = strt += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    ranNum = ((t ^ t >>> 14) >>> 0) / 4294967296;
}
