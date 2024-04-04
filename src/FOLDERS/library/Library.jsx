import { AiFillAndroid } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const Library = () => {
  const notify = () => {
    toast.success("niiiiiiiice", { position: "top-right" });
  };
  const notifyToast2 = () => {
    toast.error("you fail", { position: "top-left" });
  };
  const dismissAll = () => toast.dismiss();
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "green";
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <AiFillAndroid size={100} />
      <div>
        <button onClick={notify}>Notify!</button>
        <button onClick={notifyToast2}>Show Toast 2</button>
        <div onClick={dismissAll}></div>
        <ToastContainer />
      </div>
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Welcom</h2>
          <button onClick={closeModal}>close</button>
          <div>login</div>
          <form>
            <input />
            <button>validate</button>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default Library;
