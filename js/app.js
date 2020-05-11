class Pokemon {
  constructor() {
    this.pokemons = [];
  }

  get() {
    this.pokemons = [
      { id: 1, name: "pikachu", image: "img/pikachu.png" },
      { id: 2, name: "pikachu", image: "img/pikachu.png" },
      { id: 3, name: "bulbasaur", image: "img/bulbasaur.png" },
      { id: 4, name: "bulbasaur", image: "img/bulbasaur.png" },
      { id: 5, name: "charmander", image: "img/charmander.png" },
      { id: 6, name: "charmander", image: "img/charmander.png" },
      { id: 7, name: "squirtle", image: "img/squirtle.png" },
      { id: 8, name: "squirtle", image: "img/squirtle.png" },
      { id: 9, name: "articuno", image: "img/articuno.png" },
      { id: 10, name: "articuno", image: "img/articuno.png" },
      { id: 11, name: "mewtwo", image: "img/mewtwo.png" },
      { id: 12, name: "mewtwo", image: "img/mewtwo.png" },
    ];

    return this.pokemons.sort(() => 0.5 - Math.random());
  }

  getById(id) {
    if (this.pokemons.length === 0) {
      return null;
    }

    return this.pokemons.find((p) => p.id === parseInt(id));
  }

  getTotal() {
    return this.pokemons.length / 2;
  }
}

class CheckGame {
  constructor(correctAttempsDom, failedAttempsDom) {
    this._correctAttempsDom = correctAttempsDom;
    this._failedAttempsDom = failedAttempsDom;
    this._correctAttemps = 0;
    this._failedAttemps = 0;
  }
  verify(pokemonCardOne, pokemonCardTwo) {
    let cardsDom = document.querySelectorAll("img");
    let cardsArray = Array.from(cardsDom);

    let pokemonDomElementOne = cardsArray.find(
      (c) => parseInt(c.dataset.id) === parseInt(pokemonCardOne.id)
    );
    let pokemonDomElementTwo = cardsArray.find(
      (c) => parseInt(c.dataset.id) === parseInt(pokemonCardTwo.id)
    );

    if (
      pokemonCardOne.name === pokemonCardTwo.name &&
      pokemonCardOne.id !== pokemonCardTwo.id
    ) {
      pokemonDomElementOne.style.visibility = "hidden";
      pokemonDomElementTwo.style.visibility = "hidden";
      this._correctAttemps++;
      this._correctAttempsDom.textContent = this._correctAttemps;
    } else {
      pokemonDomElementOne.setAttribute("src", "img/card.png");
      pokemonDomElementTwo.setAttribute("src", "img/card.png");
      this._failedAttemps++;
      this._failedAttempsDom.textContent = this._failedAttemps;
    }
  }
}

class Game {
  constructor(pokemon, checkGame, containerDom) {
    this._pokemon = pokemon;
    this._checkGame = checkGame;
    this._containerDom = containerDom;
  }

  create() {
    let pokemonCardsChosen = [];
    this._pokemon.get().forEach((item) => {
      let card = document.createElement("img");
      card.setAttribute("src", "img/card.png");
      card.setAttribute("data-id", item.id);
      card.setAttribute("class", "thumbnail");
      card.addEventListener("click", () => {
        let pokemonCardId = card.getAttribute("data-id");
        let pokemonCardSelected = this._pokemon.getById(pokemonCardId);
        pokemonCardsChosen.push(pokemonCardSelected);
        card.setAttribute("src", pokemonCardSelected.image);

        if (pokemonCardsChosen.length === 2) {
          setTimeout(() => {
            this._checkGame.verify(
              pokemonCardsChosen[0],
              pokemonCardsChosen[1]
            );

            if (this._checkGame._correctAttemps === this._pokemon.getTotal()) {
              this._containerDom.classList.add("winner");
            }

            pokemonCardsChosen = [];
          }, 500);
        }
      });
      this._containerDom.appendChild(card);
    });
  }

  reset() {
    document
      .querySelectorAll("img")
      .forEach((e) => this._containerDom.removeChild(e));
    this._checkGame._correctAttempsDom.textContent = "0";
    this._checkGame._failedAttempsDom.textContent = "0";
    this._containerDom.classList.remove("winner");
    this._checkGame._correctAttemps = 0;
    this._checkGame._failedAttemps = 0;
    this.create();
  }
}

const containerElement = document.querySelector(".container");
const correctAttempsElement = document.querySelector("#correctAttemps");
const failedAttempsElement = document.querySelector("#failedAttemps");
const buttonElement = document.querySelector("button");

const game = new Game(
  new Pokemon(),
  new CheckGame(correctAttempsElement, failedAttempsElement),
  containerElement
);

game.create();

buttonElement.addEventListener("click", () => {
  game.reset();
});
