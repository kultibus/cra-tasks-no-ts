import Button from "../UI/buttons/Button";
import styles from "./header.module.scss";

const Header = ({ setModalState, modalState }) => {
  return (
    <header className={styles.header}>
      <h1>Tasks manager</h1>
      <Button
        type={"button"}
        modalOpened={modalState}
        onClick={() => {
          setModalState(true);
        }}
      >
        Create new task
      </Button>
    </header>
  );
};

export default Header;
