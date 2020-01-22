import React, { useCallback } from "react";
import useEventHandler from "../hooks/useEventHandler";

const EventHandler = () => {
  const handleClick = useCallback(({ clientX, clientY }) => {
    alert(`You clicked at (${Math.floor(clientX)}, ${Math.floor(clientY)})`)
  }, [])

  useEventHandler('click', handleClick)

  return <div>Click somewhere!</div>
}

export default EventHandler;
