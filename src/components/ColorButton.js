import React, { useState } from "react";

const COLORS = ['red', 'green', 'blue']

const ColorButton = () => {
  const [color, setColor] = useState(0)

  const handleClick = e => {
    setColor((color + 1) % COLORS.length)
  }

  return <button onClick={handleClick} className="btn" style={{ "backgroundColor": COLORS[color] }}>
    Colored Button
  </button >;
}

export default ColorButton;
