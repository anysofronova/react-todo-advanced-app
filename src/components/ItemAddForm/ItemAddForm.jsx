import React, { useState } from "react";
import style from "./ItemAddForm.module.css";
import cn from "classnames";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

const ItemAddForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  const onAddTask = (e) => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };
  const onClear = () => {
    setTask("");
  };
  return (
    <form onSubmit={onAddTask} className={cn(style.form)}>
      <label>
        <AiOutlinePlus />
        <input
          type="text"
          className={cn(style.input)}
          placeholder={"New task"}
          value={task}
          onChange={(e) => setTask(e.currentTarget.value)}
        />
        <AiOutlineClose onClick={() => onClear()} />
      </label>

      <button className={cn(style.btn, "btn")}>Add</button>
    </form>
  );
};

export default ItemAddForm;
