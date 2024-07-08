import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('All');

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const updateTaskStatus = (index, status) => {
        const newTasks = [...tasks];
        newTasks[index].status = status;
        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'All') return true;
        return task.status === filter;
    });

    return (
        <div className="App">
            <h1>Task Manager</h1>
            <TaskForm addTask={addTask} />
            <TaskFilter filter={filter} setFilter={setFilter} />
            <TaskList tasks={filteredTasks} updateTaskStatus={updateTaskStatus} deleteTask={deleteTask} />
        </div>
    );
};

export default App;
