import Kapitaen from "./Kapitaen";
import { onMount } from "solid-js";

export default class Raumschiff {
  name: string;
  posX: number;
  posY: number;
  kapitaen: Kapitaen;
  player?: HTMLDivElement;
  constructor(
    name: string,
    posX: number,
    posY: number,
    kapitaen: Kapitaen,
    player?: HTMLDivElement
  ) {
    this.name = name;
    this.posX = posX;
    this.posY = posY;
    this.kapitaen = kapitaen;
    this.player = player;

    document.addEventListener("keydown", (event) => this.rotate(event.key), true);
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

  currentAngle = 0.25;

  rotate(input: string) {
    if (!this.player) return;

    const changeRate = 0.02;

    if (input === "w") {
      this.currentAngle -= changeRate;
    } else if (input === "s") {
      this.currentAngle += changeRate;
    }

    console.log(this.currentAngle);
    this.player.style.transform = `rotate(${this.currentAngle}turn)`;
  }

  pruefeKoordniaten(posX: number, posY: number): boolean {
    return this.posX === posX && this.posY === posY;
  }
}
