import Button from "../UI/Button/Button";
import styles from "./header.module.scss";

const Header = ({ setVisible }) => {

  return (
    <header className={styles.header}>
      <h1>Tasks manager</h1>
      <Button onClick={() => setVisible(true)}>Create new task</Button>
    </header>
  );
};

export default Header;
