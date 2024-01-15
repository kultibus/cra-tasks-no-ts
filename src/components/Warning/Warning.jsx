import cn from "classnames";
import { useSelector } from "../../hooks/useSelector";
import styles from "./warning.module.scss";

export const Warning = ({ children }) => {
  const opacity = useSelector(styles.show);

  return <div className={cn(styles.warning, opacity)}>{children}</div>;
};
