export default class NonPlayableCharacter {
  padding = 20;
  element: HTMLImageElement;
  npcArea: HTMLDivElement;
  positionX = 0;
  positionY = 0;
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
    setInterval(() => {
      this.positionX -= 5;
      this.element.style.left = `${this.positionX}px`;
    }, 100);
  }
}
