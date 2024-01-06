import { Button } from "../UI/buttons/Button/Button";
import styles from "./header.module.scss";

export const Header = ({ setModalOpened, modalOpened }) => {
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
