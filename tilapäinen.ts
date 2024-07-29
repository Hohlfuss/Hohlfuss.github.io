



const names = [
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
  ];
  
  
  
  const divElements = names.map(name => document.getElementById(name) as HTMLDivElement);
  const xpElements = names.map(name => document.getElementById(`${name}Xp`) as HTMLSpanElement);
  const xpThresholdElements = names.map(name => document.getElementById(`${name}XpThreshold`) as HTMLSpanElement);
  const powerElements = names.map(name => document.getElementById(`${name}Power`) as HTMLSpanElement);
  const speedElements = names.map(name => document.getElementById(`${name}Speed`) as HTMLSpanElement);
  const levelElements = names.map(name => document.getElementById(`${name}Level`) as HTMLParagraphElement);
  
  const elements = {
    names,
    divElements,
    xpElements,
    xpThresholdElements,
    powerElements,
    speedElements,
    levelElements,
    hampaitaEl: document.getElementById('hampaita') as HTMLSpanElement,
    hampaitaPerSekuntiEl: document.getElementById('hampaitiPerSekunti') as HTMLSpanElement,
    trainersEl: document.getElementById("trainers") as HTMLSpanElement,
    shopItemsArr: Array.from(document.querySelectorAll('.shopItem')) as HTMLParagraphElement[],
    avaaSatunnainenHintaEl: document.getElementById('avaaSatunnainenHinta') as HTMLSpanElement,
    lisääTrainereitaHintaEl: document.getElementById('lisääTrainereitaHinta') as HTMLSpanElement,
    rebirthForEl: document.getElementById('rebirthFor') as HTMLSpanElement,
  
    shopButton: document.getElementById('shop') as HTMLDivElement,
    avaaSatunnainenButton: document.getElementById('avaaSatunnainen') as HTMLParagraphElement,
    lisääTrainereitaButton: document.getElementById('lisääTrainereita') as HTMLParagraphElement,
    rebirthButton: document.getElementById('rebirth') as HTMLButtonElement,
    resetButton: document.getElementById('reset') as HTMLButtonElement,
    saveButton: document.getElementById('save') as HTMLButtonElement,
    loadButton: document.getElementById('load') as HTMLButtonElement
  };
  
  /*names.forEach((name, index) => {
    const fighterElement = names[name] as HTMLDivElement; // Assuming each fighter element is a div
    fighterElement.addEventListener('click', () => {
      // Your event listener logic here, using index to access fighter data
      if (!ottelijat.interval[index]) {
        // ...
      } else {
        // ...
      }
    });
  });*/


/*ottelijat.id.forEach((otteija, index) => {
    addOttelijaEventListener(otteija, index);
});

  

function addOttelijaEventListener (ottelijanNimi: string, index: number) {
  ottlijat.id[ottelijanNimi].addEventListener("click", () => {
    if (!ottelijat.interval[index]) {
      if (game.maxTrainers > game.activeTrainers) {
        game.activeTrainers++;
        ottelijat.isActive[index] = true;
        ottelijat.interval[index] = setInterval(() => {
          if (ottelijat.progress[index] >= 100) {
            ottelijat.progress[index] = 0;
            ottelijat.xp[index] += 1;
            updateUi();
            if (ottelijat.xp[index] >= ottelijat.xpThreshold[index]) {
              ottelijat.xp[index] = 0;
              ottelijat.xpThreshold[index] *= 1.2;
              ottelijat.level[index] += 1;
              game.pelleCount++;
              game.totalCount++;
              updateUpgrades();
              };
            game.hampaita += ottelijat.power[index];
            updateUi();
            } else {
              ottelijat.progress[index] += ottelijat.step[index]
              document.getElementById('colbyCovingtonBar')!.style.width = `${ottelijat.progress[index]}%`
              }
          }, 10);
          updateUi();
        }
      } else {
        clearInterval(ottelijat.interval[index]);
        ottelijat.interval[index] = null;
        game.activeTrainers--;
        ottelijat.isActive[index] = false;
        updateUi();
      }
  })
}



  //const fighters = ['colbyCovington', 'kamaruUsman', 'shavkatRakhmonov', // ... ];

  //ottelijat.id.forEach((otteija, index) => {
   // addOttelijaEventListener(otteija, index);*/

