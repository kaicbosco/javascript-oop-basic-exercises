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

// Teste compra padrão cartão
console.log("\n<---- Compra 1 ---->");
const compraUm = new Compra(100, "cartao");
compraUm.mostrarValorInicial();
compraUm.aplicarFrete();
compraUm.mostrarValorFinal();

// Teste compra padrão pix
console.log("\n<---- Compra 2 ---->");
const compraDois = new Compra(50, "pix");
compraDois.mostrarValorInicial();
compraDois.aplicarFrete();
compraDois.mostrarValorFinal();

// Teste compra padrão boleto
console.log("\n<---- Compra 3 ---->");
const compraTres = new Compra(300, "boleto");
compraTres.mostrarValorInicial();
compraTres.aplicarFrete();
compraTres.mostrarValorFinal();

// Teste compra assinante
console.log("\n<---- Compra 4 ---->");
const compraAssinatura = new CompraAssinante(173, "pix");
compraAssinatura.mostrarValorInicial();
compraAssinatura.aplicarFrete();
compraAssinatura.mostrarValorFinal();
