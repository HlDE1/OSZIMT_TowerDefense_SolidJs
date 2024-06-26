import Bullet from "./Bullet";
import Player from "./Player";
import styles from "./Weapon.module.css";

export default class Weapon {
  damage: number;
  speed: number;
  area: HTMLDivElement;
  player?: Player;
  element?: HTMLDivElement;
  onWeaponTrace?: (xCoord: number, yCoord: number) => void;
  bullets: Bullet[] = [];

  constructor(damage: number, speed: number, area: HTMLDivElement, player?: Player) {
    this.damage = damage;
    this.speed = speed;
    this.area = area;
    this.player = player;
  }

  getBoundingBox() {
    console.log("getBoundingBox");
    return this.element?.getBoundingClientRect();
  }

  createBullet() {
    if (!this.player?.player) return;

    const bulletElement = document.createElement("div");
    bulletElement.classList.add(styles.player_weapon);
    this.area.appendChild(bulletElement);

    const playerRect = this.player.player.getBoundingClientRect();
    const bulletReact = bulletElement?.getBoundingClientRect();
    const xCoord = `${playerRect.left + playerRect.width / 2}px`;
    const yCoord = `${playerRect.top + playerRect.height / 2 - bulletReact.height / 2}px`;

    bulletElement.style.left = xCoord;
    bulletElement.style.top = yCoord;

    return bulletElement;
  }

  fire(event: KeyboardEvent) {
    if (event.key !== " " || !this.player?.player) return;

    const playerRect = this.player.player.getBoundingClientRect();
    const x = playerRect.left + playerRect.width / 2;
    const y = playerRect.top + playerRect.height / 2;
    const angle = -0.25 + this.player.currentAngle;

    const bullet = new Bullet(x, y, this.speed, angle, this.area, this.removeBullet);
    bullet.onMove = this.onWeaponTrace;
    this.bullets.push(bullet);
    bullet.move();
  }

  removeBullet(bullet: Bullet) {
    const index = this.bullets?.indexOf(bullet);
    if (index !== undefined && index !== -1) this.bullets.splice(index, 1);
  }
}
