import { useEffect, useState } from "react";
import TasksList from "../TasksOpened/TasksList";
import styles from "./tasks.module.scss";

const Tasks = ({ newTask }) => {
  const [boards, setBoards] = useState([
    { id: 1, title: "Opened tasks", tasks: [] },
    { id: 2, title: "Tasks in process", tasks: [] },
    { id: 3, title: "Accomplished tasks", tasks: [] },
  ]);

  useEffect(() => {
    if (newTask) {
      setBoards([
        { ...boards[0], tasks: [...boards[0].tasks, newTask] },
        boards[1],
        boards[2],
      ]);
    }
  }, [newTask]);

  return (
    <main>
      {boards.map((board) => (
        <TasksList key={board.id} title={board.title} tasks={board.tasks} />
      ))}
    </main>
  );
};

export default Tasks;
