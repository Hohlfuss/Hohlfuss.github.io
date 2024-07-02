
interface FighterFightHistory {
  wins: number;
  losses: number;
  nc: number;
  winsByKnockout: number;
  winsBySubmission: number;
  firstRoundFinishes: number;
  power: number | null;
}

interface Fighter {
  name: string;
  image: string;
  level: number;
  cost: number;
  costMulti: number;
  stats: FighterFightHistory;
  power: number;
}

const game = {
  version: "0.0.0.1",
  totalClicks: 0,
  globalMulti: 1.1,
  hampaita: 50,
  hampaitaPerSekunti: 0,
  totalPower: 0,
  getHampaitaPerSekunti: function() {
    this.hampaitaPerSekunti = this.totalPower * this.globalMulti;
    return this.hampaitaPerSekunti;
  },
};

const fighter = {
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
  ],
  purchase: function(index: number) {
    if (game.hampaita >= this.cost[index]) {
      game.hampaita -= this.cost[index];
      this.level[index]++;
      this.cost[index] *= this.costMulti[index];

      fighter.calculatePower();
      display.updateHampaita();
      display.updatefighter();
      display.updateUpgrades();
    }
  },
  calculatePower: function() {
    game.totalPower = 0;
    for (let i = 0; i < this.name.length; i++) {
      let winRatio = this.stats[i].wins / (this.stats[i].losses === 0 ? 1 : this.stats[i].losses);
      this.power[i] = (winRatio - this.stats[i].nc + this.stats[i].winsByKnockout + this.stats[i].winsBySubmission + this.stats[i].firstRoundFinishes) / 1000;
      game.totalPower += this.power[i] * this.level[i];
    }
  }
};

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
    "Colby Covington 2x voimakkaampi",
    "Kamaru Usman 2x voimakkaampi",
    "Shavkat Rakhmonov 2x voimakkaampi",
    "Sean O'malley 2x voimakkaampi",
    "Jon Jones 2x voimakkaampi",
    "Alexander Volkanovski 2x voimakkaampi",
    "Alex Pereira 2x voimakkaampi",
    "Islam Makhachev 2x voimakkaampi",
    "Max Holloway 2x voimakkaampi",
    "Tom Aspinallille T1 hanskat",
    "Israel Adesanya 2x voimakkaampi",
    "Charles Oliveira 2x voimakkaampi",
    "Sean Strickland 2x voimakkaampi",
    "Justin Gaethji  2x voimakkaampi",
    "Dustin Poirier 2x voimakkaampi",
    "Paulo Costa 2x voimakkaampi",
    "Jiri Prochazka 2x voimakkaampi",
    "Johnny Walker 2x voimakkaampi",
    "Valentina Shevchenko 2x voimakkaampi",,


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
    3_000,
    3_000,
    3_000,
    3_000,
    3_000,
    3_000,
    3_000,
    3_000,
    3_000,
    3_000,
    3_000,
    3_000,
    3_000,
    3_000,
    3_000,
    3_000,
    3_000,
    3_000,
    3_000,
    3_000,
    3_000,
    3_000,
    3_000,
    3_000,
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
    1_000,
    10_000
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
  purchase: function(index: number) {
    if (!this.purchased[index] && game.hampaita >= this.cost[index]) {
      if (this.type[index] == "fighter" && fighter.level[this.fighterIndex[index]] >= this.requirement[index]) {
        game.hampaita -= this.cost[index];
        fighter.power[this.fighterIndex[index]] *= this.bonus[index];
        this.purchased[index] = true;

        display.updateUpgrades();
        display.updateHampaita();
      } else if (this.type[index] == "click" && game.totalClicks >= this.requirement[index]) {
        game.hampaita -= this.cost[index];
        game.globalMulti *= this.bonus[index];
        this.purchased[index] = true;

        display.updateUpgrades();
        display.updateHampaita();
      }
    }
  }
}

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
  updateHampaita: function() {
    document.getElementById("hampaita")!.innerHTML = game.hampaita.toLocaleString();
    document.getElementById("hampaitaPerSekunti")!.innerHTML = game.getHampaitaPerSekunti().toFixed(2);
  },
  updatefighter: function() {
    document.getElementById("fighterContainer")!.innerHTML = "";
    for (let i = 0; i < fighter.name.length; i++) {
      if (fighter.unlocked[i]) {
        document.getElementById("fighterContainer")!.innerHTML += '<table class="fighterButton unselectable" onclick="fighter.purchase('+i+')"><tr><td id="image"><img src="./assets/'+fighter.image[i]+'"></td><td id="nameAndCost"><p>'+fighter.name[i]+'</p><p>Power: <span>'+(fighter.power[i] * fighter.level[i]).toFixed(2)+'</span></p><p><span>'+Math.trunc(fighter.cost[i])+'</span> hammasta</p><div id="progressBarContainer"><div id="progressBar" class="progressBar"></div></div></td><td id="amount"><span>'+fighter.level[i]+'</span></td></tr></table>'
      }
    }
  },
  updateUpgrades: function() {
    document.getElementById("upgradeContainer")!.innerHTML = "";
    for (let i = 0; i < upgrade.name.length; i++) {
      if (!upgrade.purchased[i]) {
        if (upgrade.type[i] == "fighter" && fighter.level[upgrade.fighterIndex[i]] >= upgrade.requirement[i]) {
          document.getElementById("upgradeContainer")!.innerHTML += '<img src="./assets/'+upgrade.image[i]+'" title="'+upgrade.name[i]+' &#10; '+upgrade.description[i]+' &#10; ('+upgrade.cost[i]+' hammasta)" onclick="upgrade.purchase('+i+')">';
        } else if (upgrade.type[i] == "click" && game.totalClicks >= upgrade.requirement[i]) {
          document.getElementById("upgradeContainer")!.innerHTML += '<img src="./assets/'+upgrade.image[i]+'" title="'+upgrade.name[i]+' &#10; '+upgrade.description[i]+' &#10; ('+upgrade.cost[i]+' hammasta)" onclick="upgrade.purchase('+i+')">';
        }
      }
    }
  },
  updateAchievement: function() {
    document.getElementById("achievementContainer")!.innerHTML = "";
    /*
    for (let i = 0; i < achievement.name.length; i++) {
      if (achievement.awarded[i]) {
        document.getElementById("achievementContainer")!.innerHTML += '<img src="./assets/'+achievement.image[i]+'" title="'+achievement.name[i]+' &#10; '+achievement.description[i]+'">';
      }
    }
      */
  },
}

