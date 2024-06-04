import type { Component } from "solid-js";
import { Ref, onCleanup, onMount } from "solid-js";
import styles from "./App.module.css";
import { isInputValid } from "./utils/helper";
import weapon from "./assets/ground_shaker_asset/Red/Weapons/turret_01_mk1.gif";
import Player from "./GameClasses/Player";

let playerElement!: HTMLImageElement;

const App: Component = () => {
  onMount(() => {
    const esoNovaShip = new Player("Eos Nova", 0, 0, playerElement); // player-controlled
  });

  return (
    <div class={styles.App}>
      <div class={styles.Area}>
        <div class={styles.Player_Area}>
          <div class={styles.PlayerCharacter} ref={playerElement}>
            <img src={weapon}></img>
          </div>
        </div>

        <div class={styles.NPC_Area}></div>
      </div>
    </div>
  );
};

export default App;
