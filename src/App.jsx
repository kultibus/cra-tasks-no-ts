import React, { useState } from "react";
import styles from "./app.module.scss";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import Tasks from "./components/Tasks/Tasks";
import Modal from "./components/UI/modal/Modal";
import { closeOnEsc } from "./utils/closeOnEsc";

function App() {
  const [modal, setModal] = useState(false);
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

  const [inputValidate, setInputValidate] = useState(false);

  closeOnEsc(modal, setModal);

  const onTaskCreate = () => {
    setBoards([
      {
        ...boards[0],
        tasks: [...boards[0].tasks, { ...newTask, id: Date.now() }],
      },
      boards[1],
      boards[2],
    ]);
    setModal(false);
  };

  // const createTask = (newTask) => {
  //   setNewTask(newTask);
  //   setModal(false);
  // };

  return (
    <div className={styles.tasksManager}>
      <Header modalState={modal} setModalState={setModal} />
      <Modal visible={modal} setVisible={setModal}>
        <TaskForm
          inputValidate={inputValidate}
          setInputValidate={setInputValidate}
          onTaskCreate={onTaskCreate}
          newTask={newTask}
          setNewTask={setNewTask}
          // createTask={createTask}
          modal={modal}
          setModalState={setModal}
        />
      </Modal>
      <Tasks boards={boards} setBoards={setBoards} newTask={newTask} />
    </div>
  );
}

export default App;
