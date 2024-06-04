export default class Planet {
  private name: string;
  private atmospahere: boolean;
  private posX: number;
  private posY: number;

  constructor(name: string, atmospahere: boolean, posX: number, posY: number) {
    this.name = name;
    this.atmospahere = atmospahere;
    this.posX = posX;
    this.posY = posY;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public isAtmospahere(): boolean {
    return this.atmospahere;
  }

  public setAtmospahere(atmospahere: boolean): void {
    this.atmospahere = atmospahere;
  }

  public getPosX(): number {
    return this.posX;
  }

  public setPosX(posX: number): void {
    this.posX = posX;
  }

  public getPosY(): number {
    return this.posY;
  }

  public setPosY(posY: number): void {
    this.posY = posY;
  }

  public getCoordinates(): [number, number] {
    return [this.posX, this.posY];
  }
}
