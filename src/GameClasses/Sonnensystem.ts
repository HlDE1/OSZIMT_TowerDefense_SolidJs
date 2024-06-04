import Kapitaen from "./Kapitaen";
import Planet from "./Planet";
import Raumschiff from "./Raumschiff";

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
