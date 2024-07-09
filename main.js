"use strict";
window.onload = function () {
    utility.loadGame();
    updateUi();
    //display.updateAchievement();
};
let ottelijat = {
    nimi: [
        "Colby Covington",
        "Kamaru Usman",
        "Shavkat Rakhmonov",
        "Sean O'malley",
        "Jon Jones",
        "Alexander Volkanovski",
        "Alex Pereira",
        "Islam Makhachev",
        "Max Holloway",
        "Tom Aspinall",
        "Israel Adesanya",
        "Charles Oliveira"
    ],
    level: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    hinta: [
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10
    ],
    totalPower: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    power: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    unlocked: [
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ],
    isActive: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ],
    mastery: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    progress: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    intervalId: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12
    ],
    currentXp: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    maxXp: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    rank: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    img: [
        "./assets/colbyCovington.png",
        "./assets/kamaruUsman.png",
        "./assets/shavkatRakhmonov.png",
        "./assets/seanOmalley.png",
        "./assets/jonJones.png",
        "./assets/alexanderVolkanovski.png",
        "./assets/alexPereira.png",
        "./assets/islamMakhachev.png",
        "./assets/maxHolloway.png",
        "./assets/tomAspinall.png",
        "./assets/israelAdesanya.png",
        "./assets/charlesOliveira.png"
    ],
    id: [
        "colbyCovington",
        "kamaruUsman",
        "shavkatRakhmonov",
        "seanO'malley",
        "jonJones",
        "alexanderVolkanovski",
        "alexPereira",
        "islamMakhachev",
        "maxHolloway",
        "tomAspinall",
        "israelAdesanya",
        "charlesOliveira"
    ],
    eiPiirretty: [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true
    ],
    progressBarElement: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ],
    stats: {
        wins: [
            17,
            20,
            18,
            18,
            27,
            26,
            11,
            26,
            26,
            14,
            24,
            34
        ],
        losses: [
            4,
            4,
            0,
            1,
            1,
            4,
            2,
            1,
            7,
            3,
            3,
            10,
        ],
        nc: [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        winsByKnockout: [
            4,
            9,
            8,
            12,
            10,
            13,
            9,
            14,
            12,
            11,
            16,
            10
        ],
        winsBySubmission: [
            4,
            1,
            10,
            0,
            0,
            3,
            0,
            5,
            2,
            3,
            0,
            21
        ],
        firstRoundFinishes: [
            3,
            3,
            9,
            9,
            7,
            7,
            4,
            12,
            0,
            13,
            6,
            0
        ]
    },
    tags: {
        continent: [
            "northAmerica",
            "africa",
            "asia",
            "northAmerica",
            "northAmerica",
            "australia",
            "southAmerica",
            "asia",
            "northAmerica",
            "europe",
            "northAmerica",
            "southAmerica"
        ],
        special: [
            "pelle",
            "niceGuy",
            "dagestanGoblin",
            "starPower",
            "pelle",
            "niceGuy",
            "chad",
            "dagestanGoblin",
            "chad",
            "niceGuy",
            "pelle",
            "niceGuy"
        ]
    }
};
let game = {
    version: "0.1.1",
    totalClicks: 0,
    globalMulti: 1.1,
    hampaita: 50,
    hampaitaPerSekunti: 0,
    totalPower: 0,
    maxActive: 1,
    activeFighters: 0,
};
let ascendObject = {
    raja: 600,
    verta: 0,
    valintaHinta: 100,
    satunnainenHinta: 10,
    ascendCount: 0,
};
function satunnainen() {
    if (ascendObject.verta >= ascendObject.satunnainenHinta) {
        ascendObject.verta -= ascendObject.satunnainenHinta;
        ascendObject.satunnainenHinta *= 1.5;
        const randomIndex = Math.floor(Math.random() * (ottelijat.unlocked.length - 1));
        if (ottelijat.unlocked[randomIndex] === false) {
            ottelijat.unlocked[randomIndex] = true;
        }
        else {
            console.log("Already unlocked");
            satunnainen();
        }
        window.location.href = "./index.html";
        utility.saveGame();
    }
}
const elementit = {
    fighterContainer: document.getElementById("fighterContainer"),
    clicker: document.getElementsByClassName("clicker"),
    ascendBtn: document.getElementById("ascendContainer"),
    resetTrainers: document.getElementById("resetTrainers"),
    upgradeContainerElement: document.getElementById("upgradeContainer"),
    reset: document.getElementById("reset"),
    save: document.getElementById("save"),
    achievement: document.getElementById("achievements"),
    vertaElement: document.getElementById("verta"),
    valintaHintaElement: document.getElementById("valintaHinta"),
    satunnainenHintaElement: document.getElementById("satunnainenHinta"),
    hampaitaElement: document.getElementById("hampaita"),
    hampaitaPerSekuntiElement: document.getElementById("hampaitaPerSekunti"),
    satunnainenBtn: document.getElementById("satunnainenBtn")
};
const utility = {
    ascend: (() => {
        ascendObject.raja *= 2.5;
        ascendObject.verta = (game.hampaita *= 0.01);
        ascendObject.ascendCount++;
        utility.saveGame();
        window.location.href = "./ascend.html";
    }),
    pysäytäKaikki: (() => {
        game.activeFighters = 0;
        for (let i = 0; i < ottelijat.nimi.length; i++) {
            ottelijat.isActive[i] = false;
            clearInterval(ottelijat.intervalId[i]);
        }
        console.log("Pysäytetty");
    }),
    saveGame: (() => {
        console.log("Saving game");
        let gameSave = {
            game: game,
            ottelijat: ottelijat,
            ascendObject: ascendObject
        };
        localStorage.setItem("gameSave", JSON.stringify(gameSave));
    }),
    loadGame: (() => {
        const gameSave = localStorage.getItem("gameSave");
        if (gameSave === null) {
            console.error("No game save found");
            return;
        }
        try {
            const parsedGameSave = JSON.parse(gameSave);
            if (parsedGameSave === null) {
                console.error("Game save is null");
                return;
            }
            if (typeof parsedGameSave !== "object") {
                console.error("Game save is not an object");
                return;
            }
            game = parsedGameSave.game;
            ottelijat = parsedGameSave.ottelijat;
            ascendObject = parsedGameSave.ascendObject;
            for (let i = 0; i < ottelijat.nimi.length; i++) {
                ottelijat.eiPiirretty[i] = true;
            }
            updateUi();
        }
        catch (error) {
            console.error("Error while loading game save:", error);
        }
    }),
    resetGame: (() => {
        localStorage.removeItem("gameSave");
        location.reload();
    }),
};
const trainTargetId = `trainasd`;
function changeColor() {
    document.getElementById("trainasd").style.backgroundColor = "green";
}
if (elementit.fighterContainer) {
    setInterval(() => {
        for (let i = 0; i < ottelijat.nimi.length; i++) {
            if (ottelijat.unlocked[i] && ottelijat.eiPiirretty[i]) {
                const parentDivForOttelijat = document.createElement("div");
                parentDivForOttelijat.classList.add("parentDivForOttelijat");
                elementit.fighterContainer.appendChild(parentDivForOttelijat);
                const ottelijaElement = document.createElement("div");
                ottelijaElement.classList.add("ottelijaDiv");
                ottelijaElement.addEventListener("click", handleClick);
                parentDivForOttelijat.appendChild(ottelijaElement);
                const img = document.createElement("img");
                img.src = ottelijat.img[i];
                img.classList.add("ottelijaImg");
                ottelijaElement.appendChild(img);
                const ottelijaInfo = document.createElement("div");
                ottelijaInfo.classList.add("ottelijaInfo");
                ottelijaElement.appendChild(ottelijaInfo);
                const level = document.createElement("div");
                level.classList.add("level");
                level.innerHTML = ottelijat.level[i].toLocaleString();
                ottelijaElement.appendChild(level);
                //const train = document.createElement("div");
                //train.classList.add("train");
                //ottelijaElement.appendChild(train);
                //const trainProgressBar = document.createElement("div");
                //trainProgressBar.classList.add("trainProgressBar");
                //train.appendChild(trainProgressBar);
                const nimiP = document.createElement("p");
                const totalPowerP = document.createElement("p");
                const powerP = document.createElement("p");
                const hintaP = document.createElement("p");
                nimiP.innerHTML = ottelijat.nimi[i];
                totalPowerP.innerHTML = "TOTAL POWER: " + ottelijat.totalPower[i].toFixed(2);
                powerP.innerHTML = "Power: " + ottelijat.power[i].toFixed(2);
                hintaP.innerHTML = "Hinta: " + ottelijat.hinta[i].toFixed(2);
                ottelijaInfo.appendChild(nimiP);
                ottelijaInfo.appendChild(totalPowerP);
                ottelijaInfo.appendChild(powerP);
                ottelijaInfo.appendChild(hintaP);
                const progressBar = document.createElement("div");
                //progressBar.classList.add("xpBox");
                //const progressBar = document.createElement("div");
                progressBar.classList.add("progressBar");
                //xpBox.appendChild(progressBar);
                parentDivForOttelijat.appendChild(progressBar);
                progressBar.innerHTML = `${(ottelijat.currentXp[i] + "/" + ottelijat.maxXp[i])}`;
                //xpBox.style.flexGrow = "1";
                //xpBox.setAttribute('data-fighter-index', [i].toString());
                ottelijat.eiPiirretty[i] = false;
                function handleClick(event) {
                    const target = event.target;
                    const targetProgressBar = target.closest('.progressBar');
                    ottelijat.isActive[i] = true;
                    game.activeFighters++;
                    ottelijat.intervalId[i] = setInterval(() => {
                        ottelijat.progress[i] += 1.1;
                        //const targetProgressBar = target!.closest('.parentDivForOttelijat').querySelector('.progressBar');
                        targetProgressBar.style.width = `${(ottelijat.progress[i])}%`;
                        if (ottelijat.progress[i] >= 100) {
                            ottelijat.currentXp[i]++;
                            if (ottelijat.currentXp[i] >= ottelijat.maxXp[i]) {
                                ottelijat.progress[i] = 0;
                                ottelijat.currentXp[i] = 0;
                                ottelijat.rank[i]++;
                                ottelijat.maxXp[i] *= 1.1;
                            }
                            ottelijat.progress[i] = 0;
                        }
                    }, 100);
                    //if (!target || !target.parentElement) return;
                    //if (!targetOttelija) return;
                    const index = Array.from(parentDivForOttelijat.children).indexOf(parentDivForOttelijat);
                    const asd = Array.from(parentDivForOttelijat.children).indexOf(parentDivForOttelijat);
                    ostaOttelija(index);
                    startProgressBar(asd);
                }
                function startProgressBar(asd) {
                    if (game.activeFighters >= game.maxActive) {
                        return;
                    }
                    ottelijat.isActive[i] = true;
                    game.activeFighters++;
                    ottelijat.intervalId[i] = setInterval(() => {
                        ottelijat.progress[i] += 0.1;
                        progressBar.style.width = `${(ottelijat.progress[i])}%`;
                        if (ottelijat.progress[i] >= 100) {
                            ottelijat.currentXp[i]++;
                            if (ottelijat.currentXp[i] >= ottelijat.maxXp[i]) {
                                ottelijat.progress[i] = 0;
                                ottelijat.currentXp[i] = 0;
                                ottelijat.rank[i]++;
                                ottelijat.maxXp[i] *= 1.1;
                            }
                            ottelijat.progress[i] = 0;
                        }
                    }, 100);
                }
                function ostaOttelija(index) {
                    if (game.hampaita >= ottelijat.hinta[i]) {
                        game.hampaita -= ottelijat.hinta[i];
                        ottelijat.level[i]++;
                        ottelijat.hinta[i] *= 1.2;
                        let winratio = ottelijat.stats.wins[i] / (ottelijat.stats.losses[i] === 0 ? 1 : ottelijat.stats.losses[i]);
                        ottelijat.power[i] = ((winratio - ottelijat.stats.nc[i] + ottelijat.stats.winsByKnockout[i] + ottelijat.stats.winsBySubmission[i] + ottelijat.stats.firstRoundFinishes[i]) * game.globalMulti) / 1000;
                        ottelijat.totalPower[i] = ottelijat.power[i] * ottelijat.level[i];
                        game.hampaitaPerSekunti += ottelijat.totalPower[i];
                        level.innerHTML = ottelijat.level[i].toLocaleString();
                        hintaP.innerHTML = "Hinta: " + ottelijat.hinta[i].toFixed(2);
                        powerP.innerHTML = "Power: " + ottelijat.power[i].toFixed(2);
                        totalPowerP.innerHTML = "TOTAL POWER: " + ottelijat.totalPower[i].toFixed(2);
                    }
                }
                /*
                function startProgressBar(asd: number) {
                  if (game.activeFighters >= game.maxActive) {
                    return;
                  }
                  ottelijat.isActive[asd] = true;
                  game.activeFighters++;
                  ottelijat.intervalId[i] = setInterval(() => {
                    ottelijat.progress[i] += 0.1;
                    trainProgressBar.style.width = `${(ottelijat.progress[i])}%`;
                    if (ottelijat.progress[i] >= 100) {
                      ottelijat.currentXp[i]++;
                      if (ottelijat.currentXp[i] >= ottelijat.maxXp[i]) {
                        ottelijat.progress[i] = 0;
                        ottelijat.currentXp[i] = 0;
                        ottelijat.rank[i]++;
                        ottelijat.maxXp[i] *= 1.1;
                      }
                      ottelijat.progress[i] = 0;
                    }
                  }, 100);
                } */
            }
        }
        game.hampaita += game.hampaitaPerSekunti / 10;
        updateUi();
    }, 100);
}
setInterval(() => {
    updateUi();
}, 100);
function updateUi() {
    if (elementit.hampaitaElement) {
        elementit.hampaitaElement.innerHTML = game.hampaita.toFixed(2).toLocaleString();
    }
    if (elementit.hampaitaPerSekuntiElement) {
        elementit.hampaitaPerSekuntiElement.innerHTML = game.hampaitaPerSekunti.toFixed(2).toLocaleString();
    }
    if (elementit.valintaHintaElement) {
        elementit.valintaHintaElement.innerHTML = ascendObject.valintaHinta.toLocaleString();
    }
    if (elementit.satunnainenHintaElement) {
        elementit.satunnainenHintaElement.innerHTML = ascendObject.satunnainenHinta.toLocaleString();
    }
    if (elementit.ascendBtn) {
        if (game.hampaita >= ascendObject.raja) {
            elementit.ascendBtn.style.display = "block";
            elementit.ascendBtn.innerHTML = "Ascend";
        }
        else {
            elementit.ascendBtn.style.display = "none";
        }
    }
    if (elementit.vertaElement) {
        if (ascendObject.ascendCount > 0) {
            elementit.vertaElement.innerHTML = "block";
            elementit.vertaElement.innerHTML = ascendObject.verta.toFixed(2).toLocaleString();
        }
        else {
            elementit.vertaElement.innerHTML = "none";
        }
        elementit.vertaElement.innerHTML = ascendObject.verta.toLocaleString();
    }
}
setInterval(() => {
    utility.saveGame();
}, 30_000);
for (let i = 0; i < elementit.clicker.length; i++) {
    elementit.clicker[i].addEventListener("click", function () {
        game.totalClicks++;
    });
}
if (elementit.reset) {
    elementit.reset.addEventListener("click", function () {
        utility.resetGame();
    });
}
if (elementit.save) {
    elementit.save.addEventListener("click", function () {
        utility.saveGame();
    });
}
if (elementit.ascendBtn) {
    elementit.ascendBtn.addEventListener("click", function () {
        utility.ascend();
    });
}
if (elementit.satunnainenBtn) {
    elementit.satunnainenBtn.addEventListener("click", function () {
        satunnainen();
    });
}
