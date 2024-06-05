import styles from "./Player.module.css";

export default class Player {
  name: string;
  posX: number;
  posY: number;
  player?: HTMLDivElement;
  //TODO: weapons
  weapons?: any[];
  selectedWeapon?: any;
  currentAngle = 0.25;
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
    this.spawnWeapon();
    document.addEventListener("keydown", (event) => this.rotate(event.key), true);
  }

  //
  getName() {
    return this.name;
  }

  getPosX() {
    return this.posX;
  }

  getPosY() {
    return this.posY;
  }

  rotate(input: string) {
    if (!this.player) return;

    const changeRate = 0.03;

    if (input === "w") {
      this.currentAngle -= changeRate;
    } else if (input === "s") {
      this.currentAngle += changeRate;
    }

    this.player.style.transform = `rotate(${this.currentAngle}turn)`;
  }

  spawnWeapon() {
    const weaponElement = document.createElement("div");
    weaponElement.classList.add(styles.WeaponStyle);

    this.area.appendChild(weaponElement);
  }
  attack() {}
}
