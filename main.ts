
type Game = {
    version: string
    hampaita: number
    hampaitaPerSekunti: number
    aktiivisiaOttelijoita: number
    maxOttelijat: number
}

type Ottelijat = {
  nimi: string[];
  level: number[];
  hinta: number[];
  totalPower: number[];
  power: number[];
  isUnlocked: boolean[];
  isActive: boolean[];
  mastery: number[];
  progress: number[];
  intervalId: number[];
  xp: number[];
  xpThreshold: number[];
  rank: number[];
  img: string[];
  id: string[];
  eiPiirretty: boolean[];
  step: number[];
  speed: number[];
  pelleCount: number;
  niceGuyCount: number;
  dagestanGoblinCount: number;
  afrikanMafiaCount: number;
  lookingAssCount: number;
  chadCount: number;
  championCount: number;
  totalCount: number;
  stats: {
    wins: number[];
    losses: number[];
    nc: number[];
    winsByKnockout: number[];
    winsBySubmission: number[];
    firstRoundFinishes: number[];
  },
  tags: {
    pelle: boolean[];
    niceGuy: boolean[];
    dagestanGoblin: boolean[];
    afrikanMafia: boolean[];
    lookingAss: boolean[];
    chad: boolean[];
  }
}

type Shop = {
  avaaSatunnainenHinta: number;
  avaaValitsemaHinta: number;
  lisääTrainereitaHinta: number;
}

type Upgrades = {
  nimi: string[];
  kuvaus: string[];
  kuva: string[];
  tyyppi: string[];
  hinta: number[];
  pellet: number[];
  tag: string[];
  vaatimus: number[];
  bonus: number[];
  ostettu: boolean[];
}

let game: Game = {
  version: "0.0.11",
  hampaita: 2,
  hampaitaPerSekunti: 0,
  aktiivisiaOttelijoita: 0,
  maxOttelijat: 1
}

