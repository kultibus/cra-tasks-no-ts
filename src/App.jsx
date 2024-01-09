import { useState } from "react";
import styles from "./app.module.scss";
import { Header } from "./components/Header/Header";
import { CreateTask } from "./components/forms/CreateTask/CreateTask";
import { Tasks } from "./components/Tasks/Tasks";
import { Modal } from "./components/UI/Modal/Modal";
import { RemoveTask } from "./components/forms/DeleteTask/DeleteTask";
import { AppContext } from "./context";
import { EditTask } from "./components/forms/EditTask/EditTask";

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

  const createTask = () => {
    setBoards(
      boards.map((board, i) => {
        if (i === 0) {
          return {
            ...board,
            tasks: [...board.tasks, { ...newTask, id: Date.now() }],
          };
        }
        return board;
      })
    );
    setModalOpened(false);
  };

  const editTask = (task, title, description, date) => {
    setBoards(
      boards.map((board) => ({
        ...board,
        tasks: board.tasks.map((t) => {
          if (t.id === task.id) {
            return { ...task, title, description, date };
          }
          return t;
        }),
      }))
    );
    setModalOpened(false);
  };

  const deleteTask = (task) => {
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
            <CreateTask
              createTask={createTask}
              newTask={newTask}
              setNewTask={setNewTask}
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
            />
          </Modal>
        );

      case "deleteTask":
        return (
          <Modal modalOpened={modalOpened} setModalOpened={setModalOpened}>
            <RemoveTask />
          </Modal>
        );

      case "editTask":
        return (
          <Modal modalOpened={modalOpened} setModalOpened={setModalOpened}>
            <EditTask
              editTask={editTask}
              currentTask={currentTask}
              setCurrentTask={setCurrentTask}
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
        deleteTask,
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
