import { useState } from "react";
import styles from "./app.module.scss";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import Tasks from "./components/Tasks/Tasks";
import Modal from "./components/UI/modal/Modal";

function App() {
  const [modal, setModal] = useState(false);
  const [newTask, setNewTask] = useState();

  const closeOnEsc = (e) => {
    if (e.key === "Escape") {
      setModal(false);
    }
  };

  if (modal) document.addEventListener("keydown", closeOnEsc);
  else document.removeEventListener("keydown", closeOnEsc);

  const createTask = (newTask) => {
    setNewTask(newTask);
    setModal(false);
  };



  return (
    <div className={styles.tasksManager}>
      <Header modalState={modal} setModalState={setModal} />
      <Modal visible={modal} setVisible={setModal}>
        <TaskForm create={createTask} modal={modal} setModalState={setModal} />
      </Modal>
      <Tasks newTask={newTask} />
    </div>
  );
}

export default App;
