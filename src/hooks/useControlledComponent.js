import { useState } from 'react'


const useControlledComponent = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const onChangeHandler = e => {
    setValue(e.target.value)
  }

  const clear = () => {
    setValue('')
  }

  return [value, onChangeHandler, clear]
}
export default useControlledComponent
