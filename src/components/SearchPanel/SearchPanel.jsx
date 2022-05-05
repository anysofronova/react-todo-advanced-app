import React, { useState } from "react";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import style from "./SearchPanel.module.css";
import cn from "classnames";
import { BsSearch } from "react-icons/bs";

const SearchPanel = ({ searchTask, filterTask, filter }) => {
  const [searchText, setSearchText] = useState("");
  const onChangeSearchText = (e) => {
    setSearchText(e);
    searchTask(e);
  };
  return (
    <div className={cn(style.SearchPanel)}>
      <label className={style.search}>
        <BsSearch />
        <input
          type="text"
          placeholder="search"
          className={style.input}
          onChange={(e) => onChangeSearchText(e.currentTarget.value)}
          value={searchText}
        />
      </label>
      <ItemStatusFilter filterTask={filterTask} filter={filter} />
    </div>
  );
};

export default SearchPanel;
