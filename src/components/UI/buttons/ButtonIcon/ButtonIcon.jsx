import cn from "classnames";
import styles from "./buttonIcon.module.scss";

export const ButtonIcon = ({ icon, altText, ...props }) => {
  return (
    <button className={styles.buttonIcon} {...props}>
      <img
        className={cn({
          [styles.edit]: altText === "Edit task icon",
          [styles.del]: altText === "Delete task icon",
        })}
        src={icon}
        alt={altText}
      />
    </button>
  );
};
