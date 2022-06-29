import { FC } from "react";
import style from "./App.module.scss";

import Header from "../Header/Header";
import ItemAddForm from "../ItemAddForm/ItemAddForm";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";

const App: FC = () => {
  return (
    <div className={style.app}>
      <Header />
      <ItemAddForm />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

export default App;
