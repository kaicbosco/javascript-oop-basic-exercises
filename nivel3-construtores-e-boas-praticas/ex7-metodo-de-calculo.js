class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  aplicarDesconto(percentual) {
    percentual /= 100;
    const desconto = this.preco * percentual;
    this.preco -= desconto;

    return this.preco;
  }
}

const redLabel = new Produto("Red Label", 150);

// Mostrando informações originais
console.log(redLabel);

// Aplicando desconto
redLabel.aplicarDesconto(10);

// Mostrando informações após aplicação do desconto
console.log(redLabel);
