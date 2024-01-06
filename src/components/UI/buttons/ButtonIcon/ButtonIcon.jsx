import styles from "./buttonIcon.module.scss";

export const ButtonIcon = ({ icon, altText, ...props }) => {
  return (
    <button className={styles.buttonIcon} {...props} type="button">
      <img src={icon} alt={altText} />
    </button>
  );
};
