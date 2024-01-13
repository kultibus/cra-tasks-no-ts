import { useState } from "react";
import { TasksList } from "../TasksList/TasksList";
import styles from "./tasks.module.scss";

export const Tasks = ({ boards, setBoards }) => {
  // const [currentTask, setCurrentTask] = useState(null);

  // const [currentBoard, setCurrentBoard] = useState(null);

  // function dragOverHandler(e) {
  //   e.preventDefault();
  // }

  // function dropCardHandler(e, board) {
  //   board.tasks.push(currentTask);

  //   const currentIndex = currentBoard.tasks.indexOf(currentTask);
  //   currentBoard.tasks.splice(currentIndex, 1);

  //   setBoards(
  //     boards.map((b) => {
  //       if (b.id === board.id) {
  //         return board;
  //       }
  //       if (b.id === currentBoard.id) {
  //         return currentBoard;
  //       }
  //       return b;
  //     })
  //   );
  // }

  return (
    <main className={styles.main}>
      {boards.map((board) => (
        <TasksList
          key={board.id}
          // title={board.title}
          // tasks={board.tasks}
          board={board}
          // onDragOver={(e) => dragOverHandler(e)}
          // onDrop={(e) => dropCardHandler(e, board)}
          // currentTask={currentTask}
          // setCurrentTask={setCurrentTask}
          // setCurrentBoard={setCurrentBoard}
					setBoards={setBoards}
					boards={boards}
        />
      ))}
    </main>
  );
};
