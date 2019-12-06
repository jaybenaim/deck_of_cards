// CLOSURE //

// function init(cards) {
//   var cards = cards;
//   function size() {
//     return cards.length;
//   }

//   return size();
// }
class CardDeck {
  constructor(cards) {
    this.cards = cards;
  }
  size() {
    return this.cards.length;
  }
  shuffle() {
    let cards = this.cards;
    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }
  draw() {
    let cards = this.cards;
    return cards.shift();
  }
}
function buildCards() {
  const suite = ["♠︎", "♣︎", "♥︎", "♦︎"];
  const rank = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let deck = [];
  for (let i = 0; i <= suite.length - 1; i++) {
    for (let j = 0; j <= rank.length - 1; j++) {
      deck.push({ [suite[i]]: rank[j] });
    }
  }
  return deck;
}

var cards = new CardDeck(buildCards());
cards.shuffle();
var n = new CardDeck(buildCards());
n.shuffle();

console.log(n.draw());
