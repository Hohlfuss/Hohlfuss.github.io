var game = {
    version: "0.1.3",
    hampaita: 1,
    hampaitaPerSekunti: 0,
    activeTrainers: 0,
    maxTrainers: 1,
    freeTrainers: 0
};
var ottelijat = {
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
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
    ],
    isUnlocked: [
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
    xp: [
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
    xpThreshold: [
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
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
        "seanOmalley",
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
    step: [
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1
    ],
    speed: [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
    ],
    pelleCount: 0,
    niceGuyCount: 0,
    dagestanCount: 0,
    afrikanMafiaCount: 0,
    lookingAssCount: 0,
    chadCount: 0,
    championCount: 0,
    totalCount: 0,
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
        pelle: [
            true,
            false,
            false,
            true,
            true,
            false,
            false,
            false,
            false,
            false,
            true,
            false
        ],
        niceGuy: [
            false,
            true,
            false,
            false,
            false,
            true,
            false,
            false,
            false,
            true,
            false,
            true
        ],
        dagestan: [
            false,
            false,
            true,
            false,
            false,
            false,
            false,
            true,
            false,
            false,
            false,
            false
        ],
        afrikanMafia: [
            false,
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            true,
            false
        ],
        lookingAss: [
            false,
            false,
            false,
            true,
            false,
            false,
            false,
            true,
            false,
            false,
            false,
            false
        ],
        chad: [
            false,
            false,
            true,
            false,
            true,
            false,
            true,
            false,
            false,
            false,
            false,
            false
        ]
    }
};
var shop = {
    avaaSatunnainenHinta: 1,
    avaaValitsemaHinta: 100,
    lisääTrainereitaHinta: 25
};
var upgrades = {
    nimi: [
        "Pelle Tier 1 Boxerit",
        "Niceguy Tier 1 Boxerit",
        "dagestan Tier 1 Boxerit",
        "Afrikanmafia Tier 1 Boxerit",
        "Lookingass Tier 1 Boxerit",
        "Chaditäijät Tier 1 Boxerit",
        "Pelle Tier 2 Boxerit",
        "Niceguy Tier 2 Boxerit",
        "dagestan Tier 2 Boxerit",
        "Afrikanmafia Tier 2 Boxerit",
        "Lookingass Tier 2 Boxerit",
        "Chaditäijät Tier 2 Boxerit",
        "Pelle Tier 3 Boxerit",
        "Niceguy Tier 3 Boxerit",
        "dagestan Tier 3 Boxerit",
        "Afrikanmafia Tier 3 Boxerit",
        "Lookingass Tier 3 Boxerit",
        "Chaditäijät Tier 3 Boxerit",
        "Pelle Tier 4 Boxerit",
        "Niceguy Tier 4 Boxerit",
        "dagestan Tier 4 Boxerit",
        "Afrikanmafia Tier 4 Boxerit",
        "Lookingass Tier 4 Boxerit",
        "Chaditäijät Tier 4 Boxerit",
        "Pelle Tier 1 Hanskat",
        "Niceguy Tier 1 Hanskat",
        "dagestan Tier 1 Hanskat",
        "Afrikanmafia Tier 1 Hanskat",
        "Lookingass Tier 1 Hanskat",
        "Chaditäijät Tier 1 Hanskat",
        "Pelle Tier 2 Hanskat",
        "Niceguy Tier 2 Hanskat",
        "dagestan Tier 2 Hanskat",
        "Afrikanmafia Tier 2 Hanskat",
        "Lookingass Tier 2 Hanskat",
        "Chaditäijät Tier 2 Hanskat",
        "Pelle Tier 3 Hanskat",
        "Niceguy Tier 3 Hanskat",
        "dagestan Tier 3 Hanskat",
        "Afrikanmafia Tier 3 Hanskat",
        "Lookingass Tier 3 Hanskat",
        "Chaditäijät Tier 3 Hanskat",
        "Pelle Tier 4 Hanskat",
        "Niceguy Tier 4 Hanskat",
        "dagestan Tier 4 Hanskat",
        "Afrikanmafia Tier 4 Hanskat",
        "Lookingass Tier 4 Hanskat",
        "Chaditäijät Tier 4 Hanskat",
    ],
    kuvaus: [
        "Pelletäijät 2x &#x1F9B6;",
        "Niceguyt 2x&#x1F9B6;",
        "dagestanit 2x&#x1F9B6;",
        "Afrikanmafia 2x&#x1F9B6;",
        "Lookingass 2x&#x1F9B6;",
        "Chaditäijät 2x &#x1F9B6;",
        "Pelletäijät 2x &#x1F9B6;",
        "Niceguyt 2x&#x1F9B6;",
        "dagestanit 2x&#x1F9B6;",
        "Afrikanmafia 2x&#x1F9B6;",
        "Lookingass 2x&#x1F9B6;",
        "Chaditäijät 2x &#x1F9B6;",
        "Pelletäijät 2x &#x1F9B6;",
        "Niceguyt 2x&#x1F9B6;",
        "dagestanit 2x&#x1F9B6;",
        "Afrikanmafia 2x&#x1F9B6;",
        "Lookingass 2x&#x1F9B6;",
        "Chaditäijät 2x &#x1F9B6;",
        "Pelletäijät 2x &#x1F9B6;",
        "Niceguyt 2x&#x1F9B6;",
        "dagestanit 2x&#x1F9B6;",
        "Afrikanmafia 2x&#x1F9B6;",
        "Lookingass 2x&#x1F9B6;",
        "Chaditäijät 2x &#x1F9B6;",
        "Pelletäijät 2x &#x1F4AA;",
        "Niceguyt 2x&#x1F4AA;",
        "dagestanit 2x&#x1F4AA;",
        "Afrikanmafia 2x&#x1F4AA;",
        "Lookingass 2x&#x1F4AA;",
        "Chaditäijät 2x &#x1F4AA;",
        "Pelletäijät 2x &#x1F4AA;",
        "Niceguyt 2x&#x1F4AA;",
        "dagestanit 2x&#x1F4AA;",
        "Afrikanmafia 2x&#x1F4AA;",
        "Lookingass 2x&#x1F4AA;",
        "Chaditäijät 2x &#x1F4AA;",
        "Pelletäijät 2x &#x1F4AA;",
        "Niceguyt 2x&#x1F4AA;",
        "dagestanit 2x&#x1F4AA;",
        "Afrikanmafia 2x&#x1F4AA;",
        "Lookingass 2x&#x1F4AA;",
        "Chaditäijät 2x &#x1F4AA;",
        "Pelletäijät 2x &#x1F4AA;",
        "Niceguyt 2x&#x1F4AA;",
        "dagestanit 2x&#x1F4AA;",
        "Afrikanmafia 2x&#x1F4AA;",
        "Lookingass 2x&#x1F4AA;",
        "Chaditäijät 2x &#x1F4AA;",
    ],
    kuva: [
        "t1Boxerit.png",
        "t1Boxerit.png",
        "t1Boxerit.png",
        "t1Boxerit.png",
        "t1Boxerit.png",
        "t1Boxerit.png",
        "t2Boxerit.png",
        "t2Boxerit.png",
        "t2Boxerit.png",
        "t2Boxerit.png",
        "t2Boxerit.png",
        "t2Boxerit.png",
        "t3Boxerit.png",
        "t3Boxerit.png",
        "t3Boxerit.png",
        "t3Boxerit.png",
        "t3Boxerit.png",
        "t3Boxerit.png",
        "t4Boxerit.png",
        "t4Boxerit.png",
        "t4Boxerit.png",
        "t4Boxerit.png",
        "t4Boxerit.png",
        "t4Boxerit.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t2Hanskat.png",
        "t2Hanskat.png",
        "t2Hanskat.png",
        "t2Hanskat.png",
        "t2Hanskat.png",
        "t2Hanskat.png",
        "t3Hanskat.png",
        "t3Hanskat.png",
        "t3Hanskat.png",
        "t3Hanskat.png",
        "t3Hanskat.png",
        "t3Hanskat.png",
        "t4Hanskat.png",
        "t4Hanskat.png",
        "t4Hanskat.png",
        "t4Hanskat.png",
        "t4Hanskat.png",
        "t4Hanskat.png",
    ],
    tyyppi: [
        "nopeus",
        "nopeus",
        "nopeus",
        "nopeus",
        "nopeus",
        "nopeus",
        "nopeus",
        "nopeus",
        "nopeus",
        "nopeus",
        "nopeus",
        "nopeus",
        "nopeus",
        "nopeus",
        "nopeus",
        "nopeus",
        "nopeus",
        "nopeus",
        "nopeus",
        "nopeus",
        "nopeus",
        "nopeus",
        "nopeus",
        "nopeus",
        "power",
        "power",
        "power",
        "power",
        "power",
        "power",
        "power",
        "power",
        "power",
        "power",
        "power",
        "power",
        "power",
        "power",
        "power",
        "power",
        "power",
        "power",
        "power",
        "power",
        "power",
        "power",
        "power",
        "power",
    ],
    hinta: [
        60,
        60,
        60,
        60,
        60,
        60,
        180,
        180,
        180,
        180,
        180,
        180,
        540,
        540,
        540,
        540,
        540,
        540,
        1620,
        1620,
        1620,
        1620,
        1620,
        1620,
        80,
        80,
        80,
        80,
        80,
        80,
        240,
        240,
        240,
        240,
        240,
        240,
        720,
        720,
        720,
        720,
        720,
        720,
        2160,
        2160,
        2160,
        2160,
        2160,
        2160,
    ],
    pellet: [
        0,
        3,
        4,
        10
    ],
    tag: [
        "pelle",
        "niceGuy",
        "dagestanit",
        "afrikanMafia",
        "lookingAss",
        "chad",
        "pelle",
        "niceGuy",
        "dagestanit",
        "afrikanMafia",
        "lookingAss",
        "chad",
        "pelle",
        "niceGuy",
        "dagestanit",
        "afrikanMafia",
        "lookingAss",
        "chad",
        "pelle",
        "niceGuy",
        "dagestanit",
        "afrikanMafia",
        "lookingAss",
        "chad",
        "pelle",
        "niceGuy",
        "dagestanit",
        "afrikanMafia",
        "lookingAss",
        "chad",
        "pelle",
        "niceGuy",
        "dagestanit",
        "afrikanMafia",
        "lookingAss",
        "chad",
        "pelle",
        "niceGuy",
        "dagestanit",
        "afrikanMafia",
        "lookingAss",
        "chad",
        "pelle",
        "niceGuy",
        "dagestanit",
        "afrikanMafia",
        "lookingAss",
        "chad",
    ],
    vaatimus: [
        5,
        5,
        5,
        5,
        5,
        5,
        25,
        25,
        25,
        25,
        25,
        25,
        45,
        45,
        45,
        45,
        45,
        45,
        65,
        65,
        65,
        65,
        65,
        65,
        10,
        10,
        10,
        10,
        10,
        10,
        40,
        40,
        40,
        40,
        40,
        40,
        70,
        70,
        70,
        70,
        70,
        70,
        100,
        100,
        100,
        100,
        100,
        100,
    ],
    bonus: [
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
    ],
    ostettu: [
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
        false,
        false,
        false,
        false,
    ]
};
var lastPlayed = 0;
var colbyCovingtonInterval = null;
var kamaruUsmanInterval = null;
var shavkatRakhmonovInterval = null;
var seanOmalleyInterval = null;
var jonJonesInterval = null;
var alexanderVolkanovskiInterval = null;
var alexPereiraInterval = null;
var islamMakhachevInterval = null;
var maxHollowayInterval = null;
var tomAspinallInterval = null;
var israelAdesanyaInterval = null;
var charlesOliveiraInterval = null;
setInterval(function () {
    var totalPower = 0;
    for (var i = 0; i < ottelijat.isUnlocked.length; i++) {
        if (ottelijat.isUnlocked[i] === true) {
            document.getElementById(ottelijat.id[i] + "Container").style.display = "block";
            if (ottelijat.isActive[i] === true) {
                totalPower += (ottelijat.power[i] * ottelijat.speed[i]) / 10;
            }
        }
    }
    game.hampaitaPerSekunti = totalPower;
    updateUi();
}, 100);
setInterval(function () {
    updateUpgrades();
}, 10000);
setInterval(function () {
    saveGame();
}, 30000);
function offlineGains() {
    var now = Date.now();
    var offlineTime = now - lastPlayed;
    //let reducedProductionRate = 0.0008;
    var offlineProgress = offlineTime; // * reducedProductionRate;
    var offlineHampaita = game.hampaitaPerSekunti * offlineProgress / 2000;
    alert("Offline tienaus ".concat(Math.round(offlineHampaita).toLocaleString(), " hampaita!"));
    game.hampaita += offlineHampaita;
    document.getElementById("hampaita").innerHTML = Math.round(game.hampaita).toLocaleString();
}
// @ts-ignore
function osta(index) {
    if (!upgrades.ostettu[index] && game.hampaita >= upgrades.hinta[index]) {
        if (upgrades.tag[index] === "pelle" && ottelijat.pelleCount >= upgrades.vaatimus[index]) {
            if (upgrades.tyyppi[index] === "nopeus") {
                game.hampaita -= upgrades.hinta[index];
                ottelijat.step[0] *= upgrades.bonus[index];
                ottelijat.speed[0] *= upgrades.bonus[index];
                ottelijat.step[3] *= upgrades.bonus[index];
                ottelijat.speed[3] *= upgrades.bonus[index];
                ottelijat.step[4] *= upgrades.bonus[index];
                ottelijat.speed[4] *= upgrades.bonus[index];
                ottelijat.step[10] *= upgrades.bonus[index];
                ottelijat.speed[10] *= upgrades.bonus[index];
                upgrades.ostettu[index] = true;
                updateUpgrades();
            }
            if (upgrades.tyyppi[index] === "power") {
                game.hampaita -= upgrades.hinta[index];
                ottelijat.power[0] *= upgrades.bonus[index];
                ottelijat.power[3] *= upgrades.bonus[index];
                ottelijat.power[4] *= upgrades.bonus[index];
                ottelijat.power[10] *= upgrades.bonus[index];
                upgrades.ostettu[index] = true;
                updateUpgrades();
            }
        }
        if (upgrades.tag[index] === "niceGuy" && ottelijat.niceGuyCount >= upgrades.vaatimus[index]) {
            if (upgrades.tyyppi[index] === "nopeus") {
                game.hampaita -= upgrades.hinta[index];
                ottelijat.step[1] *= upgrades.bonus[index];
                ottelijat.speed[1] *= upgrades.bonus[index];
                ottelijat.step[5] *= upgrades.bonus[index];
                ottelijat.speed[5] *= upgrades.bonus[index];
                ottelijat.step[9] *= upgrades.bonus[index];
                ottelijat.speed[9] *= upgrades.bonus[index];
                ottelijat.step[11] *= upgrades.bonus[index];
                ottelijat.speed[11] *= upgrades.bonus[index];
                upgrades.ostettu[index] = true;
                updateUpgrades();
            }
            if (upgrades.tyyppi[index] === "power") {
                game.hampaita -= upgrades.hinta[index];
                ottelijat.power[1] *= upgrades.bonus[index];
                ottelijat.power[5] *= upgrades.bonus[index];
                ottelijat.power[9] *= upgrades.bonus[index];
                ottelijat.power[11] *= upgrades.bonus[index];
                upgrades.ostettu[index] = true;
                updateUpgrades();
            }
        }
        if (upgrades.tag[index] === "dagestanit" && ottelijat.dagestanCount >= upgrades.vaatimus[index]) {
            if (upgrades.tyyppi[index] === "nopeus") {
                game.hampaita -= upgrades.hinta[index];
                ottelijat.step[2] *= upgrades.bonus[index];
                ottelijat.speed[2] *= upgrades.bonus[index];
                ottelijat.step[7] *= upgrades.bonus[index];
                ottelijat.speed[7] *= upgrades.bonus[index];
                upgrades.ostettu[index] = true;
                updateUpgrades();
            }
            if (upgrades.tyyppi[index] === "power") {
                game.hampaita -= upgrades.hinta[index];
                ottelijat.power[2] *= upgrades.bonus[index];
                ottelijat.power[7] *= upgrades.bonus[index];
                upgrades.ostettu[index] = true;
                updateUpgrades();
            }
        }
        if (upgrades.tag[index] === "afrikanMafia" && ottelijat.afrikanMafiaCount >= upgrades.vaatimus[index]) {
            if (upgrades.tyyppi[index] === "nopeus") {
                game.hampaita -= upgrades.hinta[index];
                ottelijat.step[1] *= upgrades.bonus[index];
                ottelijat.speed[1] *= upgrades.bonus[index];
                ottelijat.step[10] *= upgrades.bonus[index];
                ottelijat.speed[10] *= upgrades.bonus[index];
                upgrades.ostettu[index] = true;
                updateUpgrades();
            }
            if (upgrades.tyyppi[index] === "power") {
                game.hampaita -= upgrades.hinta[index];
                ottelijat.power[1] *= upgrades.bonus[index];
                ottelijat.power[10] *= upgrades.bonus[index];
                upgrades.ostettu[index] = true;
                updateUpgrades();
            }
        }
        if (upgrades.tag[index] === "lookingAss" && ottelijat.lookingAssCount >= upgrades.vaatimus[index]) {
            if (upgrades.tyyppi[index] === "nopeus") {
                game.hampaita -= upgrades.hinta[index];
                ottelijat.step[3] *= upgrades.bonus[index];
                ottelijat.speed[3] *= upgrades.bonus[index];
                ottelijat.step[7] *= upgrades.bonus[index];
                ottelijat.speed[7] *= upgrades.bonus[index];
                upgrades.ostettu[index] = true;
                updateUpgrades();
            }
            if (upgrades.tyyppi[index] === "power") {
                game.hampaita -= upgrades.hinta[index];
                ottelijat.power[3] *= upgrades.bonus[index];
                ottelijat.power[7] *= upgrades.bonus[index];
                upgrades.ostettu[index] = true;
                updateUpgrades();
            }
        }
        if (upgrades.tag[index] === "chad" && ottelijat.chadCount >= upgrades.vaatimus[index]) {
            if (upgrades.tyyppi[index] === "nopeus") {
                game.hampaita -= upgrades.hinta[index];
                ottelijat.step[2] *= upgrades.bonus[index];
                ottelijat.speed[2] *= upgrades.bonus[index];
                ottelijat.step[4] *= upgrades.bonus[index];
                ottelijat.speed[4] *= upgrades.bonus[index];
                ottelijat.step[6] *= upgrades.bonus[index];
                ottelijat.speed[6] *= upgrades.bonus[index];
                upgrades.ostettu[index] = true;
                updateUpgrades();
            }
            if (upgrades.tyyppi[index] === "power") {
                game.hampaita -= upgrades.hinta[index];
                ottelijat.power[2] *= upgrades.bonus[index];
                ottelijat.power[4] *= upgrades.bonus[index];
                ottelijat.power[6] *= upgrades.bonus[index];
                upgrades.ostettu[index] = true;
                updateUpgrades();
            }
        }
    }
}
function avaaSatunnainen() {
    var randomIndex = Math.floor(Math.random() * (ottelijat.isUnlocked.length));
    if (ottelijat.isUnlocked[randomIndex] === false && game.hampaita >= shop.avaaSatunnainenHinta) {
        ottelijat.isUnlocked[randomIndex] = true;
        game.hampaita -= shop.avaaSatunnainenHinta;
        shop.avaaSatunnainenHinta *= 5;
        saveGame();
    }
    else {
        avaaSatunnainen();
    }
    //window.location.href = "./index.html";
    console.log("Avattu satunnaisesti" + ottelijat.nimi[randomIndex]);
    saveGame();
    /*if (game.hampaita >= shop.avaaSatunnainenHinta) {
    game.hampaita -= shop.avaaSatunnainenHinta;
    shop.avaaSatunnainenHinta *= 5;
    //shop.avaaValitsemaHinta *= 1.1;
    //shop.lisääTrainereitaHinta *= 1.1;*/
}
;
/*function avaaValitsema() {
  if (game.hampaita >= shop.avaaValitsemaHinta) {
    game.hampaita -= shop.avaaValitsemaHinta;
    shop.avaaValitsemaHinta *= 10;
    shop.avaaSatunnainenHinta *= 1.1;
    shop.lisääTrainereitaHinta *= 1.1;
    window.location.href = "./lukitutOttelijat.html";
    saveGame();
  }
}*/
function lisääTrainereita() {
    if (game.hampaita >= shop.lisääTrainereitaHinta) {
        game.hampaita -= shop.lisääTrainereitaHinta;
        game.maxTrainers += 1;
        shop.lisääTrainereitaHinta *= 9;
        //shop.avaaSatunnainenHinta *= 1.1;
        //shop.lisääTrainereitaHinta *= 1.1;
        saveGame();
    }
}
function updateUi() {
    colbyCovingtonXp.innerHTML = ottelijat.xp[0].toFixed(0).toLocaleString();
    colbyCovingtonXpThreshold.innerHTML = ottelijat.xpThreshold[0].toFixed(0).toLocaleString();
    colbyCovingtonLevel.innerHTML = ottelijat.level[0].toFixed(0).toLocaleString();
    colbyCovingtonPower.innerHTML = ottelijat.power[0].toFixed(0).toLocaleString();
    colbyCovingtonSpeed.innerHTML = ottelijat.speed[0].toFixed(0).toLocaleString();
    kamaruUsmanXp.innerHTML = ottelijat.xp[1].toFixed(0).toLocaleString();
    kamaruUsmanXpThreshold.innerHTML = ottelijat.xpThreshold[1].toFixed(0).toLocaleString();
    kamaruUsmanLevel.innerHTML = ottelijat.level[1].toFixed(0).toLocaleString();
    kamaruUsmanPower.innerHTML = ottelijat.power[1].toFixed(0).toLocaleString();
    kamaruUsmanSpeed.innerHTML = ottelijat.speed[1].toFixed(0).toLocaleString();
    shavkatRakhmonovXp.innerHTML = ottelijat.xp[2].toFixed(0).toLocaleString();
    shavkatRakhmonovXpThreshold.innerHTML = ottelijat.xpThreshold[2].toFixed(0).toLocaleString();
    shavkatRakhmonovLevel.innerHTML = ottelijat.level[2].toFixed(0).toLocaleString();
    shavkatRakhmonovPower.innerHTML = ottelijat.power[2].toFixed(0).toLocaleString();
    shavkatRakhmonovSpeed.innerHTML = ottelijat.speed[2].toFixed(0).toLocaleString();
    seanOmalleyXp.innerHTML = ottelijat.xp[3].toFixed(0).toLocaleString();
    seanOmalleyXpThreshold.innerHTML = ottelijat.xpThreshold[3].toFixed(0).toLocaleString();
    seanOmalleyLevel.innerHTML = ottelijat.level[3].toFixed(0).toLocaleString();
    seanOmalleyPower.innerHTML = ottelijat.power[3].toFixed(0).toLocaleString();
    seanOmalleySpeed.innerHTML = ottelijat.speed[3].toFixed(0).toLocaleString();
    jonJonesXp.innerHTML = ottelijat.xp[4].toFixed(0).toLocaleString();
    jonJonesXpThreshold.innerHTML = ottelijat.xpThreshold[4].toFixed(0).toLocaleString();
    jonJonesLevel.innerHTML = ottelijat.level[4].toFixed(0).toLocaleString();
    jonJonesPower.innerHTML = ottelijat.power[4].toFixed(0).toLocaleString();
    jonJonesSpeed.innerHTML = ottelijat.speed[4].toFixed(0).toLocaleString();
    alexanderVolkanovskiXp.innerHTML = ottelijat.xp[5].toFixed(0).toLocaleString();
    alexanderVolkanovskiXpThreshold.innerHTML = ottelijat.xpThreshold[5].toFixed(0).toLocaleString();
    alexanderVolkanovskiLevel.innerHTML = ottelijat.level[5].toFixed(0).toLocaleString();
    alexanderVolkanovskiPower.innerHTML = ottelijat.power[5].toFixed(0).toLocaleString();
    alexanderVolkanovskiSpeed.innerHTML = ottelijat.speed[5].toFixed(0).toLocaleString();
    alexPereiraXp.innerHTML = ottelijat.xp[6].toFixed(0).toLocaleString();
    alexPereiraXpThreshold.innerHTML = ottelijat.xpThreshold[6].toFixed(0).toLocaleString();
    alexPereiraLevel.innerHTML = ottelijat.level[6].toFixed(0).toLocaleString();
    alexPereiraPower.innerHTML = ottelijat.power[6].toFixed(0).toLocaleString();
    alexPereiraSpeed.innerHTML = ottelijat.speed[6].toFixed(0).toLocaleString();
    islamMakhachevXp.innerHTML = ottelijat.xp[7].toFixed(0).toLocaleString();
    islamMakhachevXpThreshold.innerHTML = ottelijat.xpThreshold[7].toFixed(0).toLocaleString();
    islamMakhachevLevel.innerHTML = ottelijat.level[7].toFixed(0).toLocaleString();
    islamMakhachevPower.innerHTML = ottelijat.power[7].toFixed(0).toLocaleString();
    islamMakhachevSpeed.innerHTML = ottelijat.speed[7].toFixed(0).toLocaleString();
    maxHollowayXp.innerHTML = ottelijat.xp[8].toFixed(0).toLocaleString();
    maxHollowayXpThreshold.innerHTML = ottelijat.xpThreshold[8].toFixed(0).toLocaleString();
    maxHollowayLevel.innerHTML = ottelijat.level[8].toFixed(0).toLocaleString();
    maxHollowayPower.innerHTML = ottelijat.power[8].toFixed(0).toLocaleString();
    maxHollowaySpeed.innerHTML = ottelijat.speed[8].toFixed(0).toLocaleString();
    tomAspinallXp.innerHTML = ottelijat.xp[9].toFixed(0).toLocaleString();
    tomAspinallXpThreshold.innerHTML = ottelijat.xpThreshold[9].toFixed(0).toLocaleString();
    tomAspinallLevel.innerHTML = ottelijat.level[9].toFixed(0).toLocaleString();
    tomAspinallPower.innerHTML = ottelijat.power[9].toFixed(0).toLocaleString();
    tomAspinallSpeed.innerHTML = ottelijat.speed[9].toFixed(0).toLocaleString();
    israelAdesanyaXp.innerHTML = ottelijat.xp[10].toFixed(0).toLocaleString();
    israelAdesanyaXpThreshold.innerHTML = ottelijat.xpThreshold[10].toFixed(0).toLocaleString();
    israelAdesanyaLevel.innerHTML = ottelijat.level[10].toFixed(0).toLocaleString();
    israelAdesanyaPower.innerHTML = ottelijat.power[10].toFixed(0).toLocaleString();
    israelAdesanyaSpeed.innerHTML = ottelijat.speed[10].toFixed(0).toLocaleString();
    charlesOliveiraXp.innerHTML = ottelijat.xp[11].toFixed(0).toLocaleString();
    charlesOliveiraXpThreshold.innerHTML = ottelijat.xpThreshold[11].toFixed(0).toLocaleString();
    charlesOliveiraLevel.innerHTML = ottelijat.level[11].toFixed(0).toLocaleString();
    charlesOliveiraPower.innerHTML = ottelijat.power[11].toFixed(0).toLocaleString();
    charlesOliveiraSpeed.innerHTML = ottelijat.speed[11].toFixed(0).toLocaleString();
    hampaita.innerHTML = new Intl.NumberFormat("fi-FI", { maximumFractionDigits: 0 }).format(game.hampaita);
    hampaitaPerSekuntiElement.innerHTML = new Intl.NumberFormat().format(game.hampaitaPerSekunti);
    avaaSatunnainenHinta.innerHTML = new Intl.NumberFormat().format(shop.avaaSatunnainenHinta);
    lisääTrainereitaHinta.innerHTML = new Intl.NumberFormat().format(shop.lisääTrainereitaHinta);
    //avaaValitsemaHinta!.innerHTML = shop.avaaValitsemaHinta.toFixed(0).toLocaleString();
    trainers.innerHTML = (game.maxTrainers - game.activeTrainers).toLocaleString();
}
function updateUpgrades() {
    document.getElementById("upgradeContainer").innerHTML = "";
    for (var i = 0; i < upgrades.nimi.length; i++) {
        if (!upgrades.ostettu[i]) {
            if (upgrades.tag[i] == "pelle" && ottelijat.pelleCount >= upgrades.vaatimus[i]) {
                document.getElementById("upgradeContainer").innerHTML += "\n        <div class=\"upgrade-container\">\n          <img\n          draggable=\"false\"\n          src=\"./assets/".concat(upgrades.kuva[i], "\"\n          alt=\"").concat(upgrades.nimi[i], "\"\n          >\n          <div class=\"upgrade-title\"\n          onclick=\"osta(").concat(i, ")\">\n            <span>").concat(upgrades.kuvaus[i], "</span>\n            <span>(").concat(upgrades.hinta[i], " hammasta)</span>\n          </div>\n        </div>\n        ");
                //document.getElementById("upgradeContainer")!.innerHTML += '<img draggable="false" src="./assets/'+upgrades.kuva[i]+'" title="'+upgrades.nimi[i]+' &#10; '+upgrades.kuvaus[i]+' &#10; ('+upgrades.hinta[i]+' hammasta)" onclick="osta('+i+')">'; + upgrades.nimi[i]+'">';
            }
            if (upgrades.tag[i] == "niceGuy" && ottelijat.niceGuyCount >= upgrades.vaatimus[i]) {
                document.getElementById("upgradeContainer").innerHTML += "\n        <div class=\"upgrade-container\">\n          <img\n          draggable=\"false\"\n          src=\"./assets/".concat(upgrades.kuva[i], "\"\n          alt=\"").concat(upgrades.nimi[i], "\"\n          >\n          <div class=\"upgrade-title\"\n          onclick=\"osta(").concat(i, ")\">\n            <span>").concat(upgrades.kuvaus[i], "</span>\n            <span>(").concat(upgrades.hinta[i], " hammasta)</span>\n          </div>\n        </div>\n        ");
                //document.getElementById("upgradeContainer")!.innerHTML += '<img draggable="false" src="./assets/'+upgrades.kuva[i]+'" title="'+upgrades.nimi[i]+' &#10; '+upgrades.kuvaus[i]+' &#10; ('+upgrades.hinta[i]+' hammasta)" onclick="osta('+i+')">'; + upgrades.nimi[i]+'">';
            }
            if (upgrades.tag[i] == "dagestanit" && ottelijat.dagestanCount >= upgrades.vaatimus[i]) {
                document.getElementById("upgradeContainer").innerHTML += "\n        <div class=\"upgrade-container\">\n          <img\n          draggable=\"false\"\n          src=\"./assets/".concat(upgrades.kuva[i], "\"\n          alt=\"").concat(upgrades.nimi[i], "\"\n          >\n          <div class=\"upgrade-title\"\n          onclick=\"osta(").concat(i, ")\">\n            <span>").concat(upgrades.kuvaus[i], "</span>\n            <span>(").concat(upgrades.hinta[i], " hammasta)</span>\n          </div>\n        </div>\n        ");
                //document.getElementById("upgradeContainer")!.innerHTML += '<img draggable="false" src="./assets/'+upgrades.kuva[i]+'" title="'+upgrades.nimi[i]+' &#10; '+upgrades.kuvaus[i]+' &#10; ('+upgrades.hinta[i]+' hammasta)" onclick="osta('+i+')">'; + upgrades.nimi[i]+'">';
            }
            if (upgrades.tag[i] == "afrikanMafia" && ottelijat.afrikanMafiaCount >= upgrades.vaatimus[i]) {
                document.getElementById("upgradeContainer").innerHTML += "\n        <div class=\"upgrade-container\">\n          <img\n          draggable=\"false\"\n          src=\"./assets/".concat(upgrades.kuva[i], "\"\n          alt=\"").concat(upgrades.nimi[i], "\"\n          >\n          <div class=\"upgrade-title\"\n          onclick=\"osta(").concat(i, ")\">\n            <span>").concat(upgrades.kuvaus[i], "</span>\n            <span>(").concat(upgrades.hinta[i], " hammasta)</span>\n          </div>\n        </div>\n        ");
                //document.getElementById("upgradeContainer")!.innerHTML += '<img draggable="false" src="./assets/'+upgrades.kuva[i]+'" title="'+upgrades.nimi[i]+' &#10; '+upgrades.kuvaus[i]+' &#10; ('+upgrades.hinta[i]+' hammasta)" onclick="osta('+i+')">'; + upgrades.nimi[i]+'">';
            }
            if (upgrades.tag[i] == "lookingAss" && ottelijat.lookingAssCount >= upgrades.vaatimus[i]) {
                document.getElementById("upgradeContainer").innerHTML += "\n        <div class=\"upgrade-container\">\n          <img\n          draggable=\"false\"\n          src=\"./assets/".concat(upgrades.kuva[i], "\"\n          alt=\"").concat(upgrades.nimi[i], "\"\n          >\n          <div class=\"upgrade-title\"\n          onclick=\"osta(").concat(i, ")\">\n            <span>").concat(upgrades.kuvaus[i], "</span>\n            <span>(").concat(upgrades.hinta[i], " hammasta)</span>\n          </div>\n        </div>\n        ");
                //document.getElementById("upgradeContainer")!.innerHTML += '<img draggable="false" src="./assets/'+upgrades.kuva[i]+'" title="'+upgrades.nimi[i]+' &#10; '+upgrades.kuvaus[i]+' &#10; ('+upgrades.hinta[i]+' hammasta)" onclick="osta('+i+')">'; + upgrades.nimi[i]+'">';
            }
            if (upgrades.tag[i] == "chad" && ottelijat.chadCount >= upgrades.vaatimus[i]) {
                document.getElementById("upgradeContainer").innerHTML += "\n        <div class=\"upgrade-container\">\n          <img\n          draggable=\"false\"\n          src=\"./assets/".concat(upgrades.kuva[i], "\"\n          alt=\"").concat(upgrades.nimi[i], "\"\n          >\n          <div class=\"upgrade-title\"\n          onclick=\"osta(").concat(i, ")\">\n            <span>").concat(upgrades.kuvaus[i], "</span>\n            <span>(").concat(upgrades.hinta[i], " hammasta)</span>\n          </div>\n        </div>\n        ");
                //document.getElementById("upgradeContainer")!.innerHTML += '<img draggable="false" src="./assets/'+upgrades.kuva[i]+'" title="'+upgrades.nimi[i]+' &#10; '+upgrades.kuvaus[i]+' &#10; ('+upgrades.hinta[i]+' hammasta)" onclick="osta('+i+')">'; + upgrades.nimi[i]+'">';
            }
        }
    }
}
function saveGame() {
    console.log("Saving game");
    var gameSave = {
        lastPlayed: new Date().getTime(),
        game: game,
        ottelijat: ottelijat,
        shop: shop,
        upgrades: upgrades
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}
function loadGame() {
    var gameSave = localStorage.getItem("gameSave");
    if (gameSave === null) {
        console.error("No game save found");
        return;
    }
    var parsedGameSave = JSON.parse(gameSave);
    lastPlayed = parsedGameSave.lastPlayed;
    game = parsedGameSave.game;
    ottelijat = parsedGameSave.ottelijat;
    shop = parsedGameSave.shop;
    upgrades = parsedGameSave.upgrades;
    updateUi();
    console.log("Game loaded");
}
function resetGame() {
    localStorage.removeItem("gameSave");
    location.reload();
}
var hampaita = document.getElementById('hampaita');
var hampaitaPerSekuntiElement = document.getElementById('hampaitaPerSekunti');
var save = document.getElementById('save');
//const load = document.getElementById('load') as HTMLElement;
var reset = document.getElementById('reset');
var trainers = document.getElementById("trainers");
var shopElement = document.getElementById('shop');
var shopItems = Array.from(document.querySelectorAll('.shopItem'));
var avaaSatunnainenElement = document.getElementById('avaaSatunnainen');
var avaaSatunnainenHinta = document.getElementById('avaaSatunnainenHinta');
//const avaaValitsemaElement = document.getElementById('avaaValitsema') as HTMLElement;
//const avaaValitsemaHinta = document.getElementById('avaaValitsemaHinta');
var lisääTrainereitaElement = document.getElementById('lisääTrainereita');
var lisääTrainereitaHinta = document.getElementById('lisääTrainereitaHinta');
var colbyCovington = document.getElementById("colbyCovington");
var colbyCovingtonXp = document.getElementById('colbyCovingtonXp');
var colbyCovingtonXpThreshold = document.getElementById('colbyCovingtonXpThreshold');
var colbyCovingtonLevel = document.getElementById('colbyCovingtonLevel');
var colbyCovingtonPower = document.getElementById('colbyCovingtonPower');
var colbyCovingtonSpeed = document.getElementById('colbyCovingtonSpeed');
var kamaruUsman = document.getElementById("kamaruUsman");
var kamaruUsmanXp = document.getElementById('kamaruUsmanXp');
var kamaruUsmanXpThreshold = document.getElementById('kamaruUsmanXpThreshold');
var kamaruUsmanLevel = document.getElementById('kamaruUsmanLevel');
var kamaruUsmanPower = document.getElementById('kamaruUsmanPower');
var kamaruUsmanSpeed = document.getElementById('kamaruUsmanSpeed');
var shavkatRakhmonov = document.getElementById("shavkatRakhmonov");
var shavkatRakhmonovXp = document.getElementById('shavkatRakhmonovXp');
var shavkatRakhmonovXpThreshold = document.getElementById('shavkatRakhmonovXpThreshold');
var shavkatRakhmonovLevel = document.getElementById('shavkatRakhmonovLevel');
var shavkatRakhmonovPower = document.getElementById('shavkatRakhmonovPower');
var shavkatRakhmonovSpeed = document.getElementById('shavkatRakhmonovSpeed');
var seanOmalley = document.getElementById("seanOmalley");
var seanOmalleyXp = document.getElementById('seanOmalleyXp');
var seanOmalleyXpThreshold = document.getElementById('seanOmalleyXpThreshold');
var seanOmalleyLevel = document.getElementById('seanOmalleyLevel');
var seanOmalleyPower = document.getElementById('seanOmalleyPower');
var seanOmalleySpeed = document.getElementById('seanOmalleySpeed');
var jonJones = document.getElementById("jonJones");
var jonJonesXp = document.getElementById('jonJonesXp');
var jonJonesXpThreshold = document.getElementById('jonJonesXpThreshold');
var jonJonesLevel = document.getElementById('jonJonesLevel');
var jonJonesPower = document.getElementById('jonJonesPower');
var jonJonesSpeed = document.getElementById('jonJonesSpeed');
var alexanderVolkanovski = document.getElementById("alexanderVolkanovski");
var alexanderVolkanovskiXp = document.getElementById('alexanderVolkanovskiXp');
var alexanderVolkanovskiXpThreshold = document.getElementById('alexanderVolkanovskiXpThreshold');
var alexanderVolkanovskiLevel = document.getElementById('alexanderVolkanovskiLevel');
var alexanderVolkanovskiPower = document.getElementById('alexanderVolkanovskiPower');
var alexanderVolkanovskiSpeed = document.getElementById('alexanderVolkanovskiSpeed');
var alexPereira = document.getElementById("alexPereira");
var alexPereiraXp = document.getElementById('alexPereiraXp');
var alexPereiraXpThreshold = document.getElementById('alexPereiraXpThreshold');
var alexPereiraLevel = document.getElementById('alexPereiraLevel');
var alexPereiraPower = document.getElementById('alexPereiraPower');
var alexPereiraSpeed = document.getElementById('alexPereiraSpeed');
var islamMakhachev = document.getElementById("islamMakhachev");
var islamMakhachevXp = document.getElementById('islamMakhachevXp');
var islamMakhachevXpThreshold = document.getElementById('islamMakhachevXpThreshold');
var islamMakhachevLevel = document.getElementById('islamMakhachevLevel');
var islamMakhachevPower = document.getElementById('islamMakhachevPower');
var islamMakhachevSpeed = document.getElementById('islamMakhachevSpeed');
var maxHolloway = document.getElementById("maxHolloway");
var maxHollowayXp = document.getElementById('maxHollowayXp');
var maxHollowayXpThreshold = document.getElementById('maxHollowayXpThreshold');
var maxHollowayLevel = document.getElementById('maxHollowayLevel');
var maxHollowayPower = document.getElementById('maxHollowayPower');
var maxHollowaySpeed = document.getElementById('maxHollowaySpeed');
var tomAspinall = document.getElementById("tomAspinall");
var tomAspinallXp = document.getElementById('tomAspinallXp');
var tomAspinallXpThreshold = document.getElementById('tomAspinallXpThreshold');
var tomAspinallLevel = document.getElementById('tomAspinallLevel');
var tomAspinallPower = document.getElementById('tomAspinallPower');
var tomAspinallSpeed = document.getElementById('tomAspinallSpeed');
var israelAdesanya = document.getElementById("israelAdesanya");
var israelAdesanyaXp = document.getElementById('israelAdesanyaXp');
var israelAdesanyaXpThreshold = document.getElementById('israelAdesanyaXpThreshold');
var israelAdesanyaLevel = document.getElementById('israelAdesanyaLevel');
var israelAdesanyaPower = document.getElementById('israelAdesanyaPower');
var israelAdesanyaSpeed = document.getElementById('israelAdesanyaSpeed');
var charlesOliveira = document.getElementById("charlesOliveira");
var charlesOliveiraXp = document.getElementById('charlesOliveiraXp');
var charlesOliveiraXpThreshold = document.getElementById('charlesOliveiraXpThreshold');
var charlesOliveiraLevel = document.getElementById('charlesOliveiraLevel');
var charlesOliveiraPower = document.getElementById('charlesOliveiraPower');
var charlesOliveiraSpeed = document.getElementById('charlesOliveiraSpeed');
shopElement.addEventListener("click", (function () {
    shopItems.forEach(function (item) {
        item.style.display = item.style.display === 'none' ? 'block' : 'none';
    });
}));
colbyCovington.addEventListener("click", (function () {
    if (!colbyCovingtonInterval) {
        if (game.maxTrainers > game.activeTrainers) {
            game.activeTrainers++;
            ottelijat.isActive[0] = true;
            colbyCovingtonInterval = setInterval(function () {
                if (ottelijat.progress[0] >= 100) {
                    ottelijat.progress[0] = 0;
                    ottelijat.xp[0] += 1;
                    updateUi();
                    if (ottelijat.xp[0] >= ottelijat.xpThreshold[0]) {
                        ottelijat.xp[0] = 0;
                        ottelijat.xpThreshold[0] *= 1.2;
                        ottelijat.level[0] += 1;
                        ottelijat.pelleCount++;
                        ottelijat.totalCount++;
                        updateUpgrades();
                    }
                    ;
                    game.hampaita += ottelijat.power[0];
                    updateUi();
                }
                else {
                    ottelijat.progress[0] += ottelijat.step[0];
                    document.getElementById('colbyCovingtonBar').style.width = "".concat(ottelijat.progress[0], "%");
                }
            }, 10);
            updateUi();
        }
    }
    else {
        clearInterval(colbyCovingtonInterval);
        colbyCovingtonInterval = null;
        game.activeTrainers--;
        ottelijat.isActive[0] = false;
        updateUi();
    }
}));
kamaruUsman.addEventListener("click", (function () {
    if (!kamaruUsmanInterval) {
        if (game.maxTrainers > game.activeTrainers) {
            game.activeTrainers++;
            ottelijat.isActive[1] = true;
            kamaruUsmanInterval = setInterval(function () {
                if (ottelijat.progress[1] >= 100) {
                    ottelijat.progress[1] = 0;
                    ottelijat.xp[1] += 1;
                    updateUi();
                    if (ottelijat.xp[1] >= ottelijat.xpThreshold[1]) {
                        ottelijat.xp[1] = 0;
                        ottelijat.xpThreshold[1] *= 1.2;
                        ottelijat.level[1] += 1;
                        ottelijat.niceGuyCount++;
                        ottelijat.afrikanMafiaCount++;
                        ottelijat.totalCount++;
                        updateUpgrades();
                    }
                    ;
                    game.hampaita += ottelijat.power[0];
                    updateUi();
                }
                else {
                    ottelijat.progress[1] += ottelijat.step[1];
                    document.getElementById('kamaruUsmanBar').style.width = "".concat(ottelijat.progress[1], "%");
                }
            }, 10);
            updateUi();
        }
    }
    else {
        clearInterval(kamaruUsmanInterval);
        kamaruUsmanInterval = null;
        game.activeTrainers--;
        ottelijat.isActive[1] = false;
        updateUi();
    }
}));
shavkatRakhmonov.addEventListener("click", (function () {
    if (!shavkatRakhmonovInterval) {
        if (game.maxTrainers > game.activeTrainers) {
            game.activeTrainers++;
            ottelijat.isActive[2] = true;
            shavkatRakhmonovInterval = setInterval(function () {
                if (ottelijat.progress[2] >= 100) {
                    ottelijat.progress[2] = 0;
                    ottelijat.xp[2] += 1;
                    updateUi();
                    if (ottelijat.xp[2] >= ottelijat.xpThreshold[2]) {
                        ottelijat.xp[2] = 0;
                        ottelijat.xpThreshold[2] *= 1.2;
                        ottelijat.level[2] += 1;
                        ottelijat.dagestanCount++;
                        ottelijat.chadCount++;
                        ottelijat.totalCount++;
                        updateUpgrades();
                    }
                    ;
                    game.hampaita += ottelijat.power[0];
                    updateUi();
                }
                else {
                    ottelijat.progress[2] += ottelijat.step[2];
                    document.getElementById('shavkatRakhmonovBar').style.width = "".concat(ottelijat.progress[2], "%");
                }
            }, 10);
            updateUi();
        }
    }
    else {
        clearInterval(shavkatRakhmonovInterval);
        shavkatRakhmonovInterval = null;
        game.activeTrainers--;
        ottelijat.isActive[2] = false;
        updateUi();
    }
}));
seanOmalley.addEventListener("click", (function () {
    if (!seanOmalleyInterval) {
        if (game.maxTrainers > game.activeTrainers) {
            game.activeTrainers++;
            ottelijat.isActive[3] = true;
            seanOmalleyInterval = setInterval(function () {
                if (ottelijat.progress[3] >= 100) {
                    ottelijat.progress[3] = 0;
                    ottelijat.xp[3] += 1;
                    updateUi();
                    if (ottelijat.xp[3] >= ottelijat.xpThreshold[3]) {
                        ottelijat.xp[3] = 0;
                        ottelijat.xpThreshold[3] *= 1.2;
                        ottelijat.level[3] += 1;
                        ottelijat.pelleCount++;
                        ottelijat.lookingAssCount++;
                        ottelijat.championCount++;
                        ottelijat.totalCount++;
                        updateUpgrades();
                    }
                    ;
                    game.hampaita += ottelijat.power[3];
                    updateUi();
                }
                else {
                    ottelijat.progress[3] += ottelijat.step[3];
                    document.getElementById('seanOmalleyBar').style.width = "".concat(ottelijat.progress[3], "%");
                }
            }, 10);
            updateUi();
        }
    }
    else {
        clearInterval(seanOmalleyInterval);
        seanOmalleyInterval = null;
        game.activeTrainers--;
        ottelijat.isActive[3] = false;
        updateUi();
    }
}));
jonJones.addEventListener("click", (function () {
    if (!jonJonesInterval) {
        if (game.maxTrainers > game.activeTrainers) {
            game.activeTrainers++;
            ottelijat.isActive[4] = true;
            jonJonesInterval = setInterval(function () {
                if (ottelijat.progress[4] >= 100) {
                    ottelijat.progress[4] = 0;
                    ottelijat.xp[4] += 1;
                    updateUi();
                    if (ottelijat.xp[4] >= ottelijat.xpThreshold[4]) {
                        ottelijat.xp[4] = 0;
                        ottelijat.xpThreshold[4] *= 1.2;
                        ottelijat.level[4] += 1;
                        ottelijat.pelleCount++;
                        ottelijat.chadCount++;
                        ottelijat.championCount++;
                        ottelijat.totalCount++;
                        updateUpgrades();
                    }
                    ;
                    game.hampaita += ottelijat.power[4];
                    updateUi();
                }
                else {
                    ottelijat.progress[4] += ottelijat.step[4];
                    document.getElementById('jonJonesBar').style.width = "".concat(ottelijat.progress[4], "%");
                }
            }, 10);
            updateUi();
        }
    }
    else {
        clearInterval(jonJonesInterval);
        jonJonesInterval = null;
        game.activeTrainers--;
        ottelijat.isActive[4] = false;
        updateUi();
    }
}));
alexanderVolkanovski.addEventListener("click", (function () {
    if (!alexanderVolkanovskiInterval) {
        if (game.maxTrainers > game.activeTrainers) {
            game.activeTrainers++;
            ottelijat.isActive[5] = true;
            alexanderVolkanovskiInterval = setInterval(function () {
                if (ottelijat.progress[5] >= 100) {
                    ottelijat.progress[5] = 0;
                    ottelijat.xp[5] += 1;
                    updateUi();
                    if (ottelijat.xp[5] >= ottelijat.xpThreshold[5]) {
                        ottelijat.xp[5] = 0;
                        ottelijat.xpThreshold[5] *= 1.2;
                        ottelijat.level[5] += 1;
                        ottelijat.niceGuyCount++;
                        ottelijat.totalCount++;
                        updateUpgrades();
                    }
                    ;
                    game.hampaita += ottelijat.power[5];
                    updateUi();
                }
                else {
                    ottelijat.progress[5] += ottelijat.step[5];
                    document.getElementById('alexanderVolkanovskiBar').style.width = "".concat(ottelijat.progress[5], "%");
                }
            }, 10);
            updateUi();
        }
    }
    else {
        clearInterval(alexanderVolkanovskiInterval);
        alexanderVolkanovskiInterval = null;
        game.activeTrainers--;
        ottelijat.isActive[5] = false;
        updateUi();
    }
}));
alexPereira.addEventListener("click", (function () {
    if (!alexPereiraInterval) {
        if (game.maxTrainers > game.activeTrainers) {
            game.activeTrainers++;
            ottelijat.isActive[6] = true;
            alexPereiraInterval = setInterval(function () {
                if (ottelijat.progress[6] >= 100) {
                    ottelijat.progress[6] = 0;
                    ottelijat.xp[6] += 1;
                    updateUi();
                    if (ottelijat.xp[6] >= ottelijat.xpThreshold[6]) {
                        ottelijat.xp[6] = 0;
                        ottelijat.xpThreshold[6] *= 1.2;
                        ottelijat.level[6] += 1;
                        ottelijat.chadCount++;
                        ottelijat.championCount += 2;
                        ottelijat.totalCount++;
                        updateUpgrades();
                    }
                    ;
                    game.hampaita += ottelijat.power[6];
                    updateUi();
                }
                else {
                    ottelijat.progress[6] += ottelijat.step[6];
                    document.getElementById('alexPereiraBar').style.width = "".concat(ottelijat.progress[6], "%");
                }
            }, 10);
            updateUi();
        }
    }
    else {
        clearInterval(alexPereiraInterval);
        alexPereiraInterval = null;
        game.activeTrainers--;
        ottelijat.isActive[6] = false;
        updateUi();
    }
}));
islamMakhachev.addEventListener("click", (function () {
    if (!islamMakhachevInterval) {
        if (game.maxTrainers > game.activeTrainers) {
            game.activeTrainers++;
            ottelijat.isActive[7] = true;
            islamMakhachevInterval = setInterval(function () {
                if (ottelijat.progress[7] >= 100) {
                    ottelijat.progress[7] = 0;
                    ottelijat.xp[7] += 1;
                    updateUi();
                    if (ottelijat.xp[7] >= ottelijat.xpThreshold[7]) {
                        ottelijat.xp[7] = 0;
                        ottelijat.xpThreshold[7] *= 1.2;
                        ottelijat.level[7] += 1;
                        ottelijat.dagestanCount++;
                        ottelijat.lookingAssCount++;
                        ottelijat.championCount++;
                        ottelijat.totalCount++;
                        updateUpgrades();
                    }
                    ;
                    game.hampaita += ottelijat.power[7];
                    updateUi();
                }
                else {
                    ottelijat.progress[7] += ottelijat.step[7];
                    document.getElementById('islamMakhachevBar').style.width = "".concat(ottelijat.progress[7], "%");
                }
            }, 10);
            updateUi();
        }
    }
    else {
        clearInterval(islamMakhachevInterval);
        islamMakhachevInterval = null;
        game.activeTrainers--;
        ottelijat.isActive[7] = false;
        updateUi();
    }
}));
maxHolloway.addEventListener("click", (function () {
    if (!maxHollowayInterval) {
        if (game.maxTrainers > game.activeTrainers) {
            game.activeTrainers++;
            ottelijat.isActive[8] = true;
            maxHollowayInterval = setInterval(function () {
                if (ottelijat.progress[8] >= 100) {
                    ottelijat.progress[8] = 0;
                    ottelijat.xp[8] += 1;
                    updateUi();
                    if (ottelijat.xp[8] >= ottelijat.xpThreshold[8]) {
                        ottelijat.xp[8] = 0;
                        ottelijat.xpThreshold[8] *= 1.2;
                        ottelijat.level[8] += 1;
                        ottelijat.chadCount++;
                        ottelijat.totalCount++;
                        updateUpgrades();
                    }
                    ;
                    game.hampaita += ottelijat.power[8];
                    updateUi();
                }
                else {
                    ottelijat.progress[8] += ottelijat.step[8];
                    document.getElementById('maxHollowayBar').style.width = "".concat(ottelijat.progress[8], "%");
                }
            }, 10);
            updateUi();
        }
    }
    else {
        clearInterval(maxHollowayInterval);
        maxHollowayInterval = null;
        game.activeTrainers--;
        ottelijat.isActive[8] = false;
    }
}));
tomAspinall.addEventListener("click", (function () {
    if (!tomAspinallInterval) {
        if (game.maxTrainers > game.activeTrainers) {
            game.activeTrainers++;
            ottelijat.isActive[9] = true;
            tomAspinallInterval = setInterval(function () {
                if (ottelijat.progress[9] >= 100) {
                    ottelijat.progress[9] = 0;
                    ottelijat.xp[9] += 1;
                    updateUi();
                    if (ottelijat.xp[9] >= ottelijat.xpThreshold[9]) {
                        ottelijat.xp[9] = 0;
                        ottelijat.xpThreshold[9] *= 1.2;
                        ottelijat.level[9] += 1;
                        ottelijat.niceGuyCount++;
                        ottelijat.championCount++;
                        ottelijat.totalCount++;
                        updateUpgrades();
                    }
                    ;
                    game.hampaita += ottelijat.power[9];
                    updateUi();
                }
                else {
                    ottelijat.progress[9] += ottelijat.step[9];
                    document.getElementById('tomAspinallBar').style.width = "".concat(ottelijat.progress[9], "%");
                }
            }, 10);
            updateUi();
        }
    }
    else {
        clearInterval(tomAspinallInterval);
        tomAspinallInterval = null;
        game.activeTrainers--;
        ottelijat.isActive[9] = false;
        updateUi();
    }
}));
israelAdesanya.addEventListener("click", (function () {
    if (!israelAdesanyaInterval) {
        if (game.maxTrainers > game.activeTrainers) {
            game.activeTrainers++;
            ottelijat.isActive[10] = true;
            israelAdesanyaInterval = setInterval(function () {
                if (ottelijat.progress[10] >= 100) {
                    ottelijat.progress[10] = 0;
                    ottelijat.xp[10] += 1;
                    updateUi();
                    if (ottelijat.xp[10] >= ottelijat.xpThreshold[10]) {
                        ottelijat.xp[10] = 0;
                        ottelijat.xpThreshold[10] *= 1.2;
                        ottelijat.level[10] += 1;
                        ottelijat.pelleCount++;
                        ottelijat.afrikanMafiaCount++;
                        ottelijat.totalCount++;
                        updateUpgrades();
                    }
                    ;
                    game.hampaita += ottelijat.power[10];
                    updateUi();
                }
                else {
                    ottelijat.progress[10] += ottelijat.step[10];
                    document.getElementById('israelAdesanyaBar').style.width = "".concat(ottelijat.progress[10], "%");
                }
            }, 10);
            updateUi();
        }
    }
    else {
        clearInterval(israelAdesanyaInterval);
        israelAdesanyaInterval = null;
        game.activeTrainers--;
        ottelijat.isActive[10] = false;
        updateUi();
    }
}));
charlesOliveira.addEventListener("click", (function () {
    if (!charlesOliveiraInterval) {
        if (game.maxTrainers > game.activeTrainers) {
            game.activeTrainers++;
            ottelijat.isActive[11] = true;
            charlesOliveiraInterval = setInterval(function () {
                if (ottelijat.progress[11] >= 100) {
                    ottelijat.progress[11] = 0;
                    ottelijat.xp[11] += 1;
                    updateUi();
                    if (ottelijat.xp[11] >= ottelijat.xpThreshold[11]) {
                        ottelijat.xp[11] = 0;
                        ottelijat.xpThreshold[11] *= 1.2;
                        ottelijat.level[11] += 1;
                        ottelijat.niceGuyCount++;
                        ottelijat.totalCount++;
                        updateUpgrades();
                    }
                    ;
                    game.hampaita += ottelijat.power[11];
                    updateUi();
                }
                else {
                    ottelijat.progress[11] += ottelijat.step[11];
                    document.getElementById('charlesOliveiraBar').style.width = "".concat(ottelijat.progress[11], "%");
                }
            }, 10);
            updateUi();
        }
    }
    else {
        clearInterval(charlesOliveiraInterval);
        charlesOliveiraInterval = null;
        game.activeTrainers--;
        ottelijat.isActive[11] = false;
        updateUi();
    }
}));
save.addEventListener("click", (function () {
    saveGame();
}));
/*load!.addEventListener("click", (() => {
  loadGame();
}));*/
reset.addEventListener("click", (function () {
    resetGame();
}));
avaaSatunnainenElement.addEventListener("click", (function () {
    avaaSatunnainen();
    updateUi();
}));
/*avaaValitsemaElement!.addEventListener("click", (() => {
  avaaValitsema();
}));*/
lisääTrainereitaElement.addEventListener("click", (function () {
    lisääTrainereita();
}));
window.onload = function () {
    updateUpgrades();
    loadGame();
    offlineGains();
    game.activeTrainers = 0;
    for (var i = 0; i < ottelijat.isActive.length; i++) {
        ottelijat.isActive[i] = false;
    }
    updateUi();
};
