let sar = "";
let number = parseInt(prompt("Enter a month number:"));

if (isNaN(number) || number < 1 || number > 12) {
  window.alert("bruu utga 1-12iin hoorond oruulaachdee sda chini");
} else {
  switch (number) {
    case 1:
    case 2:
    case 12:
      sar = "uvul";
      break;

    case 3:
    case 4:
    case 5:
      sar = "havar";
      break;

    case 6:
    case 7:
    case 8:
      sar = "zun";
      break;

    case 9:
    case 10:
    case 11:
      sar = "namar";
      break;

    default:
      window.alert("Invalid month number.");
  }

  console.log("Month: " + number);
  console.log("Season: " + sar);
}
