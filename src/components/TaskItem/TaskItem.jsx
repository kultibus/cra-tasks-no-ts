import cn from "classnames";
import { useContext } from "react";
import delIcon from "../../assets/icons/del.png";
import editIcon from "../../assets/icons/edit.png";
import { AppContext } from "../../context";
import { useOpacity } from "../../hooks/useOpacity";
import { DateHandler } from "../../utils/dateHandler";
import { ButtonIcon } from "../UI/buttons/ButtonIcon/ButtonIcon";
import styles from "./taskItem.module.scss";

export const TaskItem = ({ task }) => {
  const { title, description, date } = task;

  const dates = new DateHandler(date);

  const opacity = useOpacity(styles.created, task);

  const { setCurrentTask, setModalType, setModalOpened } =
    useContext(AppContext);

  return (
    <div className={cn(styles.task, opacity)}>
      <div className={styles.title}>
        <h3>{title}</h3>

        <div className={styles.btns}>
          <ButtonIcon
            onClick={() => {
              setModalOpened(true);
              setModalType("editTask");
              setCurrentTask({ ...task, date: dates.getTransformedDate() });
            }}
            type={"button"}
            icon={editIcon}
            altText={"Edit task icon"}
          />

          <ButtonIcon
            type={"button"}
            onClick={() => {
              setModalOpened(true);
              setModalType("deleteTask");
              setCurrentTask(task);
            }}
            icon={delIcon}
            altText={"Delete task icon"}
          />
        </div>
      </div>

      <div className={styles.descr}>{description}</div>

      <div className={styles.bottom}>
        <div className={styles.row}>
          <div>Days left:</div>

          <div
            className={cn(styles.date, {
              [styles.threeDays]: dates.getDaysLeft() <= 3,
              [styles.week]:
                dates.getDaysLeft() <= 7 && dates.getDaysLeft() > 3,
            })}
          >
            {dates.getDaysLeft()}
          </div>
        </div>

        <div className={styles.row}>
          <div>Accomplish till:</div>

          <div
            className={cn(styles.date, {
              [styles.threeDays]: dates.getDaysLeft() <= 3,
              [styles.week]:
                dates.getDaysLeft() <= 7 && dates.getDaysLeft() > 3,
            })}
          >
            {dates.getAccomplishDate()}
          </div>
        </div>
      </div>
    </div>
  );
};
