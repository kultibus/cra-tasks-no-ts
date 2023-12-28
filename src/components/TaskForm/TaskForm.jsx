import { useEffect, useState } from "react";
import Button from "../UI/buttons/Button";
import Cross from "../UI/icons/Cross";
import Input from "../UI/input/Input";

import styles from "./taskForm.module.scss";

const TaskForm = ({ create, setModalState, modal }) => {
  const [task, setTask] = useState({ title: "", description: "", date: "" });
  const [noValidate, setNoValidate] = useState(false);

  const addNewTask = (e) => {
    e.preventDefault();

    if (task.title) {
      const newTask = {
        ...task,
        id: Date.now(),
      };

      create(newTask);

      setTask({ title: "", description: "", date: "" });

      setNoValidate(false);
    } else {
      setNoValidate(true);
    }
  };

  useEffect(() => {
    if (!modal) {
      setNoValidate(false);
    }
  }, [modal]);

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
          onChange={(e) => {
            setTask({ ...task, title: e.target.value });
            setNoValidate(false);
          }}
          type="text"
          placeholder="Task title..."
          noValidate={noValidate}
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
      <div className={styles.submit}>
        <Button type="submit" onClick={addNewTask}>
          Create new task
        </Button>
        {noValidate && <div>Task title is required to create a new task!</div>}
      </div>
    </form>
  );
};

export default TaskForm;
