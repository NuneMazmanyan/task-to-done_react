import React, { useState } from "react";
import styles from "./header.module.css";
import CreateTaskModal from "../createTaskModal/CreateTaskModal";
import ReactModal from "react-modal";

function Header() {
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);

  const openModal = () => setIsCreateTaskModalOpen(true);
  const closeModal = () => setIsCreateTaskModalOpen(false);

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>TaskToDone</h1>
        <button onClick={openModal} className={styles.headerButton}>
          CREATE TASK
        </button>
      </div>
      <ReactModal
        isOpen={isCreateTaskModalOpen}
        onRequestClose={closeModal}
        style={ModalStyles}
        ariaHideApp={false}
      >
        <CreateTaskModal onClose={closeModal} />
      </ReactModal>
    </>
  );
}

const ModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    background: '#fff',
    padding: '20px',
    borderRadius: '30px',
    width: '800px'
  },
};

export default Header;
