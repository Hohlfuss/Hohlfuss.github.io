"use strict";
let game = {
    version: "0.0.3",
    totalClicks: 0,
    globalMulti: 1.1,
    hampaita: 50,
    hampaitaPerSekunti: 0,
    totalPower: 0,
    maxActive: 1,
    activeFighters: 0,
};
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
        progress: 0,
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
        progress: 0,
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
    jonJones: {
        name: "Jon Jones",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "heavyWeight",
        weightClassRanking: 0,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 5,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 27,
            losses: 1,
            nc: 0,
            winsByKnockout: 10,
            winsBySubmission: 0,
            firstRoundFinishes: 7,
        }
    },
    alexanderVolkanovski: {
        name: "Alexander Volkanovski",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "featherWeight",
        weightClassRanking: 0,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 6,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 26,
            losses: 4,
            nc: 0,
            winsByKnockout: 13,
            winsBySubmission: 3,
            firstRoundFinishes: 7,
        }
    },
    alexPereira: {
        name: "Alex Pereira",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "lightHeavyWeight",
        weightClassRanking: 0,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 7,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 11,
            losses: 2,
            nc: 0,
            winsByKnockout: 9,
            winsBySubmission: 0,
            firstRoundFinishes: 4,
        }
    },
    islamMakhachev: {
        name: "Islam Makhachev",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "lightWeight",
        weightClassRanking: 0,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 8,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 26,
            losses: 1,
            nc: 0,
            winsByKnockout: 14,
            winsBySubmission: 5,
            firstRoundFinishes: 12,
        }
    },
    maxHolloway: {
        name: "Max Holloway",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "lightWeight",
        weightClassRanking: 9,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 9,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 26,
            losses: 7,
            nc: 0,
            winsByKnockout: 12,
            winsBySubmission: 2,
            firstRoundFinishes: 0,
        }
    },
    tomAspinall: {
        name: "Tom Aspinall",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "heavyWeight",
        weightClassRanking: 1,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 10,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 14,
            losses: 3,
            nc: 0,
            winsByKnockout: 11,
            winsBySubmission: 3,
            firstRoundFinishes: 13,
        }
    },
    israelAdesanya: {
        name: "Israel Adesanya",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "middleWeight",
        weightClassRanking: 2,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 11,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 24,
            losses: 3,
            nc: 0,
            winsByKnockout: 16,
            winsBySubmission: 0,
            firstRoundFinishes: 6,
        }
    },
    charlesOliveira: {
        name: "Charles Oliveira",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "lightWeight",
        weightClassRanking: 2,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 12,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 34,
            losses: 10,
            nc: 0,
            winsByKnockout: 10,
            winsBySubmission: 21,
            firstRoundFinishes: 0,
        }
    },
    seanStrickland: {
        name: "Sean Strickland",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "middleWeight",
        weightClassRanking: 1,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 13,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 29,
            losses: 6,
            nc: 0,
            winsByKnockout: 11,
            winsBySubmission: 4,
            firstRoundFinishes: 9,
        }
    },
    justinGaethje: {
        name: "Justin Gaethje",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "featherWeight",
        weightClassRanking: 3,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 14,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 26,
            losses: 5,
            nc: 0,
            winsByKnockout: 20,
            winsBySubmission: 0,
            firstRoundFinishes: 9,
        }
    },
    dustinPoirier: {
        name: "Dustin Poirier",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "lightWeight",
        weightClassRanking: 4,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 15,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 30,
            losses: 9,
            nc: 0,
            winsByKnockout: 16,
            winsBySubmission: 7,
            firstRoundFinishes: 13,
        }
    },
    pauloCosta: {
        name: "Paulo Costa",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "middleWeight",
        weightClassRanking: 8,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 16,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 14,
            losses: 4,
            nc: 0,
            winsByKnockout: 11,
            winsBySubmission: 1,
            firstRoundFinishes: 9,
        }
    },
    jiriProchazka: {
        name: "Jiri Prochazka",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "lightHeavyWeight",
        weightClassRanking: 1,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 17,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 30,
            losses: 5,
            nc: 1,
            winsByKnockout: 26,
            winsBySubmission: 3,
            firstRoundFinishes: 23,
        }
    },
    johnnyWalker: {
        name: "Johnny Walker",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "lightHeavyWeight",
        weightClassRanking: 7,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 18,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 21,
            losses: 9,
            nc: 0,
            winsByKnockout: 16,
            winsBySubmission: 3,
            firstRoundFinishes: 17,
        }
    },
    valentinaShevchenko: {
        name: "Valentina Shevchenko",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "womensFlyweight",
        weightClassRanking: 1,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 19,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 23,
            losses: 4,
            nc: 1,
            winsByKnockout: 8,
            winsBySubmission: 7,
            firstRoundFinishes: 6,
        }
    },
    belalMuhammad: {
        name: "Belal Muhammad",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "welterWeight",
        weightClassRanking: 2,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 20,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 23,
            losses: 3,
            nc: 0,
            winsByKnockout: 5,
            winsBySubmission: 1,
            firstRoundFinishes: 0,
        }
    },
    jackDellaMaddalena: {
        name: "Jack Della Maddalena",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "welterWeight",
        weightClassRanking: 5,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 21,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 17,
            losses: 2,
            nc: 0,
            winsByKnockout: 12,
            winsBySubmission: 2,
            firstRoundFinishes: 8,
        }
    },
    gilbertBurns: {
        name: "Gilbert Burns",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "welterWeight",
        weightClassRanking: 6,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 22,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 22,
            losses: 7,
            nc: 0,
            winsByKnockout: 6,
            winsBySubmission: 9,
            firstRoundFinishes: 11,
        }
    },
    ianGarry: {
        name: "Ian Garry",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "welterWeight",
        weightClassRanking: 7,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 23,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 15,
            losses: 0,
            nc: 0,
            winsByKnockout: 7,
            winsBySubmission: 1,
            firstRoundFinishes: 4,
        }
    },
    seanBrady: {
        name: "Sean Brady",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "welterWeight",
        weightClassRanking: 8,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 24,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 16,
            losses: 1,
            nc: 0,
            winsByKnockout: 3,
            winsBySubmission: 5,
            firstRoundFinishes: 3,
        }
    },
    stephenThompson: {
        name: "Stephen Thompson",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "welterWeight",
        weightClassRanking: 9,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 25,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 17,
            losses: 7,
            nc: 1,
            winsByKnockout: 8,
            winsBySubmission: 1,
            firstRoundFinishes: 5,
        }
    },
    geoffNeal: {
        name: "Geoff Neal",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "welterWeight",
        weightClassRanking: 10,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 26,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 15,
            losses: 6,
            nc: 0,
            winsByKnockout: 9,
            winsBySubmission: 2,
            firstRoundFinishes: 6,
        }
    },
    joaquinBuckley: {
        name: "Joaquin Buckley",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "welterWeight",
        weightClassRanking: 11,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 27,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 19,
            losses: 6,
            nc: 0,
            winsByKnockout: 13,
            winsBySubmission: 0,
            firstRoundFinishes: 4,
        }
    },
    neilMagny: {
        name: "Neil Magny",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "welterWeight",
        weightClassRanking: 12,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 28,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 29,
            losses: 12,
            nc: 0,
            winsByKnockout: 8,
            winsBySubmission: 4,
            firstRoundFinishes: 0,
        }
    },
    vincenteLuque: {
        name: "Vicente Luque",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "welterWeight",
        weightClassRanking: 13,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 29,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 22,
            losses: 10,
            nc: 1,
            winsByKnockout: 11,
            winsBySubmission: 8,
            firstRoundFinishes: 13,
        }
    },
    michaelPage: {
        name: "Michael Page",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "welterWeight",
        weightClassRanking: 14,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 30,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 22,
            losses: 3,
            nc: 0,
            winsByKnockout: 13,
            winsBySubmission: 3,
            firstRoundFinishes: 13,
        }
    },
    kevinHolland: {
        name: "Kevin Holland",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "welterWeight",
        weightClassRanking: 15,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 31,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 26,
            losses: 11,
            nc: 0,
            winsByKnockout: 14,
            winsBySubmission: 8,
            firstRoundFinishes: 13,
        }
    },
    leonEdwards: {
        name: "Leon Edwards",
        level: 0,
        cost: 10,
        totalPower: 0,
        power: 0,
        weightClass: "welterWeight",
        weightClassRanking: 0,
        unlocked: false,
        isActive: false,
        mastery: 0,
        progress: 0,
        intervalId: 32,
        currentXp: 0,
        maxXp: 100,
        stats: {
            wins: 22,
            losses: 3,
            nc: 0,
            winsByKnockout: 7,
            winsBySubmission: 3,
            firstRoundFinishes: 5,
        }
    }
};
let ascendObject = {
    raja: 1000,
    verta: 0,
    valintaHinta: 100,
    satunnainenHinta: 50,
    ascendCount: 0,
};
const elementit = {
    clicker: document.getElementsByClassName("clicker"),
    ascendBtn: document.getElementById("ascendContainer"),
    resetTrainers: document.getElementById("resetTrainers"),
    upgradeContainerElement: document.getElementById("upgradeContainer"),
    reset: document.getElementById("reset"),
    save: document.getElementById("save"),
    achievement: document.getElementById("achievements"),
    colbyCovingtonBtn: document.getElementById("colbyCovingtonOsta"),
    kamaruUsmanBtn: document.getElementById("kamaruUsmanOsta"),
    shavkatRakhmonovBtn: document.getElementById("shavkatRakhmonovOsta"),
    seanOmalleyBtn: document.getElementById("seanOmalleyOsta"),
    colbyCovingtonTrain: document.getElementById("colbyCovingtonTrain"),
    kamaruUsmanTrain: document.getElementById("kamaruUsmanTrain"),
    shavkatRakhmonovTrain: document.getElementById("shavkatRakhmonovTrain"),
    seanOmalleyTrain: document.getElementById("seanOmalleyTrain"),
    vertaElement: document.getElementById("verta"),
    valintaHintaElement: document.getElementById("valintaHinta"),
    satunnainenHintaElement: document.getElementById("satunnainenHinta"),
    hampaitaElement: document.getElementById("hampaita"),
    hampaitaPerSekuntiElement: document.getElementById("hampaitaPerSekunti"),
    colbyCovingtonPowerElement: document.getElementById("colbyCovingtonPower"),
    colbyCovingtonCostElement: document.getElementById("colbyCovingtonCost"),
    colbyCovingtonLevelElement: document.getElementById("colbyCovingtonLevel"),
    kamaruUsmanPowerElement: document.getElementById("kamaruUsmanPower"),
    kamaruUsmanCostElement: document.getElementById("kamaruUsmanCost"),
    kamaruUsmanLevelElement: document.getElementById("kamaruUsmanLevel"),
    shavkatRakhmonovPowerElement: document.getElementById("shavkatRakhmonovPower"),
    shavkatRakhmonovCostElement: document.getElementById("shavkatRakhmonovCost"),
    shavkatRakhmonovLevelElement: document.getElementById("shavkatRakhmonovLevel"),
    seanOmalleyPowerElement: document.getElementById("seanOmalleyPower"),
    seanOmalleyCostElement: document.getElementById("seanOmalleyCost"),
    seanOmalleyLevelElement: document.getElementById("seanOmalleyLevel"),
    colbyCovingtonTotalPowerElement: document.getElementById("colbyCovingtonTotalPower"),
    kamaruUsmanTotalPowerElement: document.getElementById("kamaruUsmanTotalPower"),
    shavkatRakhmonovTotalPowerElement: document.getElementById("shavkatRakhmonovTotalPower"),
    seanOmalleyTotalPowerElement: document.getElementById("seanOmalleyTotalPower"),
    colbyCovingtonCurrentXpElement: document.getElementById("colbyCovingtonCurrentXp"),
    colbyCovingtonMaxXpElement: document.getElementById("colbyCovingtonMaxXp"),
    kamaruUsmanCurrentXpElement: document.getElementById("kamaruUsmanCurrentXp"),
    kamaruUsmanMaxXpElement: document.getElementById("kamaruUsmanMaxXp"),
    shavkatRakhmonovCurrentXpElement: document.getElementById("shavkatRakhmonovCurrentXp"),
    shavkatRakhmonovMaxXpElement: document.getElementById("shavkatRakhmonovMaxXp"),
    seanOmalleyCurrentXpElement: document.getElementById("seanOmalleyCurrentXp"),
    seanOmalleyMaxXpElement: document.getElementById("seanOmalleyMaxXp"),
};
const functioita = {
    colbyCovingtonProgress: (() => {
        if (game.activeFighters >= game.maxActive) {
            return;
        }
        let colbyCovingtonProgressBarElement = document.getElementById("colbyCovingtonProgressBar");
        if (colbyCovingtonProgressBarElement) {
            fighter.colbyCovington.isActive = true;
            game.activeFighters++;
            document.getElementById("colbyCovingtonTrain").style.backgroundColor = "green";
            fighter.colbyCovington.intervalId = setInterval(() => {
                fighter.colbyCovington.progress += 0.2;
                if (colbyCovingtonProgressBarElement) {
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
    }),
    kamaruUsmanProgress: (() => {
        if (game.activeFighters >= game.maxActive) {
            return;
        }
        let kamaruUsmanProgressBarElement = document.getElementById("kamaruUsmanProgressBar");
        if (kamaruUsmanProgressBarElement) {
            fighter.kamaruUsman.isActive = true;
            game.activeFighters++;
            document.getElementById("kamaruUsmanTrain").style.backgroundColor = "green";
            fighter.kamaruUsman.intervalId = setInterval(() => {
                fighter.kamaruUsman.progress += 0.2;
                if (kamaruUsmanProgressBarElement) {
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
    }),
    shavkatRakhmonovProgress: (() => {
        if (game.activeFighters >= game.maxActive) {
            return;
        }
        let shavkatRakhmonovProgressBarElement = document.getElementById("shavkatRakhmonovProgressBar");
        if (shavkatRakhmonovProgressBarElement) {
            fighter.shavkatRakhmonov.isActive = true;
            game.activeFighters++;
            document.getElementById("shavkatRakhmonovTrain").style.backgroundColor = "green";
            fighter.shavkatRakhmonov.intervalId = setInterval(() => {
                fighter.shavkatRakhmonov.progress += 0.2;
                if (shavkatRakhmonovProgressBarElement) {
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
    }),
    seanOmalleyProgress: (() => {
        if (game.activeFighters >= game.maxActive) {
            return;
        }
        let seanOmalleyProgressBarElement = document.getElementById("seanOmalleyProgressBar");
        if (seanOmalleyProgressBarElement) {
            fighter.seanOmalley.isActive = true;
            game.activeFighters++;
            document.getElementById("seanOmalleyTrain").style.backgroundColor = "green";
            fighter.seanOmalley.intervalId = setInterval(() => {
                fighter.seanOmalley.progress += 0.2;
                if (seanOmalleyProgressBarElement) {
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
    }),
    /*
    calculateColbyCovingtonPower: (() => {
      let winRatio = fighter.colbyCovington.stats.wins / (fighter.colbyCovington.stats.losses === 0 ? 1 : fighter.colbyCovington.stats.losses);
      fighter.colbyCovington.power = (winRatio - fighter.colbyCovington.stats.nc + fighter.colbyCovington.stats.winsByKnockout + fighter.colbyCovington.stats.winsBySubmission + fighter.colbyCovington.stats.firstRoundFinishes);
      fighter.colbyCovington.totalPower = fighter.colbyCovington.power * fighter.colbyCovington.level * game.globalMulti;
      game.totalPower += fighter.colbyCovington.totalPower;
    }),
  
    calculateKamaruUsmanPower: (() => {
      let winRatio = fighter.kamaruUsman.stats.wins / (fighter.kamaruUsman.stats.losses === 0 ? 1 : fighter.kamaruUsman.stats.losses);
      fighter.kamaruUsman.power = (winRatio - fighter.kamaruUsman.stats.nc + fighter.kamaruUsman.stats.winsByKnockout + fighter.kamaruUsman.stats.winsBySubmission + fighter.kamaruUsman.stats.firstRoundFinishes) / 1000;
      fighter.kamaruUsman.totalPower = fighter.kamaruUsman.power * fighter.kamaruUsman.level * game.globalMulti;
      game.totalPower += fighter.kamaruUsman.totalPower;
    }),
  
    calculateShavkatRakhmonovPower: (() => {
      let winRatio = fighter.shavkatRakhmonov.stats.wins / (fighter.shavkatRakhmonov.stats.losses === 0 ? 1 : fighter.shavkatRakhmonov.stats.losses);
      fighter.shavkatRakhmonov.power = (winRatio - fighter.shavkatRakhmonov.stats.nc + fighter.shavkatRakhmonov.stats.winsByKnockout + fighter.shavkatRakhmonov.stats.winsBySubmission + fighter.shavkatRakhmonov.stats.firstRoundFinishes) / 1000;
      fighter.shavkatRakhmonov.totalPower = fighter.shavkatRakhmonov.power * fighter.shavkatRakhmonov.level * game.globalMulti;
      game.totalPower += fighter.shavkatRakhmonov.totalPower;
    }),
  
    calculateSeanOmalleyPower: (() => {
      let winRatio = fighter.seanOmalley.stats.wins / (fighter.seanOmalley.stats.losses === 0 ? 1 : fighter.seanOmalley.stats.losses);
      fighter.seanOmalley.power = (winRatio - fighter.seanOmalley.stats.nc + fighter.seanOmalley.stats.winsByKnockout + fighter.seanOmalley.stats.winsBySubmission + fighter.seanOmalley.stats.firstRoundFinishes) / 1000;
      fighter.seanOmalley.totalPower = fighter.seanOmalley.power * fighter.seanOmalley.level * game.globalMulti;
      game.totalPower += fighter.seanOmalley.totalPower;
    }),
    */
    getHampaitaPerSekunti: function () {
        game.totalPower = fighter.colbyCovington.totalPower + fighter.kamaruUsman.totalPower + fighter.shavkatRakhmonov.totalPower + fighter.seanOmalley.totalPower;
        game.hampaitaPerSekunti = game.totalPower;
        return game.hampaitaPerSekunti;
    },
};
const utility = {
    ascend: (() => {
        ascendObject.raja * 5;
        ascendObject.verta = (game.hampaita *= 0.01);
        ascendObject.ascendCount++;
        utility.saveGame();
        utility.pysäytäKaikki();
        window.location.href = "./ascend.html";
    }),
    pysäytäKaikki: (() => {
        game.activeFighters = 0;
        fighter.colbyCovington.isActive = false;
        fighter.kamaruUsman.isActive = false;
        fighter.shavkatRakhmonov.isActive = false;
        fighter.seanOmalley.isActive = false;
        clearInterval(fighter.colbyCovington.intervalId);
        clearInterval(fighter.kamaruUsman.intervalId);
        clearInterval(fighter.shavkatRakhmonov.intervalId);
        clearInterval(fighter.seanOmalley.intervalId);
        console.log("Pysäytetty");
    }),
    saveGame: (() => {
        console.log("Saving game");
        let gameSave = {
            game: game,
            fighter: fighter,
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
            fighter = parsedGameSave.fighter;
            ascendObject = parsedGameSave.ascendObject;
            //display.calculatePower();
            display.updateUi();
            game.activeFighters = 0;
            fighter.colbyCovington.isActive = false;
            fighter.kamaruUsman.isActive = false;
            fighter.shavkatRakhmonov.isActive = false;
            fighter.seanOmalley.isActive = false;
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
let upgrade = {
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
        1_000,
        1_000,
        1_000,
        1_000,
        1_000,
        1_000,
        1_000,
        1_000,
        1_000,
        1_000,
        1_000,
        1_000,
        1_000,
        1_000,
        1_000,
        1_000,
        1_000,
        1_000,
        1_000,
        1_000,
        1_000,
        1_000,
        1_000,
        1_000,
        12_000,
        12_000,
        12_000,
        12_000,
        12_000,
        12_000,
        1_000,
        20_000,
        300_000
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
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        1_000,
        10_000
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
    colbyCovingtonHanskantT1Purchase: () => {
        if (fighter.colbyCovington.level >= upgrade.requirement[0]) {
            game.hampaita -= upgrade.cost[0];
            fighter.colbyCovington.power *= upgrade.bonus[0];
            upgrade.purchased[0] = true;
        }
    },
    kamaruUsmanHanskantT1Purchase: () => {
        if (fighter.kamaruUsman.level >= upgrade.requirement[1]) {
            game.hampaita -= upgrade.cost[1];
            fighter.kamaruUsman.power *= upgrade.bonus[1];
            upgrade.purchased[1] = true;
        }
    },
    shavkatRakhmonovHanskantT1Purchase: () => {
        if (fighter.shavkatRakhmonov.level >= upgrade.requirement[2]) {
            game.hampaita -= upgrade.cost[2];
            fighter.shavkatRakhmonov.power *= upgrade.bonus[2];
            upgrade.purchased[2] = true;
        }
    },
    seanOmalleyHanskantT1Purchase: () => {
        if (fighter.seanOmalley.level >= upgrade.requirement[3]) {
            game.hampaita -= upgrade.cost[3];
            fighter.seanOmalley.power *= upgrade.bonus[3];
            upgrade.purchased[3] = true;
        }
    },
};
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
        100,
        1_000,
        10_000,
    ],
    requirement: [
        100,
        1_000,
        10_000,
        10_000_000,
        100_000_000,
        1_000_000_000
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
    earn: function (index) {
        this.awarded[index] = true;
    }
};
const display = {
    updateUi: (() => {
        const ascendBtn = document.getElementById("ascendContainer");
        if (ascendBtn) {
            if (game.hampaita >= ascendObject.raja) {
                ascendBtn.style.display = "block";
                ascendBtn.innerHTML = "ASCEND";
            }
            else {
                ascendBtn.style.display = "none";
            }
        }
        if (elementit.vertaElement) {
            elementit.vertaElement.innerHTML = ascendObject.verta.toLocaleString();
        }
        if (elementit.valintaHintaElement) {
            elementit.valintaHintaElement.innerHTML = ascendObject.valintaHinta.toLocaleString();
        }
        if (elementit.satunnainenHintaElement) {
            elementit.satunnainenHintaElement.innerHTML = ascendObject.satunnainenHinta.toLocaleString();
        }
        if (elementit.hampaitaElement) {
            elementit.hampaitaElement.innerHTML = game.hampaita.toLocaleString();
        }
        if (elementit.hampaitaPerSekuntiElement) {
            let perkele = game.hampaitaPerSekunti / 1000;
            elementit.hampaitaPerSekuntiElement.innerHTML = perkele.toLocaleString();
        }
        if (elementit.colbyCovingtonPowerElement) {
            let perkele = fighter.colbyCovington.power / 1000;
            elementit.colbyCovingtonPowerElement.innerHTML = perkele.toLocaleString();
        }
        if (elementit.colbyCovingtonCostElement) {
            elementit.colbyCovingtonCostElement.innerHTML = fighter.colbyCovington.cost.toLocaleString();
        }
        if (elementit.colbyCovingtonLevelElement) {
            elementit.colbyCovingtonLevelElement.innerHTML = fighter.colbyCovington.level.toLocaleString();
        }
        if (elementit.kamaruUsmanPowerElement) {
            let perkele = fighter.kamaruUsman.power / 1000;
            elementit.kamaruUsmanPowerElement.innerHTML = perkele.toLocaleString();
        }
        if (elementit.kamaruUsmanCostElement) {
            elementit.kamaruUsmanCostElement.innerHTML = fighter.kamaruUsman.cost.toLocaleString();
        }
        if (elementit.kamaruUsmanLevelElement) {
            elementit.kamaruUsmanLevelElement.innerHTML = fighter.kamaruUsman.level.toLocaleString();
        }
        if (elementit.shavkatRakhmonovPowerElement) {
            let perkele = fighter.shavkatRakhmonov.power / 1000;
            elementit.shavkatRakhmonovPowerElement.innerHTML = perkele.toLocaleString();
        }
        if (elementit.shavkatRakhmonovCostElement) {
            elementit.shavkatRakhmonovCostElement.innerHTML = fighter.shavkatRakhmonov.cost.toLocaleString();
        }
        if (elementit.shavkatRakhmonovLevelElement) {
            elementit.shavkatRakhmonovLevelElement.innerHTML = fighter.shavkatRakhmonov.level.toLocaleString();
        }
        if (elementit.seanOmalleyPowerElement) {
            let perkele = fighter.seanOmalley.power / 1000;
            elementit.seanOmalleyPowerElement.innerHTML = perkele.toLocaleString();
        }
        if (elementit.seanOmalleyCostElement) {
            elementit.seanOmalleyCostElement.innerHTML = fighter.seanOmalley.cost.toLocaleString();
        }
        if (elementit.seanOmalleyLevelElement) {
            elementit.seanOmalleyLevelElement.innerHTML = fighter.seanOmalley.level.toLocaleString();
        }
        if (elementit.colbyCovingtonTotalPowerElement) {
            let perkele = fighter.colbyCovington.totalPower / 1000;
            elementit.colbyCovingtonTotalPowerElement.innerHTML = perkele.toLocaleString();
        }
        if (elementit.kamaruUsmanTotalPowerElement) {
            let perkele = fighter.kamaruUsman.totalPower / 1000;
            elementit.kamaruUsmanTotalPowerElement.innerHTML = perkele.toLocaleString();
        }
        if (elementit.shavkatRakhmonovTotalPowerElement) {
            let perkele = fighter.shavkatRakhmonov.totalPower / 1000;
            elementit.shavkatRakhmonovTotalPowerElement.innerHTML = perkele.toLocaleString();
        }
        if (elementit.seanOmalleyTotalPowerElement) {
            let perkele = fighter.seanOmalley.totalPower / 1000;
            elementit.seanOmalleyTotalPowerElement.innerHTML = perkele.toLocaleString();
        }
        if (elementit.colbyCovingtonCurrentXpElement) {
            elementit.colbyCovingtonCurrentXpElement.innerHTML = fighter.colbyCovington.currentXp.toLocaleString();
        }
        if (elementit.colbyCovingtonMaxXpElement) {
            elementit.colbyCovingtonMaxXpElement.innerHTML = fighter.colbyCovington.maxXp.toLocaleString();
        }
        if (elementit.kamaruUsmanCurrentXpElement) {
            elementit.kamaruUsmanCurrentXpElement.innerHTML = fighter.kamaruUsman.currentXp.toLocaleString();
        }
        if (elementit.kamaruUsmanMaxXpElement) {
            elementit.kamaruUsmanMaxXpElement.innerHTML = fighter.kamaruUsman.maxXp.toLocaleString();
        }
        if (elementit.shavkatRakhmonovCurrentXpElement) {
            elementit.shavkatRakhmonovCurrentXpElement.innerHTML = fighter.shavkatRakhmonov.currentXp.toLocaleString();
        }
        if (elementit.shavkatRakhmonovMaxXpElement) {
            elementit.shavkatRakhmonovMaxXpElement.innerHTML = fighter.shavkatRakhmonov.maxXp.toLocaleString();
        }
        if (elementit.seanOmalleyCurrentXpElement) {
            elementit.seanOmalleyCurrentXpElement.innerHTML = fighter.seanOmalley.currentXp.toLocaleString();
        }
        if (elementit.seanOmalleyMaxXpElement) {
            elementit.seanOmalleyMaxXpElement.innerHTML = fighter.seanOmalley.maxXp.toLocaleString();
        }
        if (elementit.upgradeContainerElement) {
            elementit.upgradeContainerElement.innerHTML += "";
        }
    }),
    calculatePower: () => {
        //functioita.calculateColbyCovingtonPower();
        //functioita.calculateKamaruUsmanPower();
        //functioita.calculateShavkatRakhmonovPower();
        //functioita.calculateSeanOmalleyPower();
    },
    updateAchievement: () => {
        const achievementHtml = achievement.awarded.map((awarded, index) => {
            if (awarded) {
                return `<img src="./assets/${achievement.image[index]}" title="${achievement.name[index]}" &#10; ${achievement.description[index]}>`;
            }
            return '';
        }).join('');
        document.getElementById("achievementContainer").innerHTML = achievementHtml;
    }
};
window.onload = function () {
    utility.loadGame();
    display.updateUi();
    display.updateAchievement();
};
setInterval(() => {
    functioita.getHampaitaPerSekunti();
    game.hampaita += game.hampaitaPerSekunti / 10_000;
    display.updateUi();
}, 100);
setInterval(() => {
    for (let i = 0; i < achievement.name.length; i++) {
        if (achievement.type[0] == "click" && game.totalClicks >= achievement.requirement[0])
            achievement.earn(0);
        else if (achievement.type[0] == "power" && game.hampaitaPerSekunti >= achievement.requirement[0])
            achievement.earn(0);
        else if (achievement.type[0] == "fighter" && fighter.colbyCovington.level >= achievement.requirement[0])
            achievement.earn(0);
    }
    display.updateAchievement();
}, 1_000);
setInterval(() => {
    elementit.upgradeContainerElement.innerHTML = "";
    if (!upgrade.purchased[0]) {
        if (upgrade.type[0] == "fighter" && fighter.colbyCovington.level >= upgrade.requirement[0]) {
            elementit.upgradeContainerElement.innerHTML += '<img src="./assets/' + upgrade.image[0] + '" title="' + upgrade.name[0] + ' &#10; ' + upgrade.description[0] + ' &#10; (' + upgrade.cost[0] + ' hammasta)" onclick="upgrade.purchase(' + 0 + ')">';
        }
        else if (upgrade.type[0] == "click" && game.totalClicks >= upgrade.requirement[0]) {
            elementit.upgradeContainerElement.innerHTML += '<img src="./assets/' + upgrade.image[0] + '" title="' + upgrade.name[0] + ' &#10; ' + upgrade.description[0] + ' &#10; (' + upgrade.cost[0] + ' hammasta)" onclick="upgrade.purchase(' + 0 + ')">';
        }
    }
    for (let i = 0; i < achievement.name.length; i++) {
        if (achievement.type[i] == "power" && game.hampaitaPerSekunti >= achievement.requirement[i])
            achievement.earn(i);
        else if (achievement.type[i] == "click" && game.totalClicks >= achievement.requirement[i])
            achievement.earn(i);
        else if (achievement.type[i] == "fighter" && fighter.colbyCovington.level >= achievement.requirement[i])
            achievement.earn(i);
    }
    display.updateUi();
}, 10_000);
setInterval(() => {
    utility.saveGame();
}, 30_000);
for (let i = 0; i < elementit.clicker.length; i++) {
    elementit.clicker[i].addEventListener("click", function () {
        game.totalClicks++;
    });
}
elementit.colbyCovingtonBtn.addEventListener("click", () => {
    if (game.hampaita >= fighter.colbyCovington.cost) {
        game.hampaita -= fighter.colbyCovington.cost;
        fighter.colbyCovington.level++;
        fighter.colbyCovington.cost *= 1.2;
        let winRatio = fighter.colbyCovington.stats.wins / (fighter.colbyCovington.stats.losses === 0 ? 1 : fighter.colbyCovington.stats.losses);
        fighter.colbyCovington.power = (winRatio - fighter.colbyCovington.stats.nc + fighter.colbyCovington.stats.winsByKnockout + fighter.colbyCovington.stats.winsBySubmission + fighter.colbyCovington.stats.firstRoundFinishes) * game.globalMulti;
        fighter.colbyCovington.totalPower = fighter.colbyCovington.power * fighter.colbyCovington.level;
        game.totalPower += fighter.colbyCovington.totalPower;
        //functioita.calculateColbyCovingtonPower();
        display.updateUi();
    }
});
elementit.kamaruUsmanBtn.addEventListener("click", () => {
    if (game.hampaita >= fighter.kamaruUsman.cost) {
        game.hampaita -= fighter.kamaruUsman.cost;
        fighter.kamaruUsman.level++;
        fighter.kamaruUsman.cost *= 1.2;
        let winRatio = fighter.kamaruUsman.stats.wins / (fighter.kamaruUsman.stats.losses === 0 ? 1 : fighter.kamaruUsman.stats.losses);
        fighter.kamaruUsman.power = (winRatio - fighter.kamaruUsman.stats.nc + fighter.kamaruUsman.stats.winsByKnockout + fighter.kamaruUsman.stats.winsBySubmission + fighter.kamaruUsman.stats.firstRoundFinishes) * game.globalMulti;
        fighter.kamaruUsman.totalPower = fighter.kamaruUsman.power * fighter.kamaruUsman.level;
        game.totalPower += fighter.kamaruUsman.totalPower;
        //functioita.calculateKamaruUsmanPower();
        display.updateUi();
    }
});
elementit.shavkatRakhmonovBtn.addEventListener("click", () => {
    if (game.hampaita >= fighter.shavkatRakhmonov.cost) {
        game.hampaita -= fighter.shavkatRakhmonov.cost;
        fighter.shavkatRakhmonov.level++;
        fighter.shavkatRakhmonov.cost *= 1.2;
        let winRatio = fighter.shavkatRakhmonov.stats.wins / (fighter.shavkatRakhmonov.stats.losses === 0 ? 1 : fighter.shavkatRakhmonov.stats.losses);
        fighter.shavkatRakhmonov.power = (winRatio - fighter.shavkatRakhmonov.stats.nc + fighter.shavkatRakhmonov.stats.winsByKnockout + fighter.shavkatRakhmonov.stats.winsBySubmission + fighter.shavkatRakhmonov.stats.firstRoundFinishes) * game.globalMulti;
        fighter.shavkatRakhmonov.totalPower = fighter.shavkatRakhmonov.power * fighter.shavkatRakhmonov.level;
        game.totalPower += fighter.shavkatRakhmonov.totalPower;
        //functioita.calculateShavkatRakhmonovPower();
        display.updateUi();
    }
});
elementit.seanOmalleyBtn.addEventListener("click", () => {
    if (game.hampaita >= fighter.seanOmalley.cost) {
        game.hampaita -= fighter.seanOmalley.cost;
        fighter.seanOmalley.level++;
        fighter.seanOmalley.cost *= 1.2;
        let winRatio = fighter.seanOmalley.stats.wins / (fighter.seanOmalley.stats.losses === 0 ? 1 : fighter.seanOmalley.stats.losses);
        fighter.seanOmalley.power = (winRatio - fighter.seanOmalley.stats.nc + fighter.seanOmalley.stats.winsByKnockout + fighter.seanOmalley.stats.winsBySubmission + fighter.seanOmalley.stats.firstRoundFinishes) * game.globalMulti;
        fighter.seanOmalley.totalPower = fighter.seanOmalley.power * fighter.seanOmalley.level;
        game.totalPower += fighter.seanOmalley.totalPower;
        //functioita.calculateShavkatRakhmonovPower();
        display.updateUi();
    }
});
elementit.colbyCovingtonTrain.addEventListener("click", () => {
    functioita.colbyCovingtonProgress();
});
elementit.kamaruUsmanTrain.addEventListener("click", () => {
    functioita.kamaruUsmanProgress();
});
elementit.shavkatRakhmonovTrain.addEventListener("click", () => {
    functioita.shavkatRakhmonovProgress();
});
elementit.seanOmalleyTrain.addEventListener("click", () => {
    functioita.seanOmalleyProgress();
});
elementit.resetTrainers.addEventListener("click", () => {
    utility.pysäytäKaikki();
});
elementit.ascendBtn.addEventListener("click", () => {
    if (game.hampaita >= ascendObject.raja) {
        utility.ascend();
    }
});
elementit.reset.addEventListener("click", () => {
    utility.resetGame();
});
elementit.save.addEventListener("click", () => {
    utility.saveGame();
});
