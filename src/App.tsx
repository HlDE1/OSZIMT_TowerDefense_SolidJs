import type { Component } from "solid-js";
import { Ref, onCleanup, onMount } from "solid-js";
import styles from "./App.module.css";
import { isInputValid } from "./utils/helper";
import Raumschiff from "./GameClasses/Raumschiff";
import Kapitaen from "./GameClasses/Kapitaen";

let player!: HTMLDivElement;

const App: Component = () => {
  onMount(() => {
    const novaKaptaein = new Kapitaen("Alexia Nova", 5, 6);
    const esoNovaShip = new Raumschiff("Eos Nova", 0, 0, novaKaptaein, player);
  });

  return (
    <div class={styles.App}>
      <div class={styles.PlayerCharacter} ref={player}></div>
    </div>
  );
};

export default App;
