import { useState } from "react";
import styles from "./input.module.scss";
import cn from "classnames";

const Input = ({ inputValidate, ...props }) => {
  const [validate, setValidate] = useState(true);


  if (inputValidate !== undefined) {
    console.log(validate);
    // setValidate("bye");
    // setValidate({ ...validate, name: "basil" });
    // setValidate({ ...validate, name: 'pete' });
  }

  return <input className={cn(styles.input)} {...props} />;
};

export default Input;
