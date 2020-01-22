import { useEffect, useRef } from 'react'

const useEventHandler = (eventName, handler, element = document) => {
  const handlerRef = useRef()

  useEffect(() => {
    handlerRef.current = handler
  }, [handler])


  useEffect(() => {
    const eventHandler = (e) => {
      handlerRef.current(e)
    }

    element.addEventListener(eventName, eventHandler)
    console.log('adding event listener')

    return () => {
      element.removeEventListener(eventName, eventHandler)
      console.log('removing event listener')
    }
  }, [element, eventName])
}


export default useEventHandler
