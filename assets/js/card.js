export class CardState {
    #isAssassin;
    #isBystander;
    #isAgent;
    #isChosen = false;

    constructor(isAssasin, isBystander, isAgent) {
        this.#isAssassin = isAssasin;
        this.#isBystander = isBystander;
        this.#isAgent = isAgent;
    }

    setIsChosen() {
        this.#isChosen = true;
    }

    isAssasin() {
        return this.#isAssassin;
    }

    isBystander() {
        return this.#isBystander;
    }

    isAgent() {
        return this.#isAgent;
    }

    isChosen() {
        return this.#isChosen;
    }
}

export class Card {
    #state = [];

    constructor(player1CardState, player2CardState) {
        this.#state.push(player1CardState);
        this.#state.push(player2CardState);
    }

    getPlayer1State() {
        return this.#state[0];
    }

    getPlayer2State() {
        return this.#state[1];
    }
}
