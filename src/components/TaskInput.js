import React from "react";

const TaskInput = ({ newTask, setNewTask, addTask }) => {
  return (
    <div className="flex mb-4">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ease-in-out transform hover:scale-105"
      />
      <button
        onClick={addTask}
        className="ml-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Add
      </button>
    </div>
  );
};

export default TaskInput;
