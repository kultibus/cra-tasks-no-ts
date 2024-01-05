import { useEffect, useState } from "react";
import styles from "./modal.module.scss";
import cn from "classnames";


export const Modal = ({ children, modalOpened, setModalOpened }) => {
  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.key === "Escape") {
        setModalOpened(false);
      }
    };

    window.addEventListener("keydown", closeOnEsc);

    const timer = setTimeout(() => {
      setOpacity({ [styles.opened]: modalOpened });
    });

    return () => {
      window.removeEventListener("keydown", closeOnEsc);

      clearTimeout(timer);
    };
  }, []);

  const [opacity, setOpacity] = useState({});

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

