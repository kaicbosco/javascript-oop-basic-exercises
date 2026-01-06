class ContaBancaria {
  #saldo;

  constructor(saldo) {
    this.#saldo = 0;
  }

  depositoUsuario(valor) {
    this.#saldo += valor;
    return this.#saldo;
  }

  mostrarSaldo() {
    console.log(saldo);
  }
}
