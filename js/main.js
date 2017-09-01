//Initialize Score
var totalWins = 0;
var totalLosses = 0;

//Available Cards
var cards = [{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png",
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png",
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png",
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png",
  }
];


//Flip card and verify win status
var cardsInPlay = [];

var flipCard = function() {
  var cardId = this.getAttribute('data-id');

  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);

  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);


  this.setAttribute('src', cards[cardId].cardImage);

  var checkForMatch = function() {
    if (cardsInPlay.length === 2) {

      if (cardsInPlay[0] === cardsInPlay[1]) {
        totalWins++;
        document.getElementById('wins').textContent = totalWins;
        alert("You found a match!");
      } else {
        totalLosses++;
        document.getElementById('losses').textContent = totalLosses;
        alert("Sorry, try again.")
      }

      // alert (cardsInPlay[0] === cardsInPlay[1] ? "You found a match!" : "Sorry, try again.");
    }
  };

  checkForMatch();

};


var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    // console.log(i)
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  };
};

createBoard();

//Reset the game
var resetGame = function() {

  //Clear out Cards in Play array
  cardsInPlay = [];

  //Remove old GameBoard
  var boardID = document.getElementById("game-board");
  while (boardID.firstChild) {
    boardID.removeChild(boardID.firstChild);
  }

  //Recreate GameBoard
  createBoard();

}

//Reset Button Event Listener
var buttonId = document.getElementsByTagName('button')[0];
buttonId.addEventListener('click', resetGame);
