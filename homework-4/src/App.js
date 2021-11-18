import "./styles.css";
import { useRef, useState } from "react";
import { counter, logger, curry } from "./workHere";

const testData = {
  someContextData: {
    done: "Function work done",
    curryDone: "Curry done with: ",
    result: 123
  },
  testCounter: counter("testCounter", function () {
    console.log(this.someContextData.done);
  }),
  testCounter2: counter("testCounter2", function () {
    console.log(this.someContextData.done);
  }),
  testLogger: logger("testLogger", function () {
    console.log(this.someContextData.done);
    return this.someContextData.result;
  }),
  testCurry: curry(function (f, s, t) {
    console.log(this.someContextData.curryDone + (f + s + t));
  })
};

export default function App() {
  const [someParam, setSomeParam] = useState(25);
  const curryRef = useRef((num) => testData.testCurry(num));
  const onCurryPress = (num) => () => {
    const nextRes = curryRef.current(num);
    curryRef.current = (num) => nextRes(num);
    if (!nextRes) {
      testData.testCurry = curry(function (f, s, t) {
        console.log(this.someContextData.curryDone + (f + s + t));
      });
      curryRef.current = (num) => testData.testCurry(num);
    }
  };

  return (
    <div className="App">
      <div>
        <button onClick={() => testData.testCounter()}>Счётчик</button>
      </div>
      <p />
      <div>
        <button onClick={() => testData.testCounter2()}>Счётчик2</button>
      </div>
      <p />
      <div>
        <button
          onClick={() => {
            testData.testLogger(1.5 * someParam, -0.5 * someParam);
            setSomeParam((prev) => prev * 1.5);
          }}
        >
          Логгер
        </button>
      </div>
      <p />
      <div>
        <button onClick={onCurryPress(1)}>Карирование + аргумент == 1</button>
      </div>
      <p />
      <div>
        <button onClick={onCurryPress(2)}>Карирование + аргумент == 2</button>
      </div>
    </div>
  );
}
