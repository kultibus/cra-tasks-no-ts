import styles from "./input.module.scss";

const Input = ({ noValidate, ...props }) => {
  const rootStyles = [styles.input];

  if (noValidate) {
    rootStyles.push(styles.noValidate);
  }

  return <input className={rootStyles.join(" ")} {...props} />;
};

export default Input;
