import { useContext } from "react";
import { Button } from "../../UI/buttons/Button/Button";
import styles from "./deleteTask.module.scss";
import { AppContext } from "../../../context";

export const RemoveTask = () => {
  const { setModalOpened, currentTask, deleteTask } = useContext(AppContext);

  return (
    <form className={styles.cnt}>
      <div className={styles.heading}>Delete the task?</div>

      <div className={styles.btns}>
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setModalOpened(false);
            deleteTask(currentTask);
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
