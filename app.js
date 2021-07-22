let hungerLevel = 1;
let boredomLevel = 1;
let tirednessLevel = 1;
let petAlive = "alive";
let input = "";
let interval = null;
let age = 0;

const ageEl = document.getElementById("age");
const hungerEl = document.getElementById("hunger");
const boredomEl = document.getElementById("boredom");
const tirednessEl = document.getElementById("tiredness");

function addLevels() {
    myCactus.hungerLevel++;
    myCactus.boredomLevel++;
    myCactus.tirednessLevel++;

    ageEl.textContent = "Age: " + myCactus.age;
    hungerEl.textContent = "Hunger: " + myCactus.hungerLevel;
    boredomEl.textContent = "Boredom: " + myCactus.boredomLevel;
    tirednessEl.textContent = "Tiredness: " + myCactus.tirednessLevel;

    if (myCactus.hungerLevel >= 10 || myCactus.boredomLevel >= 10 || myCactus.tirednessLevel >= 10){
        petAlive = "dead";
        const divEl = document.getElementById("game-screen");
        divEl.textContent = "Game Over";
        clearInterval(interval);
        clearInterval(interval2);
        ageEl.textContent = "Age: " + 0;
        foodEl.textContent = "Hunger: " + 1;
        playEl.textContent = "Boredom: " + 1;
        sleepEl.textContent = "Tiredness: " + 1;
        new Cactus(input, 0, 1, 1, 1);
    }
}

function agePet() {
    myCactus.age++;
    console.log(myCactus.age);
}

class Cactus {
    constructor(name, age, hungerLevel, boredomLevel, tirednessLevel) {
        this.name = name;
        this.age = 0;
        this.hungerLevel = hungerLevel;
        this.boredomLevel = boredomLevel;
        this.tirednessLevel = tirednessLevel;
    }
}

let myCactus = null;

function nameInput() {
    input = document.getElementById("user-input").value;
    alert(input);
    console.log(input);
    startGame();
}

function startGame() {
    myCactus = new Cactus(input, 0, 1, 1, 1);
    interval = setInterval(addLevels, 1000);
    interval2 = setInterval(agePet, 1000);
    console.log(myCactus);
    
}

const foodEl = document.getElementById("food");
const playEl = document.getElementById("play");
const sleepEl = document.getElementById("sleep");
const startEl = document.getElementById("start-button");

foodEl.addEventListener("click", feedPet);
playEl.addEventListener("click", playWithPet);
sleepEl.addEventListener("click", putPetToSleep);
startEl.addEventListener("click", nameInput);

function feedPet() {
    if (myCactus.hungerLevel > 0) {
        myCactus.hungerLevel--;
    }
}

function playWithPet() {
    if (myCactus.boredomLevel > 0) {
        myCactus.boredomLevel--;
    }
}

function putPetToSleep() {
    if (myCactus.tirednessLevel > 0) {
        myCactus.tirednessLevel--;
    }
}