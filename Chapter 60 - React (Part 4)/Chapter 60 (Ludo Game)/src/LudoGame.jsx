import { useState } from "react";

export default function LudoGame() {
  const [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
  const [arr, setArr] = useState(["no moves"]);

  const updateMove = (color) => {
    setMoves((prevMoves) => ({
      ...prevMoves,
      [color]: prevMoves[color] + 1,
    }));

    setArr((prevArr) => [...prevArr, `${color} moves`]);
  };

  return (
    <div>
      <p>Game Begins</p>
      <div className="board">
        <p>Blue Moves : {moves.blue}</p>
        <button
          style={{ backgroundColor: "blue", color: "black" }}
          onClick={() => updateMove("blue")}
        >
          +1
        </button>

        <p>Yellow Moves : {moves.yellow}</p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={() => updateMove("yellow")}
        >
          +1
        </button>

        <p>Green Moves : {moves.green}</p>
        <button
          style={{ backgroundColor: "green", color: "black" }}
          onClick={() => updateMove("green")}
        >
          +1
        </button>

        <p>Red Moves : {moves.red}</p>
        <button
          style={{ backgroundColor: "red", color: "black" }}
          onClick={() => updateMove("red")}
        >
          +1
        </button>

        <div>
          <h3>Move History:</h3>
          <ul>
            {arr.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
