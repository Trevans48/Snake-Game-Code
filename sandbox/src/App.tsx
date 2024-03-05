import "./App.css";
import "./App.css";
import Snake from "./Snake";
import display from "./display";
import { useEffect } from "react";
import Point from "./Point";
import WorldModel from "./WorldModel"

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
    let redSnake = new Snake("red");
    let blueSnake = new Snake("blue");
    const worldModel = new WorldModel(redSnake, 400, 400);
    redSnake.move(2);
    blueSnake.turnLeft();
    redSnake.move(-6);
    blueSnake.move(4);
    redSnake.turnRight();
    blueSnake.turnRight();
    redSnake.move(4);
    blueSnake.move(-2);
    redSnake.turnLeft();
    blueSnake.turnLeft();
    redSnake.move(2);
    blueSnake.move(20);
    redSnake.turnRight();
    blueSnake.turnRight();
    redSnake.move(-4);
    blueSnake.move(8);
    redSnake.turnLeft();
    blueSnake.turnLeft();
    redSnake.move(2);
    blueSnake.move(-18);
    redSnake.turnRight();
    blueSnake.turnRight();
    redSnake.move(-4);
    blueSnake.move(-4);
    display(
      "The Red Snake moved a total of:",
      redSnake.position,
      "squares from the starting position",
    );
    display(
      "The Blue Snake moved a total of:",
      blueSnake.position,
      "squares from the starting position",
    );
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <pre id="output">
        OUTPUT: <br />
      </pre>
    </div>
  );
}
