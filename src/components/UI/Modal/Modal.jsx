import styles from "./modal.module.scss";

const Modal = ({ children, modalOpened, setModalOpened }) => {
  const rootClasses = [styles.modal];

  if (modalOpened) {
    rootClasses.push(styles.active);
  }

  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => setModalOpened(false)}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
