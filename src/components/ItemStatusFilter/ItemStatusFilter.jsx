import React from "react";
import cn from "classnames";
import style from "./ItemStatusFilter.module.css";

export default function ItemStatusFilter({ filterTask, filter }) {
  const onFilterTask = (e) => {
    e.preventDefault();
    filterTask(e.target.outerText);
  };
  const buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];
  return (
    <div className={cn(style.btnGroup)}>
      {buttons.map((i) => (
        <button
          key={i.name}
          type="button"
          className={cn(
            style.btn,
            "btn",
            filter === i.label ? style.checked : ""
          )}
          onClick={(e) => onFilterTask(e)}
        >
          {i.label}
        </button>
      ))}
    </div>
  );
}
