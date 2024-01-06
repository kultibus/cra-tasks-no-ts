import cn from "classnames";
import { useOpacity } from "../../hooks/useOpacity";
import styles from "./warning.module.scss";

export const Warning = ({ children, modalOpened }) => {
  const opacity = useOpacity(styles.show, modalOpened);

  return <div className={cn(styles.warning, opacity)}>{children}</div>;
};
