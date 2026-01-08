class Funcionario {
  constructor(salarioInicial) {
    this.salarioInicial = salarioInicial;
  }

  calcularSalario() {
    throw new Error(
      "Erro ao acessar método...\nNão é possível acessar o método diretamente."
    );
  }
}

class FuncionarioCLT extends Funcionario {
  constructor(salarioInicial) {
    super(salarioInicial);
    this.salarioFinal = salarioFinal;
    this.impostos = salarioInicial * 0.05;
  }

  calcularSalario() {
    this.salarioFinal = this.salarioInicial - this.impostos;
  }

  mostrarSalario() {
    console.log(this.salarioFinal);
  }
}

class FuncionarioPJ extends Funcionario {
  constructor(horasTrabalhadas, valorHora) {
    super();
    this.horasTrabalhadas = horasTrabalhadas;
    this.valorHora = valorHora;
  }

  calcularSalario() {
    this.salarioFinal = this.horasTrabalhadas * this.valorHora;
  }

  mostrarSalario() {
    console.log(this.salarioFinal);
  }
}

function processarSalario(salario) {
  salario.calcularSalario();
  salario.mostrarSalario();
}