let ottelijat: Ottelijat = {
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
  pelleCount : 0,
  niceGuyCount: 0,
  dagestanGoblinCount: 0,
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
    dagestanGoblin: [
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
}

let shop: Shop = {
  avaaSatunnainenHinta: 1,
  avaaValitsemaHinta: 100,
  lisääTrainereitaHinta: 5
}

let upgrades: Upgrades = {
  nimi: [
    "Pelle Tier 1 Boxerit",
    "Niceguy Tier 1 Boxerit",
    "Dagestangoblin Tier 1 Boxerit",
    "Afrikanmafia Tier 1 Boxerit",
    "Lookingass Tier 1 Boxerit",
    "Chad Tier 1 Boxerit",

    "Pelle Tier 2 Boxerit",
    "Niceguy Tier 2 Boxerit",
    "Dagestangoblin Tier 2 Boxerit",
    "Afrikanmafia Tier 2 Boxerit",
    "Lookingass Tier 2 Boxerit",
    "Chad Tier 2 Boxerit",

    "Pelle Tier 3 Boxerit",
    "Niceguy Tier 3 Boxerit",
    "Dagestangoblin Tier 3 Boxerit",
    "Afrikanmafia Tier 3 Boxerit",
    "Lookingass Tier 3 Boxerit",
    "Chad Tier 3 Boxerit",

    "Pelle Tier 4 Boxerit",
    "Niceguy Tier 4 Boxerit",
    "Dagestangoblin Tier 4 Boxerit",
    "Afrikanmafia Tier 4 Boxerit",
    "Lookingass Tier 4 Boxerit",
    "Chad Tier 4 Boxerit",

    "Pelle Tier 1 Hanskat",
    "Niceguy Tier 1 Hanskat",
    "Dagestangoblin Tier 1 Hanskat",
    "Afrikanmafia Tier 1 Hanskat",
    "Lookingass Tier 1 Hanskat",
    "Chad Tier 1 Hanskat",

    "Pelle Tier 2 Hanskat",
    "Niceguy Tier 2 Hanskat",
    "Dagestangoblin Tier 2 Hanskat",
    "Afrikanmafia Tier 2 Hanskat",
    "Lookingass Tier 2 Hanskat",
    "Chad Tier 2 Hanskat",

    "Pelle Tier 3 Hanskat",
    "Niceguy Tier 3 Hanskat",
    "Dagestangoblin Tier 3 Hanskat",
    "Afrikanmafia Tier 3 Hanskat",
    "Lookingass Tier 3 Hanskat",
    "Chad Tier 3 Hanskat",

    "Pelle Tier 4 Hanskat",
    "Niceguy Tier 4 Hanskat",
    "Dagestangoblin Tier 4 Hanskat",
    "Afrikanmafia Tier 4 Hanskat",
    "Lookingass Tier 4 Hanskat",
    "Chad Tier 4 Hanskat",
  ],
  kuvaus: [
    "Pellet 2x nopeempia",
    "Niceguyt 2x nopeempia",
    "Dagestangoblinit 2x nopeempia",
    "Afrikanmafia 2x nopeempia",
    "Lookingass 2x nopeempia",
    "Chad 2x nopeempia",

    "Pellet 2x nopeempia",
    "Niceguyt 2x nopeempia",
    "Dagestangoblinit 2x nopeempia",
    "Afrikanmafia 2x nopeempia",
    "Lookingass 2x nopeempia",
    "Chad 2x nopeempia",

    "Pellet 2x nopeempia",
    "Niceguyt 2x nopeempia",
    "Dagestangoblinit 2x nopeempia",
    "Afrikanmafia 2x nopeempia",
    "Lookingass 2x nopeempia",
    "Chad 2x nopeempia",

    "Pellet 2x nopeempia",
    "Niceguyt 2x nopeempia",
    "Dagestangoblinit 2x nopeempia",
    "Afrikanmafia 2x nopeempia",
    "Lookingass 2x nopeempia",
    "Chad 2x nopeempia",
    
    "Pellet 2x power",
    "Niceguyt 2x power",
    "Dagestangoblinit 2x power",
    "Afrikanmafia 2x power",
    "Lookingass 2x power",
    "Chad 2x power",

    "Pellet 2x power",
    "Niceguyt 2x power",
    "Dagestangoblinit 2x power",
    "Afrikanmafia 2x power",
    "Lookingass 2x power",
    "Chad 2x power",

    "Pellet 2x power",
    "Niceguyt 2x power",
    "Dagestangoblinit 2x power",
    "Afrikanmafia 2x power",
    "Lookingass 2x power",
    "Chad 2x power",

    "Pellet 2x power",
    "Niceguyt 2x power",
    "Dagestangoblinit 2x power",
    "Afrikanmafia 2x power",
    "Lookingass 2x power",
    "Chad 2x power",
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
    
    1_620,
    1_620,
    1_620,
    1_620,
    1_620,
    1_620,

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
    
    2_160,
    2_160,
    2_160,
    2_160,
    2_160,
    2_160,
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
    "dagestanGoblinit",
    "afrikanMafia",
    "lookingAss",
    "chad",
    
    "pelle",
    "niceGuy",
    "dagestanGoblinit",
    "afrikanMafia",
    "lookingAss",
    "chad",
    
    "pelle",
    "niceGuy",
    "dagestanGoblinit",
    "afrikanMafia",
    "lookingAss",
    "chad",
    
    "pelle",
    "niceGuy",
    "dagestanGoblinit",
    "afrikanMafia",
    "lookingAss",
    "chad",
    
    "pelle",
    "niceGuy",
    "dagestanGoblinit",
    "afrikanMafia",
    "lookingAss",
    "chad",
    
    "pelle",
    "niceGuy",
    "dagestanGoblinit",
    "afrikanMafia",
    "lookingAss",
    "chad",
    
    "pelle",
    "niceGuy",
    "dagestanGoblinit",
    "afrikanMafia",
    "lookingAss",
    "chad",
    
    "pelle",
    "niceGuy",
    "dagestanGoblinit",
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
}

let colbyCovingtonInterval: NodeJS.Timeout | null = null;
let kamaruUsmanInterval: NodeJS.Timeout | null = null;
let shavkatRakhmonovInterval: NodeJS.Timeout | null = null;
let seanOmalleyInterval: NodeJS.Timeout | null = null;
let jonJonesInterval: NodeJS.Timeout | null = null;
let alexanderVolkanovskiInterval: NodeJS.Timeout | null = null;
let alexPereiraInterval: NodeJS.Timeout | null = null;
let islamMakhachevInterval: NodeJS.Timeout | null = null;
let maxHollowayInterval: NodeJS.Timeout | null = null;
let tomAspinallInterval: NodeJS.Timeout | null = null;
let israelAdesanyaInterval: NodeJS.Timeout | null = null;
let charlesOliveiraInterval: NodeJS.Timeout | null = null;

setInterval(() => {
  let totalPower = 0;
  for (let i = 0; i < ottelijat.isUnlocked.length; i++) {
    if (ottelijat.isUnlocked[i] === true) {
      document.getElementById!(ottelijat.id[i] + "Container")!.style.display = "block";
      totalPower += ottelijat.power[i] / 10;
    }
  }
  game.hampaitaPerSekunti = totalPower
  updateUi();
}, 100);

setInterval(() => {
  updateUpgrades();
}, 10_000)

setInterval(() => {
  saveGame();
}, 30_000);

function osta(index: number) {
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
    if (upgrades.tag[index] === "dagestanGoblinit" && ottelijat.dagestanGoblinCount >= upgrades.vaatimus[index]) {
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
  if (game.hampaita >= shop.avaaSatunnainenHinta) {
    game.hampaita -= shop.avaaSatunnainenHinta;
    shop.avaaSatunnainenHinta *= 5;
    //shop.avaaValitsemaHinta *= 1.1;
    //shop.lisääTrainereitaHinta *= 1.1;

    const randomIndex = Math.floor(Math.random() * (ottelijat.isUnlocked.length));
    if (ottelijat.isUnlocked[randomIndex] === false) {
      ottelijat.isUnlocked[randomIndex] = true;
      saveGame();
    } else {
      avaaSatunnainen();
    }
    //window.location.href = "./index.html";
    console.log("Avattu satunnaisesti" + ottelijat.nimi[randomIndex]);
    saveGame();
  }
};

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
    game.maxOttelijat += 1;
    shop.lisääTrainereitaHinta *= 9;
    //shop.avaaSatunnainenHinta *= 1.1;
    //shop.lisääTrainereitaHinta *= 1.1;
    saveGame();
  }
}

function updateUi() {
  colbyCovingtonXp!.innerHTML = ottelijat.xp[0].toFixed(0).toLocaleString();
  colbyCovingtonXpThreshold!.innerHTML = ottelijat.xpThreshold[0].toFixed(0).toLocaleString();
  colbyCovingtonLevel!.innerHTML = ottelijat.level[0].toFixed(0).toLocaleString();
  colbyCovingtonPower!.innerHTML = ottelijat.power[0].toFixed(0).toLocaleString();
  colbyCovingtonSpeed!.innerHTML = ottelijat.speed[0].toFixed(0).toLocaleString();
  
  kamaruUsmanXp!.innerHTML = ottelijat.xp[1].toFixed(0).toLocaleString();
  kamaruUsmanXpThreshold!.innerHTML = ottelijat.xpThreshold[1].toFixed(0).toLocaleString();
  kamaruUsmanLevel!.innerHTML = ottelijat.level[1].toFixed(0).toLocaleString();
  kamaruUsmanPower!.innerHTML = ottelijat.power[1].toFixed(0).toLocaleString();
  kamaruUsmanSpeed!.innerHTML = ottelijat.speed[1].toFixed(0).toLocaleString();

  shavkatRakhmonovXp!.innerHTML = ottelijat.xp[2].toFixed(0).toLocaleString();
  shavkatRakhmonovXpThreshold!.innerHTML = ottelijat.xpThreshold[2].toFixed(0).toLocaleString();
  shavkatRakhmonovLevel!.innerHTML = ottelijat.level[2].toFixed(0).toLocaleString();
  shavkatRakhmonovPower!.innerHTML = ottelijat.power[2].toFixed(0).toLocaleString();
  shavkatRakhmonovSpeed!.innerHTML = ottelijat.speed[2].toFixed(0).toLocaleString();
  
  seanOmalleyXp!.innerHTML = ottelijat.xp[3].toFixed(0).toLocaleString();
  seanOmalleyXpThreshold!.innerHTML = ottelijat.xpThreshold[3].toFixed(0).toLocaleString();
  seanOmalleyLevel!.innerHTML = ottelijat.level[3].toFixed(0).toLocaleString();
  seanOmalleyPower!.innerHTML = ottelijat.power[3].toFixed(0).toLocaleString();
  seanOmalleySpeed!.innerHTML = ottelijat.speed[3].toFixed(0).toLocaleString();

  jonJonesXp!.innerHTML = ottelijat.xp[4].toFixed(0).toLocaleString();
  jonJonesXpThreshold!.innerHTML = ottelijat.xpThreshold[4].toFixed(0).toLocaleString();
  jonJonesLevel!.innerHTML = ottelijat.level[4].toFixed(0).toLocaleString();
  jonJonesPower!.innerHTML = ottelijat.power[4].toFixed(0).toLocaleString();
  jonJonesSpeed!.innerHTML = ottelijat.speed[4].toFixed(0).toLocaleString();

  alexanderVolkanovskiXp!.innerHTML = ottelijat.xp[5].toFixed(0).toLocaleString();
  alexanderVolkanovskiXpThreshold!.innerHTML = ottelijat.xpThreshold[5].toFixed(0).toLocaleString();
  alexanderVolkanovskiLevel!.innerHTML = ottelijat.level[5].toFixed(0).toLocaleString();
  alexanderVolkanovskiPower!.innerHTML = ottelijat.power[5].toFixed(0).toLocaleString();
  alexanderVolkanovskiSpeed!.innerHTML = ottelijat.speed[5].toFixed(0).toLocaleString();

  alexPereiraXp!.innerHTML = ottelijat.xp[6].toFixed(0).toLocaleString();
  alexPereiraXpThreshold!.innerHTML = ottelijat.xpThreshold[6].toFixed(0).toLocaleString();
  alexPereiraLevel!.innerHTML = ottelijat.level[6].toFixed(0).toLocaleString();
  alexPereiraPower!.innerHTML = ottelijat.power[6].toFixed(0).toLocaleString();
  alexPereiraSpeed!.innerHTML = ottelijat.speed[6].toFixed(0).toLocaleString();

  islamMakhachevXp!.innerHTML = ottelijat.xp[7].toFixed(0).toLocaleString();
  islamMakhachevXpThreshold!.innerHTML = ottelijat.xpThreshold[7].toFixed(0).toLocaleString();
  islamMakhachevLevel!.innerHTML = ottelijat.level[7].toFixed(0).toLocaleString();
  islamMakhachevPower!.innerHTML = ottelijat.power[7].toFixed(0).toLocaleString();
  islamMakhachevSpeed!.innerHTML = ottelijat.speed[7].toFixed(0).toLocaleString();

  maxHollowayXp!.innerHTML = ottelijat.xp[8].toFixed(0).toLocaleString();
  maxHollowayXpThreshold!.innerHTML = ottelijat.xpThreshold[8].toFixed(0).toLocaleString();
  maxHollowayLevel!.innerHTML = ottelijat.level[8].toFixed(0).toLocaleString();
  maxHollowayPower!.innerHTML = ottelijat.power[8].toFixed(0).toLocaleString();
  maxHollowaySpeed!.innerHTML = ottelijat.speed[8].toFixed(0).toLocaleString();

  tomAspinallXp!.innerHTML = ottelijat.xp[9].toFixed(0).toLocaleString();
  tomAspinallXpThreshold!.innerHTML = ottelijat.xpThreshold[9].toFixed(0).toLocaleString();
  tomAspinallLevel!.innerHTML = ottelijat.level[9].toFixed(0).toLocaleString();
  tomAspinallPower!.innerHTML = ottelijat.power[9].toFixed(0).toLocaleString();
  tomAspinallSpeed!.innerHTML = ottelijat.speed[9].toFixed(0).toLocaleString();

  israelAdesanyaXp!.innerHTML = ottelijat.xp[10].toFixed(0).toLocaleString();
  israelAdesanyaXpThreshold!.innerHTML = ottelijat.xpThreshold[10].toFixed(0).toLocaleString();
  israelAdesanyaLevel!.innerHTML = ottelijat.level[10].toFixed(0).toLocaleString();
  israelAdesanyaPower!.innerHTML = ottelijat.power[10].toFixed(0).toLocaleString();
  israelAdesanyaSpeed!.innerHTML = ottelijat.speed[10].toFixed(0).toLocaleString();

  charlesOliveiraXp!.innerHTML = ottelijat.xp[11].toFixed(0).toLocaleString();
  charlesOliveiraXpThreshold!.innerHTML = ottelijat.xpThreshold[11].toFixed(0).toLocaleString();
  charlesOliveiraLevel!.innerHTML = ottelijat.level[11].toFixed(0).toLocaleString();
  charlesOliveiraPower!.innerHTML = ottelijat.power[11].toFixed(0).toLocaleString();
  charlesOliveiraSpeed!.innerHTML = ottelijat.speed[11].toFixed(0).toLocaleString();

  hampaita!.innerHTML = game.hampaita.toFixed(0).toLocaleString();
  hampaitaPerSekuntiElement!.innerHTML = game.hampaitaPerSekunti.toFixed(0).toLocaleString();
  avaaSatunnainenHinta!.innerHTML = shop.avaaSatunnainenHinta.toFixed(0).toLocaleString();
  lisääTrainereitaHinta!.innerHTML = shop.lisääTrainereitaHinta.toFixed(0).toLocaleString();
  //avaaValitsemaHinta!.innerHTML = shop.avaaValitsemaHinta.toFixed(0).toLocaleString();
}

function updateUpgrades() {
  document.getElementById("upgradeContainer")!.innerHTML = "";
  for (let i = 0; i < upgrades.nimi.length; i++) {
    if (!upgrades.ostettu[i]) {
      if (upgrades.tag[i] == "pelle" && ottelijat.pelleCount >= upgrades.vaatimus[i]) {
        document.getElementById("upgradeContainer")!.innerHTML += '<img draggable="false" src="./assets/'+upgrades.kuva[i]+'" title="'+upgrades.nimi[i]+' &#10; '+upgrades.kuvaus[i]+' &#10; ('+upgrades.hinta[i]+' hammasta)" onclick="osta('+i+')">'; + upgrades.nimi[i]+'">';
      }
      if (upgrades.tag[i] == "niceGuy" && ottelijat.niceGuyCount >= upgrades.vaatimus[i]) {
        document.getElementById("upgradeContainer")!.innerHTML += '<img draggable="false" src="./assets/'+upgrades.kuva[i]+'" title="'+upgrades.nimi[i]+' &#10; '+upgrades.kuvaus[i]+' &#10; ('+upgrades.hinta[i]+' hammasta)" onclick="osta('+i+')">'; + upgrades.nimi[i]+'">';
      }
      if (upgrades.tag[i] == "dagestanGoblinit" && ottelijat.dagestanGoblinCount >= upgrades.vaatimus[i]) {
        document.getElementById("upgradeContainer")!.innerHTML += '<img draggable="false" src="./assets/'+upgrades.kuva[i]+'" title="'+upgrades.nimi[i]+' &#10; '+upgrades.kuvaus[i]+' &#10; ('+upgrades.hinta[i]+' hammasta)" onclick="osta('+i+')">'; + upgrades.nimi[i]+'">';
      }
      if (upgrades.tag[i] == "afrikanMafia" && ottelijat.afrikanMafiaCount >= upgrades.vaatimus[i]) {
        document.getElementById("upgradeContainer")!.innerHTML += '<img draggable="false" src="./assets/'+upgrades.kuva[i]+'" title="'+upgrades.nimi[i]+' &#10; '+upgrades.kuvaus[i]+' &#10; ('+upgrades.hinta[i]+' hammasta)" onclick="osta('+i+')">'; + upgrades.nimi[i]+'">';
      }
      if (upgrades.tag[i] == "lookingAss" && ottelijat.lookingAssCount >= upgrades.vaatimus[i]) {
        document.getElementById("upgradeContainer")!.innerHTML += '<img draggable="false" src="./assets/'+upgrades.kuva[i]+'" title="'+upgrades.nimi[i]+' &#10; '+upgrades.kuvaus[i]+' &#10; ('+upgrades.hinta[i]+' hammasta)" onclick="osta('+i+')">'; + upgrades.nimi[i]+'">';
      }
      if (upgrades.tag[i] == "chad" && ottelijat.chadCount >= upgrades.vaatimus[i]) {
        document.getElementById("upgradeContainer")!.innerHTML += '<img draggable="false" src="./assets/'+upgrades.kuva[i]+'" title="'+upgrades.nimi[i]+' &#10; '+upgrades.kuvaus[i]+' &#10; ('+upgrades.hinta[i]+' hammasta)" onclick="osta('+i+')">'; + upgrades.nimi[i]+'">';
      }
    }
  }
}

function saveGame() {
    console.log("Saving game");
    const gameSave = {
        game: game,
        ottelijat: ottelijat,
        shop: shop,
        upgrades: upgrades
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function loadGame() {
  const gameSave = localStorage.getItem("gameSave");
  if (gameSave === null) {
    console.error("No game save found");
    return;
  }
  const parsedGameSave = JSON.parse(gameSave);

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

const hampaita = document.getElementById('hampaita') as HTMLElement;
const hampaitaPerSekuntiElement = document.getElementById('hampaitaPerSekunti') as HTMLElement;
const save = document.getElementById('save') as HTMLElement;
//const load = document.getElementById('load') as HTMLElement;
const reset = document.getElementById('reset') as HTMLElement;

const shopElement = document.getElementById('shop') as HTMLElement;
const shopItems = Array.from(document.querySelectorAll('.shopItem')) as HTMLElement[];
const avaaSatunnainenElement = document.getElementById('avaaSatunnainen') as HTMLElement;
const avaaSatunnainenHinta = document.getElementById('avaaSatunnainenHinta') as HTMLElement;
//const avaaValitsemaElement = document.getElementById('avaaValitsema') as HTMLElement;
//const avaaValitsemaHinta = document.getElementById('avaaValitsemaHinta');
const lisääTrainereitaElement = document.getElementById('lisääTrainereita') as HTMLElement;
const lisääTrainereitaHinta = document.getElementById('lisääTrainereitaHinta') as HTMLElement;

const colbyCovington = document.getElementById("colbyCovington") as HTMLElement;
const colbyCovingtonXp = document.getElementById('colbyCovingtonXp') as HTMLElement;
const colbyCovingtonXpThreshold = document.getElementById('colbyCovingtonXpThreshold') as HTMLElement;
const colbyCovingtonLevel = document.getElementById('colbyCovingtonLevel') as HTMLElement;
const colbyCovingtonPower = document.getElementById('colbyCovingtonPower') as HTMLElement;
const colbyCovingtonSpeed = document.getElementById('colbyCovingtonSpeed') as HTMLElement;

const kamaruUsman = document.getElementById("kamaruUsman") as HTMLElement;
const kamaruUsmanXp = document.getElementById('kamaruUsmanXp') as HTMLElement;
const kamaruUsmanXpThreshold = document.getElementById('kamaruUsmanXpThreshold') as HTMLElement;
const kamaruUsmanLevel = document.getElementById('kamaruUsmanLevel') as HTMLElement;
const kamaruUsmanPower = document.getElementById('kamaruUsmanPower') as HTMLElement;
const kamaruUsmanSpeed = document.getElementById('kamaruUsmanSpeed') as HTMLElement;

const shavkatRakhmonov = document.getElementById("shavkatRakhmonov") as HTMLElement;
const shavkatRakhmonovXp = document.getElementById('shavkatRakhmonovXp') as HTMLElement;
const shavkatRakhmonovXpThreshold = document.getElementById('shavkatRakhmonovXpThreshold') as HTMLElement;
const shavkatRakhmonovLevel = document.getElementById('shavkatRakhmonovLevel') as HTMLElement;
const shavkatRakhmonovPower = document.getElementById('shavkatRakhmonovPower') as HTMLElement;
const shavkatRakhmonovSpeed = document.getElementById('shavkatRakhmonovSpeed') as HTMLElement;

const seanOmalley = document.getElementById("seanOmalley") as HTMLElement;
const seanOmalleyXp = document.getElementById('seanOmalleyXp') as HTMLElement;
const seanOmalleyXpThreshold = document.getElementById('seanOmalleyXpThreshold') as HTMLElement;
const seanOmalleyLevel = document.getElementById('seanOmalleyLevel') as HTMLElement;
const seanOmalleyPower = document.getElementById('seanOmalleyPower') as HTMLElement;
const seanOmalleySpeed = document.getElementById('seanOmalleySpeed') as HTMLElement;

const jonJones = document.getElementById("jonJones") as HTMLElement;
const jonJonesXp = document.getElementById('jonJonesXp') as HTMLElement;
const jonJonesXpThreshold = document.getElementById('jonJonesXpThreshold') as HTMLElement;
const jonJonesLevel = document.getElementById('jonJonesLevel') as HTMLElement;
const jonJonesPower = document.getElementById('jonJonesPower') as HTMLElement;
const jonJonesSpeed = document.getElementById('jonJonesSpeed') as HTMLElement;

const alexanderVolkanovski = document.getElementById("alexanderVolkanovski") as HTMLElement;
const alexanderVolkanovskiXp = document.getElementById('alexanderVolkanovskiXp') as HTMLElement;
const alexanderVolkanovskiXpThreshold = document.getElementById('alexanderVolkanovskiXpThreshold') as HTMLElement;
const alexanderVolkanovskiLevel = document.getElementById('alexanderVolkanovskiLevel') as HTMLElement;
const alexanderVolkanovskiPower = document.getElementById('alexanderVolkanovskiPower') as HTMLElement;
const alexanderVolkanovskiSpeed = document.getElementById('alexanderVolkanovskiSpeed') as HTMLElement;

const alexPereira = document.getElementById("alexPereira") as HTMLElement;
const alexPereiraXp = document.getElementById('alexPereiraXp') as HTMLElement;
const alexPereiraXpThreshold = document.getElementById('alexPereiraXpThreshold') as HTMLElement;
const alexPereiraLevel = document.getElementById('alexPereiraLevel') as HTMLElement;
const alexPereiraPower = document.getElementById('alexPereiraPower') as HTMLElement;
const alexPereiraSpeed = document.getElementById('alexPereiraSpeed') as HTMLElement;

const islamMakhachev = document.getElementById("islamMakhachev") as HTMLElement;
const islamMakhachevXp = document.getElementById('islamMakhachevXp') as HTMLElement;
const islamMakhachevXpThreshold = document.getElementById('islamMakhachevXpThreshold') as HTMLElement;
const islamMakhachevLevel = document.getElementById('islamMakhachevLevel') as HTMLElement;
const islamMakhachevPower = document.getElementById('islamMakhachevPower') as HTMLElement;
const islamMakhachevSpeed = document.getElementById('islamMakhachevSpeed') as HTMLElement;

const maxHolloway = document.getElementById("maxHolloway") as HTMLElement;
const maxHollowayXp = document.getElementById('maxHollowayXp') as HTMLElement;
const maxHollowayXpThreshold = document.getElementById('maxHollowayXpThreshold') as HTMLElement;
const maxHollowayLevel = document.getElementById('maxHollowayLevel') as HTMLElement;
const maxHollowayPower = document.getElementById('maxHollowayPower') as HTMLElement;
const maxHollowaySpeed = document.getElementById('maxHollowaySpeed') as HTMLElement;

const tomAspinall = document.getElementById("tomAspinall") as HTMLElement;
const tomAspinallXp = document.getElementById('tomAspinallXp') as HTMLElement;
const tomAspinallXpThreshold = document.getElementById('tomAspinallXpThreshold') as HTMLElement;
const tomAspinallLevel = document.getElementById('tomAspinallLevel') as HTMLElement;
const tomAspinallPower = document.getElementById('tomAspinallPower') as HTMLElement;
const tomAspinallSpeed = document.getElementById('tomAspinallSpeed') as HTMLElement;

const israelAdesanya = document.getElementById("israelAdesanya") as HTMLElement;
const israelAdesanyaXp = document.getElementById('israelAdesanyaXp') as HTMLElement;
const israelAdesanyaXpThreshold = document.getElementById('israelAdesanyaXpThreshold') as HTMLElement;
const israelAdesanyaLevel = document.getElementById('israelAdesanyaLevel') as HTMLElement;
const israelAdesanyaPower = document.getElementById('israelAdesanyaPower') as HTMLElement;
const israelAdesanyaSpeed = document.getElementById('israelAdesanyaSpeed') as HTMLElement;

const charlesOliveira = document.getElementById("charlesOliveira") as HTMLElement;
const charlesOliveiraXp = document.getElementById('charlesOliveiraXp') as HTMLElement;
const charlesOliveiraXpThreshold = document.getElementById('charlesOliveiraXpThreshold') as HTMLElement;
const charlesOliveiraLevel = document.getElementById('charlesOliveiraLevel') as HTMLElement
const charlesOliveiraPower = document.getElementById('charlesOliveiraPower') as HTMLElement;
const charlesOliveiraSpeed = document.getElementById('charlesOliveiraSpeed') as HTMLElement;

shopElement!.addEventListener("click", (() => {
  shopItems.forEach(item => {
    item.style.display = item.style.display === 'none' ? 'block' : 'none';
  });
}));

colbyCovington!.addEventListener("click", (() => {
  if (!colbyCovingtonInterval) {
    if (game.maxOttelijat > game.aktiivisiaOttelijoita) {
      game.aktiivisiaOttelijoita++;
      colbyCovingtonInterval = setInterval(() => {
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
            };
          game.hampaita += ottelijat.power[0];
          updateUi();
          } else {
            ottelijat.progress[0] += ottelijat.step[0]
            document.getElementById('colbyCovingtonBar')!.style.width = `${ottelijat.progress[0]}%`
            }
        }, 10);
        updateUi();
      }
    } else {
      clearInterval(colbyCovingtonInterval);
      colbyCovingtonInterval = null;
      game.aktiivisiaOttelijoita--;
    }
}));

kamaruUsman!.addEventListener("click", (() => {
  if (!kamaruUsmanInterval) {
    if (game.maxOttelijat > game.aktiivisiaOttelijoita) {
      game.aktiivisiaOttelijoita++;
      kamaruUsmanInterval = setInterval(() => {
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
            };
          game.hampaita += ottelijat.power[0];
          updateUi();
          } else {
            ottelijat.progress[1] += ottelijat.step[1]
            document.getElementById('kamaruUsmanBar')!.style.width = `${ottelijat.progress[1]}%`
            }
        }, 10);
        updateUi();
      }
    } else {
      clearInterval(kamaruUsmanInterval);
      kamaruUsmanInterval = null;
      game.aktiivisiaOttelijoita--;
    }
}));

