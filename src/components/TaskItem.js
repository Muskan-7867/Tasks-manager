import React from "react";

const TaskItem = ({ task, toggleTaskCompletion, deleteTask, changePriority }) => {
  return (
    <li
      key={task.id}
      className={`flex justify-between items-center px-4 py-3 rounded-lg shadow-md transition-all duration-500 transform ${
        task.show
          ? "opacity-100 scale-100"
          : "opacity-0 scale-90"
      } ${
        task.completed
          ? "bg-green-100 border-l-4 border-green-400"
          : task.priority === "High"
          ? "bg-red-100 border-l-4 border-red-400"
          : task.priority === "Medium"
          ? "bg-yellow-100 border-l-4 border-yellow-400"
          : "bg-gray-100 border-l-4 border-gray-300"
      }`}
    >
      <span
        onClick={() => toggleTaskCompletion(task.id)}
        className={`flex-1 cursor-pointer ${
          task.completed ? "line-through text-gray-500" : "text-gray-800"
        } transition-all duration-300 ease-in-out`}
      >
        {task.title}
      </span>
      {/* Priority Dropdown */}
      <select
        value={task.priority}
        onChange={(e) => changePriority(task.id, e.target.value)}
        className="ml-4 border rounded-lg px-2 py-1 text-sm transition-all duration-300 ease-in-out hover:border-blue-400"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500 hover:text-red-700 transition-all duration-300 ease-in-out"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
