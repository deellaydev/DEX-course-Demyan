export default class Vehicle {
  constructor(brand, model, drive) {
    this.id = Math.round(Date.now() + Math.random() * 10000).toString();
    this.brand = brand;
    this.model = model;
    this.drive = drive;
    this.isOnFire = false;
    this.milage = 0;
  }

  consoleAndThrow = (error) => {
    console.log(`${this.brand} ${this.model}: ` + error.message, error);
    throw error;
  };

  run(cover) {
    const canRun = this.drive?.canDrive;
    if (canRun) {
      try {
        if (canRun(cover)) {
          return `${this.brand} ${this.model} runs on ${cover}`;
        } else {
          return `${this.brand} ${this.model} stucks in ${cover}`;
        }
      } catch {
        return `${this.brand} ${this.model} can not run in ${cover}`;
      }
    } else {
      return `${this.brand} ${this.model} has no drive`;
    }
  }

  trip(milage) {
    this.milage += milage;
  }
}
