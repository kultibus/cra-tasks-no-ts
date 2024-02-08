import { TaskItem } from "../TaskItem/TaskItem";
import styles from "./index.module.scss";

import { ToggleBg } from "../../utils/toggleBg";

export const TasksList = ({
  board,
  currentTask,
  setCurrentTask,
  currentBoard,
  setCurrentBoard,
  onDragOver,
  onDrop,
  onDragLeave,
  onDragEnd,
}) => {
  function dragOverHandler(e) {
    e.preventDefault();

    ToggleBg.addTaskBg(e, styles.activeTask);
  }

  function dragLeaveHandler(e) {
    ToggleBg.removeTaskBg(e, styles.activeTask);
  }

  function dragStartHandler(e, board, task) {
    setCurrentBoard(board);
    setCurrentTask(task);
  }

  function dragEndHandler(e) {
    ToggleBg.removeTaskBg(e, styles.activeTask);
  }

  function dropHandler(e, board, task) {
    e.preventDefault();

    ToggleBg.removeTaskBg(e, styles.activeTask);

    const currentIndex = currentBoard.tasks.indexOf(currentTask);

    const dropIndex = board.tasks.indexOf(task);
    currentBoard.tasks.splice(currentIndex, 1);
    board.tasks.splice(dropIndex, 0, currentTask);
  }

  if (!board.tasks.length) {
    return (
      <div className={styles.taskList}>
        <div className={styles.title}>
          <h2>No {board.title.toLowerCase()}</h2>
        </div>
        <ul
          onDragOver={onDragOver}
          onDrop={onDrop}
          onDragLeave={onDragLeave}
          onDragEnd={onDragEnd}
          className={styles.list}
        ></ul>
      </div>
    );
  }

  return (
    <div className={styles.taskList}>
      <div className={styles.title}>
        <h2>{board.title}</h2>
      </div>
      <ul
        onDragOver={onDragOver}
        onDrop={onDrop}
        onDragLeave={onDragLeave}
        onDragEnd={onDragEnd}
        className={styles.list}
      >
        {board.tasks.map((task) => (
          <TaskItem
            key={task.id}
            onDragOver={(e) => dragOverHandler(e, task)}
            onDragLeave={(e) => dragLeaveHandler(e, task)}
            onDragStart={(e) => dragStartHandler(e, board, task)}
            onDragEnd={(e) => dragEndHandler(e, task)}
            onDrop={(e) => dropHandler(e, board, task)}
            draggble={true}
            task={task}
          />
        ))}
      </ul>
    </div>
  );
};
