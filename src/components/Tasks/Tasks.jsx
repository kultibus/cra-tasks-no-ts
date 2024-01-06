import TasksList from "../TasksList/TasksList";
import styles from "./tasks.module.scss";

export const Tasks = ({  boards, setBoards }) => {
  const removeTask = (task) => {
    setBoards(
      boards.map((board) => ({
        ...board,
        tasks: board.tasks.filter((t) => t.id !== task.id),
      }))
    );
  };

  return (
    <main className={styles.main}>
      {boards.map((board) => (
        <TasksList
          remove={removeTask}
          key={board.id}
          title={board.title}
          tasks={board.tasks}
        />
      ))}
    </main>
  );
};
