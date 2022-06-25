import Terminal, { ColorMode, LineType } from "react-terminal-ui";
import { useState } from "react";
import { experiences } from "./experiences";
import { schools } from "./schools.js";
import "./App.css";
const historyOfCommands = [];
const historyOfResponses = [
  {
    type: LineType.Output,
    value:
      "Hi! You found my portfolio, please type help to find out which commands you can type 💻",
  },
];

const App = () => {
  const [terminalLineData, setTerminalLineData] = useState(historyOfResponses);
  // Terminal has 100% width by default so it should usually be wrapped in a container div
  return (
    <div>
      <Terminal
        name="Welcome to my portfolio! 👋🏽"
        colorMode={ColorMode.Dark}
        lineData={terminalLineData}
        onInput={(terminalInput) => {
          historyOfResponses.push({
            type: LineType.Input,
            value: terminalInput,
          });
          historyOfCommands.push(terminalInput);
          switch (true) {
            case terminalInput === "help":
              historyOfResponses.push({
                type: LineType.Output,
                value:
                  "There are 3 different commands: \n" +
                  "- profile: to talk about myself and who I am 👤\n" +
                  "- exp: where I present my professional experiences 💼\n" +
                  "- school: where I present my academic path 🏫.",
              });
              setTerminalLineData(historyOfResponses);
              break;
            case terminalInput === "profile":
              historyOfResponses.push({
                type: LineType.Output,
                value:
                  "Hi 👋🏽, my name is Fares, and I'm a backend software engineer!\n" +
                  "I love challenges, and live for the thrill of solving problems!\n" +
                  //'If you wish to contact me, please reach out via email: <a href="mailto:kissoumfares@gmail.com">here!</a>\n' +
                  "So far, I've had the opportunity to work in 2 different organizations.\n" +
                  "Please type 'exp' to see my professional experience 💼\n",
              });
              setTerminalLineData(historyOfResponses);
              break;
            case terminalInput.startsWith("exp"):
              const experienceName = terminalInput.split(" ")[1];
              if (experienceName) {
                const foundExperience = experiences.find(
                  (experience) => experience.name === experienceName
                );
                if (foundExperience) {
                  historyOfResponses.push({
                    type: LineType.Output,
                    value: foundExperience.value,
                  });
                  setTerminalLineData(historyOfResponses);
                  break;
                } else {
                  historyOfResponses.push({
                    type: LineType.Output,
                    value:
                      "Sorry, I don't know about this experience 😢. Please type exp to find out which ones I have worked for 💼",
                  });
                  setTerminalLineData(historyOfResponses);
                  break;
                }
              } else {
                const positionTitles = experiences.map((experience) => {
                  return {
                    type: LineType.Output,
                    value: experience.value
                      .split("\n")[0]
                      .concat("\n" + experience.value.split("\n")[1]),
                  };
                });
                historyOfResponses.push(...positionTitles);
                setTerminalLineData(historyOfResponses);
                break;
              }
            case terminalInput === "school":
              const schoolTitles = schools.map((school) => {
                return {
                  type: LineType.Output,
                  value: school.value,
                };
              });
              historyOfResponses.push(...schoolTitles);
              setTerminalLineData(historyOfResponses);
              break;
            default:
              historyOfResponses.push({
                type: LineType.Output,
                value:
                  "Sorry, I don't know what you're trying to say.\n" +
                  "Please type 'help' to see what I can do for you 💻\n",
              });
              setTerminalLineData(historyOfResponses);
              break;
          }
          if (terminalInput.startsWith("exp")) {
          }
        }}
      />
    </div>
  );
};

export default App;
