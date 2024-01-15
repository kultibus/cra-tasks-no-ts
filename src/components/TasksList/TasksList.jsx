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

  function dragOverHandler(e) {
    e.preventDefault();

    // const item = e.target.closest("li");

    // if (item) {
    //   item.style.opacity = 0.5;
    // }
  }

  function dragLeaveHandler(e) {
    // e.target.style.opacity = 1;
  }

  function dragStartHandler(e, board, task) {
    setCurrentBoard(board);
    setCurrentTask(task);
  }

  function dragEndHandler(e) {
    // e.target.style.opacity = 1;
  }

  function dropHandler(e, board, task) {
    e.preventDefault();
    // e.target.style.opacity = 1;

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
            onDragOver={(e) => dragOverHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragStart={(e) => dragStartHandler(e, board, task)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDrop={(e) => dropHandler(e, board, task)}
            draggble={true}
            task={task}
          />
        ))}
      </ul>
    </div>
  );
};
