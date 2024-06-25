import styles from "./Player.module.css";
import Weapon from "./Weapon";

export default class Player {
  name: string;
  posX: number;
  posY: number;
  player?: HTMLDivElement;
  weapons?: Weapon[];
  selectedWeapon?: any;
  currentAngle = 0.25;
  rotationRate = 0.03;
  area: HTMLDivElement;

  constructor(
    name: string,
    posX: number,
    posY: number,
    player: HTMLDivElement,
    area: HTMLDivElement
  ) {
    this.name = name;
    this.posX = posX;
    this.posY = posY;
    this.player = player;
    this.area = area;

    this.weapons = [new Weapon(10, 30, this.area, this)];

    //TODO: remove event listener
    document.addEventListener("keydown", (event) => this.inputEvents(event));
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

  inputEvents(event: KeyboardEvent) {
    if (!this.player) return;

    this.rotate(event);
    this?.weapons?.[0].fire(event);
  }

  rotate(event: KeyboardEvent) {
    if (!this.player) return;

    if (event.key === "w" || event.key === "a") {
      this.currentAngle -= this.rotationRate;
    } else if (event.key === "s" || event.key === "d") {
      this.currentAngle += this.rotationRate;
    }

    this.player.style.transform = `rotate(${this.currentAngle}turn)`;
  }
}
