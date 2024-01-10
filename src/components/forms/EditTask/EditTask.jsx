import { useState } from "react";
import { Input } from "../../UI/Input/Input";
import { Button } from "../../UI/buttons/Button/Button";
import Cross from "../../UI/icons/Cross";
import { Warning } from "../../Warning/Warning";
import styles from "./editTask.module.scss";
import { DateHandler } from "../../../utils/dateHandler";

const dateHandler = new DateHandler();

export const EditTask = (props) => {
  const { currentTask, setCurrentTask, editTask, modalOpened, setModalOpened } =
    props;

  const [inputValidate, setInputValidate] = useState(true);

  const [formTitle, setFormTitle] = useState(currentTask.title.toUpperCase());


  return (
    <form className={styles.form}>
      <div className={styles.header}>
        <h2>Edit "{formTitle}" task</h2>

        <Button type={"button"} onClick={() => setModalOpened(false)}>
          <Cross />
        </Button>
      </div>

      <div className={styles.inputs}>
        <Input
          value={currentTask.title}
          onChange={(e) => {
            setCurrentTask({ ...currentTask, title: e.target.value });
          }}
          onClick={() => {
            setInputValidate(true);
          }}
          type="text"
          placeholder="Task title..."
          inputValidate={inputValidate}
        />
        <Input
          value={currentTask.description}
          onChange={(e) =>
            setCurrentTask({ ...currentTask, description: e.target.value })
          }
          type="text"
          placeholder="Task description..."
        />

        <Input
          value={currentTask.date}
          onChange={(e) => {
            setCurrentTask({ ...currentTask, date: e.target.value });
          }}
          type="date"
          min={dateHandler.transformDate(new Date())}
        />
      </div>

      <div className={styles.submit}>
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();

            if (!currentTask.title) {
              setInputValidate(false);
              return;
            }

            editTask(
              currentTask,
              currentTask.title,
              currentTask.description,
              currentTask.date
            );
          }}
        >
          Save changes
        </Button>

        {!inputValidate && (
          <Warning modalOpened={modalOpened}>
            New title is required to edit the task!
          </Warning>
        )}
      </div>
    </form>
  );
};
