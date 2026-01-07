class Compra {
  constructor(valor, metodo, valorFrete) {
    this.valor = valor;
    this.metodo = metodo;
    this.valorFrete = valorFrete;
  }

  mostrarValorInicial() {
    console.log(`\nValor inicial da compra: R$${this.valor}`);
  }

  aplicarFrete() {
    if (this.metodo == "pix") {
      this.valorFrete = 20;
      console.log(
        `\nMétodo escolhido: ${this.metodo}\nCalculando Frete...\nValor do Frete: R$${this.valorFrete}\n`
      );
    } else if (this.metodo == "cartao") {
      this.valorFrete = 25;
      console.log(
        `\nMétodo escolhido: ${this.metodo}\nCalculando Frete...\nValor do Frete: R$${this.valorFrete}\n`
      );
    } else if (this.metodo == "boleto") {
      this.valorFrete = 10;
      console.log(
        `\nMétodo escolhido: ${this.metodo}\nCalculando Frete...\nValor do Frete: R$${this.valorFrete}\n`
      );
    } else {
      throw new Error("Insira um método de pagamento válido.\n");
    }

    this.valor += this.valorFrete;
  }

  mostrarValorFinal() {
    console.log(`Valor Final da Compra: R$${this.valor}`);
  }
}

class CompraAssinante extends Compra {
  constructor(valor, metodo, valorFrete) {
    super(valor, metodo, valorFrete);
  }

  aplicarFrete() {
    this.valorFrete = 0;

    console.log(
      `\nMétodo escolhido: ${this.metodo}\nCalculando Frete...\nVocê tem direito a insenção de frete exclusiva para assinantes!\n`
    );
  }
}

// Realizando chamada de métodos sem saber previamente a classe
function processoCompra(compra) {
  compra.mostrarValorInicial();
  compra.aplicarFrete();
  compra.mostrarValorFinal();
}

const compraPadraoPix = new Compra(100, "pix");
processoCompra(compraPadraoPix);
