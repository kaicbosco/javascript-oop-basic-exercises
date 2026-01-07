class ContaBancaria {
  #saldo;

  constructor(saldo) {
    this.#saldo = saldo;
  }

  depositar(valor) {
    console.log(`\nRealizando Depósito de R$${valor}...`);
    this.#saldo += valor;
  }

  sacar(valor) {
    if (valor > this.#saldo) {
      throw new Error(
        `\nRealizando saque de R$${valor}...\nSaldo Insuficiente, interrompendo operação...`
      );
    }
    this.#saldo -= valor;
    console.log(`\nRealizando saque de R$${valor}...`);
  }

  verSaldo() {
    console.log(`\nSaldo Atual: R$${this.#saldo}`);
  }
}

const conta1 = new ContaBancaria(1000);

conta1.verSaldo();

// Teste Depósito
conta1.depositar(120);
conta1.verSaldo();

// Teste Saque
conta1.sacar(100);
conta1.verSaldo();

// Testar saque incorreto
conta1.sacar(2000);
conta1.verSaldo();
