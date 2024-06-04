import Kapitaen from "./Kapitaen";
import { onMount } from "solid-js";

export default class Raumschiff {
  name: string;
  posX: number;
  posY: number;
  kapitaen: Kapitaen;
  player: HTMLDivElement;
  constructor(
    name: string,
    posX: number,
    posY: number,
    kapitaen: Kapitaen,
    player: HTMLDivElement
  ) {
    this.name = name;
    this.posX = posX;
    this.posY = posY;
    this.kapitaen = kapitaen;
    this.player = player;

    document.addEventListener("keydown", (event) => this.fliegen(event.key), true);
  }

  getName() {
    return this.name;
  }

  getPosX() {
    return this.posX;
  }

  getPosY() {
    return this.posY;
  }

  getKapitaen() {
    return this.kapitaen;
  }

  fliegen(richtung: string): void {
    console.log(this.player);
    if (!this.player) return;

    const playerRect = this.player.getBoundingClientRect();

    if (richtung === "a") {
      this.player.style.left = `${playerRect.x - 10}px`;
    } else if (richtung === "d") {
      this.player.style.left = `${playerRect.x + 10}px`;
    } else if (richtung === "w") {
      this.player.style.top = `${playerRect.y - 10}px`;
    } else if (richtung === "s") {
      this.player.style.top = `${playerRect.y + 10}px`;
    }
  }

  pruefeKoordniaten(posX: number, posY: number): boolean {
    return this.posX === posX && this.posY === posY;
  }
}
