import React from "react";
import useMousePosition from "../hooks/useMousePosition";

const MousePosition = () => {
  const mousePosition = useMousePosition()

  return (
    <div>
      {JSON.stringify(mousePosition)}
    </div>
  );
}

export default MousePosition;
