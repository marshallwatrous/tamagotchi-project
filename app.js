let hungerLevel = 1;
let boredomLevel = 1;
let tirednessLevel = 1;
let petAlive = "alive";


function addLevels() {
    hungerLevel++;
    boredomLevel++;
    tirednessLevel++;

    hungerEl.textContent = "Hunger: " + hungerLevel;
    boredomEl.textContent = "Boredom: " + boredomLevel;
    tirednessEl.textContent = "Tiredness: " + tirednessLevel;
}

setInterval(addLevels() {
    
}, 300000);



class Cactus {
    constructor(name, age, hungerLevel, boredomLevel, tirednessLevel) {
        this.name = name;
        this.age = age;
        this.hungerLevel = hungerLevel;
        this.boredomLevel = boredomLevel;
        this.tirednessLevel = tirednessLevel;
    }
}

function nameInput() {
    let input = document.getElementById("userInput").nodeValue;
    alert(input);
    console.log(input);
}



const myCactus = new Cactus("Spike", 0, 1, 1, 1);
console.log(myCactus);

const foodEl = document.getElementById("food");
const playEl = document.getElementById("play");
const sleepEl = document.getElementById("sleep");

foodEl.addEventListener("click", feedPet);
playEl.addEventListener("click", playWithPet);
sleepEl.addEventListener("click", putPetToSleep);

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
    hungerLevel = 1;
    boredomLevel = 1;
    tirednessLevel = 1;
}

