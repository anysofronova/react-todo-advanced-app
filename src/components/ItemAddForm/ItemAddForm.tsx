import { FC, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import cn from "classnames";

import style from "./ItemAddForm.module.scss";
import { useAppDispatch } from "../../hooks/redux";
import { addTask } from "../../store/taskSlice";

const ItemAddForm: FC = () => {
  const [task, setTask] = useState<string>("");
  const dispatch = useAppDispatch();
  const onAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addTask({
        label: task,
        id: uuidv4(),
        done: false,
        important: false,
      })
    );
    setTask("");
  };
  const onClear = () => {
    setTask("");
  };
  return (
    <form onSubmit={(e) => onAddTask(e)} className={cn(style.form)}>
      <label>
        <AiOutlinePlus />
        <input
          type="text"
          className={style.input}
          placeholder={"New task"}
          value={task}
          onChange={(e) => setTask(e.currentTarget.value)}
        />
        <AiOutlineClose onClick={() => onClear()} />
      </label>

      <button className={cn(style.btn, "btn")}>Add</button>
    </form>
  );
};

export default ItemAddForm;
