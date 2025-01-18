import React, { useState } from "react";
import styles from "./editModal.module.css";
import { CloseSvg } from "../../icones";
import { TaskState } from "../../providers/models";
import { useTaskManager } from "../../providers/TaskContext";

function EditModal({ onClose, createTask, task }) {
  const [title, setTitle] = useState(task.taskName || "");
  const [description, setDescription] = useState(task.description || "");
  const [selectedState, setSelectedState] = useState(task.state || "");
  const taskStates = Object.values(TaskState);
  const { updateTask, deleteTask, updateTaskState } = useTaskManager();

  const handleClose = () => {
    setTitle("");
    setDescription("");
    onClose();
  };

  const handleSaveChanges = () => {
    if (title.trim()) {
      updateTask(task.id, { ...task, taskName: title, description: description });
      if (task.state !== selectedState) updateTaskState(task.id, selectedState)
      handleClose();
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalHeaderTitle}>EDIT TASK</h2>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            className={styles.modalHeaderButton}>
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
          rows="5"
          placeholder="Description"
        ></textarea>

        <div className={styles.modalTaskStates}>
          {taskStates.map((state) => (
            <button
              key={state}
              className={`${styles.modalTaskStatesItem} ${selectedState === state ? styles.modalTaskStatesItemActive : ""}`}
              onClick={() => setSelectedState(state)}
            >
              {state}
            </button>
          ))}
        </div>

        <div className={styles.modalTaskManipulation}>
          <button onClick={() => deleteTask(task.id)} className={styles.modalTaskManipulationDelete}>
            DELETE TASK
          </button>
          <button onClick={handleClose} className={styles.modalTaskManipulationClose}>
            CLOSE
          </button>
          <button onClick={handleSaveChanges} className={styles.modalTaskManipulationSave}>
            SAVE CHANGES
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;