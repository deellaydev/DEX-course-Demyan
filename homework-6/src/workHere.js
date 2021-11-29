import { Vehicle, ElectricCar, ICECar } from "./types";

// ВАЖНО: ни в одной задаче нельзя использовать глобальные
// переменные. Проверяться будет только содержание уже
// существующих деклараций файла

// Необходимо описать класс "Привод", который будет принимать
// тип привода автомобиля ("FWD", "RWD", "AWD"). Предусмотреть
// метод canDrive(cover), который на основе полученного параметра
// будет определять может ли автомобиль передвигаться по поверхности:
// - "asphalt" доступен для всех;
// - "sand" доступен для полного привода ("AWD");
// - "rocks" не доступен для всех;
// - при получении иных вариантов параметра — выбрасывать ошибку
export class Drive {
  constructor(engine){
    this.engine = engine;
    this.canDrive = this.canDrive.bind(this)
  }
  canDrive(cover) {
    if (cover === 'asphalt') return true;
    if (cover === 'sand') return (this.engine === 'AWD');
    if (cover === 'rocks') return false;
    else throw new Error("Car cannot move on this surface");
  }
}

// Необходимо описать класс "Зарядная станции" для зараядки
// электирческих автомобилей (chargeVehicle должен вызывать vehicle.charge()).
// Имейте в виду, что электромобили возгараются от перезарядки
// (>100%) или при слишком интенсивной зарадке (импульс заряда должен
// быть не чаще чем 1раз в 0,5сек).
export class Charger {
  timerId = true;
  chargeVehicle(vehicle) {
    if (vehicle instanceof ElectricCar){
      if (vehicle.battery < 100 && this.timerId === true){
        this.timerId = setTimeout(() => {
          vehicle.charge();
          this.timerId = true;
        }, 500);
      }
    } else throw new Error("The machine does not support charging");
  }
}

// Унаследуйте класс Vehicle. Необходимо создать класс таким образом,
// чтоб пробег всех автомобилей можно было получить без параметров.
// Реализуйте функцию получения суммарного пробега всех автомобилей
export class Car extends Vehicle {
  static sumMileage = 0;
  trip(mileage) {
    super.trip(mileage);
    Car.sumMileage += mileage;
  }
}

export function getTotalCarsMileage() {
  return Car.sumMileage;
}
