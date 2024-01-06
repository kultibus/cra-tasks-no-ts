import { TasksList } from "../TasksList/TasksList";
import styles from "./tasks.module.scss";

export const Tasks = ({ boards }) => {
  return (
    <main className={styles.main}>
      {boards.map((board) => (
        <TasksList key={board.id} title={board.title} tasks={board.tasks} />
      ))}
    </main>
  );
};
