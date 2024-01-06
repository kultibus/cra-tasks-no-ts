import cn from "classnames";
import styles from "./button.module.scss";

export const Button = ({ modalOpened, children, ...props }) => {
  return (
    <button
      className={cn(styles.button, { [styles.modalOpened]: modalOpened })}
      {...props}
    >
      {children}
    </button>
  );
};
