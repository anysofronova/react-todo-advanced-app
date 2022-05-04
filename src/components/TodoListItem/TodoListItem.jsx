import React from "react";
import style from "./TodoListItem.module.css";
import cn from "classnames";
import { BsExclamationLg, BsTrash } from "react-icons/bs";
import * as PropTypes from "prop-types";

export default function TodoListItem(props) {
  const {
    label,
    id,
    important,
    done,
    deleteTask,
    toggleImportant,
    toggleDone,
  } = props;
  return (
    <div className={cn(style.TodoListItem)}>
      <span
        className={cn(
          important && style.important,
          done && style.done,
          style.label
        )}
        onClick={() => toggleDone(id)}
      >
        {label}
      </span>

      <button
        className={cn(style.btn, "btn")}
        onClick={() => toggleImportant(id)}
      >
        <BsExclamationLg />
      </button>
      <button className={cn(style.btn, "btn")} onClick={() => deleteTask(id)}>
        <BsTrash />
      </button>
    </div>
  );
}

TodoListItem.propTypes = {
  label: PropTypes.string,
  important: PropTypes.bool,
};
