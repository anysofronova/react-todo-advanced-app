import { FC } from "react";
import cn from "classnames";
import { BsExclamationLg, BsTrash } from "react-icons/bs";

import style from "./TodoListItem.module.scss";
import { ITask } from "../../../@types/ITask";
import { useAppDispatch } from "../../../hooks/redux";
import { deleteTask, toggleTaskOption } from "../../../store/taskSlice";

const TodoListItem: FC<ITask> = ({ label, id, important, done }) => {
  const dispatch = useAppDispatch();
  return (
    <div className={style.TodoListItem}>
      <span
        className={cn(
          important && style.important,
          done && style.done,
          style.label
        )}
        onClick={() => dispatch(toggleTaskOption({ id, option: "done" }))}
      >
        {label}
      </span>

      <button
        className={"btn"}
        onClick={() => dispatch(toggleTaskOption({ id, option: "important" }))}
      >
        <BsExclamationLg />
      </button>
      <button className={"btn"} onClick={() => dispatch(deleteTask(id))}>
        <BsTrash />
      </button>
    </div>
  );
};

export default TodoListItem;
