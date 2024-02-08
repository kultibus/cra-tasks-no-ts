import { useState } from "react";
import { TasksList } from "../TasksList/TasksList";
import styles from "./tasks.module.scss";

export const Tasks = ({ boards, setBoards }) => {
  const [currentTask, setCurrentTask] = useState(null);

  const [currentBoard, setCurrentBoard] = useState(null);

  // const [dropIndex, setDropIndex] = useState(null);

  // const [currentIndex, setCurrentIndex] = useState(null);

  function dragOverHandler(e, board) {
    e.preventDefault();
  }

  function dropCardHandler(e, board) {
    // if (board.id !== currentBoard.id && dropIndex !== currentIndex) {
    // 	currentBoard.tasks.splice(currentIndex, 1);
    // 	board.tasks.splice(dropIndex, 0, currentTask);
    // }

    // const dropIndex = board.tasks.indexOf(dropTask);

    // if (dropIndex !== currentIndex) {
    // }

    const currentIndex = currentBoard.tasks.indexOf(currentTask);

    if (!board.tasks.length) {
      board.tasks.push(currentTask);
      currentBoard.tasks.splice(currentIndex, 1);
    }

    console.log(currentIndex);

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
    <main className={styles.main}>
      {boards.map((board) => (
        <TasksList
          key={board.id}
          // title={board.title}
          // tasks={board.tasks}
          board={board}
          onDragOver={(e) => dragOverHandler(e, board)}
          onDrop={(e) => dropCardHandler(e, board)}
          currentTask={currentTask}
          setCurrentTask={setCurrentTask}
          currentBoard={currentBoard}
          setCurrentBoard={setCurrentBoard}
          // setBoards={setBoards}
          // boards={boards}
          // dropTask={dropTask}
          // setDropIndex={setDropIndex}
          // setCurrentIndex={setCurrentIndex}
        />
      ))}
    </main>
  );
};
