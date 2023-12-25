// // script.js
// let timer;
// let seconds = 0;

// function startTimer() {
//   timer = setInterval(updateTimer, 1000);
// }

// function pauseTimer() {
//   clearInterval(timer);
// }

// function resetTimer() {
//   clearInterval(timer);
//   seconds = 0;
//   updateTimerDisplay();
// }
// function updateTimer() {
//   seconds++;
//   updateTimerDisplay();
// }
// function updateTimerDisplay() {
//   const hours = Math.floor(seconds / 3600);
//   const minutes = Math.floor((seconds % 3600) / 60);
//   const remainingSeconds = seconds % 60;

//   const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(
//     remainingSeconds
//   )}`;
//   document.getElementById("timer").innerText = formattedTime;
// }
// function pad(value) {
//   return value < 10 ? "0" + value : value;
// }

// const timerAdd = document.getElementsByClassName("addtimer")[0];
// const boxMain = document.getElementsByClassName("main-box")[0];
// let seconds = 0;
// function startTimer() {
//   timer = setInterval();
// }

// const array = [1, 2, 3, 4, 5, 6];
// function arrayMulti() {
//   const newArray = [];
//   for (let index = 0; index < array.length; index++) {
//     newArray.push(array[index] * 2);
//   }
//   return newArray;
// }
// const result = arrayMulti();
// console.log(result);

// const array = [1, 2, 3, 4, 5, 6];
// function arrayHuvaah() {
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (arr[i]% 2 === 0) {
//       console.log(newArray[i]);
//     } else {
//       console.log();
//     }
//   }
// }🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃 map🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃
// const array = [1, 2, 3, 4, 5, 6];

// console.log(
//   array.map((el, i) => {
//     if (el % 2 === 0) {
//       return el * 2;
//     }
//     return el;
//   })
// );

// // }🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃 filter (tuhain nuhtsuld tohirson function bichne)🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃
// const arra = [1, 2, 3, 4, 5, 6];

// const yubna = array.filter((el, i) => {
//   if (el % 2 === 0) {
//     return el * 2;
//   }
// });
// console.log(yubna);
// 🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃 map🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃
// Uppercase Strings:
// Input: ['apple', 'banana', 'cherry']
// Output: ['APPLE', 'BANANA', 'CHERRY']

// const input = ["apple", "banana", "cherry"];
// const output = input.map((el) => el.toUpperCase());
// console.log(output);

// 🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃 map🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃
// Filter by Length:
// Input: ['cat', 'dog', 'elephant', 'lion'], Min Length: 4
// Output: ['elephant', 'lion']

// const input = ["cat", "dog", "elephant", "lion"];
// const minLength = input.filter((el) => {
//   if (el.length >= 4) {
//     return el;
//   }
// });
// console.log(minLength);
// 🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃 map🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃
// Calculate Squares:
// Input: [2, 4, 6]
// Output: [4, 16, 36]

// const input = [2, 4, 6];
// console.log(input.map((el) => el ** 2));
// 🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃 map🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃
// Extract Names:
// Input: [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }]
// Output: ['Alice', 'Bob', 'Charlie']

// const input = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
// const output = input.map((obj) => obj.name);
// console.log(output);

// 🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃 map🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃
// Filter by Type:
// Input: [1, 'apple', true, 42, 'banana'], Target Type: 'string'
// Output: ['apple', 'banana']

// const input = [1, "apple", true, 42, "banana"];
// const targetType = "string";
// const output = input.filter((item) => typeof item === targetType);
// console.log(output);

// 🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃 map🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃
const input = [1, 2, 2, 3, 4, 4, 5];

const el = [];
const output = input.filter((item) => {
  if (!el.includes(item)) {
    el.push(item);
    return item;
  }
});

console.log(output);
