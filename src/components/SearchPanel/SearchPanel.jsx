import React from "react";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import style from "./SearchPanel.module.css";
import cn from "classnames";
import { BsSearch } from "react-icons/bs";

const SearchPanel = () => {
  return (
    <div className={cn(style.SearchPanel)}>
      <label className={style.search}>
        <BsSearch />
        <input type="text" placeholder="search" className={style.input} />
      </label>
      <ItemStatusFilter />
    </div>
  );
};

export default SearchPanel;