shavkatRakhmonov!.addEventListener("click", (() => {
  if (!shavkatRakhmonovInterval) {
    if (game.maxOttelijat > game.aktiivisiaOttelijoita) {
      game.aktiivisiaOttelijoita++;
      shavkatRakhmonovInterval = setInterval(() => {
        if (ottelijat.progress[2] >= 100) {
          ottelijat.progress[2] = 0;
          ottelijat.xp[2] += 1;
          updateUi();
          if (ottelijat.xp[2] >= ottelijat.xpThreshold[2]) {
            ottelijat.xp[2] = 0;
            ottelijat.xpThreshold[2] *= 1.2;
            ottelijat.level[2] += 1;
            ottelijat.dagestanGoblinCount++;
            ottelijat.chadCount++;
            ottelijat.totalCount++;
            updateUpgrades();
            };
          game.hampaita += ottelijat.power[0];
          updateUi();
          } else {
            ottelijat.progress[2] += ottelijat.step[2]
            document.getElementById('shavkatRakhmonovBar')!.style.width = `${ottelijat.progress[2]}%`
            }
        }, 10);
        updateUi();
      }
    } else {
      clearInterval(shavkatRakhmonovInterval);
      shavkatRakhmonovInterval = null;
      game.aktiivisiaOttelijoita--;
    }
}));

