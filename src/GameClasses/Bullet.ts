import styles from "./Weapon.module.css";

export default class Bullet {
  element: HTMLDivElement;
  area: HTMLDivElement;
  speed: number;
  angle: number;
  interval: number | null = null;
  x: number;
  y: number;
  onRemove: (bullet: Bullet) => void;

  constructor(
    x: number,
    y: number,
    speed: number,
    angle: number,
    area: HTMLDivElement,
    onRemove: (bullet: Bullet) => void
  ) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.angle = angle;
    this.area = area;
    this.onRemove = onRemove;

    this.element = document.createElement("div");
    this.element.classList.add(styles.player_weapon);
    this.element.style.left = `${x}px`;
    this.element.style.top = `${y}px`;

    area.appendChild(this.element);
  }

  move() {
    this.element.style.rotate = `${this.angle}turn`;
    const radianAngle = this.angle * 2 * Math.PI;
    this.interval = setInterval(() => {
      this.x += this.speed * Math.cos(radianAngle);
      this.y += this.speed * Math.sin(radianAngle);

      const isX_OutOfBounds = this.x > this.area.clientWidth || this.x < 0;
      const isY_OutOfBounds =
        this.area.clientHeight + this.area.offsetTop < this.y || this.area.offsetTop > this.y;

      if (isX_OutOfBounds || isY_OutOfBounds) {
        this.remove();
        return;
      }

      this.element.style.left = `${this.x}px`;
      this.element.style.top = `${this.y}px`;
    }, 100);
  }

  remove() {
    if (this.interval !== null) {
      clearInterval(this.interval);
    }
    this.area.removeChild(this.element);
    this.onRemove(this);
  }
}
