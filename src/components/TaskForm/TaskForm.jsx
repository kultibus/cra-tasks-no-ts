import { useState } from "react";
import { getToday } from "../../utils/getToday";
import { Button } from "../UI/buttons/Button/Button";
import Cross from "../UI/icons/Cross";
import { Input } from "../UI/Input/Input";
import { Warning } from "../Warning/Warning";
import styles from "./taskForm.module.scss";

export const TaskForm = (props) => {
  const {
    currentTask,
    newTask,
    setNewTask,
    onTaskCreate,
    modalOpened,
    setModalOpened,
  } = props;

  const [inputValidate, setInputValidate] = useState(true);

  const formTitle = currentTask
    ? `Edit "${currentTask.title.toUpperCase()}" task`
    : "Create new task";

  const btnText = currentTask ? `Save changes` : "Create new task";

  const warnText = currentTask
    ? `New title is required to edit the task!`
    : "Title is required to create a new task!";

  return (
    <form className={styles.form}>
      <div className={styles.header}>
        <h2>{formTitle}</h2>

        <Button type={"button"} onClick={() => setModalOpened(false)}>
          <Cross />
        </Button>
      </div>

      <div className={styles.inputs}>
        <Input
          value={newTask.title}
          onChange={(e) => {
            setNewTask({ ...newTask, title: e.target.value });
          }}
          onClick={() => {
            setInputValidate(true);
          }}
          type="text"
          placeholder="Task title..."
          inputValidate={inputValidate}
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
          min={getToday()}
        />
      </div>

      <div className={styles.submit}>
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();

            if (!newTask.title) {
              setInputValidate(false);
              return;
            }

            onTaskCreate();

            setNewTask({ title: "", description: "", date: "" });
          }}
        >
          {btnText}
        </Button>

        {!inputValidate && (
          <Warning modalOpened={modalOpened}>
            {warnText}
          </Warning>
        )}
      </div>
    </form>
  );
};
