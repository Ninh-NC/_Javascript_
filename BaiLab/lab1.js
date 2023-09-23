// lab1.1
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1
const [players1, players2] = game.players;
// console.log(players1, players2);

// 2
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;
// console.log(gk1, fieldPlayers1);
// console.log(gk2, fieldPlayers2);

//3
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

//4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

//5
const {
  odds: { team1, x: draw, team2 },
} = game;
// console.log(team1, draw, team2);

//6

const printGoals = function (...players) {
  console.log(`So ban thang da ghi ${players.length}`);
  console.log(...players);
};
printGoals(...game.scored);

//7

team1 < team2 && console.log("Team 1 co kha nang thang cao hon team 2");
team1 > team2 && console.log("Team 2 co kha nang thang cao hon team 1");

//////////
// lab1.2
console.log("----------Lab1.2----------");
//1
for (const [i, players] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${players}`);
}

//2
const odds = Object.values(game.odds);
console.log(odds);
let tb = 0;
for (const odd of odds) tb += odd;
tb /= odds.length;
// console.log(tb);

//3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
// them
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
