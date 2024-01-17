import { useEffect, useState } from "react";
import styles from "./input.module.scss";
import cn from "classnames";

export const Input = ({ inputValidate, ...props }) => {
  const [property, setProperty] = useState(false);

  useEffect(() => {
    if (inputValidate !== undefined) {
      setProperty(() => ({ [styles.noValidate]: !inputValidate }));
    }
  }, [inputValidate]);

  return <input className={cn(styles.input, property)} {...props} />;
};
