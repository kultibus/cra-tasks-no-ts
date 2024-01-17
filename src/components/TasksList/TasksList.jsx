import { useState } from "react";
import { TaskItem } from "../TaskItem/TaskItem";
import styles from "./index.module.scss";

export const TasksList = ({
  // title,
  // tasks,
  board,
  setBoards,
  boards,
  // currentTask,
  // setCurrentTask,
  // setCurrentBoard,
  // onDragOver,
  // onDrop,
}) => {
  const [currentTask, setCurrentTask] = useState(null);

  const [currentBoard, setCurrentBoard] = useState(null);

  const addBg = (e) => {
    const el = e.target.closest("li");
    el.classList.add(styles.activeTask);
  };

  const removeBg = (e) => {
    const el = e.target.closest("li");
    el.classList.remove(styles.activeTask);
  };

  function dragOverHandler(e) {
    e.preventDefault();

    addBg(e);
  }

  function dragLeaveHandler(e) {
    removeBg(e);
  }

  function dragStartHandler(e, board, task) {
    setCurrentBoard(board);
    setCurrentTask(task);
  }

  function dragEndHandler(e) {
    removeBg(e);
  }

  function dropHandler(e, board, task) {
    e.preventDefault();

    removeBg(e);

    const currentIndex = currentBoard.tasks.indexOf(currentTask);
    const dropIndex = board.tasks.indexOf(task);

    if (dropIndex !== currentIndex) {
      currentBoard.tasks.splice(currentIndex, 1);
      board.tasks.splice(dropIndex, 0, currentTask);
    }

    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
  }

  if (!board.tasks.length) {
    return (
      <div className={styles.taskList}>
        <div className={styles.title}>
          <h2>No {board.title.toLowerCase()}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.taskList}>
      <div className={styles.title}>
        <h2>{board.title}</h2>
      </div>
      <ul className={styles.list}>
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
