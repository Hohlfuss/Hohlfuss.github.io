"use strict";
let game = {
    version: "0.0.0.3",
    totalClicks: 0,
    globalMulti: 1.1,
    hampaita: 50,
    hampaitaPerSekunti: 0,
    totalPower: 0,
};
let maxActive = 1;
let activeFighters = 0;
let fighter = {
    colbyCovington: {
        name: "Colby Covington",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "welterweight",
        weightClassRanking: 4,
        unlocked: true,
        isActive: false,
        mastery: 0,
        progress: 0,
        progressBarWidth: document.getElementById("colbyCovingtonProgressBar").style.width,
        intervalId: 1,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 17,
            losses: 4,
            nc: 0,
            winsByKnockout: 4,
            winsBySubmission: 4,
            firstRoundFinishes: 3,
        },
    },
    kamaruUsman: {
        name: "Kamaru Usman",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "welterweight",
        weightClassRanking: 1,
        unlocked: true,
        isActive: false,
        mastery: 0,
        progress: 0,
        progressBarElement: document.getElementById("kamaruUsmanProgressBar"),
        intervalId: 2,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 20,
            losses: 4,
            nc: 0,
            winsByKnockout: 9,
            winsBySubmission: 1,
            firstRoundFinishes: 3,
        },
    },
    shavkatRakhmonov: {
        name: "Shavkat Rakhmonov",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "welterweight",
        weightClassRanking: 3,
        unlocked: true,
        isActive: false,
        mastery: 0,
        xp: 0,
        progress: 0,
        progressBarElement: document.getElementById("shavkatRakhmonovProgressBar"),
        intervalId: 3,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 18,
            losses: 0,
            nc: 0,
            winsByKnockout: 8,
            winsBySubmission: 10,
            firstRoundFinishes: 9,
        },
    },
    seanOmalley: {
        name: "Sean O'Malley",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "bantamweight",
        weightClassRanking: 0,
        unlocked: true,
        isActive: false,
        mastery: 0,
        xp: 0,
        progress: 0,
        progressBarElement: document.getElementById("seanOmalleyProgressBar"),
        intervalId: 4,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 18,
            losses: 1,
            nc: 0,
            winsByKnockout: 12,
            winsBySubmission: 0,
            firstRoundFinishes: 9,
        },
    },
};
let ascend = {
    treshold: 1000,
};
let calculations = {
    calculateColbyCovingtonPower: (() => {
        let winRatio = fighter.colbyCovington.stats.wins / (fighter.colbyCovington.stats.losses === 0 ? 1 : fighter.colbyCovington.stats.losses);
        fighter.colbyCovington.power = (winRatio - fighter.colbyCovington.stats.nc + fighter.colbyCovington.stats.winsByKnockout + fighter.colbyCovington.stats.winsBySubmission + fighter.colbyCovington.stats.firstRoundFinishes) / 1000;
        fighter.colbyCovington.totalPower = fighter.colbyCovington.power * fighter.colbyCovington.level;
        game.totalPower += fighter.colbyCovington.power;
    }),
    calculateKamaruUsmanPower: (() => {
        let winRatio = fighter.kamaruUsman.stats.wins / (fighter.kamaruUsman.stats.losses === 0 ? 1 : fighter.kamaruUsman.stats.losses);
        fighter.kamaruUsman.power = (winRatio - fighter.kamaruUsman.stats.nc + fighter.kamaruUsman.stats.winsByKnockout + fighter.kamaruUsman.stats.winsBySubmission + fighter.kamaruUsman.stats.firstRoundFinishes) / 1000;
        fighter.kamaruUsman.totalPower = fighter.kamaruUsman.power * fighter.kamaruUsman.level;
        game.totalPower += fighter.kamaruUsman.power;
    }),
    calculateShavkatRakhmonovPower: (() => {
        let winRatio = fighter.shavkatRakhmonov.stats.wins / (fighter.shavkatRakhmonov.stats.losses === 0 ? 1 : fighter.shavkatRakhmonov.stats.losses);
        fighter.shavkatRakhmonov.power = (winRatio - fighter.shavkatRakhmonov.stats.nc + fighter.shavkatRakhmonov.stats.winsByKnockout + fighter.shavkatRakhmonov.stats.winsBySubmission + fighter.shavkatRakhmonov.stats.firstRoundFinishes) / 1000;
        fighter.shavkatRakhmonov.totalPower = fighter.shavkatRakhmonov.power * fighter.shavkatRakhmonov.level;
        game.totalPower += fighter.shavkatRakhmonov.power;
    }),
    calculateSeanOmalleyPower: (() => {
        let winRatio = fighter.seanOmalley.stats.wins / (fighter.seanOmalley.stats.losses === 0 ? 1 : fighter.seanOmalley.stats.losses);
        fighter.seanOmalley.power = (winRatio - fighter.seanOmalley.stats.nc + fighter.seanOmalley.stats.winsByKnockout + fighter.seanOmalley.stats.winsBySubmission + fighter.seanOmalley.stats.firstRoundFinishes) / 1000;
        fighter.seanOmalley.totalPower = fighter.seanOmalley.power * fighter.seanOmalley.level;
        game.totalPower += fighter.seanOmalley.power;
    }),
    getHampaitaPerSekunti: function () {
        game.hampaitaPerSekunti = game.totalPower * game.globalMulti;
        return game.hampaitaPerSekunti;
    },
};
/*
const fighter: Fighter = {
  name: [
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
    "Charles Oliveira",
    "Sean Strickland",
    "Justin Gaethje",
    "Dustin Poirier",
    "Paulo Costa",
    "Jiri Prochazka",
    "Johnny Walker",
    "Valentina Shevchenko",

    "Belal Muhammad",
    "Jack Della Maddalena",
    "Gilbert Burns",
    "Ian Garry",
    "Sean Brady",
    "Stephen Thompson",
    "Geoff Neal",
    "Joaquin Buckley",
    "Neil Magny",
    "Vicente Luque",
    "Michael Page",
    "Kevin Holland",
    "Leon Edwards"
  ],
  image: [
    "colbyCovington.png",
    "kamaruUsman.png",
    "shavkatRakhmonov.png",
    "seanOmalley.png",
    "jonJones.png",
    "alexanderVolkanovski.png",
    "alexPereira.png",
    "islamMakhachev.png",
    "maxHolloway.png",
    "tomAspinall.png",
    "israelAdesanya.png",
    "charlesOliveira.png",
    "seanStrickland.png",
    "justinGaethje.png",
    "dustinPoirier.png",
    "pauloCosta.png",
    "jiriProchazka.png",
    "johnnyWalker.png",
    "valentinaShevchenko.png",

    "belalMuhammad.png",
    "jackDellaMaddalena.png",
    "gilbertBurns.png",
    "ianGarry.png",
    "seanBrady.png",
    "stephenThompson.png",
    "geoffNeal.png",
    "joaquinBuckley.png",
    "neilMagny.png",
    "vicenteLuque.png",
    "michaelPage.png",
    "kevinHolland.png",
    "leonEdwards.png"
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
  cost: [
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
  costMulti: [
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1,
    1.1
  ],
  stats: [
    {
      wins: 17,
      losses: 4,
      nc: 0,
      winsByKnockout: 4,
      winsBySubmission: 4,
      firstRoundFinishes: 3,
    },
    {
      wins: 20,
      losses: 4,
      nc: 0,
      winsByKnockout: 9,
      winsBySubmission: 1,
      firstRoundFinishes: 3,
    },
    {
      wins: 18,
      losses: 0,
      nc: 0,
      winsByKnockout: 8,
      winsBySubmission: 10,
      firstRoundFinishes: 9,
    },
    {
      wins: 18,
      losses: 1,
      nc: 0,
      winsByKnockout: 12,
      winsBySubmission: 0,
      firstRoundFinishes: 9,
    },
    {
      wins: 27,
      losses: 1,
      nc: 0,
      winsByKnockout: 10,
      winsBySubmission: 0,
      firstRoundFinishes: 7,
    },
    {
      wins: 26,
      losses: 4,
      nc: 0,
      winsByKnockout: 13,
      winsBySubmission: 3,
      firstRoundFinishes: 7,
    },
    {
      wins: 11,
      losses: 2,
      nc: 0,
      winsByKnockout: 9,
      winsBySubmission: 0,
      firstRoundFinishes: 4,
    },
    {
      wins: 26,
      losses: 1,
      nc: 0,
      winsByKnockout: 14,
      winsBySubmission: 5,
      firstRoundFinishes: 12,
    },
    {
      wins: 26,
      losses: 7,
      nc: 0,
      winsByKnockout: 12,
      winsBySubmission: 2,
      firstRoundFinishes: 0,
    },
    {
      wins: 14,
      losses: 3,
      nc: 0,
      winsByKnockout: 11,
      winsBySubmission: 3,
      firstRoundFinishes: 13,
    },
    {
      wins: 24,
      losses: 3,
      nc: 0,
      winsByKnockout: 16,
      winsBySubmission: 0,
      firstRoundFinishes: 6,
    },
    {
      wins: 34,
      losses: 10,
      nc: 0,
      winsByKnockout: 10,
      winsBySubmission: 21,
      firstRoundFinishes: 0,
    },
    {
      wins: 29,
      losses: 6,
      nc: 0,
      winsByKnockout: 11,
      winsBySubmission: 4,
      firstRoundFinishes: 9,
    },
    {
      wins: 26,
      losses: 5,
      nc: 0,
      winsByKnockout: 20,
      winsBySubmission: 0,
      firstRoundFinishes: 9,
    },
    {
      wins: 30,
      losses: 9,
      nc: 0,
      winsByKnockout: 16,
      winsBySubmission: 7,
      firstRoundFinishes: 13,
    },
    {
      wins: 14,
      losses: 4,
      nc: 0,
      winsByKnockout: 11,
      winsBySubmission: 1,
      firstRoundFinishes: 9,
    },
    {
      wins: 30,
      losses: 5,
      nc: 1,
      winsByKnockout: 26,
      winsBySubmission: 3,
      firstRoundFinishes: 23,
    },
    {
      wins: 21,
      losses: 9,
      nc: 0,
      winsByKnockout: 16,
      winsBySubmission: 3,
      firstRoundFinishes: 17,
    },
    {
      wins: 23,
      losses: 4,
      nc: 1,
      winsByKnockout: 8,
      winsBySubmission: 7,
      firstRoundFinishes: 6,
    },

    {
      wins: 23,
      losses: 3,
      nc: 0,
      winsByKnockout: 5,
      winsBySubmission: 1,
      firstRoundFinishes: 0,
    },
    {
      wins: 17,
      losses: 2,
      nc: 0,
      winsByKnockout: 12,
      winsBySubmission: 2,
      firstRoundFinishes: 8,
    },
    {
      wins: 22,
      losses: 7,
      nc: 0,
      winsByKnockout: 6,
      winsBySubmission: 9,
      firstRoundFinishes: 11,
    },
    {
      wins: 15,
      losses: 0,
      nc: 0,
      winsByKnockout: 7,
      winsBySubmission: 1,
      firstRoundFinishes: 4,
    },
    {
      wins: 16,
      losses: 1,
      nc: 0,
      winsByKnockout: 3,
      winsBySubmission: 5,
      firstRoundFinishes: 3,
    },
    {
      wins: 17,
      losses: 7,
      nc: 1,
      winsByKnockout: 8,
      winsBySubmission: 1,
      firstRoundFinishes: 5,
    },
    {
      wins: 15,
      losses: 6,
      nc: 0,
      winsByKnockout: 9,
      winsBySubmission: 2,
      firstRoundFinishes: 6,
    },
    {
      wins: 19,
      losses: 6,
      nc: 0,
      winsByKnockout: 13,
      winsBySubmission: 0,
      firstRoundFinishes: 4,
    },
    {
      wins: 29,
      losses: 12,
      nc: 0,
      winsByKnockout: 8,
      winsBySubmission: 4,
      firstRoundFinishes: 0,
    },
    {
      wins: 22,
      losses: 10,
      nc: 1,
      winsByKnockout: 11,
      winsBySubmission: 8,
      firstRoundFinishes: 13,
    },
    {
      wins: 22,
      losses: 3,
      nc: 0,
      winsByKnockout: 13,
      winsBySubmission: 3,
      firstRoundFinishes: 13,
    },
    {
      wins: 26,
      losses: 11,
      nc: 0,
      winsByKnockout: 14,
      winsBySubmission: 8,
      firstRoundFinishes: 13,
    },
    {
      wins: 22,
      losses: 3,
      nc: 0,
      winsByKnockout: 7,
      winsBySubmission: 3,
      firstRoundFinishes: 5,
    }
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
  weightClass: [
    "welterWeight",
    "welterWeight",
    "welterWeight",
    "bantamWeight",
    "heavyWeight",
    "featherWeight",
    "lightHeavyWeight",
    "lightWeight",
    "lightWeight",
    "heavyWeight",
    "middleWeight",
    "lightWeight",
    "middleWeight",
    "featherWeight",
    "lightWeight",
    "middleWeight",
    "lightHeavyWeight",
    "lightHeavyWeight",
    "womensFlyweight",

    "welterWeight",
    "welterWeight",
    "welterWeight",
    "welterWeight",
    "welterWeight",
    "welterWeight",
    "welterWeight",
    "welterWeight",
    "welterWeight",
    "welterWeight",
    "welterWeight",
    "welterWeight",
    "welterWeight"
  ],
  weightClassRanking: [
    4,
    1,
    3,
    0,
    0,
    0,
    0,
    0,
    9,
    1,
    2,
    2,
    1,
    3,
    4,
    8,
    1,
    7,
    1,

    2,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
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
    null,
    null,
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
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31
  ],
  handleClick: (i: number) => {
    if (game.hampaita >= fighter.cost[i]) {
        game.hampaita -= fighter.cost[i];
        fighter.cost[i] *= fighter.costMulti[i];
        fighter.level[i]++;
          if (maxActive > activeFighters.length) {
            fighter.isActive[i] = true;
            activeFighters.push(i);
            progress(i);
          }
    }
  },
  calculatePower: function() {
    game.totalPower = 0;
    for (let i = 0; i < this.name.length; i++) {
      let winRatio = this.stats[i].wins / (this.stats[i].losses === 0 ? 1 : this.stats[i].losses);
      this.power[i] = (winRatio - this.stats[i].nc + this.stats[i].winsByKnockout + this.stats[i].winsBySubmission + this.stats[i].firstRoundFinishes) / 1000;
      game.totalPower += this.power[i] * this.level[i];
    }
  },
};
*/
function colbyCovingtonProgress() {
    if (activeFighters >= maxActive) {
        return;
    }
    let colbyCovingtonProgressBarElement = document.getElementById("colbyCovingtonProgressBar");
    if (colbyCovingtonProgressBarElement) {
        fighter.colbyCovington.isActive = true;
        activeFighters++;
        document.getElementById("colbyCovingtonTrain").style.backgroundColor = "green";
        fighter.colbyCovington.intervalId = setInterval(() => {
            fighter.colbyCovington.progress += 0.2;
            if (colbyCovingtonProgressBarElement) {
                //console.log("1");
                colbyCovingtonProgressBarElement.style.width = `${fighter.colbyCovington.progress}%`;
            }
            else {
                console.error("Progress bar element is undefined or null");
            }
            if (fighter.colbyCovington.progress >= 100) {
                fighter.colbyCovington.currentXp += 1;
                fighter.colbyCovington.progress = 0;
            }
            display.updateUi();
        }, 100);
    }
}
function kamaruUsmanProgress() {
    if (activeFighters >= maxActive) {
        return;
    }
    let kamaruUsmanProgressBarElement = document.getElementById("kamaruUsmanProgressBar");
    if (kamaruUsmanProgressBarElement) {
        fighter.kamaruUsman.isActive = true;
        activeFighters++;
        document.getElementById("kamaruUsmanTrain").style.backgroundColor = "green";
        fighter.kamaruUsman.intervalId = setInterval(() => {
            fighter.kamaruUsman.progress += 0.2;
            if (kamaruUsmanProgressBarElement) {
                //console.log("1");
                kamaruUsmanProgressBarElement.style.width = `${fighter.kamaruUsman.progress}%`;
            }
            else {
                console.error("Progress bar element is undefined or null");
            }
            if (fighter.kamaruUsman.progress >= 100) {
                fighter.kamaruUsman.currentXp += 1;
                fighter.kamaruUsman.progress = 0;
            }
            display.updateUi();
        }, 100);
    }
}
function shavkatRakhmonovProgress() {
    if (activeFighters >= maxActive) {
        return;
    }
    let shavkatRakhmonovProgressBarElement = document.getElementById("shavkatRakhmonovProgressBar");
    if (shavkatRakhmonovProgressBarElement) {
        fighter.shavkatRakhmonov.isActive = true;
        activeFighters++;
        document.getElementById("shavkatRakhmonovTrain").style.backgroundColor = "green";
        fighter.shavkatRakhmonov.intervalId = setInterval(() => {
            fighter.shavkatRakhmonov.progress += 0.2;
            if (shavkatRakhmonovProgressBarElement) {
                //console.log("1");
                shavkatRakhmonovProgressBarElement.style.width = `${fighter.shavkatRakhmonov.progress}%`;
            }
            else {
                console.error("Progress bar element is undefined or null");
            }
            if (fighter.shavkatRakhmonov.progress >= 100) {
                fighter.shavkatRakhmonov.currentXp += 1;
                fighter.shavkatRakhmonov.progress = 0;
            }
            display.updateUi();
        }, 100);
    }
}
function seanOmalleyProgress() {
    if (activeFighters >= maxActive) {
        return;
    }
    let seanOmalleyProgressBarElement = document.getElementById("seanOmalleyProgressBar");
    if (seanOmalleyProgressBarElement) {
        fighter.seanOmalley.isActive = true;
        activeFighters++;
        document.getElementById("seanOmalleyTrain").style.backgroundColor = "green";
        fighter.seanOmalley.intervalId = setInterval(() => {
            fighter.seanOmalley.progress += 0.2;
            if (seanOmalleyProgressBarElement) {
                //console.log("1");
                seanOmalleyProgressBarElement.style.width = `${fighter.seanOmalley.progress}%`;
            }
            else {
                console.error("Progress bar element is undefined or null");
            }
            if (fighter.seanOmalley.progress >= 100) {
                fighter.seanOmalley.currentXp += 1;
                fighter.seanOmalley.progress = 0;
            }
            display.updateUi();
        }, 100);
    }
}
const upgrade = {
    name: [
        "Colby Covingtonille T1 hanskat",
        "Kamaru Usmanille T1 hanskat",
        "Shavkat Rakhmonoville T1 hanskat",
        "Sean O'malleylle T1 hanskat",
        "Jon Jonesille T1 hanskat",
        "Alexander Volkanovskille T1 hanskat",
        "Alex Pereiraille T1 hanskat",
        "Islam Makhacheville T1 hanskat",
        "Max Hollowayille T1 hanskat",
        "Tom Aspinallille T1 hanskat",
        "Israel Adesanyalle T1 hanskat",
        "Charles Oliveiralle T1 hanskat",
        "Sean Stricklandille T1 hanskat",
        "Justin Gaethjeille T1 hanskat",
        "Dustin Poirierille T1 hanskat",
        "Paulo Costalle T1 hanskat",
        "Jiri Prochazkalle T1 hanskat",
        "Johnny Walkerille T1 hanskat",
        "Valentina Shevchenkolle T1 hanskat",
        "Colby Covingtonille T2 hanskat",
        "Kamaru Usmanille T1 hanskat",
        "Shavkat Rakhmonoville T1 hanskat",
        "Sean O'malleylle T1 hanskat",
        "Jon Jonesille T1 hanskat",
        "Alexander Volkanovskille T1 hanskat",
        "Colby Covingtonille T2 hanskat",
        "Kamaru Usmanille T2 hanskat",
        "Shavkat Rakhmonoville T2 hanskat",
        "Sean O'malleylle T2 hanskat",
        "Jon Jonesille T2 hanskat",
        "Alexander Volkanovskille T2 hanskat",
        "työtön T1",
        "työtön T2",
        "työtön T3"
    ],
    description: [
        "Colby Covington 10% voimakkaampi",
        "Kamaru Usman 10% voimakkaampi",
        "Shavkat Rakhmonov 10% voimakkaampi",
        "Sean O'malley 10% voimakkaampi",
        "Jon Jones 10% voimakkaampi",
        "Alexander Volkanovski 10% voimakkaampi",
        "Alex Pereira 10% voimakkaampi",
        "Islam Makhachev 10% voimakkaampi",
        "Max Holloway 10% voimakkaampi",
        "Tom Aspinall 10% voimakkaampi",
        "Israel Adesanya 10% voimakkaampi",
        "Charles Oliveira 10% voimakkaampi",
        "Sean Strickland 10% voimakkaampi",
        "Justin Gaethji  10% voimakkaampi",
        "Dustin Poirier 10% voimakkaampi",
        "Paulo Costa 10% voimakkaampi",
        "Jiri Prochazka 10% voimakkaampi",
        "Johnny Walker 10% voimakkaampi",
        "Valentina Shevchenko 10% voimakkaampi",
        "Colby Covington 2x voimakkaampi",
        "Kamaru Usman 2x voimakkaampi",
        "Shavkat Rakhmonov 2x voimakkaampi",
        "Sean O'malley 2x voimakkaampi",
        "Jon Jones 2x voimakkaampi",
        "Alexander Volkanovski 2x voimakkaampi",
        "Hieman enemmän poweria",
        "Hieman enemmän poweria",
        "Hieman enemmän poweria"
    ],
    image: [
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Hanskat.png",
        "t1Työtön.png",
        "t1Työtön.png",
        "t1Työtön.png"
    ],
    type: [
        "fighter",
        "fighter",
        "fighter",
        "fighter",
        "fighter",
        "fighter",
        "fighter",
        "fighter",
        "fighter",
        "fighter",
        "fighter",
        "fighter",
        "fighter",
        "fighter",
        "fighter",
        "fighter",
        "fighter",
        "fighter",
        "fighter",
        "fighter",
        "fighter",
        "fighter",
        "fighter",
        "fighter",
        "fighter",
        "click",
        "click",
        "click"
    ],
    cost: [
        3000,
        3000,
        3000,
        3000,
        3000,
        3000,
        3000,
        3000,
        3000,
        3000,
        3000,
        3000,
        3000,
        3000,
        3000,
        3000,
        3000,
        3000,
        3000,
        3000,
        3000,
        3000,
        3000,
        3000,
        12000,
        12000,
        12000,
        12000,
        12000,
        12000,
        1000,
        20000,
        300000
    ],
    fighterIndex: [
        0,
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
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        -1,
        -1,
        -1
    ],
    requirement: [
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        1000,
        10000
    ],
    bonus: [
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1
    ],
    purchased: [
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
        false
    ],
    colbyCovingtonPurchaseUpgrade: function (index) {
        if (!this.purchased[index] && game.hampaita >= this.cost[index]) {
            if (this.type[index] == "fighter" && fighter.colbyCovington.level >= this.requirement[index]) {
                game.hampaita -= this.cost[index];
                fighter.colbyCovington.power *= this.bonus[index];
                this.purchased[index] = true;
                //display.updateColbyCovingtonUpgrades();
                display.updateUi();
            }
            else if (this.type[index] == "click" && game.totalClicks >= this.requirement[index]) {
                game.hampaita -= this.cost[index];
                game.globalMulti *= this.bonus[index];
                this.purchased[index] = true;
                //display.updateColbyCovingtonUpgrades();
                display.updateUi();
            }
        }
    }
};
/*
const achievement = {
  name: [
    "t1Työtön",
    "t2Työtön",
    "t3Työtön",
    "t1Power",
    "t2Power",
    "t3Power"
  ],
  description: [
    "Olet klikannut 100 kertaa",
    "Olet klikannut 1 000 kertaa",
    "Olet klikannut 10 000 kertaa",
    "Hampaita/s 1 000",
    "Hampaita/s 10 000",
    "Hampaita/s 100 000"
  ],
  image: [
    "t1Työtön.png",
    "t1Työtön.png",
    "t1Työtön.png",
    "t1Power.png",
    "t1Power.png",
    "t1Power.png"
  ],
  type: [
    "click",
    "click",
    "click",
    "power",
    "power",
    "power"
  ],
  cost: [
    100,
    1_000,
    10_000,
    1_000,
    10_000,
    100_000
  ],
  requirement: [
    100,
    1_000,
    10_000,
    100,
    10_000,
    100_000
  ],
  objectIndex: [
    -1,
    -1,
    -1,
    -1,
    -1,
    -1
  ],
  awarded: [
    false,
    false,
    false,
    false,
    false,
    false
  ],
  earn: function(index: number) {
    this.awarded[index] = true;
  }
}
*/
const display = {
    updateUi: function () {
        document.getElementById("hampaita").innerHTML = game.hampaita.toFixed(0);
        document.getElementById("hampaitaPerSekunti").innerHTML = game.hampaitaPerSekunti.toFixed(2);
        document.getElementById("colbyCovingtonPower").innerHTML = fighter.colbyCovington.power.toFixed(2);
        document.getElementById("colbyCovingtonCost").innerHTML = fighter.colbyCovington.cost.toFixed(2);
        document.getElementById("colbyCovingtonLevel").innerHTML = fighter.colbyCovington.level.toFixed(0);
        document.getElementById("kamaruUsmanPower").innerHTML = fighter.kamaruUsman.power.toFixed(2);
        document.getElementById("kamaruUsmanCost").innerHTML = fighter.kamaruUsman.cost.toFixed(2);
        document.getElementById("kamaruUsmanLevel").innerHTML = fighter.kamaruUsman.level.toFixed(0);
        document.getElementById("shavkatRakhmonovPower").innerHTML = fighter.shavkatRakhmonov.power.toFixed(2);
        document.getElementById("shavkatRakhmonovCost").innerHTML = fighter.shavkatRakhmonov.cost.toFixed(2);
        document.getElementById("shavkatRakhmonovLevel").innerHTML = fighter.shavkatRakhmonov.level.toFixed(0);
        document.getElementById("seanOmalleyPower").innerHTML = fighter.seanOmalley.power.toFixed(2);
        document.getElementById("seanOmalleyCost").innerHTML = fighter.seanOmalley.cost.toFixed(2);
        document.getElementById("seanOmalleyLevel").innerHTML = fighter.seanOmalley.level.toFixed(0);
        calculations.getHampaitaPerSekunti();
        document.getElementById("colbyCovingtonTotalPower").innerHTML = fighter.colbyCovington.totalPower.toFixed(2);
        document.getElementById("kamaruUsmanTotalPower").innerHTML = fighter.kamaruUsman.totalPower.toFixed(2);
        document.getElementById("shavkatRakhmonovTotalPower").innerHTML = fighter.shavkatRakhmonov.totalPower.toFixed(2);
        document.getElementById("seanOmalleyTotalPower").innerHTML = fighter.seanOmalley.totalPower.toFixed(2);
        document.getElementById("colbyCovingtonCurrentXp").innerHTML = fighter.colbyCovington.currentXp.toLocaleString();
        document.getElementById("colbyCovingtonMaxXp").innerHTML = fighter.colbyCovington.maxXp.toLocaleString();
        document.getElementById("kamaruUsmanCurrentXp").innerHTML = fighter.kamaruUsman.currentXp.toLocaleString();
        document.getElementById("kamaruUsmanMaxXp").innerHTML = fighter.kamaruUsman.maxXp.toLocaleString();
        document.getElementById("shavkatRakhmonovCurrentXp").innerHTML = fighter.shavkatRakhmonov.currentXp.toLocaleString();
        document.getElementById("shavkatRakhmonovMaxXp").innerHTML = fighter.shavkatRakhmonov.maxXp.toLocaleString();
        document.getElementById("seanOmalleyCurrentXp").innerHTML = fighter.seanOmalley.currentXp.toLocaleString();
        document.getElementById("seanOmalleyMaxXp").innerHTML = fighter.seanOmalley.maxXp.toLocaleString();
        const ascendBtn = document.getElementById("ascendContainer");
        if (ascendBtn) {
            if (game.hampaita >= ascend.treshold) {
                ascendBtn.style.display = "block";
                ascendBtn.innerHTML = "ASCEND";
            }
            else {
                ascendBtn.style.display = "none";
            }
        }
        //document.getElementById("colbyCovingtonProgressBar")!.style.width = `${fighter.colbyCovington.progressBarWidth}%`;
    },
    calculatePower: () => {
        calculations.calculateColbyCovingtonPower();
        calculations.calculateKamaruUsmanPower();
        calculations.calculateShavkatRakhmonovPower();
        calculations.calculateSeanOmalleyPower();
    },
    /*
    updateColbyCovingtonUpgrades: function(): void {
      const upgradeContainer = document.getElementById("upgradeContainer");
      if (!upgradeContainer) {
        return;
      }
  
      for (let i = 0; i < upgrade.name.length; i++) {
        const { purchased, type, requirement, cost, image, name, description } = upgrade[i];
        if (!purchased && type === "fighter" && fighter.colbyCovington.level >= requirement[0]) {
          const img = document.createElement("img");
          img.src = `./assets/${image[i]}`;
          img.title = `${name[i]} \n ${description[i]} \n (${cost[i]} hammasta)`;
          img.onclick = () => upgrade.colbyCovingtonPurchaseUpgrade(i);
          upgradeContainer.appendChild(img);
        }
      }
    }
      */
};
/*
updatefighter: function() {
  const fighterContainer = document.getElementById("fighterContainer");

  if (!fighterContainer) {
    console.error("Fighter container not found");
    return;
  }

  fighterContainer.innerHTML = "";

  for (let i = 0; i < fighter.name.length; i++) {
    if (fighter.unlocked[i] == true) {
      const fighterButton = document.createElement('div');
      fighterButton.classList.add('fighterButton', "unselectable");
      fighterButton.setAttribute('onclick', `fighter.handleClick(${i})`);
      fighterContainer.appendChild(fighterButton);

      const fighterTable = document.createElement('table');
      fighterButton.appendChild(fighterTable);

      const fighterRow = document.createElement('tr');
      fighterTable.appendChild(fighterRow);

      const fighterImage = document.createElement('td');
      fighterImage.id = 'image';

      const fighterImageElement = document.createElement('img');
      fighterImageElement.src = `./assets/${fighter.image[i]}`;
      fighterImage.appendChild(fighterImageElement);
      fighterRow.appendChild(fighterImage);

      const fighterNameAndCost = document.createElement('td');
      fighterNameAndCost.id = 'nameAndCost';
      fighterRow.appendChild(fighterNameAndCost);

      const fighterName = document.createElement('p');
      fighterName.textContent = fighter.name[i];
      fighterNameAndCost.appendChild(fighterName);

      const fighterPower = document.createElement('p');
      fighterPower.textContent = `Power: ${(fighter.power[i] * fighter.level[i]).toFixed(2)}`;
      fighterNameAndCost.appendChild(fighterPower);

      const fighterCost = document.createElement('p');
      fighterCost.textContent = `${Math.trunc(fighter.cost[i])} hammasta`;
      fighterNameAndCost.appendChild(fighterCost);

      const fighterLevel = document.createElement('td');
      fighterLevel.id = 'level';
      const fighterLevelSpan = document.createElement('span');
      fighterLevelSpan.textContent = `${fighter.level[i]}`;
      fighterLevel.appendChild(fighterLevelSpan);
      fighterRow.appendChild(fighterLevel);
    }
  }
  
  const fighterButtons = Array.from(fighterContainer.querySelectorAll('.fighterButton')); // Create a copy of fighter buttons

  for (let i = 0; i < fighter.name.length; i++) {
    if (fighter.unlocked[i]) {
      const progressBarElement = document.createElement('div');
      progressBarElement.classList.add('progress-bar');

      const currentButton = fighterButtons.shift(); // Remove the first element from the copy

      if (!currentButton) {
        console.error(`Fighter button for fighter ${i} not found`);
        continue;
      }

      currentButton.appendChild(progressBarElement);
      fighter.progressBarElement[i] = progressBarElement;
    }
  }
},
*/
/*
updateAchievement: function() {
  document.getElementById("achievementContainer")!.innerHTML = "";
  /*
  for (let i = 0; i < achievement.name.length; i++) {
    if (achievement.awarded[i]) {
      document.getElementById("achievementContainer")!.innerHTML += '<img src="./assets/'+achievement.image[i]+'" title="'+achievement.name[i]+' &#10; '+achievement.description[i]+'">';
    }
  }
*/
function saveGame() {
    let gameSave = {
        game: game,
        fighter: fighter,
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}
function loadGame() {
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
        fighter = parsedGameSave.fighter;
        display.calculatePower();
        display.updateUi();
        fighter.colbyCovington.isActive = false;
        fighter.kamaruUsman.isActive = false;
        fighter.shavkatRakhmonov.isActive = false;
        fighter.seanOmalley.isActive = false;
    }
    catch (error) {
        console.error("Error while loading game save:", error);
    }
}
function resetGame() {
    localStorage.removeItem("gameSave");
    location.reload();
}
window.onload = function () {
    loadGame();
    display.updateUi();
    //display.updateColbyCovingtonUpgrades();
    //display.updatefighter();
    //display.updateAchievement();
};
setInterval(() => {
    game.hampaita += game.hampaitaPerSekunti / 10;
    display.updateUi();
}, 100);
setInterval(() => {
    /*
    for (let i = 0; i < achievement.name.length; i++) {
      if (achievement.type[i] == "click" && game.totalClicks >= achievement.requirement[i]) achievement.earn(i);
      else if (achievement.type[i] == "power" && game.hampaita >= achievement.requirement[i]) achievement.earn(i);
      else if (achievement.type[i] == "fighter" && fighter.level[achievement.objectIndex[i]] >= achievement.requirement[i]) achievement.earn(i);
    }
      */
    //display.updateColbyCovingtonUpgrades();
    //display.updateAchievement();
}, 1000);
setInterval(() => {
    saveGame();
}, 30000);
setInterval(() => {
    display.updateUi();
    //display.updateColbyCovingtonUpgrades();
}, 10000);
const clickerBtn = document.getElementById("clicker");
const colbyCovingtonBtn = document.getElementById("colbyCovingtonOsta");
const kamaruUsmanBtn = document.getElementById("kamaruUsman");
const shavkatRakhmonovBtn = document.getElementById("shavkatRakhmonov");
const seanOmalleyBtn = document.getElementById("seanOmalley");
const colbyCovingtonTrain = document.getElementById("colbyCovingtonTrain");
const kamaruUsmanTrain = document.getElementById("kamaruUsmanTrain");
const shavkatRakhmonovTrain = document.getElementById("shavkatRakhmonovTrain");
const seanOmalleyTrain = document.getElementById("seanOmalleyTrain");
const ascendBtn = document.getElementById("asendContainer");
clickerBtn.addEventListener("click", function () {
    game.totalClicks++;
}, false);
colbyCovingtonBtn.addEventListener("click", () => {
    if (game.hampaita >= fighter.colbyCovington.cost) {
        game.hampaita -= fighter.colbyCovington.cost;
        fighter.colbyCovington.level++;
        fighter.colbyCovington.cost *= 1.2;
        calculations.calculateColbyCovingtonPower();
        display.updateUi();
    }
});
kamaruUsmanBtn.addEventListener("click", () => {
    if (game.hampaita >= fighter.kamaruUsman.cost) {
        game.hampaita -= fighter.kamaruUsman.cost;
        fighter.kamaruUsman.level++;
        fighter.kamaruUsman.cost *= 1.2;
        calculations.calculateKamaruUsmanPower();
        display.updateUi();
    }
});
shavkatRakhmonovBtn.addEventListener("click", () => {
    if (game.hampaita >= fighter.shavkatRakhmonov.cost) {
        game.hampaita -= fighter.shavkatRakhmonov.cost;
        fighter.shavkatRakhmonov.level++;
        fighter.shavkatRakhmonov.cost *= 1.2;
        calculations.calculateShavkatRakhmonovPower();
        display.updateUi();
    }
});
seanOmalleyBtn.addEventListener("click", () => {
    if (game.hampaita >= fighter.seanOmalley.cost) {
        game.hampaita -= fighter.seanOmalley.cost;
        fighter.seanOmalley.level++;
        fighter.seanOmalley.cost *= 1.2;
        calculations.calculateSeanOmalleyPower();
        display.updateUi();
    }
});
colbyCovingtonTrain.addEventListener("click", () => {
    colbyCovingtonProgress();
});
kamaruUsmanTrain.addEventListener("click", () => {
    kamaruUsmanProgress();
});
shavkatRakhmonovTrain.addEventListener("click", () => {
    shavkatRakhmonovProgress();
});
seanOmalleyTrain.addEventListener("click", () => {
    seanOmalleyProgress();
});
ascendBtn.addEventListener("click", () => {
    if (game.hampaita >= ascend.treshold) {
        ascend.treshold *= 5;
    }
});
