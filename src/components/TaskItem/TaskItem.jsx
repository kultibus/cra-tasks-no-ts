import styles from "./taskItem.module.scss";

const TaskItem = (task) => {
  return (
    <div className={styles.task}>
      <h3>{task.title}</h3>
    </div>
  );
};

export default TaskItem;
