class Player {
  constructor(nivel, elo) {
    this.nivel = nivel;
    this.elo = elo;
  }

  subirNivel() {
    this.nivel++;
  }

  partidaGanha() {
    this.elo += 30;
  }
}

class ProPlayer extends Player {
  constructor(nivel, elo, time) {
    super(nivel, elo);
    this.time = time;
  }

  partidaGanha() {
    this.elo += 15;
  }
}

class CasualPlayer extends Player {
  constructor(nivel, elo, emprego) {
    super(nivel, elo);
    this.emprego = emprego;
  }
}

class Partida {
  constructor() {
    this.time1 = [];
    this.time2 = [];
  }

  criarTime1(players) {
    this.time1 = players;
  }

  finalizarPartida(timeVencedor) {
    if (timeVencedor == 1) {
      for (i = 0; i <= this.time1.length; i++) {
        this.time1[i].partidaGanha();
      }
    } else if (timeVencedor == 2) {
    }
  }
}

const kaicao = new ProPlayer(300, 1200, "skt t1");
const gustavin = new ProPlayer(500, 1000, "toba games");
const zika = new CasualPlayer(120, 10, "atacadao");

let time = [kaicao, gustavin, zika];

const partida1 = new Partida();

partida1.criarTime1(time);

for (i = 0; i <= 2; i++) {
  time[i].partidaGanha();
}
