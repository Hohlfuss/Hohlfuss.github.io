var klikkausVoima = 1; // muista muuttaa
var känniPisteet = 0;
var tonninSeteliTonyHinta = 15;
var tonninSeteliTony = 0;
var tonninSeteliVilleHinta = 100;
var tonninSeteliVille = 0;
var mankinenHinta = 1000;
var mankinen = 0;
var propelleriHattuTonyHinta = 10000
var propelleriHattuTony = 0;
var lihaksetHinta = 100000;
var lihakset = 0;
var rikuRillaaHinta = 1000000
var rikuRillaa = 0;



function ostaTonninSeteliTony() {
    if (känniPisteet >= tonninSeteliTonyHinta) {
        känniPisteet = känniPisteet - tonninSeteliTonyHinta;
        tonninSeteliTony = tonninSeteliTony + 1;
        tonninSeteliTonyHinta = Math.round(tonninSeteliTonyHinta * 1.15);

        document.getElementById("känniPisteet").innerHTML = känniPisteet;
        document.getElementById("tonninSeteliTonyHinta").innerHTML = tonninSeteliTonyHinta;
        document.getElementById("tonninSeteliTony").innerHTML = tonninSeteliTony;
        päivitäkps();
    }
}

function ostaTonninSeteliVille() {
    if (känniPisteet >= tonninSeteliVilleHinta) {
        känniPisteet = känniPisteet - tonninSeteliVilleHinta;
        tonninSeteliVille = tonninSeteliVille + 1;
        tonninSeteliVilleHinta = Math.round(tonninSeteliVilleHinta * 1.20);

        document.getElementById("känniPisteet").innerHTML = känniPisteet;
        document.getElementById("tonninSeteliVilleHinta").innerHTML = tonninSeteliVilleHinta;
        document.getElementById("tonninSeteliVille").innerHTML = tonninSeteliVille;
        päivitäkps();
    }
}

function ostaMankinen() {
    if (känniPisteet >= mankinenHinta) {
        känniPisteet = känniPisteet - mankinenHinta;
        mankinen = mankinen + 1;
        mankinenHinta = Math.round(mankinenHinta * 1.50);

        document.getElementById("känniPisteet").innerHTML = känniPisteet;
        document.getElementById("mankinenHinta").innerHTML = mankinenHinta;
        document.getElementById("mankinen").innerHTML = mankinen;
        päivitäkps();
    }
}

function ostaPropelleriHattuTony() {
    if (känniPisteet >= propelleriHattuTonyHinta) {
        känniPisteet = känniPisteet - propelleriHattuTonyHinta;
        propelleriHattuTony = propelleriHattuTony + 1;
        propelleriHattuTonyHinta = Math.round(propelleriHattuTonyHinta * 2);

        document.getElementById("känniPisteet").innerHTML = känniPisteet;
        document.getElementById("propelleriHattuTonyHinta").innerHTML = propelleriHattuTonyHinta;
        document.getElementById("propelleriHattuTony").innerHTML = propelleriHattuTony;
        päivitäkps();
    }
}

function ostaLihakset() {
    if (känniPisteet >= lihaksetHinta) {
        känniPisteet = känniPisteet - lihaksetHinta;
        lihakset = lihakset + 1;
        lihaksetHinta = Math.round(lihaksetHinta * 2.20);

        document.getElementById("känniPisteet").innerHTML = känniPisteet;
        document.getElementById("lihaksetHinta").innerHTML = lihaksetHinta;
        document.getElementById("lihakset").innerHTML = lihakset;
        päivitäkps();
    }
}

function ostaRikuRillaa() {
    if (känniPisteet >= rikuRillaaHinta) {
        känniPisteet = känniPisteet - rikuRillaaHinta;
        rikuRillaa = rikuRillaa + 1;
        rikuRillaaHinta = Math.round(rikuRillaaHinta * 2.50);

        document.getElementById("känniPisteet").innerHTML = känniPisteet;
        document.getElementById("rikuRillaaHinta").innerHTML = rikuRillaaHinta;
        document.getElementById("rikuRillaa").innerHTML = rikuRillaa;
        päivitäkps();
    }
}

function lisääKänniä(känninMäärä) {
    känniPisteet = känniPisteet + känninMäärä;
    document.getElementById("känniPisteet").innerHTML = känniPisteet;
}

function päivitäkps() {
    kps = tonninSeteliTony + tonninSeteliVille * 3 + mankinen * 20 + propelleriHattuTony * 50 + lihakset * 100 + rikuRillaa * 250;
    document.getElementById("kps").innerHTML = kps;

}

