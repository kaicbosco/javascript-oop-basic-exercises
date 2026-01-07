class ContaBancaria {
  #saldo;

  constructor(saldo) {
    this.#saldo = saldo;
  }

  depositar(valor) {
    console.log(`\nRealizando Depósito de R$${valor}...`);
    if (valor <= 0) {
      throw new Error(
        `\nNão é permitido o depósito de valores negativos.\nInterrompendo operação...`
      );
    }
    this.#saldo += valor;
  }

  sacar(valor) {
    console.log(`\nRealizando saque de R$${valor}...`);
    if (valor > this.#saldo) {
      throw new Error("\nSaldo Insuficiente\nInterrompendo operação...");
    }
    this.#saldo -= valor;
    console.log(`\nRealizando saque de R$${valor}...`);
  }

  verSaldo() {
    console.log(`\nIniciando Verificação de saldo...\nSaldo: R$${this.#saldo}`);
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
