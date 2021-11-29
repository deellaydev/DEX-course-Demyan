import { Car } from "../workHere";

const chargeDates = {};

export default class ElectricCar extends Car {
  constructor(brand, model, drive) {
    super(brand, model, drive);
    this.battery = 0;
    chargeDates[this.id] = Date.now() - 2000;
  }

  charge = () => {
    if (this.isOnFire === true) {
      this.consoleAndThrow(new Error("Car is on fire"));
    }
    const lastChargeDate = chargeDates[this.id];
    if (Date.now() - lastChargeDate > 500) {
      this.battery += 10;
      chargeDates[this.id] = Date.now();

      if (this.battery > 100) {
        this.isOnFire = true;
        this.consoleAndThrow(new Error("Battery is overcharged"));
      }
    } else {
      this.isOnFire = true;
      this.consoleAndThrow(new Error("To often charges. Battary blows up"));
    }
  };
}
