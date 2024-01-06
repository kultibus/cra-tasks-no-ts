import { useState } from "react";
import styles from "./app.module.scss";
import Header from "./components/Header/Header";
import { TaskForm } from "./components/TaskForm/TaskForm";
import Tasks from "./components/Tasks/Tasks";
import { Modal } from "./components/UI/modal/Modal";

function App() {
  const [modalOpened, setModalOpened] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    date: "",
  });

  const [boards, setBoards] = useState([
    { id: 1, title: "Opened tasks", tasks: [] },
    { id: 2, title: "Tasks in process", tasks: [] },
    { id: 3, title: "Accomplished tasks", tasks: [] },
  ]);

  const onTaskCreate = () => {
    setBoards([
      {
        ...boards[0],
        tasks: [...boards[0].tasks, { ...newTask, id: Date.now() }],
      },
      boards[1],
      boards[2],
    ]);
    setModalOpened(false);
  };

  return (
    <div className={styles.tasksManager}>
      <Header modalOpened={modalOpened} setModalOpened={setModalOpened} />

      <Tasks boards={boards} setBoards={setBoards} newTask={newTask} />

      {modalOpened && (
        <Modal modalOpened={modalOpened} setModalOpened={setModalOpened}>
          <TaskForm
            onTaskCreate={onTaskCreate}
            newTask={newTask}
            setNewTask={setNewTask}
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
