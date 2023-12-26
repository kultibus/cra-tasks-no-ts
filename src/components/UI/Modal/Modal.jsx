import styles from "./modal.module.scss";

const Modal = ({ visible, setVisible }) => {
  const rootClasses = [styles.modal];

  if (visible) {
    rootClasses.push(styles.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={styles.content}
        onClick={(e) => e.stopPropagation()}
      ></div>
    </div>
  );
};

export default Modal;