seanOmalley!.addEventListener("click", (() => {
  if (!seanOmalleyInterval) {
    if (game.maxOttelijat > game.aktiivisiaOttelijoita) {
      game.aktiivisiaOttelijoita++;
      seanOmalleyInterval = setInterval(() => {
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
            };
          game.hampaita += ottelijat.power[3];
          updateUi();
          } else {
            ottelijat.progress[3] += ottelijat.step[3]
            document.getElementById('seanOmalleyBar')!.style.width = `${ottelijat.progress[3]}%`
            }
        }, 10);
        updateUi();
      }
    } else {
      clearInterval(seanOmalleyInterval);
      seanOmalleyInterval = null;
      game.aktiivisiaOttelijoita--;
    }
}));

jonJones!.addEventListener("click", (() => {
  if (!jonJonesInterval) {
    if (game.maxOttelijat > game.aktiivisiaOttelijoita) {
      game.aktiivisiaOttelijoita++;
      jonJonesInterval = setInterval(() => {
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
            };
          game.hampaita += ottelijat.power[4];
          updateUi();
          } else {
            ottelijat.progress[4] += ottelijat.step[4]
            document.getElementById('jonJonesBar')!.style.width = `${ottelijat.progress[4]}%`
            }
        }, 10);
        updateUi();
      }
    } else {
      clearInterval(jonJonesInterval);
      jonJonesInterval = null;
      game.aktiivisiaOttelijoita--;
    }
}));

