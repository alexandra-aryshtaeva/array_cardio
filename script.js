// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()_____________________________________________________
// 1. Filter the list of inventors for those who were born in the 1500's
// __________
// Example:
//  const ages = [32, 33, 16, 40];
// ages.filter(myFunction);
// function myFunction(variable) {
// return variable >= 18;
// }

function filterDate(inventor) {
  return inventor.year >= 1500 && inventor.year < 1600;
}

let date = inventors.filter(filterDate);

// Array.prototype.map()___________________________________________________________
// 2. Give us an array of the inventors first and last names
// ___________
// Example:
// const numbers = [4, 9, 16, 25];
// let multiply = numbers.map(multiply2);

// function multiply2(num) {
//   return num * 2;
// }
// console.log(multiply);

let fullName = inventors.map(filterName);

function filterName(inventor) {
  return inventor.first + " " + inventor.last;
}

// function firstName(inventor) {
//   return inventor.first;
// }
// function lastName(inventor) {
//   return inventor.last;
// }

// Array.prototype.sort()_____________________________________________________________
// 3. Sort the inventors by birthdate, oldest to youngest
// __________
// Example
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function (a, b) {
//   return b - a;
// });

let orderedDates = inventors.sort(compare);

function compare(inventorA, inventorB) {
  return inventorA.year - inventorB.year;
}

console.log(orderedDates);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

// 5. Sort the inventors by years lived

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. sort Exercise
// Sort the people alphabetically by last name

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];
