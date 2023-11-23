import Hero from "./js/Classes/Hero.js";

const heroes = [];

function createHero(){
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const role = document.getElementById('role').value;
    console.log(name, age, role);
    const hero = new Hero(name, age, role);
    heroes.push(hero);
    insertItem();
    console.log(heroes);
}

document.getElementById('submit').onclick = createHero;

function insertItem() {
    const tableBody = document.getElementById('heroes').getElementsByTagName('tbody')[0];

    const newRow = tableBody.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.innerHTML = heroes[heroes.length - 1].nome;
    cell2.innerHTML = heroes[heroes.length - 1].idade;
    cell3.innerHTML = heroes[heroes.length - 1].tipo;
}
