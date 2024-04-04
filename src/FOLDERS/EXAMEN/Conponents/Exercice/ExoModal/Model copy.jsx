import Modal from "react-modal";
import { useState } from "react";
import "./model.css";
const Model = () => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "350px",
        padding: "50px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div>

        <div className="title-btn">
          <h1>exercices list</h1>
          <button className="modalBTN" onClick={openModal}>
            Add New Exercices
          </button>
        </div>
        
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <div className="forme-style">
          <h3>Add an exercise</h3>
          <form>
            <input placeholder="Name of the exercice"/>
            <br />
            <button>Add an exercise</button>
          </form></div>
        </Modal>
      </div>
    </>
  );
};

export default Model;
