import { FC } from "react";
import style from "./Header.module.scss";

import { useAppSelector } from "../../hooks/redux";

const Header: FC = () => {
  const done = useAppSelector((state) => state.taskSlice.doneCount);
  const toDo = useAppSelector((state) => state.taskSlice.todoCount);
  return (
    <div className={style.appHeader}>
      <h1>My ToDoApp List</h1>
      <h2>
        {toDo} more to do, {done} done
      </h2>
    </div>
  );
};

export default Header;