function saveGame() {
  let gameSave = {
    hampaita: game.hampaita,
    totalClicks: game.totalClicks,
    version: game.version,
    fighterLevel: fighter.level,
    fighterPower: fighter.power,
    fighterCost: fighter.cost,
    upgradePurchased: upgrade.purchased,
    //achievementAwarded: achievement.awarded
  };
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function loadGame() {
  let gameSave = JSON.parse(localStorage.getItem("gameSave")!)
  if (localStorage.getItem("gameSave") !== null) {
    if (typeof gameSave.hampaita !== undefined) game.hampaita = gameSave.hampaita;
    if (typeof gameSave.totalClicks !== undefined) game.totalClicks = gameSave.totalClicks;
    if (typeof gameSave.fighterLevel !== undefined) {
      for (let i = 0; i < gameSave.fighterLevel.length; i++) {
        fighter.level[i] = gameSave.fighterLevel[i];
      }
    }
    if (typeof gameSave.fighterPower !== undefined) {
      for (let i = 0; i < gameSave.fighterPower.length; i++) {
        fighter.cost[i] = gameSave.fighterPower[i];
      }
    }
    if (typeof gameSave.fighterCost !== undefined) {
      for (let i = 0; i < gameSave.fighterCost.length; i++) {
        fighter.cost[i] = gameSave.fighterCost[i];
      }
    }
    if (typeof gameSave.upgradePurchased !== undefined) {
      for (let i = 0; i < gameSave.upgradePurchased.length; i++) {
        upgrade.purchased[i] = gameSave.upgradePurchased[i];
      }
    }
    /*
    if (typeof gameSave.achievementAwarded !== undefined) {
      for (let i = 0; i < gameSave.achievementAwarded.length; i++) {
        achievement.awarded[i] = gameSave.achievementAwarded[i];
      }
    }
      */
  }
}

function resetGame() {
  localStorage.removeItem("gameSave");
  location.reload();
}

window.onload = function() {
  loadGame();
  fighter.calculatePower();
  display.updateHampaita();
  display.updateUpgrades();
  display.updatefighter();
  display.updateAchievement();
};

setInterval( () => {
  game.hampaita += game.hampaitaPerSekunti / 10;
  display.updateHampaita();
}, 100);

setInterval( () => {
  /*
  for (let i = 0; i < achievement.name.length; i++) {
    if (achievement.type[i] == "click" && game.totalClicks >= achievement.requirement[i]) achievement.earn(i);
    else if (achievement.type[i] == "power" && game.hampaita >= achievement.requirement[i]) achievement.earn(i);
    else if (achievement.type[i] == "fighter" && fighter.level[achievement.objectIndex[i]] >= achievement.requirement[i]) achievement.earn(i);
  }
    */
  display.updateUpgrades();
  display.updateAchievement();
}, 1_000);

setInterval( () => {
  saveGame();
}, 30_000);

setInterval ( () => {
  display.updateHampaita();
  display.updateUpgrades();
}, 10_000);

const clickerBtn = document.getElementById("clicker")as HTMLDivElement;

clickerBtn.addEventListener("click", function() {
  game.totalClicks++;
}, false);

