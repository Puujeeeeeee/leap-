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
// let n = 100;
// let number = parseInt(prompt("Enter a dun number:"));

// if (isNaN(number)) {
//   console.log("Buruu utga.");
// } else {
//   let hariu = number * n;
//   console.log(hariu);
// }
// 👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫SPLIT👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫
// split-tasalsan elementeeer huvaagaad array bolgono
// const str = "Arvan tavan targan tarvaga";
// console.log(str.split(""));
// 👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫REPLACE&REPLACEALL👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫
// replace & replaceall-zuvhun ehnnii oldson stringiig shinechlene, replace all ni stringd bgaa buh elementiig solino.
// const str = "arvan tavan targan tarvaga";
// console.log(p.replace('arvan', zuun));
// 👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫TRIM👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫
// trim-hoosn zaig arilgana; trimend & trim start gej turluud bdg.
// const str = "arvan tavan targan tarvaga";
// console.log(str.trim());
// 👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫CONCAT👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫
// concat-2 ba tuunees deesh string holbono.
// const str = "hello";
// const str2 = "world";
// console.log(str.concat(" ", str2, " ", "haha"));
// 👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫toLowerCase && toUpperCase👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫code runner
// 👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫Slice👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫👨🏼‍🏫tasdah

// const str = "balban";
// const str1 = "dorj";

// console.log(str.replace("balban", "B."), str1.replace("dorj", "Dorj"));

// const firstName = "dorj";
// const firstStr = firstName.slice(0, 1).toUpperCase();
// const lastStr = firstName.slice(1, firstName.length);
// const lastName = "baldan";
// const lastNameStr = lastName.slice(0, 1).toUpperCase();
// console.log(lastNameStr + ". " + firstStr + lastStr);

// const fullName = "Dulam Jantsan";
// const firstName = fullName.split(" ")[0];
// const lastName = fullName.split(" ")[1];
// const firstLetterToUpperCase = (str) => {
//   return str.slice(0, 1).toUpperCase();
// };
// const linkTwoStr = (str) => {
//   const firstStr = firstLetterToUpperCase(str);
//   const lastStr = str.slice(1, str.length);
//   return firstStr + lastStr;
// };
// const lastNameStr = firstLetterToUpperCase(lastName);
// console.log(lastNameStr + "." + " " + linkTwoStr(firstName, lastName));

// exa
// const str = "dondog";
// console.log(str.slice(0, 2));
// javascript object🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳
// let person = {
//   firstname: "puujee",
//   age: 20,
//   color: "green",
//   printFullname: function () {
//     console.log(this);
//   },
// };

// person.printFullname();

// 🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳🇲🇳
// object1=object2
// let person1 = {
//   firstname: "naranbayr",
// };
// let person2 = person1;
// person2.firstname = "erdene";
// console.log(person1.firstname);
// console.log(person2.firstname);

// ... buyu 3 tsegiig spread operator gej nerlene ene ni huuldag zuil yum bna
// const person = {
//   name: "dorj",
//   age: 15,
// };
// const keys = Object.values(person);
// console.log(keys);

// const person = {
//   name: "puujee",
//   age: "19",
//   gender: "male",
// };
// console.log(person.gender);
// Creating an object

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   isStudent: false,
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     country: "USA",
//   },
//   sayHello: function () {
//     console.log(this);
//   },
// };

// // Accessing object properties
// console.log(person.firstName); // Output: John
// console.log(person.age); // Output: 30
// console.log(person.address.city); // Output: Anytown

// // Modifying object properties
// person.age = 31;
// console.log(person.age); // Output: 31

// // Calling a method from the object
// person.sayHello(); // Output: Hello, my name is John Doe.

// ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️
// let classmates = [
//   {
//     name: "Sambuu",
//     DOB: 2001,
//     single: true,
//   },
//   {
//     name: "Dash",
//     DOB: 1983,
//     single: false,
//   },
//   {
//     name: "Puujee",
//     DOB: 1975,
//     single: false,
//   },
//   {
//     name: "Bold",
//     DOB: 2012,
//     single: true,
//   },
//   {
//     name: "Luuvan",
//     DOB: 2009,
//     single: true,
//   },
// ];
// let singles = "";
// let over20 = " ";
// for (i = 0; i < classmates.length; i++) {
//   if (classmates[i].single === true) {
//     singles += " " + classmates[i].name + "";
//   }
//   if (classmates[i].DOB <= 2003) {
//     over20 += "" + classmates[i].name + " ";
//   }
// }
// function studentsAge() {
//   for (age = 0; age < classmates.length; age++);
//   studentsAge = currentlyYears - DOB;
// }
// console.log(studentsAge);
// console.log(
//   " " +
//     "These people are single:" +
//     singles +
//     ",\n And In your class these people are aged over 20: " +
//     over20
// );
// studentsAge();
// ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️ ✉️
// array methods
//toStirng
// const fruit1 = ["banana", "apple", "orange", "mango"];
// console.log(fruit1.toString()); //"banana, apple, orange, mango"
// //and
// const fruit2 = ["banana", "apple", "orange", "mango"];
// console.log(fruit2.join(" and ")); //"banana and apple and orange and mango"
// //includes
// const fruit3 = ["banana", "apple", "orange", "mango"];
// console.log(fruit3.includes("banana")); //true
// //indexof
// const fruit4 = ["banana", "apple", "orange", "mango"];
// console.log(fruit4.indexOf("mango")); //3
// // 🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑
// const fruit5 = ["banana", "apple", "orange", "mango"];
// const findIndex = (fruitToFind) => {
//   for (let i = 0; i < fruit5.length; i++) {
//     if (fruit5[i] === fruitToFind) {
//       return i;
//     }
//   }
//   return -1;
// };
// const index = findIndex("banana");
// console.log("Index of 'orange':", index);
// // 🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑
// const fruit7 = ["banana", "apple", "orange", "mango"];
// let str = "";
// for (let i = 0; i < fruit7.length; i++) {
//   str += fruit7[i];
//   if (i < fruit7.length - 1) {
//     str += ", ";
//   }
// }
// console.log(str);
// // 🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑
// const fruit8 = ["banana", "apple", "orange", "mango", "aple"];
// let sta = " ";
// for (let i = 0; i < fruit7.length; i++) {
//   sta += fruit8[i];
//   if (i < fruit8.length - 1) {
//     sta += "  ";
//     sta += "and ";
//   }
// }
// console.log(sta);
// // 🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑
// const fruit9 = ["banana", "apple", "orange", "mango"];
// let tof = false;

