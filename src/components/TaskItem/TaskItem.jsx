import { useEffect, useState } from "react";
import delIcon from "../../assets/icons/del.png";
import editIcon from "../../assets/icons/edit.png";
import ButtonIcon from "../UI/buttons/ButtonIcon";
import styles from "./taskItem.module.scss";
import { expDate } from "../../utils/expDate";

const TaskItem = ({ title, description, date, remove, ...props }) => {
  const [rootStyles, setRootStyles] = useState([styles.task]);

  // console.log(props)

  useEffect(() => {
    setTimeout(() => {
      setRootStyles([...rootStyles, styles.visible]);
    });
  }, []);

  return (
    <div className={rootStyles.join(" ")}>
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

export default TaskItem;
