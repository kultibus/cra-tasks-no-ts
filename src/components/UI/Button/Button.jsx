import styles from "./button.module.scss";

const Button = ({ modalOpened, children, ...props }) => {
  const rootClasses = [styles.button];

  if (modalOpened) {
    rootClasses.push(styles.modalOpened);
  }

  return (
    <button className={rootClasses.join(" ")} {...props}>
      {children}
    </button>
  );
};

export default Button;
