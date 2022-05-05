import React, { useState } from "react";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import style from "./SearchPanel.module.css";
import cn from "classnames";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

const SearchPanel = ({ searchTask, filterTask, filter }) => {
  const [searchText, setSearchText] = useState("");
  const onChangeSearchText = (e) => {
    setSearchText(e);
    searchTask(e);
  };
  const onClear = () => {
    setSearchText("");
    searchTask("");
  };
  return (
    <div className={cn(style.SearchPanel)}>
      <label>
        <AiOutlineSearch />
        <input
          type="text"
          placeholder="Search"
          className={style.input}
          onChange={(e) => onChangeSearchText(e.currentTarget.value)}
          value={searchText}
        />
        <AiOutlineClose onClick={() => onClear()} />
      </label>
      <ItemStatusFilter filterTask={filterTask} filter={filter} />
    </div>
  );
};

export default SearchPanel;
