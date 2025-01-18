import React, { useState } from 'react';
import styles from './task.module.css';
import { EditSvg } from '../../icones';
import ReactModal from "react-modal";
import EditModal from '../EditModal/EditModal';

function Task({ task, taskIndex }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openModal = () => setIsEditModalOpen(true);
  const closeModal = () => setIsEditModalOpen(false);

  return (
    <div className={styles.task}>
      <p className={styles.taskItemIndex}>{taskIndex}</p>
      <p className={styles.taskItemName}>{task.taskName}</p>

      <button className={styles.taskItemEditButton} onClick={openModal}>
        <EditSvg />
      </button>

      <ReactModal
        isOpen={isEditModalOpen}
        onRequestClose={closeModal}
        style={ModalStyles}
        ariaHideApp={false}
      >
        <EditModal onClose={closeModal} task={task} />
      </ReactModal>
    </div>
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

export default Task;
