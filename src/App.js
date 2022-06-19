import Terminal, { ColorMode, LineType } from "react-terminal-ui";
import { useState } from "react";

function App() {
  const [terminalLineData, setTerminalLineData] = useState([
    {
      type: LineType.Output,
      value:
        "Hi! You found my portfolio, please type help to find out which commands you can type 💻",
    },
  ]);
  // Terminal has 100% width by default so it should usually be wrapped in a container div
  return (
    <div className="container">
      <Terminal
        name="Welcome to my portfolio! 👋🏽"
        colorMode={ColorMode.Dark}
        lineData={terminalLineData}
        onInput={(terminalInput) => {
          console.log(`New terminal input received: '${terminalInput}'`);
          switch (terminalInput) {
            default:
              setTerminalLineData([
                {
                  type: LineType.Output,
                  value:
                    'Please type "help" to find out which commands you could use',
                },
              ]);
              break;
            case "help":
              setTerminalLineData([
                {
                  type: LineType.Output,
                  value:
                    'There are 3 different commands "profile" to talk about myself and who I am 👤, "experience" where I present my professional experiences 💼 \nand "school" where I present my academic path 🏫.',
                },
              ]);
              break;
          }
        }}
      />
    </div>
  );
}

export default App;
