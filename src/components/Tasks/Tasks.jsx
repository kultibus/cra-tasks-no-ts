import { useState } from "react";
import TasksList from "../TasksOpened/TasksList";
import styles from "./tasks.module.scss";

const Tasks = ({ tasks }) => {
  const [tasksOpened, setTasksOpened] = useState([]);
  // const [tasksInProcess, setTasksInProcess] = useState([])
  // const [tasksAccomplished, setTasksAccomplished] = useState([])

  return (
    <main>
      <TasksList tasks={tasks} title={"Opened tasks"} />
      <TasksList tasks={tasks} title={"Tasks in process"} />
      <TasksList tasks={tasks} title={"Tasks accomplished"} />
    </main>
  );
};

export default Tasks;
