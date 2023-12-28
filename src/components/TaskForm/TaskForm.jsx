import { useEffect, useState } from "react";
import Button from "../UI/buttons/Button";
import Cross from "../UI/icons/Cross";
import Input from "../UI/input/Input";

import styles from "./taskForm.module.scss";

const today = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();

  return `${year}-${month}-${date}`;
};

const TaskForm = (props) => {
  const { newTask, setNewTask, onTaskCreate, setModalState } = props;

  const [noValidate, setNoValidate] = useState(false);

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
          value={newTask.title}
          onChange={(e) => {
            setNewTask({ ...newTask, title: e.target.value });
            setNoValidate(false);
          }}
          type="text"
          placeholder="Task title..."
          noValidate={noValidate}
        />
        <Input
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          type="text"
          placeholder="Task description..."
        />
        <Input
          value={newTask.date}
          onChange={(e) => {
            setNewTask({ ...newTask, date: e.target.value });
          }}
          type="date"
          min={today()}
        />
      </div>
      <div className={styles.submit}>
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();

            if (!newTask.title) {
              // setNoValidate(true);
              return;
            }

            onTaskCreate();

            setNewTask({ title: "", description: "", date: "" });
            // setNoValidate(true);
          }}
        >
          Create new task
        </Button>
        {noValidate && <div>Task title is required to create a new task!</div>}
      </div>
    </form>
  );
};

export default TaskForm;
