import { useState } from "react";
import styles from "./app.module.scss";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import Tasks from "./components/Tasks/Tasks";
import Modal from "./components/UI/modal/Modal";
import { close } from "./utils/closeOnEsc";

function App() {
  const [modal, setModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  if (modal) document.addEventListener("keydown", close);
  else document.removeEventListener("keydown", close);

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setModal(false);
  };

  return (
    <div className={styles.tasksManager}>
      <Header modalState={modal} setModalState={setModal} />
      <Modal visible={modal} setVisible={setModal}>
        <TaskForm create={createTask} setModalState={setModal} />
      </Modal>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
