import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Modal from "./components/UI/Modal/Modal";
import Button from "./components/UI/Button/Button";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Header setVisibility={setModal} />
      <Modal visible={modal} setVisible={setModal} />
    </div>
  );
}

export default App;
