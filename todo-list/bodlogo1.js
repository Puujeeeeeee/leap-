// function runSolution(arr) {
//   let maxSum = -Infinity;
//   let currentSum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     currentSum += arr[i];

//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//     }

//     if (currentSum < 0) {
//       currentSum = 0;
//     }
//   }

//   return maxSum;
// }

// function execute() {
//   const input = document.getElementById("input").value;
//   let array = input.split(",").map(Number);
//   let result = runSolution(array);
//   document.getElementById("output").innerHTML = result;
// }
// let arr = prompt("TA TOOGOO ORUULNA UU:").split(",").map(Number);

// function findMax(arr) {
//   let maxSum = 0;
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];

//     if (sum > maxSum) {
//       maxSum = sum;
//     }

//     if (sum < 0) {
//       sum = 0;
//     }
//   }

//   console.log(maxSum); // Move this line inside the function
// }

// findMax(arr);

let words = prompt("ta oguulberee oruulna uu:");
function largestWords(words) {
  let wordArray = words.split(" ");
  let longWord = "";
  for (i = 0; i < wordArray.length; i++) {
    let word = wordArray[i];
    if (wordArray.length < word.length) {
      longWord = word;
    }
  }
  return longWord;
}
let result = largestWords(words);
console.log(result);
