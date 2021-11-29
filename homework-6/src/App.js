import { useState, useCallback, useEffect, useRef } from "react";
import "./styles.css";
import { ICECar, ElectricCar } from "./types";
import { Drive, Charger, getTotalCarsMileage } from "./workHere";

const vehicles = [
  new ElectricCar("Tesla", "Model 3", new Drive("RWD")),
  new ElectricCar("Tesla", "Model S", new Drive("AWD")),
  new ICECar("Vaz", "2101", new Drive("RWD")),
  new ICECar("Mercedes", "W221", new Drive("AWD"))
];

const charger = new Charger();

export default function App() {
  const [chargeResult, setChargeResult] = useState([]);
  const [totalCarMileage, setTotalCarMileage] = useState(0);
  const [chargeProcess, setChargeProcess] = useState(false);
  const chargeProcessTimeout = useRef(null);

  const getChargeState = useCallback(() => {
    const chargeState = vehicles.map((v) => {
      if (v.isOnFire) {
        return `${v.brand} ${v.model} is on fire`;
      } else {
        return `${v.brand} ${v.model} charged at ${v.battery || 0}%`;
      }
    });

    setChargeResult(chargeState);
  }, []);

  useEffect(() => {
    getChargeState();
  }, [getChargeState]);

  const runCharger = useCallback(() => {
    try {
      vehicles.map((v) => {
        try {
          charger.chargeVehicle(v);
        } catch (e) {
          // console.log("Charge error", e);
        }

        return null;
      });
    } finally {
      getChargeState();
    }
  }, [getChargeState]);

  const onChargeStart = useCallback(() => {
    setChargeProcess(true);
    chargeProcessTimeout.current = setTimeout(() => {
      runCharger();
      chargeProcessTimeout.current = onChargeStart();
    }, Math.ceil(250 + Math.random() * 500));

    return chargeProcessTimeout.current;
  }, [runCharger]);

  const onChargeStop = useCallback(() => {
    clearTimeout(chargeProcessTimeout.current);
    setChargeProcess(false);
  }, []);

  const onCarTrip = useCallback((vehicle) => {
    try {
      vehicle.trip(100);

      setTotalCarMileage(getTotalCarsMileage());
    } catch {
      // ignore
    }
  }, []);

  return (
    <div className="App">
      <div className="TestWrapper">
        <h1>Run tests</h1>
        <div className="VehicleTest">
          <h2>Vehicle asphalt test</h2>
          {vehicles?.map((v) => (
            <p key={v.id}>{v.run("asphalt")}</p>
          ))}
          <h2>Vehicle sand test</h2>
          {vehicles?.map((v) => (
            <p key={v.id}>{v.run("sand")}</p>
          ))}
          <h2>Vehicle asphalt test</h2>
          {vehicles?.map((v) => (
            <p key={v.id}>{v.run("rocks")}</p>
          ))}
          <h2>Vehicle vacuum test</h2>
          {vehicles?.map((v) => (
            <p key={v.id}>{v.run("vacuum")}</p>
          ))}
        </div>
      </div>
      <div className="TestWrapper">
        <h1>Charge tests</h1>
        <div className="VehicleTest">
          <h2>Electic Vehicle charge test</h2>
          <div>
            <button title="Start Charging" onClick={onChargeStart}>
              Start Charging
            </button>
            <button title="Stop Charging" onClick={onChargeStop}>
              Stop Charging
            </button>
            {chargeProcess && <p>charging...</p>}
          </div>
          {chargeResult.map((cr, index) => (
            <p key={index.toString()}>{cr}</p>
          ))}
        </div>

        <h1>Trip tests</h1>
        <div className="VehicleTest">
          <h2>Electic Vehicle charge test</h2>
          <div key={totalCarMileage.toString()}>
            {vehicles.map((v) => {
              return (
                <p key={v.id}>
                  {v.brand} {v.model} mileage {" - "} {v.milage} miles{" "}
                  <button
                    title="Start Charging"
                    onClick={onCarTrip.bind(this, v)}
                  >
                    Trip +100
                  </button>
                </p>
              );
            })}
            <br />
            <p>
              <b>Total mileage: {totalCarMileage}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
