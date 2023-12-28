import styles from "./input.module.scss";
// import cn from 'classnames'

const Input = ({ noValidate, ...props }) => {
  const rootStyles = [styles.input];

  if (noValidate) {
    rootStyles.push(styles.noValidate);
  }

  // return <input 
  //   {...props}
  //   className={cn(styles.input, {
  //       [styles.noValidate]: noValidate,
  //     })}
  // />

  // попгули либу classnames, она как раз корректно конкатенирует сласснеймы, в том числе и условные
  // так можно, но в целом лучше использовать инструменты 
  return <input className={rootStyles.join(" ")} {...props} />;
};

export default Input;