// for (let i = 0; i < fruit9.length; i++) {
//   if (fruit9[i] === "orange") {
//     tof = true;
//   }
// }

// console.log(tof);

// let number = parseInt(prompt("Enter a number:"));
// const arr = [1, 2, 3, 4];
// let str = "";
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
//   str += arr[i];
//   if (i < arr.length - 1) {
//     str += ", ";
//   }
// }
// str += ", " + number;
// sum += number;

// console.log(`${str}`);

// let number = parseInt(prompt("Enter array size:"));
// let arr = [];

// // Input array elements
// for (let i = 0; i < number; i++) {
//   arr.push(parseInt(prompt(`Enter element ${i + 1}:`)));
// }

// let sum = 0;

// const lastNumber = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     sum += arr[i];
//   }
// };

// lastNumber(arr);
// console.log(`Sum of array elements excluding the last one: ${sum}`);
// const arr = [2, 3, 5, 10, 7];
// const target = 9;
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === target) {
//       sum = [arr[i], arr[j]];
//     }
//   }
// }

// console.log(sum);
// const numbersObject = { a: 5, b: 10, c: 3 };

// function calculateSum(obj) {
//   // Get the values of the object using Object.values() and then use reduce to calculate the sum
//   const sum = Object.values(obj).reduce(
//     (acc, currentValue) => acc + currentValue,
//     0
//   );
//   return sum;
// }

// // Call the function with the given object
// const result = calculateSum(numbersObject);

// Display the result
// console.log(result); // Output: 18
// const stringObject = { name: "john", age: 25, city: "example" };

// function capitalizeFirstLetter(obj) {
//   const result = {};

//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       // Capitalize the first letter of each property value
//       result[key] = obj[key][0].toUpperCase() + obj[key].slice(1);
//     }
//   }

//   return result;
// }

// // Call the function with the given object
// const capitalizedObject = capitalizeFirstLetter(stringObject);

// // Display the result
// console.log(capitalizedObject);
// // Output: { name: 'John', age: 25, city: 'Example' }
// // Example Object (Values ashiglahgui)
// const numbersObject = { a: 3, b: 10, c: 3 };
// function calculateSum(obj) {
//   let sum = 0;

//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       sum += obj[key];
//     }
//   }

//   return sum;
// }

// const result = calculateSum(numbersObject);

// console.log(result);

// const stringObject = {
//   name: "john",
//   age: 25,
//   city: "example",
// };
// function capitalizeFirstLetter(obj) {
//   const newObj = {};

//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       const value = obj[key];

//       if (typeof value === "string" || value instanceof String) {
//         newObj[key] = value.charAt(0).toUpperCase() + value.slice(1);
//       } else {
//         newObj[key] = value;
//       }
//     }
//   }

//   return newObj;
// }
// const capitalizedObject = capitalizeFirstLetter(stringObject);
// console.log(capitalizedObject);

// const numbersObject = { a: 4, b: 2, c: 5 };
// const keys = object.keys(numbersObject);
// let sum = 0;
// for (i = 0; i < keys.length; i++) {
//   sum += numbersObject[keys[i]];
// }
// console.log(sum);

// let product = {
//   name: "headphones",
//   price: 80,
//   discount: 0,
// };

// function priceDiscount() {
//   if (product.price > 100) {
//     product.discount = (product.price / 100) * 10;
//     product.price = product.price - product.discount;
//   } else {
//     product.discount = (product.price / 100) * 7;
//     product.price = product.price - product.discount;
//   }
// }

// priceDiscount();
// console.log(product);

// let product = {
//   names: "phone",
//   price: 100,
//   discount: 0,
// };
// if (product.price > 100) {
//   discount = (product.price / 100) * 10;
//   product.price = product.price - discount;
// } else {
//   discount = (product.price / 100) * 7;
//   product.price = product.price - discount;
// }
// console.log(product.names);
// console.log(product.price);

// const n = parseInt(prompt("Enter a number:"));

// if (!isNaN(n) && n < 10) {
//   for (let i = 1; i <= n; i++) {
//     let line = "";
//     for (let j = n; j > 0; j--) {
//       line += j + " ";
//     }
//     console.log(line);
//     console.log("");
//   }
// } else {
//   console.log("Invalid input");
// }
// const elements = document.querySelector("pipi");
// console.log(elements);

// const elements = (document.querySelector("#demo").innerHTML = "<p>poine</p>");

// const elements = document.createAttribute("demo");
// h1.innerText = "my h1";
// document.getElementsByTagName("demo")[0].appendChild(h1);

const p = document.getElementById(div);
document.getElementsByTagName("div")[0].replaceChild(new comtent());
