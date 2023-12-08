let dun = 1;
let number = parseInt(prompt("Enter a dun number:"));

if (isNaN(number) || number < 1 || number > 6) {
  window.alert("bruu utga 1-5iin hoorond oruulaachdee sda chini");
} else {
  switch (number) {
    case 1:
      dun = "mash muu";
      break;

    case 2:
      dun = " muu";
      break;

    case 3:
      dun = "dund";
      break;

    case 4:
      dun = "sain";
      break;
    case 5:
      dun = "mash sain";
      break;

    default:
      window.alert("Invalid month number.");
  }

  console.log("Month: " + number);
  console.log("tanii dun: " + dun);
}
