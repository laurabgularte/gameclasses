class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }
  atacar() {
    let ataque;
    switch (this.tipo) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
    }
    let message = `O ${this.tipo} ${this.nome} atacou usando ${ataque}`;
    console.log(message);
    window.alert(message);
    return message;
  }
}

export default Hero;
