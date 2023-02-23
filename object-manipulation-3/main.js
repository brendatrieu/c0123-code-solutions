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

  hpPlayers.tiedPlayers = players.filter(player => player.totalPts === players[0].totalPts);

  while (hpPlayers.tiedPlayers.length > 1) {
    var k = numCards;
    for (var tp = 0; tp < hpPlayers.tiedPlayers.length; tp++) {
      var nextPlayer = hpPlayers.tiedPlayers[tp];
      var newCard = gameDeck.splice(0, 1);
      nextPlayer.hand.push(...newCard);
      nextPlayer.totalPts += nextPlayer.hand[k].value;
    }
    k++;
    hpPlayers.tiedPlayers.sort((a, b) => {
      return b.totalPts - a.totalPts;
    });
    hpPlayers.tiedPlayers = hpPlayers.tiedPlayers.filter(player => player.totalPts === players[0].totalPts);
  }

  console.log('Scores:', players);
  console.log('Winner: ', players[0].name, 'Total Pts: ', players[0].totalPts);
};

gameOn(cardDeck, hpPlayers, 3);

// Query for elements
var $hagrid = document.querySelector('#Hagrid');
// var $harry = document.querySelector('#Harry');
// var $hermione = document.querySelector('#Hermione');
// var $ron = document.querySelector('#Ron');
var $gameMsg = document.querySelector('#game-msg');
var $playButton = document.querySelector('.play-button');
var $playingField = document.querySelector('#playing-field');
var $hands = document.querySelectorAll('.hand');

// Delay function
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

// Define a functions to render cards
var startGame = async (numCards) => {
  for (var i = 0; i < numCards; i++) {
    for (var hand = 0; hand < $hands.length; hand++) {
      await delay(100);
      var $newCardDiv = document.createElement('div');
      var $newCard = document.createElement('img');
      $newCard.setAttribute('src', 'https://i.pinimg.com/474x/c5/1d/20/c51d206805338e816758e86f86e2311c--custom-playing-cards-collectible-cards.jpg');
      $newCardDiv.className = 'card-back';
      $newCardDiv.appendChild($newCard);
      $hands[hand].appendChild($newCardDiv);
    }
  }
};

var revealCards = async (numCards) => {
  for (var i = 0; i < numCards; i++) {
    for (var card = 0; card < $hands.length; card++) {
      await delay(500);
      var $newCardDiv = document.createElement('div');
      var $rank = document.createElement('h3');
      var $suite = document.createElement('h2');
      $newCardDiv.className = 'card-value';
      var player = $hands[card].getAttribute('id');
      var currCard = hpPlayers.filter(char => char.name === player)[0].hand[i];
      $rank.innerHTML = currCard.rank;
      $suite.innerHTML = currCard.suite;
      $newCardDiv.appendChild($rank);
      $newCardDiv.appendChild($suite);
      $hands[card].replaceChild($newCardDiv, $hands[card].childNodes[i+1]);
    }
  }
};

// Add event listeners
$playButton.addEventListener('click', async () => {
  var numCards = 2;
  $gameMsg.className = 'hidden';
  gameOn(cardDeck, hpPlayers, 2);
  await startGame(numCards);
  revealCards(numCards);
});

$playingField.addEventListener('click', event => {

  if (event.target.tagName === 'IMG') {

  }
});
