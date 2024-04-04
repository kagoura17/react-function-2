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
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
      closeModal();
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div>
        <div className="title-btn">
          <h1>exercices list</h1>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="forme-style">
            <h3>Add an exercise</h3>
            <form onSubmit={handleAddTodo}>
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Name of the exercise"
              />
              <br />
              <button type="submit">Add an exercise</button>
            </form>
          </div>
        </Modal>
        <div className="List">
          <ul className="liste">
            {todos.map((todo, index) => (
              <li key={index}>
                <div>
                  <span>{todo.text}</span>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteTodo(index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button className="modalBTN" onClick={openModal}>
            Add New Exercices
          </button>
        </div>
      </div>
    </>
  );
};

export default Model;