alexanderVolkanovski!.addEventListener("click", (() => {
  if (!alexanderVolkanovskiInterval) {
    if (game.maxOttelijat > game.aktiivisiaOttelijoita) {
      game.aktiivisiaOttelijoita++;
      alexanderVolkanovskiInterval = setInterval(() => {
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
            };
          game.hampaita += ottelijat.power[5];
          updateUi();
          } else {
            ottelijat.progress[5] += ottelijat.step[5]
            document.getElementById('alexanderVolkanovskiBar')!.style.width = `${ottelijat.progress[5]}%`
            }
        }, 10);
        updateUi();
      }
    } else {
      clearInterval(alexanderVolkanovskiInterval);
      alexanderVolkanovskiInterval = null;
      game.aktiivisiaOttelijoita--;
    }
}));

alexPereira!.addEventListener("click", (() => {
  if (!alexPereiraInterval) {
    if (game.maxOttelijat > game.aktiivisiaOttelijoita) {
      game.aktiivisiaOttelijoita++;
      alexPereiraInterval = setInterval(() => {
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
            };
          game.hampaita += ottelijat.power[6];
          updateUi();
          } else {
            ottelijat.progress[6] += ottelijat.step[6]
            document.getElementById('alexPereiraBar')!.style.width = `${ottelijat.progress[6]}%`
            }
        }, 10);
        updateUi();
      }
    } else {
      clearInterval(alexPereiraInterval);
      alexPereiraInterval = null;
      game.aktiivisiaOttelijoita--;
    }
}));

