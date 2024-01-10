import { TaskItem } from "../TaskItem/TaskItem";
import styles from "./index.module.scss";

export const TasksList = ({ title, tasks, board }) => {
  if (!tasks.length) {
    return (
      <div className={styles.taskList}>
        <div className={styles.title}>
          <h2>No {title.toLowerCase()}</h2>
        </div>
      </div>
    );
  }

  function dragOverHandler(e) {
    e.preventDefault();
  }
  function dragLeaveHandler(e) {}
  function dragStartHandler(e, board, task) {
    e.target.style.cursor = "grabbing";
		e.currentTarget.style.backgroundColor = 'yellow'
		console.log(e.currentTarget.style)
  }
  function dragEndHandler(e) {
    e.target.style.cursor = "grab";
  }
  function dropHandler(e) {
    e.preventDefault();
    // e.target.style.cursor = 'grab'
  }

  return (
    <div className={styles.taskList}>
      <div className={styles.title}>
        <h2>{title}</h2>
      </div>
      <ul className={styles.list}>
        {tasks.map((task) => (
          <TaskItem
            draggble={true}
            onDragOver={(e) => dragOverHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragStart={(e) => dragStartHandler(e, board, task)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDrop={(e) => dropHandler(e, board, task)}
            key={task.id}
            task={task}
          />
        ))}
      </ul>
    </div>
  );
};
