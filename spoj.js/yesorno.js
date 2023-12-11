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
