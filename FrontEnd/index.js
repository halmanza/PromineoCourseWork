class TicTacGame {
  constructor() {
    this.fieldValues = [];
    this.totalVal = [];
  }

  createGameField() {
    let field = document.getElementById("gameData");

    this.fieldValues.push(field.children.item(0));
    this.fieldValues.push(field.children.item(1));
    this.fieldValues.push(field.children.item(2));
  }

  checkForWinner() {
    let xValues = this.fieldValues.map((item) => {
      return item.textContent.match(/x|o/i);
    });

    let filterVal = xValues.filter((item) => {
      return item;
    });

    let xKeys = filterVal.find((item) =>
      this.totalVal.push(item[0], item.index)
    );

  }
}

class TicTacPlayer {
  constructor(player) {
    this.player = player;
  }

  selectSquare(color) {
    let item = gameData.querySelectorAll("td");

    for (let elm of item) {
      if (elm.textContent == "free") {
        elm.addEventListener("click", () => {
          elm.textContent = this.player;
          elm.style.background = color;
        });
      }
    }
  }
}

function getId(id) {
  return document.getElementById(id);
}

const newGame = new TicTacGame();
newGame.createGameField();

const circlePlayer = new TicTacPlayer("O");
const xPlayer = new TicTacPlayer("X");

getId("player-x").addEventListener("click", () => {
  xPlayer.selectSquare("darkred");
});

getId("player-0").addEventListener("click", () => {
  circlePlayer.selectSquare("darksalmon");
});

getId("resetGame").addEventListener("click", () => {
  let resetItems = gameData.querySelectorAll("td");
  for (let item of resetItems) {
    item.textContent = "free";
    item.style.background = "#212529";
  }
});

getId("gameData").addEventListener("click", () => {
  newGame.checkForWinner();
});
