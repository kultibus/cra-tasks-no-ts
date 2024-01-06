import { useEffect, useState } from "react";
import styles from "./input.module.scss";
import cn from "classnames";

export const Input = ({ inputValidate, ...props }) => {
  const [validate, setValidate] = useState(null);

  useEffect(() => {
    if (inputValidate !== undefined) {
      setValidate({ [styles.noValidate]: !inputValidate });
    }
  }, [inputValidate]);

  return <input className={cn(styles.input, validate)} {...props} />;
};
