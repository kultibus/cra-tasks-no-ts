import { useState } from "react";
import styles from "./app.module.scss";
import { Header } from "./components/Header/Header";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { Tasks } from "./components/Tasks/Tasks";
import { Modal } from "./components/UI/Modal/Modal";
import { RemoveTask } from "./components/UI/dialog/RemoveTask";
import { ModalContext } from "./context";

function App() {
  const [modalOpened, setModalOpened] = useState(false);

  const [modalType, setModalType] = useState("");

  const [taskToRemove, setTaskToRemove] = useState({});

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

  const removeTask = (task) => {
    setBoards(
      boards.map((board) => ({
        ...board,
        tasks: board.tasks.filter((t) => t.id !== task.id),
      }))
    );
  };

  const modal = () => {
    switch (modalType) {
      case "createTask":
        return (
          <Modal modalOpened={modalOpened} setModalOpened={setModalOpened}>
            <TaskForm
              onTaskCreate={onTaskCreate}
              newTask={newTask}
              setNewTask={setNewTask}
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
            />
          </Modal>
        );

      case "removeTask":
        return (
          <Modal modalOpened={modalOpened} setModalOpened={setModalOpened}>
            <RemoveTask />
          </Modal>
        );
    }
  };

  return (
    <div className={styles.tasksManager}>
      <ModalContext.Provider
        value={{
					removeTask,
          taskToRemove,
          setTaskToRemove,
          modalType,
          setModalType,
          modalOpened,
          setModalOpened,
        }}
      >
        <Header
          setModalType={setModalType}
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
        />
        <Tasks boards={boards} setBoards={setBoards} newTask={newTask} />

        {modalOpened && modal()}
      </ModalContext.Provider>
    </div>
  );
}

export default App;
