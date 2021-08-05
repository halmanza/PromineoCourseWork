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
    let winDiagnol1 = [
      { id: "row1_1", value: "X" },
      { id: "row2_2", value: "X" },
      { id: "row3_3", value: "X" },
    ];

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

    let result = this.totalVal.filter((item) => {
      return winDiagnol1.some((item2) => {
        item.id === item2.id && item.value === item2.value;
      });
    });

    console.log(Boolean(result));

    // switch(this.fieldValues.length > 0){
    //   case diagnolCheck1:
    //     console.log(true)
    //   default:
    //     console.log('Nope')
    // }
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

function observeCallback(mutations) {
  for (let mute of mutations) {
    if (mute.type === "childList") {
      newGame.resetGameValues();
      // newGame.fieldValues.flatMap((item) => console.log(item));
      newGame.fieldValueCheck();
      let testValue = newGame.totalVal.filter((item) => {
        return item;
      });
      console.log(testValue);
    }
  }
}

const newGame = new TicTacGame();
newGame.createGameField();

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
  switch (target.id) {
    case "player-x":
      watchNode.addEventListener("click", (e) => {
        xPlayer.selectSquare(e, "darkred");
      });
      break;
    case "player-0":
      watchNode.addEventListener("click", (e) => {
        circlePlayer.selectSquare(e, "lightsalmon");
      });
      break;
    case "resetGame":
      let resetItems = gameData.querySelectorAll("td");
      for (let item of resetItems) {
        item.textContent = "free";
        item.style.background = "#212529";
      }

      newGame.resetGameValues();
      break;
    default:
      console.log("Next Round");
  }
});
