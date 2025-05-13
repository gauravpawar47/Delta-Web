function clicked() {
  alert("You Clicked Me ");
}

function overed() {
  alert("You Just Hovered on Button");
}

function dblClicked() {
  alert("You Double Clicked Me");
}

export default function Button() {
  return (
    <div>
      <button onClick={clicked} onMouseOver={overed}>
        {" "}
        Click Me{" "}
      </button><br /> <br />

      <button onDoubleClick={dblClicked}>I'm Another</button>
    </div>
  );
}
