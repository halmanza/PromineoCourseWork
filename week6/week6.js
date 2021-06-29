const CARDVALUES = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'Jack', 'Queen', 'King']
const CARDSUITS = ['Club', 'Diamond', 'Heart', 'Spade'];


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

  // Utilized  help with this section from web dev simplified and dev dojo to properly randomize shuffle
  shuffle() {
    for (let x = this.cardLength() - 1; x > 0; x--) {
      const randomVal = Math.floor(Math.random() * (x + 1));
      const storedVal = this.cards[randomVal];
      this.cards[randomVal] = this.cards[x];
      this.cards[x] = storedVal;

    }
  }

  deal() {
    let dealtHand = [];

    for (let cardix = 0; this.cardLength() > cardix; cardix++) {
      if (cardix >= 26) break;
      dealtHand.push(this.cards[cardix])
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
    console.log()

  }
}

/* Creates a winning player object to update at end of comparison with winning player based on round of hands won */


const compareEachRound = (player1, player2) => {
  let winningPlayer = {
    player: '',
    points: 0
  };

  //two arrays for player 1 and 2 that contain card suit and card value
  const player1Hand = player1.filter(hand => {
    return hand.cardSuits, hand.cardVal
  });
  const player2Hand = player2.filter(hand2 => {
    return hand2.cardSuits, hand2.cardVal
  });

  // tracker for keeping point score of each round
  let team1Score = 0;
  let team2Score = 0;

  for (let x = 1; x < player1Hand.length; x++) {
    //double check if players both have same amount of starting cards
    switch (player1Hand.length === player2Hand.length) {

      //case for player 1 winning with number cards against other numbered cards
      case player1Hand[x].cardVal > player2Hand[x].cardVal:
        team1Score++;
        console.log('Player 1 wins with a ' + ' ' + player1Hand[x].cardSuits + ' ' + player1Hand[x].cardVal + ' round' + ' ' + x)
        break;
        // case for player 2 winning with number cards against other numbered cards
      case player2Hand[x].cardVal > player1Hand[x].cardVal:
        team2Score++;
        console.log('Player 2 wins with a ' + ' ' + player2Hand[x].cardSuits + ' ' + player2Hand[x].cardVal +
          ' round' + ' ' + x)
        break;

        //case for matching value
      case player1Hand.cardVal === player2Hand.cardVal:
        console.log('Draw no points awarded' + ' ' + 'round ' + x);
        break;

        //Face cards against other cards

        //King wins for player 1
      case player1Hand[x] === 'King' && player2Hand[x].cardVal === 'Queen' || player2Hand[x].cardVal === 'Jack' ||
      player2Hand[x].cardVal === 'Ace' || typeof player2Hand[x].cardVal === 'number':
        team1Score++;
        console.log('Player 1 wins with a ' + ' ' + player1Hand[x].cardSuits + ' ' + player1Hand[x].cardVal +
          ' round' + ' ' + x)
        break;

        //king wins for player 2
      case player2Hand[x] === 'King' && player1Hand[x].cardVal === 'Queen' || player1Hand[x].cardVal === 'Jack' ||
      player1Hand[x].cardVal === 'Ace' || typeof player1Hand[x].cardVal === 'number':
        team2Score++;
        console.log('Player 2 wins with a ' + ' ' + player2Hand[x].cardSuits + ' ' + player2Hand[x].cardVal + ' round' + ' ' + x)
        break;

        //Queen wins for player 1
      case player1Hand[x] === 'Queen' && player2Hand[x].cardVal === 'Queen' || player2Hand[x].cardVal === 'Jack' ||
      player2Hand[x].cardVal === 'Ace' || typeof player2Hand[x].cardVal === 'number':
        team1Score++;
        console.log('Player 1 wins with a ' + ' ' + player1Hand[x].cardSuits + ' ' + player1Hand[x].cardVal +
          'round' + ' ' + x)
        break;

        //Queen wins for player 2
      case player2Hand[x] === 'Queen' && player1Hand[x].cardVal === 'Jack' ||
      player1Hand[x].cardVal === 'Ace' || typeof player1Hand[x].cardVal === 'number':
        team2Score++;
        console.log('Player 2 wins with a ' + ' ' + player2Hand[x].cardSuits + ' ' + player2Hand[x].cardVal +
          'round' + ' ' + x)
        break;

        //Jack wins for player 1
      case player1Hand[x] === 'Jack' && player2Hand[x].cardVal === 'Ace' || typeof player2Hand[x].cardVal === 'number':
        team1Score++;
        console.log('Player 1 wins with a ' + ' ' + player1Hand[x].cardSuits + ' ' + player1Hand[x].cardVal +
          'round' + ' ' + x)
        break;

        //Jack wins for player 2
      case player2Hand[x] === 'Jack' && player1Hand[x].cardVal === 'Ace' || typeof player1Hand[x].cardVal === 'number':
        team2Score++;
        console.log('Player 2 wins with a ' + ' ' + player2Hand[x].cardSuits + ' ' + player2Hand[x].cardVal +
          'round' + ' ' + x)
        break;

        //Ace wins for player 1
      case player1Hand[x] === 'Ace' && typeof player2Hand[x].cardVal === 'number':
        team1Score++;
        console.log('Player 1 wins a ' + ' ' + player1Hand[x].cardSuits + ' ' + player1Hand[x].cardVal +
          'round' + ' ' + x)
        break;

        //Ace wins for player 2
      case player2Hand[x] === 'Ace' && typeof player1Hand[x].cardVal === 'number':
        team2Score++;
        console.log('Player 2 wins with a ' + ' ' + player2Hand[x].cardSuits + ' ' + player2Hand[x].cardVal +
          'round' + ' ' + x)
        break;

    }

  }


  // ternary statement for the winning team and total points.
  team1Score > team2Score ?
    (winningPlayer = {
      player: "Player 1",
      points: team1Score,
    }) :
    (winningPlayer = {
      player: "Player 2",
      points: team2Score,
    });
  console.log(`The winning player is ${winningPlayer.player} with ${winningPlayer.points} points!`)
}

function createNewDeck() {
  return CARDSUITS.flatMap(suits => {
    return CARDVALUES.map(val => {
      return new Card(val, suits);
    })
  })
}


let newGame = new Deck();
let player1 = new Player();
let player2 = new Player();

newGame.shuffle();

player1.initialHand(newGame.deal());

newGame.shuffle();
/* shuffle to randomize for each new hand dealt to player */
player2.initialHand(newGame.deal());

compareEachRound(player1.hand, player2.hand);
