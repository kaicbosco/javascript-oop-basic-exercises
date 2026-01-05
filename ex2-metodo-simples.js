class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade}`;
  }
}

const pessoa1 = new Pessoa("Ricardo", 20);

console.log(pessoa1);
