import { useState } from "react";
import "./styles.css";
import { NewsPaper, callCurrentModule } from "./workHere";

const titles = {
  1: "*Title 1* ",
  2: "*Title 2* ",
  3: "*Title 3* ",
  4: "*Title 4* ",
  5: "*Title 5* "
};

export default function App() {
  const [papers, setNewPapers] = useState([]);

  const createNewsPaper = () => {
    const indexTitle = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    setNewPapers([...papers, NewsPaper?.createNewPaper?.(titles[indexTitle])]);
  };

  const callModule = (type) => {
    callCurrentModule(type);
  };

  return (
    <div className="App">
      <p>Newspapers</p>
      <button onClick={createNewsPaper}>create</button>
      <p>List newspapers: </p>
      {papers.map((paper) => (
        <div>
          <span>{paper?.title}</span>
          <span>{paper?.date}</span>
        </div>
      ))}
      <p>Modules</p>
      <button onClick={() => callModule("first")}>first</button>
      <button onClick={() => callModule("second")}>second</button>
    </div>
  );
}
