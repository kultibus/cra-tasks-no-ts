import cn from "classnames";
import { useContext, useEffect } from "react";
import { useOpacity } from "../../../hooks/useOpacity";
import styles from "./modal.module.scss";
import { ModalContext } from "../../../context";

export const Modal = ({ children, modalOpened, setModalOpened }) => {
  const { taskToRemove, removeTask, modalType } = useContext(ModalContext);

  useEffect(() => {
    const closeOnKey = (e) => {
      if (e.key === "Escape") {
        setModalOpened(false);
      } else if (e.key === "Enter" && modalType === "removeTask") {
        setModalOpened(false);
        removeTask(taskToRemove);
      }
    };

    window.addEventListener("keydown", closeOnKey);

    return () => {
      window.removeEventListener("keydown", closeOnKey);
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
