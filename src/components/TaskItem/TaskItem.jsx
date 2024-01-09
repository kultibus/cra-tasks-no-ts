import cn from "classnames";
import { useContext, useMemo, useState } from "react";
import delIcon from "../../assets/icons/del.png";
import editIcon from "../../assets/icons/edit.png";
import { AppContext } from "../../context";
import { useOpacity } from "../../hooks/useOpacity";
import { DateHandler, daysLeft } from "../../utils/dateHandler";
import { ButtonIcon } from "../UI/buttons/ButtonIcon/ButtonIcon";
import styles from "./taskItem.module.scss";

// const dateHandler = new DateHandler();

export const TaskItem = ({ task }) => {
  const { title, description, date } = task;

	console.log(date)


  const dates = new DateHandler(date);

  // useMemo(() => {
  //   setDates(dateHandler.transformMonth(date));
  // }, [date]);

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
              setCurrentTask(task);
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
              [styles.threeDays]: dates.daysLeft <= 3,
              [styles.week]: dates.daysLeft <= 7 && dates.daysLeft > 3,
            })}
          >
            {dates.daysLeft}
          </div>
        </div>

        <div className={styles.row}>
          <div>Accomplish till:</div>

          <div
            className={cn(styles.date, {
              [styles.threeDays]: dates.daysLeft <= 3,
              [styles.week]: dates.daysLeft <= 7 && dates.daysLeft > 3,
            })}
          >
            {dates.accomplishDate}
          </div>
        </div>
      </div>
    </div>
  );
};
