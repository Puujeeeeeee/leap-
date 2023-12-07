let baraa = 0;
let baraaFrom = window.prompt(
  "Avah baraagaa songono uu? \n1. cola \n2. sprite \n3. alpen cold \n4. suu \n5. talh \n6. zairmag \n7. bohi \n 8. arhi"
);

switch (baraaFrom) {
  case "1":
    baraa = 1200;
    break;
  case "2":
    baraa = 1500;
    break;
  case "3":
    baraa = 2000;
    break;
  case "4":
    baraa = 2200;
    break;
  case "5":
    baraa = 1000;
    break;
  case "6":
    baraa = 500;
    break;
  case "7":
    baraa = 150;
  case "8":
    baraa = 15000;
    break;
  default:
    alert("Buruu buteegdehuun");
}

window.alert(`Baraa: ${baraa}`);

let x = "yes";

let baraaTo = window.prompt(
  "Ta buteegdhuuniig avah bol \n 1. yes \n 2. no darna uu?"
);

switch (baraaTo) {
  case "1":
    x = "yes";
    break;
  case "2":
    y = "no";
    break;
  default:
    alert("Yes or No darna uu");
}

window.alert(`Choice: ${x}`);

if (x === "yes") {
  let zarahTo = window.prompt(
    " ta edgeer devsgertuudees songono uu 1.5000 \n2.10000 \n3. 20000 "
  );

  switch (zarahTo) {
    case "1":
      b = "5000";

      break;
    case "2":
      b = "10000";
      break;
    case "3":
      b = "20000";
      break;

    default:
      window.alert("ta buruu devsgert oruulsan bna");
  }
}
