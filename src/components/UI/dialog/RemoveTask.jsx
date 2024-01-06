import { useContext } from "react";
import { Button } from "../buttons/Button/Button";
import styles from "./removeTask.module.scss";
import { ModalContext } from "../../../context";

export const RemoveTask = () => {
  const { setModalOpened, taskToRemove, removeTask } = useContext(ModalContext);

  return (
    <form className={styles.cnt}>
      <div className={styles.heading}>Delete the task?</div>

      <div className={styles.btns}>
        <Button
          type="submit"
          onClick={(e) => {
            console.log(e.key);
            e.preventDefault();
            setModalOpened(false);
            removeTask(taskToRemove);
          }}
        >
          Yes
        </Button>

        <Button type={"button"} onClick={() => setModalOpened(false)}>
          No
        </Button>
      </div>
    </form>
  );
};
