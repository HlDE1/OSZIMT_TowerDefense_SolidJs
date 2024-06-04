export default class Kapitaen {
  private name: string;
  private charisma: number;
  private erfahrung: number;

  constructor(name: string, charisma: number, erfahrung: number) {
    this.name = name;
    this.charisma = charisma;
    this.erfahrung = erfahrung;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getCharisma(): number {
    return this.charisma;
  }

  setCharisma(charisma: number): void {
    this.charisma = charisma;
  }

  getErfahrung(): number {
    return this.erfahrung;
  }

  setErfahrung(erfahrung: number) {
    this.erfahrung = erfahrung;
  }

  diplomatischeVerhandlung() {
    let zufall: number = Math.floor(Math.random() * 10) + 1;
    //TODO: Additional logic for 'diplomatischeVerhandlung' should be added here
  }
}
