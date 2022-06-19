import logo from "./logo.svg";
import "./App.css";
import Terminal, { ColorMode, LineType } from "react-terminal-ui";
import { useState } from "react";

function App() {
  const [terminalLineData, setTerminalLineData] = useState([
    { type: LineType.Output, value: "Welcome to the React Terminal UI Demo!" },
    { type: LineType.Input, value: "Some previous input received" },
  ]);
  // Terminal has 100% width by default so it should usually be wrapped in a container div
  return (
    <div className="container">
      <Terminal
        name="React Terminal Usage Example"
        colorMode={ColorMode.Light}
        lineData={terminalLineData}
        onInput={(terminalInput) =>
          console.log(`New terminal input received: '${terminalInput}'`)
        }
      />
    </div>
  );
}

export default App;
