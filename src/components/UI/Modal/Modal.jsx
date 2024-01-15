import cn from "classnames";
import { useContext, useEffect } from "react";
import { AppContext } from "../../../context";
import { useSelector } from "../../../hooks/useSelector";
import styles from "./modal.module.scss";

export const Modal = ({ children, setModalOpened }) => {
  const { currentTask, deleteTask, modalType } = useContext(AppContext);

  useEffect(() => {
    const closeOnKey = (e) => {
      if (e.key === "Escape") {
        setModalOpened(false);
      } else if (e.key === "Enter" && modalType === "deleteTask") {
        setModalOpened(false);
        deleteTask(currentTask);
      }
    };

    window.addEventListener("keydown", closeOnKey);

    return () => {
      window.removeEventListener("keydown", closeOnKey);
    };
  }, [setModalOpened, currentTask, deleteTask, modalType]);

  const selector = useSelector(styles.opened);

  return (
    <div
      className={cn(styles.modal, selector)}
      onClick={() => setModalOpened(false)}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
