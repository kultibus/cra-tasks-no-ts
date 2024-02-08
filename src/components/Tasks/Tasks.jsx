import { useState } from "react";
import { TasksList } from "../TasksList/TasksList";
import styles from "./tasks.module.scss";

export const Tasks = ({ boards, setBoards }) => {
  const [currentTask, setCurrentTask] = useState(null);

  const [currentBoard, setCurrentBoard] = useState(null);

  function dragOverHandler(e) {
    e.preventDefault();
  }

  function dropCardHandler(e, board) {
    const currentIndex = currentBoard.tasks.indexOf(currentTask);

    if (!e.target.closest("li")) {
      console.log("ok");
      board.tasks.push(currentTask);
      currentBoard.tasks.splice(currentIndex, 1);
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

  return (
    <main className={styles.main}>
      {boards.map((board) => (
        <TasksList
          key={board.id}
          board={board}
          currentTask={currentTask}
          setCurrentTask={setCurrentTask}
          currentBoard={currentBoard}
          setCurrentBoard={setCurrentBoard}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropCardHandler(e, board)}
        />
      ))}
    </main>
  );
};
