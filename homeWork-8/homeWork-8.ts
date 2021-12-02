// @ts-ignore:next-line
const VehicleData = require("./data");

// Опишите типы данных для VehicleData

type VehicleType = VehicleEntity;

interface VehicleEntity {
  type: "Spacecraft" | "Car" | "Helicopter";
  brand: string;
  model: string;
  drive: Drive;
}

interface Drive {
  stages?: Stage[];
  type?: string;
  power?: number;
  torque?: number;
  totalPower?: number;
  engineCount?: number;
  supportedEnvironments: string[];
}

interface Stage {
  engineThrust: number;
  engineCount: number;
  engineType: string;
}

export const vehicles: VehicleType[] = VehicleData;

// реализуйте класс "Транспортное средство" и его потомков
// Ожидаемый вывод getTitle - "VAZ - 2105"
// Ожидаемый вывод getInfo:
//   для всех, кроме вертолётов - "Supported environments: {env}" с
//       перечислением всех доступных окружающих сред
//   для космических кораблей - "Total thrust: {calc}kN Engine count: {cnt}",
//       вместо {calc} - общая тага всех ступеней, вместо {cnt} - общее
//       количество двигателей.
//   для автомобилей - "Power: {pwr}HP Torque: {Tq}Nm", с выводом соотв. значений
//   для вертолётов - "Under secret"



// Сначала не так понял задание и реализовал всё в одном классе
// ============================================

// class Vehicle {
//   constructor(private vehicle: VehicleType) {}

//   getTitle(): string {
//     return `${this.vehicle.brand} - ${this.vehicle.model}`;
//   }
//   getInfo(): string {
//     let info = ``;
//     if (this.vehicle.type !== "Helicopter") {
//       info += `Supported environments: ${this.vehicle.drive.supportedEnvironments.join(",")} `;
//     }
//     if (this.vehicle.type === "Spacecraft" && this.vehicle.drive.stages !== undefined) {
//       const { calc, cnt } = this.vehicle.drive.stages.reduce(
//         (acc, val) => {
//           return {
//             calc: acc.calc + val.engineThrust*val.engineCount,
//             cnt: acc.cnt + val.engineCount
//           };
//         },
//         { calc: 0, cnt: 0 }
//       );
//       info += `Total thrust: ${calc}kN Engine count: ${cnt}`;
//     } else if (this.vehicle.type === "Car") {
//       const { power: pwr, torque: Tq } = this.vehicle.drive;
//       info += `Power: ${pwr}HP Torque: ${Tq}Nm`;
//     } else {
//       return `Under secret`;
//     }
//     return info;
//   }
// }

// ============================================


class Vehicle {
  constructor(public vehicle: VehicleType) {}

  getTitle(): string {
    return `${this.vehicle.brand} - ${this.vehicle.model}`
  }
  getInfo(): string {
    return `Supportde environments ${this.vehicle.drive.supportedEnvironments}`
  }
}

class Car extends Vehicle {
  getInfo(): string {
    const { power: pwr, torque: Tq } = this.vehicle.drive;
    return  super.getInfo() + `Power: ${pwr}HP Torque: ${Tq}Nm`;
  }
}

class Spacecraft extends Vehicle {
  getInfo(): string {
    if (this.vehicle.drive.stages === undefined) return ``
    const { calc, cnt } = this.vehicle.drive.stages.reduce(
      (acc, val) => {
        return {
          calc: acc.calc + val.engineThrust*val.engineCount,
          cnt: acc.cnt + val.engineCount
        };
      },
      { calc: 0, cnt: 0 }
    );
    return super.getInfo() + `Total thrust: ${calc}kN Engine count: ${cnt}`;
  }
}

class Helicopter extends Vehicle {
  getInfo(): string {
    return `Under secret`
  }
}

// реализйте функцию конвертации полученнх данных в конечный тип для
// последующего вывода данных о транспортном средстве


// Ф-ция для первого способа
// ============================================

// export function vehicleFabric(vehicle: VehicleType): Vehicle | null {
//   return new Vehicle(vehicle);
// }

// ============================================

export function vehicleFabric(vehicle: VehicleType): Vehicle | null {
  switch(vehicle.type){
    case 'Car':
      return new Car(vehicle)
    case 'Helicopter':
      return new Helicopter(vehicle)
    case 'Spacecraft':
      return new Spacecraft(vehicle)
    default:
      return null
  }
}