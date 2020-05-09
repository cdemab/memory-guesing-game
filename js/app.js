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
  constructor() {
    this.correctAttemps = 0;
    this.failedAttemps = 0;
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
      this.correctAttemps++;
    } else {
      pokemonDomElementOne.setAttribute("src", "img/card.png");
      pokemonDomElementTwo.setAttribute("src", "img/card.png");
      this.failedAttemps++;
    }

    return {
      correctAttemps: this.correctAttemps,
      failedAttemps: this.failedAttemps,
    };
  }
}
