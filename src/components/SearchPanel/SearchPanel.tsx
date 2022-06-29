import { ChangeEvent, FC, useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

import style from "./SearchPanel.module.scss";
import { useAppDispatch } from "../../hooks/redux";
import { setSearchOption } from "../../store/taskSlice";
import ItemStatusFilter from "./ItemStatusFilter/ItemStatusFilter";

const SearchPanel: FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const dispatch = useAppDispatch();
  const onChangeSearchText = (e: string) => {
    setSearchText(e);
    dispatch(setSearchOption({ value: e, option: "term" }));
  };
  const onClear = () => {
    setSearchText("");
    dispatch(setSearchOption({ value: "", option: "term" }));
  };
  return (
    <div className={style.searchPanel}>
      <label>
        <AiOutlineSearch />
        <input
          type="text"
          placeholder="Search"
          className={style.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChangeSearchText(e.currentTarget.value)
          }
          value={searchText}
        />
        <AiOutlineClose onClick={() => onClear()} />
      </label>
      <ItemStatusFilter />
    </div>
  );
};

export default SearchPanel;
