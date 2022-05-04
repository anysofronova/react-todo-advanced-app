import React from "react";
import ReactDOM from "react-dom/client";
import TodoList from "./components/TodoList/TodoList";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import AppHeader from "./components/AppHeader/AppHeader";

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
