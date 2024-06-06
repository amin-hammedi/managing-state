import React from "react";
import { FaCheck, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TaskItem = ({ task, onDeleteTask, onCompleteTask, onEditTask }) => {
  return (
    <div className={task.isDone ? "todoCardComplete" : "todoCard"}>
      <h1>{task.action}</h1>
      <p>{task.description}</p>
      <div className="cons">
        <FaEdit className="edit" onClick={() => onEditTask(task)} />{" "}
        <FaCheck
          className={task.isDone ? "complete" : "notComplete"}
          onClick={() => onCompleteTask(task.id)}
        />
        <MdDelete className="trash" onClick={() => onDeleteTask(task.id)} />
      </div>
    </div>
  );
};

export default TaskItem;
