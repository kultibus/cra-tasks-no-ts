import Button from "../UI/buttons/Button";
import styles from "./header.module.scss";

const Header = ({ setModalOpened, modalOpened }) => {
  return (
    <header className={styles.header}>
      <h1>Tasks manager</h1>
      <Button
        type={"button"}
        modalOpened={modalOpened}
        onClick={() => {
          setModalOpened(true);
        }}
      >
        Create new task
      </Button>
    </header>
  );
};

export default Header;