islamMakhachev!.addEventListener("click", (() => {
  if (!islamMakhachevInterval) {
    if (game.maxOttelijat > game.aktiivisiaOttelijoita) {
      game.aktiivisiaOttelijoita++;
      islamMakhachevInterval = setInterval(() => {
        if (ottelijat.progress[7] >= 100) {
          ottelijat.progress[7] = 0;
          ottelijat.xp[7] += 1;
          updateUi();
          if (ottelijat.xp[7] >= ottelijat.xpThreshold[7]) {
            ottelijat.xp[7] = 0;
            ottelijat.xpThreshold[7] *= 1.2;
            ottelijat.level[7] += 1;
            ottelijat.dagestanGoblinCount++;
            ottelijat.lookingAssCount++;
            ottelijat.championCount++;
            ottelijat.totalCount++;
            updateUpgrades();
            };
          game.hampaita += ottelijat.power[7];
          updateUi();
          } else {
            ottelijat.progress[7] += ottelijat.step[7]
            document.getElementById('islamMakhachevBar')!.style.width = `${ottelijat.progress[7]}%`
            }
        }, 10);
        updateUi();
      }
    } else {
      clearInterval(islamMakhachevInterval);
      islamMakhachevInterval = null;
      game.aktiivisiaOttelijoita--;
    }
}));

