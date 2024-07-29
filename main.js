var game = {
    version: "0.1.6",
    hampaita: 1,
    hampaitaPerSekunti: 0,
    verta: 0,
    activeTrainers: 0,
    maxTrainers: 1,
    freeTrainers: 0,
    rebirths: 0,
    veriKerroin: 0.000001,
    avaaSatunnainenHinta: 1,
    avaaValitsemaHinta: 100,
    lisääTrainereitaHinta: 100,
    rebirthFor: 0,
    shopOpen: false,
    pelleCount: 0,
    niceGuyCount: 0,
    dagestanCount: 0,
    afrikanMafiaCount: 0,
    lookingAssCount: 0,
    chadCount: 0,
    championCount: 0,
    totalCount: 0,
    lastPlayed: 0,
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
    interval: [
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
    divEl: [
        document.getElementById("colbyCovington"),
        document.getElementById("kamaruUsman"),
        document.getElementById("shavkatRakhmonov"),
        document.getElementById("seanOmalley"),
        document.getElementById("jonJones"),
        document.getElementById("alexanderVolkanovski"),
        document.getElementById("alexPereira"),
        document.getElementById("islamMakhachev"),
        document.getElementById("maxHolloway"),
        document.getElementById("tomAspinall"),
        document.getElementById("israelAdesanya"),
        document.getElementById("charlesOliveira")
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
        "Pelletäijät 2x nopeus",
        "Niceguyt 2x nopeus",
        "dagestanit 2x nopeus",
        "Afrikanmafia 2x nopeus",
        "Lookingass 2x nopeus",
        "Chaditäijät 2x nopeus",
        "Pelletäijät 2x power",
        "Niceguyt 2x power",
        "dagestanit 2x power",
        "Afrikanmafia 2x power",
        "Lookingass 2x power",
        "Chaditäijät 2x power",
        "Pelletäijät 2x power",
        "Niceguyt 2x power",
        "dagestanit 2x power",
        "Afrikanmafia 2x power",
        "Lookingass 2x power",
        "Chaditäijät 2x power",
        "Pelletäijät 2x power",
        "Niceguyt 2x power",
        "dagestanit 2x power",
        "Afrikanmafia 2x power",
        "Lookingass 2x power",
        "Chaditäijät 2x power",
        "Pelletäijät 2x nopeus",
        "Niceguyt 2x nopeus",
        "dagestanit 2x nopeus",
        "Afrikanmafia 2x nopeus",
        "Lookingass 2x nopeus",
        "Chaditäijät 2x nopeus",
        "Pelletäijät 2x nopeus",
        "Niceguyt 2x nopeus",
        "dagestanit 2x nopeus",
        "Afrikanmafia 2x nopeus",
        "Lookingass 2x nopeus",
        "Chaditäijät 2x nopeus",
        "Pelletäijät 2x nopeus",
        "Niceguyt 2x nopeus",
        "dagestanit 2x nopeus",
        "Afrikanmafia 2x nopeus",
        "Lookingass 2x nopeus",
        "Chaditäijät 2x nopeus",
        "Pelletäijät 2x nopeus",
        "Niceguyt 2x nopeus",
        "dagestanit 2x nopeus",
        "Afrikanmafia 2x nopeus",
        "Lookingass 2x nopeus",
        "Chaditäijät 2x nopeus",
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
    ],
    fighters: [
        [0, 3, 4, 10],
        [1, 5, 9, 11],
        [2, 7],
        [1, 10],
        [3, 7],
        [2, 4, 6],
        [0, 3, 4, 10],
        [1, 5, 9, 11],
        [2, 7],
        [1, 10],
        [3, 7],
        [2, 4, 6],
        [0, 3, 4, 10],
        [1, 5, 9, 11],
        [2, 7],
        [1, 10],
        [3, 7],
        [2, 4, 6],
        [0, 3, 4, 10],
        [1, 5, 9, 11],
        [2, 7],
        [1, 10],
        [3, 7],
        [2, 4, 6],
        [0, 3, 4, 10],
        [1, 5, 9, 11],
        [2, 7],
        [1, 10],
        [3, 7],
        [2, 4, 6],
        [0, 3, 4, 10],
        [1, 5, 9, 11],
        [2, 7],
        [1, 10],
        [3, 7],
        [2, 4, 6],
        [0, 3, 4, 10],
        [1, 5, 9, 11],
        [2, 7],
        [1, 10],
        [3, 7],
        [2, 4, 6],
        [0, 3, 4, 10],
        [1, 5, 9, 11],
        [2, 7],
        [1, 10],
        [3, 7],
        [2, 4, 6],
    ]
};
var elements = {
    colbyCovington: document.getElementById("colbyCovington"),
    colbyCovingtonXp: document.getElementById('colbyCovingtonXp'),
    colbyCovingtonXpThreshold: document.getElementById('colbyCovingtonXpThreshold'),
    colbyCovingtonPower: document.getElementById('colbyCovingtonPower'),
    colbyCovingtonSpeed: document.getElementById('colbyCovingtonSpeed'),
    colbyCovingtonLevel: document.getElementById('colbyCovingtonLevel'),
    kamaruUsman: document.getElementById("kamaruUsman"),
    kamaruUsmanXp: document.getElementById('kamaruUsmanXp'),
    kamaruUsmanXpThreshold: document.getElementById('kamaruUsmanXpThreshold'),
    kamaruUsmanPower: document.getElementById('kamaruUsmanPower'),
    kamaruUsmanSpeed: document.getElementById('kamaruUsmanSpeed'),
    kamaruUsmanLevel: document.getElementById('kamaruUsmanLevel'),
    shavkatRakhmonov: document.getElementById("shavkatRakhmonov"),
    shavkatRakhmonovXp: document.getElementById('shavkatRakhmonovXp'),
    shavkatRakhmonovXpThreshold: document.getElementById('shavkatRakhmonovXpThreshold'),
    shavkatRakhmonovPower: document.getElementById('shavkatRakhmonovPower'),
    shavkatRakhmonovSpeed: document.getElementById('shavkatRakhmonovSpeed'),
    shavkatRakhmonovLevel: document.getElementById('shavkatRakhmonovLevel'),
    seanOmalley: document.getElementById("seanOmalley"),
    seanOmalleyXp: document.getElementById('seanOmalleyXp'),
    seanOmalleyXpThreshold: document.getElementById('seanOmalleyXpThreshold'),
    seanOmalleyPower: document.getElementById('seanOmalleyPower'),
    seanOmalleySpeed: document.getElementById('seanOmalleySpeed'),
    seanOmalleyLevel: document.getElementById('seanOmalleyLevel'),
    jonJones: document.getElementById("jonJones"),
    jonJonesXp: document.getElementById('jonJonesXp'),
    jonJonesXpThreshold: document.getElementById('jonJonesXpThreshold'),
    jonJonesPower: document.getElementById('jonJonesPower'),
    jonJonesSpeed: document.getElementById('jonJonesSpeed'),
    jonJonesLevel: document.getElementById('jonJonesLevel'),
    alexanderVolkanovski: document.getElementById("alexanderVolkanovski"),
    alexanderVolkanovskiXp: document.getElementById('alexanderVolkanovskiXp'),
    alexanderVolkanovskiXpThreshold: document.getElementById('alexanderVolkanovskiXpThreshold'),
    alexanderVolkanovskiPower: document.getElementById('alexanderVolkanovskiPower'),
    alexanderVolkanovskiSpeed: document.getElementById('alexanderVolkanovskiSpeed'),
    alexanderVolkanovskiLevel: document.getElementById('alexanderVolkanovskiLevel'),
    alexPereira: document.getElementById("alexPereira"),
    alexPereiraXp: document.getElementById('alexPereiraXp'),
    alexPereiraXpThreshold: document.getElementById('alexPereiraXpThreshold'),
    alexPereiraPower: document.getElementById('alexPereiraPower'),
    alexPereiraSpeed: document.getElementById('alexPereiraSpeed'),
    alexPereiraLevel: document.getElementById('alexPereiraLevel'),
    islamMakhachev: document.getElementById("islamMakhachev"),
    islamMakhachevXp: document.getElementById('islamMakhachevXp'),
    islamMakhachevXpThreshold: document.getElementById('islamMakhachevXpThreshold'),
    islamMakhachevPower: document.getElementById('islamMakhachevPower'),
    islamMakhachevSpeed: document.getElementById('islamMakhachevSpeed'),
    islamMakhachevLevel: document.getElementById('islamMakhachevLevel'),
    maxHolloway: document.getElementById("maxHolloway"),
    maxHollowayXp: document.getElementById('maxHollowayXp'),
    maxHollowayXpThreshold: document.getElementById('maxHollowayXpThreshold'),
    maxHollowayPower: document.getElementById('maxHollowayPower'),
    maxHollowaySpeed: document.getElementById('maxHollowaySpeed'),
    maxHollowayLevel: document.getElementById('maxHollowayLevel'),
    tomAspinall: document.getElementById("tomAspinall"),
    tomAspinallXp: document.getElementById('tomAspinallXp'),
    tomAspinallXpThreshold: document.getElementById('tomAspinallXpThreshold'),
    tomAspinallPower: document.getElementById('tomAspinallPower'),
    tomAspinallSpeed: document.getElementById('tomAspinallSpeed'),
    tomAspinallLevel: document.getElementById('tomAspinallLevel'),
    israelAdesanya: document.getElementById("israelAdesanya"),
    israelAdesanyaXp: document.getElementById('israelAdesanyaXp'),
    israelAdesanyaXpThreshold: document.getElementById('israelAdesanyaXpThreshold'),
    israelAdesanyaPower: document.getElementById('israelAdesanyaPower'),
    israelAdesanyaSpeed: document.getElementById('israelAdesanyaSpeed'),
    israelAdesanyaLevel: document.getElementById('israelAdesanyaLevel'),
    charlesOliveira: document.getElementById("charlesOliveira"),
    charlesOliveiraXp: document.getElementById('charlesOliveiraXp'),
    charlesOliveiraXpThreshold: document.getElementById('charlesOliveiraXpThreshold'),
    charlesOliveiraPower: document.getElementById('charlesOliveiraPower'),
    charlesOliveiraSpeed: document.getElementById('charlesOliveiraSpeed'),
    charlesOliveiraLevel: document.getElementById('charlesOliveiraLevel'),
    hampaitaEl: document.getElementById('hampaita'),
    hampaitaPerSekuntiEl: document.getElementById('hampaitaPerSekunti'),
    trainersEl: document.getElementById("trainers"),
    shopItemsArr: Array.from(document.querySelectorAll('.shopItem')),
    avaaSatunnainenHintaEl: document.getElementById('avaaSatunnainenHinta'),
    lisääTrainereitaHintaEl: document.getElementById('lisääTrainereitaHinta'),
    rebirthForEl: document.getElementById('rebirthFor'),
    upgradeEl: document.getElementById('upgradeContainer'),
    shopButton: document.getElementById('shop'),
    avaaSatunnainenButton: document.getElementById('avaaSatunnainen'),
    lisääTrainereitaButton: document.getElementById('lisääTrainereita'),
    rebirthButton: document.getElementById('rebirth'),
    resetButton: document.getElementById('reset'),
    saveButton: document.getElementById('save'),
    loadButton: document.getElementById('load')
};
setInterval(function () {
    var totalPower = 0;
    for (var i = 0; i < ottelijat.isUnlocked.length; i++) {
        if (ottelijat.isUnlocked[i] === true) {
            document.getElementById(ottelijat.id[i] + "Container").style.display = "block";
            if (ottelijat.isActive[i] === true) {
                totalPower += (ottelijat.power[i] * ottelijat.speed[i]) / 10;
            }
        }
        else {
            document.getElementById(ottelijat.id[i] + "Container").style.display = "none";
        }
    }
    game.hampaitaPerSekunti = totalPower;
    updateUi();
}, 100);
setInterval(function () {
    renderUpgrades();
}, 10000);
setInterval(function () {
    saveGame();
}, 30000);
/*function offlineGains() {
    const now = Date.now();
    const offlineTime = now - game.lastPlayed;
    //let reducedProductionRate = 0.0008;
    const offlineProgress = offlineTime// * reducedProductionRate;
    const offlineHampaita = game.hampaitaPerSekunti * offlineProgress / 2000;
  
  alert(`Offline tienaus ${Math.round(offlineHampaita).toLocaleString()} hampaita!`);
  game.hampaita += offlineHampaita;
  document.getElementById("hampaita")!.innerHTML = Math.round(game.hampaita).toLocaleString();
}*/
function osta(index) {
    if (!upgrades.ostettu[index] && upgrades.tyyppi[index] === "nopeus") {
        if (game.hampaita >= upgrades.hinta[index]) {
            game.hampaita -= upgrades.hinta[index];
            console.log("asd" + index);
            upgrades.fighters[index].forEach(function (fighterIndex) {
                console.log("asd" + fighterIndex);
                ottelijat.step[fighterIndex] *= upgrades.bonus[index];
                ottelijat.speed[fighterIndex] *= upgrades.bonus[index];
            });
            upgrades.ostettu[index] = true;
            renderUpgrades();
        }
    }
    if (!upgrades.ostettu[index] && upgrades.tyyppi[index] === "power") {
        console.log("power valittu");
        if (game.hampaita >= upgrades.hinta[index]) {
            console.log("oli hampaita");
            game.hampaita -= upgrades.hinta[index];
            console.log("hampaat minustettu");
            console.log("index" + index);
            upgrades.fighters[index].forEach(function (fighterIndex) {
                console.log("fighterIndex" + fighterIndex);
                console.log("foreach block");
                ottelijat.power[fighterIndex] *= upgrades.bonus[index];
            });
            upgrades.ostettu[index] = true;
            renderUpgrades();
        }
    }
}
function renderUpgrades() {
    if (!elements.upgradeEl)
        return;
    elements.upgradeEl.innerHTML = '';
    var _loop_1 = function (i) {
        if (upgrades.ostettu[i])
            return "continue";
        if ((upgrades.tag[i] === 'pelle' && game.pelleCount >= upgrades.vaatimus[i]) ||
            (upgrades.tag[i] === 'niceGuy' && game.niceGuyCount >= upgrades.vaatimus[i]) ||
            (upgrades.tag[i] === 'dagestanit' && game.dagestanCount >= upgrades.vaatimus[i]) ||
            (upgrades.tag[i] === 'afrikanMafia' && game.afrikanMafiaCount >= upgrades.vaatimus[i]) ||
            (upgrades.tag[i] === 'lookingAss' && game.lookingAssCount >= upgrades.vaatimus[i]) ||
            (upgrades.tag[i] === 'chad' && game.chadCount >= upgrades.vaatimus[i])) {
            var upgradeDiv = document.createElement('div');
            upgradeDiv.classList.add('upgrade-container');
            var img = document.createElement('img');
            img.setAttribute('draggable', 'false');
            img.src = "./assets/".concat(upgrades.kuva[i]);
            img.alt = upgrades.nimi[i];
            var titleDiv = document.createElement('div');
            titleDiv.className = 'upgrade-title';
            var descriptionSpan = document.createElement('span');
            descriptionSpan.textContent = upgrades.kuvaus[i];
            var priceSpan = document.createElement('span');
            priceSpan.textContent = "(".concat(upgrades.hinta[i], " hammasta)");
            titleDiv.appendChild(descriptionSpan);
            titleDiv.appendChild(priceSpan);
            upgradeDiv.appendChild(img);
            upgradeDiv.appendChild(titleDiv);
            titleDiv.addEventListener('click', function () { return osta(i); });
            elements.upgradeEl.appendChild(upgradeDiv);
        }
    };
    for (var i = 0; i < upgrades.nimi.length; i++) {
        _loop_1(i);
    }
}
function avaaSatunnainen() {
    var randomIndex = Math.floor(Math.random() * (ottelijat.nimi.length));
    if (!ottelijat.isUnlocked[randomIndex] && game.hampaita >= game.avaaSatunnainenHinta) {
        ottelijat.isUnlocked[randomIndex] = true;
        game.hampaita -= game.avaaSatunnainenHinta;
        game.avaaSatunnainenHinta *= 5;
        console.log("Avattu satunnaisesti" + ottelijat.nimi[randomIndex]);
        saveGame();
    }
    else if (game.hampaita < game.avaaSatunnainenHinta) {
        console.log("ei ollu varaa");
        return;
    }
    else {
        console.log("oli avattu jo");
        avaaSatunnainen();
        saveGame();
    }
}
;
function lisääTrainereita() {
    if (game.hampaita >= game.lisääTrainereitaHinta) {
        game.hampaita -= game.lisääTrainereitaHinta;
        game.maxTrainers += 1;
        game.lisääTrainereitaHinta *= 9;
        //game.avaaSatunnainenHinta *= 1.1;
        //game.lisääTrainereitaHinta *= 1.1;
        saveGame();
    }
}
/*function renderUpgrades() {
  document.getElementById("upgradeContainer")!.innerHTML = "";
  for (let i = 0; i < upgrades.nimi.length; i++) {
    if (!upgrades.ostettu[i]) {
      if (upgrades.tag[i] == "pelle" && game.pelleCount >= upgrades.vaatimus[i]) {
        document.getElementById("upgradeContainer")!.innerHTML += `
        <div class="upgrade-container">
          <img
          draggable="false"
          src="./assets/${upgrades.kuva[i]}"
          alt="${upgrades.nimi[i]}"
          >
          <div class="upgrade-title"
          onclick="osta(${i})">
            <span>${upgrades.kuvaus[i]}</span>
            <span>(${upgrades.hinta[i]} hammasta)</span>
          </div>
        </div>
        `;
        //document.getElementById("upgradeContainer")!.innerHTML += '<img draggable="false" src="./assets/'+upgrades.kuva[i]+'" title="'+upgrades.nimi[i]+' &#10; '+upgrades.kuvaus[i]+' &#10; ('+upgrades.hinta[i]+' hammasta)" onclick="osta('+i+')">'; + upgrades.nimi[i]+'">';
      }
      if (upgrades.tag[i] == "niceGuy" && game.niceGuyCount >= upgrades.vaatimus[i]) {
        document.getElementById("upgradeContainer")!.innerHTML += `
        <div class="upgrade-container">
          <img
          draggable="false"
          src="./assets/${upgrades.kuva[i]}"
          alt="${upgrades.nimi[i]}"
          >
          <div class="upgrade-title"
          onclick="osta(${i})">
            <span>${upgrades.kuvaus[i]}</span>
            <span>(${upgrades.hinta[i]} hammasta)</span>
          </div>
        </div>
        `;
        //document.getElementById("upgradeContainer")!.innerHTML += '<img draggable="false" src="./assets/'+upgrades.kuva[i]+'" title="'+upgrades.nimi[i]+' &#10; '+upgrades.kuvaus[i]+' &#10; ('+upgrades.hinta[i]+' hammasta)" onclick="osta('+i+')">'; + upgrades.nimi[i]+'">';
      }
      if (upgrades.tag[i] == "dagestanit" && game.dagestanCount >= upgrades.vaatimus[i]) {
        document.getElementById("upgradeContainer")!.innerHTML += `
        <div class="upgrade-container">
          <img
          draggable="false"
          src="./assets/${upgrades.kuva[i]}"
          alt="${upgrades.nimi[i]}"
          >
          <div class="upgrade-title"
          onclick="osta(${i})">
            <span>${upgrades.kuvaus[i]}</span>
            <span>(${upgrades.hinta[i]} hammasta)</span>
          </div>
        </div>
        `;
        //document.getElementById("upgradeContainer")!.innerHTML += '<img draggable="false" src="./assets/'+upgrades.kuva[i]+'" title="'+upgrades.nimi[i]+' &#10; '+upgrades.kuvaus[i]+' &#10; ('+upgrades.hinta[i]+' hammasta)" onclick="osta('+i+')">'; + upgrades.nimi[i]+'">';
      }
      if (upgrades.tag[i] == "afrikanMafia" && game.afrikanMafiaCount >= upgrades.vaatimus[i]) {
        document.getElementById("upgradeContainer")!.innerHTML += `
        <div class="upgrade-container">
          <img
          draggable="false"
          src="./assets/${upgrades.kuva[i]}"
          alt="${upgrades.nimi[i]}"
          >
          <div class="upgrade-title"
          onclick="osta(${i})">
            <span>${upgrades.kuvaus[i]}</span>
            <span>(${upgrades.hinta[i]} hammasta)</span>
          </div>
        </div>
        `;
        //document.getElementById("upgradeContainer")!.innerHTML += '<img draggable="false" src="./assets/'+upgrades.kuva[i]+'" title="'+upgrades.nimi[i]+' &#10; '+upgrades.kuvaus[i]+' &#10; ('+upgrades.hinta[i]+' hammasta)" onclick="osta('+i+')">'; + upgrades.nimi[i]+'">';
      }
      if (upgrades.tag[i] == "lookingAss" && game.lookingAssCount >= upgrades.vaatimus[i]) {
        document.getElementById("upgradeContainer")!.innerHTML += `
        <div class="upgrade-container">
          <img
          draggable="false"
          src="./assets/${upgrades.kuva[i]}"
          alt="${upgrades.nimi[i]}"
          >
          <div class="upgrade-title"
          onclick="osta(${i})">
            <span>${upgrades.kuvaus[i]}</span>
            <span>(${upgrades.hinta[i]} hammasta)</span>
          </div>
        </div>
        `;
        //document.getElementById("upgradeContainer")!.innerHTML += '<img draggable="false" src="./assets/'+upgrades.kuva[i]+'" title="'+upgrades.nimi[i]+' &#10; '+upgrades.kuvaus[i]+' &#10; ('+upgrades.hinta[i]+' hammasta)" onclick="osta('+i+')">'; + upgrades.nimi[i]+'">';
      }
      if (upgrades.tag[i] == "chad" && game.chadCount >= upgrades.vaatimus[i]) {
        document.getElementById("upgradeContainer")!.innerHTML += `
        <div class="upgrade-container">
          <img
          draggable="false"
          src="./assets/${upgrades.kuva[i]}"
          alt="${upgrades.nimi[i]}"
          >
          <div class="upgrade-title"
          onclick="osta(${i})">
            <span>${upgrades.kuvaus[i]}</span>
            <span>(${upgrades.hinta[i]} hammasta)</span>
          </div>
        </div>
        `;
        //document.getElementById("upgradeContainer")!.innerHTML += '<img draggable="false" src="./assets/'+upgrades.kuva[i]+'" title="'+upgrades.nimi[i]+' &#10; '+upgrades.kuvaus[i]+' &#10; ('+upgrades.hinta[i]+' hammasta)" onclick="osta('+i+')">'; + upgrades.nimi[i]+'">';
      }
    }
  }
}*/
function rebirth() {
    game.verta = game.hampaita * game.veriKerroin;
    game.rebirths++;
    game.hampaita = 1;
    game.hampaitaPerSekunti = 0;
    game.maxTrainers = 1;
    game.activeTrainers = 0;
    game.freeTrainers = 1;
    game.avaaSatunnainenHinta = 1;
    game.lisääTrainereitaHinta = 100;
    game.afrikanMafiaCount = 0;
    game.dagestanCount = 0;
    game.lookingAssCount = 0;
    game.niceGuyCount = 0;
    game.pelleCount = 0;
    game.chadCount = 0;
    game.totalCount = 0;
    for (var i = 0; i < ottelijat.isUnlocked.length; i++) {
        ottelijat.isUnlocked[i] = false;
        ottelijat.isActive[i] = false;
        ottelijat.power[i] = 1;
        ottelijat.speed[i] = 1;
        ottelijat.level[i] = 0;
        ottelijat.progress[i] = 0;
        ottelijat.step[i] = 0.1;
        ottelijat.xp[i] = 0;
        ottelijat.xpThreshold[i] = 5;
        ottelijat.interval[i] = null;
    }
    updateUi();
    saveGame();
}
function saveGame() {
    console.log("Saving game");
    var gameSave = {
        lastPlayed: new Date().getTime(),
        game: game,
        ottelijat: ottelijat,
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
    game.lastPlayed = parsedGameSave.lastPlayed;
    game = parsedGameSave.game;
    ottelijat = parsedGameSave.ottelijat;
    upgrades = parsedGameSave.upgrades;
    updateUi();
    console.log("Game loaded");
}
function resetGame() {
    localStorage.removeItem("gameSave");
    location.reload();
}
function updateUi() {
    elements.colbyCovingtonXp.innerHTML = ottelijat.xp[0].toFixed(0).toLocaleString();
    elements.colbyCovingtonXpThreshold.innerHTML = ottelijat.xpThreshold[0].toFixed(0).toLocaleString();
    elements.colbyCovingtonLevel.innerHTML = ottelijat.level[0].toFixed(0).toLocaleString();
    elements.colbyCovingtonPower.innerHTML = ottelijat.power[0].toFixed(0).toLocaleString();
    elements.colbyCovingtonSpeed.innerHTML = ottelijat.speed[0].toFixed(0).toLocaleString();
    elements.kamaruUsmanXp.innerHTML = ottelijat.xp[1].toFixed(0).toLocaleString();
    elements.kamaruUsmanXpThreshold.innerHTML = ottelijat.xpThreshold[1].toFixed(0).toLocaleString();
    elements.kamaruUsmanLevel.innerHTML = ottelijat.level[1].toFixed(0).toLocaleString();
    elements.kamaruUsmanPower.innerHTML = ottelijat.power[1].toFixed(0).toLocaleString();
    elements.kamaruUsmanSpeed.innerHTML = ottelijat.speed[1].toFixed(0).toLocaleString();
    elements.shavkatRakhmonovXp.innerHTML = ottelijat.xp[2].toFixed(0).toLocaleString();
    elements.shavkatRakhmonovXpThreshold.innerHTML = ottelijat.xpThreshold[2].toFixed(0).toLocaleString();
    elements.shavkatRakhmonovLevel.innerHTML = ottelijat.level[2].toFixed(0).toLocaleString();
    elements.shavkatRakhmonovPower.innerHTML = ottelijat.power[2].toFixed(0).toLocaleString();
    elements.shavkatRakhmonovSpeed.innerHTML = ottelijat.speed[2].toFixed(0).toLocaleString();
    elements.seanOmalleyXp.innerHTML = ottelijat.xp[3].toFixed(0).toLocaleString();
    elements.seanOmalleyXpThreshold.innerHTML = ottelijat.xpThreshold[3].toFixed(0).toLocaleString();
    elements.seanOmalleyLevel.innerHTML = ottelijat.level[3].toFixed(0).toLocaleString();
    elements.seanOmalleyPower.innerHTML = ottelijat.power[3].toFixed(0).toLocaleString();
    elements.seanOmalleySpeed.innerHTML = ottelijat.speed[3].toFixed(0).toLocaleString();
    elements.jonJonesXp.innerHTML = ottelijat.xp[4].toFixed(0).toLocaleString();
    elements.jonJonesXpThreshold.innerHTML = ottelijat.xpThreshold[4].toFixed(0).toLocaleString();
    elements.jonJonesLevel.innerHTML = ottelijat.level[4].toFixed(0).toLocaleString();
    elements.jonJonesPower.innerHTML = ottelijat.power[4].toFixed(0).toLocaleString();
    elements.jonJonesSpeed.innerHTML = ottelijat.speed[4].toFixed(0).toLocaleString();
    elements.alexanderVolkanovskiXp.innerHTML = ottelijat.xp[5].toFixed(0).toLocaleString();
    elements.alexanderVolkanovskiXpThreshold.innerHTML = ottelijat.xpThreshold[5].toFixed(0).toLocaleString();
    elements.alexanderVolkanovskiLevel.innerHTML = ottelijat.level[5].toFixed(0).toLocaleString();
    elements.alexanderVolkanovskiPower.innerHTML = ottelijat.power[5].toFixed(0).toLocaleString();
    elements.alexanderVolkanovskiSpeed.innerHTML = ottelijat.speed[5].toFixed(0).toLocaleString();
    elements.alexPereiraXp.innerHTML = ottelijat.xp[6].toFixed(0).toLocaleString();
    elements.alexPereiraXpThreshold.innerHTML = ottelijat.xpThreshold[6].toFixed(0).toLocaleString();
    elements.alexPereiraLevel.innerHTML = ottelijat.level[6].toFixed(0).toLocaleString();
    elements.alexPereiraPower.innerHTML = ottelijat.power[6].toFixed(0).toLocaleString();
    elements.alexPereiraSpeed.innerHTML = ottelijat.speed[6].toFixed(0).toLocaleString();
    elements.islamMakhachevXp.innerHTML = ottelijat.xp[7].toFixed(0).toLocaleString();
    elements.islamMakhachevXpThreshold.innerHTML = ottelijat.xpThreshold[7].toFixed(0).toLocaleString();
    elements.islamMakhachevLevel.innerHTML = ottelijat.level[7].toFixed(0).toLocaleString();
    elements.islamMakhachevPower.innerHTML = ottelijat.power[7].toFixed(0).toLocaleString();
    elements.islamMakhachevSpeed.innerHTML = ottelijat.speed[7].toFixed(0).toLocaleString();
    elements.maxHollowayXp.innerHTML = ottelijat.xp[8].toFixed(0).toLocaleString();
    elements.maxHollowayXpThreshold.innerHTML = ottelijat.xpThreshold[8].toFixed(0).toLocaleString();
    elements.maxHollowayLevel.innerHTML = ottelijat.level[8].toFixed(0).toLocaleString();
    elements.maxHollowayPower.innerHTML = ottelijat.power[8].toFixed(0).toLocaleString();
    elements.maxHollowaySpeed.innerHTML = ottelijat.speed[8].toFixed(0).toLocaleString();
    elements.tomAspinallXp.innerHTML = ottelijat.xp[9].toFixed(0).toLocaleString();
    elements.tomAspinallXpThreshold.innerHTML = ottelijat.xpThreshold[9].toFixed(0).toLocaleString();
    elements.tomAspinallLevel.innerHTML = ottelijat.level[9].toFixed(0).toLocaleString();
    elements.tomAspinallPower.innerHTML = ottelijat.power[9].toFixed(0).toLocaleString();
    elements.tomAspinallSpeed.innerHTML = ottelijat.speed[9].toFixed(0).toLocaleString();
    elements.israelAdesanyaXp.innerHTML = ottelijat.xp[10].toFixed(0).toLocaleString();
    elements.israelAdesanyaXpThreshold.innerHTML = ottelijat.xpThreshold[10].toFixed(0).toLocaleString();
    elements.israelAdesanyaLevel.innerHTML = ottelijat.level[10].toFixed(0).toLocaleString();
    elements.israelAdesanyaPower.innerHTML = ottelijat.power[10].toFixed(0).toLocaleString();
    elements.israelAdesanyaSpeed.innerHTML = ottelijat.speed[10].toFixed(0).toLocaleString();
    elements.charlesOliveiraXp.innerHTML = ottelijat.xp[11].toFixed(0).toLocaleString();
    elements.charlesOliveiraXpThreshold.innerHTML = ottelijat.xpThreshold[11].toFixed(0).toLocaleString();
    elements.charlesOliveiraLevel.innerHTML = ottelijat.level[11].toFixed(0).toLocaleString();
    elements.charlesOliveiraPower.innerHTML = ottelijat.power[11].toFixed(0).toLocaleString();
    elements.charlesOliveiraSpeed.innerHTML = ottelijat.speed[11].toFixed(0).toLocaleString();
    elements.hampaitaEl.innerHTML = new Intl.NumberFormat("fi-FI", { maximumFractionDigits: 0 }).format(game.hampaita);
    elements.hampaitaPerSekuntiEl.innerHTML = new Intl.NumberFormat().format(game.hampaitaPerSekunti);
    elements.avaaSatunnainenHintaEl.innerHTML = new Intl.NumberFormat().format(game.avaaSatunnainenHinta);
    elements.lisääTrainereitaHintaEl.innerHTML = new Intl.NumberFormat().format(game.lisääTrainereitaHinta);
    elements.trainersEl.innerHTML = (game.maxTrainers - game.activeTrainers).toLocaleString();
    elements.rebirthForEl.innerHTML = (game.hampaita * game.veriKerroin).toLocaleString();
}
elements.colbyCovington.addEventListener("click", (function () {
    if (!ottelijat.interval[0]) {
        if (game.maxTrainers > game.activeTrainers) {
            game.activeTrainers++;
            ottelijat.isActive[0] = true;
            ottelijat.interval[0] = setInterval(function () {
                if (ottelijat.progress[0] >= 100) {
                    ottelijat.progress[0] = 0;
                    ottelijat.xp[0] += 1;
                    updateUi();
                    if (ottelijat.xp[0] >= ottelijat.xpThreshold[0]) {
                        ottelijat.xp[0] = 0;
                        ottelijat.xpThreshold[0] *= 1.2;
                        ottelijat.level[0] += 1;
                        game.pelleCount++;
                        game.totalCount++;
                        renderUpgrades();
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
        clearInterval(ottelijat.interval[0]);
        ottelijat.interval[0] = null;
        game.activeTrainers--;
        ottelijat.isActive[0] = false;
        updateUi();
    }
}));
elements.kamaruUsman.addEventListener("click", (function () {
    if (!ottelijat.interval[1]) {
        if (game.maxTrainers > game.activeTrainers) {
            game.activeTrainers++;
            ottelijat.isActive[1] = true;
            ottelijat.interval[1] = setInterval(function () {
                if (ottelijat.progress[1] >= 100) {
                    ottelijat.progress[1] = 0;
                    ottelijat.xp[1] += 1;
                    updateUi();
                    if (ottelijat.xp[1] >= ottelijat.xpThreshold[1]) {
                        ottelijat.xp[1] = 0;
                        ottelijat.xpThreshold[1] *= 1.2;
                        ottelijat.level[1] += 1;
                        game.niceGuyCount++;
                        game.afrikanMafiaCount++;
                        game.totalCount++;
                        renderUpgrades();
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
        clearInterval(ottelijat.interval[1]);
        ottelijat.interval[1] = null;
        game.activeTrainers--;
        ottelijat.isActive[1] = false;
        updateUi();
    }
}));
elements.shavkatRakhmonov.addEventListener("click", (function () {
    if (!ottelijat.interval[2]) {
        if (game.maxTrainers > game.activeTrainers) {
            game.activeTrainers++;
            ottelijat.isActive[2] = true;
            ottelijat.interval[2] = setInterval(function () {
                if (ottelijat.progress[2] >= 100) {
                    ottelijat.progress[2] = 0;
                    ottelijat.xp[2] += 1;
                    updateUi();
                    if (ottelijat.xp[2] >= ottelijat.xpThreshold[2]) {
                        ottelijat.xp[2] = 0;
                        ottelijat.xpThreshold[2] *= 1.2;
                        ottelijat.level[2] += 1;
                        game.dagestanCount++;
                        game.chadCount++;
                        game.totalCount++;
                        renderUpgrades();
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
        clearInterval(ottelijat.interval[2]);
        ottelijat.interval[2] = null;
        game.activeTrainers--;
        ottelijat.isActive[2] = false;
        updateUi();
    }
}));
elements.seanOmalley.addEventListener("click", (function () {
    if (!ottelijat.interval[3]) {
        if (game.maxTrainers > game.activeTrainers) {
            game.activeTrainers++;
            ottelijat.isActive[3] = true;
            ottelijat.interval[3] = setInterval(function () {
                if (ottelijat.progress[3] >= 100) {
                    ottelijat.progress[3] = 0;
                    ottelijat.xp[3] += 1;
                    updateUi();
                    if (ottelijat.xp[3] >= ottelijat.xpThreshold[3]) {
                        ottelijat.xp[3] = 0;
                        ottelijat.xpThreshold[3] *= 1.2;
                        ottelijat.level[3] += 1;
                        game.pelleCount++;
                        game.lookingAssCount++;
                        game.championCount++;
                        game.totalCount++;
                        renderUpgrades();
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
        clearInterval(ottelijat.interval[3]);
        ottelijat.interval[3] = null;
        game.activeTrainers--;
        ottelijat.isActive[3] = false;
        updateUi();
    }
}));
elements.jonJones.addEventListener("click", (function () {
    if (!ottelijat.interval[4]) {
        if (game.maxTrainers > game.activeTrainers) {
            game.activeTrainers++;
            ottelijat.isActive[4] = true;
            ottelijat.interval[4] = setInterval(function () {
                if (ottelijat.progress[4] >= 100) {
                    ottelijat.progress[4] = 0;
                    ottelijat.xp[4] += 1;
                    updateUi();
                    if (ottelijat.xp[4] >= ottelijat.xpThreshold[4]) {
                        ottelijat.xp[4] = 0;
                        ottelijat.xpThreshold[4] *= 1.2;
                        ottelijat.level[4] += 1;
                        game.pelleCount++;
                        game.chadCount++;
                        game.championCount++;
                        game.totalCount++;
                        renderUpgrades();
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
        clearInterval(ottelijat.interval[4]);
        ottelijat.interval[4] = null;
        game.activeTrainers--;
        ottelijat.isActive[4] = false;
        updateUi();
    }
}));
elements.alexanderVolkanovski.addEventListener("click", (function () {
    if (!ottelijat.interval[5]) {
        if (game.maxTrainers > game.activeTrainers) {
            game.activeTrainers++;
            ottelijat.isActive[5] = true;
            ottelijat.interval[5] = setInterval(function () {
                if (ottelijat.progress[5] >= 100) {
                    ottelijat.progress[5] = 0;
                    ottelijat.xp[5] += 1;
                    updateUi();
                    if (ottelijat.xp[5] >= ottelijat.xpThreshold[5]) {
                        ottelijat.xp[5] = 0;
                        ottelijat.xpThreshold[5] *= 1.2;
                        ottelijat.level[5] += 1;
                        game.niceGuyCount++;
                        game.totalCount++;
                        renderUpgrades();
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
        clearInterval(ottelijat.interval[5]);
        ottelijat.interval[5] = null;
        game.activeTrainers--;
        ottelijat.isActive[5] = false;
        updateUi();
    }
}));
elements.alexPereira.addEventListener("click", (function () {
    if (!ottelijat.interval[6]) {
        if (game.maxTrainers > game.activeTrainers) {
            game.activeTrainers++;
            ottelijat.isActive[6] = true;
            ottelijat.interval[6] = setInterval(function () {
                if (ottelijat.progress[6] >= 100) {
                    ottelijat.progress[6] = 0;
                    ottelijat.xp[6] += 1;
                    updateUi();
                    if (ottelijat.xp[6] >= ottelijat.xpThreshold[6]) {
                        ottelijat.xp[6] = 0;
                        ottelijat.xpThreshold[6] *= 1.2;
                        ottelijat.level[6] += 1;
                        game.chadCount++;
                        game.championCount += 2;
                        game.totalCount++;
                        renderUpgrades();
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
        clearInterval(ottelijat.interval[6]);
        ottelijat.interval[6] = null;
        game.activeTrainers--;
        ottelijat.isActive[6] = false;
        updateUi();
    }
}));
elements.islamMakhachev.addEventListener("click", (function () {
    if (!ottelijat.interval[7]) {
        if (game.maxTrainers > game.activeTrainers) {
            game.activeTrainers++;
            ottelijat.isActive[7] = true;
            ottelijat.interval[7] = setInterval(function () {
                if (ottelijat.progress[7] >= 100) {
                    ottelijat.progress[7] = 0;
                    ottelijat.xp[7] += 1;
                    updateUi();
                    if (ottelijat.xp[7] >= ottelijat.xpThreshold[7]) {
                        ottelijat.xp[7] = 0;
                        ottelijat.xpThreshold[7] *= 1.2;
                        ottelijat.level[7] += 1;
                        game.dagestanCount++;
                        game.lookingAssCount++;
                        game.championCount++;
                        game.totalCount++;
                        renderUpgrades();
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
        clearInterval(ottelijat.interval[7]);
        ottelijat.interval[7] = null;
        game.activeTrainers--;
        ottelijat.isActive[7] = false;
        updateUi();
    }
}));
elements.maxHolloway.addEventListener("click", (function () {
    if (!ottelijat.interval[8]) {
        if (game.maxTrainers > game.activeTrainers) {
            game.activeTrainers++;
            ottelijat.isActive[8] = true;
            ottelijat.interval[8] = setInterval(function () {
                if (ottelijat.progress[8] >= 100) {
                    ottelijat.progress[8] = 0;
                    ottelijat.xp[8] += 1;
                    updateUi();
                    if (ottelijat.xp[8] >= ottelijat.xpThreshold[8]) {
                        ottelijat.xp[8] = 0;
                        ottelijat.xpThreshold[8] *= 1.2;
                        ottelijat.level[8] += 1;
                        game.chadCount++;
                        game.totalCount++;
                        renderUpgrades();
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
        clearInterval(ottelijat.interval[8]);
        ottelijat.interval[8] = null;
        game.activeTrainers--;
        ottelijat.isActive[8] = false;
    }
}));
elements.tomAspinall.addEventListener("click", (function () {
    if (!ottelijat.interval[9]) {
        if (game.maxTrainers > game.activeTrainers) {
            game.activeTrainers++;
            ottelijat.isActive[9] = true;
            ottelijat.interval[9] = setInterval(function () {
                if (ottelijat.progress[9] >= 100) {
                    ottelijat.progress[9] = 0;
                    ottelijat.xp[9] += 1;
                    updateUi();
                    if (ottelijat.xp[9] >= ottelijat.xpThreshold[9]) {
                        ottelijat.xp[9] = 0;
                        ottelijat.xpThreshold[9] *= 1.2;
                        ottelijat.level[9] += 1;
                        game.niceGuyCount++;
                        game.championCount++;
                        game.totalCount++;
                        renderUpgrades();
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
        clearInterval(ottelijat.interval[9]);
        ottelijat.interval[9] = null;
        game.activeTrainers--;
        ottelijat.isActive[9] = false;
        updateUi();
    }
}));
elements.israelAdesanya.addEventListener("click", (function () {
    if (!ottelijat.interval[10]) {
        if (game.maxTrainers > game.activeTrainers) {
            game.activeTrainers++;
            ottelijat.isActive[10] = true;
            ottelijat.interval[10] = setInterval(function () {
                if (ottelijat.progress[10] >= 100) {
                    ottelijat.progress[10] = 0;
                    ottelijat.xp[10] += 1;
                    updateUi();
                    if (ottelijat.xp[10] >= ottelijat.xpThreshold[10]) {
                        ottelijat.xp[10] = 0;
                        ottelijat.xpThreshold[10] *= 1.2;
                        ottelijat.level[10] += 1;
                        game.pelleCount++;
                        game.afrikanMafiaCount++;
                        game.totalCount++;
                        renderUpgrades();
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
        clearInterval(ottelijat.interval[10]);
        ottelijat.interval[10] = null;
        game.activeTrainers--;
        ottelijat.isActive[10] = false;
        updateUi();
    }
}));
elements.charlesOliveira.addEventListener("click", (function () {
    if (!ottelijat.interval[11]) {
        if (game.maxTrainers > game.activeTrainers) {
            game.activeTrainers++;
            ottelijat.isActive[11] = true;
            ottelijat.interval[11] = setInterval(function () {
                if (ottelijat.progress[11] >= 100) {
                    ottelijat.progress[11] = 0;
                    ottelijat.xp[11] += 1;
                    updateUi();
                    if (ottelijat.xp[11] >= ottelijat.xpThreshold[11]) {
                        ottelijat.xp[11] = 0;
                        ottelijat.xpThreshold[11] *= 1.2;
                        ottelijat.level[11] += 1;
                        game.niceGuyCount++;
                        game.totalCount++;
                        renderUpgrades();
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
        clearInterval(ottelijat.interval[11]);
        ottelijat.interval[11] = null;
        game.activeTrainers--;
        ottelijat.isActive[11] = false;
        updateUi();
    }
}));
elements.saveButton.addEventListener("click", (function () {
    saveGame();
}));
/*elements.loadButton!.addEventListener("click", (() => {
  loadGame();
}));*/
elements.resetButton.addEventListener("click", (function () {
    resetGame();
}));
elements.shopButton.addEventListener("click", function () {
    game.shopOpen = !game.shopOpen;
    elements.shopItemsArr.forEach(function (item) {
        item.style.display = game.shopOpen ? 'block' : 'none';
    });
});
elements.avaaSatunnainenButton.addEventListener("click", (function () {
    avaaSatunnainen();
    updateUi();
}));
elements.lisääTrainereitaButton.addEventListener("click", (function () {
    lisääTrainereita();
}));
elements.rebirthButton.addEventListener("click", (function () {
    rebirth();
}));
window.onload = function () {
    game.shopOpen = false;
    elements.shopItemsArr.forEach(function (item) {
        item.style.display = "none";
    });
    renderUpgrades();
    loadGame();
    //offlineGains();
    updateUi();
    elements.trainersEl.innerHTML = game.maxTrainers.toString();
};
window.addEventListener('beforeunload', function () {
    //game.activeTrainers = 0;
    for (var i = 0; i < ottelijat.isActive.length; i++) {
        var intervalId = ottelijat.interval[i];
        if (intervalId !== null && intervalId !== undefined) {
            clearInterval(intervalId);
        }
        ottelijat.interval[i] = null;
        game.activeTrainers = 0;
        ottelijat.isActive[i] = false;
    }
    saveGame();
});
