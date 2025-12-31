class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const profFisica = new Pessoa("João", 30);

const profQuimica = new Pessoa("Walter Hartwell White", 50);

console.log(profFisica, profQuimica);