function loadGame() {
    var savedGame = JSON.parse(localStorage.getItem("gameSave"));
    if (typeof savedGame.klikkausVoima !== "undefined") klikkausVoima = savedGame.klikkausVoima;
    if (typeof savedGame.känniPisteet !== "undefined") känniPisteet = savedGame.känniPisteet;
    if (typeof savedGame.tonninSeteliTonyHinta !== "undefined") tonninSeteliTonyHinta = savedGame.tonninSeteliTonyHinta;
    if (typeof savedGame.tonninSeteliTony !== "undefined") tonninSeteliTony = savedGame.tonninSeteliTony;
    if (typeof savedGame.tonninSeteliVilleHinta !== "undefined") tonninSeteliVilleHinta = savedGame.tonninSeteliVilleHinta;
    if (typeof savedGame.tonninSeteliVille !== "undefined") tonninSeteliVille = savedGame.tonninSeteliVille;
    if (typeof savedGame.mankinenHinta !== "undefined") mankinenHinta = savedGame.mankinenHinta;
    if (typeof savedGame.mankinen !== "undefined") mankinen = savedGame.mankinen;
    if (typeof savedGame.propelleriHattuTonyHinta !== "undefined") propelleriHattuTonyHinta = savedGame.propelleriHattuTonyHinta;
    if (typeof savedGame.propelleriHattuTony !== "undefined") propelleriHattuTony = savedGame.propelleriHattuTony;
    if (typeof savedGame.lihaksetHinta !== "undefined") lihaksetHinta = savedGame.lihaksetHinta;
    if (typeof savedGame.lihakset !== "undefined") lihakset = savedGame.lihakset;
    if (typeof savedGame.rikuRillaaHinta !== "undefined") rikuRillaaHinta = savedGame.lrikuRillaaHinta;
    if (typeof savedGame.rikuRillaa !== "undefined") liharikuRillaakset = savedGame.rikuRillaa;
}

function saveGame() {
    var gameSave = {
        klikkausVoima: klikkausVoima,
        känniPisteet: känniPisteet,
        tonninSeteliTonyHinta: tonninSeteliTonyHinta,
        tonninSeteliTony: tonninSeteliTony,
        tonninSeteliVilleHinta: tonninSeteliVilleHinta,
        tonninSeteliVille: tonninSeteliVille,
        mankinenHinta: mankinenHinta,
        mankinen: mankinen,
        propelleriHattuTonyHinta: propelleriHattuTonyHinta,
        propelleriHattuTony: propelleriHattuTony,
        lihaksetHinta: lihaksetHinta,
        lihakset: lihakset,
        rikuRillaaHinta: rikuRillaaHinta,
        rikuRillaa: rikuRillaa
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function resetGame() {
    if (confirm("Oletko rumilus varma että haluat nollata pelin?")) {
        var gameSave = {};
        localStorage.setItem("gameSave", JSON.stringify(gameSave));
        location.reload();
    }
}

window.onload = function() {
    loadGame();
    päivitäkps();
    document.getElementById("känniPisteet").innerHTML = känniPisteet;
    document.getElementById("tonninSeteliTonyHinta").innerHTML = tonninSeteliTonyHinta;
    document.getElementById("tonninSeteliTony").innerHTML = tonninSeteliTony;
    document.getElementById("tonninSeteliVilleHinta").innerHTML = tonninSeteliVilleHinta;
    document.getElementById("tonninSeteliVille").innerHTML = tonninSeteliVille;
    document.getElementById("mankinenHinta").innerHTML = mankinenHinta;
    document.getElementById("mankinen").innerHTML = mankinen;
    document.getElementById("propelleriHattuTonyHinta").innerHTML = propelleriHattuTonyHinta;
    document.getElementById("propelleriHattuTony").innerHTML = propelleriHattuTony;
    document.getElementById("lihaksetyHinta").innerHTML = lihaksetHinta;
    document.getElementById("lihakset").innerHTML = lihakset;
    document.getElementById("rikuRillaaHinta").innerHTML = rikuRillaaHinta;
    document.getElementById("rikuRillaa").innerHTML = rikuRillaa;
    
};

setInterval (function() {
    känniPisteet = känniPisteet + tonninSeteliTony;
    känniPisteet = känniPisteet + tonninSeteliVille * 3;
    känniPisteet = känniPisteet + mankinen * 20;
    känniPisteet = känniPisteet + propelleriHattuTony * 50;
    känniPisteet = känniPisteet + lihakset * 100;
    känniPisteet = känniPisteet + rikuRillaa * 250;
    document.getElementById("känniPisteet").innerHTML = känniPisteet;

}, 1000); //1000ms = 1 sekunti

setInterval (function() {
    saveGame();
}, 30000); // 30 sekkaa

