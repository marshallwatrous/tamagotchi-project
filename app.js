const foodEl = document.getElementById("food");
const playEl = document.getElementById("play");
const sleepEl = document.getElementById("sleep");

foodEl.addEventListener("click", feedPet);
playEl.addEventListener("click", playWithPet);
sleepEl.addEventListener("click", putPetToSleep);

let hungerLevel = 0;
let boredomLevel = 0;
let tirednessLevel = 0;


function feedPet() {
    hungerLevel = 0;
}

function playWithPet() {
    boredomLevel = 0;
}

function putPetToSleep() {
    tirednessLevel = 0;
}

