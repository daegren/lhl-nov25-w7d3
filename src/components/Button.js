import React, { useEffect } from "react";

const Button = ({ primary, secondary, danger, children, onClick }) => {
  let classes = "btn"
  if (primary) {
    classes += " btn-primary"
  } else if (secondary) {
    classes += " btn-secondary"
  } else if (danger) {
    classes += " btn-danger"
  }

  useEffect(() => {
    console.log(classes)
  }, [classes])

  return <button onClick={onClick} className={classes}>{children}</button>;
}

export default Button;
