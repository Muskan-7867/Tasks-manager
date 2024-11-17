import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask, changePriority }) => {
  const priorityOrder = { Low: 1, Medium: 2, High: 3 };
  const sortedTasks = tasks.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);

  return (
    <ul className="space-y-3">
      <TransitionGroup>
        {sortedTasks.map((task) => (
          <CSSTransition
            key={task.id}
            timeout={300}
            classNames="task"
          >
            <TaskItem
              task={task}
              toggleTaskCompletion={toggleTaskCompletion}
              deleteTask={deleteTask}
              changePriority={changePriority}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default TaskList;
