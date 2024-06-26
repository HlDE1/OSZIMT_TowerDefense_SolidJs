import Player from "./Player";
import styles from "./Weapon.module.css";

export default class Weapon {
  damage: number;
  speed: number;
  area: HTMLDivElement;
  player?: Player;

  constructor(damage: number, speed: number, area: HTMLDivElement, player?: Player) {
    this.damage = damage;
    this.speed = speed;
    this.area = area;
    this.player = player;
  }

  createWeapon() {
    if (!this.player?.player) return;

    const weaponElement = document.createElement("div");
    weaponElement.classList.add(styles.player_weapon);
    this.area.appendChild(weaponElement);

    const playerRect = this.player.player.getBoundingClientRect();
    const weaponRect = weaponElement?.getBoundingClientRect();

    weaponElement.style.top = `${playerRect.top + playerRect.height / 2 - weaponRect.height / 2}px`;
    weaponElement.style.left = `${playerRect.left + playerRect.width / 2}px`;

    return weaponElement;
  }

  fire(event: KeyboardEvent) {
    if (event.key !== " " || !this.player?.player) return;

    const weapon = this.createWeapon();
    if (!weapon) return;

    weapon.style.rotate = `${-0.25 + this.player.currentAngle}turn`;
    const weaponRect = weapon.getBoundingClientRect();
    let weaponX_Pos = weaponRect.left;
    let weaponY_Pos = weaponRect.top;

    const playerHeight = this.player.player.getBoundingClientRect().height;
    const weaponSpeed = 30;
    const rotationAngle = -0.25 + this.player.currentAngle;
    const radianAngle = rotationAngle * 2 * Math.PI;

    const interval = setInterval(() => {
      weaponX_Pos += weaponSpeed * Math.cos(radianAngle);
      weaponY_Pos += weaponSpeed * Math.sin(radianAngle);

      const isX_OutOfBounds = weaponX_Pos > this.area.clientWidth || weaponX_Pos < 0;
      const isY_OutOfBounds =
        this.area.clientHeight + this.area.offsetTop < weaponY_Pos ||
        this.area.offsetTop > weaponY_Pos;

      console.log("moving");
      if (isX_OutOfBounds || isY_OutOfBounds) {
        clearInterval(interval);
        this.area.removeChild(weapon);
        return;
      }

      weapon.style.left = `${weaponX_Pos}px`;
      weapon.style.top = `${weaponY_Pos}px`;
    }, 100);
  }
}