maxHolloway!.addEventListener("click", (() => {
  if (!maxHollowayInterval) {
    if (game.maxOttelijat > game.aktiivisiaOttelijoita) {
      game.aktiivisiaOttelijoita++;
      maxHollowayInterval = setInterval(() => {
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
            };
          game.hampaita += ottelijat.power[8];
          updateUi();
          } else {
            ottelijat.progress[8] += ottelijat.step[8]
            document.getElementById('maxHollowayBar')!.style.width = `${ottelijat.progress[8]}%`
            }
        }, 10);
        updateUi();
      }
    } else {
      clearInterval(maxHollowayInterval);
      maxHollowayInterval = null;
      game.aktiivisiaOttelijoita--;
    }
}));

tomAspinall!.addEventListener("click", (() => {
  if (!tomAspinallInterval) {
    if (game.maxOttelijat > game.aktiivisiaOttelijoita) {
      game.aktiivisiaOttelijoita++;
      tomAspinallInterval = setInterval(() => {
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
            };
          game.hampaita += ottelijat.power[9];
          updateUi();
          } else {
            ottelijat.progress[9] += ottelijat.step[9]
            document.getElementById('tomAspinallBar')!.style.width = `${ottelijat.progress[9]}%`
            }
        }, 10);
        updateUi();
      }
    } else {
      clearInterval(tomAspinallInterval);
      tomAspinallInterval = null;
      game.aktiivisiaOttelijoita--;
    }
}));

