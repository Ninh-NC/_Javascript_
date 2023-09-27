const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);
// lab 2.1

//1
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
console.log(`
1 sự kiện xảy ra, trung bình mỗi ${90 / gameEvents.size} phut
`);
const time = [...gameEvents.keys()].pop();
console.log(`
1 sự kiện xảy ra, trung bình mỗi ${time / gameEvents.size} phut
`);

//4
for (const [min, events] of gameEvents) {
  const half = min <= 45 ? "Hiep 1" : "Hiep 2";
  console.log(`[${half}] ${min} : ${events}`);
}

//lab 2.2

//1
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure

document.querySelector("button").addEventListener("click", function () {
  const text = document.getElementById("textarea").value;
  const rows = text.split("\n");
  // console.log(rows);
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});

// lab 2.3
// String Methods Practice

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
// 🔴 Delayed Departure from FAO to TXL (11h25)
// Arrival from BRU to FAO (11h45)
// 🔴 Delayed Arrival from HEL to FAO (12h05)
// Departure from FAO to LIS (12h30)

const getCode = (str) => str.slice(0, 3).toUpperCase();
// console.log(getCode);

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""} ${type.replaceAll(
    "_",
    " "
  )}${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padEnd(36);
  console.log(output);
}

// lab 2.4

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
