import Kapitaen from "./Kapitaen";
import Planet from "./Planet";
import Raumschiff from "./Raumschiff";

let gameOver = false;

const row = 5;
const column = 10;

const novaKaptaein = new Kapitaen("Alexia Nova", 5, 6);
const zenithKaptaein = new Kapitaen("Admiral Zenith Nightfall ", 2, 9);

const auroriaPlanet = new Planet("Auroria", true, 1, 2);
const solaraPlanet = new Planet("Solara", false, 2, 5);
const ktarisPlanet = new Planet("Ktaris", true, 4, 3);
const allePlanete = [auroriaPlanet, solaraPlanet, ktarisPlanet];

const esoNovaShip = new Raumschiff("Eos Nova", 0, 0, novaKaptaein); // player-controlled
const auraQuestShip = new Raumschiff("Aurora Quest", 3, 1, zenithKaptaein); // NPC
const raumschiffe = [auraQuestShip]; // all NPCs

console.log("Das Spiel beginnt");
console.log(`Sie fliegen das Raumschiff ${esoNovaShip.getName()}`);
console.log(`Gesteuert von ${novaKaptaein.getName()}`);

novaKaptaein.setName("Alexia Starlight Nova");

// while (!gameOver) {
//   const input = scanner.next();
//   if (!isInputValid(input)) {
//     console.log("Eingabe ist ungültig. Nur a/w/s/d ist erlaubt");
//     continue;
//   }

//   console.flush();
//   esoNovaShip.fliegen(input.charAt(0));
//   console.log(`${esoNovaShip.getPosX()} ${esoNovaShip.getPosY()}`);

//   const test = raumschiffe.filter(
//     (ship) => ship.getPosX() === esoNovaShip.getPosX() && ship.getPosY() === esoNovaShip.getPosY()
//   );
//   console.log("Test: " + test[0].getName());
// }

function isInputValid(input: string) {
  return input === "a" || input === "w" || input === "s" || input === "d";
}

console.log("efewf");
console.log("weffeef");
