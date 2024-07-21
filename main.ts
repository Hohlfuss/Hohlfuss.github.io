

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
    progressBarElement: any;
    step: number[];
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
}

let game: Game = {
    version: "0.0.5",
    hampaita: 0,
    hampaitaPerSekunti: 0,
    aktiivisiaOttelijoita: 0,
    maxOttelijat: 2
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
        true,
        false,
        false,
        false,
        false,
        false,
        false
      ]
    }
}

let shop: Shop = {
    avaaSatunnainenHinta: 10,
    avaaValitsemaHinta: 100
}

const hampaita = document.getElementById('hampaita');
const hampaitaPerSekuntiElement = document.getElementById('hampaitaPerSekunti');
const save = document.getElementById('save');
const load = document.getElementById('load');
const reset = document.getElementById('reset');

const shopElement = document.getElementById('shop');
const shopItems = Array.from(document.querySelectorAll('.shopItem')) as HTMLElement[];
const avaaSatunnainenElement = document.getElementById('avaaSatunnainen');
const avaaSatunnainenHinta = document.getElementById('avaaSatunnainenHinta');
const avaaValitsemaElement = document.getElementById('avaaValitsema');
//const avaaValitsemaHinta = document.getElementById('avaaValitsemaHinta');

const colbyCovington = document.getElementById("colbyCovington");
const colbyCovingtonXp = document.getElementById('colbyCovingtonXp');
const colbyCovingtonXpThreshold = document.getElementById('colbyCovingtonXpThreshold');
const colbyCovingtonLevel = document.getElementById('colbyCovingtonLevel');

const kamaruUsman = document.getElementById("kamaruUsman");
const kamaruUsmanXp = document.getElementById('kamaruUsmanXp');
const kamaruUsmanXpThreshold = document.getElementById('kamaruUsmanXpThreshold');
const kamaruUsmanLevel = document.getElementById('kamaruUsmanLevel');

const shavkatRakhmonov = document.getElementById("shavkatRakhmonov");
const shavkatRakhmonovXp = document.getElementById('shavkatRakhmonovXp');
const shavkatRakhmonovXpThreshold = document.getElementById('shavkatRakhmonovXpThreshold');
const shavkatRakhmonovLevel = document.getElementById('shavkatRakhmonovLevel');

const seanOmalley = document.getElementById("seanOmalley");
const seanOmalleyXp = document.getElementById('seanOmalleyXp');
const seanOmalleyXpThreshold = document.getElementById('seanOmalleyXpThreshold');
const seanOmalleyLevel = document.getElementById('seanOmalleyLevel');

const jonJones = document.getElementById("jonJones");
const jonJonesXp = document.getElementById('jonJonesXp');
const jonJonesXpThreshold = document.getElementById('jonJonesXpThreshold');
const jonJonesLevel = document.getElementById('jonJonesLevel');

const alexanderVolkanovski = document.getElementById("alexanderVolkanovski");
const alexanderVolkanovskiXp = document.getElementById('alexanderVolkanovskiXp');
const alexanderVolkanovskiXpThreshold = document.getElementById('alexanderVolkanovskiXpThreshold');
const alexanderVolkanovskiLevel = document.getElementById('alexanderVolkanovskiLevel');

const alexPereira = document.getElementById("alexPereira");
const alexPereiraXp = document.getElementById('alexPereiraXp');
const alexPereiraXpThreshold = document.getElementById('alexPereiraXpThreshold');
const alexPereiraLevel = document.getElementById('alexPereiraLevel');

const islamMakhachev = document.getElementById("islamMakhachev");
const islamMakhachevXp = document.getElementById('islamMakhachevXp');
const islamMakhachevXpThreshold = document.getElementById('islamMakhachevXpThreshold');
const islamMakhachevLevel = document.getElementById('islamMakhachevLevel');

const maxHolloway = document.getElementById("maxHolloway");
const maxHollowayXp = document.getElementById('maxHollowayXp');
const maxHollowayXpThreshold = document.getElementById('maxHollowayXpThreshold');
const maxHollowayLevel = document.getElementById('maxHollowayLevel');

