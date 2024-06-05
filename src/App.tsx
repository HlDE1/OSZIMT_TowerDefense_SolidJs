import type { Component } from "solid-js";
import { onMount } from "solid-js";
import styles from "./App.module.css";
import playerImg from "./assets/ground_shaker_asset/Red/Weapons/turret_01_mk1.gif";
import NPC_Img from "./assets/ground_shaker_asset/Camo/Bodies/body_tracks.png";
import Player from "./GameClasses/Player";
import NonPlayableCharacter from "./GameClasses/NonPlayableCharacter";

let area!: HTMLDivElement;
let playerElement!: HTMLImageElement;
let npcElement!: HTMLImageElement;
let npcArea!: HTMLImageElement;

const App: Component = () => {
  onMount(() => {
    const esoNovaShip = new Player("Eos Nova", 0, 0, playerElement, area); // player-controlled
    const npc = new NonPlayableCharacter(npcElement, npcArea);
    npc.spawn();
  });

  return (
    <div class={styles.App}>
      <div ref={area} class={styles.Area}>
        <div class={styles.Player_Area}>
          <div class={styles.PlayerCharacter} ref={playerElement}>
            <img src={playerImg}></img>
          </div>
        </div>
        <div ref={npcArea} class={styles.NPC_Area}>
          <img ref={npcElement} class={styles.NPC_Style} src={NPC_Img}></img>
        </div>
      </div>
    </div>
  );
};

export default App;
