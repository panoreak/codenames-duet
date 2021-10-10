export class RandomNumberGenerator {
    #seed;
    #lastGeneratedNumber;

    initializeSeed() {
        this.#seed = Math.floor(Math.random() * 10 ** 15);
    }

    getSeed() {
        return this.#seed;
    }

    setSeed(seed) {
        this.#seed = seed;
    }

    next() {
        this.#generateNextNumber();
        return this.#lastGeneratedNumber;
    }

    #generateNextNumber() {
        // Random number gen mulberry32 function
        var start = this.#seed;
        if (this.#lastGeneratedNumber) {
            start *= this.#lastGeneratedNumber;
        }

        var mathPlaceholder = (start += 0x6d2b79f5);
        mathPlaceholder = Math.imul(
            mathPlaceholder ^ (mathPlaceholder >>> 15),
            mathPlaceholder | 1
        );
        mathPlaceholder ^=
            mathPlaceholder +
            Math.imul(
                mathPlaceholder ^ (mathPlaceholder >>> 7),
                mathPlaceholder | 61
            );
        this.#lastGeneratedNumber =
            ((mathPlaceholder ^ (mathPlaceholder >>> 14)) >>> 0) / 4294967296;
    }
}
