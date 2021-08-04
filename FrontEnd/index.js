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
    const win1x= ['X',13,'X',13,'X',13]
    
    let xValues = this.fieldValues.map((item) => {
      return item.textContent.match(/x/i);
    });

    let filterVal = xValues.filter((item) => {
      return item;
    });

    let xKeys = filterVal.find((item) =>
      this.totalVal.push(item[0], item.index)
    );
    console.log(xKeys)
    console.log(this.totalVal)
    let firstWinX= this.totalVal.length === win1x.length &&
    this.totalVal.every((elm)=>{
      return win1x.includes(elm);
    })

    switch (this.totalVal.length > 0){
        case firstWinX:
          console.log(true);
          break;
        default:
          console.log('didnt work');
    }
  }

  resetGameValues(){
    this.totalVal=[];
  }
}

class TicTacPlayer {
  constructor(player) {
    this.player = player;
  }

  /* Method that creates even listener on all the td elements in the div#gameData element, It 
  fills the td with the players selected value of X or O */
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

// Utilitiy functionf or getting element ID
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
  newGame.resetGameValues();
});

getId("gameData").addEventListener("click", () => {
  newGame.checkForWinner();
  
});

