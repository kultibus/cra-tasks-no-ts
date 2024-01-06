import cn from "classnames";
import { useContext } from "react";
import delIcon from "../../assets/icons/del.png";
import editIcon from "../../assets/icons/edit.png";
import { ModalContext } from "../../context";
import { useOpacity } from "../../hooks/useOpacity";
import { daysLeft, expDate } from "../../utils/expDate";
import { ButtonIcon } from "../UI/buttons/ButtonIcon/ButtonIcon";
import styles from "./taskItem.module.scss";

export const TaskItem = ({ task }) => {
  const { title, description, date } = task;

  const opacity = useOpacity(styles.created, task);

  const { setTaskToRemove, setModalType, setModalOpened } =
    useContext(ModalContext);

  return (
    <div className={cn(styles.task, opacity)}>
      <div className={styles.title}>
        <h3>{title}</h3>

        <div className={styles.btns}>
          <ButtonIcon
            type={"button"}
            icon={editIcon}
            altText={"Edit task icon"}
          />

          <ButtonIcon
            type={"button"}
            onClick={() => {
              setModalOpened(true);
              setModalType("removeTask");
              setTaskToRemove(task);
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

          {/* <div className={styles.date}>{daysLeft(date)}</div> */}
          {console.log(daysLeft(date))}
          <div
            className={cn(styles.date, {
              [styles.threeDays]: daysLeft(date) <= 3,
              [styles.week]: daysLeft(date) <= 7 && daysLeft(date) > 3,
            })}
          >
            {daysLeft(date)}
          </div>
        </div>

        <div className={styles.row}>
          <div>Accomplish till:</div>

          <div
            className={cn(styles.date, {
              [styles.threeDays]: daysLeft(date) <= 3,
              [styles.week]: daysLeft(date) <= 7 && daysLeft(date) > 3,
            })}
          >
            {expDate(date)}
          </div>
        </div>
      </div>
    </div>
  );
};
