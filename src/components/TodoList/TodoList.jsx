import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = ({ todoData }) => {
  return (
    <ul>
      {todoData.map((task) => {
        const { id, ...taskInfo } = task;
        return (
          <li key={id}>
            <TodoListItem {...taskInfo} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
