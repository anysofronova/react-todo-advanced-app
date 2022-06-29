import { FC } from "react";
import style from "./TodoList.module.scss";

import { useAppSelector } from "../../hooks/redux";
import TodoListItem from "./TodoListItem/TodoListItem";

const TodoList: FC = () => {
  const todoData = useAppSelector((state) => state.taskSlice.searchList);
  return (
    <ul className={style.TodoList}>
      {todoData.map((task) => (
        <li key={task.id} className={style.listItem}>
          <TodoListItem {...task} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