/*function handleSaveButtonClick() {
  saveGame();
}

function handleLoadButtonClick() {
    loadGame();
}

function handleResetButtonClick() {
    resetGame();
}

function handleShopButtonClick() {
    game.shopOpen = !game.shopOpen;
    elements.shopItemsArr.forEach(item => {
        item.style.display = game.shopOpen ? 'block' : 'none';
    });
}

function handleAvaaSatunnainenButtonClick() {
    avaaSatunnainen();
    updateUi();
}

function handleLisääTrainereitaButtonClick() {
    lisääTrainereita();
}

function handleRebirthButtonClick() {
    rebirth();
}

   const eventHandlerMap: { [key: string]: () => void } = {
    saveButton: handleSaveButtonClick,
    loadButton: handleLoadButtonClick,
    resetButton: handleResetButtonClick,
    shopButton: handleShopButtonClick,
    avaaSatunnainenButton: handleAvaaSatunnainenButtonClick,
    lisääTrainereitaButton: handleLisääTrainereitaButtonClick,
    rebirthButton: handleRebirthButtonClick,
   }
document.addEventListener('click', (event: Event) => {
  const target = event.target as HTMLElement;
  if (target && target.id && eventHandlerMap[target.id]) {
    eventHandlerMap[target.id]();
  }
});*/




/*

function handleOttelijaClick(event: Event) {
  const target = event.target as HTMLElement;
  const index target.getAttribute('data-index');

  if (index === null) return;

  const idx = parseInt(index, 10);
  if (isNan(idx)) return;

  manageOttelija(idx);
}

function manageOttelija(idx: number) {
  if (!ottelijat.interval[idx]) {
    if (game.maxTrainers > game.activeTrainers) {
      game.activeTrainers++;
      ottelijat.isActive[idx] = true;
      ottelijat.interval[idx] = setInterval(() => {
        if (ottelijat.progress[idx] >= 100) {
          ottelijat.progress[idx] = 0;
          ottelijat.xp[idx] += 1;
          updateUi();
          if (ottelijat.xp[idx] >= ottelijat.xpThreshold[idx]) {
            ottelijat.xp[idx] = 0;
            ottelijat.xpThreshold[idx] *= 1.2;
            ottelijat.level[idx] += 1;
            updateUpgrades();
            };
          game.hampaita += ottelijat.power[idx];
          updateUi();
          } else {
            ottelijat.progress[idx] += ottelijat.step[idx]
            document.getElementById(`ottelijaBar${idx}`)!.style.width = `${ottelijat.progress[idx]}%`
          }
        }, 10);
        updateUi();
      }
  } else {
    clearInterval(ottelijat.interval[idx]);
    ottelijat.interval[idx] = null;
    game.activeTrainers--;
    ottelijat.isActive[idx] = false;
    updateUi();
  }
}

function addOttelijaEventListener() {
  const container = document.getElementById('app');
  if (container) {
    container.addEventListener('click', handleOttelijaClick);
  }
}

function handleOttelijaClick(event: Event) {
  console.log("1");
  const target = event.target as HTMLElement;
  console.log(target);
  const index = target.getAttribute('data-index');
  console.log("2");
  console.log(index);

  if (index === null) return;
  console.log("3");

  const idx = parseInt(index, 10);
  if (isNaN(idx)) return;
  console.log("4");

  manageOttelija(idx);
}

function manageOttelija(idx: number) {
  if (!ottelijat.interval[idx]) {
    if (game.maxTrainers > game.activeTrainers) {
      game.activeTrainers++;
      ottelijat.isActive[idx] = true;
      ottelijat.interval[idx] = setInterval(() => {
        if (ottelijat.progress[idx] >= 100) {
          ottelijat.progress[idx] = 0;
          ottelijat.xp[idx] += 1;
          updateUi();
          if (ottelijat.xp[idx] >= ottelijat.xpThreshold[idx]) {
            ottelijat.xp[idx] = 0;
            ottelijat.xpThreshold[idx] *= 1.2;
            ottelijat.level[idx] += 1;
            updateUpgrades();
            };
          game.hampaita += ottelijat.power[idx];
          updateUi();
          } else {
            ottelijat.progress[idx] += ottelijat.step[idx]
            document.getElementById(`ottelijaBar${idx}`)!.style.width = `${ottelijat.progress[idx]}%`
          }
        }, 10);
        updateUi();
      }
  } else {
    clearInterval(ottelijat.interval[idx]);
    ottelijat.interval[idx] = null;
    game.activeTrainers--;
    ottelijat.isActive[idx] = false;
    updateUi();
  }
}

function addOttelijaEventListener() {
  const container = document.getElementById('app');
  if (container) {
    container.addEventListener('click', handleOttelijaClick);
  }
}


*/