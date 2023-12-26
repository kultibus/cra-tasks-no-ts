import { useState } from "react";
import Button from "../UI/buttons/Button";
import Cross from "../UI/icons/Cross";
import Input from "../UI/input/Input";

import styles from "./taskForm.module.scss";

const TaskForm = ({ create, setModalState }) => {
  const [task, setTask] = useState({ title: "", description: "" });

  const addNewTask = (e) => {
    e.preventDefault();

    const newTask = {
      ...task,
      id: Date.now(),
      status: "opened",
    };

    create(newTask);

    setTask({ title: "", description: "" });
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
        />
        <Input type="text" placeholder="Task description..." />
        <Input type="date" placeholder="Task description..." />
      </div>
      <Button onClick={addNewTask}>Create new task</Button>
    </form>
  );
};

export default TaskForm;
