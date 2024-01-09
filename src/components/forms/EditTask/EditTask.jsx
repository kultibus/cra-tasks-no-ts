import { useMemo, useState } from "react";
import { getToday } from "../../../utils/getToday";
import { Button } from "../../UI/buttons/Button/Button";
import Cross from "../../UI/icons/Cross";
import { Input } from "../../UI/Input/Input";
import { Warning } from "../../Warning/Warning";
import styles from "./editTask.module.scss";

export const editTask = (props) => {
  const {
    currentTask,
    newTask,
    setNewTask,
    createTask,
    modalOpened,
    setModalOpened,
  } = props;

  const [inputValidate, setInputValidate] = useState(true);

  const content = useMemo(() => {
    if (currentTask) {
      return {
        title: `Edit "${currentTask.title.toUpperCase()}" task`,
        btn: `Save changes`,
        warning: `New title is required to edit the task!`,
      };
    } else {
      return {
        title: "Create new task",
        btn: "Create new task",
        warning: "Title is required to create a new task!",
      };
    }
  }, [currentTask]);

  const [inputs, setInputs] = useState([
    {
      type: "title",
      value: newTask.title,
      setNewTask,
      setInputValidate,
      type: "text",
      placeholder: "Task title...",
      inputValidate,
    },
    {
      type: "description",
      value: newTask.description,
      setNewTask,
      type: "text",
      placeholder: "Task description...",
    },
    {
      type: "date",
      value: newTask.date,
      setNewTask,
      type: "date",
      getToday,
    },
  ]);

  return (
    <form className={styles.form}>
      <div className={styles.header}>
        <h2>{content.title}</h2>

        <Button type={"button"} onClick={() => setModalOpened(false)}>
          <Cross />
        </Button>
      </div>

      <div className={styles.inputs}>
        {inputs.map((input) => {
          return (
            <Input
              value={input.value}
              onChange={(e) => {
                setNewTask({ ...newTask, [input.name]: e.target.value });
              }}
            />
          );
        })}
      </div>

      {/* <div className={styles.inputs}>
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
      </div> */}

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
          {content.btn}
        </Button>

        {!inputValidate && (
          <Warning modalOpened={modalOpened}>{content.warning}</Warning>
        )}
      </div>
    </form>
  );
};
