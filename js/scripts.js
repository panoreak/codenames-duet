const game_states = {
    PLAYER_SELECTION: "playerSelection",
    SEED_INPUT: "seedInput",
    GAME_IN_PROGRESS: "gameInProgress",
    GAME_END: "gameEnded",
};

var game_state = PLAYER_SELECTION;

var show = function (element) {
    element.classList.remove("hidden");
};

var hide = function (element) {
    element.classList.add("hidden");
};

var toggle = function (element) {
    element.classList.toggle("hidden");
};
