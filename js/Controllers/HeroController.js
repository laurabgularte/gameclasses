import Hero from "../Classes/Hero";

class HeroController {
    constructor() {
        this.hero = new Hero();
    }
    
    setHero(nome, idade, tipo) {
        this.hero.nome = nome;
        this.hero.idade = idade;
        this.hero.tipo = tipo;
    }
    
    getHero() {
        return this.hero;
    }
    
    atacar() {
        return this.hero.atacar();
    }
}

export default HeroController;