import React from "react";
import cn from "classnames";
import style from "./AppHeader.module.css";

const AppHeader = ({ toDo, done }) => {
  return (
    <div className={cn(style.AppHeader)}>
      <h1>My ToDoApp List</h1>
      <h2>
        {toDo} more to do, {done} done
      </h2>
    </div>
  );
};

export default AppHeader;
