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

  if (!board.tasks.length) {
    return (
      <div className={styles.taskList}>
        <div className={styles.title}>
          <h2>No {board.title.toLowerCase()}</h2>
        </div>
      </div>
    );
  }



  function dragOverHandler(e) {
    e.preventDefault();
		
		const item = e.target.closest('li')
		
    if (item) {
      item.style.opacity = 0.5;
    }
  }

  function dragLeaveHandler(e) {
    e.target.style.opacity = 1;
  }

  function dragStartHandler(e, board, task) {
    setCurrentBoard(board);
    setCurrentTask(task);
  }

  function dragEndHandler(e) {
    e.target.style.opacity = 1;
  }

  function dropHandler(e, board, task) {
    e.preventDefault();

    const currentIndex = currentBoard.tasks.indexOf(currentTask);
    currentBoard.tasks.splice(currentIndex, 1);
    console.log(currentBoard.tasks);

    const dropIndex = board.tasks.indexOf(task);
    board.tasks.splice(dropIndex + 1, 0, currentTask);

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

  return (
    <div className={styles.taskList}>
      <div className={styles.title}>
        <h2>{board.title}</h2>
      </div>
      <ul className={styles.list}>
        {board.tasks.map((task) => (
          <TaskItem
            onDragOver={(e) => dragOverHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragStart={(e) => dragStartHandler(e, board, task)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDrop={(e) => dropHandler(e, board, task)}
            draggble={true}
            key={task.id}
            task={task}
          />
        ))}
      </ul>
    </div>
  );
};
