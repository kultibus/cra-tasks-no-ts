import { useEffect, useState } from "react";
import Button from "../UI/buttons/Button";
import Cross from "../UI/icons/Cross";
import Input from "../UI/input/Input";
import styles from "./taskForm.module.scss";
import { getToday } from "../../utils/getToday";

const TaskForm = (props) => {
  const {
    newTask,
    setNewTask,
    onTaskCreate,
    setModalState,
    inputValidate,
    setInputValidate,
  } = props;

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
            setInputValidate(true);
          }}
          type="text"
          placeholder="Task title..."
          validate={inputValidate}
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
          Create new task
        </Button>
        {!inputValidate && (
          <div>Task title is required to create a new task!</div>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