const tomAspinall = document.getElementById("tomAspinall");
const tomAspinallXp = document.getElementById('tomAspinallXp');
const tomAspinallXpThreshold = document.getElementById('tomAspinallXpThreshold');
const tomAspinallLevel = document.getElementById('tomAspinallLevel');

const israelAdesanya = document.getElementById("israelAdesanya");
const israelAdesanyaXp = document.getElementById('israelAdesanyaXp');
const israelAdesanyaXpThreshold = document.getElementById('israelAdesanyaXpThreshold');
const israelAdesanyaLevel = document.getElementById('israelAdesanyaLevel');

const charlesOliveira = document.getElementById("charlesOliveira");
const charlesOliveiraXp = document.getElementById('charlesOliveiraXp');
const charlesOliveiraXpThreshold = document.getElementById('charlesOliveiraXpThreshold');
const charlesOliveiraLevel = document.getElementById('charlesOliveiraLevel');

let colbyCovingtonInterval: NodeJS.Timer | null = null;
let kamaruUsmanInterval: NodeJS.Timer | null = null;
let shavkatRakhmonovInterval: NodeJS.Timer | null = null;
let seanOmalleyInterval: NodeJS.Timer | null = null;
let jonJonesInterval: NodeJS.Timer | null = null;
let alexanderVolkanovskiInterval: NodeJS.Timer | null = null;
let alexPereiraInterval: NodeJS.Timer | null = null;
let islamMakhachevInterval: NodeJS.Timer | null = null;
let maxHollowayInterval: NodeJS.Timer | null = null;
let tomAspinallInterval: NodeJS.Timer | null = null;
let israelAdesanyaInterval: NodeJS.Timer | null = null;
let charlesOliveiraInterval: NodeJS.Timer | null = null;

