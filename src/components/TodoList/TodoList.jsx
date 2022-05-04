import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import style from "./TodoList.module.css";
import cn from "classnames";

const TodoList = ({ todoData }) => {
  return (
    <ul className={cn(style.TodoList)}>
      {todoData.map((task) => {
        const { id, ...taskInfo } = task;
        return (
          <li key={id} className={cn(style.listItem)}>
            <TodoListItem {...taskInfo} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
