import Terminal, { ColorMode, LineType } from "react-terminal-ui";
import { useEffect, useState } from "react";
const historyOfCommands = [];
const historyOfResponses = [
  {
    type: LineType.Output,
    value:
      "Hi! You found my portfolio, please type help to find out which commands you can type 💻",
  },
];
let cursor = 0;

const useKeyPress = (targetKey) => {
  const [keyPressed, setKeyPressed] = useState(false);
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
      // const last = historyOfCommands.length - 1;
      // const chosenCommand =
      //   historyOfCommands[last - cursor >= 0 ? last - cursor : 0];
      // console.log("chosenCommand", chosenCommand);
      // cursor++;
      // // eslint-disable-next-line react-hooks/rules-of-hooks
      // useState([chosenCommand]);
    }
  };
  const downHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
};
const App = () => {
  const [terminalLineData, setTerminalLineData] = useState(historyOfResponses);
  const isUpPressed = useKeyPress("ArrowUp");
  const isDownPressed = useKeyPress("ArrowDown");
  // Terminal has 100% width by default so it should usually be wrapped in a container div
  return (
    <div className="container">
      <Terminal
        name="Welcome to my portfolio! 👋🏽"
        colorMode={ColorMode.Dark}
        lineData={terminalLineData}
        onInput={(terminalInput) => {
          cursor = 0;
          historyOfResponses.push({
            type: LineType.Input,
            value: terminalInput,
          });
          historyOfCommands.push(terminalInput);
          console.log("terminalInput", terminalInput);
          console.log("ifUpPressed", isUpPressed);
          console.log("ifDownPressed", isDownPressed);
          switch (terminalInput) {
            default:
              historyOfResponses.push({
                type: LineType.Output,
                value:
                  'Please type "help" to find out which commands you could use.',
              });
              setTerminalLineData(historyOfResponses);
              break;
            case "help":
              historyOfResponses.push({
                type: LineType.Output,
                value:
                  "There are 3 different commands: \n" +
                  "- profile: to talk about myself and who I am 👤\n" +
                  "- experience: where I present my professional experiences 💼\n" +
                  "- school: where I present my academic path 🏫.",
              });
              setTerminalLineData(historyOfResponses);
              break;
          }
        }}
      />
    </div>
  );
};

export default App;
