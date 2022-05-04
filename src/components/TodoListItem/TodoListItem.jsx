import React from "react";
import style from "./TodoListItem.module.css";
import cn from "classnames";
import { BsExclamationLg, BsTrash } from "react-icons/bs";

const TodoListItem = ({ label, important = false }) => {
  return (
    <div className={cn(style.TodoListItem)}>
      <span className={cn(important && style.important, style.label)}>
        {label}
      </span>

      <button className={cn(style.btn, "btn")}>
        <BsExclamationLg />
      </button>
      <button className={cn(style.btn, "btn")}>
        <BsTrash />
      </button>
    </div>
  );
};

export default TodoListItem;
