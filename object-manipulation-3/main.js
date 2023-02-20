console.log('Lodash is loaded:', typeof _ !== 'undefined');

var hpPlayers = [
  {
    name: 'Harry',
    hand: [],
    totalPts: null
  },
  {
    name: 'Hermione',
    hand: [],
    totalPts: null
  },
  {
    name: 'Ron',
    hand: [],
    totalPts: null
  },
  {
    name: 'Hagrid',
    hand: [],
    totalPts: null
  }
];

var cardDeck = [];

var createDeck = () => {
  var suites = ['hearts', 'spades', 'clubs', 'diamonds'];
  var rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

  for (var i = 0; i < rank.length; i++) {
    var currCard = {};
    for (var j = 0; j < suites.length; j++) {
      currCard[rank[i]] = suites[j];
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

var gameOn = (deck, players, numCards) => {
  var gameDeck = _.shuffle(deck);
  for (var player = 0; player < players.length; player++) {
    var currPlayer = players[player];
    currPlayer.hand = gameDeck.splice(0, numCards);
    currPlayer.totalPts = _.sumBy(currPlayer.hand, function (o) { return o.value; });
  }
  players.sort((a, b) => {
    return b.totalPts - a.totalPts;
  });

  var tiedPlayers = players.filter(player => player.totalPts === players[0].totalPts);

  while (tiedPlayers.length > 1) {
    var k = numCards;
    for (var tp = 0; tp < tiedPlayers.length; tp++) {
      var nextPlayer = tiedPlayers[tp];
      var newCard = gameDeck.splice(0, 1);
      nextPlayer.hand.push(...newCard);
      nextPlayer.totalPts += nextPlayer.hand[k].value;
    }
    k++;
    tiedPlayers.sort((a, b) => {
      return b.totalPts - a.totalPts;
    });
    tiedPlayers = tiedPlayers.filter(player => player.totalPts === players[0].totalPts);
  }

  console.log('Scores:', players);
  console.log('Winner: ', players[0].name, 'Total Pts: ', players[0].totalPts);
};

gameOn(cardDeck, hpPlayers, 3);

// Query for elements
// var $hagrid = document.querySelector('#Hagrid');
// var $harry = document.querySelector('#Harry');
// var $hermione = document.querySelector('#Hermione');
// var $ron = document.querySelector('#Ron');
var $gameMsg = document.querySelector('#game-msg');
var $playButton = document.querySelector('.play-button');

// Define a function to render cards
// var renderCards = () => {
//   var $newCard = document.createElement('img');
//   $newCard.setAttribute('src', 'https://i.pinimg.com/474x/c5/1d/20/c51d206805338e816758e86f86e2311c--custom-playing-cards-collectible-cards.jpg');
//   $newCard.className = 'card';
// };

// Add event listeners
$playButton.addEventListener('click', () => {
  $gameMsg.className = 'hidden';
});
