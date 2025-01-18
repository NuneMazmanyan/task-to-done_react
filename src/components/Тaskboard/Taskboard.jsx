import React from "react";
import styles from "./taskBoard.module.css";
import Header from "../Header/Header";
import Task from "../Тask/Task";
import { useTaskManager } from "../../providers/TaskContext";
import { TaskState } from "../../providers/models";

function TaskBoard() {
  const { tasks, updateTask, deleteTask } = useTaskManager();
  const taskStates = Object.values(TaskState);

  let globalIndex = 1;

  return (
    <div className={styles.taskboard}>
      <Header />
      <div className={styles.taskboardBoard}>
        {taskStates.map((state) => {
          const stateTasks = tasks.filter((task) => task.state === state);

          return (
            <div className={styles.taskboardColumn} key={state}>
              <h3 className={styles.taskboardColumnTitle}>{state}</h3>
              <div className={styles.taskboardColumnList}>
                {stateTasks.length === 0 ? (
                  <div className={styles.taskboardColumnListEmpty}>
                    Nothing left in this column :)
                  </div>
                ) : (
                  stateTasks.map((task) => (
                    <div key={task.id} className={styles.task}>
                      <Task
                        task={task}
                        taskIndex={globalIndex++}
                        onUpdate={(updatedTask) => updateTask(task.id, updatedTask)}
                        onDelete={() => deleteTask(task.id)}
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TaskBoard;