function updateUi() {
    colbyCovingtonXp!.innerHTML = ottelijat.xp[0].toFixed(0).toLocaleString();
    colbyCovingtonXpThreshold!.innerHTML = ottelijat.xpThreshold[0].toFixed(0).toLocaleString();
    colbyCovingtonLevel!.innerHTML = ottelijat.level[0].toFixed(0).toLocaleString();
    
    kamaruUsmanXp!.innerHTML = ottelijat.xp[1].toFixed(0).toLocaleString();
    kamaruUsmanXpThreshold!.innerHTML = ottelijat.xpThreshold[1].toFixed(0).toLocaleString();
    kamaruUsmanLevel!.innerHTML = ottelijat.level[1].toFixed(0).toLocaleString();

    shavkatRakhmonovXp!.innerHTML = ottelijat.xp[2].toFixed(0).toLocaleString();
    shavkatRakhmonovXpThreshold!.innerHTML = ottelijat.xpThreshold[2].toFixed(0).toLocaleString();
    shavkatRakhmonovLevel!.innerHTML = ottelijat.level[2].toFixed(0).toLocaleString();
    
    seanOmalleyXp!.innerHTML = ottelijat.xp[3].toFixed(0).toLocaleString();
    seanOmalleyXpThreshold!.innerHTML = ottelijat.xpThreshold[3].toFixed(0).toLocaleString();
    seanOmalleyLevel!.innerHTML = ottelijat.level[3].toFixed(0).toLocaleString();
  
    jonJonesXp!.innerHTML = ottelijat.xp[4].toFixed(0).toLocaleString();
    jonJonesXpThreshold!.innerHTML = ottelijat.xpThreshold[4].toFixed(0).toLocaleString();
    jonJonesLevel!.innerHTML = ottelijat.level[4].toFixed(0).toLocaleString();

    alexanderVolkanovskiXp!.innerHTML = ottelijat.xp[5].toFixed(0).toLocaleString();
    alexanderVolkanovskiXpThreshold!.innerHTML = ottelijat.xpThreshold[5].toFixed(0).toLocaleString();
    alexanderVolkanovskiLevel!.innerHTML = ottelijat.level[5].toFixed(0).toLocaleString();

    alexPereiraXp!.innerHTML = ottelijat.xp[6].toFixed(0).toLocaleString();
    alexPereiraXpThreshold!.innerHTML = ottelijat.xpThreshold[6].toFixed(0).toLocaleString();
    alexPereiraLevel!.innerHTML = ottelijat.level[6].toFixed(0).toLocaleString();

    islamMakhachevXp!.innerHTML = ottelijat.xp[7].toFixed(0).toLocaleString();
    islamMakhachevXpThreshold!.innerHTML = ottelijat.xpThreshold[7].toFixed(0).toLocaleString();
    islamMakhachevLevel!.innerHTML = ottelijat.level[7].toFixed(0).toLocaleString();

    maxHollowayXp!.innerHTML = ottelijat.xp[8].toFixed(0).toLocaleString();
    maxHollowayXpThreshold!.innerHTML = ottelijat.xpThreshold[8].toFixed(0).toLocaleString();
    maxHollowayLevel!.innerHTML = ottelijat.level[8].toFixed(0).toLocaleString();

    tomAspinallXp!.innerHTML = ottelijat.xp[9].toFixed(0).toLocaleString();
    tomAspinallXpThreshold!.innerHTML = ottelijat.xpThreshold[9].toFixed(0).toLocaleString();
    tomAspinallLevel!.innerHTML = ottelijat.level[9].toFixed(0).toLocaleString();

    israelAdesanyaXp!.innerHTML = ottelijat.xp[10].toFixed(0).toLocaleString();
    israelAdesanyaXpThreshold!.innerHTML = ottelijat.xpThreshold[10].toFixed(0).toLocaleString();
    israelAdesanyaLevel!.innerHTML = ottelijat.level[10].toFixed(0).toLocaleString();

    charlesOliveiraXp!.innerHTML = ottelijat.xp[11].toFixed(0).toLocaleString();
    charlesOliveiraXpThreshold!.innerHTML = ottelijat.xpThreshold[11].toFixed(0).toLocaleString();
    charlesOliveiraLevel!.innerHTML = ottelijat.level[11].toFixed(0).toLocaleString();

    hampaita!.innerHTML = game.hampaita.toFixed(0).toLocaleString();
    hampaitaPerSekuntiElement!.innerHTML = game.hampaitaPerSekunti.toFixed(0).toLocaleString();
    avaaSatunnainenHinta!.innerHTML = shop.avaaSatunnainenHinta.toFixed(0).toLocaleString();
    //avaaValitsemaHinta!.innerHTML = shop.avaaValitsemaHinta.toFixed(0).toLocaleString();
};

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
  saveGame();
}, 30_000);

function avaaSatunnainen() {
  if (game.hampaita >= shop.avaaSatunnainenHinta) {
    game.hampaita -= shop.avaaSatunnainenHinta;
    shop.avaaSatunnainenHinta *= 10;
    shop.avaaValitsemaHinta *= 5;

    const randomIndex = Math.floor(Math.random() * (ottelijat.isUnlocked.length - 1));
    if (ottelijat.isUnlocked[randomIndex] === false) {
      ottelijat.isUnlocked[randomIndex] = true;
      console.log("Unlocked", randomIndex);
      saveGame();
    } else {
      console.log("Already unlocked");
      avaaSatunnainen();
    }
    //window.location.href = "./index.html";
    saveGame();
    console.log("power", ottelijat.power[randomIndex]);
  }
};

function avaaValitsema() {
  if (game.hampaita >= shop.avaaValitsemaHinta) {
    game.hampaita -= shop.avaaValitsemaHinta;
    shop.avaaValitsemaHinta *= 10;
    shop.avaaSatunnainenHinta *= 5;
    window.location.href = "./lukitutOttelijat.html";
    saveGame();
  }
}

