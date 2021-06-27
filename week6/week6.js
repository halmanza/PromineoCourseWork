

const CARDVALUES = [
  "A",
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
  "Jack",
  "Queen",
  "King",
];
const CARDSUITS = ["Club", "Diamond", "Heart", "Spade"];

class Card {
  constructor(cardVal, cardSuits) {
    this.cardVal = cardVal;
    this.cardSuits = cardSuits;
  }
}

class Deck {
  //Constructor uses cards with a default value of function createNewDeck
  constructor(cards = createNewDeck()) {
    this.cards = cards;
  }

  cardLength() {
    return this.cards.length;
  }

  //shuffle similar to fisher-yates algorithim
  shuffle() {
    for (let x = this.cardLength() - 1; x > 0; x--) {
      const randomVal = Math.floor(Math.random() * (x - 1));
      const storedVal = this.cards[randomVal];
      this.cards[randomVal] = this.cards[x];
      this.cards[x] = storedVal;
    }
  }

  /*Method deal takes 25 cards from the deck object and stores them in an array for usage by player.
  It requires reshuffling after dealing each hand for randomization of cards.
   */
  deal() {
    let dealtHand = [];

    for (let cardix = 0; this.cardLength() > cardix; cardix++) {
      if (cardix >= 25) break;
      dealtHand.push(this.cards[cardix]);
    }
    return dealtHand;
  }
}

class Player {
  constructor() {
    this.hand = [];
  }
  // Intakes the array of hands from the cards class then flattens the array of objects and pushes them into hand array for player object.
  initialHand(intake) {
    this.hand.push(intake);
    this.hand = this.hand.flat(2);
    console.log();
  }
}

/* Creates a winning player object to update at end of comparison with winning player based on round of hands won */

const compareEachRound = (player1, player2) => {
  let winningPlayer = {
    player: "",
    points: 0,
  };

  const player1Hand = player1.filter((hand) => {
    return hand.cardSuits, hand.cardVal;
  });
  const player2Hand = player2.filter((hand2) => {
    return hand2.cardSuits, hand2.cardVal;
  });

  if (player1Hand.length == player2Hand.length) {
    let team1Score = 0;
    let team2Score = 0;

    for (let x = 0; x < player1Hand.length; x++) {
      if (player1Hand[x].cardVal > player2Hand[x].cardVal) {
        team1Score += 1;
        console.log(
          `Player 1 wins this round with a ${player1Hand[x].cardSuits} ${player1Hand[x].cardVal}`
        );
      } else if (player1Hand[x].cardVal === player2Hand[x].cardVal) {
        team1Score += 1;
        team2Score += 1;
        console.log("It's a draw for this round");
      } else {
        team2Score += 1;
        console.log(
          `Player 2 wins this round with a ${player2Hand[x].cardSuits} ${player2Hand[x].cardVal}`
        );
      }
    }
    team1Score > team2Score
      ? (winningPlayer = {
          player: "Player 1",
          points: team1Score,
        })
      : (winningPlayer = {
          player: "Player 2",
          points: team2Score,
        });
  }
  return winningPlayer;
};

function createNewDeck() {
  return CARDSUITS.flatMap((suits) => {
    return CARDVALUES.map((val) => {
      return new Card(val, suits);
    });
  });
}

let newGame = new Deck();
let player1 = new Player();
let player2 = new Player();

newGame.shuffle();

player1.initialHand(newGame.deal());

newGame.shuffle();
/* shuffle to randomize for each new hand dealt to player */
player2.initialHand(newGame.deal());

console.log(compareEachRound(player1.hand, player2.hand));
