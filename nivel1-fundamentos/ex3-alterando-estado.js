class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  fazerAniversario() {
    this.idade++;
    return this.idade;
  }

  mostrarInfo() {
    console.log(`Nome: ${this.nome}\nIdade: ${this.idade} anos`);
  }
}

const kaique = new Pessoa("Kaique", 20);
kaique.mostrarInfo();

console.log("\n~ Idade após aniversário ~\n");
kaique.fazerAniversario();
kaique.mostrarInfo();
