import React, { createContext, useContext, useState } from 'react';
import { TaskState } from './models';

const TaskContext = createContext(null);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, taskName: "TASK TITLE 1", state: TaskState.TODO, description: "task1 is in to do state yet, but this is just a description, so it wont affect on state" },
    { id: 2, taskName: "TASK TITLE 2", state: TaskState.TODO, description: "task1 is in to do state yet, but this is just a description, so it wont affect on state" },
    { id: 3, taskName: "TASK TITLE 3", state: TaskState.IN_PROGRESS, description: "task1 is in to do state yet, but this is just a description, so it wont affect on state" },
    { id: 4, taskName: "TASK TITLE 4", state: TaskState.TESTING, description: "task1 is in to do state yet, but this is just a description, so it wont affect on state" },
    { id: 5, taskName: "TASK TITLE 5", state: TaskState.DONE, description: "task1 is in to do state yet, but this is just a description, so it wont affect on state" },
    { id: 6, taskName: "TASK TITLE 6", state: TaskState.TODO, description: "task1 is in to do state yet, but this is just a description, so it wont affect on state" },
    { id: 7, taskName: "TASK TITLE 7", state: TaskState.DONE, description: "task1 is in to do state yet, but this is just a description, so it wont affect on state" }
  ]);

  const addTask = (task) => {
    const newTask = {
      id: Math.max(...tasks.map(t => t.id), 0) + 1,
      taskName: task.title,
      description: task.description,
      state: TaskState.TODO
    };
    setTasks(prev => [...prev, newTask]);
  };

  const updateTask = (taskId, updatedTask) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      )
    );
  };

  const updateTasks = (updatedTasks) => {
    setTasks(updatedTasks);
  };


  const deleteTask = (taskId) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  const updateTaskState = (taskId, newState) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId ? { ...task, state: newState } : task
      )
    );
  };

  const value = {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    updateTaskState,
    updateTasks
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTaskManager = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskManager must be used within a TaskProvider');
  }
  return context;
};