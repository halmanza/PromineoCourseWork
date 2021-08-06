class TicTacGame {
  constructor() {
    this.fieldValues = [];
    this.totalVal = [];
  }

  createGameField() {
    let field = document.getElementById("gameData");

    this.fieldValues.push(field.children[0]);
    this.fieldValues.push(field.children[1]);
    this.fieldValues.push(field.children[2]);
  }

  fieldValueCheck() {
    this.fieldValues.flatMap((item) => {
      this.totalVal.push({
        id: item.firstElementChild.id,
        value: item.firstElementChild.textContent,
      });
      this.totalVal.push({
        id: item.lastElementChild.previousElementSibling.id,
        value: item.lastElementChild.previousElementSibling.textContent,
      });
      this.totalVal.push({
        id: item.lastElementChild.id,
        value: item.lastElementChild.textContent,
      });
    });
  }

  compareResults() {
    if (
      arrResult(newGame.totalVal, checkArray("row1_1", "row2_2", "row3_3", "X"))
        .length === 3
    ) {
      getId("hiddenAlert").className =
        "d-flex flex-row justify-content-center alert alert-primary";
      getId("hiddenAlert").textContent = "X player wins!";
    } else if (
      arrResult(newGame.totalVal, checkArray("row1_1", "row2_2", "row3_3", "O"))
        .length === 3
    ) {
      getId("hiddenAlert").className =
        "d-flex flex-row justify-content-center alert alert-primary";
      getId("hiddenAlert").textContent = "O player wins!";
    }
  }

  resetGameValues() {
    this.totalVal = [];
  }
}

class TicTacPlayer {
  constructor(player) {
    this.player = player;
  }

  /* Method that creates even listener on all the td elements in the div#gameData element, It 
  fills the td with the players selected value of X or O */

  selectSquare(evt, color) {
    if (evt.target.closest("td")) {
      evt.target.textContent = this.player;
      evt.target.style.background = color;
    }
  }
}

// Utilitiy function for getting element ID
function getId(id) {
  return document.getElementById(id);
}

function checkArray(row1, row2, row3, valueInput) {
  return [
    { id: row1, value: valueInput },
    { id: row2, value: valueInput },
    { id: row3, value: valueInput },
  ];
}

// Watches the tbody#gameData element's children for DOM changes
function observeCallback(mutations) {
  for (let mute of mutations) {
    if (mute.type === "childList") {
      newGame.resetGameValues();
      newGame.fieldValueCheck();
      let testValue = newGame.totalVal.filter((item) => {
        return item;
      });
      console.log(testValue);
      setTimeout(() => {
        newGame.compareResults();
      }, 100);
    }
  }
}
function arrResult(arr1, arr2) {
  return arr1.filter((item) => {
    return arr2.some((item2) => {
      return item.id === item2.id && item.value === item2.value;
    });
  });
}

const newGame = new TicTacGame();
newGame.createGameField();

//Mutation Observer API usage
const watchNode = document.getElementById("gameData");
const oberserverObject = {
  childList: true,
  subtree: true,
};
let observer = new MutationObserver(observeCallback);
observer.observe(watchNode, oberserverObject);

const circlePlayer = new TicTacPlayer("O");
const xPlayer = new TicTacPlayer("X");

getId("buttonGroup").addEventListener("click", (e) => {
  let target = e.target;

  if (target.id === "player-x") {
    watchNode.addEventListener(
      "click",
      (e) => {
        xPlayer.selectSquare(e, "darkred");
      },
      true
    );
  } else if (target.id === "player-0") {
    watchNode.addEventListener(
      "click",
      (e) => {
        circlePlayer.selectSquare(e, "lightsalmon");
      },
      true
    );
  } else if (target.id === "resetGame") {
    let resetItems = gameData.querySelectorAll("td");
    for (let item of resetItems) {
      item.textContent = "free";
      item.style.background = "#212529";
    }
    getId("hiddenAlert").className =
      "d-none ";
  }
});
