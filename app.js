class Cactus {
    constructor(name, age, hungerLevel, boredomLevel, tirednessLevel) {
        this.name = name;
        this.age = age;
        this.hungerLevel = hungerLevel;
        this.boredomLevel = boredomLevel;
        this.tirednessLevel = tirednessLevel;
    }
}

const myCactus = new Cactus("Spike", 0, 1, 1, 1);
console.log(myCactus);

const foodEl = document.getElementById("food");
const playEl = document.getElementById("play");
const sleepEl = document.getElementById("sleep");

foodEl.addEventListener("click", feedPet);
playEl.addEventListener("click", playWithPet);
sleepEl.addEventListener("click", putPetToSleep);

let hungerLevel = 1;
let boredomLevel = 1;
let tirednessLevel = 1;
let petAlive = "alive";


function feedPet() {
    hungerLevel = 0;
}

function playWithPet() {
    boredomLevel = 0;
}

function putPetToSleep() {
    tirednessLevel = 0;
}


if (hungerLevel >= 10 || boredomLevel >= 10 || tirednessLevel >= 10){
    petAlive = "dead";
}

const divEl = document.getElementById("game-screen");

if (petAlive === "dead") {
    divEl.textContent = "Game Over";
}