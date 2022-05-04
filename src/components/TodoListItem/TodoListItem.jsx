import React from "react";
import style from "./TodoListItem.module.css";

const TodoListItem = ({ label, important = false }) => {
  return <span className={important && style.important}>{label}</span>;
};

export default TodoListItem;
