import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import style from "./App.module.css";
import cn from "classnames";

const App = () => {
  const todoData = [
    {
      label: "Drink Coffee",
      important: false,
      id: 1,
    },
    {
      label: "Build React App",
      important: true,
      id: 2,
    },
    {
      label: "Have a lunch",
      important: false,
      id: 3,
    },
  ];
  return (
    <div className={cn(style.App)}>
      <AppHeader toDo={1} done={3} />
      <SearchPanel />
      <TodoList todoData={todoData} />
    </div>
  );
};

export default App;
