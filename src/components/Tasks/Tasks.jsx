import { useState } from "react";
import TasksList from "../TasksOpened/TasksList";
import styles from "./tasks.module.scss";

const Tasks = ({ tasks }) => {
	console.log(tasks)
	const [tasksOpened, setTasksOpened] = useState([])
	const [tasksInProcess, setTasksInProcess] = useState([])
	const [tasksAccomplished, setTasksAccomplished] = useState([])
	
  return (
    <main>
      <TasksList tasks={tasksOpened} title={"Opened"} />
      <TasksList tasks={tasksInProcess} title={"In process"} />
      <TasksList tasks={tasksAccomplished} title={"Accomplished"} />
    </main>
  );
};

export default Tasks;
