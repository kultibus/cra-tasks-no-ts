import cn from "classnames";
import delIcon from "../../assets/icons/del.png";
import editIcon from "../../assets/icons/edit.png";
import { useOpacity } from "../../hooks/useOpacity";
import { expDate } from "../../utils/expDate";
import { ButtonIcon } from "../UI/buttons/ButtonIcon/ButtonIcon";
import styles from "./taskItem.module.scss";

export const TaskItem = ({ title, description, date, remove, ...props }) => {
  const opacity = useOpacity(styles.created, props.task);

  return (
    <div className={cn(styles.task, opacity)}>
      <div className={styles.title}>
        <h3>{title}</h3>

        <div className={styles.btns}>
          <ButtonIcon icon={editIcon} altText={"Edit task icon"} />

          <ButtonIcon
            onClick={() => remove(props.task)}
            icon={delIcon}
            altText={"Delete task icon"}
          />
        </div>
      </div>

      <div className={styles.descr}>{description}</div>

      <div className={styles.accomplish}>
        <div>Accomplish till:</div>

        <div className={styles.date}>{expDate(date)}</div>
      </div>
    </div>
  );
};
