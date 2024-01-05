import { useEffect, useState } from "react";
import styles from "./modal.module.scss";

const Modal = ({ children, modalOpened, setModalOpened }) => {
  const [modalOpacity, setModalOpacity] = useState({});

  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.key === "Escape") {
        setModalOpened(false);
      }
    };

    window.addEventListener("keydown", closeOnEsc);

    setModalOpacity({
      opacity: 1,
      visibility: "visible",
    });

    return () => {
      window.removeEventListener("keydown", closeOnEsc);

      setModalOpacity({
        opacity: 0,
        visibility: "hidden",
      });
    };
  }, []);

  return (
    <div
      className={styles.modal}
      style={modalOpacity}
      onClick={() => setModalOpened(false)}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
