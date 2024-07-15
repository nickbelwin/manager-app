// TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, handleCompleteTask }) => {
  return (
    <div className="w-1/4 p-4 bg-gray-100 h-screen overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      {tasks.map((task, index) => (
        <Task key={index} task={task} handleCompleteTask={handleCompleteTask} />
      ))}
    </div>
  );
};

export default TaskList;