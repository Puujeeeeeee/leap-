// let i = 1;
// let number = parseInt(prompt("Enter a dun number:"));

// if (number < 5) {
//   console.log("YES");
// } else {
//   console.log("No");
// }

// let hours, minutes, seconds;
// hours = parseInt(prompt("Enter hours:"));
// minutes = parseInt(prompt("Enter minutes:"));
// seconds = parseInt(prompt("Enter seconds:"));

// let totalSeconds = hours * 3600 + minutes * 60 + seconds;

// console.log(totalSeconds);

// 🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃

// minute second bolgone

// let minutes, seconds;
// minutes = parseInt(prompt("Enter minutes:"));
// seconds = parseInt(prompt("Enter seconds:"));
// let totalSeconds = minutes * 60 + seconds;
// console.log(totalSeconds);

// 🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃
// honogiig tsag
// let tsag;
// tsag = parseInt(prompt("Enter hours:"));

// if (tsag <= 24) {
//   console.log(tsag);
// } else {
//   console.log("Invalid input. Hours should be 24 or less.");
// }

// let totalDay = tsag * 24;
// console.log(totalDay);

// 🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃

// function convertMonthsToYearsAndMonths(months) {
//   if (months < 0) {
//     console.log("Invalid input. Please enter a non-negative number of months.");
//     return;
//   }

//   const years = parseInt(months / 12);
//   const remainingMonths = months % 12;

//   console.log(
//     `${months} months is approximately ${years} years and ${remainingMonths} months.`
//   );
// }

// // Example: Convert 37 months to years and months
// convertMonthsToYearsAndMonths(900);

// 🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃
// 100-гийн тоог тодорхой давталт ашиглан өгөгдсөн тоон удаа нэм.
let n = 100;
let number = parseInt(prompt("Enter a dun number:"));

if (isNaN(number)) {
  console.log("Buruu utga.");
} else {
  let hariu = number * n;
  console.log(hariu);
}
