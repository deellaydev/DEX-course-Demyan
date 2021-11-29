import { Car } from "../workHere";

export default class ICECar extends Car {
  constructor(brand, model, drive) {
    super(brand, model, drive);
    this.tank = 0;
  }

  charge = () => {
    this.isOnFire = true;
    this.consoleAndThrow(new Error("Charging is not supported"));
  };

  refuel = () => {
    this.tank += 10;
  };
}
