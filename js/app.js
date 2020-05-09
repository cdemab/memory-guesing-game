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
