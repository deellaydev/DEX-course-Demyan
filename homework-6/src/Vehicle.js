export default class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  run(cover) {
    return `${this.brand} ${this.model} runs on ${cover}`;
  }
}
