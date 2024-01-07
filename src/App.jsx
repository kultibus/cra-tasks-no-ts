import { useState } from "react";
import styles from "./app.module.scss";
import { Header } from "./components/Header/Header";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { Tasks } from "./components/Tasks/Tasks";
import { Modal } from "./components/UI/Modal/Modal";
import { RemoveTask } from "./components/UI/dialog/RemoveTask";
import { AppContext } from "./context";

function App() {
  const [modalOpened, setModalOpened] = useState(false);

  const [modalType, setModalType] = useState("");

  const [currentTask, setCurrentTask] = useState({});

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

  // const onTaskCreate = () => {
  //   setBoards(
  //     boards.map((board, i) => {
  //       if (i === 0) {
  //         return 'hello'
  //       }
  //     })
  //   );
  //   setModalOpened(false);
  // };

	console.log(boards)

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

      case "editTask":
        return (
          <Modal modalOpened={modalOpened} setModalOpened={setModalOpened}>
            <TaskForm
              currentTask={currentTask}
              onTaskCreate={onTaskCreate}
              newTask={newTask}
              setNewTask={setNewTask}
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
            />
          </Modal>
        );
    }
  };

  return (
    <AppContext.Provider
      value={{
        removeTask,
        currentTask,
        setCurrentTask,
        modalType,
        setModalType,
        modalOpened,
        setModalOpened,
      }}
    >
      <div className={styles.App}>
        <Header
          setModalType={setModalType}
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
        />
        <Tasks boards={boards} setBoards={setBoards} newTask={newTask} />

        {modalOpened && modal()}
      </div>
    </AppContext.Provider>
  );
}

export default App;
