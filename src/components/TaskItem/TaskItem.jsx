import delIcon from "../../assets/icons/del.png";
import editIcon from "../../assets/icons/edit.png";
import ButtonIcon from "../UI/buttons/ButtonIcon";
import styles from "./taskItem.module.scss";

const TaskItem = ({ title, description, date }) => {

  const expDate = (date) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const d = date ? new Date(date) : new Date();

    return `${d.getDate()} ${monthNames[d.getMonth()]} ${d
      .getFullYear()
      .toString()
      .slice(2)}`;
  };

  return (
    <div className={styles.task}>
      <div className={styles.title}>
        <h3>{title || "Some Title"}</h3>
        <div className={styles.btns}>
          <ButtonIcon icon={editIcon} altText={"Edit task icon"} />
          <ButtonIcon icon={delIcon} altText={"Delete task icon"} />
        </div>
      </div>
      <div className={styles.descr}>
        {description ||
          "Ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iurequis sunt voluptatem rerum illo velit"}
      </div>
      <div className={styles.accomplish}>
        <div>Accomplish till:</div>
        <div className={styles.date}>{expDate(date)}</div>
      </div>
    </div>
  );
};

export default TaskItem;