function saveGame() {
    console.log("Saving game");
    let gameSave = {
        game: game,
        ottelijat: ottelijat,
        shop: shop
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
    updateUi();
    console.log("Game loaded");
}

function resetGame() {
    localStorage.removeItem("gameSave");
    location.reload();
}

shopElement!.addEventListener("click", (() => {
    shopItems.forEach(item => {
        item.style.display = item.style.display === 'none' ? 'block' : 'none';
    });
}));

colbyCovington!.addEventListener("click", (() => {
    if (!colbyCovingtonInterval) {
        if (game.maxOttelijat > game.aktiivisiaOttelijoita) {
          colbyCovingtonInterval = setInterval(() => {
            game.aktiivisiaOttelijoita++;
              if (ottelijat.progress[0] >= 100) {
                  ottelijat.progress[0] = 0;
                  ottelijat.xp[0] += 1;
                  updateUi();
                  if (ottelijat.xp[0] >= ottelijat.xpThreshold[0]) {
                      ottelijat.xp[0] = 0;
                      ottelijat.xpThreshold[0] *= 1.2;
                      ottelijat.level[0] += 1;
                  };
                  game.hampaita += ottelijat.power[0];
                  updateUi();
              } else {
                  ottelijat.progress[0] += ottelijat.step[0]
                  document.getElementById('colbyCovingtonBar')!.style.width = `${ottelijat.progress[0]}%`
              }}, 10);
              updateUi();
          }
        }
}));

kamaruUsman!.addEventListener("click", (() => {
    if (!kamaruUsmanInterval) {
        if (game.maxOttelijat > game.aktiivisiaOttelijoita) {
          kamaruUsmanInterval = setInterval(() => {
            game.aktiivisiaOttelijoita++;
              if (ottelijat.progress[1] >= 100) {
                  ottelijat.progress[1] = 0;
                  ottelijat.xp[1] += 1;
                  updateUi();
                  if (ottelijat.xp[1] >= ottelijat.xpThreshold[1]) {
                      ottelijat.xp[1] = 0;
                      ottelijat.xpThreshold[1] *= 1.2;
                      ottelijat.level[1] += 1;
                  };
                  game.hampaita += ottelijat.power[1];
                  updateUi();
              } else {
                  ottelijat.progress[1] += ottelijat.step[1]
                  document.getElementById('kamaruUsmanBar')!.style.width = `${ottelijat.progress[1]}%`
              }}, 10);
              updateUi();
          }
        }
}));

shavkatRakhmonov!.addEventListener("click", (() => {
    if (!shavkatRakhmonovInterval) {
        if (game.maxOttelijat > game.aktiivisiaOttelijoita) {
          shavkatRakhmonovInterval = setInterval(() => {
            game.aktiivisiaOttelijoita++;
              if (ottelijat.progress[2] >= 100) {
                  ottelijat.progress[2] = 0;
                  ottelijat.xp[2] += 1;
                  updateUi();
                  if (ottelijat.xp[2] >= ottelijat.xpThreshold[2]) {
                      ottelijat.xp[2] = 0;
                      ottelijat.xpThreshold[2] *= 1.2;
                      ottelijat.level[2] += 1;
                  };
                  game.hampaita += ottelijat.power[2];
                  updateUi();
              } else {
                  ottelijat.progress[2] += ottelijat.step[2]
                  document.getElementById('shavkatRakhmonovBar')!.style.width = `${ottelijat.progress[2]}%`
              }}, 10);
              updateUi();
          }
        }
}));

seanOmalley!.addEventListener("click", (() => {
    if (!seanOmalleyInterval) {
        if (game.maxOttelijat > game.aktiivisiaOttelijoita) {
          seanOmalleyInterval = setInterval(() => {
            game.aktiivisiaOttelijoita++;
              if (ottelijat.progress[3] >= 100) {
                  ottelijat.progress[3] = 0;
                  ottelijat.xp[3] += 1;
                  updateUi();
                  if (ottelijat.xp[3] >= ottelijat.xpThreshold[3]) {
                      ottelijat.xp[3] = 0;
                      ottelijat.xpThreshold[3] *= 1.2;
                      ottelijat.level[3] += 1;
                  };
                  game.hampaita += ottelijat.power[3];
                  updateUi();
              } else {
                  ottelijat.progress[3] += ottelijat.step[3]
                  document.getElementById('seanOmalleyBar')!.style.width = `${ottelijat.progress[3]}%`
              }}, 10);
              updateUi();
          }
        }
}));

jonJones!.addEventListener("click", (() => {
    if (!jonJonesInterval) {
        if (game.maxOttelijat > game.aktiivisiaOttelijoita) {
          jonJonesInterval = setInterval(() => {
            game.aktiivisiaOttelijoita++;
              if (ottelijat.progress[4] >= 100) {
                  ottelijat.progress[4] = 0;
                  ottelijat.xp[4] += 1;
                  updateUi();
                  if (ottelijat.xp[4] >= ottelijat.xpThreshold[4]) {
                      ottelijat.xp[4] = 0;
                      ottelijat.xpThreshold[4] *= 1.2;
                      ottelijat.level[4] += 1;
                  };
                  game.hampaita += ottelijat.power[4];
                  updateUi();
              } else {
                  ottelijat.progress[4] += ottelijat.step[4]
                  document.getElementById('jonJonesBar')!.style.width = `${ottelijat.progress[4]}%`
              }}, 10);
              updateUi();
          }
        }
}));

alexanderVolkanovski!.addEventListener("click", (() => {
    if (!alexanderVolkanovskiInterval) {
        if (game.maxOttelijat > game.aktiivisiaOttelijoita) {
          alexanderVolkanovskiInterval = setInterval(() => {
            game.aktiivisiaOttelijoita++;
              if (ottelijat.progress[5] >= 100) {
                  ottelijat.progress[5] = 0;
                  ottelijat.xp[5] += 1;
                  updateUi();
                  if (ottelijat.xp[5] >= ottelijat.xpThreshold[5]) {
                      ottelijat.xp[5] = 0;
                      ottelijat.xpThreshold[5] *= 1.2;
                      ottelijat.level[5] += 1;
                  };
                  game.hampaita += ottelijat.power[5];
                  updateUi();
              } else {
                  ottelijat.progress[5] += ottelijat.step[5]
                  document.getElementById('alexanderVolkanovskiBar')!.style.width = `${ottelijat.progress[5]}%`
              }}, 10);
              updateUi();
          }
        }
}));

alexPereira!.addEventListener("click", (() => {
    if (!alexPereiraInterval) {
        if (game.maxOttelijat > game.aktiivisiaOttelijoita) {
          alexPereiraInterval = setInterval(() => {
            game.aktiivisiaOttelijoita++;
              if (ottelijat.progress[6] >= 100) {
                  ottelijat.progress[6] = 0;
                  ottelijat.xp[6] += 1;
                  updateUi();
                  if (ottelijat.xp[6] >= ottelijat.xpThreshold[6]) {
                      ottelijat.xp[6] = 0;
                      ottelijat.xpThreshold[6] *= 1.2;
                      ottelijat.level[6] += 1;
                  };
                  game.hampaita += ottelijat.power[6];
                  updateUi();
              } else {
                  ottelijat.progress[6] += ottelijat.step[6]
                  document.getElementById('alexPereiraBar')!.style.width = `${ottelijat.progress[6]}%`
              }}, 10);
              updateUi();
          }
        }
}));

islamMakhachev!.addEventListener("click", (() => {
    if (!islamMakhachevInterval) {
        if (game.maxOttelijat > game.aktiivisiaOttelijoita) {
          islamMakhachevInterval = setInterval(() => {
            game.aktiivisiaOttelijoita++;
              if (ottelijat.progress[7] >= 100) {
                  ottelijat.progress[7] = 0;
                  ottelijat.xp[7] += 1;
                  updateUi();
                  if (ottelijat.xp[7] >= ottelijat.xpThreshold[7]) {
                      ottelijat.xp[7] = 0;
                      ottelijat.xpThreshold[7] *= 1.2;
                      ottelijat.level[7] += 1;
                  };
                  game.hampaita += ottelijat.power[7];
                  updateUi();
              } else {
                  ottelijat.progress[7] += ottelijat.step[7]
                  document.getElementById('islamMakhachevBar')!.style.width = `${ottelijat.progress[7]}%`
              }}, 10);
              updateUi();
          }
        }
}));

maxHolloway!.addEventListener("click", (() => {
    if (!maxHollowayInterval) {
        if (game.maxOttelijat > game.aktiivisiaOttelijoita) {
          maxHollowayInterval = setInterval(() => {
            game.aktiivisiaOttelijoita++;
              if (ottelijat.progress[8] >= 100) {
                  ottelijat.progress[8] = 0;
                  ottelijat.xp[8] += 1;
                  updateUi();
                  if (ottelijat.xp[8] >= ottelijat.xpThreshold[8]) {
                      ottelijat.xp[8] = 0;
                      ottelijat.xpThreshold[8] *= 1.2;
                      ottelijat.level[8] += 1;
                  };
                  game.hampaita += ottelijat.power[8];
                  updateUi();
              } else {
                  ottelijat.progress[8] += ottelijat.step[8]
                  document.getElementById('maxHollowayBar')!.style.width = `${ottelijat.progress[8]}%`
              }}, 10);
              updateUi();
          }
        }
}));

tomAspinall!.addEventListener("click", (() => {
    if (!tomAspinallInterval) {
        if (game.maxOttelijat > game.aktiivisiaOttelijoita) {
          tomAspinallInterval = setInterval(() => {
            game.aktiivisiaOttelijoita++;
              if (ottelijat.progress[9] >= 100) {
                  ottelijat.progress[9] = 0;
                  ottelijat.xp[9] += 1;
                  updateUi();
                  if (ottelijat.xp[9] >= ottelijat.xpThreshold[9]) {
                      ottelijat.xp[9] = 0;
                      ottelijat.xpThreshold[9] *= 1.2;
                      ottelijat.level[9] += 1;
                  };
                  game.hampaita += ottelijat.power[9];
                  updateUi();
              } else {
                  ottelijat.progress[9] += ottelijat.step[9]
                  document.getElementById('tomAspinallBar')!.style.width = `${ottelijat.progress[9]}%`
              }}, 10);
              updateUi();
          }
        }
}));

israelAdesanya!.addEventListener("click", (() => {
    if (!israelAdesanyaInterval) {
        if (game.maxOttelijat > game.aktiivisiaOttelijoita) {
          israelAdesanyaInterval = setInterval(() => {
            game.aktiivisiaOttelijoita++;
              if (ottelijat.progress[10] >= 100) {
                  ottelijat.progress[10] = 0;
                  ottelijat.xp[10] += 1;
                  updateUi();
                  if (ottelijat.xp[10] >= ottelijat.xpThreshold[10]) {
                      ottelijat.xp[10] = 0;
                      ottelijat.xpThreshold[10] *= 1.2;
                      ottelijat.level[10] += 1;
                  };
                  game.hampaita += ottelijat.power[10];
                  updateUi();
              } else {
                  ottelijat.progress[10] += ottelijat.step[10]
                  document.getElementById('israelAdesanyaBar')!.style.width = `${ottelijat.progress[10]}%`
              }}, 10);
              updateUi();
          }
        }
}));

charlesOliveira!.addEventListener("click", (() => {
    if (!charlesOliveiraInterval) {
        if (game.maxOttelijat > game.aktiivisiaOttelijoita) {
          charlesOliveiraInterval = setInterval(() => {
            game.aktiivisiaOttelijoita++;
              if (ottelijat.progress[11] >= 100) {
                  ottelijat.progress[11] = 0;
                  ottelijat.xp[11] += 1;
                  updateUi();
                  if (ottelijat.xp[11] >= ottelijat.xpThreshold[11]) {
                      ottelijat.xp[11] = 0;
                      ottelijat.xpThreshold[11] *= 1.2;
                      ottelijat.level[11] += 1;
                  };
                  game.hampaita += ottelijat.power[11];
                  updateUi();
              } else {
                  ottelijat.progress[11] += ottelijat.step[11]
                  document.getElementById('charlesOliveiraBar')!.style.width = `${ottelijat.progress[11]}%`
              }}, 10);
              updateUi();
          }
        }
}));

save!.addEventListener("click", (() => {
    saveGame();
}));

load!.addEventListener("click", (() => {
    loadGame();
}));

reset!.addEventListener("click", (() => {
    resetGame();
}));

avaaSatunnainenElement!.addEventListener("click", (() => {
    avaaSatunnainen();
    updateUi();
}));

avaaValitsemaElement!.addEventListener("click", (() => {
    avaaValitsema();
}));

window.onload = function() {
    loadGame();
    //updateUi();
}