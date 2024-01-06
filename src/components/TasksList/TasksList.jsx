import { TaskItem } from "../TaskItem/TaskItem";
import styles from "./index.module.scss";

export const TasksList = ({ title, tasks, remove }) => {
  if (!tasks.length) {
    return (
      <div className={styles.taskList}>
        <div className={styles.title}>
          <h2>No {title.toLowerCase()}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.taskList}>
      <div className={styles.title}>
        <h2>{title}</h2>
      </div>
      <div className={styles.list}>
        {tasks.map((task) => (
          <TaskItem
            remove={remove}
            key={task.id}
            title={task.title}
            description={task.description}
            date={task.date}
            task={task}
          />
        ))}
      </div>
    </div>
  );
};
