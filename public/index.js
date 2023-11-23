import HeroController from "./js/Controllers/HeroController.js";

const heroes = [];

const buttons = [];

function createHero(){
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const tipo = document.getElementById('tipo').value;


    const heroController = new HeroController();
    heroController.setHero(nome, idade, tipo);

    heroes.push(heroController.getHero());

    document.getElementById("form").reset();

    insertItem();

    const attackButton = document.getElementById(heroes.length - 1);

    attackButton.onclick = () => heroes[attackButton.id].atacar();

    buttons.push(attackButton);
}

document.getElementById('submit').onclick = createHero;

buttons.forEach(button => {
    button.onclick = () => heroes[button.id].atacar();
});

function insertItem() {
    const tableBody = document.getElementById('heroes').getElementsByTagName('tbody')[0];

    const newRow = tableBody.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.innerHTML = heroes[heroes.length - 1].nome;
    cell2.innerHTML = heroes[heroes.length - 1].idade;
    cell3.innerHTML = heroes[heroes.length - 1].tipo;
    cell4.innerHTML = `<button id="${heroes.length - 1}" class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">Atacar</button>`;
}
