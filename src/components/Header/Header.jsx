import { useState } from "react";
import Button from "../UI/Button/Button";
import styles from "./header.module.scss";

const Header = ({ setVisibility }) => {
  const [modalOpened, setModalOpened] = useState(false);

  const openModal = () => {
    setVisibility(true);
    setModalOpened(true);
  };

  return (
    <header className={styles.header}>
      <h1>Tasks manager</h1>
      <Button modalOpened={modalOpened} onClick={openModal}>
        Create new task
      </Button>
    </header>
  );
};

export default Header;
