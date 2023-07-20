import React, { useState } from "react";
import "./reset.css";
import "./App.css";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Modal from "./Components/Modal/Modal";
import Footer from "./Components/Footer/Footer";

import data from "./beastData.json";

function App() {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [beastData, setBeastData] = useState(data);

  function handleModal(beast) {
    setModal(!modal);
    setModalContent(beast);
  }

  function closeModal() {
    setModal(!modal);
    setModalContent({});
  }

  function handleBeasts(event) {
    let beastNum = parseInt(event.target.value);
    console.log(beastNum);
    const filteredBeasts = data.filter((beast) => beast.horns === beastNum);
    event.target.value === ""
      ? setBeastData(data)
      : setBeastData(filteredBeasts);
  }

  return (
    <div className="App">
      <Header handleBeasts={handleBeasts} />
      <Main beastData={beastData} handleModal={handleModal} />
      {modal && <Modal modalContent={modalContent} closeModal={closeModal} />}
      <Footer />
    </div>
  );
}

export default App;
