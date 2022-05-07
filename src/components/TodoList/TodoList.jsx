import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import style from "./TodoList.module.css";
import cn from "classnames";

const TodoList = ({
  todoData,
  deleteTask,
  toggleImportant,
  toggleDone,
  toDo,
  done,
}) => {
  return (
    <div>
      <h2 className={cn(style.info)}>
        {toDo} more to do, {done} done
      </h2>
      <ul className={cn(style.TodoList)}>
        {todoData.map((task) => {
          return (
            <li key={task.id} className={cn(style.listItem)}>
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
    </div>
  );
};

export default TodoList;
