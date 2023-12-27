import { useState } from "react";
import styles from "./index.module.scss";
import TaskItem from "../TaskItem/TaskItem";

const TasksList = ({ title, tasks }) => {
  if (!tasks.length) {
    return (
      <div className={styles.taskList}>
        <div className={styles.title}>
          <h2>No {title.toLowerCase()}</h2>
        </div>
      </div>
    );
  }

	console.log(tasks)

  return (
    <div className={styles.taskList}>
      <div className={styles.title}>
        <h2>{title}</h2>
      </div>
      <div className={styles.list}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            description={task.description}
            date={task.date}
          />
        ))}
      </div>
    </div>
  );
};

export default TasksList;
