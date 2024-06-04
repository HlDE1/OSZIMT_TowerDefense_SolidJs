import type { Component } from "solid-js";
import { Ref, onCleanup, onMount } from "solid-js";
import styles from "./App.module.css";
import { isInputValid } from "./utils/helper";
import Raumschiff from "./GameClasses/Raumschiff";
import Kapitaen from "./GameClasses/Kapitaen";
import Planet from "./GameClasses/Planet";
import weapon from "./assets/ground_shaker_asset/Red/Weapons/turret_01_mk1.gif";
let player!: HTMLImageElement;

const App: Component = () => {
  onMount(() => {
    const novaKaptaein = new Kapitaen("Alexia Nova", 5, 6);
    const zenithKaptaein = new Kapitaen("Admiral Zenith Nightfall ", 2, 9);

    const auroriaPlanet = new Planet("Auroria", true, 1, 2);
    const solaraPlanet = new Planet("Solara", false, 2, 5);
    const ktarisPlanet = new Planet("Ktaris", true, 4, 3);
    const allePlanete = [auroriaPlanet, solaraPlanet, ktarisPlanet];

    const esoNovaShip = new Raumschiff("Eos Nova", 0, 0, novaKaptaein, player); // player-controlled
    const auraQuestShip = new Raumschiff("Aurora Quest", 3, 1, zenithKaptaein); // NPC
    const raumschiffe = [auraQuestShip]; // all NPCs

    console.log("Das Spiel beginnt");
    console.log(`Sie fliegen das Raumschiff ${esoNovaShip.getName()}`);
    console.log(`Gesteuert von ${novaKaptaein.getName()}`);

    novaKaptaein.setName("Alexia Starlight Nova");
  });

  return (
    <div class={styles.App}>
      <div class={styles.Area}>
        <div class={styles.PlayerCharacter} ref={player}>
          <img src={weapon}></img>
        </div>
      </div>
    </div>
  );
};

export default App;
