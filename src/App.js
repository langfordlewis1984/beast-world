import React, { useState } from "react";
import "./reset.css";
import "./App.css";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Modal from "./Components/Modal/Modal";
import Footer from "./Components/Footer/Footer";

import beastData from "./beastData.json";

function App() {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  function handleModal(beast) {
    setModal(!modal);
    setModalContent(beast);
  }

  function closeModal() {
    setModal(!modal);
    setModalContent({});
  }

  return (
    <div className="App">
      <Header />
      <Main beastData={beastData} handleModal={handleModal} />
      {modal && <Modal modalContent={modalContent} closeModal={closeModal} />}
      <Footer />
    </div>
  );
}

export default App;
