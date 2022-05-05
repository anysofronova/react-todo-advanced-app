import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import style from "./TodoList.module.css";
import cn from "classnames";

const TodoList = ({ todoData, deleteTask, toggleImportant, toggleDone }) => {
  return (
    <ul className={cn(style.TodoList)}>
      {todoData.map((task) => {
        const { id } = task;
        return (
          <li key={id} className={cn(style.listItem)}>
            <TodoListItem
              {...task}
              deleteTask={deleteTask}
              toggleImportant={toggleImportant}
              toggleDone={toggleDone}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
