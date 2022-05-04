import React, { useState } from "react";
import style from "./ItemAddForm.module.css";
import cn from "classnames";

const ItemAddForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  const onAddTask = (e) => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={onAddTask}>
      <input
        type="text"
        className={cn(style.input)}
        placeholder={"new task"}
        value={task}
        onChange={(e) => setTask(e.currentTarget.value)}
      />
      <button className={cn(style.btn)}>Add new task</button>
    </form>
  );
};

export default ItemAddForm;
