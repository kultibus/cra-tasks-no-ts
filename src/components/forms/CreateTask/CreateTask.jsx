import { useMemo, useState } from "react";
import { getToday } from "../../../utils/getToday";
import { Button } from "../../UI/buttons/Button/Button";
import Cross from "../../UI/icons/Cross";
import { Input } from "../../UI/Input/Input";
import { Warning } from "../../Warning/Warning";
import styles from "./createTask.module.scss";

export const CreateTask = (props) => {
  const {
    currentTask,
    setCurrentTask,
    newTask,
    setNewTask,
    createTask,
    editTask,
    modalOpened,
    setModalOpened,
  } = props;

  const [inputValidate, setInputValidate] = useState(true);

  const [form, setForm] = useState({
    content: {
      title: "Create new task",
      btn: "Create new task",
      warning: "Title is required to create a new task!",
    },
    values: {
      title: newTask.title,
      description: newTask.description,
      date: newTask.date,
    },
    task: newTask,
    setTask: setNewTask,
    createTask: createTask,
  });

  useMemo(() => {
    if (currentTask) {
      setForm({
        ...form,
        content: {
          title: `Edit "${currentTask.title.toUpperCase()}" task`,
          btn: `Save changes`,
          warning: `New title is required to edit the task!`,
        },
        values: {
          title: currentTask.title,
          description: currentTask.description,
          date: currentTask.date,
        },
        task: currentTask,
        setTask: setCurrentTask,
        createTask: editTask,
      });
    }
  }, [currentTask]);

  return (
    <form className={styles.form}>
      <div className={styles.header}>
        <h2>{form.content.title}</h2>

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

            createTask();

            setNewTask({ title: "", description: "", date: "" });
          }}
        >
          {form.content.btn}
        </Button>

        {!inputValidate && (
          <Warning modalOpened={modalOpened}>{form.content.warning}</Warning>
        )}
      </div>
    </form>
  );
};
