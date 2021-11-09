import "./styles.css";
import {
  calculateCashback,
  dataProcessingAboutSalary,
  getHolidayPrizes,
  getHolidaysNotifications
} from "./WorkHere";

const dataAboutSalary = [
  [-2, 26], // количество пропущенных/отработанных дней
  [450, "100!"], // зп, запрашиваемое повышение
  ["15%", 4], // время овертайма работника, количество дней
  ["7 years", "Perfect professional"], // стаж, отзывы коллег
  [false, true] // соц. активность работника, качественное выполнение задач
];

const cashback = [
  ["true", 177.9, "4.4%"],
  [true, 12, "2.5%"],
  ["true", 456.2, "7.3%"],
  [true, 20, "0.1%"],
  [false, 34345, "30.1%"]
];

const holidaysNotifications = [
  ["Happy Holidays", 9],
  ["Marry Christmas", 1],
  ["Work time", 3],
  ["Last news", 4],
  ["Happy birthday", 10],
  ["New features in iOS 15", 3]
];

const birthData = [
  ["Andrey Rumiantsev", "1995-11-09T08:13:51.376Z", "500"],
  ["Ivan Alexandrov", "1994-10-09T08:13:51.376Z", "700"],
  ["Oleg Kravchenko", "1996-10-08T08:13:51.376Z", "850"],
  ["Evgenii Ponasenkov", "1982-03-13T08:13:51.376Z", "850"]
];

export default function App() {
  return (
    <div className="App">
      Вывод данных о зп:
      {dataAboutSalary.map(([f, s]) => (
        <div>{dataProcessingAboutSalary(f, s)}</div>
      ))}
      <p />
      Кэшбэк:
      {cashback.map(([isCashback, sum, cb]) => (
        <div>{calculateCashback(isCashback, sum, cb)}</div>
      ))}
      <p />
      Праздничные поздравления:
      {holidaysNotifications.map(([f, s]) => (
        <div>{getHolidaysNotifications(f, s)}</div>
      ))}
      <p />
      Уведомления о премии на др:
      {birthData.map(([f, s, t]) => (
        <div>{getHolidayPrizes(f, s, t)}</div>
      ))}
      <p />
    </div>
  );
}
