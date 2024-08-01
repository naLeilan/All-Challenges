import { useState } from "react";

const COLORS = [
  "pink",
  "red",
  "yellow",
  "blue",
  "green",
  "grey",
  "orange",
  "purple",
];

function BachgroundColor() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const handleButton = (color) => () => {
    setBackgroundColor(color);
  };

  return (
    <div
      style={{
        backgroundColor,
      }}
    >
      <h2> Change Background Color </h2>
      <div>
        {COLORS.map((color) => (
          <button
            type="button"
            key={color}
            onClick={handleButton(color)}
            className={backgroundColor === color ? "circle selected" : "circle"}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BachgroundColor;
