import React, { useState } from "react";
import styles from "./createTaskModal.module.css";
import { CloseSvg } from "../../icones";
import { useTaskManager } from '../../providers/TaskContext';

function CreateTaskModal({ onClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addTask } = useTaskManager();

  const handleClose = () => {
    setTitle("");
    setDescription("");
    onClose();
  };

  const handleCreate = () => {
    if (title.trim()) {
      addTask({ title, description });
      handleClose();
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalHeaderTitle}>CREATE TASK</h2>
          <button onClick={handleClose} className={styles.modalHeaderButton}>
            <CloseSvg />
          </button>
        </div>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.modalTaskName}
          placeholder="Title"
        />
        <textarea
          className={styles.modalTaskDescription}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="7"
          placeholder="Description"
        ></textarea>

        <div className={styles.modalTaskManipulation}>
          <button onClick={handleClose} className={styles.modalTaskManipulationClose}>
            CLOSE
          </button>
          <button onClick={handleCreate} className={styles.modalTaskManipulationCreate}>
            CREATE
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateTaskModal;
