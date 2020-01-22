import React from "react";

import useControlledComponent from '../hooks/useControlledComponent'

const Form = () => {
  const [name, nameChangeHandler, clearName] = useControlledComponent('')
  const [email, emailChangeHandler, clearEmail] = useControlledComponent('')

  return (
    <div>
      <form onSubmit={e => { e.preventDefault(); clearEmail(); clearName() }}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={nameChangeHandler}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={emailChangeHandler}
          />
        </div>

        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
}

export default Form;
