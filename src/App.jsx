import './App.css';
import React from 'react';
import TaskBoard from './components/Тaskboard/Taskboard';
import { TaskProvider } from './providers/TaskContext';

function App() {
  return (
    <TaskProvider>
      <TaskBoard />
    </TaskProvider>
  );
}

export default App;