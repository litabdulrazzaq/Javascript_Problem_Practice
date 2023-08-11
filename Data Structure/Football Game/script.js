"use strict";

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const game = {
  team1: "pakistan",
  team2: "india",
  players: [
    [
      "babar",
      "fakhar",
      "imam",
      "haris",
      "rizwan",
      "imad",
      "shabad",
      "usama",
      "shaheen",
      "naseem",
      "agha",
    ],
    [
      "rohit",
      "rahul",
      "ishan",
      "kohli",
      "yadav",
      "mohit",
      "dohni",
      "bumrah",
      "siraj",
      "kumar",
      "hardik",
    ],
  ],
  score: "4:0",
  scored: ["babar", "fakhar", "imam", "shabad"],
  date: "Sep 27, 2023",
  odds: {
    team1: 1.33,
    x: 3.15,
    team2: 6.2,
  },
};

const [players1, players2] = game.players.map((team) =>
  team.map((player) => capitalizeFirstLetter(player))
);
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, "Hafeez", "Malik", "Faheem"];

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored.`);
};

printGoals("babar", "hafeez", "malik");
printGoals("rizwan", "faheem");
printGoals("rohit", "kohli", "hardik", "jadeja");
printGoals(...game.scored);

team1 < team2 && console.log("team 1 more likely to win.");
team1 > team2 && console.log("team 2 more likely to win.");
