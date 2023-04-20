var klikkausVoima = 1; // muista muuttaa
var känniPisteet = 0;
var tonninSeteliTonyHinta = 15;
var tonninSeteliTony = 0;
var tonninSeteliVilleHinta = 100;
var tonninSeteliVille = 0;
var mankinenHinta = 1000;
var mankinen = 0;



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
        tonninSeteliVilleHinta = Math.round(tonninSeteliVilleHinta * 1.15);

        document.getElementById("känniPisteet").innerHTML = känniPisteet;
        document.getElementById("tonninSeteliVilleHinta").innerHTML = tonninSeteliVilleHinta;
        document.getElementById("tonninSeteliVille").innerHTML = tonninSeteliVille;
        päivitäkps();
    }
}

function ostaMankinen() {
    if (känniPisteet >= mankinen) {
        känniPisteet = känniPisteet - mankinenHinta;
        mankinen = mankinen + 1;
        mankinenHinta = Math.round(mankinenHinta * 1.15);

        document.getElementById("känniPisteet").innerHTML = känniPisteet;
        document.getElementById("mankinenHinta").innerHTML = mankinenHinta;
        document.getElementById("mankinen").innerHTML = mankinen;
        päivitäkps();
    }
}

function lisääKänniä(känninMäärä) {
    känniPisteet = känniPisteet + känninMäärä;
    document.getElementById("känniPisteet").innerHTML = känniPisteet;
}

function päivitäkps() {
    kps = tonninSeteliTony + tonninSeteliVille * 5 + mankinen * 70;
    document.getElementById("kps").innerHTML = kps;

}

function loadGame() {
    var savedGame = JSON.parse(localStorage.getItem("Gamesave"));
    if (typeof savedGame.klikkausVoima !== "undefined") klikkausVoima = savedGame.klikkausVoima;
    if (typeof savedGame.känniPisteet !== "undefined") känniPisteet = savedGame.känniPisteet;
    if (typeof savedGame.tonninSeteliTonyHinta !== "undefined") tonninSeteliTonyHinta = savedGame.tonninSeteliTonyHinta;
    if (typeof savedGame.tonninSeteliTony !== "undefined") tonninSeteliTony = savedGame.tonninSeteliTony;
    if (typeof savedGame.tonninSeteliVilleHinta !== "undefined") tonninSeteliVilleHinta = savedGame.tonninSeteliVilleHinta;
    if (typeof savedGame.tonninSeteliVille !== "undefined") tonninSeteliVille = savedGame.tonninSeteliVille;
    if (typeof savedGame.mankinenHinta !== "undefined") mankinenHinta = savedGame.mankinenHinta;
    if (typeof savedGame.mankinen !== "undefined") mankinen = savedGame.mankinen;
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
        mankinen: mankinen
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

window.onload = function() {
    loadGame();
    päivitäkps();
    document.getElementById("känniPisteet").innerHTML = känniPisteet;
    document.getElementById("mankinenHinta").innerHTML = mankinenHinta;
    document.getElementById("mankinen").innerHTML = mankinen;
};

setInterval (function() {
    känniPisteet = känniPisteet + tonninSeteliTony;
    känniPisteet = känniPisteet + tonninSeteliVille * 5;
    känniPisteet = känniPisteet + mankinen * 70;
    document.getElementById("känniPisteet").innerHTML = känniPisteet;

}, 1000); //1000ms = 1 sekunti

setInterval (function() {
    saveGame();
}, 30000); // 30 sekkaa

