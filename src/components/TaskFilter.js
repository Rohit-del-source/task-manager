import React from 'react';

const TaskFilter = ({ filter, setFilter }) => {
    return (
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
        </select>
    );
};

export default TaskFilter;