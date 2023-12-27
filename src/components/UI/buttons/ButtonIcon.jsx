import styles from "./buttons.module.scss";

const ButtonIcon = ({ icon, altText, ...props }) => {
  return (
    <button className={styles.buttonIcon} {...props} type="button">
      <img src={icon} alt={altText} />
    </button>
  );
};

export default ButtonIcon;
