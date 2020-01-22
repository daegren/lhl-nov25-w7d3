import { useState, useCallback } from 'react'

import useEventHandler from './useEventHandler'

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const eventHandler = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }, [])

  useEventHandler('mousemove', eventHandler)

  return mousePosition
}

export default useMousePosition
