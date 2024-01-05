import cn from "classnames";
import styles from "./buttons.module.scss";


const Button = ({ modalOpened, children, ...props }) => {
  return (
    <button
      className={cn(styles.button, { [styles.modalOpened]: modalOpened })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