israelAdesanya!.addEventListener("click", (() => {
  if (!israelAdesanyaInterval) {
    if (game.maxOttelijat > game.aktiivisiaOttelijoita) {
      game.aktiivisiaOttelijoita++;
      israelAdesanyaInterval = setInterval(() => {
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
            };
          game.hampaita += ottelijat.power[10];
          updateUi();
          } else {
            ottelijat.progress[10] += ottelijat.step[10]
            document.getElementById('israelAdesanyaBar')!.style.width = `${ottelijat.progress[10]}%`
            }
        }, 10);
        updateUi();
      }
    } else {
      clearInterval(israelAdesanyaInterval);
      israelAdesanyaInterval = null;
      game.aktiivisiaOttelijoita--;
    }
}));

charlesOliveira!.addEventListener("click", (() => {
  if (!charlesOliveiraInterval) {
    if (game.maxOttelijat > game.aktiivisiaOttelijoita) {
      game.aktiivisiaOttelijoita++;
      charlesOliveiraInterval = setInterval(() => {
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
            };
          game.hampaita += ottelijat.power[11];
          updateUi();
          } else {
            ottelijat.progress[11] += ottelijat.step[11]
            document.getElementById('charlesOliveiraBar')!.style.width = `${ottelijat.progress[11]}%`
            }
        }, 10);
        updateUi();
      }
    } else {
      clearInterval(charlesOliveiraInterval);
      charlesOliveiraInterval = null;
      game.aktiivisiaOttelijoita--;
    }
}));

save!.addEventListener("click", (() => {
  saveGame();
}));

/*load!.addEventListener("click", (() => {
  loadGame();
}));*/

reset!.addEventListener("click", (() => {
  resetGame();
}));

avaaSatunnainenElement!.addEventListener("click", (() => {
  avaaSatunnainen();
  updateUi();
}));

/*avaaValitsemaElement!.addEventListener("click", (() => {
  avaaValitsema();
}));*/

lisääTrainereitaElement!.addEventListener("click", (() => {
  lisääTrainereita();
}));

window.onload = function() {
  updateUpgrades();
  loadGame();
  game.aktiivisiaOttelijoita = 0;
  //updateUi();
}