import React, { useState } from 'react';

import Button from './Button';

function ButtonList() {
  const [buttons, setButtons] = useState(1)

  const buttonArray = []
  for (let i = 0; i < buttons; i++) {
    buttonArray.push(true)
  }

  return (
    <div className="App">
      {buttonArray.map((_, i) => (
        <Button key={i} onClick={() => setButtons(buttons + 1)} primary={i % 3 === 0} secondary={i % 3 === 1} danger={i % 3 === 2}>{i}</Button>
      ))}
    </div>
  );
}

export default ButtonList;
