// let studentsaName = [
//   "Bat",
//   "Baldan",
//   "Dulmaa",
//   "Gonchig",
//   "Luubat",
//   "Mahjin",
//   "Bat",
//   "Baldan",
//   "Dulmaa",
//   "Gonchig",
//   "Luubat",
//   "Mahjin",
// ];
// let index = 0;

// while (index < studentsaName.length) {
//   console.log(studentsaName[index]);
//   index++;
// }

// let sum = 0;
// let number = parseInt(prompt("1ees deesh too oruul:"));

// let i = 1;
// while (i <= number) {
//   sum += i;
//   i++;
// }

// console.log("1-ээс", number, "niilber:", sum);

// let sum = 1;

// let number = parseInt(prompt("ta 1-100giin hoorond too oruulna uu?"));
// if (sum <= 1 && sum >= 100) {
//   console.log(sum);
// } else sum >= 1 && sum <= 100;
// {
//   alert.prompt("ta buruu too oruulsan bn");
// }
// while ()
// JavaScript version of the Number Guessing Game

// JavaScript version of the Number Guessing Game using while loop

// function numberGuessingGame() {
//   console.log("Welcome to the Number Guessing Game!");
//   console.log("I have selected a number between 1 and 100. Try to guess it!");

// Generate a random number between 1 and 100
//   const secretNumber = Math.floor(Math.random() * 100) + 1;
//   let attempts = 0;
//   let userGuess = null;

//   while (userGuess !== secretNumber) {
//     userGuess = parseInt(prompt("Enter your guess:"));
//     attempts++;

//     if (userGuess === secretNumber) {
//       console.log(
//         `Congratulations! You guessed the correct number in ${attempts} attempts.`
//       );
//     } else if (userGuess < secretNumber) {
//       console.log("Too low. Try again!");
//     } else {
//       console.log("Too high. Try again!");
//     }
//   }
// }

// // Call the function to start the game
// numberGuessingGame();

//1000-aas ih tooniiii zereg olohr🤖
// let i = 0;
// let x = 1;
// const number = parseInt(prompt("Enter a number: "));

// if (isNaN(number) || number === 1 || number >= 1000) {
//   window.alert("tanii oruulsan too buruu bna");
// }

// while (x <= 1000) {
//   x = number ** i;
//   i++;
// }

// console.log(`${number}-ын ${i - 1} зэрэг нь 1000-аас их байна: ${x}`);

// ugugdsun too hurtlh toonii tegsh toonii niilber🤑
// const number = window.prompt("Enter a number:");

// if (isNaN(number)) {
//   window.alert("buruu utga bna.");
// } else {
//   let result = 0;

//   for (let i = 1; i < number; i++) {
//     if (i % 2 === 0) {
//       result += i;
//     }
//   }

//   console.log(`${number} is: ${result}`);
// }
// ugudsun too hurtleh nuh toonii niilber😊
// const number = parseInt(prompt("Enter a number:"));

// if (isNaN(number)) {
//   window.alert("buruu utga bna.");
// } else {
//   let sum = 0;

//   for (let i = 0; i <= number; i++) {
//     sum += i;
//   }
//   console.log(`${number} is: ${sum}`);
// }
// /pyramid🫶🏿
// let rows = parseInt(prompt("Enter a number:"));
// if (!isNaN(rows) && rows > 0) {
//   for (let i = 1; i <= rows; i++) {
//     console.log("*".repeat(i));
//   }
// } else {
//   alert("buruu utga.");
// }
const number = parseInt(prompt("Enter a number:"));

if (isNaN(number)) {
  window.alert("buruu utga.");
}

function chessBoard() {
  let board = "";

  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      if ((j + i) % 2 === 0) {
        board += "_";
      } else {
        board += "#";
      }
    }
    board += "\n";
  }

  console.log(board);
}

chessBoard();
