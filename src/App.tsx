import type { Component } from "solid-js";
import { onMount } from "solid-js";
import styles from "./App.module.css";
import playerImg from "./assets/ground_shaker_asset/Red/Weapons/turret_01_mk1.gif";
import NPC_Img from "./assets/ground_shaker_asset/Camo/Bodies/body_tracks.png";
import Player from "./GameClasses/Player";
import NonPlayableCharacter from "./GameClasses/NonPlayableCharacter";
import { c } from "vite/dist/node/types.d-aGj9QkWt";
import Weapon from "./GameClasses/Weapon";

let area!: HTMLDivElement;
let playerElement!: HTMLImageElement;
let npcElement!: HTMLImageElement;
let npcArea!: HTMLImageElement;

function checkCollisions(npc: NonPlayableCharacter, weapon?: Weapon) {
  const npcBox = npc.getBoundingBox();
  const weaponBox = weapon?.getBoundingBox();

  if (!npcBox || !weaponBox) return false;

  const xAxis = weaponBox.left < npcBox.right && weaponBox.right > npcBox.left;
  const yAxis = weaponBox.top < npcBox.bottom && weaponBox.bottom > npcBox.top;
  console.log(xAxis && yAxis);

  if (xAxis && yAxis) {
    //weapon?.removeBullet();
    return true;
  }
  return false;
}

const App: Component = () => {
  onMount(() => {
    const npcs: NonPlayableCharacter[] = [new NonPlayableCharacter(npcElement, npcArea)];
    //   npcs[0].spawn();

    const player1 = new Player("player1", 0, 0, playerElement, area);

    npcs.forEach((npc) => {
      player1.onWeaponTrace = (x: number, y: number) => {
        if (checkCollisions(npc, player1.weapons?.[0])) {
          console.log("collision detected");
        }
      };
    });
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
