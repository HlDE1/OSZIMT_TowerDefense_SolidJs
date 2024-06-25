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
    // this.spawnWeapon();
    document.addEventListener("keydown", (event) => this.inputEvents(event), true);
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

  inputEvents(event: KeyboardEvent) {
    if (!this.player) return;

    this.rotate(event);
    this.attack(event);
  }

  rotate(event: KeyboardEvent) {
    if (!this.player) return;

    const changeRate = 0.03;

    if (event.key === "w") {
      this.currentAngle -= changeRate;
    } else if (event.key === "s") {
      this.currentAngle += changeRate;
    }

    this.player.style.transform = `rotate(${this.currentAngle}turn)`;
  }

  spawnWeapon() {
    if (!this.player) return;

    const weaponElement = document.createElement("div");
    weaponElement.classList.add(styles.player_weapon);
    this.area.appendChild(weaponElement);

    const playerRect = this.player?.getBoundingClientRect();
    const weaponRect = weaponElement?.getBoundingClientRect();

    weaponElement.style.top = `${playerRect.top + playerRect.height / 2 - weaponRect.height / 2}px`;
    weaponElement.style.left = `${playerRect.left + playerRect.width / 2}px`;

    return weaponElement;
  }

  attack(event: KeyboardEvent) {
    if (event.key !== " ") return;

    const weapon = this.spawnWeapon();
    if (!weapon) return;

    weapon.style.rotate = `${-0.25 + this.currentAngle}turn`;
    let weaponX_Pos = weapon.getBoundingClientRect().left;
    let weaponY_Pos = weapon.getBoundingClientRect().top;

    const weaponSpeed = 20;
    const rotationAngle = -0.25 + this.currentAngle;
    const radianAngle = rotationAngle * 2 * Math.PI;
    console.log(radianAngle, Math.tan(radianAngle), weaponSpeed * Math.tan(radianAngle));

    const interval = setInterval(() => {
      if (weaponX_Pos > this.area.clientWidth) {
        //console.log("out of bounds");
        clearInterval(interval);
        this.area.removeChild(weapon);
        return;
      }

      weaponX_Pos += weaponSpeed;
      weaponY_Pos += Math.tan(radianAngle);

      weapon.style.transform = `translate(${weaponX_Pos}px,${weaponY_Pos}px)`;
      //weapon.style.left = `${weaponX_Pos}px`;
      // weapon.style.top = `${weaponY_Pos}px`;
    }, 100);
  }
}
