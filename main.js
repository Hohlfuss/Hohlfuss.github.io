

var game = {
    score: 0,
    totalScore: 0,
    totalClicks: 0,
    clickValue: 1,
    version: 0.001,
    
    addToScore: function(amount) {
        this.score += amount;
        this.totalScore += amount;
        display.updateScore();
    },

    getScorePerSecond: function() {
        var scorePerSecond = 0;
        for (i = 0; i < building.name.length; i++) {
            scorePerSecond += building.income[i] * building.count[i];
        }
        return scorePerSecond;
    }

};

var building = {
    name: [
        "TonninSeteliTony",
        "TonninSeteliVille",
        "PropelleriHattuTony",
        "Markus",
        "Kim",
        "Lihakset",
        "RikuRillaa",
        "RommiaVesipyssyllä"
    ],
    image: [
        "tony.jpg",
        "ville.jpg",
        "propelleriHattuTony.jpg",
        "markus.jpg",
        "kim.jpg",
        "lihakset.jpg",
        "rikuRillaa.jpg",
        "rommia.jpg"
    ],
    count: [0, 0, 0, 0, 0, 0, 0, 0],
    income: [
        1,
        3,
        5,
        10,
        20,
        50,
        100,
        200
    ],
    cost: [
        10,
        300,
        750,
        1800,
        5000,
        20000,
        100000,
        1000000
    ],

    purchase: function(index) {
        if(game.score >= this.cost[index]) {
            game.score -= this.cost[index];
            this.count[index]++;
            this.cost[index] = parseInt(this.cost[index]) * 1.20;
            display.updateScore();
            display.updateShop();
            display.updateUpgrades();
        }
    }
};

var upgrade = {
    name: [
        "TonyUpgrade!",
        "TonyUpgrade2!",
        "VilleUpgrade!",
        "VilleUpgrade2!"
    ],
    description: [
        "TonninSeteliTonyt ovat tuplasti tehokkaampia",
        "TonninSeteliTonyt ovat tuplasti tehokkaampia",
        "TonninSeteliVillet ovat tuplasti tehokkaampia",
        "TonninSeteliVillet ovat tuplasti tehokkaampia"
    ],
    image: [
        "tonyUpgrade.jpg",
        "tonyUpgrade2.jpg",
        "villeUpgrade.jpg",
        "villeUpgrade2.jpg"
    ],
    type: [
        "building",
        "building",
        "building",
        "building"

    ],
    cost: [
        "3000",
        "6000",
        "6000",
        "12000"
    ],
    buildingIndex: [
        0,
        0,
        1,
        1
    ],
    requirement: [
        5,
        10,
        5,
        10
    ],
    bonus: [
        2,
        2,
        2,
        2
    ],
    purchased: [false, false, false, false],

    purchase: function(index) {
        if (!this.purchased[index] && game.score >= this.cost[index]) {
            if (this.type[index] == "building" && building.count [this.buildingIndex[index]] >= this.requirement[index]) {
                game.score -= this.cost[index];
                building.income[this.buildingIndex[index]] *= this.bonus[index];
                this.purchased[index] = true;

                display.updateUpgrades();
                display.updateScore();
            } else if (this.type[index] == "click" && game.totalClicks >= this.requirement[index]) {
                game.score -= this.cost[index];
                game.clickValue *= this.bonus[index];
                this.purchased[index] = true;

                display.updateUpgrades();
                display.updateScore();
            }
        }
    }
};

