export default class NonPlayableCharacter {
  padding = 15;
  element: HTMLImageElement;
  npcArea: HTMLDivElement;
  positionX = 0;
  positionY = 0;
  speed = 5;
  constructor(element: HTMLImageElement, npcArea: HTMLDivElement) {
    this.element = element;
    this.npcArea = npcArea;
  }

  spawn() {
    const npcAreaRect = this.npcArea.getBoundingClientRect();
    this.positionX = npcAreaRect.width - this.element.clientWidth + this.padding;
    this.element.style.left = `${this.positionX}px`;
    this.move();
  }

  move() {
    //TODO: add npc attack logic
    setInterval(() => {
      if (this.positionX <= -this.padding) return;

      this.positionX -= this.speed;
      this.element.style.left = `${this.positionX}px`;
    }, 100);
  }
}
