import { useState } from "react";
import Button from "../UI/buttons/Button";
import Cross from "../UI/icons/Cross";
import Input from "../UI/input/Input";

import styles from "./taskForm.module.scss";

const TaskForm = ({ create, setModalState }) => {
  const [task, setTask] = useState({ title: "", description: "", date: "" });

  const addNewTask = (e) => {
    e.preventDefault();

    const newTask = {
      ...task,
      id: Date.now(),
      status: "opened",
    };

    create(newTask);

    setTask({ title: "", description: "", date: "" });
  };

  const today = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();

    return `${year}-${month}-${date}`;
  };


  return (
    <form>
      <div className={styles.header}>
        <h2>Create task</h2>
        <Button type={"button"} onClick={() => setModalState(false)}>
          <Cross />
        </Button>
      </div>
      <div className={styles.inputs}>
        <Input
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          type="text"
          placeholder="Task title..."
					// required={'required'}
        />
        <Input
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          type="text"
          placeholder="Task description..."
        />
        <Input
          value={task.date}
          onChange={(e) => {
            setTask({ ...task, date: e.target.value });
          }}
          type="date"
					min={today()}
        />
      </div>
      <Button type="submit" onClick={addNewTask}>
        Create new task
      </Button>
    </form>
  );
};

export default TaskForm;
