console.log('Lodash is loaded:', typeof _ !== 'undefined');


// Query for elements
var $Hagrid = document.querySelector('#Hagrid');
var $Harry = document.querySelector('#Harry');
var $Hermione = document.querySelector('#Hermione');
var $Ron = document.querySelector('#Ron');
var $gameMsg = document.querySelector('#game-msg');
var $playButton = document.querySelector('.play-button');
var $gameView = document.querySelector('#game-view');
var $endButton = document.querySelector('.end-button');
var $gameOver = document.querySelector('#game-over');
var $playingField = document.querySelector('#playing-field');
var $hands = document.querySelectorAll('.hand');
var $winner = document.querySelector('#winner');

var hpPlayers = [
  {
    name: 'Harry',
    hand: [],
    tiedHand: [],
    totalPts: null
  },
  {
    name: 'Hermione',
    hand: [],
    tiedHand: [],
    totalPts: null
  },
  {
    name: 'Ron',
    hand: [],
    tiedHand: [],
    totalPts: null
  },
  {
    name: 'Hagrid',
    hand: [],
    tiedHand: [],
    totalPts: null
  }
];

var tiedPlayers = [];
var gameDeck = [];
var cardDeck = [];

var createDeck = () => {
  var suites = ['&hearts;', '&spades;', '&clubs;', '&diams;'];
  var rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

  for (var i = 0; i < rank.length; i++) {
    var currCard = {};
    for (var j = 0; j < suites.length; j++) {
      currCard.rank = rank[i];
      currCard.suite = suites[j];
      if (typeof rank[i] === 'number') {
        currCard.value = rank[i];
      } else if (rank[i] === 'A') {
        currCard.value = 11;
      } else {
        currCard.value = 10;
      }
      cardDeck.push(currCard);
      currCard = {};
    }
  }
};

createDeck();

// Define a function to render cards and reveal with ties
var tiebreaker = async () => {
  while (tiedPlayers.length > 1) {
    for (var tp = 0; tp < tiedPlayers.length; tp++) {
      var nextPlayer = tiedPlayers[tp];
      var newCard = gameDeck.splice(0, 1);
      nextPlayer.tiedHand.push(...newCard);
      hpPlayers.filter(player => player.name === tiedPlayers[tp].name)[0].totalPts += nextPlayer.tiedHand[0].value;
    }
    await dealCards(1, tiedPlayers);
    var tiedPlayersDiv = [];
    for (var m = 0; m < tiedPlayers.length; m++) {
      tiedPlayersDiv.push(findPlayerDiv(tiedPlayers[m].name));
    }
    await revealCards(1, tiedPlayersDiv, false);
    tiedPlayers.forEach(player => player.tiedHand = []);
    tiedPlayers.sort((a, b) => {
      return b.totalPts - a.totalPts;
    });
    tiedPlayers = tiedPlayers.filter(player => player.totalPts === tiedPlayers[0].totalPts);
  }
  $winner.textContent = tiedPlayers[0].name;
};

var gameOn = async (deck, players, numCards) => {
  gameDeck = _.shuffle(deck);
  for (var player = 0; player < players.length; player++) {
    var currPlayer = players[player];
    currPlayer.hand = gameDeck.splice(0, numCards);
    currPlayer.totalPts = _.sumBy(currPlayer.hand, function (o) { return o.value; });
  }

  await dealCards(numCards, $hands);

  players.sort((a, b) => {
    return b.totalPts - a.totalPts;
  });

  tiedPlayers = players.filter(player => player.totalPts === players[0].totalPts);

};

// Delay function
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

// Define a functions to render cards
var dealCards = async (numCards, hands) => {
  for (var i = 0; i < numCards; i++) {
    for (var hand = 0; hand < hands.length; hand++) {
      await delay(100);
      var $newCardDiv = document.createElement('div');
      var $newCard = document.createElement('img');
      $newCard.setAttribute('src', 'https://i.pinimg.com/474x/c5/1d/20/c51d206805338e816758e86f86e2311c--custom-playing-cards-collectible-cards.jpg');
      $newCardDiv.className = 'card-back';
      $newCardDiv.appendChild($newCard);
      findPlayerDiv(hpPlayers[hand].name).appendChild($newCardDiv);
    }
  }
};

// Function to reveal card values
var revealCards = async (numCards, hands, start) => {
  for (var i = 0; i < numCards; i++) {
    for (var card = 0; card < hands.length; card++) {
      await delay(500);
      var $newCardDiv = document.createElement('div');
      var $rank = document.createElement('h3');
      var $suite = document.createElement('h2');
      $newCardDiv.className = 'card-value';
      var player = hands[card].getAttribute('id');
      var currCard = start ? hpPlayers.filter(char => char.name === player)[0].hand[i] : hpPlayers.filter(char => char.name === player)[0].tiedHand[i];
      $rank.innerHTML = currCard.rank;
      $suite.innerHTML = currCard.suite;
      $newCardDiv.appendChild($rank);
      $newCardDiv.appendChild($suite);
      var cardIndex = start ? i + 1 : hands[card].childNodes.length -1;
      hands[card].replaceChild($newCardDiv, hands[card].childNodes[cardIndex]);
    }
  }
  revealScores();
};

// Function to find target div
var findPlayerDiv = (name) => {
  switch (name) {
    case 'Hagrid':
      return $Hagrid;
    case 'Harry':
      return $Harry;
    case 'Hermione':
      return $Hermione;
    case 'Ron':
      return $Ron;
  }
}

// Define a function to reveal scores
var revealScores = () => {
  for (var i = 0; i< hpPlayers.length; i++) {
    var name = hpPlayers[i].name;
    var points = hpPlayers[i].totalPts;
    document.getElementById(`${name}-score`).textContent = points;
  }
}

// Reset game
var resetGame = () => {
  tiedPlayers = [];
  gameDeck = [];
  cardDeck = [];
  createDeck();
  hpPlayers.forEach(player => player.hand = []);
  hpPlayers.forEach(player => player.totalPts = null);
  hpPlayers.forEach(player => player.tiedHand = []);
  $gameView.className = "hidden";
  $gameOver.className = "hidden";
  $gameMsg.className = "";
  // var $hands = document.querySelectorAll('.hand');
  for(var i = 0; i < $hands.length; i++) {
    while($hands[i].firstElementChild) {
      $hands[i].removeChild($hands[i].firstElementChild)
    }
    document.getElementById(`${$hands[i].getAttribute('id')}-score`).textContent = 0;
  }
};

// Add event listeners
$playButton.addEventListener('click', async () => {
  var numCards = 2;
  $gameMsg.className = 'hidden';
  $gameView.className = "";
  await gameOn(cardDeck, hpPlayers, numCards);
  await revealCards(numCards, $hands, true);
  await tiebreaker();
  await delay(2000);
  $gameOver.className = "";
});

$endButton.addEventListener('click', resetGame);
