class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  fazerSom() {
    console.log("Som Genérico");
  }
}

class Cachorro extends Animal {
  constructor(nome) {
    super(nome);
  }

  fazerSom() {
    console.log("Au au");
  }
}

class Gato extends Animal {
  constructor(nome) {
    super(nome);
  }

  fazerSom() {
    console.log("Prrr");
  }
}

bichano = new Gato("Bichano");
caramelo = new Cachorro("Caramelo");

bichano.fazerSom();
caramelo.fazerSom();
