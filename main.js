"use strict";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function generateRandomCharacter() { //65-upercase 97-lowercase
    var randNum = getRandomInt(0, 26);
    return randNum < 25 ? String.fromCharCode(65 + randNum) : 9;
}

function generateSeed() {
    var seed = "";
    for (var i = 0; i < 81; i++) {
        seed += generateRandomCharacter();
    }
    return seed;
}

function displaySeed() {
    document.getElementById("heading").innerText = generateSeed();
}