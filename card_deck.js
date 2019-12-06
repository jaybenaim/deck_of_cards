function init(cards = buildCards) {
  var cards = cards;
  function size() {
    return cards;
  }

  return size();
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
console.log(init(buildCards()));