var display = {
    updateScore: function() {
        document.getElementById("score").innerHTML = game.score.toFixed(0);
        document.getElementById("scorepersecond").innerHTML = game.getScorePerSecond();
        document.title = game.score.toFixed(0) + "Kännipistettä - NSK clicker"
    },

    updateShop: function() {
        document.getElementById("shopContainer").innerHTML = "";
        for (i = 0; i < building.name.length; i++) {
            document.getElementById("shopContainer").innerHTML += '<table class="shopButton unselectable" onclick="building.purchase('+i+')"><tr><td id="image"><img src="images/'+building.image[i]+'"></td><td id="nameAndCost"><p>'+building.name[i]+'</p><p><span>'+building.cost[i].toFixed(0)+'</span>kännipistettä</p></td><td id="amount"><span>'+building.count[i]+'</span></td></tr></table>';
        }
    },

    updateUpgrades: function() {
        document.getElementById("upgradeContainer").innerHTML = "";
        for (i = 0; i < upgrade.name.length; i++) {
            if (!upgrade.purchased[i]) {
                if (upgrade.type[i] == "building" && building.count[upgrade.buildingIndex[i]] >= upgrade.requirement[i]) {
                    document.getElementById("upgradeContainer").innerHTML += '<img src="images/'+upgrade.image[i]+'"title="'+upgrade.name[i]+' &#10; '+upgrade.description[i]+' &#10; ('+upgrade.cost[i]+' kännipistettä)" onclick="upgrade.purchase('+i+')">';
                } else if (upgrade.type[i] == "click" && game.totalClicks >= upgrade.requirement[i]) {
                    document.getElementById("upgradeContainer").innerHTML += '<img src="images/'+upgrade.image[i]+'"title="'+upgrade.name[i]+' &#10; '+upgrade.description[i]+' &#10; ('+upgrade.cost[i]+' kännipistettä)" onclick="upgrade.purchase('+i+')">';
                }
            }
        }
    }
};

function saveGame() {
    var gameSave = {
        score: game.score,
        totalScore: game.totalScore,
        totalClicks: game.totalClicks,
        clickValue: game.clickValue,
        version: game.version,
        buildingCount: building.count,
        buildingIncome: building.income,
        buildingCost: building.cost,
        upgradePurchased: upgrade.purchased
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function loadGame() {
    var savedGame = JSON.parse(localStorage.getItem("gameSave"));
    if(localStorage.getItem("gameSave") !== null) {
        if (typeof savedGame.score !=="undefined") game.score = savedGame.score;
        if (typeof savedGame.totalScore !=="undefined") game.totalScore = savedGame.totalScore;
        if (typeof savedGame.totalClicks !=="undefined") game.totalClicks = savedGame.totalClicks;
        if (typeof savedGame.clickValue !=="undefined") game.clickValue = savedGame.clickValue;
        if (typeof savedGame.buildingCount !=="undefined") game.buildingCount = savedGame.buildingCount;
            for (i = 0; i < savedGame.buildingCount.length; i++) {
                building.count[i] = savedGame.buildingCount[i];
            }
        }
        if (typeof savedGame.buildingIncome !== "undefined") {
            for (i = 0; i < savedGame.buildingIncome.length; i++) {
                building.income[i] = savedGame.buildingIncome[i];
            }
        }
        if (typeof savedGame.buildingCost !== "undefined") {
            for (i = 0; i < savedGame.buildingCost.length; i++) {
                building.cost[i] = savedGame.buildingCost[i];
            }
        } 
        if (typeof savedGame.upgradePurchased !== "undefined") {
            for (i = 0; i < savedGame.upgradePurchased.length; i++) {
                upgrade.purchased[i] = savedGame.upgradePurchased[i];
            }
        }   
    }    

function resetGame() {
    if (confirm("Oletko rumilus varma että haluat nollata pelin?")) {
        var gameSave = {};
        localStorage.setItem("gameSave", JSON.stringify(gameSave));
        location.reload();
    }
}

document.getElementById("clicker").addEventListener("click", function() {
    game.totalClicks++;
    game.addToScore(game.clickValue);
}, false);

window.onload = function() {
    loadGame();
    display.updateScore();
    display.updateUpgrades();
    display.updateShop();
};

setInterval(function() {
    game.score += game.getScorePerSecond();
    game.totalScore += game.getScorePerSecond();
    display.updateScore();
}, 1000); // 1 sekka

setInterval (function() {
    display.updateScore();
    display.updateUpgrades();
}, 10000); 

setInterval (function() {
    saveGame();
}, 30000); // 30 sekk
