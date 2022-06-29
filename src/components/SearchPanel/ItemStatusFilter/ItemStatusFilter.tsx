import cn from "classnames";

import style from "./ItemStatusFilter.module.scss";
import { setSearchOption } from "../../../store/taskSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { FC } from "react";

const ItemStatusFilter: FC = () => {
  const option = useAppSelector((state) => state.taskSlice.filter);
  const dispatch = useAppDispatch();
  const onFilterTask = (e: string) =>
    dispatch(setSearchOption({ value: e, option: "filter" }));
  const buttons = ["All", "Active", "Done"];
  return (
    <div className={style.btnGroup}>
      {buttons.map((i) => (
        <button
          key={i}
          type="button"
          className={cn("btn", option === i ? style.checked : "")}
          onClick={(e) => onFilterTask(e.currentTarget.outerText)}
        >
          {i}
        </button>
      ))}
    </div>
  );
};

export default ItemStatusFilter;
