import cn from "classnames";
import { useEffect } from "react";
import { useOpacity } from "../../../hooks/useOpacity";
import styles from "./modal.module.scss";

export const Modal = ({ children, modalOpened, setModalOpened }) => {
  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.key === "Escape") {
        setModalOpened(false);
      }
    };

    window.addEventListener("keydown", closeOnEsc);

    return () => {
      window.removeEventListener("keydown", closeOnEsc);
    };
  }, [setModalOpened]);

  const opacity = useOpacity(styles.opened, modalOpened);

  return (
    <div
      className={cn(styles.modal, opacity)}
      onClick={() => setModalOpened(false)}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
