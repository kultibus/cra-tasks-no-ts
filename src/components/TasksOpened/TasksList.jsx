import { useState } from "react";
import styles from "./index.module.scss";
import TaskItem from "../TaskItem/TaskItem";

const TasksList = ({ title, tasks }) => {
  if (!tasks.length) {
    return (
      <div className={styles.taskList}>
        <h2>No tasks {title.toLowerCase()}</h2>
      </div>
    );
  }

  return (
    <div className={styles.taskList}>
      <h2>{title}</h2>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TasksList;
